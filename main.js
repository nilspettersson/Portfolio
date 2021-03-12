let index = 1;
let aboutStart = false;
let text = "About me";
function about(){
    if(aboutStart){
        if(index == text.length){
            document.getElementById("about-header").innerHTML = text.substring(0, index);
        }
        else {
            document.getElementById("about-header").innerHTML = text.substring(0, index) + '|';
        }
        index++;
        if(index == text.length + 1){
            clearInterval(aboutInterval);
        }
    }
    
}
let aboutInterval = window.setInterval(about, 240);


window.smoothScroll = function(target) {
    let scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    let targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    scroll = function(c, a, b, i) {
        i++; if (i > 26) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 14);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
        findClosest(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});

let last_known_scroll_position = 0;
let ticking = false;

function findClosest(scroll_pos) {
    let target = document.getElementById("home");
    let scrollContainer = target;
    scrollContainer = scrollContainer.parentNode;
    let homeY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        homeY += target.offsetTop;
    } while (target = target.offsetParent);

    target = document.getElementById("projects");
    scrollContainer = scrollContainer.parentNode;
    let portfolioY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        portfolioY += target.offsetTop;
    } while (target = target.offsetParent);

    target = document.getElementById("about");
    scrollContainer = scrollContainer.parentNode;
    let aboutY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        aboutY += target.offsetTop;
    } while (target = target.offsetParent);

    let home = Math.abs(homeY - scroll_pos);
    let portfolio = Math.abs(portfolioY - scroll_pos);
    let about = Math.abs(aboutY - scroll_pos);
    if(home < portfolio && home < about){
        let portfolio = document.getElementById("homeLink");
        portfolio.classList.add("active");

        element = document.getElementById("portfolioLink");
        element.classList.remove("active");
        element = document.getElementById("aboutLink");
        element.classList.remove("active");
    }
    else if(portfolio < home && portfolio < about){
        let element = document.getElementById("portfolioLink");
        element.classList.add("active");

        element = document.getElementById("homeLink");
        element.classList.remove("active");
        element = document.getElementById("aboutLink");
        element.classList.remove("active");
    }
    else if(about < home && about < portfolio){
        let element = document.getElementById("aboutLink");
        element.classList.add("active");

        element = document.getElementById("portfolioLink");
        element.classList.remove("active");
        element = document.getElementById("homeLink");
        element.classList.remove("active");

        aboutStart = true;        
    }
    
    
}

function fixArray(array){
    let newArray = [];
    for(let i = 0; i < array.length; i++){
        if(array[i].nodeType == Node.ELEMENT_NODE){
            newArray.push(array[i]);
        }
    }
    return newArray
}

function openModal(project){
    project = project.parentNode.parentNode;
    let data = fixArray(project.childNodes[5].childNodes);
    console.log(data);
    let modal = document.getElementById("modal");
    modal.classList.remove("hide");

    let img = document.getElementById("img");
    img.src = data[0].src;

    let overview = document.getElementById("overview");
    overview.innerHTML = data[1].innerHTML;
    let learned = document.getElementById("learned");
    learned.innerHTML = data[2].innerHTML;

    let tech = document.getElementById("tech");
    if(tech.childNodes[0] != null){
        tech.removeChild(tech.childNodes[0]);
    }
    tech.appendChild(project.querySelector(".skills").cloneNode(true));
    let title = project.querySelector("h2").innerHTML;
    document.getElementById("title").innerHTML = title;

    document.getElementById("code").href = fixArray(data[4].childNodes)[0].innerHTML;
    if(data[4].childNodes[3].innerHTML == "#"){
        console.log("hide");
        document.getElementById("demo").classList.add("hide");
    }
    else{
        document.getElementById("demo").classList.remove("hide");
    }
    document.getElementById("demo").href = fixArray(data[4].childNodes)[1].innerHTML;
}

function closeModal(){
    let modal = document.getElementById("modal");
    modal.classList.add("hide");
}


window.onclick = function(event) {
    let modal = document.getElementById("modal");
    if (event.target == modal) {
        closeModal();
    }
}
