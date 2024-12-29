$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });
    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });
    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Coder", "Developer", "Data-Engineer", "Cloud Enthusiast", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["Coder", "Developer", "Data-Engineer", "Cloud Enthusiast", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
    const skills = {
        softwareDev: [
            { name: "Python", proficiency: "90%" },
            { name: "SQL", proficiency: "85%" },
            { name: "ReactJS", proficiency: "80%" },
            { name: "Django", proficiency: "75%" }
        ],
        dataRoles: [
            { name: "Machine Learning", proficiency: "90%" },
            { name: "Python", proficiency: "85%" },
            { name: "Pandas", proficiency: "80%" },
            { name: "Tableau", proficiency: "75%" }
        ]
    };
    // skill bar script
    skill = document.getElementsByClassName("button-container")
    skill.onClick(function(){
        const skillsList = document.getElementById("skillsList");
        skillsList.innerHTML = ""; // Clear previous skills

        skills[role].forEach(skill => {
            const barDiv = document.createElement("div");
            barDiv.classList.add("bars");

            const infoDiv = document.createElement("div");
            infoDiv.classList.add("info");

            const skillName = document.createElement("span");
            skillName.textContent = skill.name;

            const skillProficiency = document.createElement("span");
            skillProficiency.textContent = skill.proficiency;

            infoDiv.appendChild(skillName);
            infoDiv.appendChild(skillProficiency);

            const lineDiv = document.createElement("div");
            lineDiv.classList.add("line");
            lineDiv.style.width = skill.proficiency;

            barDiv.appendChild(infoDiv);
            barDiv.appendChild(lineDiv);

            skillsList.appendChild(barDiv);
        });
    })
});