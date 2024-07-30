'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { RouterEnum } from "../_enum/router-enum";
import classNames from "classnames";

export const Navbar = () => {
  const pathname = usePathname();
  
  return (
    <nav>
      <Link
        href={RouterEnum.dashboard}
        className={classNames({'active': pathname === RouterEnum.dashboard})}
      >
        Dashboard
      </Link>
      
      <Link
        href={RouterEnum.tickets}
        className={classNames({'active': pathname === `/${RouterEnum.tickets}`})}
      >
        Tickets
      </Link>
    </nav>
  );
};
