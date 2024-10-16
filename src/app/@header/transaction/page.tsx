import Balance from "@/components/balance";
import { Button } from "@nextui-org/button";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header>
        <nav className="border-b border-gray-200 px-4 lg:px-6 py-2.5 flex justify-between gap-4">
          <Button as={Link} href="/">
            {"< Back"}
          </Button>

          <Balance />
        </nav>
      </header>
    </>
  );
}
