interface ResumeData {
  personalInfo:{
    name:string,
    email:string,
    phone:string,
    address:string,
  }
  education:string,
  experience:string,
  skills:string,
  description:string,

}

document.addEventListener("DOMContentloded",() => {
  const form =document.getElementById("resumeForm")as HTMLFormElement;
  const resumeOutput =document.getElementById("resumeOutput")as HTMLDivElement;

  form.addEventListener("submitt",(event)=>{
    event.preventDefault()
    // Data Collection..........

const data: ResumeData = {
  personalInfo:{
    name:(document.getElementById('name')as HTMLInputElement).value,
    email:(document.getElementById('email')as HTMLInputElement).value,
    phone:(document.getElementById('phone')as HTMLInputElement).value,
    address:(document.getElementById('address')as HTMLInputElement).value,

  },
  education:(document.getElementById('education')as HTMLInputElement).value,
  experience:(document.getElementById('experience')as HTMLInputElement).value,
  skills:(document.getElementById('skills')as HTMLInputElement).value,
  description:(document.getElementById('description')as HTMLInputElement).value,
 
};

generateResume(data,resumeOutput)

});
});

function generateResume(data: ResumeData, outputElement: HTMLDivElement):void{
  outputElement.innerHTML =
  ` <h2>Generated Resume</h2> 
    <h3>Personal Information</h3>
    <p><strong>Name:</strong> ${data.personalInfo.name}</p>
     <p><strong>Email:</strong> ${data.personalInfo.name}</p>
      <p><strong>Phone:</strong> ${data.personalInfo.name}</p>
       <p><strong>Address:</strong> ${data.personalInfo.name}</p>
    
    <h3>Education</h3>
    <p>${data.education}</p>
    <h3>Work Exprience</h3>
    <p>${data.experience}</p>
    <h3>Skills</h3>
    <p>${data.skills}</p>
    <h3>Experience</h3>
    <p>${data.description}</p> `
}
