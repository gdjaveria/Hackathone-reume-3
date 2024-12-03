"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("resumeForm");
    const resumeOutput = document.getElementById("resumeOutput");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        // Collect form data
        const data = {
            personalInfo: {
                name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                phone: document.getElementById("phone").value,
                address: document.getElementById("address").value,
            },
            education: document.getElementById("education").value,
            experience: document.getElementById("experience").value,
            skills: document.getElementById("skills").value,
            description: document.getElementById("description").value,
        };
        // Generate and display the resume.......
        generateResume(data, resumeOutput);
    });
});
function generateResume(data, outputElement) {
    outputElement.innerHTML = `
     <h2>Generated Resume</h2>
     <h3>Personal Information</h3>
     <p><strong>Name:</strong> ${data.personalInfo.name}</p>
     <p><strong>Email:</strong> ${data.personalInfo.email}</p>
     <p><strong>Phone:</strong> ${data.personalInfo.phone}</p>
     <p><strong>Address:</strong> ${data.personalInfo.address}</p>
        
     <h3>Education</h3>
    <p>${data.education}</p>

    <h3>Work Experience</h3>
     <p>${data.experience}</p>

    <h3>Skills</h3>
     <p>${data.skills}</p>

    <h3>Description</h3>
    <p>${data.description}</p>`;
}
