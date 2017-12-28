import React from 'react';
import { Button, Avatar, HealthBar } from '.';
import { s2blue } from '../variables/colors';

const PlayerBox = (props) => {
    const { profileStyles, playerNameStyles, statusStyles } = styles;
    return (
        <div style={styles}>
            <div style={profileStyles}>
                <Avatar img={props.avatar}/>
                <h1 style={playerNameStyles}>{props.name}</h1>
            </div>
            <div style={statusStyles}>
                <HealthBar health={100}/>
                <Button>Atacar</Button>
            </div>
        </div>
    );
};

const styles = {
    backgroundColor: 'white',
    width: 300,
    profileStyles: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 24,
        backgroundColor: s2blue
    },
    playerNameStyles: {
        color: 'white',
        fontSize: 24,
        margin: '16px 0 0 0'
    },
    statusStyles: {
        display: 'flex',
        flexDirection: 'column',
        padding: 24
    }
};

export default PlayerBox;