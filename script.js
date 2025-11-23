let audios = [];

// PRELOAD AUDIO 28 → 63
for (let i = 28; i <= 63; i++) {
    audios.push(new Audio(`audio/${i}.mp3`));
}

// SELECT ALL KEYS
let keys = document.querySelectorAll(".white-key, .black-key");

// ADD CLICK EVENT TO EACH KEY
keys.forEach(key => {
    key.addEventListener("click", function () {

        let file = parseInt(key.dataset.file); 
        let index = file - 28;    

        audios[index].currentTime = 0;
        audios[index].play();
    });
});


// KEYBOARD SUPPORT
document.addEventListener("keydown", function(event) {
    let key = event.key.toLowerCase();

    let map = {
        "z": 28, "s": 29, "x": 30, "d": 31, "c": 32, "v": 33,
        "g": 34, "b": 35, "h": 36, "n": 37, "j": 38, "m": 39,

        ",": 40, "l": 41, ".": 42, ";": 43, "/": 44, "q": 45,
        "2": 46, "w": 47, "3": 48, "e": 49, "4": 50, "r": 51,

        "t": 52, "6": 53, "y": 54, "7": 55, "u": 56, "i": 57,
        "9": 58, "o": 59, "0": 60, "p": 61, "-": 62, "[": 63
    };

    if (!map[key]) return;

    let file = map[key];
    let index = file - 28;

    audios[index].currentTime = 0;
    audios[index].play();

    let element = document.querySelector(`[data-file="${file}"]`);
    element.classList.add("active-key");

    setTimeout(() => element.classList.remove("active-key"), 150);

});
