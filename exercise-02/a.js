function api() {}

function api2() {}

function api3() {}

api(function(result) {
    console.log("result: ", result);
    api2(function(result2) {
        console.log("result2: ", result2);
        api3(function(result3) {

            console.log("result3: ", result3);
        });

    });
});


// api(apiInside(1) apiInside2())
api2(2)

api3(3)

function apiInside(result) {
    console.log("result: ", result);
}

function apiInside2(result2) {
    console.log("result2: ", result2);
}

function apiInside3(result3) {
    console.log("result3: ", result3);
}