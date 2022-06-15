/**
 *
 * MIT License
 *
 * Copyright 2022 Opinew, Ltd.
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

function injectAssets() {
  const BASE_PATH = 'https://cdn.opinew.com/shop-widgets-components/v1/static/'

  try {
    if (!document.querySelector('script[src*="shop-widgets-components/v1/static/"]')) {
      const scr = document.createElement('script')

      scr.src = BASE_PATH + 'js/index.js'
      const css = document.createElement('link')

      css.rel = 'stylesheet'
      css.href = BASE_PATH + 'css/index.css'
        ;[scr, css].forEach(node => document.head.appendChild(node))
    }
  } catch (_) { }
}

/**
 * @typedef { import("lib/types").ShopifyProduct } ShopifyProduct
 * @typedef {{
 *   product?: ShopifyProduct
 *   domain?: string
 *   type: 'product'| 'floating' | 'all' | 'carousel' | 'request' | 'product-stars' | 'collection-stars'
 * }} OpinewProps
 *
 * @param { OpinewProps } props
 **/
const OpinewProductPlugin = ({ product, domain, type, ...args }) => {
  injectAssets()
  const { externalId } = product || {}

  return <opinew-plugin product-id={externalId} domain={domain} type={type} {...args} />
}

export default OpinewProductPlugin
