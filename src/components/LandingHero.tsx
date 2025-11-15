import { Sparkles, Gem, Store } from "lucide-react";
import { Button } from "@/components/ui/button";

type View = "landing" | "quiz" | "designer" | "showroom";

interface LandingHeroProps {
  onNavigate: (view: View) => void;
}

const LandingHero = ({ onNavigate }: LandingHeroProps) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 pt-16 overflow-hidden">
      {/* Animated background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-luxury-gold/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-deep-gold/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-5xl mx-auto text-center space-y-12 animate-fade-in">
        <div className="space-y-6">
          {/* Luxury ornament */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-luxury-gold to-transparent"></div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-serif font-bold tracking-tight leading-tight">
            <span className="block text-foreground mb-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Craft Your
            </span>
            <span className="block bg-gradient-to-r from-luxury-gold via-champagne-gold to-luxury-gold bg-clip-text text-transparent animate-fade-in drop-shadow-[0_0_30px_rgba(255,215,0,0.3)]" style={{ animationDelay: '0.4s' }}>
              Perfect Jewel
            </span>
          </h1>
          
          {/* Bottom ornament */}
          <div className="flex justify-center mt-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-luxury-gold to-transparent"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed animate-fade-in" style={{ animationDelay: '0.8s' }}>
            Where AI meets artistry. Design custom jewelry or discover the gem that matches your soul.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in" style={{ animationDelay: '1s' }}>
          <Button
            size="lg"
            onClick={() => onNavigate("designer")}
            className="group gap-3 text-lg px-10 py-7 bg-gradient-to-r from-luxury-gold to-deep-gold hover:shadow-[0_0_40px_rgba(255,215,0,0.4)] transition-all duration-300 text-onyx-black font-semibold hover-scale"
          >
            <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            Design Your Piece
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            onClick={() => onNavigate("quiz")}
            className="gap-3 text-lg px-10 py-7 border-2 border-luxury-gold/50 hover:border-luxury-gold hover:bg-luxury-gold/10 hover:shadow-[0_0_30px_rgba(255,215,0,0.2)] transition-all duration-300 hover-scale"
          >
            <Gem className="w-5 h-5" />
            Find Your Gem Match
          </Button>
        </div>

        <div className="pt-16 grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
          <div className="space-y-3 group animate-fade-in" style={{ animationDelay: '1.2s' }}>
            <div className="w-14 h-14 bg-gradient-to-br from-luxury-gold to-deep-gold rounded-full flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(255,215,0,0.2)] group-hover:shadow-[0_0_40px_rgba(255,215,0,0.4)] transition-all duration-300 group-hover:scale-110">
              <Sparkles className="w-7 h-7 text-onyx-black" />
            </div>
            <h3 className="font-serif font-bold text-xl text-foreground">AI-Powered Design</h3>
            <p className="text-muted-foreground leading-relaxed">
              Describe your vision and watch as AI creates a unique jewelry concept just for you.
            </p>
          </div>
          
          <div className="space-y-3 group animate-fade-in" style={{ animationDelay: '1.4s' }}>
            <div className="w-14 h-14 bg-gradient-to-br from-luxury-gold to-deep-gold rounded-full flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(255,215,0,0.2)] group-hover:shadow-[0_0_40px_rgba(255,215,0,0.4)] transition-all duration-300 group-hover:scale-110">
              <Gem className="w-7 h-7 text-onyx-black" />
            </div>
            <h3 className="font-serif font-bold text-xl text-foreground">Gem Personality Match</h3>
            <p className="text-muted-foreground leading-relaxed">
              Take our quiz to discover which gemstone resonates with your unique personality.
            </p>
          </div>
          
          <div className="space-y-3 group animate-fade-in" style={{ animationDelay: '1.6s' }}>
            <div className="w-14 h-14 bg-gradient-to-br from-luxury-gold to-deep-gold rounded-full flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(255,215,0,0.2)] group-hover:shadow-[0_0_40px_rgba(255,215,0,0.4)] transition-all duration-300 group-hover:scale-110">
              <Store className="w-7 h-7 text-onyx-black" />
            </div>
            <h3 className="font-serif font-bold text-xl text-foreground">Luxury Showroom</h3>
            <p className="text-muted-foreground leading-relaxed">
              Browse our curated collection of exquisite pieces, each with its own story.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingHero;
