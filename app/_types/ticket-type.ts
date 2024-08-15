type PriorityType = 'low' | 'medium' | 'high'
export type StatusType = 'open' | 'in-progress' | 'closed';

type Comment = {
  id: number
  user: string;
  date: string;
  text: string;
};

export interface TicketProps {
  id: string;
  title: string;
  body: string;
  priority: PriorityType;
  user_email: string;
  open_date: string;
  status: StatusType
  assigned_to: string;
  due_date: string;
  last_updated: string;
  tags: string[];
  comments: Comment[];
}

export interface CreateTicketProps {
  title: string;
  body: string;
  priority: PriorityType;
  user_email: string;
}
