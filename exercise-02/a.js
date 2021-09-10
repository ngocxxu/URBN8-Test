console.log('Bai a')


function api() {}

function api2() {}

function api3() {}


api(function (result) {
  console.log("result: ", result);

  api2(function (result2) {
    console.log("result2: ", result2);

    api3(function (result3) {
      console.log("result3: ", result3);
    });
  });
});


setTimeout(function (result=1) {
  console.log("result: ", result);

  setTimeout(function (result2=2) {
    console.log("result2: ", result2);

    setTimeout(function (result3=3) {
      console.log("result3: ", result3);
    },1000);
  },1000);
},1000);
