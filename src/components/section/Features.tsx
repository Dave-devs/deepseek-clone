import { featuresList } from "@/constants";
import React from "react";

export default function Features() {
  return (
    <section id="#features" className="py-24 px-4 bg-muted/50">
      <div className="container mx-auto max-w-6xl">
        {/* ******** Header & Description ******** */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Choose DeepSeek?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our state-of-the-art language models deliver exceptional performance
            across diverse tasks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresList.map((feature, index) => (
            <div key={index} className="glass p-6 rounded-lg">
              <div className="size-12 deepseek-gradient rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
