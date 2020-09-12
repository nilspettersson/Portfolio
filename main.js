
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
    }
    
    
}



function openModal(project){
    let data = project.parentNode.parentNode.childNodes[5].childNodes;
    console.log(data);
    let modal = document.getElementById("modal");
    modal.classList.remove("hide");

    let img = document.getElementById("img");
    img.src = data[1].src;

    let overview = document.getElementById("overview");
    overview.innerHTML = data[3].innerHTML;
    let learned = document.getElementById("learned");
    learned.innerHTML = data[5].innerHTML;

    let right = document.getElementById("right");
    right.appendChild(data[7]);
}

function closeModal(){
    let modal = document.getElementById("modal");
    modal.classList.add("hide");
}
