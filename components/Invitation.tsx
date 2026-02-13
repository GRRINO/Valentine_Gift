
import React, { useState } from 'react';

interface InvitationProps {
  onAccept: () => void;
}

const NO_TEXTS = [
  "No",
  "Are you sure?",
  "Really sure??",
  "Think again!",
  "Last chance!",
  "Surely not?",
  "You might regret this!",
  "Give it another thought!",
  "Are you absolutely sure?",
  "This could be a mistake!",
  "Have a heart!",
  "Don't be so cold!",
  "Change of heart?",
  "Is that your final answer?",
  "You're breaking my heart ;("
];

const Invitation: React.FC<InvitationProps> = ({ onAccept }) => {
  const [noCount, setNoCount] = useState(0);

  const handleNoClick = () => {
    setNoCount(prev => prev + 1);
  };

  const yesButtonSize = noCount * 20 + 16; // Start at 16px, grow by 20px each click

  return (
    <div className="flex flex-col items-center text-center space-y-8 animate-fadeIn">
      <h1 className="text-4xl md:text-6xl font-cursive text-rose-600 font-bold">
        Do you love me?
      </h1>
      
      <div className="w-64 h-64 flex items-center justify-center">
        <img 
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHYyYmdrNnd5MGx3eDV5ZnNxbGNyeXQ5eHppdzZ3ZmJ6eXh6eXh6ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/cLS1cfxvGOPVpf9g3y/giphy.gif" 
          alt="Cute Bear"
          className="rounded-xl shadow-lg w-full h-full object-contain"
        />
      </div>

      <div className="flex flex-wrap items-center justify-center gap-6 w-full">
        <button
          onClick={onAccept}
          style={{ fontSize: `${yesButtonSize}px` }}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-8 rounded-full shadow-lg transition-all transform hover:scale-105"
        >
          Yes
        </button>
        
        <button
          onClick={handleNoClick}
          className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-2 px-6 rounded-full shadow-lg transition-all transform hover:scale-95"
        >
          {noCount === 0 ? "No" : NO_TEXTS[Math.min(noCount - 1, NO_TEXTS.length - 1)]}
        </button>
      </div>
    </div>
  );
};

export default Invitation;
