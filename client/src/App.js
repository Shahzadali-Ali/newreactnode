import logo from './logo.svg';
import React, {Component} from "react";
import './App.css';

class App extends Component{

  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
}

callAPI() {
    fetch("http://localhost:9000/users")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
}

componentWillMount() {
    this.callAPI();
}
render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome To React Node And MongoDB (MERN Project) </p> 
        <p className="App-intro">
        {this.state.apiResponse}</p>       
      </header>
    </div>
  );
}
}
export default App;
