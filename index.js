class HashTable {
  constructor(size = 100) {
    this.buckets = new Array(size);
    this.size = size;
    this.count = 0;
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode % this.size;
  }

  insert(key, value) {
    const index = this.hash(key);
    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }
    for (let pair of this.buckets[index]) {
      if (pair[0] === key) {
        pair[1] = value;
        return;
      }
    }
    this.buckets[index].push([key, value]);
    this.count++;
  }

  get(key) {
    const index = this.hash(key);
    if (!this.buckets[index]) {
      return null;
    }
    for (let pair of this.buckets[index]) {
      if (pair[0] === key) {
        return pair[1];
      }
    }
    return null;
  }
  contains(key) {
    if (this.get(key) !== null){
      return true
    } else{
      return false;
    }
  }

  remove(key){
    const index = this.hash(key);
    if (!this.buckets[index]){
      return null;
    }
    for (let i = 0; i < this.buckets[index].length; i++);{
      if (this.buckets[index][i][0] === key){
        const removedPair = this.buckets[index].splice(i, 1);
        this.count--;
        return removedPair[0][1];
      }
    }
    return null;
  }

  length(){
    return this.count;
  }

  clear(){
    this.buckets = new Array(this.size);
    this.count = 0;
  }
}





const HashTable = new HashTable();

HashTable.insert("name", "Nata");
HashTable.insert("age", 24);