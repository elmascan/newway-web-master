import React from 'react';
import './styles/app.css'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./pages/login";
import Home from "./components/home";
import Register from "./pages/register";
import {Redirect} from "react-router";
import {useUser} from './context/user-context';


function App() {
    const user = useUser()
    return (
        <div className="font-sans text-gray-nw">
            <div className="container mx-auto lowercase">
                <Router>
                    <Switch>
                        <Redirect exact from="/" to="/home"/>
                        <Route path="/home" component={Home}/>
                        {user ? <Redirect exact from="/login" to="/home"/> :
                            <Route path="/login"><Login/></Route>}
                        {user ? <Redirect exact from="/sign-up" to="/home"/> :
                            <Route path="/sign-up"><Register/></Route>}
                    </Switch>
                </Router>
            </div>
        </div>
    );
}

export default App;
