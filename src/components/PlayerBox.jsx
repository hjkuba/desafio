import React from 'react';
import { Button, Avatar, HealthBar } from '.';
import { s2blue } from '../variables/colors';

const PlayerBox = (props) => {
    const { profileStyles, playerNameStyles, statusStyles, statusMsgStyles } = styles;
    const renderAvatar = () => {
        switch(props.status) {
            case 'winner':
                return props.avatarWinner;
            case 'loser':
                return props.avatarLoser;
            default:
                return props.avatar;
        }
    };
    const renderContent = () => {
      switch(props.status) {
          case 'winner':
              return <h1 style={statusMsgStyles}>Vencedor!</h1>;
          case 'loser':
              return <h1 style={statusMsgStyles}>Perdedor!</h1>;
          default:
              return (
                  [
                      <HealthBar key={0} health={props.health}/>,
                      <Button key={1} onClick={props.onAttackClick}>Atacar</Button>
                  ]
              );
      }
    };
    return (
        <div style={styles}>
            <div style={profileStyles}>
                <Avatar img={renderAvatar()}/>
                <h1 style={playerNameStyles}>{props.name}</h1>
            </div>
            <div style={statusStyles}>
                { renderContent() }
            </div>
        </div>
    );
};

const styles = {
    backgroundColor: 'white',
    width: 300,
    minHeight: 375,
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
    },
    statusMsgStyles: {
        textAlign: 'center',
        color: s2blue,
        textTransform: 'uppercase'
    }
};

export default PlayerBox;