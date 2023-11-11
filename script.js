// store all arrow classes
const round = document.querySelectorAll('.arrow')

let current = 1;

// store all child div
const slider = document.querySelectorAll('.slider div')

// total number of slides
const slides = slider.length;

// iterate over each element with the class arrow
round.forEach(button => {
    // add a click event listener to each arrow button
    button.addEventListener('click', e => {
        // check if the clicked button has the class arrow-left
        const isLeftArrow = button.classList.contains('arrow-left')

        // update the current
        if (isLeftArrow) {
            current -= 1;
        } else {
            current += 1;
        }

        if (current >= slides - 1) {
            current = 1;
        }

        if (current < 1) {
            current = slides - 2;
        }

        // scroll the element at the current index into view with smooth behavior
        slider[current].scrollIntoView({
            inline: "center",
            behavior: "smooth"
        })
    })
})
