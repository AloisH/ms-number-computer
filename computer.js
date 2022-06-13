module.exports = {
  add: function (a, b) {
    if (a === undefined && b === undefined) {
      throw new Error("Arguments missing.");
    }

    if (a === null) {
      throw new Error(`"null" is not a valid number [arg 0].`);
    }
    if (b === null) {
      throw new Error(`"null" is not a valid number [arg 1].`);
    }
    if (typeof a === "string") {
      throw new Error(`"a String is not a valid number [arg 0].`);
    }
    if (typeof b === "string") {
      throw new Error(`"a String is not a valid number [arg 1].`);
    }
    if (typeof a !== "number") {
      throw new Error(`"${typeof a}" is not a valid number [arg 0].`);
    }
    if (b === null || b === undefined) {
      throw new Error(`"${typeof b}" is not a valid number [arg 1].`);
    }

    return a + b;
  },
};
