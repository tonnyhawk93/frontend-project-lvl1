export default (a, b) => {
  let min; let
    max;
  if (a < b) {
    min = a;
    max = b;
  } else if (a > b) {
    max = a;
    min = b;
  } else {
    return a;
  }
  let nod = min;
  while (nod >= 1) {
    if (max % nod === 0 && min % nod === 0) return nod;
    nod -= 1;
  }
  return nod;
};
