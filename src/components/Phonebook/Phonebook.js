import React,{Component} from "react";
import Section from '../Section/Section';
import Contacts from '../Contacts/Contacts';
import Form from '../Form/Form';


class Phonebook extends Component{
    state = {
        contacts: [],
        
      }
      

      
  render(){

return(
 <section>
    <Section title= "Phonebook">
        <Form/>
        </Section>
    <Contacts title ="Contacts"></Contacts>
     
    
      
    
    
</section>

)
  
}    


}

export default Phonebook;