import React, { Component } from 'react'
import './style.scss'
import { Link } from 'react-router-dom'
import { Icon } from 'antd'
import c from 'classnames'

class NavItem extends Component {
    render() {
        const { linkTo, iconType, label } = this.props

        return (
            <div className={this.getClassName()}>
                <Link to={linkTo ? linkTo : '/'}>
                    <div className={'iz-nav-item__content'}>
                        <Icon type={iconType ? iconType : 'alibaba'} style={{ fontSize: 32 }} />
                        <div className={'iz-nav-item__label'}>{label}</div>
                    </div>
                </Link>
            </div>
        )
    }

    getClassName() {
        const { className, active } = this.props

        return c(
            'iz-nav-item',
            {
                'iz-nav-item--is-active': active,
            },
            className
        )
    }
}

export default NavItem
