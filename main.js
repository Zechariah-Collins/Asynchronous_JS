const aliceTumbling = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
}

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

function aliceAnimate1(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Async Operation 1 completed');
      alice1.animate(aliceTumbling, aliceTiming);
      resolve();
    }, 2000);
  });
}

function aliceAnimate2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Async Operation 2 completed');
      alice2.animate(aliceTumbling, aliceTiming);
      resolve();
    }, 1500);
  });
}

function aliceAnimate3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Async Operation 2 completed');
      alice3.animate(aliceTumbling, aliceTiming);
      resolve();
    }, 1000);
  });
}
aliceAnimate1()
.then(() => aliceAnimate2())
.then(() => aliceAnimate3())
.then(() => {console.log('All animations completed');
})
.catch((error) => {
  console.error('An error occurred:', error);
});
