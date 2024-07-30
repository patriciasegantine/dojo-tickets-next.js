import { RouterEnum } from "../_enum/router-enum";

interface Endpoints {
  dashboard: string;
  tickets: {
    getTicketsList: string;
    getTicketDetails: string;
  };
  news: {
    getNewsList: string;
  };
}

export const BASE_URL = 'http://localhost:5000'

export const endpoints: Endpoints = {
  dashboard: `${BASE_URL}/`,
  tickets: {
    getTicketsList: `${BASE_URL}/${RouterEnum.tickets}`,
    getTicketDetails: `${BASE_URL}/${RouterEnum.tickets}/:id`
  },
  news: {
    getNewsList: `${BASE_URL}/${RouterEnum.news}`,
  },
}
