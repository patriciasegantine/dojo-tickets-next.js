import React from 'react';
import { Card } from "../components/card";
import { endpoints } from "../api/endpoints";

interface NewsProps {
  id: number
  title: string
  description: string
}

async function getNews(): Promise<NewsProps[]> {
  const resp = await fetch(`${endpoints.news.getNewsList}`, {
    next: {revalidate: 30}
  })
  return resp.json()
}

export default async function NewsList() {
  const news = await getNews()
  
  return (
    <>
      {
        news.length
          ? news?.map(card => {
            return (
              <Card
                key={card.id}
                title={card?.title}
                content={card?.description}
              />
            )
          })
          : <p>Ops! There are no news!</p>
      }
    </>
  );
};
