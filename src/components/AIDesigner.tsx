import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Sparkles, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const AIDesigner = () => {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [design, setDesign] = useState<{
    imageUrl: string;
    description: string;
  } | null>(null);
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    setDesign(null);
    
    try {
      console.log('Calling generate-jewelry-design function...');
      
      const { data, error } = await supabase.functions.invoke('generate-jewelry-design', {
        body: { prompt: prompt.trim() }
      });

      if (error) {
        console.error('Function invocation error:', error);
        throw error;
      }

      if (data?.error) {
        console.error('Function returned error:', data.error);
        toast({
          title: "Generation Failed",
          description: data.error,
          variant: "destructive",
        });
        return;
      }

      if (data?.imageUrl) {
        console.log('Design generated successfully');
        setDesign({
          imageUrl: data.imageUrl,
          description: data.description || prompt,
        });
        
        toast({
          title: "Design Created!",
          description: "Your luxury jewelry design has been generated.",
        });
      } else {
        throw new Error('No image URL received');
      }
    } catch (error) {
      console.error('Error generating design:', error);
      toast({
        title: "Error",
        description: "Failed to generate design. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen px-4 pt-24 pb-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold">
            AI Jewelry Designer
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Describe your vision, and our AI will create a unique jewelry concept just for you.
          </p>
        </div>

        <Card className="p-6 md:p-8 space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">
              Describe your perfect piece
            </label>
            <Textarea
              placeholder="Example: A delicate necklace that feels like a sunset over the ocean, with warm rose gold tones and a hint of mystery..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="min-h-32 resize-none"
            />
          </div>

          <Button
            onClick={handleGenerate}
            disabled={!prompt.trim() || isGenerating}
            className="w-full gap-2"
            size="lg"
          >
            {isGenerating ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Creating Your Design...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                Generate Design
              </>
            )}
          </Button>
        </Card>

        {design && (
          <Card className="p-6 md:p-8 space-y-6 animate-fade-in">
            <div className="relative aspect-square bg-gradient-to-br from-onyx-black to-background rounded-lg overflow-hidden shadow-[0_0_40px_rgba(255,215,0,0.2)] border border-luxury-gold/20">
              <img 
                src={design.imageUrl} 
                alt="AI-generated luxury jewelry design"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-onyx-black/50 to-transparent pointer-events-none"></div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-2xl font-serif font-bold mb-2 text-foreground">Your Custom Design</h3>
                <p className="text-muted-foreground italic leading-relaxed">{design.description}</p>
              </div>

              <div className="flex gap-3">
                <Button className="flex-1 bg-gradient-to-r from-luxury-gold to-deep-gold hover:shadow-[0_0_30px_rgba(255,215,0,0.3)] transition-all">
                  Save to Wishlist
                </Button>
                <Button variant="outline" className="flex-1 border-luxury-gold/50 hover:border-luxury-gold hover:bg-luxury-gold/10">
                  Request Quote
                </Button>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default AIDesigner;
