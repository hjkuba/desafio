import React from 'react';
import {s2darkGrey, s2lightBlue} from '../variables/colors';

const HealthBar = (props) => {
    const { barStyles, fillBarStyles, healthTextStyles } = styles;
    return (
        <div>
            <div style={barStyles}>
                <div style={{ ...fillBarStyles, width: `${props.health}%`}}></div>
            </div>
            <p style={healthTextStyles}>{props.health}%</p>
        </div>
    );
};

const styles = {
    barStyles: {
        border: `1px solid ${s2lightBlue}`
    },
    fillBarStyles: {
        backgroundColor: s2lightBlue,
        height: 8
    },
    healthTextStyles: {
        color: s2darkGrey,
        fontSize: 14,
        fontWeight: 'bold',
        margin: '4px 0 24px 0'
    }
};

export default HealthBar;