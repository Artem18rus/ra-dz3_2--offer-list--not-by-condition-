function Title(props) {
  let strLength;

  if (props.title.length > 50) {
    strLength = props.title.substring(0, 50);
    strLength = `${strLength}…`;
  } else {
    strLength = props.title;
  }

  return strLength;
}

export default Title;
