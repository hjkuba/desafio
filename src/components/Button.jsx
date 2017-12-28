import React from 'react';
import './Button.css';

const Button = (props) => (
    <button onClick={props.onClick} style={styles}>{props.children.toUpperCase()}</button>
);

const styles = {
    padding: 8,
    fontWeight: 'bold',
    cursor: 'pointer'
};

export default Button;