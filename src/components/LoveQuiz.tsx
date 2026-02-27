import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, CheckCircle2, XCircle } from "lucide-react";

interface Question {
  question: string;
  options: string[];
  correct: number;
}

const questions: Question[] = [
  {
    question: "Qual é a nossa data e horário que começamos a namorar?",
    options: ["26/02/2023 às 18:00", "27/02/2023 aproximadamente 14:40", "27/02/2023 às 20:00", "01/03/2023 às 14:40"],
    correct: 1,
  },
  {
    question: "Qual foi a primeira pelúcia que eu te presenteei?",
    options: ["Urso branco", "Coelhinho rosa", "Pelúcia de Ovelha", "Cachorrinho de pelúcia"],
    correct: 2,
  },
  {
    question: "Onde nós costumávamos ir no começo do nosso relacionamento, nosso compromisso de final de semana?",
    options: ["Shopping", "Praia", "Ilê", "Cinema"],
    correct: 2,
  },
  {
    question: "Como eu te dava bom dia por um tempo?",
    options: ["Bom dia meu amor", "Hello princesa", "Buongiorno principessa", "Bom dia vida"],
    correct: 2,
  },
  {
    question: "Qual nossa série/desenho que sempre assistíamos?",
    options: ["Hora de Aventura", "Girls in the House", "Bob Esponja", "Miraculous"],
    correct: 1,
  },
  {
    question: "Qual foi a cor do primeiro buquê que eu dei a você?",
    options: ["Branco com dourado", "Azul", "Rosa", "Vermelho de borboletas"],
    correct: 3,
  },
];

interface Props {
  onFinish: (score: number) => void;
}

const LoveQuiz = ({ onFinish }: Props) => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);

  const handleSelect = (idx: number) => {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    const isCorrect = idx === questions[current].correct;
    if (isCorrect) setScore((s) => s + 1);

    setTimeout(() => {
      if (current < questions.length - 1) {
        setCurrent((c) => c + 1);
        setSelected(null);
        setAnswered(false);
      } else {
        onFinish(score + (isCorrect ? 1 : 0));
      }
    }, 1500);
  };

  const q = questions[current];

  return (
    <section className="section-romantic min-h-screen flex flex-col items-center justify-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="title-romantic"
      >
        Quiz do Nosso Amor 💘
      </motion.h2>

      <div className="max-w-lg mx-auto w-full">
        {/* Progress */}
        <div className="flex gap-1 mb-6">
          {questions.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 flex-1 rounded-full transition-colors ${
                i <= current ? "bg-primary" : "bg-secondary"
              }`}
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            className="card-romantic"
          >
            <div className="flex items-center gap-2 mb-4">
              <Heart size={18} className="text-primary" fill="currentColor" />
              <span className="text-xs font-body text-muted-foreground">
                Pergunta {current + 1} de {questions.length}
              </span>
            </div>

            <h3 className="font-body font-semibold text-foreground mb-6 text-base leading-relaxed">
              {q.question}
            </h3>

            <div className="space-y-3">
              {q.options.map((opt, idx) => {
                let variant = "bg-secondary/50 hover:bg-secondary border border-transparent";
                if (answered) {
                  if (idx === q.correct) variant = "bg-green-100 border-green-400 text-green-800";
                  else if (idx === selected) variant = "bg-red-100 border-red-400 text-red-800";
                }
                return (
                  <button
                    key={idx}
                    onClick={() => handleSelect(idx)}
                    disabled={answered}
                    className={`w-full text-left px-4 py-3 rounded-xl font-body text-sm transition-all flex items-center gap-3 ${variant} ${
                      !answered ? "cursor-pointer active:scale-[0.98]" : ""
                    }`}
                  >
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-semibold shrink-0">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    {opt}
                    {answered && idx === q.correct && <CheckCircle2 size={16} className="ml-auto text-green-600" />}
                    {answered && idx === selected && idx !== q.correct && <XCircle size={16} className="ml-auto text-red-600" />}
                  </button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default LoveQuiz;
