import './App.css';
import {setAppName} from "./redux/core/core.actions";
import {connect} from 'react-redux';

function App(props) {
    return (
        <div className="App">
            {console.log('propsedsd', props)}
            <div>App Name : {props.application.name}</div>
            <button onClick={() => props.setAppName((new Date()).getTime())}>Change Name</button>
        </div>
    );
}

const mapStateToProps = state => {
    console.log("state", state.core.application);
    return {
        application: state.core.application,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setAppName: payload => dispatch(setAppName(payload)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
