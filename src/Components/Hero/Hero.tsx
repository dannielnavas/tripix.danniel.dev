const Hero = () => {
  return (
    <div className="w-full h-96 flex flex-col items-center justify-center">
      <h2 className="max-w-[1280px] min-w-[320px] w-[920px] text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent text-center mb-8 text-balance">
        Turn your travel dreams into an unforgettable adventure
      </h2>

      <button className="bg-accent hover:bg-yellow-500 text-neutral-dark font-bold py-3 px-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
        Get Started
      </button>
    </div>
  );
};

export { Hero };
