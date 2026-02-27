import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

interface Props {
  score: number;
}

const QuizResult = ({ score }: Props) => {
  const passed = score >= 4;

  return (
    <section className="section-romantic min-h-[60vh] flex items-center justify-center relative">
      {/* Floating celebration hearts */}
      {Array.from({ length: 8 }).map((_, i) => (
        <span
          key={i}
          className="absolute animate-float-heart text-2xl"
          style={{
            left: `${10 + Math.random() * 80}%`,
            animationDuration: `${6 + Math.random() * 6}s`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        >
          {i % 2 === 0 ? "💖" : "✨"}
        </span>
      ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", damping: 15 }}
        className="card-romantic max-w-md mx-auto text-center relative z-10"
      >
        <div className="flex justify-center mb-4">
          {passed ? (
            <Sparkles size={48} className="text-gold-soft" />
          ) : (
            <Heart size={48} className="text-primary animate-pulse-soft" fill="currentColor" />
          )}
        </div>

        <h2 className="font-display text-2xl md:text-3xl text-primary mb-2">
          {passed ? "Parabéns, meu amor! 🎉" : "Poxa... 💕"}
        </h2>

        <p className="text-lg font-body font-semibold text-foreground mb-4">
          Você acertou {score} de 6!
        </p>

        <p className="font-body text-foreground leading-relaxed">
          {passed
            ? "Você está há um passo de conseguir seu prêmio, agora basta só você dar um beijo no seu amor para desbloquear seu prêmio 💋"
            : "Para conseguir seu prêmio você precisa dar 10 beijos no seu amor 💋💋💋"}
        </p>
      </motion.div>
    </section>
  );
};

export default QuizResult;
