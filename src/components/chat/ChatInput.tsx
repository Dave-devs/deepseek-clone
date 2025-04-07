"use client";

import React, { useState } from "react";
import { Button } from "../ui-custom/Button";
import { Loader2, Send } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { useIsMobile } from "@/hook/use-mobile";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}
export default function ChatInput({
  onSendMessage,
  isLoading,
}: ChatInputProps) {
  const [message, setMessage] = useState('');
  const isMobile = useIsMobile();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      onSendMessage(message);
      setMessage('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="border-t border-border bg-background p-4 fixed bottom-0 left-0 right-0 z-10">
      <div className={`mx-auto ${isMobile ? "w-full" : "container max-w-3xl"}`}>
        <form onSubmit={handleSubmit} className="relative max-w-full">
          <Textarea
            placeholder="Message DeepSeek..."
            className={`resize-none pr-20 ${isMobile ? 'min-h-[50px] w-full' : 'min-h-[60px]'} max-h-[200px] focus-visible:ring-primary`}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isLoading}
          />
          <Button
            type="submit"
            size="icon"
            disabled={message.trim() === '' || isLoading}
            className="absolute right-2 bottom-2"
          >
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
          </Button>
        </form>
        <div className={`mt-2 text-xs text-center text-muted-foreground ${isMobile ? 'text-[10px]' : ''}`}>
          DeepSeek may display inaccurate info, including about people, so double-check its responses.
        </div>
      </div>
    </div>
  );
}
