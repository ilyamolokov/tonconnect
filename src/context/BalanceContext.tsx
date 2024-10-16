import { getAddressBalance } from "@/api/getAddressBalance";
import { useTonAddress, useTonWallet } from "@tonconnect/ui-react";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

export interface IBalanceContext {
  isLoading: boolean;
  isError: boolean;
  balance: number | null;
  setBalance: Dispatch<SetStateAction<number | null>>;
}

const BalanceContext = createContext<IBalanceContext>({
  isLoading: false,
  isError: false,
  balance: null,
  setBalance: () => {},
});

export const useBalance = () => useContext(BalanceContext);

export const BalanceProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const userFriendlyAddress = useTonAddress();
  const wallet = useTonWallet();
  const [balance, setBalance] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!wallet) return;
    async function fetchAddressBalance() {
      setIsLoading(true);
      try {
        const data = await getAddressBalance(userFriendlyAddress);
        setBalance(data);
      } catch (e) {
        setIsError(true);
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    }

    fetchAddressBalance();
  }, [wallet]);

  return (
    <BalanceContext.Provider
      value={{
        balance,
        setBalance,
        isLoading,
        isError,
      }}
    >
      {children}
    </BalanceContext.Provider>
  );
};
