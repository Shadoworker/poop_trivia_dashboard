import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./Form";
import ApiServices from "./services";

class App extends Component {
  state = {
    fields: {}
  };

  componentDidMount(){

    
    
    ApiServices._getQuizzes().then(data=>{

      console.log(data);
    }).
    catch(err=>{
      console.log(err)
    })

  }

  onChange = updatedValue => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue
      }
    });
  };

  render() {
    return (
      <div className="App">
        <Form onChange={fields => this.onChange(fields)} />
        <p>
          {JSON.stringify(this.state.fields, null, 2)}
        </p>
      </div>
    );
  }
}

export default App;
