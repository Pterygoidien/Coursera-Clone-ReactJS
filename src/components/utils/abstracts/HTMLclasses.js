export default (clStr) => {
  const clAr = [];
  if (clStr.trim().length) {
    clStr.split(" ").forEach((j) => clAr.push(j));
  }
  return clAr;
};
