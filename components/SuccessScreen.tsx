import React from "react";

interface SuccessScreenProps {
  onNext: () => void;
}

const SuccessScreen: React.FC<SuccessScreenProps> = ({ onNext }) => {
  return (
    <div className="flex flex-col items-center text-center space-y-8 animate-bounceIn">
      <h1 className="text-4xl md:text-5xl font-cursive text-rose-600 font-bold">
        Yay!!! I knew it! ❤️
      </h1>

      <div className="w-64 h-64">
        <img
          // src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3ZtZ3psN2F3am9reXp6bXh6eXh6eXh6eXh6eXh6eXh6eXh6ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/S9of3vYq7YtAnm50vQ/giphy.gif"
          src="../photos/6087008934330831117.jpg"
          alt="Happy Celebration"
          className="rounded-xl w-full h-full object-contain"
        />
      </div>

      <p className="text-xl text-rose-500 font-medium">
        You've made me the happiest person alive! Let's look at some of our
        memories...
      </p>

      <button
        onClick={onNext}
        className="mt-4 bg-rose-500 hover:bg-rose-600 text-white font-bold py-3 px-10 rounded-full shadow-lg transition-all transform hover:scale-105"
      >
        See Our Memories
      </button>
    </div>
  );
};

export default SuccessScreen;
