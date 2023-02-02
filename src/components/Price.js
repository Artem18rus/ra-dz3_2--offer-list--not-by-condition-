function Price(props) {
  let insertCode;
  let lighting;
  if (props.currency_code === "USD") {
    insertCode = `$${props.price}`;

    //удаляем последние 2 символа (без точки):
    lighting = insertCode.substring(0, props.price.length - 1);
  } else if (props.currency_code === "EUR") {
    insertCode = `€${props.price}`;
    lighting = insertCode.substring(0, props.price.length - 1);
  } else {
    lighting = props.price.split(".")[0] + ".";
  }

  return lighting;
}
export default Price;
