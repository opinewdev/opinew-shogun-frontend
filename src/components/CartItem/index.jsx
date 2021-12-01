/**
 *
 * MIT License
 *
 * Copyright 2021 Shogun, Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom
 * the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 * DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE
 * OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
import * as React from 'react'
import { useMultiStyleConfig } from '@chakra-ui/react'
import { useCartActions } from 'frontend-checkout'
import { useGoogleTagManagerActions } from '@frontend-sdk/google-tag-manager'
import { useIsMounted, useNormalizedCheckoutProduct, usePlatform } from 'Components/Hooks'
import {
  denormalizeCartActionsId,
  denormalizeCartRemoveId,
  denormalizeCartUpdateItem,
  formatMoney,
} from 'Components/Utils'
import Flex from 'Components/Flex'
import Grid from 'Components/Grid'
import GridItem from 'Components/GridItem'
import Heading from 'Components/Heading'
import Icon from 'Components/Icon'
import IconButton from 'Components/IconButton'
import Image from 'Components/Image'
import Link from 'Components/Link'
import NumberInput from 'Components/NumberInput'
import Text from 'Components/Text'

const PRODUCT_MAX_QUANTITY = 150
const PRODUCT_MIN_QUANTITY = 1

/**
 * @typedef { import('lib/types').CheckoutProduct } CheckoutProduct
 * @typedef {{
 *  product: CheckoutProduct
 *  inDrawer?: boolean
 * }} CartItemProps
 *
 * @param { CartItemProps } props
 */
const CartItem = ({ product: checkoutProduct, inDrawer }) => {
  const product = useNormalizedCheckoutProduct(checkoutProduct)

  if (!product) throw new Error(`Expected product but got ${product}.`)

  const { title, subtitle, price, quantity, imageUrl, slug } = product
  const productUrl = slug ? `/products/${slug}` : '#'

  const { trackRemoveFromCartEvent } = useGoogleTagManagerActions()
  const [platform] = usePlatform()
  const isMounted = useIsMounted()
  const {
    getProductQuantity,
    getProductMaxOrder,
    getProductMinOrder,
    isProductAvailableForSale,
    removeItems,
    updateItems,
  } = useCartActions()

  const [soldOut, setSoldOut] = React.useState(false)
  const [maxQuantity, setMaxQuantity] = React.useState(PRODUCT_MAX_QUANTITY)
  const [minQuantity, setMinQuantity] = React.useState(PRODUCT_MIN_QUANTITY)

  const itemId = denormalizeCartActionsId({ product, platform })

  React.useEffect(() => {
    if (!itemId) return

    async function setIsProductAvailableForSale() {
      const available = await isProductAvailableForSale({ id: itemId })

      if (!isMounted.current) return

      setSoldOut(!available)
    }

    async function setProductQuantity() {
      const quantity = await getProductQuantity({ id: itemId })
      const maxQuantity = await getProductMaxOrder({ id: itemId })
      const minQuantity = await getProductMinOrder({ id: itemId })

      if (!isMounted.current) return

      setMaxQuantity(maxQuantity || quantity || PRODUCT_MAX_QUANTITY)
      setMinQuantity(minQuantity || PRODUCT_MIN_QUANTITY)
    }

    setIsProductAvailableForSale()
    setProductQuantity()
  }, [
    getProductQuantity,
    getProductMaxOrder,
    getProductMinOrder,
    isProductAvailableForSale,
    isMounted,
    itemId,
  ])

  /**
   * @param {string} _
   * @param {number} quantityAsNumber
   */
  const onChangeItemQuantity = (_, quantityAsNumber) => {
    const item = denormalizeCartUpdateItem({
      product,
      quantity: quantityAsNumber,
      platform,
    })

    if (item) updateItems(item)
  }

  const onClickRemoveItem = () => {
    const removeId = denormalizeCartRemoveId({
      product,
      platform,
    })

    if (!removeId) return

    removeItems(removeId)
    trackRemoveFromCartEvent([product])
  }

  const styles = useMultiStyleConfig('CartItem', { inDrawer, soldOut })

  return (
    <Grid
      sx={styles.grid}
      templateAreas={{
        base: "'thumbnail name remove-button' 'thumbnail price price'",
        md: inDrawer ? undefined : "'thumbnail name price remove-button'",
      }}
      templateColumns={{
        base: '5rem 1fr 2rem',
        md: '7.5rem 6fr 3fr 1fr',
      }}
    >
      <GridItem gridArea="thumbnail">
        <Link href={productUrl}>
          <Image src={imageUrl} alt="" htmlWidth="180" htmlHeight="120" />
        </Link>
      </GridItem>

      <GridItem gridArea="name">
        <Link href={productUrl}>
          <Heading as="h3" size="sm" sx={styles.heading}>
            {title}
          </Heading>
          {subtitle && <Text sx={styles.textSubtitle}>{subtitle}</Text>}
        </Link>
        {soldOut && <Text sx={styles.textSoldOut}>Sold Out</Text>}
      </GridItem>

      <GridItem gridArea="price" sx={styles.gridItem}>
        <Flex sx={styles.flex}>
          <Text sx={styles.textPrice}>{formatMoney({ money: price })}</Text>
          <NumberInput
            defaultValue={quantity}
            isDisabled={!!soldOut}
            max={maxQuantity}
            min={minQuantity}
            onChange={onChangeItemQuantity}
            containerProps={{
              maxW: 80,
              minW: 28,
              mb: 2,
              ml: 10,
            }}
            inputProps={{
              'aria-label': 'Product quantity',
              size: 'xs',
            }}
            buttonProps={{
              size: 'xs',
              height: 'full',
            }}
          />
          <Text sx={styles.textTotalPrice}>{formatMoney({ money: Number(price) * quantity })}</Text>
        </Flex>
      </GridItem>

      <GridItem gridArea="remove-button" sx={styles.gridItemLast}>
        <IconButton
          icon={<Icon icon="CloseIcon" />}
          aria-label={`Remove ${title} from cart`}
          sx={styles.iconButton}
          onClick={onClickRemoveItem}
        />
      </GridItem>
    </Grid>
  )
}

export default CartItem
