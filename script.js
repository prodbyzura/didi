const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
    // Change text and GIF
    question.innerHTML = "Good, you had no choice anyway 😈! Now claim your first gift 😊"; gif.src = "images/dudupage2.gif";

    // Hide Yes & No buttons
    yesBtn.style.display = "none";
    noBtn.style.display = "none";

    // Create a container for centering the new button
    const prizeContainer = document.createElement("div");
    prizeContainer.classList.add("prize-container");

    // Create the new button
    const prizeBtn = document.createElement("button");
    prizeBtn.innerText = "Claim gift";
    prizeBtn.classList.add("prize-btn");

    // Add the prize button to the container
    prizeContainer.appendChild(prizeBtn);

    // Add container to the wrapper
    wrapper.appendChild(prizeContainer);

    // Add click event for the prize button
    prizeBtn.addEventListener("click", () => {
        // Trigger confetti
        confetti();

        // Hide the prize button
        prizeContainer.style.display = "none";

        // Add the "Love you" message and first GIF without buttons
        question.innerHTML = "Wow, No way! You won a Dyson by choice! But...., you'll have to wait until you're in Groningen to claim it 😝. But no worries, we'll see what else is in store for you on Valentine's Day 😉";
        gif.src = "images/Dysonwow.gif";

        // Hide Yes & No buttons
        yesBtn.style.display = "none";
        noBtn.style.display = "none";
    });
});

// Make the no button move when clicked
noBtn.addEventListener("click", () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.position = "absolute"; // Set absolute positioning to move around
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});
