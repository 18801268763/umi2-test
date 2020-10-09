import React, { PureComponent } from 'react'
import Echarts from '@/components/Echarts'

export default class Map extends PureComponent {
    render() {
        const option = {
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line'
            }]
        };
        return (
            <div>
                <Echarts option={option} />
            </div>
        )
    }
}
