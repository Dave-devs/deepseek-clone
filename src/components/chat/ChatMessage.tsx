"use client";

import { cn } from "@/lib/utils";
import {
  Bot,
  CheckCheck,
  Copy,
  ThumbsDown,
  ThumbsUp,
  User,
} from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui-custom/Button";

interface ChatMessageProps {
  message: {
    id: string;
    content: string;
    role: "user" | "assistant";
    timestamp: Date;
  };
}
export default function ChateMessage({ message }: ChatMessageProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(message.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={cn(
        "py-6 px-4 sm:px-6 md:px-8 flex animate-fade-in",
        message.role === "assistant" ? "bg-muted/50" : ""
      )}
    >
      <div className="container mx-auto max-w-4xl">
        <div className="flex gap-4 sm:gap-6">
          <div className="flex-shrink-0 mt-1">
            {message.role === "user" ? (
              <div className="size-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                <User size={18} />
              </div>
            ) : (
              <div className="size-8 rounded-full deepseek-gradient flex items-center justify-center text-white">
                <Bot size={18} />
              </div>
            )}
          </div>

          <div className="flex-1 space-y-2">
            <div className="font-medium">
              {message.role === "user" ? "You" : "DeepSeek"}
            </div>

            <div className="text-foreground prose prose-sm sm:prose-base">
              {message.content}
            </div>

            {message.role === "assistant" && (
              <div className="flex items-center gap-2 mt-3">
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 px-2 text-muted-foreground hover:text-foreground"
                  onClick={copyToClipboard}
                >
                  {copied ? (
                    <>
                      <CheckCheck size={14} className="mr-1" />
                      <span className="text-xs">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} className="mr-1" />
                      <span className="text-xs">Copy</span>
                    </>
                  )}
                </Button>

                <div className="flex gap-1 ml-auto">
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                    <ThumbsUp size={14} />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                    <ThumbsDown size={14} />
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
