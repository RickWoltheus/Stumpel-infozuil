import React, { Component } from 'react'
import './style.scss'
import * as contentful from 'contentful'

import { Rate, InputNumber, Col, Row, Button, Spin, Empty } from 'antd'
import AvailabilityLabel from './../../../components/AvailabilityLabel/index'
import { withRouter } from 'react-router-dom'

const DetailPage = withRouter(props => <DetailPageComponent {...props} />)

class DetailPageComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            drawerVisible: false,
            loading: true,
            post: undefined,
        }
    }

    client = contentful.createClient({
        space: process.env.REACT_APP_CONTENFULL_SPACE_ID,
        accessToken: process.env.REACT_APP_ACCESS_TOKEN,
    })

    async componentDidMount() {
        await this.fetchPosts().then(this.setPosts)
        this.setState({ loading: false })
    }

    async setNewData() {
        await this.fetchPosts().then(this.setPosts)
    }

    fetchPosts = () =>
        this.client.getEntries({
            'sys.id': this.props.match.params.redirectParam,
            content_type: 'book',
        })

    setPosts = response => {
        this.setState({
            post: response.items[0].fields,
        })
    }

    render() {
        const { loading, post } = this.state

        if (loading) {
            return (
                <Row type="flex" align="middle">
                    <Col>
                        <Spin />
                    </Col>
                </Row>
            )
        }

        if (!post) {
            return (
                <Row type="flex" align="middle">
                    <Col>
                        <Empty />
                    </Col>
                </Row>
            )
        }

        console.log(post)

        return (
            <div className="iz-detail">
                <div className="iz-detail__showcase">
                    <img className={'iz-detail__image'} src={post.bookCover.fields.file.url} />
                </div>

                <div className="iz-detail__information">
                    <h1 className="iz-detail__title">{post.title}</h1>
                    <div className="iz-detail__meta">
                        {post.author[0].fields.title} | {post.bindingMethod} | {post.isbn}
                    </div>
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
                    <p>{post.description}</p>
                </div>
            </div>
        )
    }
}

export default DetailPage
