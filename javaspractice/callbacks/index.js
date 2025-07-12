const fs = require('fs');

function person(name, callbackFn) {
    console.log(`hello ${name}`);
    callbackFn();
}

function address() {
    console.log("india");
}

person('sangam Mukherjee', address);

// async file read
fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('error reading file', err);
        return;
    }
    console.log(data);
});
