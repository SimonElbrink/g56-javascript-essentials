let person = {
    name: "Simon",
    age: 28,
    isStudent: false,
    address: {
        city: "Växjö",
        country: "Sweden"
    },

    displayInfo () {
        console.log(this.name, 'is', this.age, 'years old', (this.isStudent) ? 'and is a student.' :  'and is a teacher.');
    }
};

console.log(person.name);
console.log(person.address.country);


person.age = 31;
person["isStudent"] = true;


console.log(person.age);
console.log(person.isStudent);


person.gender = "Male";

console.log(person.gender);

delete person.address;

console.log(person)
console.log(person.address) // Undefined