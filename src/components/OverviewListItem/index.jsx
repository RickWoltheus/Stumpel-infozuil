import React, { Component } from 'react'
import './style.scss'
import { Card, Icon } from 'antd'

class OverviewListItem extends Component {
    render() {
        const { title, author, isbn, publisher, releaseDate, description } = this.props

        return (
            <div className="iz-overview-list-item">
                <Card
                    cover={
                        <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                    }
                    actions={[
                        <Icon type="setting" />,
                        <Icon type="edit" />,
                        <Icon type="ellipsis" />,
                    ]}
                >
                    <h1>{title}</h1>
                    {author.map((e, i) => (
                        <div key={e.fields.title}>{e.fields.title}</div>
                    ))}
                    <p>{isbn}</p>
                    <p>{publisher.fields.title}</p>
                    <p>{releaseDate}</p>
                    <p>{description}</p>
                </Card>
            </div>
        )
    }
}

export default OverviewListItem
