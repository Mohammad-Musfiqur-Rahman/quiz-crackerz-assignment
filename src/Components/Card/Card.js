import React from 'react';

const Card = ({ card }) => {
    const { id, name, total, logo } = card;
    console.log(card)
    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Total Quiz {total}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Quiz Exam</button>
                </div>
            </div>
        </div>
    );
};

export default Card;