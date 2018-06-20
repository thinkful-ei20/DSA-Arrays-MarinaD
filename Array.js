const Memory = require('./Memory');

const fakeMem = new Memory;

class Array {
  constructor(){
    this.length = 0;
    this.capacity = 0;
    this.ptr = fakeMem.allocate(this.length);
  }

  resize(size){
    const oldPtr = this.ptr;
    this.ptr = fakeMem.allocate(size);
    if (this.ptr === null){
      throw new Error('Out of memory');
    }
    fakeMem.copy(this.ptr, oldPtr, this.length);
    fakeMem.free(oldPtr);
    this.capacity = size;
  }

  push(item){
    this.length++;
    let newAddress = this.ptr + this.length +1;
  }
}

module.exports = Array;