import React, { Component } from 'react'
import './style.scss'

import { Rate, InputNumber, Col, Row, Button } from 'antd'
import AvailabilityLabel from './../../../components/AvailabilityLabel/index'

class DetailPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            drawerVisible: false,
        }
    }

    render() {
        return (
            <div className="iz-detail">
                <div className="iz-detail__showcase">
                    <img
                        className={'iz-detail__image'}
                        src={
                            'https://s.s-bol.com/imgbase0/imagebase3/large/FC/9/7/1/7/666877179.jpg'
                        }
                    />
                </div>

                <div className="iz-detail__information">
                    <h1 className="iz-detail__title">Product</h1>
                    <div className="iz-detail__meta"> blabla | blabla | bla bla</div>
                    <Row type="flex">
                        <Rate />
                        <span>11 beoordelingen</span>
                    </Row>
                    <div>
                        <AvailabilityLabel label={'available'} />
                    </div>
                    <Row type="flex">
                        <Col span={12}>
                            <div>
                                € 19,99
                                <br />
                                <small>€ 18,34 (excl. btw)</small>
                            </div>
                        </Col>
                        <Col span={12} align="right">
                            <InputNumber size="large" min={1} max={100000} defaultValue={3} />
                        </Col>
                    </Row>
                    <Button type="primary" shape="round" icon="cart" size={'large'}>
                        In de winkelwagen
                    </Button>

                    <h2>Beschrijving</h2>
                    <p>ewa</p>
                </div>
            </div>
        )
    }
}

export default DetailPage
