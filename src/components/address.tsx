import { Button } from "@nextui-org/button";
import { useState } from "react";
import { CopyIcon } from "./icons";

interface AddressProps {
  address: string;
}

const Address = (props: AddressProps) => {
  const { address } = props;
  const [isCopied, setIsCopied] = useState(false);

  const shortAddress = address.slice(0, 4) + "..." + address.slice(-4);

  const handleCopy = () => {
    setIsCopied(true);
    navigator.clipboard.writeText(address);
  };

  return (
    <div className="flex justify-center items-center gap-4">
      <span className="hidden md:block">{address}</span>
      <span className="md:hidden">{shortAddress}</span>

      <Button
        onClick={handleCopy}
        isIconOnly={isCopied ? false : true}
        radius={"full"}
        variant={isCopied ? "bordered" : "solid"}
        className={isCopied ? "border-1" : "border-none"}
        color="primary"
        size="sm"
      >
        {isCopied ? "Copied!" : <CopyIcon />}
      </Button>
    </div>
  );
};

export default Address;
