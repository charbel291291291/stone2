import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import LandingHero from "@/components/LandingHero";
import Navigation from "@/components/Navigation";
import GemQuiz from "@/components/GemQuiz";
import AIDesigner from "@/components/AIDesigner";
import Showroom from "@/components/Showroom";

type View = "landing" | "quiz" | "designer" | "showroom";

const Index = () => {
  const [currentView, setCurrentView] = useState<View>("landing");
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth');
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-gold mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation onNavigate={setCurrentView} currentView={currentView} />
      
      {currentView === "landing" && (
        <LandingHero onNavigate={setCurrentView} />
      )}
      
      {currentView === "quiz" && (
        <GemQuiz />
      )}
      
      {currentView === "designer" && (
        <AIDesigner />
      )}
      
      {currentView === "showroom" && (
        <Showroom />
      )}
    </div>
  );
};

export default Index;
