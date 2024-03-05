const Loader = () => {
  return (
    <div
      className="fixed top-0 left-0 h-[100vh] w-full bg-white opacity-80 z-50 flex items-center justify-center"
      style={{ backgroundColor: `rgb(29, 40, 93)` }}
    >
      <div className="ring-area">
        Loading
        <span></span>
      </div>
    </div>
  );
};

export default Loader;
