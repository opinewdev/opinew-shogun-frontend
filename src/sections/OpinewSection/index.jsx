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
import Container from 'Components/Container'
import OpinewPlugin from 'Components/OpinewPlugin'
import * as React from 'react'

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
const OpinewProductPlugin = props => {
  const prefetchProduct = ['product', 'floating'].includes(props.type)
  let isNotLoaded = false

  try {
    isNotLoaded = !window.customElements.get('opinew-plugin')
  } catch (_) { }

  return (
    <Container constrainContent as="section" variant="section-wrapper">
      {isNotLoaded && (
        <React.Fragment>
          <link
            rel="stylesheet"
            href="https://cdn.opinew.com/shop-widgets-components/v1/static/css/index.css"
          />
          <link rel="stylesheet" href="https://cdn.opinew.com/styles/opw-icons/style.css" />
          <script
            src="https://cdn.opinew.com/shop-widgets-components/v1/static/js/index.js"
            async
          />
          <link
            rel="preload"
            href="https://cdn.opinew.com/shop-widgets/static/i18n/lang.json"
            as="fetch"
            type="application/json"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href={'https://api.opinew.com/plugins/shop_config?shop_domain=' + props.domain}
            as="fetch"
            type="application/json"
            crossOrigin="anonymous"
          />
        </React.Fragment>
      )}

      <OpinewPlugin {...props} />
    </Container>
  )
}

export default OpinewProductPlugin
