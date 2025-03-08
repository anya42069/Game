const claw = document.getElementById('claw');
const playButton = document.getElementById('play-button');
const message = document.getElementById('message');
const prizes = document.querySelectorAll('.prize');

playButton.addEventListener('click', () => {
  // Reset claw position
  claw.style.top = '10px';

  // Animate the claw moving down
  setTimeout(() => {
    claw.style.top = '350px';
  }, 500);

  // Check if a prize is grabbed
  setTimeout(() => {
    const randomPrize = prizes[Math.floor(Math.random() * prizes.length)];
    message.textContent = `You won a ${randomPrize.textContent}! Get Well Soon!`;
    message.style.display = 'block';
  }, 1500);
});
