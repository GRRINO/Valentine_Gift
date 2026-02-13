import React from "react";

interface MemoryWallProps {
  onNext: () => void;
}

const MemoryWall: React.FC<MemoryWallProps> = ({ onNext }) => {
  const memoryPlaceholders = [
    {
      title: "Our First Steps Together",
      description:
        "The day everything began — shy smiles, quiet walks, and the start of our story",
      photo: "../photos/6087008934330831116.jpg",
    },
    {
      title: "Sunshine & Smiles",
      description:
        "Warm days, carefree laughs, and memories made under summer skies.",
      photo: "../photos/image.png",
    },
    {
      title: "Us in Every Reflection",
      description:
        "Even in simple moments, being together makes everything feel complete.",
      photo: "../photos/6087008934330831130.jpg",
    },
    {
      title: "Playful Hearts",
      description:
        "Silly poses, shared laughter, and the kind of fun only we understand. ",
      photo: "../photos/e23a387a-83bd-488c-a6b1-aa879f0832bf.jpg",
    },
  ];

  return (
    <div className="flex flex-col items-center space-y-8 animate-fadeIn">
      <h2 className="text-3xl font-cursive text-rose-600 font-bold">
        Our Love Wall
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {memoryPlaceholders.map((memory, index) => (
          <div
            key={index}
            className="bg-white p-4 pb-12 rotate-[-2deg] shadow-lg border border-gray-100 hover:rotate-0 transition-transform cursor-pointer group"
          >
            <div className="w-full aspect-square bg-rose-50 flex flex-col items-center justify-center text-rose-300 relative overflow-hidden">
              {/* <span className="text-4xl mb-2 opacity-50">📸</span>
              <span className="text-sm font-medium uppercase tracking-widest">
                Add Photo Here
              </span>
              <div className="absolute inset-0 bg-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-rose-700 font-bold">Placeholder</p>
              </div> */}
              <img
                src={memory.photo}
                alt={memory.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="font-bold text-rose-600">{memory.title}</h3>
              <p className="text-xs text-rose-400">{memory.description}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-rose-400 italic text-center max-w-md">
        "I'm keeping these spaces empty because the best memories are yet to
        come, and I can't wait to fill them with you."
      </p>

      <button
        onClick={onNext}
        className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-3 px-10 rounded-full shadow-lg transition-all transform hover:scale-105"
      >
        A Special Message for You
      </button>
    </div>
  );
};

export default MemoryWall;
