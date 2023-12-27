import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


export default class App extends Component {

  pagesize = 6;
  apiKey= process.env.REACT_APP_API_KEY;

  constructor(){

    super();
    this.state = {
       category: "general",
       country: "in",
       progress: 0,
    }

}

setProgress = (progress)=> {
  this.setState({progress: progress})
}

  render() {
    return (
      <Router>
      <div>

      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        
      />
          <Navbar />
          <Routes>
            <Route  path="/" element= <News setProgress = {this.setProgress} apiKey = {this.apiKey} key= "general" pageSize = {this.pagesize} country = {this.state.country} category= {"general"} spanColor = {"warning"} titleColor = {"yellow"} /> />
            <Route  path="business" element= <News setProgress = {this.setProgress} apiKey = {this.apiKey} key= "business" pageSize = {this.pagesize} country = {this.state.country} category= {"business"} spanColor = {"secondary"} titleColor = {"gray"} /> />
            <Route  path="entertainment" element= <News setProgress = {this.setProgress}  apiKey = {this.apiKey} key= "entertainment" pageSize = {this.pagesize} country = {this.state.country} category= {"entertainment"} spanColor = {"info"} titleColor = {"cyan"} /> />
            <Route  path="health" element= <News setProgress = {this.setProgress} apiKey = {this.apiKey} key= "health" pageSize = {this.pagesize} country = {this.state.country} category= {"health"} spanColor = {"danger"} titleColor = {"red"} /> />
            <Route  path="science" element= <News setProgress = {this.setProgress} apiKey = {this.apiKey} key= "science" pageSize = {this.pagesize} country = {this.state.country} category= {"science"} spanColor = {"primary"} titleColor = {"blue"} /> />
            <Route  path="sports" element= <News setProgress = {this.setProgress} apiKey = {this.apiKey} key= "sports" pageSize = {this.pagesize} country = {this.state.country} category= {"sports"} spanColor = {"success"} titleColor = {"green"} /> />
            <Route  path="technology" element= <News setProgress = {this.setProgress} apiKey = {this.apiKey} key= "technology" pageSize = {this.pagesize} country = {this.state.country} category= {"technology"} spanColor = {"dark"} titleColor = {"gray-900"} /> />
          </Routes>
      </div>
      </Router>
    )
  }
}
