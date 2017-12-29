import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import { PlayerBox, NotificationBox, Button } from './components';

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
    });

    it('renders 2 PlayerBox Components', () => {
        const wrapper = shallow(<App/>);
        expect(wrapper.find(PlayerBox)).toHaveLength(2);
    });

    it('renders a NotificationBox Component', () => {
        const wrapper = shallow(<App/>);
        expect(wrapper.find(NotificationBox)).toHaveLength(1);
    });

    it('renders a Restart Button', () => {
        const wrapper = shallow(<App/>);
        expect(wrapper.find(Button)).toHaveLength(1);
    });

    it('initializes correct state', () => {
        const wrapper = shallow(<App/>);
        expect(wrapper.state()).toEqual({
            player1Name: 'Yoda',
            player2Name: 'Darth Sidious',
            player1Health: 100,
            player2Health: 100,
            player1Status: 'fighting',
            player2Status: 'fighting',
            notificationMsg: 'A Partida Começou!'
        });
    });

    it('attack actions are working fine', () => {
        const appWrapper = mount(<App/>);
        const playerBoxWrapper1 = appWrapper.find(PlayerBox).first();
        const buttonWrapper1 = playerBoxWrapper1.find(Button);
        const playerBoxWrapper2 = appWrapper.find(PlayerBox).last();
        const buttonWrapper2 = playerBoxWrapper2.find(Button);

        buttonWrapper1.simulate('click');
        expect(appWrapper.state().player2Health).toEqual(80);
        expect(appWrapper.state().notificationMsg).toEqual('Yoda ataca Darth Sidious. Darth Sidious possui 80% de vida.');

        buttonWrapper2.simulate('click');
        expect(appWrapper.state().player1Health).toEqual(80);
        expect(appWrapper.state().notificationMsg).toEqual('Darth Sidious ataca Yoda. Yoda possui 80% de vida.');
    });

    it('restart action is working fine', () => {
        const appWrapper = mount(<App/>);
        const restartButtonWrapper = appWrapper.find('#restart-button');
        const playerBoxWrapper1 = appWrapper.find(PlayerBox).first();
        const buttonWrapper1 = playerBoxWrapper1.find(Button);
        buttonWrapper1.simulate('click');
        restartButtonWrapper.simulate('click');
        expect(appWrapper.state()).toEqual({
            player1Name: 'Yoda',
            player2Name: 'Darth Sidious',
            player1Health: 100,
            player2Health: 100,
            player1Status: 'fighting',
            player2Status: 'fighting',
            notificationMsg: 'A Partida Começou!'
        });
    });

    it("finishes game when any player's health reaches 0", () => {
        const appWrapper = mount(<App/>);
        const restartButtonWrapper = appWrapper.find('#restart-button');
        const playerBoxWrapper1 = appWrapper.find(PlayerBox).first();
        const buttonWrapper1 = playerBoxWrapper1.find(Button);
        const playerBoxWrapper2 = appWrapper.find(PlayerBox).last();
        const buttonWrapper2 = playerBoxWrapper2.find(Button);

        for(let i = 0; i < 5; i++) {
            buttonWrapper1.simulate('click');
        }

        expect(appWrapper.state().player1Status).toEqual('winner');
        expect(appWrapper.state().player2Status).toEqual('loser');
        expect(appWrapper.state().notificationMsg).toEqual('Yoda venceu a partida!');

        restartButtonWrapper.simulate('click');

        for(let i = 0; i < 5; i++) {
            buttonWrapper2.simulate('click');
        }

        expect(appWrapper.state().player1Status).toEqual('loser');
        expect(appWrapper.state().player2Status).toEqual('winner');
        expect(appWrapper.state().notificationMsg).toEqual('Darth Sidious venceu a partida!');
    })
});

