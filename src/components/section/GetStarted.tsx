import React from 'react'
import Link from "next/link"
import { Button } from '../ui-custom/Button'

export default function GetStarted() {
  return (
    <section className='py-20 px-4'>
        <div className='container mx-auto max-w-4xl'>
            <div className='glass p-8 md:p-12 rounded-xl text-center'>
                <h2 className='text-3xl font-bold mb-4'>Ready to experience DeepSeek?</h2>
                <p className='text-lg text-muted-foreground mb-8 max-w-2xl mx-auto'>
                    Start using our powerful AI models today and unlock new possibilities for your projects and workflows.
                </p>
                <Link href={"/chat"}>
                <Button size="lg" className="font-medium">
                    Start Chatting Now
                </Button>
                </Link>
            </div>
        </div>
    </section>
  )
}