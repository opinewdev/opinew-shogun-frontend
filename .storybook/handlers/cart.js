import { graphql, rest } from 'msw'
import {
  shopifyCart,
  bigCommerceCart,
  bigCommerceCheckout,
  shopifyInventory,
} from '../../src/lib/mocks'

export const cart = [
  rest.get('*/api/storefront/carts*', async (_, res, ctx) => {
    return res(ctx.json(bigCommerceCart))
  }),

  rest.put('*/api/storefront/carts*', async (_, res, ctx) => {
    return res(ctx.json(bigCommerceCart))
  }),

  rest.delete('*/api/storefront/carts*', async (_, res, ctx) => {
    return res(ctx.json(bigCommerceCart))
  }),

  rest.get('*/api/storefront/checkouts/*', async (_, res, ctx) => {
    return res(ctx.json(bigCommerceCheckout))
  }),

  graphql.query('itemById', async (_, res, ctx) => {
    return res(
      ctx.data({
        site: {
          product: {
            minPurchaseQuantity: 2,
            maxPurchaseQuantity: 5,
            availabilityV2: {
              status: 'Available',
            },
            inventory: {
              isInStock: true,
            },
          },
        },
      }),
    )
  }),

  // Shopify Inventory
  rest.get('/data/productInventory.json', async (_, res, ctx) => {
    return res(ctx.json(shopifyInventory))
  }),
  // Checkout
  graphql.query('Checkout', async (_, res, ctx) => {
    return res(ctx.data({ node: shopifyCart.checkout }))
  }),
  // CreateCheckout
  graphql.mutation('CreateCheckout', async (_, res, ctx) => {
    return res(
      ctx.data({
        checkoutCreate: shopifyCart,
      }),
    )
  }),
  // // AddCheckoutLineItems
  graphql.mutation('AddCheckoutLineItems', async (_, res, ctx) => {
    return res(ctx.status(302))
  }),
  // RemoveCheckoutLineItems
  graphql.mutation('RemoveCheckoutLineItems', async (_, res, ctx) => {
    return res(ctx.status(302))
  }),
  // UpdateCheckoutLineItems
  graphql.mutation('UpdateCheckoutLineItems', async (_, res, ctx) => {
    return res(ctx.status(302))
  }),
]
