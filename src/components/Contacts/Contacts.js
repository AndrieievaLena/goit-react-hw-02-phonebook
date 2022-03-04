import React from 'react';
import propTypes from 'prop-types';

const Contacts = ({title}) => {

return (
    <>
    <h2>{title}</h2>
     
    </>
)

}

export default Contacts;

Contacts.propTypes= {
    title:propTypes.string,
}