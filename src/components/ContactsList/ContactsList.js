import React,{Component} from 'react';


class ContactsList extends Component{
    state = {
      name: ''
    };
   
  
      handleChange = e => {
        const {} = e.currentTarget;
    };
  

    render(){
      return (
       <form>
         <label htmlFor=''>Find Contacts by name</label>
         <textarea value={this.state.name} onchange={this.handleChange}></textarea>
       </form>
         
      )
      
    }
};


export default ContactsList;