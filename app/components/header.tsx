import React from 'react';
import { Navbar } from "./navbar";
import { Logo } from "./logo";

export const Header = () => {
  return (
    <header className='flex justify-center items-center'>
      <Logo/>
      <Navbar/>
    </header>
  );
};
