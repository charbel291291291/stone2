import { Gem, Sparkles, Store, Menu, LogOut, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useAuth } from "@/hooks/useAuth";
import { useAdminStatus } from "@/hooks/useAdminStatus";
import { useNavigate } from "react-router-dom";

type View = "landing" | "quiz" | "designer" | "showroom";

interface NavigationProps {
  onNavigate: (view: View) => void;
  currentView: View;
}

const Navigation = ({ onNavigate, currentView }: NavigationProps) => {
  const { signOut, user } = useAuth();
  const { isAdmin } = useAdminStatus();
  const navigate = useNavigate();
  
  const navItems = [
    { view: "quiz" as View, label: "Gem Match", icon: Gem },
    { view: "designer" as View, label: "AI Designer", icon: Sparkles },
    { view: "showroom" as View, label: "Showroom", icon: Store },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <button
          onClick={() => onNavigate("landing")}
          className="text-2xl font-serif font-bold text-foreground tracking-wide"
        >
          GEMINI GLAM
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map(({ view, label, icon: Icon }) => (
            <Button
              key={view}
              variant={currentView === view ? "default" : "ghost"}
              onClick={() => onNavigate(view)}
              className="gap-2"
            >
              <Icon className="w-4 h-4" />
              {label}
            </Button>
          ))}
          {isAdmin && (
            <Button 
              variant="outline" 
              onClick={() => navigate('/admin')}
              className="gap-2"
            >
              <Shield className="w-4 h-4" />
              Admin
            </Button>
          )}
          {user && (
            <div className="flex items-center gap-3 ml-4 pl-4 border-l border-border">
              <span className="text-sm text-muted-foreground">
                {user.email}
              </span>
              <Button variant="outline" size="sm" onClick={signOut}>
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            </div>
          )}
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col gap-4 mt-8">
              {navItems.map(({ view, label, icon: Icon }) => (
                <Button
                  key={view}
                  variant={currentView === view ? "default" : "ghost"}
                  onClick={() => onNavigate(view)}
                  className="gap-2 justify-start"
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </Button>
              ))}
              {user && (
                <>
                  <div className="border-t border-border pt-4 mt-4">
                    {isAdmin && (
                      <Button 
                        variant="outline" 
                        onClick={() => navigate('/admin')}
                        className="w-full gap-2 mb-3"
                      >
                        <Shield className="w-4 h-4" />
                        Admin Panel
                      </Button>
                    )}
                    <p className="text-sm text-muted-foreground mb-3 px-2">
                      {user.email}
                    </p>
                    <Button variant="outline" onClick={signOut} className="w-full gap-2">
                      <LogOut className="h-4 w-4" />
                      Sign Out
                    </Button>
                  </div>
                </>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navigation;
