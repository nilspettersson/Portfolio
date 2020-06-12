window.onload = function(){
    var descripton = "This project makes it easy to do some stuff blablabla sad as das d as das d asd as da sd a  asdasdasd as d asd as dasd asd  as das dasd as sda das";
    var learned = "from creating this project I learned how to do stuff and that will help me with stuff!";
    var skills = ["JavaScript", "C#", "C#", "asp.net"];
    createProject("projects/test.jpeg", "Project manager", descripton, learned, skills);
    createProject("projects/test.jpeg", "Project manager", descripton, learned, skills);
}



function createProject(imageSrc, title, descripton, learned, skills){
    var project = document.createElement("div");
    project.classList.add("project");

    //div for image
    var imgDiv = document.createElement("div");
    imgDiv.classList.add("project-image");
    
    var img = document.createElement("img");
    img.src = imageSrc;
    imgDiv.appendChild(img);

    //description
    var desc = document.createElement("div");
    desc.classList.add("project-desc");
    var descTitle = document.createElement("h1");
    descTitle.innerHTML = title;
    desc.appendChild(descTitle);

    var descDesc = document.createElement("p");
    descDesc.innerHTML = descripton;
    desc.appendChild(descDesc);

    //learned
    var descLearned = document.createElement("h3");
    descLearned.innerHTML = "What I learned";
    desc.appendChild(descLearned);

    var descLearnedText = document.createElement("p");
    descLearnedText.innerHTML = learned;
    desc.appendChild(descLearnedText);

    //skills
    var skillsDiv = document.createElement("div");
    skillsDiv.classList.add("skills");
    for(var i = 0; i < skills.length;i++){
        var skill = document.createElement("a");
        skill.innerHTML = skills[i];
        skillsDiv.appendChild(skill);
    }
    desc.appendChild(skillsDiv);

    //buttons
    var demo = document.createElement("a");
    demo.classList.add("button");
    demo.innerHTML = "View project";
    demo.href = "#";
    desc.appendChild(demo);

    var code = document.createElement("a");
    code.classList.add("button");
    code.innerHTML = "View code";
    code.href = "#";
    desc.appendChild(code);

    //add to project
    project.appendChild(imgDiv);
    project.appendChild(desc);
    
    
    document.getElementById("second").appendChild(project);
}

window.smoothScroll = function(target) {
    var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 14);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}