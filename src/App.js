import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import './App.css';
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
        prodList: [],
        store: []
    }
  }
  componentDidMount(){
    // fetch('https://api.myjson.com/bins/18vgb2')
    fetch('/server/listings.json')
      .then(res => res.json())
      .then(res => {
        this.setState({ prodList: res })
      })
  }
  render(){
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route exact path="/details/:productId" component={() => (
              < Details  />
          )} />
        </Switch>
      </Router>
    );
  }
}
export default App;