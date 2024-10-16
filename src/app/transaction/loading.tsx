import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 m-4">
      <div className="p-2 flex flex-col gap-3 rounded-xl border max-w-lg w-full animate-pulse">
        <div className="h-12 bg-gray-200 rounded-lg"></div>

        <div className="h-12 bg-gray-200 rounded-lg"></div>

        <div className="h-10 bg-blue-200 rounded-xl"></div>
      </div>
    </div>
  );
};

export default Loading;
