"use client";
import { Bs0Circle } from "react-icons/bs"
import ddd from '../public/coo.jpg'
import Image from 'next/image'

export default function Home(Component) {
  return (
    <div className="h-screen ">
      <Image className="absolute h-screen w-full"  src={ddd} alt='ddasfsdfasdfasdfd' />
   
    </div>
  );
}
