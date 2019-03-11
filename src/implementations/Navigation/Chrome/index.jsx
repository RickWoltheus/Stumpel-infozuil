import React, { Component } from 'react'
import Button from 'antd/lib/button'
import { Drawer } from 'antd'
import './style.scss'
import NavItem from '../NavItem'
import { iconType } from './../../../components/Icon/Icon'
import { withRouter } from 'react-router-dom'

const config = [
    { name: 'home', link: '/', icon: iconType.home },
    { name: 'home', link: '/other', icon: 'environment' },
    { name: 'home', link: '/other2', icon: 'phone' },
    { name: 'home', link: '/other3', icon: 'eye' },
    { name: 'home', link: '/other4', icon: 'filter' },
]

const Chrome = withRouter(props => <NavigationComponent {...props} />)

class NavigationComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            drawerVisable: false,
        }
    }

    render() {
        const { children } = this.props
        const { drawerVisable } = this.state

        return (
            <div className={'iz-navigation'}>
                <div>
                    <Button onClick={this.handleDrawerToggle}>Open drawer</Button>
                    <Drawer
                        visible={drawerVisable}
                        placement="left"
                        onClose={this.handleDrawerToggle}
                    />
                </div>

                <div className={'iz-navigation__content'}>{children}</div>

                <div className={'iz-navigation__bottom'}>{this.renderNavItems()}</div>
            </div>
        )
    }

    renderNavItems() {
        const currentPath = this.props.location.pathname

        return config.map(item => (
            <NavItem
                label={item.name}
                linkTo={item.link}
                iconType={item.icon}
                active={currentPath === item.link}
            />
        ))
    }

    handleDrawerToggle = () => {
        const { drawerVisable } = this.state
        this.setState({
            drawerVisable: !drawerVisable,
        })
    }
}

export default Chrome
