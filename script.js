//index

let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');

    function showSlide(index) {
        const totalSlides = slides.length;
        currentIndex = (index + totalSlides) % totalSlides; 
        const offset = -currentIndex * 100; 
        document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    setInterval(nextSlide, 2000);

    //services

    const container = document.querySelector('.product-container');
    const prevBtn = document.querySelector('.pre-btn');
    const nextBtn = document.querySelector('.nxt-btn');
    let scrollAmount = 0;

    prevBtn.addEventListener('click', () => {
        scrollAmount -= 250; // Adjust based on your card width
        container.style.transform = `translateX(${scrollAmount}px)`;
    });

    nextBtn.addEventListener('click', () => {
        scrollAmount += 250; // Adjust based on your card width
        container.style.transform = `translateX(${scrollAmount}px)`;
    });

  