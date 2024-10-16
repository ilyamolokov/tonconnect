"use client";

import { useBalance } from "@/context/BalanceContext";
import { Spinner } from "@nextui-org/spinner";

const Balance = () => {
  const { balance, isLoading, isError } = useBalance();

  if (isLoading) {
    return <Spinner size="sm" />;
  }

  if (isError) {
    return <div>Error</div>;
  }

  if (balance === null) {
    return null;
  }

  return (
    <div className="border rounded-full px-4 py-2 flex items-center justify-center gap-2 text-sm">
      {balance.toFixed(2)} TON
    </div>
  );
};

export default Balance;
