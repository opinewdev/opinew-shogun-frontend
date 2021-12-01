import * as React from 'react'
import { DecoratorFunction, Platform } from 'lib/types'
import { publicRuntimeConfig } from 'Components/Hooks'

const { storePlatform: defaultPlatform } = publicRuntimeConfig

export const getPlatformDecorator = (platform: Platform): DecoratorFunction<JSX.Element> => {
  return StoryFn => {
    publicRuntimeConfig.storePlatform = platform

    React.useEffect(() => {
      return () => {
        publicRuntimeConfig.storePlatform = defaultPlatform
      }
    }, [])

    return <StoryFn />
  }
}
