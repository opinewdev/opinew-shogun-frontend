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
import { getCustomerDecorator } from '../../lib/decorators'
import { useCustomer } from 'frontend-customer'
import { useNormalizedCustomer } from 'Components/Hooks'

/**
 * @typedef { import("@storybook/addons").ArgsStoryFn<JSX.Element> } ArgsStoryFn
 * @typedef { import("lib/types").DecoratorFunction<JSX.Element> } DecoratorFunction
 * @typedef {{ orderIndex?: 0 | 1, StoryFn: ArgsStoryFn }} Props
 *
 * @param {Props} props
 * @returns {React.ReactElement}
 * */
function AccountOrderDetailsDecorator({ orderIndex = 0, StoryFn }) {
  const [customerState, { getAllOrders }] = useCustomer()
  const { isLoggedIn, orders } = useNormalizedCustomer(customerState)

  React.useEffect(() => {
    if (isLoggedIn) {
      getAllOrders()
    }
  }, [isLoggedIn, getAllOrders])

  if (!orders || orders.length === 0) {
    return <React.Fragment></React.Fragment>
  }

  return (
    <React.Fragment>{React.cloneElement(StoryFn(), { order: orders[orderIndex] })}</React.Fragment>
  )
}

/**
 * @param { string } email
 * @param { Props['orderIndex'] } orderIndex
 * @returns { DecoratorFunction[] }
 * */

const getDecorators = (email, orderIndex) => [
  StoryFn => <AccountOrderDetailsDecorator StoryFn={StoryFn} orderIndex={orderIndex} />,
  getCustomerDecorator(email),
]

export default getDecorators
