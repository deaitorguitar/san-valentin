import { Heart } from "lucide-react";

const FloatingHearts = () => {
  const hearts = [
    { size: 24, left: "5%", top: "10%", delay: "0s", duration: "3s", reverse: false },
    { size: 32, left: "15%", top: "70%", delay: "0.5s", duration: "4s", reverse: true },
    { size: 20, left: "85%", top: "15%", delay: "1s", duration: "3.5s", reverse: false },
    { size: 28, left: "90%", top: "60%", delay: "1.5s", duration: "4.5s", reverse: true },
    { size: 18, left: "10%", top: "40%", delay: "2s", duration: "3s", reverse: false },
    { size: 36, left: "80%", top: "80%", delay: "0.3s", duration: "4s", reverse: true },
    { size: 22, left: "25%", top: "85%", delay: "1.2s", duration: "3.5s", reverse: false },
    { size: 26, left: "75%", top: "35%", delay: "0.8s", duration: "4s", reverse: true },
    { size: 16, left: "50%", top: "5%", delay: "1.8s", duration: "3s", reverse: false },
    { size: 30, left: "95%", top: "45%", delay: "0.2s", duration: "4.5s", reverse: true },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart, index) => (
        <Heart
          key={index}
          size={heart.size}
          className={`absolute fill-primary/30 text-primary/40 ${
            heart.reverse ? "animate-float-heart-reverse" : "animate-float-heart"
          }`}
          style={{
            left: heart.left,
            top: heart.top,
            animationDelay: heart.delay,
            animationDuration: heart.duration,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingHearts;