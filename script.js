const body = document.body;
const button = document.querySelector("button");

function  toggleMode() {
    body.classList.toggle("dark-mode");

    if(body.classList.contains("dark-mode")) {
        button.textContent = "Switch to Light Mode";
    }
    else {
        button.textContent = "Switch to Dark Mode";
    }
}

// Listener to automatically switch mode based on the user;s device settongs
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    body.classList.add("dark-mode");
}