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
import { useNormalizedProduct } from 'Components/Hooks'
import * as React from 'react'

/**
 * @typedef { import("lib/types").ShopifyProduct } ShopifyProduct
 * @typedef {{
 *   product?: ShopifyProduct
 * }} ProductBoxProps
 *
 * @param { ProductBoxProps } props
 **/
const OpinewProductPlugin = ({ product: shopifyProduct }) => {
  const product = useNormalizedProduct(shopifyProduct)
  const { name, slug, description, id } = product || {}

  return (
    <div>
      <h4>Opinew test section</h4>
      <p>{name}</p>
      <p>{slug}</p>
      <p>{description}</p>
      <p>{id}</p>
      <p>{(product || {}).id}</p>
    </div>
  )
}

export default OpinewProductPlugin
