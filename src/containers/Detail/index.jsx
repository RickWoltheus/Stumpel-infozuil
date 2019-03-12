import React from 'react'
import { AppContext } from './../App/index'
import DetailPage from '../../implementations/Detail/DetailPage'

class Detail extends React.Component {
    render() {
        return (
            <React.Fragment>
                <AppContext.Consumer>
                    {({ books }) => (
                        <div>
                            <DetailPage data={books} />
                        </div>
                    )}
                </AppContext.Consumer>
            </React.Fragment>
        )
    }
}

export default Detail
