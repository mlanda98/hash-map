class HashTable {
  constructor(size = 100){
    this.buckets = new Array(size);
    this.size = size;
  }

  hash(key) {
   let hashCode = 0;
   const primeNumber = 31;
   for (let i = 0; i < key.length; i++) {
     hashCode = primeNumber * hashCode + key.charCodeAt(i);
   }

   return hashCode % this.size;
 } 

 insert(key, value){
  const index = this.hash(key);
  if (!this.buckets[index]){
    this.buckets[index] = [];
  }
  for (let pair of this.buckets[index]){
    if (pair[0] === key){
      pair[1] = value;
      return;
    }
  }
  this.buckets[index].push([key, value]);
 } 
}

const HashTable = new HashTable();

HashTable.insert("name", "Nata");
HashTable.insert("age", 24);