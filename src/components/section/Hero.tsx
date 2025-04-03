import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Button } from "../ui-custom/Button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-24 px-4">
      <div className="container mx-auto text-center max-w-5xl">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 animate-fade-in">
          Advanced{" "}
          <span className="deepseek-gradient-text">AI Intelligence</span>
          <br />
          for Everyone
        </h1>
        <p
          className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in"
          style={{ animationDelay: "200ms" }}
        >
          Experience state-of-the-art language processing with our DeepSeek
          models. Powerful, accurate, and built for complex reasoning.
        </p>
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in"
          style={{ animationDelay: "400ms" }}
        >
          <Link href="/chat">
            <Button size="lg" className="font-medium">
              Try DeepSeek Free
              <ArrowRight className="size-4 ml-2" />
            </Button>
          </Link>
          <Link href="/docs">
            <Button size="lg" variant="outline" className="font-medium">
              Read Documentation
            </Button>
          </Link>
        </div>

        <div className="mt-16 mb-24 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 h-24 bottom-[-50px] pointer-events-none"></div>
          <div className="glass rounded-lg border border-border shadow-lg overflow-hidden">
            <Image
              src={
                "https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              }
              alt={"DeepSeek Interface"}
              width={800}
              height={600}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
