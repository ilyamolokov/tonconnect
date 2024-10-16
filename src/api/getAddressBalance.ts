export async function getAddressBalance(address: string) {
  try {
    const response = await fetch(
      `https://testnet.toncenter.com/api/v2/getAddressInformation?address=${address}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch address balance.");
    }

    const data = await response.json();
    const balance = parseFloat(data.result.balance) / 1e9;

    return !isNaN(balance) ? balance : null;
  } catch (error: unknown) {
    throw new Error(
      error instanceof Error
        ? error.message
        : "Failed to fetch address balance due to an unknown error"
    );
  }
}
