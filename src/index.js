class Sorter {
  constructor() {
    this.array = [];

    this.comparator = function (a, b) {
      return (a > b)? 1 : -1;
    };
  }

  add(element) {
    this.array.push(element);
  }

  at(index) {
    return this.array[index];
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    return this.array;
  }

  sort(indices) {
    for (var i = 0; i < indices.length - 1; i++) {
      for (var j = i; j < indices.length; j++) {
        if (indices[i] > indices[j]) {
          var buff = indices[i];
          indices[i] = indices[j];
          indices[j] = buff;
        }
      }
    }

    for(var i = 0; i < indices.length - 1; i++) {
      for (var j = i; j < indices.length; j++) {
        if (this.comparator(this.array[indices[i]], this.array[indices[j]]) > 0){
          var buff = this.array[indices[i]];
          this.array[indices[i]] = this.array[indices[j]];
          this.array[indices[j]] = buff;
        } 
      }
    }
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;