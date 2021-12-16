import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import Home from './home/home'


class App extends React.Component {

    render(){
        return (
            <div>
                <Home/>
            </div>
        )
    }
}

export default App;