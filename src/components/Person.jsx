import React, { Component } from 'react';

class Person extends Component{
    render() {

        const { firstName, lastName, age, hairColor } = this.props;

        return(
            <div className="card">
            <div className="card-body">
                <div className="card-title">
                    {lastName}, {firstName}
                </div>
                <p className="card-text">Age: { age }</p>
                <p className="card-text">Hair Color: { hairColor }</p>
            </div>
        </div>
        );
    }
}


export default Person;