import { useState } from "react";
import FloatingHearts from "@/components/FloatingHearts";
import ValentineButtons from "@/components/ValentineButtons";
import SuccessModal from "@/components/SuccessModal";
import catHeart from "@/assets/cat-heart.png";
import { Heart, Sparkles } from "lucide-react";

const Index = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleYesClick = () => {
    setShowSuccess(true);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Floating decorative hearts */}
      <FloatingHearts />

      {/* Main content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8">
        {/* Decorative sparkles */}
        <Sparkles className="absolute top-10 left-10 text-accent w-8 h-8 animate-sparkle" />
        <Sparkles className="absolute top-20 right-16 text-primary/60 w-6 h-6 animate-sparkle" style={{ animationDelay: "0.5s" }} />
        <Sparkles className="absolute bottom-32 left-20 text-accent/70 w-7 h-7 animate-sparkle" style={{ animationDelay: "1s" }} />

        {/* Card container */}
        <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-card max-w-lg w-full text-center">
          {/* Title with hearts */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <Heart className="w-8 h-8 fill-primary text-primary animate-pulse-love" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              ¿Querés ser mi{" "}
              <span className="text-primary">San Valentín</span>?
            </h1>
            <Heart className="w-8 h-8 fill-primary text-primary animate-pulse-love" style={{ animationDelay: "0.5s" }} />
          </div>

          {/* Cat image */}
          <div className="mb-8 animate-pulse-love">
            <img
              src={catHeart}
              alt="Gatito adorable sosteniendo un corazón"
              className="w-56 h-56 md:w-72 md:h-72 mx-auto object-contain drop-shadow-xl rounded-2xl"
            />
          </div>

          {/* Romantic subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-6 font-medium">
            Solo hay una respuesta correcta... 💕
          </p>

          {/* Interactive buttons */}
          <ValentineButtons onYesClick={handleYesClick} />
        </div>

        {/* Bottom decoration */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2 text-muted-foreground/60">
          <Heart className="w-4 h-4 fill-current" />
          <span className="text-sm font-medium">Hecho con amor</span>
          <Heart className="w-4 h-4 fill-current" />
        </div>
      </main>

      {/* Success Modal */}
      <SuccessModal isOpen={showSuccess} />
    </div>
  );
};

export default Index;