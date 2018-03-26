

import React from 'react';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
        <div className={this.state.isToggleOn ? "machine-active" : "machine-desactivee"}>
            <h2>HeadCanon ?</h2>
            <p>{this.props.isToggleOn}</p>
            
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'YES' : 'NO'}
            </button>
        </div>
    );
  }
}

export default Toggle;