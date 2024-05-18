const calculator = {
  sum(numEsq, numDir) {
    return numEsq + numDir;
  },
  subt(numEsq, numDir) {
    return numEsq - numDir;
  },
  mult(numEsq, numDir) {
    return numEsq * numDir;
  },
  div(numEsq, numDir) {
    return numEsq / numDir;
  },
};

module.exports = { calculator };
