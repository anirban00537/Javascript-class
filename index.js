const url1 =
  "https://codecanyon.net/item/tradexpro-exchange-crypto-buy-sell-and-trading-platform/39228546";
const url2 = "https://www.w3schools.com/js/js_functions.asp";

function SeperateUrlAndAdd(url, spitName) {
  const splitted = url.split(spitName);
  console.log(splitted[0]);
}
SeperateUrlAndAdd(url2, "js");
SeperateUrlAndAdd(url1, "item");
