import React, { Component } from 'react'
import './style.scss'
import c from 'classnames'

export const AvailabilityType = {
    unavailable: 'unavailable',
    available: 'available',
}

class AvailabilityLabel extends Component {
    render() {
        return <div className={this.getClassName()}>Op voorraad</div>
    }

    getClassName() {
        const { available, className } = this.props

        return c(
            'iz-availabilityLabel',
            {
                'iz-availabilityLabel--is-active': available,
            },
            className
        )
    }
}

export default AvailabilityLabel
