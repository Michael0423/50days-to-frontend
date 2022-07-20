import { data } from './project-data.js';

const listDiv = document.getElementById('project_list');

let ul = document.createElement("ul");
listDiv.appendChild(ul);

if(data.length > 0){
    data.forEach((project, index) => {
        let projectLi = document.createElement("li");

        let a = document.createElement('a');
        a.href = project.url;
        a.innerHTML = project.name;
        projectLi.appendChild(a);
    
        ul.appendChild(projectLi);
    });
}