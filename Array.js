const Memory = require('./Memory');

const fakeMem = new Memory;

class myArray {
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
    if (this.capacity < this.length){
      this.resize((this.length +1) * myArray.SIZE_RATIO);
    }
    let newAddress = this.ptr + this.length;
    fakeMem.set(newAddress, item);
  }
}


function main(){
  myArray.SIZE_RATIO = 3;

  const foo = new myArray;
  console.log(foo);
  foo.push(3);
  console.log(foo);
  console.log(fakeMem);
}

main();