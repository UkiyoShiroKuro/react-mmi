import React from 'react';

class Form extends React.Component {
  
  onAddClick(event) {
    // Empêcher le rechargement de la page
    event.preventDefault();

    // On stocke les valeurs du formulaire dans une variable newMachine
    const newMachine = {
      name: this.name.value,
      status: this.status.value
    }
    
    this.props.addMachineToState();
  }

  render() {
    return (
      
      <form ref={(input) => this.machineForm = input} onSubmit={(e) => this.onAddClick(e)} className="add-machine-form">
        Nom : <input ref={(input) => this.name = input} type="text"  placeholder="Nom de la machine" />
        <select ref={(input) => this.status = input}>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
        <button type="submit" className="btn-form">+ Ajouter une machine</button>
      </form>
    );
  }
}

// Le composant sera accessible avec le nom "Machine"
export default Form;