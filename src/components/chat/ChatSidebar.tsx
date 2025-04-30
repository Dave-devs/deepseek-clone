import React, { useState } from "react";
import Image from "next/image";
import { Menu, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { Button } from "../ui-custom/Button";
import { useClerk, UserButton } from "@clerk/nextjs";
import { useAppContext } from "@/context/AppContext";
import ChatHistory from "./ChatHistory";

interface ChatSidebarProps {
  openSidebar: boolean;
  setOpenSidebar: (args: boolean) => void;
}

export default function ChatSidebar({
  openSidebar,
  setOpenSidebar,
}: ChatSidebarProps) {
  // Open clerk auth modal
  const { openSignIn } = useClerk();
  const { user } = useAppContext();
  // Open Chat History
  const [openHistory, setOpenHistory] = useState({id: 0, open: false});
  // Function to toggle Sidebar
  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <nav
      className={`flex flex-col justify-between bg-accent pt-7 transition-all z-50 max-md:absolute max-md:h-screen ${
        openSidebar ? "p-4 -pt-10 w-64" : "md:w-20 w-0 max-md:overflow-hidden"
      }`}
    >
      <div>
        <div
          className={`flex ${
            openSidebar
              ? "flex-row gap-10 items-center"
              : "flex-col items-center gap-8"
          }`}
        >
          <Image
            src={openSidebar ? "/text-logo.png" : "/logo.png"}
            alt={"logo"}
            width={40}
            height={40}
            className={`${openSidebar ? "w-36" : "size-6"}`}
          />

          <div
            onClick={toggleSidebar}
            className="group relative flex items-center justify-center hover:bg-gray-500/20 transition-all duration-300 size-9 aspect-square rounded-lg cursor-pointer"
          >
            <Menu className="size-6 md:hidden" />
            {openSidebar ? (
              <PanelLeftClose className="hidden md:block size-6" />
            ) : (
              <PanelLeftOpen className="hidden md:block size-6" />
            )}
          </div>
        </div>
        {/* New Chat Button */}
        <Button
          size={openSidebar ? "default" : "icon"}
          className={`flex items-center justify-center cursor-pointer ${
            openSidebar
              ? "bg-primary hover:opacity-90 rounded-2xl gap-2 p-2.5 w-max"
              : "mt-8 group-relative size-9 mx-auto hover:bg-accent rounded-lg"
          }`}
        >
          <Image
            src={"/chat-icon.svg"}
            alt="chat-icon"
            width={40}
            height={40}
            className={"size-6"}
          />
          <div className="absolute w-max -top-12 -right-12 opacity-0 group-hover:opacity-100 transition bg-accent text-sm px-3 py-2 rounded-lg pointer-events-none">
            New Chat
            <div className="size-3 absolute bg-accent rotate-45 left-4 -bottom-1.5"></div>
          </div>
          {openSidebar && <p className="font-medium">New Chat</p>}
        </Button>

        {/* Recent Chats */}
        <div className={`mt-8 text-sm ${openSidebar ? "block" : "hidden"}`}>
          <p className="my-1 text-[#64748b]">Recents</p>
          {/* Chat Label */}
          <ChatHistory openHistory={openHistory} setOpenHistory={setOpenHistory} />
        </div>
      </div>
      {/* Deepeek QRCode & Profile Image */}
      <div>
        {/* DeepSeek QRCode */}
        <div
          className={`flex items-center cursor-pointer group relative ${
            openSidebar
              ? "gap-1 text-sm p-2.5 border border-primary rounded-lg hover:bg-accent/10 cursor-pointer"
              : "size-10 mx-auto hover:bg-accent rounded-lg"
          }`}
        >
          <Image
            src={"/phone.png"}
            alt=""
            width={40}
            height={40}
            className={openSidebar ? "size-5" : "size-6.5 mx-auto"}
          />
          <div
            className={`absolute -top-60 pb-8 ${
              !openSidebar && "-right-40"
            } opacity-0 group-hover:opacity-100 hidden group-hover:block transition`}
          >
            <div className=" flex flex-col relative w-max bg-accent text-sm p-3 rounded-lg shadow-lg">
              <Image
                src={"/qrcode.png"}
                alt=""
                width={100}
                height={40}
                className={`w-full h-40 ${openSidebar && "mx-auto"}`}
              />
              <p>Scan to get DeepSeek App</p>
              <div
                className={`size-3 absolute bg-accent rotate-45 ${
                  openSidebar ? "right-1/2" : "left-4"
                } -bottom-1.5`}
              ></div>
            </div>
          </div>
          {openSidebar && (
            <>
              <span>Get App</span>{" "}
              <Image
                src={"/new-icon.svg"}
                alt=""
                width={40}
                height={40}
                className={"size-6"}
              />{" "}
            </>
          )}
        </div>

        {/* Profile Button */}
        <div
          onClick={() => (user ? null : openSignIn())}
          className={`flex items-center ${
            openSidebar
              ? "hover:bg-sidebar-accent-foreground/10 rounded-lg"
              : "justify-center w-full"
          } gap-3 text-sm p-2 mt-2 cursor-pointer`}
        >
          {user ? (
            <UserButton />
          ) : (
            <Image
              src={"/profile-icon.svg"}
              alt=""
              width={40}
              height={40}
              className={"size-7"}
            />
          )}
          {openSidebar && <span>My Profile</span>}
        </div>
      </div>
    </nav>
  );
}
