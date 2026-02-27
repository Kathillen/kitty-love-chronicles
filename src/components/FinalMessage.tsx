import { motion } from "framer-motion";

const FinalMessage = () => {
  return (
    <section className="section-romantic min-h-[70vh] flex items-center justify-center relative" style={{ background: "var(--gradient-hero)" }}>
      {/* Decorative elements */}
      <div className="absolute top-8 left-8 text-3xl animate-bow-sway opacity-50">🎀</div>
      <div className="absolute bottom-8 right-8 text-3xl animate-bow-sway opacity-50" style={{ animationDelay: "2s" }}>🎀</div>
      <div className="absolute top-1/4 right-12 text-xl animate-sparkle opacity-40">✨</div>
      <div className="absolute bottom-1/4 left-12 text-xl animate-sparkle opacity-40" style={{ animationDelay: "1s" }}>✨</div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-xl mx-auto text-center px-6 relative z-10"
      >
        <div className="text-5xl mb-6">💖</div>

        <p className="font-body text-lg md:text-xl text-foreground leading-relaxed mb-8">
          Minha princesa, finalmente completamos <span className="font-semibold gradient-text">3 anos</span> de relacionamento, 
          que essa data se multiplique infinitas vezes até o nosso último dia de vida, 
          e depois dele também, duas almas juntas vagando pela eternidade.
        </p>

        <div className="mt-10">
          <p className="font-body text-muted-foreground text-sm mb-1">Com amor,</p>
          <p className="font-display text-3xl md:text-4xl gradient-text">
            KATHILLEN 💖
          </p>
        </div>

        <div className="mt-8 flex justify-center gap-2 text-2xl">
          <span className="animate-pulse-soft">💕</span>
          <span className="animate-pulse-soft" style={{ animationDelay: "0.3s" }}>💗</span>
          <span className="animate-pulse-soft" style={{ animationDelay: "0.6s" }}>💖</span>
        </div>
      </motion.div>
    </section>
  );
};

export default FinalMessage;
