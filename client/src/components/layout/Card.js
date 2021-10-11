import React from 'react';

const Card = ({ column }) => {
  return (
    <div className="card text-center ">
      <img
        className="card-img-top img"
        src={'./img/' + column.image}
        alt="Home Page Column"
      />
      <div className="card-body">
        <h4 className="card-title">{column.title}</h4>
        <hr />
        <p className="card-text">{column.content}</p>
        <a href={column.link.page} class="btn btn-dark">
          {column.link.text}
        </a>
      </div>
    </div>
  );
};

export default Card;
