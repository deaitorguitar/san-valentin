import { useState, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

interface ValentineButtonsProps {
  onYesClick: () => void;
}

const ValentineButtons = ({ onYesClick }: ValentineButtonsProps) => {
  const [noAttempts, setNoAttempts] = useState(0);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const yesScale = Math.min(1 + noAttempts * 0.15, 2.5);
  const noScale = Math.max(1 - noAttempts * 0.12, 0.2);
  const noOpacity = Math.max(1 - noAttempts * 0.15, 0);
  const noHidden = noAttempts >= 7;

  const messages = [
    "No",
    "¿Segura?",
    "¿En serio?",
    "Pensalo bien...",
    "¡Dale!",
    "¡Por favor!",
    "😢",
    "💔",
    "...",
  ];

  const currentMessage = messages[Math.min(noAttempts, messages.length - 1)];

  const moveNoButton = useCallback(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current.getBoundingClientRect();
    const maxX = 150;
    const maxY = 100;
    
    const newX = (Math.random() - 0.5) * maxX * 2;
    const newY = (Math.random() - 0.5) * maxY * 2;
    
    setNoPosition({ x: newX, y: newY });
    setNoAttempts(prev => prev + 1);
  }, []);

  const handleNoHover = () => {
    if (noAttempts < 4) {
      moveNoButton();
    }
  };

  const handleNoClick = () => {
    moveNoButton();
  };

  return (
    <div 
      ref={containerRef}
      className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 py-8 relative min-h-[180px]"
    >
      {/* Yes Button */}
      <Button
        onClick={onYesClick}
        className="gradient-button-yes text-primary-foreground font-bold rounded-full shadow-button 
                   hover:shadow-romantic transition-all duration-300 ease-out px-8 py-6 text-xl
                   flex items-center gap-2 hover:scale-105 active:scale-95"
        style={{
          transform: `scale(${yesScale})`,
          transition: "transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        }}
      >
        <Heart className="w-5 h-5 fill-current" />
        ¡Sí!
        <Heart className="w-5 h-5 fill-current" />
      </Button>

      {/* No Button */}
      {!noHidden && (
        <Button
          onClick={handleNoClick}
          onMouseEnter={handleNoHover}
          onTouchStart={handleNoClick}
          variant="outline"
          className="gradient-button-no text-primary-foreground border-none font-semibold rounded-full 
                     px-6 py-4 text-lg transition-all duration-200"
          style={{
            transform: `translate(${noPosition.x}px, ${noPosition.y}px) scale(${noScale})`,
            opacity: noOpacity,
            transition: "transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55), opacity 0.3s ease",
          }}
        >
          {currentMessage}
        </Button>
      )}
    </div>
  );
};

export default ValentineButtons;