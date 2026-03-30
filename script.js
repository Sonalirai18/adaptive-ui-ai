let clicks = JSON.parse(localStorage.getItem("clicks")) || {};

function trackClick(feature) {
    clicks[feature] = (clicks[feature] || 0) + 1;
    localStorage.setItem("clicks", JSON.stringify(clicks));
    adaptUI();
}

function adaptUI() {
    let sorted = Object.keys(clicks).sort((a, b) => clicks[b] - clicks[a]);

    sorted.forEach((feature, index) => {
        let el = document.getElementById(feature);
        if (el) {
            el.style.order = index;
            el.style.background = index === 0 ? "#4CAF50" : "#ddd";
        }
    });
}

window.onload = adaptUI;