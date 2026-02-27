import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const START_DATE = new Date(2023, 1, 27, 14, 40, 0);

const LoveCounter = () => {
  const [elapsed, setElapsed] = useState(getElapsed());

  function getElapsed() {
    const now = new Date();
    const diff = now.getTime() - START_DATE.getTime();

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    const startYear = START_DATE.getFullYear();
    const startMonth = START_DATE.getMonth();
    let years = now.getFullYear() - startYear;
    let months = now.getMonth() - startMonth;
    if (months < 0) { years--; months += 12; }
    let remainDays = now.getDate() - START_DATE.getDate();
    if (remainDays < 0) { months--; if (months < 0) { years--; months += 12; } remainDays += 30; }

    return {
      years,
      months,
      days: remainDays,
      hours: hours % 24,
      minutes: minutes % 60,
      seconds: seconds % 60,
    };
  }

  useEffect(() => {
    const interval = setInterval(() => setElapsed(getElapsed()), 1000);
    return () => clearInterval(interval);
  }, []);

  const units = [
    { label: "Anos", value: elapsed.years },
    { label: "Meses", value: elapsed.months },
    { label: "Dias", value: elapsed.days },
    { label: "Horas", value: elapsed.hours },
    { label: "Minutos", value: elapsed.minutes },
    { label: "Segundos", value: elapsed.seconds },
  ];

  return (
    <section className="section-romantic min-h-screen flex flex-col items-center justify-center" style={{ background: "var(--gradient-hero)" }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-4xl mx-auto"
      >
        <div className="flex items-center justify-center gap-2 mb-6">
          <Heart className="text-primary animate-pulse-soft" size={32} fill="currentColor" />
          <span className="text-pink-medium text-lg font-body">K & R</span>
          <Heart className="text-primary animate-pulse-soft" size={32} fill="currentColor" />
        </div>

        <h1 className="title-romantic text-4xl md:text-6xl mb-4">
          Há quanto tempo eu amo
        </h1>
        <h2 className="font-display text-2xl md:text-4xl text-accent mb-12">
          minha princesa 👑
        </h2>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4">
          {units.map((unit, i) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="card-romantic flex flex-col items-center py-4"
            >
              <span className="text-3xl md:text-5xl font-bold gradient-text font-body">
                {String(unit.value).padStart(2, "0")}
              </span>
              <span className="text-xs md:text-sm text-muted-foreground mt-1 font-body">
                {unit.label}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-10 text-muted-foreground font-body text-sm"
        >
          Desde 27 de fevereiro de 2023 às 14:40 💕
        </motion.p>
      </motion.div>

      {/* Decorative bow */}
      <div className="absolute top-4 right-4 text-4xl animate-bow-sway opacity-60">🎀</div>
      <div className="absolute top-4 left-4 text-4xl animate-bow-sway opacity-60" style={{ animationDelay: "1s" }}>🎀</div>
    </section>
  );
};

export default LoveCounter;
