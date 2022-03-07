import React,{Component} from "react";
import Section from '../Section/Section';
import Contacts from '../Contacts/Contacts';
import Form from '../Form/Form';
import ContactsList from '../ContactsList/ContactsList';


class Phonebook extends Component{
addTodo = text => {
    console.log(text)
    const todo = {
        name, number
    }
}
       render(){

return(
 <section>
    <Section title= "Phonebook">
        <Form/>
        </Section>
    <Contacts title ="Contacts">
      
    </Contacts>
    <ContactsList onSubmit={this.addTodo}/>
     
    
      
    
    
</section>

)
  
}    


}

export default Phonebook;