import React, { Component } from 'react'
import { Route, Link, Switch } from 'react-router-dom'

import Home from '../Home'
import NotFound from '../NotFound'

import './style.scss'

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
                    <header>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                            </ul>
                        </nav>
                    </header>

                    <main>
                        <Switch>
                            <Route strict exact path="/" component={Home} />
                            <Route component={NotFound} />
                        </Switch>
                    </main>
                </div>
            </AppContext.Provider>
        )
    }

    handleChangeTemp = () => {
        this.setState({ temp: this.state.temp + 1 })
    }
}

export default App
