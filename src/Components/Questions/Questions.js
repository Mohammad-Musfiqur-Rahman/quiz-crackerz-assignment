import React from 'react';

const Questions = ({ question }) => {
    console.log(question);
    const { question: ques, correctAnswer, options } = question;
    return (
        <div>
            <h1 className='text-2xl'>Questions: {ques}</h1>
            {
                options.map(item => <i> {item} </i>)
            }
        </div>
    );
};

export default Questions;