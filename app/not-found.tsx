import React from 'react';
import Link from "next/link";
import { RouterEnum } from "./_enum/router-enum";

function NotFound() {
  return (
    <main className='text-center'>
      <h2 className='text-3xl'>There was as problem.</h2>
      <p>We could not find the page you were looking for. </p>
      <p>Go back to the <Link href={RouterEnum.dashboard}>Dashboard</Link></p>
    </main>
  );
}

export default NotFound;
