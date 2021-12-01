/* eslint-disable no-console */
import * as React from 'react'
import { useCustomerActions } from 'frontend-customer'
import { useIsMounted, usePlatform } from 'Components/Hooks'
import { CustomerProvider } from 'frontend-customer'
import { CustomerProviderConfig } from 'frontend-customer/dist/customer-sdk/types'

const shopifyConfig: CustomerProviderConfig = {
  storeId: '',
  platform: 'shopify',
  platformApiType: 'graphql',
  platformConfig: {
    storeToken: '',
    storeDomain: '',
  },
}

const bigcommerceConfig: CustomerProviderConfig = {
  storeId: '',
  platform: 'big_commerce',
  platformApiType: 'rest',
  platformConfig: {
    storeToken: '',
    storeDomain: '',
  },
}

interface CustomerProviderDecoratorProps {
  children: React.ReactNode
}

function CustomerProviderDecorator(props: CustomerProviderDecoratorProps) {
  const [platform] = usePlatform()
  const { children } = props

  const config = platform === 'big_commerce' ? bigcommerceConfig : shopifyConfig

  return <CustomerProvider config={config}>{children}</CustomerProvider>
}

interface CustomerDecoratorProps {
  email?: string
  children: React.ReactNode
}

function CustomerDecorator(props: CustomerDecoratorProps) {
  const { email, children } = props

  const [platform] = usePlatform()
  const isMounted = useIsMounted()
  const [isReady, setIsReady] = React.useState(false)
  const { login, getCustomer, logout } = useCustomerActions()

  if (email) {
    const [, domain = ''] = email.split('@')

    if (
      (domain.includes('bigcommerce-platform') && platform !== 'big_commerce') ||
      (domain.includes('shopify-platform') && platform !== 'shopify')
    ) {
      throw new Error(
        `Customer mock and platform mismatch. Customer email: ${email}. Platform: ${platform}. `,
      )
    }
  }

  React.useEffect(() => {
    const loginUser = async (email: string) => {
      const credentials = { email, password: 'whatever' }

      const result = await login(credentials)

      if ('errors' in result) {
        const { errors } = result

        console.groupCollapsed('CustomerDecorator failed :(')

        if (errors) {
          errors.forEach(error => console.error(error.message, { credentials, error }))
        } else {
          console.error(`Got login result errors of type ${typeof result.errors} and value =`, {
            credentials,
            errors: result.errors,
          })
        }

        console.groupEnd()
      }

      if (isMounted.current) {
        setIsReady(true)
      }
    }

    const fetchUser = async () => {
      await getCustomer()

      if (isMounted.current) {
        setIsReady(true)
      }
    }

    if (email) {
      loginUser(email)
    } else {
      fetchUser()
    }

    return () => {
      logout()
    }
  }, [email, isMounted, login, getCustomer, logout])

  if (!isReady) {
    return null
  }

  return <React.Fragment>{children}</React.Fragment>
}

/**
 * Returns customer decorator
 *
 */
export const getCustomerDecorator = (email?: string) => {
  return (StoryFn: any) => (
    <CustomerProviderDecorator>
      <CustomerDecorator email={email}>
        <StoryFn />
      </CustomerDecorator>
    </CustomerProviderDecorator>
  )
}
