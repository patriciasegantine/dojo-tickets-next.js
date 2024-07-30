import React from 'react';
import { Card } from "../components/card";
import { RouterEnum } from "../_enum/router-enum";

interface NewsProps {
  id: number
  title: string
  description: string
}

async function getNews(): Promise<NewsProps[]> {
  const resp = await fetch(`http://localhost:4000/${RouterEnum.news}`, {
    next: {revalidate: 30}
  })
  return resp.json()
}

export default async function NewsList() {
  const news = await getNews()
  
  return (
    <>
      {
        news?.map(card => {
          return (
            <Card
              key={card.id}
              title={card?.title}
              content={card?.description}
            />
          )
        })
      }
      
      {news.length === 0 && (
        <p>Ops! There are no news!</p>
      )}
    </>
  );
};
