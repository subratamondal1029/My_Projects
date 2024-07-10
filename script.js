import Aos from "aos";
import 'aos/dist/aos.css';
Aos.init({
   offset: 20,
   duration: 300,
})

fetch('projectData.json')
.then(res => res.json())
.then(printProjects)



const freeLanceContainer = document.getElementById('freelancing')
const ownProjectContainer = document.getElementById('ownProject')

function printProjects(data){
const freelancingProjects = data.freelanceProject.reverse()
const ownProjects = data.ownProject.reverse()

freelancingProjects.forEach((project) =>{
   freeLanceContainer.innerHTML += `<div class="projectCard" data-aos="zoom-in">
                <img src="images/freelanceImage/${project.imageUrl}" alt="${project.projectName}">
                <div class="projectDetails">
                    <h3 class="projectName">${project.projectName}</h3>
                    <p class="projectDescrip">${project.projectDescription}</p>                
                </div>
                <div class="projectLinks">
                    <a class="link" href="${project.previewLink}"><i class="fa-solid fa-link"></i>Preview</a>
                </div>
            </div>`

  
})

ownProjects.forEach((project) =>{
   ownProjectContainer.innerHTML += `<div class="projectCard" data-aos="zoom-in">
                <img src="site/${project.folderName}/images/site.webp" alt="${project.projectName}">
                <div class="projectDetails">
                    <h3 class="projectName">${project.projectName}</h3>
                    <p class="projectDescrip">${project.projectDescription}</p>                
                </div>
                <div class="projectLinks">
                    <a class="link" href="site${project.previewLink}"><i class="fa-solid fa-link"></i>Preview</a>
                    <a class="link" href="${project.codeLink}"><i class="fa-solid fa-link"></i>Code</a>
                </div>
            </div>`
})
}




