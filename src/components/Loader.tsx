const CricketLoadingAnimation = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="relative w-36 h-36">
        <svg
          width="150"
          height="150"
          viewBox="0 0 150 150"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Cricket Stumps */}
          <rect
            className="fill-gray-300"
            x="55"
            y="30"
            width="6"
            height="60"
            rx="3"
          />
          <rect
            className="fill-gray-300"
            x="75"
            y="30"
            width="6"
            height="60"
            rx="3"
          />
          <rect
            className="fill-gray-300"
            x="95"
            y="30"
            width="6"
            height="60"
            rx="3"
          />

          {/* Cricket Ball */}
          <circle
            className="fill-red-500 animate-bounce-spin"
            cx="75"
            cy="110"
            r="15"
          />
        </svg>
      </div>
    </div>
  );
};

export default CricketLoadingAnimation;
