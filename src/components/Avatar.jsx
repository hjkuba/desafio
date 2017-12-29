import React from 'react';

const Avatar = (props) => (
    <div style={{ ...styles, backgroundImage: `url(${props.img})` }}></div>
);

const styles = {
    height: 150,
    width: 150,
    borderRadius: '50%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
};

export default Avatar;