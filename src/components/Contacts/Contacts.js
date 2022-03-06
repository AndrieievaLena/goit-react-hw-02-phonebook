import propTypes from 'prop-types';
import s from '../Contacts/Contacts.module.css'

const Contacts = ({title}) => {

return (
    <div className={s.section}>
    <h2 className={s.title}>{title}</h2>
   

     
    </div>
)

}

export default Contacts;

Contacts.propTypes= {
    title:propTypes.string,
}