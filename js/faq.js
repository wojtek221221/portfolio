function toggleFaq(button) {
    const content = button.nextElementSibling;
    const icon = button.querySelector(".faq-icon");

    if (content.style.height === "0px" || !content.style.height) {
        content.style.height = `${content.scrollHeight}px`;
        icon.textContent = "-";

        content.addEventListener(
            "transitionend",
            function setAutoHeight() {
                content.style.height = "auto";
                content.removeEventListener("transitionend", setAutoHeight);
            }
        );
    } else {
        content.style.height = `${content.scrollHeight}px`;
        requestAnimationFrame(() => {
            content.style.height = "0px";
        });
        icon.textContent = "+";
    }
}