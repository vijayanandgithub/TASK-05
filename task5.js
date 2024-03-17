class Person {
    constructor(name, age, gender, occupation) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.occupation = occupation;
    }

    introduce() {
        return `Hello, my name is ${this.name}. I am ${this.age} years old. I am a ${this.gender} ${this.occupation}.`;
    }

    changeOccupation(newOccupation) {
        this.occupation = newOccupation;
        return `${this.name}'s occupation has been changed to ${this.occupation}.`;
    }
}

let person1 = new Person("vijay", 27, "male", "engineer");
console.log(person1.introduce());





