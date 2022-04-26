export const getCoinNameFromId = (id) => {
  let name;
  switch (id) {
    case "bitcoin":
      name = "Bitcoin";
      break;
    case "btc":
      name = "Bitcoin";
      break;
    case "ethereum":
      name = "Ethereum";
      break;
    case "ripple":
      name = "XRP";
      break;
    case "shiba-inu":
      name = "Shiba Inu";
      break;
    case "solana":
      name = "Solana";
      break;
    case "tether":
      name = "Tether";
      break;
    case "binancecoin":
      name = "Binance Coin";
      break;
    case "usd-coin":
      name = "USD Coin";
      break;
    case "terra-luna":
      name = "Terra Luna";
      break;
    case "cardano":
      name = "Cardano";
      break;
    case "avalanche-2":
      name = "Avalanche";
      break;
    case "polkadot":
      name = "Polkadot";
      break;
    case "dogecoin":
      name = "Dogecoin";
      break;
    case "usd":
      name = "US Dollar";
      break;
    case "eur":
      name = "Euro";
      break;
    default:
      name = "";
      break;
  }
  return name;
};
