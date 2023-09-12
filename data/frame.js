// filter tabel
function fungsicariTabel() {
    var input,
    filter,
    table,
    tr,
    td,
    i,
    txtValue;
    input = document.getElementById("ketikkan");
    filter = input.value.toUpperCase();
    table = document.getElementById("caritabel");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
};


// filter search grid
function filter() {
    let input = document.querySelector('.searchbar').value
    input = input.toLowerCase();
    let framecssgrid = document.querySelectorAll('.filter');
    framecssgrid.forEach((el) => {
        let title = el.querySelector('.filter-content').textContent.toLowerCase();
        el.style.display = title.includes(input) ? "": "none";
    });
}



// navigasi
function navFunction() {
    var x = document.getElementById("nav");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
};

function nav2Function() {
    var x = document.getElementById("nav2");
    if (x.className === "nav2") {
        x.className += " responsive2";
    } else {
        x.className = "nav2";
    }
};

function kuningFunction() {
    var x = document.getElementById("nav-kuning");
    if (x.className === "nav-kuning") {
        x.className += " responsivekuning";
    } else {
        x.className = "nav-kuning";
    }
};

function pingFunction() {
    var x = document.getElementById("nav-ping");
    if (x.className === "nav-ping") {
        x.className += " responsiveping";
    } else {
        x.className = "nav-ping";
    }
};

function hijauFunction() {
    var x = document.getElementById("nav-hijau");
    if (x.className === "nav-hijau") {
        x.className += " responsivehijau";
    } else {
        x.className = "nav-hijau";
    }
};

function biruFunction() {
    var x = document.getElementById("nav-biru");
    if (x.className === "nav-biru") {
        x.className += " responsivebiru";
    } else {
        x.className = "nav-biru";
    }
};

function magFunction() {
    var x = document.getElementById("magentanav");
    if (x.className === "nav-magenta") {
        x.className += " responsivemagenta";
    } else {
        x.className = "nav-magenta";
    }
};


// accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("accordion_active");
        var accordionpanel = this.nextElementSibling;
        if (accordionpanel.style.maxHeight) {
            accordionpanel.style.maxHeight = null;
        } else {
            accordionpanel.style.maxHeight = accordionpanel.scrollHeight + "px";
        }
    });
}

// tombol klik to top
let mybutton = document.getElementById("btnTop");
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function btnTopFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};



// slideshow foto
var slideshows = document.querySelectorAll('[data-component="slideshow"]');
slideshows.forEach(initSlideShow);

function initSlideShow(slideshow) {
    var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`);
    var index = 0,
    time = 1000;
    slides[index].classList.add('active');
    setInterval(() => {
        slides[index].classList.remove('active');
        index++;
        if (index === slides.length) index = 0;
        slides[index].classList.add('active');
    },
        time);
}


// modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("modal-btn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
var modalbiru = document.getElementById("myModal-biru");
var btn = document.getElementById("modalbiru-btn");
var span = document.getElementsByClassName("closebiru")[0];
btn.onclick = function() {
    modalbiru.style.display = "block";
}
span.onclick = function() {
    modalbiru.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modalbiru) {
        modalbiru.style.display = "none";
    }
}
var modalmag = document.getElementById("myModal-mag");
var btn = document.getElementById("modalmag-btn");
var span = document.getElementsByClassName("closemag")[0];
btn.onclick = function() {
    modalmag.style.display = "block";
}
span.onclick = function() {
    modalmag.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modalmag) {
        modalmag.style.display = "none";
    }
}
var modaloren = document.getElementById("myModal-oren");
var btn = document.getElementById("modaloren-btn");
var span = document.getElementsByClassName("closeoren")[0];
btn.onclick = function() {
    modaloren.style.display = "block";
}
span.onclick = function() {
    modaloren.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modaloren) {
        modaloren.style.display = "none";
    }
}
var modalmerah = document.getElementById("myModal-merah");
var btn = document.getElementById("modalmerah-btn");
var span = document.getElementsByClassName("closemerah")[0];
btn.onclick = function() {
    modalmerah.style.display = "block";
}
span.onclick = function() {
    modalmerah.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modalmerah) {
        modalmerah.style.display = "none";
    }
}
// akhir modal




// modifikasi JavaScript disini
console.log('koneksi ke JS berhasil');
// mulai modifikasi....