document.addEventListener("DOMContentLoaded", function () {
    timingOut();
    callbacksAndRecursion();
    promisesPromises();
});

// ============= Timing Out section ================

function timingOut() {
    let btn = document.getElementById('timingOut');

    // Objective 1
    let showMessage = function (msg) {
        console.log(msg);
    }

    // Objective 4
    let getWords = function () {
        console.log('Pizza');
        setTimeout(() => console.log('Chicken'), 3000);
        setTimeout(() => console.log('Burguer'), 5000);
        setTimeout(() => console.log('Cheese'), 6000);
    }

    btn.addEventListener("click", () => {
        // Objective 2
        showMessage("Hi from the Timing Out section");
        // Objective 3
        setTimeout(() => showMessage("Hi from the same section but 2 seconds afer"), 2000);
        // Make it start after the previous it's done to not mix console.logs
        setTimeout(() => getWords(), 2000)
    });

}

// ============= Callbacks and Recursion section ================

function callbacksAndRecursion() {
    let btn = document.getElementById('callbacksAndRecursion');

    // Objective 1
    let done = function () {
        console.log("Job's done!");
    }

    btn.addEventListener("click", () => {
        // Objective 3
        countdown(5, done);
    });

}

// Objective 2
function countdown(num, callback) {
    console.log(num);
    setTimeout(() => {
        if (num < 0) {
            return;
        } else if (num === 1) {
            return callback();
        } else {
            return countdown(num - 1, callback);
        }
    }, 1000);
}

// ============= Promises Promises section ================

// Objective 1
let lunchTime = true;
// Objective 10 
// let lunchTime = false;

function promisesPromises() {

    // Objective 2
    let orderMeSomeFood = () => {
        return new Promise((resolve, reject) => {
            // Objective 3
            if (lunchTime === true) {
                // Objective 4
                let favLunch = {
                    lunch: "pizza",
                    drink: "Coca-Cola"
                };
                // Objective 5
                resolve(`My favorite lunch is ${favLunch.lunch} with ${favLunch.drink}`);
            } else {
                // Objective 6
                let err = new Error(`It's not lunch time yet`);
                // Objective 7
                reject(err);
            }
        });
    }

    let btn = document.getElementById('promisesPromises');
    btn.addEventListener("click", () => {
        //Objective 8
        orderMeSomeFood()
            .then((msg) => console.log(msg))
            .catch((msg) => console.log(msg));
    });
}