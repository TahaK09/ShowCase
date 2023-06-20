let character = document.querySelector(".character");
let forgotPass = document.querySelector(".Forgot-Password-container");


function emailfocus() {
    character.innerHTML = `<video width="100" height="100" autoplay muted loop>
    <source src="mp4/profile.mp4" type="video/mp4">
</video>`;
}

function focusout() {
    character.innerHTML = `<video width="100" height="100" autoplay muted loop>
    <source src="mp4/login-.mp4" type="video/mp4">
</video>`;
}

function passfocus(){
    character.innerHTML = `<video width="100" height="100" autoplay muted loop>
    <source src="mp4/password.mp4" type="video/mp4">
</video>`
}

