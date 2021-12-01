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
import { useGoogleTagManagerActions } from '@frontend-sdk/google-tag-manager'

import { useNormalizedProduct } from 'Components/Hooks'
import AddToCartButton from 'Components/AddToCartButton'
import Carousel from 'Components/Carousel'
import Container from 'Components/Container'
import Divider from 'Components/Divider'
import Flex from 'Components/Flex'
import FormControl from 'Components/FormControl'
import FormLabel from 'Components/FormLabel'
import Heading from 'Components/Heading'
import Icon from 'Components/Icon'
import List from 'Components/List'
import ListItem from 'Components/ListItem'
import NumberInput from 'Components/NumberInput'
import Select from 'Components/Select'
import Text from 'Components/Text'

/**
 * @typedef { import("lib/types").ProductVariant } ProductVariant
 * @typedef { {[key:number]: { value: number | undefined, required: boolean } } }  SelectedModifiers
 * @typedef { import("lib/types").ProductModifier }  modifier
 */

/**
 * @typedef { import("lib/types").CmsProduct } CmsProduct
 * @typedef {{
 *   product?: CmsProduct
 * }} ProductBoxProps
 *
 * @param { ProductBoxProps } props
 */
const ProductBox = ({ product: cmsProduct }) => {
  const product = useNormalizedProduct(cmsProduct)
  const { modifiers, name, variants, media, description = '' } = product || {}

  /** @type { [SelectedModifiers | undefined, React.Dispatch<React.SetStateAction<SelectedModifiers | undefined>>] } */
  const [selectedModifiers, setSelectedModifiers] = React.useState(() =>
    modifiers
      ? modifiers.reduce((/** @type { SelectedModifiers } */ state, modifier) => {
          const defualtOptionValue = modifier.optionValues.find(
            ({ isDefault }) => isDefault === true,
          )

          state[modifier.id] = {
            value: defualtOptionValue ? defualtOptionValue.id : undefined,
            required: modifier.required,
          }

          return state
        }, {})
      : undefined,
  )

  const [productQuantity, setProductQuantity] = React.useState(1)
  /** @type { [ProductVariant | undefined, React.Dispatch<React.SetStateAction<ProductVariant | undefined>>] } */
  const [currentVariant, setCurrentVariant] = React.useState()

  const { trackProductDetailViewEvent } = useGoogleTagManagerActions()

  React.useEffect(() => {
    if (!cmsProduct) return

    trackProductDetailViewEvent([cmsProduct])
  }, [cmsProduct, trackProductDetailViewEvent])

  React.useEffect(() => {
    const defaultVariant = product && product.variants && product.variants[0]

    if (!defaultVariant) return

    setCurrentVariant(defaultVariant)
  }, [product])

  if (!product) return null

  const modifierOptions =
    modifiers &&
    modifiers.map(({ optionValues, ...rest }) => ({
      ...rest,
      options: optionValues.map(({ id, isDefault, label }) => ({
        isDefault,
        value: id,
        text: label,
      })),
    }))

  const options =
    variants &&
    variants.map((/** @type { ProductVariant } */ variant) => ({
      value: variant.storefrontId,
      text: variant.name,
    }))

  /**
   * @param { string } quantityAsString
   * @param { number } quantityAsNumber
   */
  const handleProductQuantity = (quantityAsString, quantityAsNumber) => {
    setProductQuantity(quantityAsNumber)
  }

  /**
   * @param { React.ChangeEvent<HTMLSelectElement> } event
   */
  const handleVariantsSelect = event => {
    const selectedVariant =
      variants &&
      variants.find(
        (/** @type { ProductVariant } */ variant) =>
          variant.storefrontId === event.currentTarget.value,
      )

    if (!selectedVariant) return

    setCurrentVariant(selectedVariant)
  }

  const handleOptionSelect =
    (/** @type {number}*/ optionId) =>
    (/** @type {React.ChangeEvent<HTMLSelectElement>}*/ event) => {
      setSelectedModifiers(previousModifiers => {
        if (previousModifiers) {
          const updated = { ...previousModifiers }

          updated[optionId].value = event.target.value ? Number(event.target.value) : undefined

          return updated
        }

        return previousModifiers
      })
    }

  return (
    <Container constrainContent as="section" variant="section-wrapper">
      <Flex flexDirection={{ base: 'column', lg: 'row' }} pt={10}>
        <Container w={{ base: '100%', lg: '65%' }}>
          <Carousel media={media} />
        </Container>

        <Container w={{ base: '100%', lg: '35%' }}>
          <Heading as="h1" size="lg" mb="3">
            {name}
          </Heading>

          <Text as="strong" display="block" fontSize="lg" mb="3">
            ${currentVariant && currentVariant.price}
          </Text>

          <Container
            mb={{ base: '5', md: '8' }}
            dangerouslySetInnerHTML={{ __html: description }}
          />

          <Divider />

          {variants && (
            <Container mt={4} as={FormControl} id="product-variants">
              <FormLabel>Variants</FormLabel>
              <Select options={options} onChange={handleVariantsSelect} />
            </Container>
          )}

          {modifierOptions &&
            modifierOptions.map(({ displayName, id, required, options }) => (
              <FormControl
                mt={4}
                key={`${displayName}-${id}`}
                id={`${displayName}-${id}`}
                isRequired={required}
              >
                <FormLabel textTransform="capitalize">{displayName}</FormLabel>
                <Select
                  options={options}
                  onChange={event => handleOptionSelect(id)(event)}
                  placeholder={`Select ${displayName}`}
                />
              </FormControl>
            ))}

          <Container mt={4} as={FormControl} id="product-quantity">
            <FormLabel>Quantity</FormLabel>
            <NumberInput
              inputProps={{ 'aria-label': 'Product quantity' }}
              onChange={handleProductQuantity}
            />
          </Container>

          <Container mt={{ base: '5', md: '8' }} mb={{ base: '5', md: '10' }}>
            <AddToCartButton
              product={product}
              productVariant={currentVariant}
              quantity={productQuantity}
              modifiers={selectedModifiers}
            />
          </Container>

          <Container variant="solid">
            <List>
              <ListItem mb={3}>
                <Icon icon="ArrowRightIcon" mr="2" /> Free shipping + returns
              </ListItem>
              <ListItem mb={3}>
                <Icon icon="CheckIcon" mr="2" /> Extended warranty
              </ListItem>
              <ListItem>
                <Icon icon="QuestionOutlineIcon" mr="2" /> We’re here for you 24/7
              </ListItem>
            </List>
          </Container>
        </Container>
      </Flex>
    </Container>
  )
}

export default ProductBox
