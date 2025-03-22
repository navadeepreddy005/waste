document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("pickup-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        // Create pop-up element
        const popup = document.createElement("div");
        popup.classList.add("popup");
        popup.innerText = "✅ Pickup Booking Successful!";

        document.body.appendChild(popup);

        // Show popup with animation
        setTimeout(() => {
            popup.classList.add("show");
        }, 100);

        // Remove after 2.5 seconds
        setTimeout(() => {
            popup.classList.add("hide");
            setTimeout(() => {
                popup.remove();
            }, 500);
        }, 2500);
    });
});
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Create pop-up element
    const popup = document.createElement("div");
    popup.classList.add("popup");
    popup.innerText = "✅ Pickup Booking Successful!";

    document.body.appendChild(popup);

    // Show popup with animation
    setTimeout(() => {
        popup.classList.add("show");
    }, 100);

    // Remove after 2.5 seconds
    setTimeout(() => {
        popup.classList.add("hide");
        setTimeout(() => {
            popup.remove();
        }, 500);
    }, 2500);
});

