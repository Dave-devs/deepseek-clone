"use client"

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { X, Menu } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed z-50 top-0 left-0 right-0 glass">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* ******** Logo ******** */}
          <div className="flex items-center">
            <Link href={"/"} className="flex items-center">
              <span className="text-2xl font-bold deepseek-gradient-text">
                DeepSeek
              </span>
            </Link>
          </div>
          {/* ******** Desktop Nav ******** */}
          <div className="hidden md:block">
            <div className="flex items-center gap-6">
              <Link
                href={"/featues"}
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                Features
              </Link>
              <Link href={"/pricing"} className="text-foreground/80 hover:text-foreground transition-colors">
                Pricing
              </Link>
              <Link href={"/docs"} className="text-foreground/80 hover:text-foreground transition-colors">
                Docs
              </Link>
              <Link href={"/chat"}>
                <Button variant="default">Try Deepseek</Button>
              </Link>
            </div>
          </div>
          {/* ******** Mobile Nav ******** */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} type="button" className="text-foreground">
              {isOpen ? (<X className="size-6" />) : (<Menu className="size-6" />)}
            </button>
          </div>

        </div>
      </div>
      {/* ******** Mobile Nav Menu ******** */}
      {isOpen && (
        <div className="md:hidden glass animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href={"/featues"}
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground/80 hover:bg-background/50 hover:text-foreground" onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <Link href={"/pricing"} className="block px-3 py-2 rounded-md text-base font-medium text-foreground/80 hover:bg-background/50 hover:text-foreground" onClick={() => setIsOpen(false)}>
              Pricing
            </Link>
            <Link href={"/docs"} className="block px-3 py-2 rounded-md text-base font-medium text-foreground/80 hover:bg-background/50 hover:text-foreground" onClick={() => setIsOpen(false)}>
              Docs
            </Link>
            <Link href={"/chat"} className="">
              <Button variant="default">Try Deepseek</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
