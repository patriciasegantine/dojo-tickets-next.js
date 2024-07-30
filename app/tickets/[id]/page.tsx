import React from 'react';
import { TicketProps } from "../../_types/ticket-type";
import { notFound } from "next/navigation";
import { endpoints } from "../../api/endpoints";

export const dynamicParams = true

interface TicketDetailsProps {
  params: { id: string }
}

export async function generateStaticParams() {
  const resp = await fetch(`${endpoints.tickets.getTicketsList}`)
  const tickets = await resp.json();
  
  return tickets.map((ticket: TicketProps) => ({id: ticket.id}))
}

async function getTicket(id: string): Promise<TicketProps> {
  const resp = await fetch((`${endpoints.tickets.getTicketDetails}`).replace(':id', id), {
    next: {revalidate: 60}
  })
  
  if (!resp.ok) {
    notFound()
  }
  
  return resp.json()
}

export default async function TicketDetails({params}: TicketDetailsProps) {
  
  const ticket = await getTicket(params.id)
  
  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
      </nav>
      
      <div className="card">
        <h3>{ticket.title}</h3>
        
        <div className='flex-column-container'>
          <small>Created by {ticket?.user_email}</small>
        </div>
        
        <p>Status: {ticket.status}</p>
        <p>Open date: {ticket?.open_date}</p>
        <p>Last update: {ticket.last_updated}</p>
        
        <p>Description: {ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>
          {ticket.priority} priority
        </div>
        
        
        <div>
          <p>Comments:
            {!ticket?.comments &&
              <span> Ops, No comments at the moment!</span>
            }
          </p>
          
          {
            ticket?.comments?.map(comment => {
              return (
                <div key={comment.id} className="card comment">
                  <p>{comment.text}</p>
                  <small>{comment.date}</small>
                  <small> - {comment.user}</small>
                </div>
              )
            })
          }
        </div>
      </div>
    </main>
  );
}
