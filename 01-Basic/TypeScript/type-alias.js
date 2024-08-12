var sample = "test";
console.log(sample);
sample = 100;
console.log(sample);
var personData = {
    name: "김동우",
    age: 30,
    address: { city: "Cheongju", country: "Korea" }
};
function printPersonData(person) {
    console.log("\uC774\uB984: ".concat(person.name, ", \uB098\uC774: ").concat(person.age, ", \uC8FC\uC18C: ").concat(person.address.city, ", ").concat(person.address.country));
}
printPersonData(personData);
