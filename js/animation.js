function shrinkSiblings(activeElement) {
    const siblings = [...activeElement.parentElement.children].filter(
        (el) => el !== activeElement
    );
    siblings.forEach((sibling) => {
        sibling.style.transform = "scale(0.9)";
        sibling.style.transition = "transform 0.5s";
    });
}

function resetSiblings(activeElement) {
    const siblings = [...activeElement.parentElement.children].filter(
        (el) => el !== activeElement
    );
    siblings.forEach((sibling) => {
        sibling.style.transform = "scale(1)";
    });
}