import React, { Component } from 'react'
import { AppContext } from './../App/index'
import { OverviewList } from '../../components'

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <AppContext.Consumer>{({ temp, changeTemp }) => Home}</AppContext.Consumer>
                <div>
                    <OverviewList />
                </div>
            </React.Fragment>
        )
    }
}

export default Home
