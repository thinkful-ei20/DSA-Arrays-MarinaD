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

  get(index) {
    if (index < 0 || index >= this.length){
      throw new Error('Index out of bounds');
    }
    return fakeMem.get(this.ptr + index);
  }

  push(item){
    this.length++;
    if (this.capacity < this.length){
      this.resize((this.length) * myArray.SIZE_RATIO);
    }
    let newAddress = this.ptr + this.length -1;
    fakeMem.set(newAddress, item);
  }

  pop(){
    if (this.length === 0){
      return new Error('Index out of bounds');
    }
    const lastItem = fakeMem.get(this.ptr + this.length -1);
    this.length --;
    return lastItem;
  }
}



function main(){
  myArray.SIZE_RATIO = 3;

  //create an instance of the array class
  let arr = new myArray;

  //add an item to the array
  arr.push(3);
  // What is the length, capacity and memory address of your array?
  // The length will be 1, the capacity will be 3, and the memory address will be 0

  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);
  // What is the length, capacity and memory address of your array? 
  //Explain the result of your program after adding the new lines of code
  /*
  * Length will be 6, capacity will be 12 and the memory address will be 3
  * By adding new values into the array, we need to increase the length to hold them.
  * Capacity will also increase because on the by line 57 the capacity will not be large enough
  * and a resize function will be triggered, causing the capacity to become three times the new
  * required lenght (4) resulting in 12. Since we resized, we had to copy the entire array to the next
  * available spot which was at 3. 
  */ 

  arr.pop();
  arr.pop();
  arr.pop();
  // What is the length, capacity and memory address of your array? 
  //Explain the result of your program after adding the new lines of code
  /*
  * Length will be 3, capacity will still be 12 and the memory address will still be 0
  * By removing values from the array, we need to decrease the length to signify the other data can be overwritten.
  * Capacity will stay the same, as pop does not do anything with it.
  * The memory address does not change because the first
  * element of the array does not move around. 
  */ 
  console.log(arr.get(0));
  console.log(arr);
}

main();