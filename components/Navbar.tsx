"use client";
import Link from "next/link";
import React from "react";
import { Button } from ".";

const Navbar = () => {
  return (
    <header className="w-full h-auto py-[6px] bg-[color:var(--dark-blur)]">
      <nav className="content-width flex justify-between items-center">
        <Link href={"/"}>
          <img
            src={"/logo.png"}
            alt="logo"
            className="object-cover w-[60px] sm:w-[100px] md:w-[160px]  h-auto"
          />
        </Link>
        <Button title="Sign up | Login" customCSS="text-white" type="button" />
      </nav>
    </header>
  );
};

export default Navbar;
