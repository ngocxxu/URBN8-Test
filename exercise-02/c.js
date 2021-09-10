console.log('Bai c')

const api = new Promise((resolve, reject) =>{
  resolve(1)
});
const api2 = new Promise((resolve, reject) =>{
  resolve(2)
});
const api3 = new Promise((resolve, reject) =>{
  resolve(3)
});


async function getApi(){
  const resultNumber = await api
  console.log('result: ', resultNumber)
  const resultNumber2 = await api2
  console.log('result: ', resultNumber2)
  const resultNumber3 = await api3
  console.log('result: ', resultNumber3)
  return resultNumber;
}


getApi().then()