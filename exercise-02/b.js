console.log('Bai b')

const api = new Promise((resolve, reject) =>{
  resolve(1)
});
const api2 = new Promise((resolve, reject) =>{
  resolve(2)
});
const api3 = new Promise((resolve, reject) =>{
  resolve(3)
});


api
  .then(resultNumber =>{
    console.log('result: ', resultNumber)
  })
  .catch(err => console.log('error: ', err))

api2
.then(resultNumber2 =>{
  console.log('result2: ', resultNumber2)
})
.catch(err => console.log('error: ', err))

api3
.then(resultNumber3 =>{
  console.log('result3: ', resultNumber3)
})
.catch(err => console.log('error: ', err))


