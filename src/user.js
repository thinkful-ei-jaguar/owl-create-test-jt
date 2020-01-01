import React from 'react';
// import './user.css';

export default function User(props){
    console.log(props);
    return (
        <div className= 'User'>
            <img src= {props.avatar} alt='user avatar' />
            <h3>{props.name}</h3>
            <p>{props.inSession}</p>
        </div>
    )
}