const num = document.getElementById('num');
const btn = document.getElementById('btn');
const randomNumberGenerator = () => {
    const randomNumber = Math.floor(Math.random() * 100 ); 
    //Now it will generate Random Number upto 100, you can change the number to any number you want to randomize! 
    num.textContent = randomNumber;
};
btn.addEventListener('click', randomNumberGenerator);
randomNumberGenerator();