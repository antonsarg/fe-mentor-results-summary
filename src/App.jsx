import iconMemory from "./assets/icon-memory.svg";
import iconReaction from "./assets/icon-reaction.svg";
import iconVerbal from "./assets/icon-verbal.svg";
import iconVisual from "./assets/icon-visual.svg";
import "./App.css";

function App() {
  let score = 76;
  let maxScore = 100;
  let summary = [
    { category: "Reaction", icon: iconReaction, score: 80, backgroundColor: "bg-light-red/20", accentColor: "text-light-red" },
    { category: "Memory", icon: iconMemory, score: 92, backgroundColor: "bg-orange-yellow/20", accentColor: "text-orange-yellow" },
    { category: "Verbal", icon: iconVerbal, score: 61, backgroundColor: "bg-green-teal/20", accentColor: "text-green-teal" },
    { category: "Visual", icon: iconVisual, score: 72, backgroundColor: "bg-cobalt-blue/20", accentColor: "text-cobalt-blue" },
  ];

  return (
    <div className="App">
      <div className="grid md:h-screen md:place-items-center">
        <div className="grid mx-auto max-w-2xl md:grid-cols-2 md:rounded-3xl md:shadow-xl md:shadow-cobalt-blue/5 md:overflow-hidden">
          <div className="flex flex-col space-y-6 items-center px-12 py-8 bg-gradient-to-b from-light-state-blue to-light-royal-blue rounded-b-3xl md:justify-between md:rounded-b-none md:rounded-r-3xl">
            <h3 className="text-white text-lg font-semibold opacity-60">Your Result</h3>
            <div className="relative flex items-center justify-center w-32 aspect-square p-5 text-white bg-gradient-to-b from-violet-blue to-persian-blue rounded-full md:w-40">
              <span className="text-5xl -translate-y-2 font-bold md:text-6xl md:-translate-y-1">{score}</span>
              <span className="absolute left-1/2 bottom-6 -translate-x-1/2 text-sm">of {maxScore}</span>
            </div>
            <div className="text-center">
              <h2 className="text-white text-2xl font-semibold">Great</h2>
              <p className="mt-3 text-white/70">
                You scored higher than 65% of the people who have taken these
                tests.
              </p>
            </div>
          </div>
          <div className="px-12 py-8 bg-green-500 space-y-6 md:space-y-8">
            <h3 className="text-dark-gray-blue text-lg font-semibold">Summary</h3>
            <div className="flex flex-col gap-4">
              {summary.map((item) => (
                <div key={item.category} className={`flex justify-between p-3 rounded-lg ${item.backgroundColor}`}>
                  <div className="flex gap-2">
                    <img src={item.icon} alt="Reaction" />
                    <p className={item.accentColor}>{item.category}</p>
                  </div>
                  <div className="text-dark-gray-blue">
                    {item.score} <span className="opacity-60">/ {maxScore}</span>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full py-3 px-2 bg-dark-gray-blue text-white rounded-full">Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
