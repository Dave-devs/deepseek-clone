import React from 'react'
import Image from "next/image"
import { Ellipsis } from 'lucide-react'

interface ChatHistoryProps {
    openHistory: {id: number, open: boolean};
  setOpenHistory: (openHistory: { id: number, open: boolean }) => void
}

export default function ChatLHistory({openHistory, setOpenHistory}:ChatHistoryProps) {
  return (
      <section className='flex items-center justify-between p-2 hover:bg-sidebar-accent-foreground/10 rounded-lg text-sm group-cursor-pointer'>
        <p className='group-hover:max-w-5/6 truncate'>Chat Name Here</p>
        <div className='group relative flex items-center justify-center size-6 aspect-square hover:bg-accent/80 rounded-lg'>
        <Ellipsis className={`size-5 text-[#0f172a] dark:text-[#f8fafc] ${openHistory.open ? "" : "hidden"} group-hover:block`} />
        <div className={`absolute ${openHistory.open ? "block" : "hidden"} -right-36 top-6 bg-gray-700 rounded-xl w-max p-2 text-[#f8fafc] dark:text-[#0f172a]`}>
                <div className='flex items-center gap-3 hover:bg-[#f8fafc]/10 px-3 py-2 rounded-lg'>
                   <Image src={"/pencil-icon.svg"} alt={""} width={40} height={40} className='size-5' />
                   <p>Rename</p>
                </div>
                  <div className='flex items-center gap-3 hover:bg-[#f8fafc]/10 px-3 py-2 rounded-lg'>
                      <Image src={"/delete-icon.svg"} alt={""} width={40} height={40} className='size-5' />
                      <p>Delete</p>
                  </div>
            </div>
        </div>
    </section>
  )
}
