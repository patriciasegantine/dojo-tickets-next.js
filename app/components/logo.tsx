import React from 'react';
import Image from "next/image";
import logo from "../../public/dojo.jpeg";

export const Logo = () => {
  return (
    <div className='logo-container'>
      <Image
        src={logo}
        alt="Dojo logo"
        width={50}
        quality={100}
      />
      <h2>Dojo Helpdesk</h2>
    </div>
  );
};
