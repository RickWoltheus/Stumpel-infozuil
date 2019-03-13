import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../Home'
import Detail from '../Detail'
import NotFound from '../NotFound'

import { Chrome } from '../../implementations'

const defaultAppState = {
    temp: 1,
}

export const AppContext = React.createContext(defaultAppState)

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ...defaultAppState,
            changeTemp: this.handleChangeTemp,
        }
    }

    render() {
        return (
            <AppContext.Provider value={this.state}>
                <div className="App">
                    <Chrome>
                        <main>
                            <Switch>
                                <Route strict exact path="/" component={Home} />
                                <Route path="/:id/detail" component={Detail} />
                                <Route component={NotFound} />
                            </Switch>
                        </main>
                    </Chrome>
                </div>
            </AppContext.Provider>
        )
    }

    handleChangeTemp = () => {
        this.setState({ temp: this.state.temp + 1 })
    }
}

export default App
