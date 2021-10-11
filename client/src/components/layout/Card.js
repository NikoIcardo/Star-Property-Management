import React from 'react';

const Card = ({ column }) => {
  return (
    <div class="card text-center">
      <img
        class="card-img-top img"
        src={'./img/' + column.image}
        alt="Home Page Column"
      />
      <div class="card-body">
        <h5 className="card-title">{column.title}</h5>
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
