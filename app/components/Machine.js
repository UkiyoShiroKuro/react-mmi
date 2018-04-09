/**
 *
 * App.js
 *
 */
import React from 'react';

class Machine extends React.Component {
  render() {
    // Dans tous les cas, afficher
    return (
      <div>
        <div className="Machine big">
          <div className= { this.props.isActive ? "machine active" : "machine" }>
            <h2>{this.props.name} La vie se résume à ça : </h2>
          </div>
          <p className="text">{this.props.desc}</p>
          <div className="Machine-footer footer">
            <p>I don't care I SHIP IT ! Why not ?</p>
          </div>
        </div>
      </div>
    );
  }
}

// Le composant sera accessible avec le nom "Machine"
export default Machine;
