import React from 'react';

interface CardProps {
  title: string
  content: string
}

export const Card = ({title, content}: CardProps) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};
