import { TicketProps } from "../_types/ticket-type";
import Link from "next/link";
import { RouterEnum } from "../_enum/router-enum";
import { endpoints } from "../api/endpoints";

async function getTickets(): Promise<TicketProps[]> {
  const resp = await fetch(`${endpoints.tickets.getTicketsList}`, {
    next: {revalidate: 0}
  })
  return resp.json()
}

export default async function TicketList() {
  const tickets = await getTickets()
  
  return (
    <>
      {
        tickets.length
          ? tickets?.filter(ticket => ticket.status === 'open').map((ticket) => (
            <div key={ticket.id} className='card my-5'>
              <Link href={`${RouterEnum.tickets}/${ticket.id}`}>
                <h3>{ticket.title}</h3>
                
                <div className='flex-column-container'>
                  <small>Open date: {ticket.open_date}</small>
                  <small>Status: {ticket.status}</small>
                </div>
                
                <p>{ticket.body.slice(0, 200)}...</p>
                <div className={`pill ${ticket.priority}`}>
                  {ticket.priority} priority
                </div>
              </Link>
            </div>
          ))
          : <p className='text-center'>There are no open tickets, yay! </p>
      }
    </>
  );
}
