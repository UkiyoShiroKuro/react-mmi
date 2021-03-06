

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
        <div>
            <div className="Bouton">
                <div className={this.state.isToggleOn ? "machine-active" : "machine-desactivee"}>
                    <h2>HeadCanon :
                    {this.state.isToggleOn ? " Of COURSE" : " NOT REALLY MY TASTE"}
                    </h2>
                </div>
                <button onClick={this.handleClick}>
                        {this.state.isToggleOn ? 'NO' : 'YES'}
                </button>
            </div>
            <hr/>
        </div>
    );
  }
}

export default Toggle;