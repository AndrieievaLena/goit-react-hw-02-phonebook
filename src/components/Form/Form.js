import React from 'react';
import avatar from '../images/avatar.jpg';
import phone from "../images/phone.jpg";
import s from '../Form/Form.module.css'

class Form extends React.Component {
state = {
    name: '',
    number: ''
}; 
handleChange = e => {
    const {name, value} = e.currentTarget;
    this.setState({[name]: value});

}
handleSubmit =e => {
    e.preventDefault();
}
render(){
     
return (
<div>
    
<form onSubmit={this.handleSubmit} className={s.form}>
     <div className={s.section}>
            <img 
            src={avatar}
            alt="icon"
            width= '30'
            className={s.icon}

            
            />
            <label htmlFor='' className={s.title}>Name
                <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                className={s.name}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required/>
                
            </label>
     </div>
      <div className={s.section}>
           <img 
                src={phone}
                alt="icon"
                width= '30'
                className={s.icon}
            />

            <label htmlFor="" className={s.title}>Number
                <input
                type="tel"
                name="number"
                value={this.state.number}
                onChange={this.handleChange}
                className={s.tel}

                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required/>
            </label>
      </div>
      <button type="submit" className={s.button}>Add Contact</button>
</form>

</div>

)

}




}


export default Form;