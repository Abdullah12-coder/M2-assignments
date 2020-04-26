// JavaScript source code
let value: number|string;
value=120;
console.log("The numeric value of a value is: "+value);
value="Welcome to TypeScript";
console.log("The String value of a value is: "+value);

function display(value: (number|string))
    {
        if(typeof(value) === "number")
            console.log('The given value is of type number.');
        else if(typeof(value) ==="string")
            console.log('The given value is of type string.');
    }
    display(123);
    display("Abdullah");