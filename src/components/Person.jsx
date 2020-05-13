import React, { useState } from 'react';

const Person = ({age, firstName, lastName, hairColor }) => {

    const [currentAge, setCurrentAge] = useState(age);

    const raiseBirthday = () => {
        setCurrentAge(age + 1)
    };

        return(
            <div className="card">
            <div className="card-body">
                <div className="card-title">
                    {lastName}, {firstName}
                </div>
                <p className="card-text">Age: { currentAge }</p>
                <p className="card-text">Hair Color: { hairColor }</p>
                <button
                    onClick = { raiseBirthday }
                    className="btn"
                    style = {{
                        backgroundColor: "rebeccapurple",
                        color:'#fff'}}
                    >Raise Birthday</button>
            </div>
        </div>
        );
                    }



export default Person;