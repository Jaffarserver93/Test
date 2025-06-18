import React, { useState } from "react";

export default function App() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-300 p-4">
      <div
        className="relative group cursor-pointer"
        onClick={() => setShowMessage((prev) => !prev)}
      >
        {/* Flower icon or question mark */}
        <div className="w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center text-4xl select-none
                        transition duration-300 group-hover:brightness-110 group-hover:scale-110">
          ❓
        </div>

        {/* Shine effect on hover */}
        <div className="absolute inset-0 rounded-full pointer-events-none opacity-0 group-hover:opacity-30 bg-gradient-to-r from-white via-pink-300 to-white animate-pulse"></div>
      </div>

      {showMessage && (
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-8 px-6 py-4 rounded-xl bg-white shadow-lg text-pink-600 font-semibold text-xl select-none"
        >
          I Like You 💖... bas yahi kehna tha...
        </motion.div>
      )}
    </div>
  );
}
