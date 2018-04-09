/**
 *
 * App.js
 *
 */
import React from 'react';

class Machine extends React.Component {
  onToggleClick() {
    console.log('Clic sur le bouton ------- ');	+    // On envoie l'index à la méthode qui changera la valeur
    // On accède dans cette méthode à ce qu'on a passé en props au composant	+    // La méthode et son argument sont tous les deux accessibles
    console.log(this.props.name);	+    // via des props qui ont été passées au composant
    this.props.handleStatusChange(this.props.index);
   }
   
   
  render() {
    // Dans tous les cas, afficher
    /*return (
      <div>
        <div className="Machine big">
          <div className= "Machine-header header">
            <h2>{this.props.name} La vie se résume à ça : </h2>
          </div>
          <p className="text">{this.props.desc}</p>
          <div className="Machine-footer footer">
            <p>I don't care I SHIP IT ! Why not ?</p>
          </div>
        </div>
      </div>
    );*/
  }
}

// Le composant sera accessible avec le nom "Machine"
export default Machine;
