import React from 'react';
import {s2blue} from "../variables/colors";

const NotificationBox = (props) => (
    <div style={styles}>
        {props.children}
    </div>
);

const styles = {
    flex: 1,
    padding: 24,
    marginBottom: 24,
    width: 200,
    textAlign: 'center',
    border: `1px solid ${s2blue}`
};

export default NotificationBox;