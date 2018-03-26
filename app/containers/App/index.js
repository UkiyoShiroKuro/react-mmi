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

export default function App() {
  return (
    // Un return doit retourner un seul élément du DOM
    // Si on veut afficher plusieurs éléments adjacents,
    // On devra donc les encapsuler dans une DIV parente.
    <div>
      <Header/>
      
      <Machine name="Albus Potter is in love with Scorpius Malfoy -shit, the in-laws...-" isActive="yes"/>
      <Bouton isToggleOn="true"/>
      
      <Machine name="Shit... Harry and Draco will be in laws" isActive="yes"/>
      <Bouton isToggleOn="true"/>
      
      <Machine name="Shit... Weasley's and Malfoy's family will be in laws" isActive="yes"/>
      <Bouton isToggleOn="true"/>
      
      <Machine name="Shit... Who will be planning the wedding between Molly and Narcissa ?!!!" isActive="no"/>
      <Bouton isToggleOn="true"/>
      
      <Footer/>
    </div>
  );
}