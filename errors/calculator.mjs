const double = (num) => {
  if (!Number.isFinite(num)) {
    throw new Error('Must be a finite number.');
  }
  return num * 2;
};

const triple = (num) => {
  return numVar * 3;
};

export { double, triple };
