import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const Quiz = () => {
    const quiz = useLoaderData().data.questions;
    const allData = useLoaderData().data;
    // console.log(quiz)
    return (
        <div>
            <h1 className='text-6xl text-center m-5'>{allData.name}</h1>
            {
                
                quiz.map(question => <Questions
                key={question.id}
                question={question}
                ></Questions>
                )
            }
        </div>
    );
};

export default Quiz;