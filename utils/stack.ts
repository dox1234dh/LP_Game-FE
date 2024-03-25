interface stackInterface<dataType> {
   push(dataItem: dataType): void;
   pop(): dataType | null | undefined;
   peek(): dataType | null;
   isEmpty(): boolean;
   isFull(): boolean;
   size(): number;
   printStack(): void;
}

export default class StackClass<dataType> implements stackInterface<dataType> {
   private data: Array<dataType> = [];
   private stackSize: number = 0;

   constructor(size: number) {
      this.stackSize = size;
   }

   push(dataItem: dataType): void {
      if (this.data.length === this.stackSize) {
         throw Error(
            "You can't add more elements to stack as stack storage is full!"
         );
      }
      this.data.push(dataItem);
   }

   pop(): dataType | null | undefined {
      let element = this.data.pop();
      return element;
   }

   peek(): dataType | null {
      let element = this.data[this.size() - 1];
      return element;
   }
   isEmpty(): boolean {
      let result = this.data.length <= 0;
      return result;
   }
   isFull(): boolean {
      let result = this.data.length >= this.stackSize;
      return result;
   }
   size(): number {
      let len = this.data.length;
      return len;
   }
   printStack(): void {
      this.data.forEach((dataItem) => {
      });
   }
}