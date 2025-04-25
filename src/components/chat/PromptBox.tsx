"use client";

import React, { useState } from 'react'
import { Textarea } from '../ui/textarea'
import Image from "next/image"
import { Button } from '../ui-custom/Button';

interface PromptBoxProps {
    isLoading: boolean;
    setIsLoading: (isLoading: boolean) => void;
}

export default function PromptBox({ isLoading, setIsLoading }: PromptBoxProps) {
    const [prompt, setPrompt] = useState("");

    
    return (
        <form action="" className={`w-full ${false ? "max-w-3xl" : "max-w-2xl"} bg-accent p-4 space-y-2 border-none rounded-3xl mt-4 transition-all`}>
            <Textarea
                placeholder="Message DeepSeek..."
                className={`outline-none w-full resize-none overflow-hidden break-words bg-accent border-none`}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                rows={2}
                required
            />
            <div className='flex items-center justify-between text-sm'>
                <div className='flex items-center gap-2'>
                    <p className={`flex items-center gap-2 text-xs deepthink border border-gray py-1 px-2 rounded-full cursor-pointer transition`}>
                        <Image src={'/deepthink-icon.svg'} alt={''} width={40} height={40} className='size-5 text-black dark:text-white' />
                        DeepThink (R1)
                    </p>
                    <p className='flex items-center gap-2 text-xs deepthink border border-gray py-1 px-2 rounded-full cursor-pointer transition'>
                        <Image src={'/search-icon.svg'} alt={''} width={40} height={40} className='size-5 text-black dark:text-white' />
                        Search
                    </p>
                </div>

                <div className='flex items-center gap-2'>
                    <Image src={'/pin-icon.svg'} alt={''} width={40} height={40} className='size-6 cursor-pointer' />
                    <Button size='icon' className={`${prompt ? "bg-primary" : "bg-[#8b5cf6]/10 rounded-full p-2 cursor-pointer size-8"}`}>
                        <Image src={"/arrow-icon.svg"} alt={''} width={14} height={14} className='size-3.5 aspect-square cursor-pointer' />
                    </Button>
                </div>
            </div>
        </form>
    )
}
