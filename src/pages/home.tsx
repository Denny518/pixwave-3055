import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setGeneratedImage(`https://placehold.co/512x512/7c3aed/ffffff?text=${encodeURIComponent(prompt.slice(0, 20))}`);
    setIsGenerating(false);
  };

  const exampleImages = [
    { url: "https://placehold.co/400x400/7c3aed/ffffff?text=Futuristic+City", prompt: "Futuristic city at sunset" },
    { url: "https://placehold.co/400x400/3b82f6/ffffff?text=Fantasy+Dragon", prompt: "Majestic dragon in the clouds" },
    { url: "https://placehold.co/400x400/8b5cf6/ffffff?text=Space+Station", prompt: "Space station orbiting Earth" },
    { url: "https://placehold.co/400x400/6366f1/ffffff?text=Underwater+City", prompt: "Underwater city with coral" },
    { url: "https://placehold.co/400x400/a855f7/ffffff?text=Mountain+Peak", prompt: "Snowy mountain peak at dawn" },
    { url: "https://placehold.co/400x400/4f46e5/ffffff?text=Cyber+Samurai", prompt: "Cyberpunk samurai warrior" },
  ];

  const features = [
    {
      icon: "ri-flashlight-fill",
      title: "Lightning Fast",
      description: "Generate stunning images in seconds with our advanced AI technology"
    },
    {
      icon: "ri-infinite-fill",
      title: "Unlimited Generations",
      description: "Create as many images as you want, completely free with no restrictions"
    },
    {
      icon: "ri-shield-check-fill",
      title: "Complete Privacy",
      description: "Your prompts and images are never stored or shared with anyone"
    },
    {
      icon: "ri-user-3-fill",
      title: "No Login Required",
      description: "Start creating immediately without signing up or providing any information"
    },
    {
      icon: "ri-star-fill",
      title: "High Quality",
      description: "Advanced neural networks produce stunning, photorealistic results"
    },
    {
      icon: "ri-palette-fill",
      title: "Any Style",
      description: "From photorealistic to artistic, anime to abstract - create any style"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-violet-950/20">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-violet-600 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            Pixwave AI
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Advanced Free AI Image Generator
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Create stunning, high-quality images from text descriptions in seconds. 
            Unlimited generations, lightning-fast speed, complete privacy protection.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-24"
        >
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-violet-500/20">
            <div className="space-y-4">
              <div className="flex gap-4">
                <Input
                  type="text"
                  placeholder="Describe the image you want to create..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleGenerate()}
                  className="flex-1 text-lg h-14 border-violet-500/30 focus-visible:ring-violet-500"
                />
                <Button
                  onClick={handleGenerate}
                  disabled={isGenerating || !prompt.trim()}
                  size="lg"
                  className="h-14 px-8 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white"
                >
                  {isGenerating ? (
                    <>
                      <i className="ri-loader-4-line animate-spin mr-2"></i>
                      Generating...
                    </>
                  ) : (
                    <>
                      <i className="ri-magic-fill mr-2"></i>
                      Generate
                    </>
                  )}
                </Button>
              </div>
              
              {generatedImage && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-6 rounded-lg overflow-hidden border-2 border-violet-500/30"
                >
                  <img
                    src={generatedImage}
                    alt="Generated"
                    className="w-full h-auto"
                  />
                </motion.div>
              )}
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Powerful Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <Card className="p-6 h-full bg-card/50 backdrop-blur-sm border-violet-500/20 hover:border-violet-500/40 transition-all">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center">
                      <i className={`${feature.icon} text-3xl text-white`}></i>
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Example Generations
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            See what our AI can create for you
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exampleImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="group cursor-pointer"
              >
                <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-violet-500/20 hover:border-violet-500/40 transition-all">
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={image.url}
                      alt={image.prompt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <p className="text-white text-sm">{image.prompt}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <Card className="p-12 bg-gradient-to-r from-violet-600/10 to-purple-600/10 backdrop-blur-sm border-violet-500/30">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Create Amazing Images?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of creators using Pixwave AI to bring their imagination to life. 
              Start generating stunning images today - completely free, no signup required.
            </p>
            <Button
              size="lg"
              className="h-14 px-12 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white text-lg"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <i className="ri-magic-fill mr-2"></i>
              Start Creating Now
            </Button>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
