import React, { Suspense } from 'react';
import TicketList from "./ticket-list";
import Loading from "../loading";
import Link from "next/link";
import { RouterEnum } from "../_enum/router-enum";

export default function Tickets() {
  
  return (
    <main>
      <div className='flex-container'>
        <div>
          <h2>Tickets</h2>
        </div>
        
        <div className="btn-container ">
          <Link href={RouterEnum.new_ticket}>
            <button className="btn-primary btn">Add Tickets</button>
          </Link>
        </div>
      </div>
      
      <p><small>Currently open tickets</small></p>
      <Suspense fallback={<Loading/>}>
        <TicketList/>
      </Suspense>
    </main>
  )
}
