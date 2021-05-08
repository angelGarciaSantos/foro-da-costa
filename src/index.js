import React from "react"
import ReactDOM from "react-dom"
import { HashRouter as Router } from "react-router-dom"
import ForumContainer from "./Components/ForumContainer"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

ReactDOM.render(
    <React.StrictMode>
      <Router>
        <ForumContainer />
      </Router>
    </React.StrictMode>,
    document.getElementById("root")
  )