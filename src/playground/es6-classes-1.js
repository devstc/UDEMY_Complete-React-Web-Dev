class Person {
	constructor(argName = "Anonymous", argAge = 0) {
		this.name = argName;
		this.age = argAge;
	}
	getDescription() {
		return `${this.name} is ${this.age} year(s) old.`;
	}
}

class Traveler extends Person {
	constructor(argName, argAge, argLocation) {
		super(argName, argAge);
		this.location = argLocation;
	}
	getDescription() {
		let description = super.getDescription();
		if(this.location) {
			description += ` They're traveling from ${this.location}.`;
		}
		return description;
	}

}

// const person1 = new Person("Sean", 47);
// console.log(person1.getDescription());

// const person2 = new Person();
// console.log(person2.getDescription());


const person1 = new Traveler("Sean", 47, "Franklin");
console.log(person1.getDescription());

const person2 = new Traveler();
console.log(person2.getDescription());