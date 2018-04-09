/**
 *
 * App.js
 *
 */
import React from 'react';
import Toggle from 'react-toggle';
import "react-toggle/style.css";


class Machine extends React.Component {
  
  // Méthode lancée au clic sur le bouton "Toggle"
  onToggleClick() {
    // On envoie l'index à la méthode qui changera la valeur
    // La méthode et son argument sont tous les deux accessibles
    // via des props qui ont été passées au composant
    this.props.handleStatusChange(this.props.index);
    console.log('Clic sur le bouton ------- ');	   // On envoie l'index à la méthode qui changera la valeur
    // On accède dans cette méthode à ce qu'on a passé en props au composant	+    // La méthode et son argument sont tous les deux accessibles
    console.log(this.props.name);	   // via des props qui ont été passées au composant
  }
  


  render() {
    return (
        <div
        className= { this.props.isActive ? "machine active" : "machine" }> {/* Si isActive passée en props est à true, ajouter la classe "active" */}
          <div className= "Machine-header header">
            <h2>La vie se résume à ça : </h2>
          </div>
          <p className="text">{this.props.name}</p>
          {/* On appelle handleClick avec (e) pour pouvoir accéder à this
          <button onClick={(e) => this.onToggleClick(e)} type="button" className="btn">
            {this.props.isActive ? "Désactivé" : "Activé"}
          </button>*/}
          <Toggle checked={this.props.isActive}
                  onChange={(e) => this.onToggleClick(e)}/>
          <div className="Machine-footer footer">
            <p>I don't care I SHIP IT ! Why not ?</p>
          </div>
        </div>
      )
  }
}



// Le composant sera accessible avec le nom "Machine"
export default Machine;
