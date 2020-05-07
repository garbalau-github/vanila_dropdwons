"use strict";

// Check if DOM is ok
document.addEventListener('DOMContentLoaded', ready);

function ready() {
    var accordion = document.querySelectorAll('.description-title');

        // Add events to each button that you created
        for (var i = 0; i < accordion.length; i++) {
            accordion[i].addEventListener('click', function () {
            accordionClick(event);
        });
    }
}

// Main function for "every" button
var accordionClick = function accordionClick(event) {
    var targetClicked = event.target;
    var classClicked = targetClicked.classList;

    while (classClicked[0] !== 'description-title') {
        targetClicked = targetClicked.parentElement;
        classClicked = targetClicked.classList;
    }

    var description = targetClicked.nextElementSibling;

    if (description.style.maxHeight) {
        description.style.maxHeight = null;
    } else {
        var allDescriptions = document.querySelectorAll('.description');

        for (var i = 0; i < allDescriptions.length; i++) {
            if (allDescriptions[i].style.maxHeight) {
                allDescriptions[i].style.maxHeight = null;
            }
        }

        description.style.maxHeight = description.scrollHeight + "px";
    }
};