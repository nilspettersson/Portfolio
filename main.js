window.onload = function(){
    var descripton = "This project makes it easy to do some stuff blablabla sad as das d as das d asd as da sd a  asdasdasd as d asd as dasd asd  as das dasd as sda das";
    var learned = "from creating this project I learned how to do stuff and that will help me with stuff!";
    var skills = ["JavaScript", "C#", "C#", "asp.net"];
    var features = ["good something", "more of tha something", "good more something yes good", "cool new features and stuff", "new thing yes good!"];
    createProject("projects/test.jpeg", "Project manager", descripton, learned, skills, features);
    createProject("projects/test.jpeg", "Project manager", descripton, learned, skills, features);
}



function createProject(imageSrc, title, descripton, learned, skills, features){
    var project = document.createElement("div");
    project.classList.add("project");

    //div left
    var leftDiv = document.createElement("div");
    leftDiv.classList.add("project-left");
    
    //title
    var descTitle = document.createElement("h1");
    descTitle.innerHTML = title;
    leftDiv.appendChild(descTitle);


    //image
    var imageDiv = document.createElement("div");
    imageDiv.classList.add("image");

    var img = document.createElement("img");
    img.src = imageSrc;
    imageDiv.appendChild(img);

    leftDiv.appendChild(imageDiv);


    //buttons
    var demo = document.createElement("a");
    demo.classList.add("button");
    demo.innerHTML = "View project";
    demo.href = "#";
    leftDiv.appendChild(demo);

    var code = document.createElement("a");
    code.classList.add("button");
    code.innerHTML = "View code";
    code.href = "#";
    leftDiv.appendChild(code);

    //skills
    var skillsTitle = document.createElement("h3");
    skillsTitle.innerHTML = "Technologies Used";

    var skillsDiv = document.createElement("div");
    skillsDiv.classList.add("skills");
    for(var i = 0; i < skills.length;i++){
        var skill = document.createElement("a");
        skill.innerHTML = skills[i];
        skillsDiv.appendChild(skill);
    }
    leftDiv.appendChild(skillsTitle);
    leftDiv.appendChild(skillsDiv);


    //description
    var desc = document.createElement("div");
    desc.classList.add("project-desc");

    var overviewTitle = document.createElement("h3");
    overviewTitle.innerHTML = "Overview";
    desc.appendChild(overviewTitle);

    var overview = document.createElement("p");
    overview.innerHTML = descripton;
    desc.appendChild(overview);

    //text
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

    var featuresDiv = document.createElement("div");
    featuresDiv.classList.add("features");

    var featureTitle = document.createElement("h3");
    featureTitle.innerHTML = "Notable Features";
    featuresDiv.appendChild(featureTitle);

    for(var i = 0; i < features.length;i++){
        var feature = document.createElement("li");
        feature.innerHTML = features[i];
        featuresDiv.appendChild(feature);
    }
    desc.appendChild(featuresDiv);

    //add to project
    project.appendChild(leftDiv);
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