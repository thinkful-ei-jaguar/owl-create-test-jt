import React from 'react';
import User from './User';
// import './List.css';

export default function List(props){

    return (
        <section className='List'>
            <div className='List-users'>
                {props.users.map((user) =>
                   <User
                        key={user.id}
                        avatar={user.avatar}
                        name={user.name}
                        inSession={user.inSession}
                   />  
                )}
            </div>
        </section>
    );
}