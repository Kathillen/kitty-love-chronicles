import { useEffect, useState } from "react";

interface Heart {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  type: "heart" | "sparkle";
}

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const items: Heart[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 16 + 10,
      duration: Math.random() * 8 + 8,
      delay: Math.random() * 10,
      type: Math.random() > 0.3 ? "heart" : "sparkle",
    }));
    setHearts(items);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map((h) => (
        <span
          key={h.id}
          className="absolute animate-float-heart"
          style={{
            left: `${h.left}%`,
            fontSize: `${h.size}px`,
            animationDuration: `${h.duration}s`,
            animationDelay: `${h.delay}s`,
            opacity: 0.4,
          }}
        >
          {h.type === "heart" ? "💖" : "✨"}
        </span>
      ))}
    </div>
  );
};

export default FloatingHearts;
