import React from 'react';
import words from '../assets/wordList.json'

const Voca = () => {

    return (
        <div>
            {words.map((a, index) => {
                return (
                    <li key={index} style={{ fontSize: '2rem' }}>
                        {a}
                    </li>
                )
            })}
        </div>
    );
};

export default Voca;