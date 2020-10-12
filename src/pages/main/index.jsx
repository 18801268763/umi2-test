import { componentDidMount } from '@/utils/shared'
import React, { PureComponent } from 'react'

export default class MainPage extends PureComponent {
    componentDidMount = componentDidMount.bind(this)
    render() {
        return (
            <div>
                main
            </div>
        )
    }
}
