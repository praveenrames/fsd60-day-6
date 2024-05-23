class Circle {
    constructor(radius) {
      this._radius = radius;
    }
  
    // Getter for radius
    get radius() {
      return this._radius;
    }
  
    // Setter for radius
    set radius(value) {
      if (value <= 0) {
        throw new Error("Radius must be a positive number");
      }
      this._radius = value;
    }
  
    // Getter for circumference
    get circumference() {
      return 2 * Math.PI * this._radius;
    }
  
    // Getter for area
    get area() {
      return Math.PI * this._radius * this._radius;
    }
  }
  
  // Example usage:
  let myCircle = new Circle(5);
  
  console.log(`Radius: ${myCircle.radius}`); // Output: Radius: 5
  console.log(`Circumference: ${myCircle.circumference}`); // Output: Circumference: 31.41592653589793
  console.log(`Area: ${myCircle.area}`); // Output: Area: 78.53981633974483
  
  myCircle.radius = 10;
  console.log(`Updated Radius: ${myCircle.radius}`); // Output: Updated Radius: 10
  console.log(`Updated Circumference: ${myCircle.circumference}`); // Output: Updated Circumference: 62.83185307179586
  console.log(`Updated Area: ${myCircle.area}`); // Output: Updated Area: 314.1592653589793
  
  // Trying to set a negative radius will throw an error
  try {
    myCircle.radius = -1;
  } catch (e) {
    console.error(e.message); // Output: Radius must be a positive number
  }
  
  