import propTypes from 'prop-types';
import ImageIcon from "../images/book.jpg";
import s from '../Section/Section.module.css';

const Section = ({icon = ImageIcon,title , children}) => {

return (
    <div>
    <div className={s.section}>
     <img 
      src={icon}
      alt="icon"
      width= '50'
      className={s.icon}
    />
    <h2 className={s.title}>{title}</h2>
    </div>
     {children}
    

    </div>
)

}

export default Section;

Section.propTypes= {
    title:propTypes.string,
}