import React, { PureComponent } from 'react'
import { isObject } from '@/utils/test'

export class index extends PureComponent {
  componentDidMount() {
    console.log(isObject)
  }

  render() {
    return (
      <div>
        test!
      </div>
    )
  }
}

export default index
