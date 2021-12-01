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
import { forwardRef } from '@chakra-ui/react'
import { useCartActions } from 'frontend-checkout'
import { useGoogleTagManagerActions } from '@frontend-sdk/google-tag-manager'
import { useIsMounted, usePlatform } from 'Components/Hooks'
import { denormalizeCartActionsId } from 'Components/Utils'
import Button from 'Components/Button'

const AVAILABLE_FOR_SALE_TEXT_DEFAULT = 'Add to Cart'
const OUT_OF_STOCK_TEXT_DEFAULT = 'Sold out'
const MISSING_REQUIRED_FIELD_TEXT = 'All required options must be selected'

/**
 * @typedef { import("lib/types").Product } Product
 * @typedef { import("lib/types").ProductVariant } ProductVariant
 * @typedef { import("Components/Button").ButtonProps } ButtonProps
 * @typedef {{
 *  product: Product
 *  productVariant?: ProductVariant
 *  quantity: number
 *  isFullWidth?: boolean
 *  availableForSaleText?: string
 *  outOfStockText?: string
 *  modifiers?: { [key:number]: { value: number | undefined, required: boolean } }
 * }} AddToCartButtonProps
 *
 * @param { AddToCartButtonProps & Omit<ButtonProps, 'children'> } props
 * @param { React.LegacyRef<HTMLButtonElement> } ref
 */
const AddToCartButton = (props, ref) => {
  const {
    product,
    productVariant,
    quantity,
    availableForSaleText,
    outOfStockText,
    modifiers,
    ...rest
  } = props

  const buttonEnabledText = availableForSaleText || AVAILABLE_FOR_SALE_TEXT_DEFAULT
  const buttonDisabledText = outOfStockText || OUT_OF_STOCK_TEXT_DEFAULT

  const { addItems, isProductAvailableForSale, showCart } = useCartActions()
  const { trackAddToCartEvent } = useGoogleTagManagerActions()
  const isMounted = useIsMounted()
  const [platform] = usePlatform()

  const [isDisabled, setDisabled] = React.useState(false)

  const optionSelections = React.useMemo(
    () =>
      modifiers
        ? Object.entries(modifiers)
            .map(([key, { value }]) => ({
              optionId: Number(key),
              optionValue: value,
            }))
            .filter(({ optionValue }) => optionValue !== undefined)
        : undefined,
    [modifiers],
  )

  const isInvalid = React.useMemo(
    () =>
      modifiers &&
      Object.values(modifiers).some(({ value, required }) => required && value === undefined),
    [modifiers],
  )

  const itemId = denormalizeCartActionsId({ product, productVariant, platform })

  React.useEffect(() => {
    if (!itemId) return

    async function setIsProductAvailableForSale() {
      const available = await isProductAvailableForSale({ id: itemId })

      if (!isMounted.current) return

      setDisabled(!available)
    }

    setIsProductAvailableForSale()
  }, [isProductAvailableForSale, isMounted, itemId])

  const clickHandler = () => {
    if (!itemId) {
      throw new Error('The itemId variable is required but was not specified.')
    }

    addItems({
      id: itemId,
      quantity,
      optionSelections,
    })
    trackAddToCartEvent([product])
    showCart()
  }

  return (
    <Button
      ref={ref}
      disabled={isDisabled || isInvalid}
      onClick={clickHandler}
      isFullWidth={true}
      {...rest}
    >
      {isDisabled
        ? buttonDisabledText
        : isInvalid
        ? MISSING_REQUIRED_FIELD_TEXT
        : buttonEnabledText}
    </Button>
  )
}

export default forwardRef(AddToCartButton)
