import { motion } from "framer-motion";
import { Heart, Camera, Music, Star, Waves, TreePine, PartyPopper, Film, Utensils, FerrisWheel, Home, Mountain } from "lucide-react";

const events = [
  { date: "28/02/2023", text: "Tiramos nossa primeira foto juntas.", icon: Camera },
  { date: "Novembro de 2024", text: "Fomos pela primeira vez juntas à praia.", icon: Waves },
  { date: "2024", text: "Fomos pela primeira vez a um show juntas (Show de Tarcísio do Acordeon).", icon: Music },
  { date: "2024", text: "Comemoramos nosso primeiro aniversário.", icon: PartyPopper },
  { date: "2024", text: "Foi a primeira vez que ela foi ao sítio da minha família e conheceu minha família.", icon: Home },
  { date: "2025", text: "Comemoramos 2 anos de namoro.", icon: Heart },
  { date: "2025", text: "Fomos ao cinema pela primeira vez juntas assistir Interestelar.", icon: Film },
  { date: "2025", text: "Fomos novamente ao cinema assistir Invocação do Mal 4. Nesse mesmo dia provamos sushi juntas pela primeira vez e odiamos. 🍣😂", icon: Utensils },
  { date: "2025", text: "Fomos ao show de João Gomes.", icon: Music },
  { date: "2025", text: "Fomos ao show de Pablo.", icon: Music },
  { date: "2025", text: "Fomos ao parque de diversão pela primeira vez juntas. Ela ficou desesperada em um brinquedo muito alto e nos divertimos muito no carrinho bate-bate. 🎢😆", icon: FerrisWheel },
  { date: "2025", text: "Fui pela primeira vez à casa da família dela em Altinho - PE.", icon: Home },
  { date: "Novembro de 2025", text: "Fomos novamente à praia.", icon: Waves },
  { date: "2026", text: "Fomos pela primeira vez juntas à cachoeira.", icon: Mountain },
  { date: "Hoje 💖", text: "Estamos completando 3 anos de aniversário!", icon: Star },
];

const LoveTimeline = () => {
  return (
    <section className="section-romantic" style={{ background: "var(--gradient-soft)" }}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="title-romantic"
      >
        Nossa Linha do Tempo 💕
      </motion.h2>

      <div className="max-w-2xl mx-auto relative">
        {/* Vertical line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2" />

        {events.map((event, i) => {
          const Icon = event.icon;
          const isLeft = i % 2 === 0;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`relative mb-8 flex items-start gap-4 ${
                "md:ml-0 ml-12"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary flex items-center justify-center z-10 shadow-lg"
                style={{ boxShadow: "var(--shadow-romantic)" }}>
                <Icon size={18} className="text-primary-foreground" />
              </div>

              {/* Card */}
              <div className={`card-romantic ml-12 md:ml-0 ${
                isLeft ? "md:mr-[55%]" : "md:ml-[55%]"
              } w-full`}>
                <span className="text-xs font-body font-semibold text-primary mb-1 block">
                  {event.date}
                </span>
                <p className="text-sm font-body text-foreground leading-relaxed">
                  {event.text}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default LoveTimeline;
