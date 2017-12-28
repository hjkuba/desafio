import React, { Component } from 'react';
import { PlayerBox, NotificationBox, Button } from './components';

import sidious from './img/sidious.jpg';
import yoda from './img/yoda.jpg';

class App extends Component {
    render() {
        const {contentStyles, centerBoxStyles} = styles;
        return (
            <div style={styles}>
                <div style={contentStyles}>
                    <PlayerBox name="Yoda" health="100%" avatar={yoda}/>
                    <div style={centerBoxStyles}>
                        <NotificationBox/>
                        <Button>Reiniciar</Button>
                    </div>
                    <PlayerBox name="Darth Sidious" health="100%" avatar={sidious}/>
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