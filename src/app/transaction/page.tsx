"use client";

import SendTransactionForm from "@/components/send-transaction-form";
import { useTonWallet } from "@tonconnect/ui-react";
import { redirect } from "next/navigation";

export default function Transaction() {
  const wallet = useTonWallet();

  if (!wallet) {
    redirect("/");
  }

  return (
    <div className="flex flex-col justify-center items-center gap-4 m-4">
      <SendTransactionForm />
    </div>
  );
}
