// script.js

function submitFeedback() {
    var name = document.getElementById('name').value;
    var feedbackText = document.getElementById('feedback').value;

    if (name && feedbackText) {
        var feedbackList = document.getElementById('feedback-list');

        var feedbackDiv = document.createElement('div');
        feedbackDiv.classList.add('feedback');

        var feedbackParagraph = document.createElement('p');
        feedbackParagraph.textContent = '"' + feedbackText + '" - ' + name;

        feedbackDiv.appendChild(feedbackParagraph);
        feedbackList.appendChild(feedbackDiv);

        // Clear the form after submitting
        document.getElementById('name').value = '';
        document.getElementById('feedback').value = '';
    } else {
        alert('Please enter both your name and feedback.');
    }
}
