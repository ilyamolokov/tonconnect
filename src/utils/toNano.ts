export default function toNano(ton: number) {
  const nanoTONsPerTON = 1_000_000_000;
  return Math.round(ton * nanoTONsPerTON);
}
