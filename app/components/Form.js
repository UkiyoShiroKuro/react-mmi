import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        name: 'Name your Machine...',
        isActive: true,
        lien : 'Lien url Google maps'
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLienChange = this.handleLienChange.bind(this);
  }
  
  //Modifier nom
    handleNameChange(event) {
    this.setState({name: event.target.value,});
  }
  
  //Modifier isAtive
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  
      handleLienChange(event) {
    this.setState({lien: event.target.value,});
  }
  
  //Bouton Envoyer
  handleSubmit(event) {
    alert('Votre machine a bien été ajoutée !');
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
       <label>
          Name your Machine : 
          <textarea value={this.state.name} onChange={this.handleNameChange} />
        </label>
        <br/>
        <label>
          Your machine is actived ? 
          <input
            name="isActive"
            type="checkbox"
            checked={this.state.isActive}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Lien : 
          <textarea value={this.state.lien} onChange={this.handleLienChange} />
        </label>
        <br/>
        <input type="submit" value="Ajouter une machine" />
      </form>
    );
  }
}

// Le composant sera accessible avec le nom "Machine"
export default Form;