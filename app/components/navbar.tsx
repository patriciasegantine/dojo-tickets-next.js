import React from 'react';
import Link from "next/link";
import { RouterEnum } from "../_enum/router-enum";

export const Navbar = () => {
  return (
    <nav>
      <Link href={RouterEnum.home} className='active'>Dashboard</Link>
      <Link href={RouterEnum.tickets}>Tickets</Link>
    </nav>
  );
};
