module.exports.generateCustomId = (prefix, length = 4) => {
  let id = "";
  let number = "";
  if (prefix) {
    number = Math.floor(Math.random() * Math.pow(10, length))
      .toString()
      .padStart(length, "0");
    id = `${prefix}${number}`;
  } else {
    id = Math.floor(Math.random() * Math.pow(10, length))
      .toString()
      .padStart(length, "0");
  }
  console.log(id);
  return id;
};
