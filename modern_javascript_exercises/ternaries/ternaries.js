// Instructions can be found in ternaries.md

export function sayHello(person) {
  /*if (name === undefined) {
    return "Hello you!";
  } else return "Hello, " + name + "!";*/
  return ("Hello" + (person === undefined ? " you!" : ", " + person + "!"));
}


