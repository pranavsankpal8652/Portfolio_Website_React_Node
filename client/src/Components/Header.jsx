

import { Button, Navbar } from "flowbite-react";

export default function Header() {
  return (
    <Navbar fluid rounded className= "max-w-[100%] sm:px-[40px] bg-slate-950   sticky top-0 z-[100] border-b border-slate-700 p-[30px]">
      <Navbar.Brand href="#banner" className=" md:text-sm  text-[7px] font-thin text-white text-center bg-black shadow-2xl brightness-110 rounded-full md:w-[60px] md:h-[60px] p-3 flex flex-col">PRNV<br></br><span className="word-spacing md:text-[7px] text-[2px]">Creations</span>
      </Navbar.Brand>
      <div className="flex">
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#about" className="text-white font-serif text-[20px]">About</Navbar.Link>
        <Navbar.Link href="#projects" className="text-white font-serif text-[20px]">Projects</Navbar.Link>
        <Navbar.Link href="#contact" className="text-white font-serif text-[20px]">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
