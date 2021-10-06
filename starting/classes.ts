/**
 * Modifiers are keywords that we can place on different methods and properties inside of a class
 * protected, private, public
 */

/**
 * Constructor function is a very special function defined inside of a class, any time that we
 * define a constructor, it will be instantly executed, right then we create a new instance of the class
 */

class Vehicle {
    // by declare public keyword, we don't need reassign color in constructor like: this.color = color
    constructor(public color: string) {} 

    public drive(): void {
        console.log('alo')
    }

    private honk(): void {
        console.log('blo')
    }
}

class Car extends Vehicle {
    constructor(public wheels: number, color: string) {
        // The super is a reference to these super class or the parent class of car which is Vehicle
        super(color); 
    }

    drive(): void {
        console.log('car has been overritten')
    }
}

const newCar = new Car(4, 'red');

newCar.drive();