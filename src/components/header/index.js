import React from 'react';
import {Link} from "react-router-dom";
import CoreApiManager from "../../api/coreApiManager";
import {setAppName} from "../../redux/core/core.actions";
import {connect} from "react-redux";
import urls from "../../api/urls";
import './header.css';

class Header extends React.Component {

    /**
     * -----------------------------------------------------------------------------------------------------------------
     * @description the api manager for the current component
     * -----------------------------------------------------------------------------------------------------------------
     * @type {CoreApiManager}
     */
    apiManager = null

    handleAppInitRes(response) {
        if (response && response.status === 200 && response.data && response.data.hasOwnProperty('appName')) {
            this.props.setAppName(response.data.appName);
        }
    }

    constructor(props) {
        super(props);
        this.apiManager = CoreApiManager.getInstance();
        this.apiManager.getAppData(
            (r) => this.handleAppInitRes(r),
            (e) => console.log("Error in get app data", e)
        );
    }

    render() {
        return (
            <div className="header">
                <nav className='navbar navbar-expand-lg'>
                    <div className="container">
                        <Link to='/'>
                            <a href={urls.internal.dashboard} className={"plainAnchor"}>{this.props.application.name}</a>
                        </Link>
                        <div className="collapse navbar-collapse order-last order-md-0">
                            <ul className="ml-auto navbar-nav">
                                <li className="nav-item bg">
                                    <Link to='/login' className={"nav-link plainAnchor hoverDark"}>Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/register' className={"nav-link plainAnchor hoverDark"}>Register</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        application: state.core.application,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setAppName: payload => dispatch(setAppName(payload)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
