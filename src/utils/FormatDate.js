const FormatDate = (value) => {
  let date = new Date(value);
  const day = date.toLocaleString("default", { day: "2-digit" });
  const month = date.toLocaleString("default", { month: "numeric" });
  const year = date.toLocaleString("default", { year: "numeric" });
  return year + "-" + `${month.length === 1 ? "0" + month : month}` + "-" + day;
};

export default FormatDate;
