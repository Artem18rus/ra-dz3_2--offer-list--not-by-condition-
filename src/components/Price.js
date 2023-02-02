function Price({ price, currency_code }) {
  let insertCode;
  let lighting;
  if (currency_code === "USD") {
    insertCode = `$${price}`;

    //удаляем последние 2 символа (без точки):
    lighting = insertCode.substring(0, price.length - 1);
  } else if (currency_code === "EUR") {
    insertCode = `€${price}`;
    lighting = insertCode.substring(0, price.length - 1);
  } else {
    lighting = price.split(".")[0] + ".";
  }

  return lighting;
}
export default Price;
