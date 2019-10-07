import React from 'react';
import './App.css'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      secretNumber: null
    }
  }

  getAnswer = () => {
    //This is where you will write your High Low code
    return "The Secret Number"
  }

  handleSubmit = () =>{
    const secretNumber = this.getAnswer()
    this.setState({secretNumber : secretNumber})
  }

  render(){
    return (
      <div>
        <h1>High Low Guessing Game</h1>
        <input
          type='text'
        />
        <br />
        <button
          onClick={this.handleSubmit}
        >
          Guess!
        </button>

        {this.state.secretNumber &&
          <h2> The Secret Number is: {this.state.secretNumber} </h2>
        }
      </div>
    )
  }
}

export default App;