document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    // Get form data
    var rollNumber = document.getElementById('rollNumber').value;
    var name = document.getElementById('name').value;
    var batch = document.getElementById('batch').value;
    var section = document.getElementById('section').value;

    // Store data in session storage
    sessionStorage.setItem('rollNumber', rollNumber);
    sessionStorage.setItem('name', name);
    sessionStorage.setItem('batch', batch);
    sessionStorage.setItem('section', section);

    // Redirect to quiz page
    window.location.href = 'quiz-page.html';
});
