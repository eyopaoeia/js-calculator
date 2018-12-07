import React from 'react';

export class Buttons extends React.Component {

  render() {
    return (
      <div className='keypad border-sizing'>

        <div className='numbers border-sizing'>
          <button id='one' className='number-button key' onClick={this.props.handleClick}>1</button>
          <button id='two'  className='number-button key' onClick={this.props.handleClick}>2</button>
          <button id='three'  className='number-button key' onClick={this.props.handleClick}>3</button>
          <button id='four'  className='number-button key' onClick={this.props.handleClick}>4</button>
          <button id='five'  className='number-button key' onClick={this.props.handleClick}>5</button>
          <button id='six'  className='number-button key' onClick={this.props.handleClick}>6</button>
          <button id='seven'  className='number-button key' onClick={this.props.handleClick}>7</button>
          <button id='eight'  className='number-button key' onClick={this.props.handleClick}>8</button>
          <button id='nine'  className='number-button key' onClick={this.props.handleClick}>9</button>
        </div>
          
        
         <button id='plus' className='operand-button plus key' onClick={this.props.handleClick}>+</button>
         <button id='minus' className='operand-button minus key' onClick={this.props.handleClick}>-</button>
         <button id='divide' className='operand-button divide key' onClick={this.props.handleClick}>/</button>
         <button id='multiply' className='operand-button multiply key' onClick={this.props.handleClick}>*</button>
        

        <button id='zero'  className='number-button zero key' onClick={this.props.handleClick}>0</button>
        <button id='decimal'  className='number-button decimal key' onClick={this.props.handleClick}>.</button>
        <button id='equals' className='function-button equals key' onClick={this.props.handleClick}>=</button>
        <button id='clear' className='function-button clear key' onClick={this.props.handleClick}>AC</button>
      </div>
    )
  }
}