import React from 'react';
import { s2blue } from "../variables/colors";

const Button = (props) => (
    <button style={styles}>{props.children.toUpperCase()}</button>
);

const styles = {
    padding: 8,
    backgroundColor: s2blue,
    border: 'none',
    color: 'white',
    fontWeight: 'bold'
};

export default Button;