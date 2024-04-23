
// Fetch student details from session storage
var rollNumber = sessionStorage.getItem('rollNumber');
var name = sessionStorage.getItem('name');
var batch = sessionStorage.getItem('batch');
var section = sessionStorage.getItem('section');

// Display student details
var studentDetailsDiv = document.getElementById('studentDetails');
studentDetailsDiv.innerHTML = `
    <p><strong>Roll Number:</strong> ${rollNumber}</p>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Batch:</strong> ${batch}</p>
    <p><strong>Section:</strong> ${section}</p>
`;

// Fetch quiz result from session storage
var marks = sessionStorage.getItem('marks');

// Display quiz result
var quizResultDiv = document.getElementById('quizResult');
quizResultDiv.innerHTML = `<p><strong>Total Marks:</strong> ${marks}</p>`;
