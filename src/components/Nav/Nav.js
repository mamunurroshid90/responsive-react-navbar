import React, { useState } from "react";
import Button from "../Button/Button";

const Nav = () => {
  let links = [
    { name: "HOME", link: "/" },
    { name: "SERVICE", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "BLOG", link: "/" },
    { name: "CONTACT", link: "/" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <div className="bg-white shadow-md w-full fixed top-0 left-0">
      <div className="md:flex bg-white py-4 px-7 justify-between items-center md:px-10 ">
        <div className="flex md:flex items-center font-bold text-2xl cursor-pointer font-[Poppins]">
          <span className="text-3xl text-indigo-600 mr-1 pt-2">
            <ion-icon name="logo-ionic"></ion-icon>
          </span>
          <h3>Designer</h3>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20" : "top-[-490px]"
          } `}
        >
          {links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={link.link}
                className="text-gray-800 hover:text-gray-500 duration-700"
              >
                {link.name}
              </a>
            </li>
          ))}
          <Button>Get started</Button>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
