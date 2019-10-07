# High Low Activity

In this activity we're going to create a High Low application.  We'll use a React application as a template to run the code that we are going to write for High Low.


### High Low Stories
* As a user, I can type in a number to the High Low application.
* As a user, when I click Submit, I see a response telling me that I guessed correctly or incorrectly.
* As a user, the page is styled, and pleasing to use.

### Stretch Stories
* As a user, if I guess incorrectly 7 times, the page displays a losing message.

### Getting started

All the code you'll need to write for this app is going to be inside one function in the ```/src/App.js``` file.

After you accept the assignment (or clone this repo), you'll want to install all the npm packages using Yarn:

```bash
$ cd ./High-Low-activity
$ yarn install
```

If you get an error about Yarn not being found:
```bash
Command 'yarn' not found, but can be installed with:
sudo apt install cmdtest
```

You can install it with:

```bash
$ npm install -g yarn
```

Then you are ready to start a server to run the application:

```bash
$ yarn start
```

Now you're ready to code!

Here's what the file ```/src/App.js``` looks like to start:

```javascript
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
```

To get started, find the ```getAnswer``` function, and write your code.  Everytime you save your updated file, the browser window displaying your app will reload.

### A note for Cloud 9 users
Once you run the ```yarn start``` command above,  You'll want to click the 'Preview' button to see your running application.
