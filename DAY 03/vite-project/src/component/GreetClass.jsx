import React from 'react';

export default class GreetClass extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}! Welcome to my class component!</h1>;
    }
}