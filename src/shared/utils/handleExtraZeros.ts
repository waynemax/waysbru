export const handleExtraZeros = (n: string | number) => {
  const res = n.toString().replace(/0*$/, "");
  if (res[res.length - 1] === ".") {
    return res.slice(0, res.length - 1);
  }
  return res;
};
