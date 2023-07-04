let bodyStyle = document.body.style;
let search = document.getElementById("search");
// Function for making the URL
searchthis = () => {
    let value = search.value;
    let val = value.split(" ");
    let b = val.join("+");
    let a = `https://google.com/search?q=${b}`;
    if (b === "") {
        console.log("search something");
    }
    else {
        location.href = a;
    }
}


// If someone press Enter then it helps Searching the URL
search.addEventListener("keypress", function (event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        event.preventDefault();
        searchthis();
    }
});

// Showing and Hiding QR code 
showQR = () => {
    document.getElementById("qr").classList.toggle("disp-flex");
}

// Showing the relative Apps in Menu Icon
more = () => {
    let more = document.getElementById("more");
    more.classList.toggle("disp-flex");
    // If we have added display: none; with an ID and we try to toggle any class to manipulate it, it won't change bcuz property declared by ID are superior 
};



// Script to auto change the background
let bg = [`bg.webp`, `bg1.webp`, `bg2.jpg`, `bg3.webp`, `bg4.jpg`, `bg6.webp`, `bg7.png`, `bg9.jpeg`, `bg9.jpeg`, `bg10.jpg`, `bg11.jpg`, `bg12.webp`, `bg13.jpg`, `bg14.jpg`];
let bgN = Math.floor(Math.random() * bg.length);
bodyStyle.background = `url("background/${bg[bgN]}") no-repeat`;
bodyStyle.backgroundSize = `cover`;