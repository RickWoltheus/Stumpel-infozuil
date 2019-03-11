import React from 'react'
import PropTypes from 'prop-types'

export const iconType = {
    home: 'home',
}

class Icon extends React.Component {
    render() {
        const { icon } = this.props

        return <img src={icon} alt={''} />
    }
}

Icon.propTypes = {
    linkTo: PropTypes.string,
}

export default Icon
