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
// const mock = {
//   ok: true,
//   result: {
//     "@type": "raw.fullAccountState",
//     balance: "4974861663",
//     code: "te6cckECFAEAAoEAART/APSkE/S88sgLAQIBIAIDAgFIBAUBAvIOAtzQINdJwSCRW49jINcLHyCCEGV4dG69IYIQc2ludL2wkl8D4IIQZXh0brqOtIAg1yEB0HTXIfpAMPpE+Cj6RDBYvZFb4O1E0IEBQdch9AWDB/QOb6ExkTDhgEDXIXB/2zzgMSDXSYECgLmRMOBw4hAPAgEgBgcCASAICQAZvl8PaiaECAoOuQ+gLAIBbgoLAgFIDA0AGa3OdqJoQCDrkOuF/8AAGa8d9qJoQBDrkOuFj8AAF7Ml+1E0HHXIdcLH4AARsmL7UTQ1woAgAR4g1wsfghBzaWduuvLgin8PAeaO8O2i7fshgwjXIgKDCNcjIIAg1yHTH9Mf0x/tRNDSANMfINMf0//XCgAK+QFAzPkQmiiUXwrbMeHywIffArNQB7Dy0IRRJbry4IVQNrry4Ib4I7vy0IgikvgA3gGkf8jKAMsfAc8Wye1UIJL4D95w2zzYEAP27aLt+wL0BCFukmwhjkwCIdc5MHCUIccAs44tAdcoIHYeQ2wg10nACPLgkyDXSsAC8uCTINcdBscSwgBSMLDy0InXTNc5MAGk6GwShAe78uCT10rAAPLgk+1V4tIAAcAAkVvg69csCBQgkXCWAdcsCBwS4lIQseMPINdKERITAJYB+kAB+kT4KPpEMFi68uCR7UTQgQFB1xj0BQSdf8jKAEAEgwf0U/Lgi44UA4MH9Fvy4Iwi1woAIW4Bs7Dy0JDiyFADzxYS9ADJ7VQAcjDXLAgkji0h8uCS0gDtRNDSAFETuvLQj1RQMJExnAGBAUDXIdcKAPLgjuLIygBYzxbJ7VST8sCN4gAQk1vbMeHXTNCon9ZI",
//     data: "te6cckEBAQEAKwAAUYAAAAM////+tcWzmxDR7FE4K+caDwgU53L6tC1CqciGhMjHV18IuKUg1kCJGA==",
//     last_transaction_id: {
//       "@type": "internal.transactionId",
//       lt: "27014262000001",
//       hash: "RXamRWqH5t3smmCjWcpHnYF1RZMjdkkLGFoaAQfljJM=",
//     },
//     block_id: {
//       "@type": "ton.blockIdExt",
//       workchain: -1,
//       shard: "-9223372036854775808",
//       seqno: 24079303,
//       root_hash: "JrCRCmUaiSCzvw6mTy7grNJX9bJsYYODPsrrgAefmgU=",
//       file_hash: "fHphctmLQ/zQCS6YrgVPa25oGZDZM8pbEAHVQEsSmag=",
//     },
//     frozen_hash: "",
//     sync_utime: 1729107286,
//     "@extra": "1729107305.6790056:4:0.09486259399250963",
//     state: "active",
//   },
// };