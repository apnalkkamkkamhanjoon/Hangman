import React from 'react';
import words from '../assets/wordList.json'

const Voca = () => {

    return (
        <div>
            {words.map((word, index) => {
                return (
                    <li key={index} style={{ fontSize: '2rem' }}>
                        {word}
                    </li>
                )
            })}
        </div>
    );
};

export default Voca;