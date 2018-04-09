import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        name: 'Name your Machine...',
        isActive: true,
        lien : 'Lien url Google maps'
    };
  }

  render() {
    return (
      <form onSubmit={(e) => this.props.addMachineToState(e)}>
       Name : <input/>
       <select>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
       </select>
       Lien : <input/>
        <button type="submit">Ajouter une machine</button>
      </form>
    );
  }
}

// Le composant sera accessible avec le nom "Machine"
export default Form;