import { useBalance } from "@/context/BalanceContext";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { FormEvent, useMemo, useState } from "react";
import { CHAIN, useTonConnectUI } from "@tonconnect/ui-react";

import toNano from "@/utils/toNano";

const SendTransactionForm = () => {
  const [tonConnectUI] = useTonConnectUI();
  const { balance, setBalance } = useBalance();

  const [errorMessage, setErrorMessage] = useState("");

  const [form, setForm] = useState({
    address: "",
    amount: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!balance) return;

    setErrorMessage("");
    setIsLoading(true);

    if (!form.address || !form.amount) {
      setIsLoading(false);
      return setErrorMessage("Please fill out all fields.");
    }
    const sendAmount = Number(form.amount);
    try {
      await tonConnectUI.sendTransaction(
        {
          validUntil: Math.floor(Date.now() / 1000) + 360,
          network: CHAIN.TESTNET,
          messages: [
            {
              address: form.address,
              amount: toNano(sendAmount).toString(),
            },
          ],
        },
        {
          modals: ['before', 'success', 'error'],
          notifications: ["before", "success", "error"],
        }
      );
      setBalance(balance - sendAmount);
    } catch (error) {
      console.log(error);
      setErrorMessage("Transaction failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const validateAmount = (value: string) => value.match(/^[0-9.]+$/);

  const isAmountInvalid = useMemo(() => {
    if (form.amount === "") return false;
    if (!balance) return false;

    if (Number(form.amount) > balance) return true;

    return validateAmount(form.amount) ? false : true;
  }, [form.amount]);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="p-2 flex flex-col gap-3 rounded-xl border max-w-lg w-full"
      >
        <Input
          label="Receiving Address"
          size="sm"
          color="default"
          value={form.address}
          onValueChange={(value) =>
            setForm((prev) => ({ ...prev, address: value }))
          }
          isRequired
        />

        <Input
          label="Amount"
          size="sm"
          value={form.amount}
          onValueChange={(value) =>
            setForm((prev) => ({ ...prev, amount: value }))
          }
          endContent={<span>TON</span>}
          isInvalid={isAmountInvalid}
          color={isAmountInvalid ? "danger" : "default"}
          errorMessage="Please enter a valid amount"
          isRequired
        />

        <Button color="primary" type="submit" isLoading={isLoading}>
          Send
        </Button>

        {errorMessage && (
          <div className="text-danger text-xs text-center">{errorMessage}</div>
        )}
      </form>
    </>
  );
};

export default SendTransactionForm;
