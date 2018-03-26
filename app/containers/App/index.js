/**
 *
 * App.js
 *
 */
import React from 'react';

// On importe ici les composants qu'on veut afficher
import Machine from '../../components/Machine.js';
import Header from '../../components/Header.js';
import Footer from '../../components/Footer.js';
import Bouton from '../../components/Bouton.js';

// On peut aussi importer du CSS de la meme facon.
import CSS from '../../css/style.css';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      Facts : [
        {
          name : "Albus Potter is in love with Scorpius Malfoy -shit, the in-laws...-",
          isActive: "true"
        },
        {
          name: "Shit... Harry and Draco will be in laws",
          isActive: "true"
        },
        {
          name: "Shit... Weasley's and Malfoy's family will be in laws",
          isActive:"true"
        },
        {
          name: "Shit... Who will be planning the wedding between Molly and Narcissa ?!!!",
          isActive:"false"
        }
      ]
    };
  }
  
  render(){
    
      return (
        // Un return doit retourner un seul élément du DOM
        // Si on veut afficher plusieurs éléments adjacents,
        // On devra donc les encapsuler dans une DIV parente.
        <div>
          <Header/>
          
          {
            this.state.Facts.map(Fact =>
              <div>
                <Machine name={Fact.name} isActive={Fact.isActive}/>
                <Bouton isToggleOn="true"/>
              </div>
            )
          }
          
          <Footer/>
        </div>
      );
    }
  }
  
export default App;

/*Return initial
          <Machine name={this.state.Facts[0].name} isActive={this.state.Facts[0].isActive}/>
          <Bouton isToggleOn="true"/>
          
          <Machine name={this.state.Facts[1].name} isActive={this.state.Facts[1].isActive}/>
          <Bouton isToggleOn="true"/>
          
          <Machine name={this.state.Facts[2].name} isActive={this.state.Facts[2].isActive}/>
          <Bouton isToggleOn="true"/>
          
          <Machine name={this.state.Facts[3].name} isActive={this.state.Facts[3].isActive}/>
          <Bouton isToggleOn="false"/>
*/