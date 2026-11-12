const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", function() {
    navMenu.classList.toggle("active");
});

// انتخاب تمام لینک های منو
const navLinks = document.querySelectorAll("#navMenu a");

// بستن منو بعد از کلیک روی لینک
navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        navMenu.classList.remove("active");
    });
});

const slides = document.querySelectorAll(".slide");

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let currentSlide = 0;

function showSlide(index) {
    slides.forEach(function(slide) {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
}

nextBtn.addEventListener("click", function() {
    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);
});

prevBtn.addEventListener("click", function() {
    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);
});

const searchInput = document.getElementById("searchInput");

const products = document.querySelectorAll(".product");

searchInput.addEventListener("input", function() {

    const searchValue = searchInput.value.toLowerCase();

    products.forEach(function(product) {

        const productName = product.querySelector("h3").textContent.toLowerCase();

        if (productName.includes(searchValue)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }

    });

});


const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    const result = document.getElementById("formResult");

    if (name === "") {
        result.textContent = "لطفاً نام خود را وارد کنید.";
        result.style.color = "red";
        return;
    }

    if (!/^09\d{9}$/.test(phone)) {
        result.textContent = "شماره موبایل باید ۱۱ رقم و با 09 شروع شود.";
        result.style.color = "red";
        return;
    }

    if (message === "") {
        result.textContent = "لطفاً پیام خود را وارد کنید.";
        result.style.color = "red";
        return;
    }

    result.textContent = "اطلاعات با موفقیت بررسی شد!";
    result.style.color = "green";

    contactForm.reset();

});

const backToTop = document.getElementById("backToTop");

// نمایش دکمه هنگام اسکرول
window.addEventListener("scroll", function() {

    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }

});

// بازگشت به بالای صفحه
backToTop.addEventListener("click", function() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

const galleryImages = document.querySelectorAll(".gallery-img");

const imageModal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.getElementById("closeModal");

// باز کردن عکس
galleryImages.forEach(function(image) {

    image.addEventListener("click", function() {

        imageModal.style.display = "flex";

        modalImage.src = image.src;

    });

});

// بستن عکس
closeModal.addEventListener("click", function() {

    imageModal.style.display = "none";

});

// بستن با کلیک روی فضای تاریک
imageModal.addEventListener("click", function(event) {

    if (event.target === imageModal) {
        imageModal.style.display = "none";
    }

});

function shareProduct() {
    if (navigator.share) {
        navigator.share({
            title: document.title,
            url: window.location.href
        });
    } else {
        navigator.clipboard.writeText(window.location.href);
        alert("لینک محصول کپی شد!");
    }
}


document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".hero-slider .slide");

    if (slides.length < 2) return;

    let current = 0;

    setInterval(() => {
        slides[current].classList.remove("active");

        current = (current + 1) % slides.length;

        slides[current].classList.add("active");
    }, 3000);
});
