// let progressCircular = document.querySelector(".progress-circular");
// let btnVal = document.querySelector(".switch-on");
// let btnHide = document.querySelector(".switch");
// let inp = document.querySelector("input");
// let value = document.querySelector(".value");
//
// let start = 0;
//
// btnVal.addEventListener("click", bar);
//
// btnHide.addEventListener('click', hide);
//
// function hide() {
//     progressCircular.style.background = `#EFF3F6`;
// }
//
// function bar() {
//     let progress = setInterval(() => {
//         if (start < inp.value) {
//             start++;
//             progressEnd()
//         } else {
//             start--;
//             progressEnd()
//         }
//
//         function progressEnd() {
//             // value.textContent = `${start}%`;
//             progressCircular.style.background = `conic-gradient(#005BFF ${start * 3.6}deg, #EFF3F6 0deg)`;
//             if (start == inp.value) {
//                 clearInterval(progress);
//             }
//         }
//     }, 20);
// }


const progressBar = document.getElementById("progress__bar");

const progressInput = document.getElementById("progress__input");

const animateInput = document.getElementById("animate__input");

const hideInput = document.getElementById("hide__input");

let prevProgressValue = 0;

progressInput.addEventListener("input", (event) => {
    const value = event.target.value;

    let progress = setInterval(() => {
        if (prevProgressValue < value) {
            prevProgressValue++;
            progressEnd()
        } else {
            prevProgressValue--;
            progressEnd()
        }

        console.log('prevValue: ' + prevProgressValue)
        console.log('value: ' + value)

        function progressEnd() {
            progressBar.style.background = `conic-gradient(#005BFF ${prevProgressValue * 3.6}deg, #EFF3F6 0deg)`;
            if (prevProgressValue == value) {
                clearInterval(progress);
            }
        }
    }, 0.1);
});

animateInput.addEventListener("change", (event) => {
    const checked = event.target.checked;

    if (checked) {
        progressBar.classList.add("rotating");
    } else {
        progressBar.classList.remove("rotating");
    }

    console.log(checked);
});

hideInput.addEventListener("change", (event) => {
    const checked = event.target.checked;

    if (checked) {
        progressBar.style.display = "none";
    } else {
        progressBar.style.display = null;
    }

    console.log(checked);
});
