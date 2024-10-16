import React from "react";
import { Spinner } from "@nextui-org/spinner";

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 m-4">
      <Spinner size="sm" />
    </div>
  );
};

export default Loading;
