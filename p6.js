/*
    CIT 281 Project 6
    Name: Melinda Chan
*/

class Shape {
    constructor(sides = []) {
        // console.log(sides);
        this.sides = sides;
    }
    perimeter = () => this.sides.length === 0 ? 0 : this.sides.reduce((total, sides) => total + sides, 0); // if array is empty then return zero
    // perimeter = this.sides.length !== 0 ? () => this.sides.reduce((total, sides) => total + sides, 0) : 0; // length is undefined  
}

class Rectangle extends Shape {
    constructor (length = 0, width = 0) {
        super([length, width, length, width]);
        this.length = length;
        this.width = width;
    }
    area() {
        return this.width * this.length;
    }
}

class Triangle extends Shape {
    constructor (sideA = 0, sideB = 0, sideC = 0) {
        super([sideA, sideB, sideC]);
        this.sideA = sideA;
        this.sideB= sideB;
        this.sideC = sideC;
    }
    area() {
        let s = (this.sideA + this.sideB + this.sideC) / 2;
        return Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC))
    }
}

function testing (sides) {
    let newObj = null;  // hopefully this will pass in all the arrays within the array of side
    for (const a of sides) {
        // console.log(a); // array with arrays inside -> for loop will console log the arrays
        switch(a.length) {
            case 2:
                if (a[0] === a[1]) { // if length = width (aka square)
                    newObj = new Rectangle(...a); // ... to pass each value in array as individual 
                    console.log(`Square with sides ${a.toString()} has perimeter of ${newObj.perimeter()} and area of ${newObj.area()}`);
                } else {
                    newObj = new Rectangle(...a);
                    console.log(`Rectangle with sides ${a.toString()} has perimeter of ${newObj.perimeter()} and area of ${newObj.area()}`);
                }
                break;
            case 3:
                newObj = new Triangle(...a);
                console.log(`Triangle with sides ${a.toString()} has perimeter of ${newObj.perimeter()} and area of ${newObj.area()}`);
                break;
            default:
                if (a.length === 1) {
                    console.log(`Shape with ${a.length.toString()} side unsupported`);
                } else {
                    console.log(`Shape with ${a.length.toString()} sides unsupported`);
                }
        }
    }
}

// Array of sides arrays
const data = [ [3, 4], [5, 5], [3, 4, 5], [10], [] ]; 

testing(data)

/* TEST FOR TESTING FUNCTION
function test(side1) {
    let newObj = new Rectangle(...side1);
    console.log(newObj);
    console.log(newObj.area());
}
test([3,5]);
*/
