import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart } from "lucide-react";
import necklaceImg from "@/assets/jewelry-necklace.jpg";
import ringImg from "@/assets/jewelry-ring.jpg";
import earringsImg from "@/assets/jewelry-earrings.jpg";
import braceletImg from "@/assets/jewelry-bracelet.jpg";

const collections = [
  {
    id: 1,
    name: "Midnight Bloom",
    category: "Necklace",
    price: "$2,450",
    image: necklaceImg,
  },
  {
    id: 2,
    name: "Aurora Ring",
    category: "Ring",
    price: "$1,890",
    image: ringImg,
  },
  {
    id: 3,
    name: "Celestial Drops",
    category: "Earrings",
    price: "$1,650",
    image: earringsImg,
  },
  {
    id: 4,
    name: "Eternal Grace",
    category: "Bracelet",
    price: "$2,100",
    image: braceletImg,
  },
];

const Showroom = () => {
  return (
    <div className="min-h-screen px-4 pt-24 pb-12">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold">
            Luxury Showroom
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our curated collection of exquisite jewelry pieces, each crafted with passion and precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((item) => (
            <Card key={item.id} className="group overflow-hidden">
              <div className="relative aspect-square bg-gradient-to-br from-muted to-background overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button size="icon" variant="secondary" className="rounded-full">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="p-4 space-y-3">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">
                    {item.category}
                  </p>
                  <h3 className="font-serif font-semibold text-lg">{item.name}</h3>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold">{item.price}</span>
                  <Button size="sm" className="gap-2">
                    <ShoppingCart className="w-4 h-4" />
                    Add
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Showroom;
