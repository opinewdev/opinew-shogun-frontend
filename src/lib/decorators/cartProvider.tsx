import * as React from 'react'
import { CartProvider } from 'frontend-checkout'
import { StoreConfig } from 'frontend-checkout/dist/types'

import { DecoratorFunction } from 'lib/types'
import { usePlatform } from 'Components/Hooks'

const config = {
  storeId: process.env.SITE_ID || '',
  storeName: process.env.STORE_NAME || '',
  storeDomain: process.env.PLATFORM_PUBLIC_DOMAIN || '',
  storePlatformDomain: process.env.PLATFORM_DOMAIN || '',
  platformApiType: process.env.PLATFORM_API_TYPE || 'graphql',
  storeToken: process.env.STORE_TOKEN || '',
} as StoreConfig

export const getCartDecorator = (): DecoratorFunction<JSX.Element> => StoryFn => {
  const [platform] = usePlatform()

  return (
    <CartProvider
      platform={platform}
      storeConfig={{
        ...config,
        platformApiType: platform === 'big_commerce' ? 'rest' : config.platformApiType,
        storeId: `${config.storeId}-default`,
      }}
    >
      <StoryFn />
    </CartProvider>
  )
}
