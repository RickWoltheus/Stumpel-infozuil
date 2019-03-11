import React, { Component } from 'react'
import * as contentful from 'contentful'
import { OverviewListItem } from '../'

import './style.scss'
import { Spin, Empty, Input } from 'antd'

class OverviewList extends Component {
    state = {
        posts: [],
        loading: true,
    }

    client = contentful.createClient({
        space: process.env.REACT_APP_CONTENFULL_SPACE_ID,
        accessToken: process.env.REACT_APP_ACCESS_TOKEN,
    })

    async componentDidMount() {
        await this.fetchPosts().then(this.setPosts)
        this.setState({ loading: false })
    }

    fetchPosts = () =>
        this.client.getEntries({
            content_type: 'book',
        })

    setPosts = response => {
        this.setState({
            posts: response.items,
        })
    }

    render() {
        return (
            <div>
                <Input.Search placeholder={'search...'} />
                {this.renderList()}
            </div>
        )
    }

    renderList() {
        const { posts, loading } = this.state

        if (loading) {
            return <Spin />
        }

        if (!posts.length) {
            return <Empty />
        }

        return posts.map(({ fields }, i) => <OverviewListItem key={i} {...fields} />)
    }
}

export default OverviewList
