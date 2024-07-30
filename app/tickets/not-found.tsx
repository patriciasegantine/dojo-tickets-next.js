import React from 'react';
import Link from "next/link";
import { RouterEnum } from "../_enum/router-enum";

function NotFound(props) {
  return (
    <main className='text-center'>
      <h2 className='text-3xl'>There was as problem.</h2>
      <p>We could not find the ticket you were looking for. </p>
      <p>Go back to the <Link href={RouterEnum.tickets}>Tickets</Link></p>
    </main>
  );
}

export default NotFound;
