var cars = ["Saab", "Volvo", "BMW"]; // recommended
// lub
var cars2 = new Array("Saab","Volvo", "BMW")
// Pobranie elementu
var name = cars[0];
//Przypisanie elementu
cars[0] = "Opel";

console.log(cars);

// Tablica to obiekt. Z taką różnica że dostęp do składowych jest przez indekser w przeciwienstwie do obiektu
var person = {firstName:"John", lastName:"Doe", age:46};
person.firstName = "Mike";
console.log(person);

var myArray = [];
myArray[0] = Date.now;
myArray[1] = person;
myArray[2] = cars;

console.log(myArray);

// Dlugosc tablicy

console.log(myArray.length);
var sorted = cars.sort(); // sort dokona sie na tablicy cars
// sorted jest referencją do cars. A więc zmiana w sorted zmieni cars
sorted[2]="VW"
console.log(sorted);
console.log(cars);
// metoda slice powoduje klonowanie
var clone = cars.slice();
clone[2]="Volvo";
console.log(cars);
console.log(clone);

// Looping
for(i=0; i< cars.length;i++)
{
    console.log(cars[i]);
}

// Dodawanie elementu
cars.push("Audi");
cars[4]="Fiat";
cars[10]="Seat";
cars[cars.length]="Skoda";
console.log(cars);

// Sprawdzenie czy cos jest tablicą

console.log(typeof cars) // da obiekt, bo tablica to obiekt
console.log(Array.isArray(cars));
console.log(cars.constructor.toString().indexOf("Array")> -1);