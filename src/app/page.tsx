"use client";

import Address from "@/components/address";
import { Button } from "@nextui-org/button";
import { useTonAddress } from "@tonconnect/ui-react";
import Link from "next/link";

export default function Home() {
  const userFriendlyAddress = useTonAddress();

  if (!userFriendlyAddress) {
    return null;
  }

  return (
    <div className="flex flex-col justify-center items-center gap-4 m-4">
      <Address address={userFriendlyAddress} />

      <Button
        as={Link}
        href="/transaction"
        color="primary"
      >
        Send Transaction
      </Button>
    </div>
  );
}
