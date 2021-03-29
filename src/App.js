import './App.css';
import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Dashboard from "./components/dashboard";
import urls from "./api/urls";
import Register from "./components/register";

class App extends React.Component {
    render() {
        return (
           <BrowserRouter>
               <Switch>
                    <Route path={urls.internal.register} component={Register} />
                    <Route path={urls.internal.dashboard} component={Dashboard} />
               </Switch>
           </BrowserRouter>
        );
    }
}

export default App;