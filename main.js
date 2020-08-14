var index;

window.onload = function(){
    index = 0;

    var descripton = "Project manager lets you create projects and add sprints to those projects. Every sprint can contain tasks that should be competed during that sprint";
    var learned = "This project taught me how to program using the MVC design pattern.";
    var skills = ["html", "javaScript", "c#", "asp.net", "css"];
    var features = ["Drag and drop tasks", "Roles, manager and developer", "Search and filter for finding projects"];

    var project = new Project("projects/projectManager/one.JPG", "Project manager", descripton, learned, skills, features);
    project.code.href = "https://github.com/nilspettersson/Project_manager";

    var images1 = ["projects/projectManager/one.JPG", 
    "projects/projectManager/two.JPG",
    "projects/projectManager/three.JPG"];
    var captions = ["This page is used to add tasks and removed tasks from the active sprint. tasks with a red color is a bug, green is a feature. blue is an investigation",
     "This page shows all projects you are working on. You can search for projects and change filter to only show projects you own",
    "new"];
    var modal = new Modal("first modal", images1, captions);
    project.addModal(modal);


    index++;
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

class Modal{
    constructor(text, images, captions){
        this.modal = document.createElement("div");
        this.modal.classList.add("modal");

        var modalContent = document.createElement("div");
        modalContent.classList.add("modal-content");

        this.close = document.createElement("span");
        this.close.classList.add("close");
        this.close.innerHTML = "&times;";

        //images
        var imageDiv = document.createElement("div");
        imageDiv.classList.add("image");

        var container = document.createElement("div");
        container.classList.add("slideshow-container");

        for(var i = 0; i < images.length; i++){
            var div = document.createElement("div");
            div.classList.add("mySlides");
            div.classList.add("fade");
            div.classList.add("slideIndex" + index);
            if(i == 0){
                div.style.display = "block";
            }

            var numberText = document.createElement("div");
            numberText.classList.add("numbertext");
            numberText.innerHTML = (i+1)+" / 3";
            
            var img = document.createElement("img");
            img.src = images[i];

            var captionText = document.createElement("div");
            captionText.classList.add("text");
            captionText.innerHTML = captions[i];

            div.appendChild(numberText);
            div.appendChild(img);
            div.appendChild(captionText);

            container.appendChild(div);
        }
        var prev = document.createElement("a");
        prev.id = "prev" + index;
        prev.classList.add("prev");
        prev.innerHTML = "&#10094";
        
        var next = document.createElement("a");
        next.id = "next" + index;
        next.classList.add("next");
        next.innerHTML = "&#10095";

        container.appendChild(prev);
        container.appendChild(next);

        imageDiv.appendChild(container);

        var dots = document.createElement("div");
        dots.style.textAlign = "center";
        for(var i = 0; i < images.length; i++){
            var dot = document.createElement("span");
            dot.classList.add("dot");
            dot.classList.add("dot" + index);
            dot.id = i+1;
            dots.appendChild(dot);
        }
        imageDiv.appendChild(dots);


        modalContent.appendChild(this.close);

        modalContent.appendChild(imageDiv);

        
        this.modal.appendChild(modalContent);

        document.body.appendChild(this.modal);
        
        var tempIndex = index;
        document.getElementsByClassName("prev")[tempIndex].addEventListener('click', function(){plusSlides(-1, "slideIndex" + tempIndex, tempIndex);}, false);
        document.getElementsByClassName("next")[tempIndex].addEventListener('click', function(){plusSlides(1, "slideIndex" + tempIndex, tempIndex);}, false);
        console.log(document.getElementsByClassName("dot" + index).length);
        for(var i = 0; i < document.getElementsByClassName("dot").length; i++){
            document.getElementsByClassName("dot")[i].addEventListener('click', function(){currentSlide(this.id, "slideIndex" + tempIndex, tempIndex);}, false);
        }

    }
}


class Project{
    constructor(imageSrc, title, descripton, learned, skills, features){
        this.project = document.createElement("div");
        this.project.classList.add("project");

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
        this.demo = document.createElement("a");
        this.demo.classList.add("button");
        this.demo.innerHTML = "View project";
        this.demo.target = "_blank";
        leftDiv.appendChild(this.demo);

         this.code = document.createElement("a");
         this.code.classList.add("button");
         this.code.innerHTML = "View code";
         this.code.href = "#";
        this.code.target = "_blank";
        leftDiv.appendChild(this.code);

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

        //text
        var overview = document.createElement("p");
        overview.innerHTML = descripton;
        desc.appendChild(overview);


        //learned
        var descLearned = document.createElement("h3");
        descLearned.innerHTML = "What I have learned";
        desc.appendChild(descLearned);

        var descLearnedText = document.createElement("p");
        descLearnedText.innerHTML = learned;
        desc.appendChild(descLearnedText);

        var featuresDiv = document.createElement("div");
        featuresDiv.classList.add("features");

        var featureTitle = document.createElement("h3");
        featureTitle.innerHTML = "Notable features";
        featuresDiv.appendChild(featureTitle);

        for(var i = 0; i < features.length;i++){
            var feature = document.createElement("li");
            feature.innerHTML = features[i];
            featuresDiv.appendChild(feature);
        }
        desc.appendChild(featuresDiv);

        //add to project
        this.project.appendChild(leftDiv);
        this.project.appendChild(desc);
        
        
        document.getElementById("second").appendChild(this.project);
    }

    addModal(modal){
        //click events for modal
        this.demo.onclick = function(){
            modal.modal.style.display = "block";
        }

        modal.close.onclick = function() {
            modal.modal.style.display = "none";
        }
    }
}


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n, slide, index) {
    showSlides(slideIndex += n, slide, index);
}

function currentSlide(n, slide, index) {
  showSlides(slideIndex = n, slide, index);
}

function showSlides(n, slide, index) {
    var i;
    var slides = document.getElementsByClassName(slide);
    var dots = document.getElementsByClassName("dot" + index);
    
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
       dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}