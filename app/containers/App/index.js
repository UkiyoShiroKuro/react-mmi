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
import Form from '../../components/Form.js';

//React Rooter
import { BrowserRouter, Link, Route } from 'react-router-dom';

//Google Maps
import GoogleMapReact from 'google-map-react';

// On peut aussi importer du CSS de la meme facon.
import CSS from '../../css/style.css';


const AnyReactComponent = ({ text }) => <div>{text}</div>;
/*
  
  render(){
      return (
        // Un return doit retourner un seul élément du DOM
        // Si on veut afficher plusieurs éléments adjacents,
        // On devra donc les encapsuler dans une DIV parente.
        
          <div>
            <Header/>
            <BrowserRouter>
              <Root>
                <Sidebar className="Sidebar">
                {
                  this.state.Facts.map(Fact =>
                    <SidebarItem key={Fact.name} className="Item" >
                      <Link to={"/Produit/${Fact.name}"} className="lienPro">
                        Produit/Machine {Fact.name}
                      </Link>
                    </SidebarItem>
                  )
                }
                </Sidebar>
                <Main className="Main">
                  <Route exact={true} path='/' render={() => (
                    <h1>Liste de toutes les machines</h1>
                  )} />
                  {
                    this.state.Facts.map(Fact =>
                      <div>
                        <Machine name={Fact.name} desc={Fact.desc} isActive={Fact.isActive}/>
                        <Bouton onClick={this.handleClick} type="button" isToggleOn="true"/>
                        <Link className="map" target="_blank" to={Fact.lien}>Lieu du "produit"</Link>
                        <hr/>
                      </div>
                    )
                  }
                  
                  <Route path='/Produit/:Factname' component={Show}/>
                </Main>
              </Root>
            </BrowserRouter>
            <Footer/>
        </div>
        
      );
    }
  }
  
// Ne suis pas parvenue à afficher la carte sur la page en lui-même, même avec un iframe dans le "Lien"
// Par contre il fonctionne en tant que nouvel onglet à ouvrir
// Ni à afficher une machine seule pour la "page produit"

  */
  
  class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.addMachineToState = this.addMachineToState.bind(this);

    this.state = {
      center: {
        lat: 48.8566,
        lng: 2.3522
      },
      zoom: 11,
      machines: [
        {
          id: 0,
          name: "Albus Potter is in love with Scorpius Malfoy -shit, the in-laws...-",
          isActive: true,
          lien: "https://www.google.fr/maps/place/Jardin+de+ville/@45.1855857,5.6996716,14z/data=!4m5!3m4!1s0x478af4899452e6f1:0xc435876cef9752ae!8m2!3d45.1920031!4d5.7268167"
        },
        {
          id: 1,
          name: "Shit... Harry and Draco will be in laws",
          isActive: true,
          lien: "https://www.google.fr/maps/place/La+Nef/@45.1855857,5.6996716,14z/data=!4m5!3m4!1s0x0:0xa1e0921380eb20f3!8m2!3d45.1906156!4d5.7233673"
        },
        {
          id: 2,
          name: "Shit... Weasley's and Malfoy's family will be in laws",
          isActive: true,
          lien: "https://www.google.fr/maps/place/Office+de+Tourisme+Grenoble-Alpes+M%C3%A9tropole/@45.1850041,5.727014,15.82z/data=!4m5!3m4!1s0x0:0xa735ba30cfba5ded!8m2!3d45.1903453!4d5.7302928"
        },
        {
          id: 3,
          name: "Shit... Who will be planning the wedding between Molly and Narcissa ?!!!",
          isActive: false,
          lien: "https://www.google.fr/maps/place/Parc+Paul+Mistral+Grenoble/@45.1850041,5.727014,15.82z/data=!4m5!3m4!1s0x478af4f18f9b536d:0x27fb9854ae7d0cf2!8m2!3d45.1853755!4d5.7366282"
        }
      ]
    };
  }

  // Méthode pour activer une machine
  handleStatusChange(key) {
    // 1. On copie le state existant
    const machines = { ...this.state.machines };
    // 2. On modifie le status de CETTE machine
    machines[key].isActive = !machines[key].isActive;
    // Pour vérifier la nouvelle collection dans la console :
    console.log({ machines });
    console.log(machines[key]);
    // 3. On applique cette nouvelle collection au state
    this.setState({ machines });
  }
  
  addMachineToState(machine) {
    console.log("addMachineToState");
    console.log(machine);
    const machines = { ...this.state.machines };
    /*var newMachine = machine.concat([machine.states]);*/
    this.setState({ machines });
  }


  render() {
    
    const machinesIds = Object.keys(this.state.machines);
    const totalActive = machinesIds.reduce((prevTotal, key) => {
      const machine = this.state.machines[key];
      const isAvailable = machine && machine.isActive;
      return isAvailable ? prevTotal + 1 : prevTotal
    }, 0);
    const total = machinesIds.length;
    
    return (
      <div className="main">
        <Header/>
          <BrowserRouter>
            <Root>
              <Sidebar className="Sidebar">
                {
                  Object
                    .keys(this.state.machines)
                    .map(key =>
                      <SidebarItem key={this.state.machines[key].id} className="Item" >
                        <Link to={"/Produit/${machines.id}"} className="lienPro">
                          Machine {this.state.machines[key].id}
                        </Link>
                      </SidebarItem>
                    )
                }
              </Sidebar>
              <Main className="Main">
                <Route exact={true} path='/' render={() => (
                  <h1>Liste de toutes les machines</h1>
                )} />
               <Form addMachineToState={this.addMachineToState}/>
                <div className="counter">
                  <strong>{totalActive}</strong> / <strong>{total}</strong> Machines actives
                </div>
                {/*Conteneur de notre liste*/}
                <div className="machines-list">
                  {/*Boucle sur notre collection de machines*/}
                  {
                    Object
                      .keys(this.state.machines)
                      .map(key =>
                      // Le composant Machine s'affichera autant de fois
                      // qu'il y a d'objets dans la collection.
                      <Machine name={this.state.machines[key].name}
                               key={this.state.machines[key].id}
                               index={this.state.machines[key].id}
                               handleStatusChange={this.handleStatusChange}
                               isActive={this.state.machines[key].isActive}/>
                    )}
                  <div className="map-container">
                    <GoogleMapReact
                      bootstrapURLKeys={{ key: "AIzaSyBU_IEeDtk0fIKfm18yj8bD6DDaJ0N-3e4" }}
                      defaultCenter={this.state.center}
                      defaultZoom={this.state.zoom}
                    >
                      <AnyReactComponent
                        lat={this.state.center.lat}
                        lng={this.state.center.lng}
                      />
                    </GoogleMapReact>
                  </div>
                </div>
                <Route path='/machine/:MachineName' component={Show}/>
              </Main>
            </Root>
          </BrowserRouter>
        <Footer/>
      </div>
    );
  }
  }
  const Show = ({ match }) => (
    <div>
      {match.params.MachineName}
    </div>
    )
  const Root = (props) => (
    <div style={{
      display: 'flex'
    }} {...props}/>
    )
    
  const Sidebar = (props) => (
    <div style={{
      width : '15%',
      height: '100vh',
      overflow: 'auto',
      background: 'orange'
    }} {...props}/>
    )
    
  const SidebarItem = (props) => (
    <div style={{
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      padding: '5px 10px'
    }} {...props}/>
    )
        
  const Main = (props) => (
    <div style={{
      flex: 1,
      height: '100vh',
      overflow: 'auto'
    }}>
      <div style= {{padding: '20px'}} {...props}/>
    </div>
    )
    
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