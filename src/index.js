import React from "react"
import ReactDOM from "react-dom"
import { HashRouter as Router } from "react-router-dom"
import ForumContainer from "./Components/ForumContainer"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import { usePromiseTracker } from "react-promise-tracker";
import Loader from 'react-loader-spinner';

   const LoadingIndicator = props => {
    const { promiseInProgress } = usePromiseTracker();
     return (
      promiseInProgress && 
      <div
            style={{
              width: "100%",
              height: "100",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Loader type="Oval" color="#080808" height="200" width="100" />
          </div>
    );  
   }

ReactDOM.render(
    <React.StrictMode>
      <Router>
        <ForumContainer />
        <LoadingIndicator/>
      </Router>
    </React.StrictMode>,
    document.getElementById("root")
  )