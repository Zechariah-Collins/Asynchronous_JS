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

function animateAsync(element, animation, timing) {
  return new Promise((resolve) => {
    element.animate(animation, timing).addEventListener('finish', resolve);
    aliceTiming.iterations++;
    aliceTiming.duration += 500;
  });
}

async function sequenceAnimations() {
  console.log('Starting animation sequence');
  
  await animateAsync(alice1, aliceTumbling, aliceTiming);
  console.log('Animation 1 completed');
  
  await animateAsync(alice2, aliceTumbling, aliceTiming);
  console.log('Animation 2 completed');
  
  await animateAsync(alice3, aliceTumbling, aliceTiming);
  console.log('Animation 3 completed');
  
  console.log('Animation sequence finished');
}

sequenceAnimations();