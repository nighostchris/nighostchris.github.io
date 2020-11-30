const transformRawDate = (rawDate) => {
  const monthMapping = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

  const date = new Date(rawDate);

  return `${monthMapping[date.getMonth()]} ${date.getFullYear()}`;
}

export default transformRawDate;
