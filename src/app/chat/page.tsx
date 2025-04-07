"use client";

import ChatInput from '@/components/chat/ChatInput';
import ChatSidebar from '@/components/chat/ChatSidebar';
import React, { useEffect, useRef, useState } from 'react'
import { toast } from 'sonner';
import { Menu } from "lucide-react";
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hook/use-mobile';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import ChatMessage from '@/components/chat/ChatMessage';

interface Message {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
}
export default function Chat() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hello! I\'m DeepSeek, an advanced AI assistant. I can help with a wide range of tasks including answering questions, writing, coding, and more. How can I assist you today?',
      role: 'assistant',
      timestamp: new Date(),
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  // Function to toggle sidebar
  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  // Auto scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Mock function for sending messages to API
  const sendMessage = async (content: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      role: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Add assistant response
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: generateMockResponse(content),
        role: 'assistant',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Generate mock responses
  const generateMockResponse = (userMessage: string): string => {
    const lowerCaseMessage = userMessage.toLowerCase();

    if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
      return 'Hello! How can I help you today?';
    }

    if (lowerCaseMessage.includes('how are you')) {
      return 'I\'m just a language model, so I don\'t have feelings, but I\'m functioning well and ready to assist you!';
    }

    if (lowerCaseMessage.includes('what can you do')) {
      return 'I can help with a wide range of tasks including answering questions, writing content, coding assistance, summarizing information, brainstorming ideas, and much more. Feel free to ask me about almost anything!';
    }

    if (lowerCaseMessage.includes('code') || lowerCaseMessage.includes('programming')) {
      return 'I can certainly help with programming! I can explain concepts, debug code, generate code snippets, and discuss best practices across many programming languages including JavaScript, Python, TypeScript, Java, and more. What specific programming question do you have?';
    }

    return `I've processed your message: "${userMessage}". This is a demo version of the DeepSeek interface. In a production environment, I would connect to the actual DeepSeek API to provide accurate and helpful responses based on the latest language models.`;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-1 pt-16">
        {/* Mobile sidebar using Sheet component */}
        {isMobile ? (
          <>
            <Sheet open={isMobileSidebarOpen} onOpenChange={setIsMobileSidebarOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="fixed top-[4.5rem] left-4 z-30 md:hidden"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-0 w-[85%] max-w-[280px]">
                <ChatSidebar
                  isCollapsed={false}
                  toggleSidebar={() => setIsMobileSidebarOpen(false)}
                />
              </SheetContent>
            </Sheet>
            <main className="flex-1">
              <div className="pb-32">
                {messages.map((message) => (
                  <ChatMessage key={message.id} message={message} />
                ))}
                <div ref={messagesEndRef} />
                {/* Loading indicator */}
                {isLoading && (
                  <div className="py-6 px-4 sm:px-6 md:px-8">
                    <div className="container mx-auto max-w-4xl">
                      <div className="flex gap-4 sm:gap-6 animate-pulse">
                        <div className="w-8 h-8 bg-muted rounded-full"></div>
                        <div className="flex-1 space-y-2">
                          <div className="h-4 bg-muted rounded w-16"></div>
                          <div className="h-4 bg-muted rounded w-full max-w-md"></div>
                          <div className="h-4 bg-muted rounded w-full max-w-sm"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <ChatInput
                onSendMessage={sendMessage}
                isLoading={isLoading}
              />
            </main>
          </>
        ) : (
          <>
            {/* Desktop sidebar */}
            <ChatSidebar
              isCollapsed={isSidebarCollapsed}
              toggleSidebar={toggleSidebar}
            />

            <main
              className={`flex-1 transition-all duration-300 ${isSidebarCollapsed ? 'ml-[4.5rem]' : 'ml-64'}`}
            >
              <div className="pb-32">
                {messages.map((message) => (
                  <ChatMessage key={message.id} message={message} />
                ))}
                <div ref={messagesEndRef} />
                {isLoading && (
                  <div className="py-6 px-4 sm:px-6 md:px-8">
                    <div className="container mx-auto max-w-4xl">
                      <div className="flex gap-4 sm:gap-6 animate-pulse">
                        <div className="w-8 h-8 bg-muted rounded-full"></div>
                        <div className="flex-1 space-y-2">
                          <div className="h-4 bg-muted rounded w-16"></div>
                          <div className="h-4 bg-muted rounded w-full max-w-md"></div>
                          <div className="h-4 bg-muted rounded w-full max-w-sm"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <ChatInput
                onSendMessage={sendMessage}
                isLoading={isLoading}
              />
            </main>
          </>
        )}
      </div>
    </div>
  );
}

