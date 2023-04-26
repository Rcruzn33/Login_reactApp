import React from "react";

export default class SignButton extends React.Component {
    render() {
        return React.createElement('button',{
            className: 'btn btn-primary',
            },'Sign In');
    }
}

