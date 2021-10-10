class Sorter {
    constructor(public collection: number[]) {

    }

    sort(): void {
        const { length } = this.collection;

        for(let i = 0; i < length; i++) {
            for(let j = 0; j <length -i - 1; j++) {
                if(this.collection[j] > this.collection[j+1]) {
                    const temp = this.collection[j];
                    this.collection[j] = this.collection[j+1];
                    this.collection[j+1] = temp
                }
                console.log(this.collection)
            }
        }
    }
}

const arr = new Sorter([9, 8, 0, -2, -10, 4])
arr.sort()
console.log(arr)