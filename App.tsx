import React, { useState, useEffect } from "react";
import { AppStage } from "./types";
import Invitation from "./components/Invitation";
import SuccessScreen from "./components/SuccessScreen";
import MemoryWall from "./components/MemoryWall";
import LovePoem from "./components/LovePoem";

const App: React.FC = () => {
  const [stage, setStage] = useState<AppStage>(AppStage.INVITATION);
  const [hearts, setHearts] = useState<
    { id: number; left: number; duration: number; size: number }[]
  >([]);

  // Simple background heart animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setHearts((prev) => [
        ...prev.slice(-20),
        {
          id: Date.now(),
          left: Math.random() * 100,
          duration: 3 + Math.random() * 4,
          size: 15 + Math.random() * 25,
        },
      ]);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  const renderStage = () => {
    switch (stage) {
      case AppStage.INVITATION:
        return <Invitation onAccept={() => setStage(AppStage.SUCCESS)} />;
      case AppStage.SUCCESS:
        return <SuccessScreen onNext={() => setStage(AppStage.MEMORIES)} />;
      case AppStage.MEMORIES:
        return <MemoryWall onNext={() => setStage(AppStage.POEM)} />;
      case AppStage.POEM:
        return <LovePoem onRestart={() => setStage(AppStage.INVITATION)} />;
      default:
        return <Invitation onAccept={() => setStage(AppStage.SUCCESS)} />;
    }
  };

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center p-4 overflow-hidden">
      {/* Background Hearts */}
      {hearts.map((heart) => {
        return (
          <div
            key={heart.id}
            className="heart"
            style={{
              left: `${heart.left}%`,
              bottom: "-10%",
              animationDuration: `${heart.duration}s`,
              fontSize: `${heart.size}px`,
            }}
          >
            ❤️
          </div>
        );
      })}

      {/* Main Content Card */}
      <div className="w-full max-w-2xl bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-8 z-10 border border-rose-100">
        {renderStage()}
      </div>

      {/* Navigation Footer for later stages */}
      {stage !== AppStage.INVITATION && (
        <div className="mt-8 flex gap-4 z-20">
          <button
            onClick={() => setStage(AppStage.INVITATION)}
            className="px-4 py-2 bg-rose-100 text-rose-600 rounded-full hover:bg-rose-200 transition-colors text-sm font-medium"
          >
            Start Over
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
