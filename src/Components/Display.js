import React from 'react';

export class Display extends React.Component {
  render() {
    return (
      <div id='display' className='display border-sizing'>
        <p className='screen border-sizing'>{this.props.display}</p>
      </div>
    )
  }
}