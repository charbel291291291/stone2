import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Gem, ArrowRight, Sparkles } from "lucide-react";

const questions = [
  {
    question: "How would you describe your ideal weekend?",
    options: [
      { text: "Adventure in nature", value: "emerald" },
      { text: "Elegant dinner party", value: "diamond" },
      { text: "Creative artistic project", value: "sapphire" },
      { text: "Cozy intimate gathering", value: "ruby" },
    ],
  },
  {
    question: "Which word resonates most with you?",
    options: [
      { text: "Mysterious", value: "emerald" },
      { text: "Timeless", value: "diamond" },
      { text: "Serene", value: "sapphire" },
      { text: "Passionate", value: "ruby" },
    ],
  },
  {
    question: "Your style philosophy is:",
    options: [
      { text: "Bold and unconventional", value: "emerald" },
      { text: "Classic and refined", value: "diamond" },
      { text: "Calm and sophisticated", value: "sapphire" },
      { text: "Warm and expressive", value: "ruby" },
    ],
  },
];

const gemResults = {
  emerald: {
    name: "Emerald",
    description: "Bold, mysterious, and full of life. You're drawn to nature's beauty and aren't afraid to stand out.",
    color: "from-green-600 to-emerald-400",
  },
  diamond: {
    name: "Diamond",
    description: "Timeless, loyal, and elegant. You appreciate classics and value authenticity above all.",
    color: "from-slate-200 to-white",
  },
  sapphire: {
    name: "Sapphire",
    description: "Serene, wise, and deeply thoughtful. You bring calm and clarity wherever you go.",
    color: "from-blue-600 to-sky-400",
  },
  ruby: {
    name: "Ruby",
    description: "Passionate, warm, and full of energy. You live life with intensity and genuine emotion.",
    color: "from-red-600 to-rose-400",
  },
};

const GemQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<string | null>(null);

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate result
      const counts = newAnswers.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);
      
      const winner = Object.entries(counts).sort(([, a], [, b]) => b - a)[0][0];
      setResult(winner);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
  };

  if (result) {
    const gem = gemResults[result as keyof typeof gemResults];
    return (
      <div className="min-h-screen flex items-center justify-center px-4 pt-20 pb-12">
        <Card className="max-w-2xl w-full p-8 md:p-12 space-y-6">
          <div className="text-center space-y-4">
            <div className={`w-24 h-24 mx-auto bg-gradient-to-br ${gem.color} rounded-full flex items-center justify-center mb-6 animate-pulse`}>
              <Gem className="w-12 h-12 text-white" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-serif font-bold">
              Your Gem: {gem.name}
            </h2>
            
            <p className="text-lg text-muted-foreground">
              {gem.description}
            </p>
          </div>

          <div className="pt-6 space-y-4">
            <Button onClick={resetQuiz} variant="outline" className="w-full">
              Take Quiz Again
            </Button>
            <Button className="w-full gap-2">
              <Sparkles className="w-4 h-4" />
              View {gem.name} Collection
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20 pb-12">
      <Card className="max-w-2xl w-full p-8 md:p-12 space-y-8">
        <div className="space-y-4">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <Gem className="w-5 h-5 text-rose-gold" />
          </div>
          
          <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-rose-gold to-champagne-gold transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-serif font-semibold text-center">
          {question.question}
        </h2>

        <div className="space-y-3">
          {question.options.map((option, idx) => (
            <Button
              key={idx}
              variant="outline"
              className="w-full h-auto py-4 px-6 text-left justify-between hover:border-rose-gold transition-all"
              onClick={() => handleAnswer(option.value)}
            >
              <span>{option.text}</span>
              <ArrowRight className="w-5 h-5 opacity-50" />
            </Button>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default GemQuiz;
