import React from 'react';
import Options from './Options';

const Questions = ({ question }) => {
    // console.log(question);
    const { question: ques, correctAnswer, options } = question;
    return (
        <div>
            <h1 className='text-3xl'> {ques}</h1>
            {
                options.map(item => <Options
                item={item}
                ></Options>)
            }
        </div>
    );
};

export default Questions;