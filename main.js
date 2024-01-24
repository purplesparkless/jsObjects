//const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
//   };

// Accessing Object Properties
objectName.propertyName  //objectName["propertyName"]
person.lastName;      //person["lastName"];

const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };

// Accessing Object Methods
objectName.methodName()
name = person.fullName();

const frontend = {
  body:"HTML",
  style:"CSS",
  interaction:"JS",
}
console.log(frontend)