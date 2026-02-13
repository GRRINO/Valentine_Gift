
import React, { useState, useEffect } from 'react';
import { generateLovePoem } from '../services/geminiService';

interface LovePoemProps {
  onRestart: () => void;
}

const LovePoem: React.FC<LovePoemProps> = ({ onRestart }) => {
  const [poem, setPoem] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPoem = async () => {
      setLoading(true);
      const generated = await generateLovePoem();
      setPoem(generated);
      setLoading(false);
    };
    fetchPoem();
  }, []);

  return (
    <div className="flex flex-col items-center text-center space-y-8 animate-fadeIn">
      <h2 className="text-3xl font-cursive text-rose-600 font-bold">A Poem From My Heart</h2>
      
      <div className="relative w-full p-8 bg-rose-50 rounded-2xl border-2 border-dashed border-rose-200 min-h-[200px] flex items-center justify-center">
        {loading ? (
          <div className="flex flex-col items-center space-y-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-600"></div>
            <p className="text-rose-500 animate-pulse">Thinking of sweet words...</p>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-2xl font-cursive text-rose-700 leading-relaxed whitespace-pre-line">
              {poem}
            </p>
            <div className="text-rose-400 mt-4">— With all my love</div>
          </div>
        )}
      </div>

      <div className="text-rose-500 space-y-2">
        <p className="font-bold text-xl">Happy Valentine's Day!</p>
        <p>I love you more than words can ever express.</p>
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => window.location.reload()}
          className="bg-rose-100 hover:bg-rose-200 text-rose-600 font-bold py-2 px-6 rounded-full transition-all"
        >
          Relive the Magic
        </button>
      </div>
    </div>
  );
};

export default LovePoem;
