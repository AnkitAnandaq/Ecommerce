const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center">
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

        {/* Text */}
        <h1 className="text-2xl text-gray-700 mt-4 font-semibold">
          Loading...
        </h1>
      </div>
    </div>
  );
};

export default Loading;
