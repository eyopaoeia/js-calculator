import React from 'react';
import './App.css';
import { Display } from './Components/Display';
import { Buttons } from './Components/Buttons';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: '',
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.updateDisplay = this.updateDisplay.bind(this);
    this.solveEquation = this.solveEquation.bind(this);
    this.truncateDisplay = this.truncateDisplay.bind(this);
  }
  
  componentWillMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }
  
  handleKeyPress(event) {
    event.preventDefault();
    if (event.key >= 0 && event.key <=9 || event.key == '/' || event.key == '-') {
      this.updateDisplay(event.key)
    }
    else if (event.shiftKey && event.key === '+' || event.key === '*') {
      this.updateDisplay(event.key)
    } 
    else if (event.key === 'Enter' || event.key === '=' ) {
      this.solveEquation();
    }
    else if (event.key === 'Backspace') {
      this.setState({
        display: ''
      })
    }
    
  }
  
  handleClick(event) {
    if (event.target.classList.contains('number-button') || event.target.classList.contains('operand-button')) {
      this.updateDisplay(event.target.innerText);
    }
    else if (event.target.classList.contains('function-button')) {
      event.target.id === 'equals' ? this.solveEquation() : this.setState({display: ''})
    } 
  }
  
  updateDisplay(info) {
    var newDisplay = this.state.display + info
      this.setState({
       display: newDisplay
      })
  }
  
  solveEquation() {
    var equation = this.state.display;
    var result = eval(equation);
    this.truncateDisplay(result);
  }

  truncateDisplay(display) {
    if (display.toString().length > 14) {
      var result = parseFloat(display.toString().slice(0,14));
    } 
    else {
      var result = display;
    }
    this.setState({
      display: result
    })
  }
  
  render(){
    return (
      <div className='calculator '>
        <Display display={this.state.display} />
        <Buttons handleClick={this.handleClick} />
      </div>
    )
  }
}

export default App;
