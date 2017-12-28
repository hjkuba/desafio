import React, { Component } from 'react';
import { PlayerBox, NotificationBox, Button } from './components';

import sidious from './img/sidious.jpg';
import yoda from './img/yoda.jpg';
import sidiousWinner from './img/sidious_winner.jpg';
import yodaWinner from './img/yoda_winner.jpg';
import sidiousLoser from './img/sidious_loser.jpg';
import yodaLoser from './img/yoda_loser.jpg';

const initialState = {
    player1Name: 'Yoda',
    player2Name: 'Darth Sidious',
    player1Health: 100,
    player2Health: 100,
    player1Status: 'fighting',
    player2Status: 'fighting',
    notificationMsg: 'A Partida Começou!'
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
        this._onPlayer1Attack = this._onPlayer1Attack.bind(this);
        this._onPlayer2Attack = this._onPlayer2Attack.bind(this);
        this._onRestart = this._onRestart.bind(this);
    }
    _onPlayer1Attack() {
        if(this.state.player2Health <= 20) {
            this.setState({
                notificationMsg: `${this.state.player1Name} venceu a partida!`,
                player1Status: 'winner',
                player2Status: 'loser'
            });
            return;
        }
        this.setState((prevState, props) => (
            {
                notificationMsg: `${prevState.player1Name} ataca ${prevState.player2Name}. 
                ${prevState.player2Name} possui ${prevState.player2Health - 20}% de vida.`,
                player2Health: prevState.player2Health - 20
            }
        ))
    }
    _onPlayer2Attack() {
        if(this.state.player1Health <= 20) {
            this.setState({
                notificationMsg: `${this.state.player2Name} venceu a partida!`,
                player2Status: 'winner',
                player1Status: 'loser'
            });
            return;
        }
        this.setState((prevState, props) => (
            {
                notificationMsg: `${prevState.player2Name} ataca ${prevState.player1Name}. 
                ${prevState.player1Name} possui ${prevState.player1Health - 20}% de vida.`,
                player1Health: prevState.player1Health - 20
            }
        ))
    }
    _onRestart() {
        this.setState(initialState);
    }
    render() {
        const { contentStyles, centerBoxStyles } = styles;
        const { player1Name, player1Health, player1Status,
            player2Name, player2Health, player2Status } = this.state;
        return (
            <div style={styles}>
                <div style={contentStyles}>
                    <PlayerBox
                        name={ player1Name }
                        health={ player1Health }
                        avatar={yoda}
                        avatarWinner={yodaWinner}
                        avatarLoser={yodaLoser}
                        status={ player1Status }
                        onAttackClick={this._onPlayer1Attack}
                    />
                    <div style={centerBoxStyles}>
                        <NotificationBox>{this.state.notificationMsg}</NotificationBox>
                        <Button onClick={this._onRestart}>Reiniciar</Button>
                    </div>
                    <PlayerBox
                        name={ player2Name }
                        health={ player2Health }
                        avatar={sidious}
                        avatarWinner={sidiousWinner}
                        avatarLoser={sidiousLoser}
                        status={ player2Status }
                        onAttackClick={this._onPlayer2Attack}
                    />
                </div>
            </div>
        );
    }
}

const styles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    contentStyles: {
        display: 'flex'
    },
    centerBoxStyles: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        margin: '0 24px'
    }
};

export default App;