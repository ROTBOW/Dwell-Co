import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import Navbar from './navbar/navbar'
import Home from './home/home'


class App extends React.Component {

    render(){
        return (
            <div>
                <Navbar/>
            </div>
        )
    }
}

export default App;