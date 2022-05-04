import { useState } from "react";
import { FaBars } from "react-icons/fa";
import Logo from "../components/Logo";
import { LinkList } from "../components/LinkList";
import NavLinks from "../data/links";

export default function Navbar() {
  const [toggled, setToggled] = useState(false);
  const navStylesDesktop =
    "hidden md:flex items-center tracking-wider font-daughter font-bold uppercase text-md text-secondary gap-12";
  const navStylesMobile = `md:hidden text-md flex flex-col md:flex-row transition-all duration-300 ease-linear text-secondary`;
  const listStyles = "";
  return (
    <nav>
      <div className="flex items-center justify-end px-4 container">
        {/*Desktop Menu*/}
        <ul className={navStylesDesktop}>
          <LinkList className={listStyles} links={NavLinks} />
        </ul>
        {/*End Desktop Menu*/}
        {/*Mobile Menu*/}
        <Logo size="60" className="md:hidden py-1" />
        <h1 className="text-primary md:hidden text-2xl font-lobster text-center grow">
          The Cosmic Pigeon
        </h1>
        <div className="flex items-center justify-end sm:hidden">
          <FaBars
            className="text-2xl text-secondary md:hidden"
            type="button"
            onClick={() => setToggled(!toggled)}
          />
        </div>
      </div>
      <ul className={`md:hidden ${toggled ? navStylesMobile : "hidden"}`}>
        <LinkList
          className="p-4 tracking-wider transition-all duration-300 ease-linear hover:text-white font-bold uppercase font-daughter"
          links={NavLinks}
        />
      </ul>

      {/*End Mobile Menu*/}
    </nav>
  );
}
