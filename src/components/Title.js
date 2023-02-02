function Title({ title }) {
  let strLength;

  if (title.length > 50) {
    strLength = title.substring(0, 50);
    strLength = `${strLength}…`;
  } else {
    strLength = title;
  }

  return strLength;
}

export default Title;
