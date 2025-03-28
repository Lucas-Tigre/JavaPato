const randomNumber = Math.floor(Math.random() * 20) + 1;
let attempts = 0;

function checkGuess() {
    const userGuess = parseInt(document.getElementById('guess').value);
    attempts++;

    if (userGuess < 1 || userGuess > 20) {
        document.getElementById('result').innerText = "Por favor, escolha um número entre 1 e 20.";
    } else if (userGuess < randomNumber) {
        document.getElementById('result').innerText = "Muito baixo! Tente novamente.";
    } else if (userGuess > randomNumber) {
        document.getElementById('result').innerText = "Muito alto! Tente novamente.";
    } else {
        document.getElementById('result').innerText = `Parabéns! Você acertou o pato! 🦆 O número era ${randomNumber} e você acertou em ${attempts} tentativas!`;
    }
}
