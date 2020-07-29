window.onload = function(){
    var descripton = "Project manager lets you create projects and add sprints to those projects. Every sprint can contain tasks that should be competed during that sprint";
    var learned = "This was my first time creating a C# web application so this project taught me how to program using the MVC design pattern";
    var skills = ["html", "javaScript", "c#", "asp.net", "css"];
    var features = ["Drag and drop tasks", "Roles, manager and developer", "Search and filter for finding projects"];

    var project = new Project("projects/project_manager.JPG", "Project manager", descripton, learned, skills, features);
    project.code.href = "https://github.com/nilspettersson/Project_manager";

    var modal = new Modal("first modal", "projects/project_manager.JPG");
    project.addModal(modal);



    //var modal2 = new Modal("second modal");
    //var project2 = new Project("projects/test.jpeg", "Project manager", descripton, learned, skills, features);
    //project2.demo.href = "https://stackoverflow.com/questions/9643311/pass-string-parameter-in-an-onclick-function";

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
    constructor(text, images){
        this.modal = document.createElement("div");
        this.modal.classList.add("modal");

        var modalContent = document.createElement("div");
        modalContent.classList.add("modal-content");

        this.close = document.createElement("span");
        this.close.classList.add("close");
        this.close.innerHTML = "&times;";

        //image
        var imageDiv = document.createElement("div");
        imageDiv.classList.add("image");

        /*var img = document.createElement("img");
        img.src = images;
        imageDiv.appendChild(img);*/


        var container = document.createElement("div");
        container.classList.add("slideshow-container");

        for(var i = 0; i < 3; i++){
            var div = document.createElement("div");
            div.classList.add("mySlides");
            div.classList.add("fade");

            var numberText = document.createElement("div");
            numberText.classList.add("numbertext");
            numberText.innerHTML = (i+1)+" / 3";
            
            var img = document.createElement("img");
            img.src = "projects/project_manager.JPG";

            var captionText = document.createElement("div");
            captionText.classList.add("text");
            captionText.innerHTML = "Caption Text" + i;

            div.appendChild(numberText);
            div.appendChild(img);
            div.appendChild(captionText);

            container.appendChild(div);
        }
        var prev = document.createElement("a");
        prev.id = "prev";
        prev.classList.add("prev");
        //prev.onclick = plusSlides(-1);
        prev.innerHTML = "&#10094";
        
        var next = document.createElement("a");
        next.id = "next";
        next.classList.add("next");
        //next.onclick = plusSlides(1);
        next.innerHTML = "&#10095";

        container.appendChild(prev);
        container.appendChild(next);

        imageDiv.appendChild(container);

        

/*
        <div class="slideshow-container">
        
            <div class="mySlides fade">
              <div class="numbertext">1 / 3</div>
              <img src="projects/project_manager.JPG" style="width:100%">
              <div class="text">Caption Text</div>
            </div>
          
            <div class="mySlides fade">
              <div class="numbertext">2 / 3</div>
              <img src="projects/project_manager.JPG" style="width:100%">
              <div class="text">Caption Two</div>
            </div>
          
            <div class="mySlides fade">
              <div class="numbertext">3 / 3</div>
              <img src="projects/project_manager.JPG" style="width:100%">
              <div class="text">Caption Three</div>
            </div>
          
            <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
            <a class="next" onclick="plusSlides(1)">&#10095;</a>
        </div>
          <br>
          
          <div style="text-align:center">
            <span class="dot" onclick="currentSlide(1)"></span>
            <span class="dot" onclick="currentSlide(2)"></span>
            <span class="dot" onclick="currentSlide(3)"></span>
          </div>
*/     


        
       /*var p = document.createElement("p");
        p.innerHTML = text;*/

        modalContent.appendChild(this.close);
        //modalContent.appendChild(p);

        modalContent.appendChild(imageDiv);

        
        this.modal.appendChild(modalContent);

        document.body.appendChild(this.modal);
        
        console.log("click");
        document.getElementsByClassName("prev")[0].addEventListener('click', function(){plusSlides(-1);}, false);
        document.getElementsByClassName("next")[0].addEventListener('click', function(){plusSlides(1);}, false);

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

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
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
    console.log(slideIndex);
    slides[slideIndex-1].style.display = "block";
    //dots[slideIndex-1].className += " active";
}