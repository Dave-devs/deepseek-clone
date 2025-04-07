import React from "react";
import { Button } from "../ui-custom/Button";
import {
  Clock,
  LogOut,
  MessageSquare,
  PanelLeftClose,
  PanelLeftOpen,
  Plus,
  Settings,
  X,
} from "lucide-react";
import { useIsMobile } from "@/hook/use-mobile";

interface ChatSidebarProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
}

export default function ChatSidebar({
  isCollapsed,
  toggleSidebar,
}: ChatSidebarProps) {
  const isMobile = useIsMobile();

  // Mock chat history data
  const chatHistory = [
    { id: 1, title: "Quantum computing explanation", date: "2h ago" },
    { id: 2, title: "JavaScript vs TypeScript", date: "Yesterday" },
    { id: 3, title: "Neural networks basics", date: "3 days ago" },
    { id: 4, title: "MongoDB aggregation pipeline", date: "1 week ago" },
  ];

  return (
    <div
      className={`${isMobile ? "" : "fixed"} h-full ${
        isMobile ? "inset-0" : "top-16"
      } bg-card border-r border-border transition-all duration-300 z-40 
      ${isCollapsed ? "w-[4.5rem]" : "w-64"}`}
    >
      {isMobile && (
        <div className="flex justify-end p-2">
          <Button variant="ghost" size="icon" onClick={toggleSidebar}>
            <X size={18} />
          </Button>
        </div>
      )}

      {/* ******** Sidebar Toggle Btn ******** */}
      {!isMobile && (
        <Button
          onClick={toggleSidebar}
          size="icon"
          variant="ghost"
          className="absolute top-3 right-[-40px] z-50 bg-card border border-border"
        >
          {isCollapsed ? (
            <PanelLeftOpen size={18} />
          ) : (
            <PanelLeftClose size={18} />
          )}
        </Button>
      )}

      {/* ******** Sidebar New Chat Btn ******** */}
      <div className="p-4">
        {isCollapsed ? (
          <Button
            className="w-full flex items-center justify-center gap-2 mb-6"
            size="icon"
          >
            <Plus size={18} />
          </Button>
        ) : (
          <Button
            className="w-full flex items-center justify-center gap-2 mb-6"
            size="lg"
          >
            <span>New Chat</span>
          </Button>
        )}
      </div>

      {/* ******** Sidebar Chat History ******** */}
      <div className="px-3">
        {!isCollapsed && (
          <div className="text-xs font-medium text-muted-foreground mb-2 px-2">
            Recent chats
          </div>
        )}
        <div className="space-y-1">
          {chatHistory.map((chat) => (
            <Button
              key={chat.id}
              variant="ghost"
              className={`w-full justify-start mb-1 ${
                isCollapsed ? "px-3" : "px-3"
              }`}
            >
              <MessageSquare
                size={isCollapsed ? 18 : 16}
                className="shrink-0"
              />
              {!isCollapsed && (
                <div className="ml-2 text-left truncate">
                  <div className="text-sm truncate">{chat.title}</div>
                  <div className="text-xs text-muted-foreground">
                    {chat.date}
                  </div>
                </div>
              )}
            </Button>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border mb-6">
        {!isCollapsed && (
          <div className="flex flex-col h-[150px]">
            <Button variant="ghost" className="w-full justify-start mb-1">
              <Clock size={16} className="mr-2" />
              History
            </Button>
            <Button variant="ghost" className="w-full justify-start mb-1">
              <Settings size={16} className="mr-2" />
              Settings
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-[#2563eb] hover:text-[#2563eb]/80"
            >
              <LogOut size={16} className="mr-2" />
              Sign out
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
