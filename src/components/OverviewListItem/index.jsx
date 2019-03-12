import React, { Component } from 'react'
import './style.scss'
import { Card, Icon } from 'antd'

class OverviewListItem extends Component {
    render() {
        const { title, author, isbn, publisher, releaseDate, description } = this.props

        return (
            <div className="iz-overview-list-item">
                <Card
                    hoverable={true}
                    cover={
                        <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                    }
                />
                <p>{title}</p>
            </div>
        )
    }
}

export default OverviewListItem
