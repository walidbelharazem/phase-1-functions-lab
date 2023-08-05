// Code your solution in this file!
// const distanceFromHqInBlocks = (n) => `the distance between you and Scuber headquarters in blocks is: ${Math.abs(n - 42)}`;

const distanceFromHqInBlocks = (n) => Math.abs(n - 42);

const distanceFromHqInFeet = (m) => distanceFromHqInBlocks(m) *264;

const distanceTravelledInFeet = (n,m) => (Math.abs(n - m))*264;



const calculatesFarePrice = (n, m) => { 
  const d = Math.abs(n - m) * 264;   
  let p = d*2 ; // Divide by 100 to convert cents to dollars

  if (d <= 400) {
    return 0; // Return a number instead of a string
  } else if (d > 400 && d <= 2000) {
    return p ; // Return the calculated fare directly
  } else if (d > 2000 && d <= 2500) {
    return 25; // Return a number instead of a string
  } else {
    return 'cannot travel that far'; // Return as a string
  }
};


module.exports = { distanceFromHqInBlocks,
distanceFromHqInFeet, 
calculatesFarePrice,

};