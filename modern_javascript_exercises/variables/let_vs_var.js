// Instructions can be found in let_vs_var.md

// Problems with var

function count() {
  let i;
  for (i = 0; i < 5; i++) {
    console.log(i + " inside the forLoop");
  }
  console.log(i + " outside the forLoop");
}

count(); // <---- uncomment me!

// Another problem with var is that we can overwrite it, like this:

//var greeting = "Hello 😘";
//var greeting = "Not today, pal! 😤";

const greeting = "Hello 😘";
// greeting = "Not today, pal! 😤"; This will throw an error as const cannot be reassigned

//OR

let greeting1 = "Hello 😘";
greeting1 = "Not today, pal! 😤";


console.log(greeting, greeting1); // <----- uncomment me!
