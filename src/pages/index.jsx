import React, { PureComponent } from 'react'
import { isObject } from '@/utils/test'
import Test from '@/components/Test'

export class index extends PureComponent {
  componentDidMount() {
    console.log(isObject)
  }

  render() {
    return (
      <div>
        <Test/>
      </div>
    )
  }
}

export default index
