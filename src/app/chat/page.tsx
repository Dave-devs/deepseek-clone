"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui-custom/Button";
import { AlignLeft } from "lucide-react";
import ChatSidebar from "@/components/chat/ChatSidebar";

export default function Chat() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([]);

  // Function to toggle Sidebar
  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <main>
      <div className="flex h-screen">
        {/*  */}
        <ChatSidebar
          openSidebar={openSidebar}
          setOpenSidebar={setOpenSidebar}
        />
        {/*  */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 pb-8 bg-card relative">
          <div className="md:hidden absolute px-4 top-6 flex items-center justify-between w-full">
            {/* Menu Icon */}
            <Button size="icon" className="rotate-180" onClick={toggleSidebar}>
              <AlignLeft className="size-6" />
            </Button>
            {/* Chat Icon */}
            <Image
              className="opacity-70"
              src={"/chat-icon.svg"}
              alt=""
              width={40}
              height={40}
            />
          </div>

          {messages.length === 0 ? (
            <>
              <div className="flex items-center gap-3">
                <Image
                  src={"/logo.png"}
                  alt=""
                  className="size-12"
                  width={10}
                  height={10}
                />
                <p className="text-xl font-medium">Hi, I&apos;m DeepSeek.</p>
              </div>
              <p className="text-xs mt-2">How can I help you today?</p>
            </>
          ) : (
            <div></div>
          )}
          {/* Textarea */}
          {/* ******** Prompt Box ******** */}
          <p className="text-xs absolute bottom-1 text-muted-foreground">
            AI-generated for reference only
          </p>
        </div>
      </div>
    </main>
  );
}
