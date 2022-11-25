import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const Quiz = () => {
    const quiz = useLoaderData().data.questions;
    const allData = useLoaderData().data;
    // console.log(quiz)
    return (
        <div>
            {allData.name}
            {
                
                quiz.map(question => <Questions
                key={question.id}
                ></Questions>
                )
            }
        </div>
    );
};

export default Quiz;