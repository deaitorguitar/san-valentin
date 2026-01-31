import { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import catHappy from "@/assets/cat-happy.png";

interface SuccessModalProps {
  isOpen: boolean;
}

const SuccessModal = ({ isOpen }: SuccessModalProps) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setShowContent(true), 100);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-primary/20 backdrop-blur-sm animate-fade-in" />

      {/* Floating celebration hearts */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <Heart
            key={i}
            size={Math.random() * 20 + 15}
            className="absolute fill-primary/50 text-primary/60 animate-float-heart"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${Math.random() * 2 + 2}s`,
            }}
          />
        ))}
      </div>

      {/* Modal Content */}
      <div
        className={`relative bg-card rounded-3xl p-8 md:p-12 shadow-card max-w-md w-full text-center transform transition-all duration-500 ${
          showContent ? "animate-bounce-in" : "scale-0 opacity-0"
        }`}
      >
        {/* Decorative hearts around modal */}
        <Heart
          size={40}
          className="absolute -top-5 -left-5 fill-primary text-primary animate-pulse-love"
        />
        <Heart
          size={32}
          className="absolute -top-3 -right-6 fill-accent text-accent animate-pulse-love"
          style={{ animationDelay: "0.3s" }}
        />
        <Heart
          size={28}
          className="absolute -bottom-4 left-10 fill-secondary text-secondary-foreground animate-pulse-love"
          style={{ animationDelay: "0.6s" }}
        />

        {/* Happy cat image */}
        <div className="mb-6 animate-wiggle">
          <img
            src={catHappy}
            alt="Gatito feliz celebrando"
            className="w-48 h-48 md:w-56 md:h-56 mx-auto object-contain drop-shadow-lg"
          />
        </div>

        {/* Happy message */}
        <div className="space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-primary animate-pulse-love">
            &lt;3 :)
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;