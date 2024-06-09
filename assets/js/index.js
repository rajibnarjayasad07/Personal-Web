const texts = ["Web Developer", "UI Designer", "Software Engineer", "FrontEnd developer"];
        let index = 0;
        let charIndex = 0;
        let currentText = "";
        let isDeleting = false;
        const speed = 100; // Typing speed

        const type = () => {
            const element = document.getElementById("changing-text");
            if (!isDeleting && charIndex < texts[index].length) {
                currentText += texts[index].charAt(charIndex);
                charIndex++;
                element.textContent = currentText;
                setTimeout(type, speed);
            } else if (isDeleting && charIndex > 0) {
                currentText = currentText.slice(0, -1);
                charIndex--;
                element.textContent = currentText;
                setTimeout(type, speed);
            } else if (!isDeleting && charIndex === texts[index].length) {
                isDeleting = true;
                setTimeout(type, speed * 3); // Pause before deleting
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                index = (index + 1) % texts.length;
                setTimeout(type, speed);
            }
        };

        document.addEventListener("DOMContentLoaded", () => {
            setTimeout(type, speed);
        });



        document.addEventListener("DOMContentLoaded", () => {
            // Ambil elemen tombol hamburger
            const navbarToggle = document.getElementById("navbar-toggle");
          
            // Ambil elemen menu yang akan ditampilkan atau disembunyikan
            const navbarSticky = document.getElementById("navbar-sticky");
          
            // Tambahkan event listener untuk mengatur kelas active saat tombol hamburger diklik
            navbarToggle.addEventListener("click", () => {
              // Toggle kelas active pada elemen menu
              navbarSticky.classList.toggle("active");
            });
          });


          document.addEventListener("DOMContentLoaded", function() {
            // Menambahkan event listener ke tombol "Career"
            document.getElementById('career-proggress-tab').addEventListener('click', function() {
                // Menyembunyikan konten lainnya
                document.getElementById('profile').classList.add('hidden');
                
                // Menampilkan konten "Career"
                document.getElementById('career-proggress').classList.remove('hidden');
            });
        });

        document.addEventListener("DOMContentLoaded", function() {
            // Menambahkan event listener ke tombol "Profile"
            document.getElementById('profile-tab').addEventListener('click', function() {
                // Menyembunyikan konten lainnya
                document.getElementById('career-proggress').classList.add('hidden');
                
                // Menampilkan konten "Profile"
                document.getElementById('profile').classList.remove('hidden');
            });
        });

        

    // Fungsi untuk mengubah warna tombol "Profile" menjadi biru dan tombol "Career" menjadi abu-abu
    function changeButtonColor(buttonId) {
        // Mendapatkan semua tombol dalam list
        var buttons = document.querySelectorAll('#defaultTab button');
        // Meloopi semua tombol
        buttons.forEach(function(button) {
            // Jika tombol adalah tombol "Profile"
            if (buttonId === 'profile-tab') {
                // Jika tombol saat ini adalah tombol "Profile", maka beri warna biru
                if (button.id === 'profile-tab') {
                    button.classList.add('text-red-600');
                    button.classList.remove('hover:text-gray-600');
                } else {
                    // Jika bukan, maka beri warna abu-abu
                    button.classList.remove('text-red-600');
                    button.classList.add('hover:text-gray-600');
                }
            } else if (buttonId === 'career-proggress-tab') {
                // Jika tombol adalah tombol "Career"
                // Jika tombol saat ini adalah tombol "Career", maka beri warna biru
                if (button.id === 'career-proggress-tab') {
                    button.classList.add('text-red-600');
                    button.classList.remove('hover:text-gray-600');
                } else {
                    // Jika bukan, maka beri warna abu-abu
                    button.classList.remove('text-red-600');
                    button.classList.add('hover:text-gray-600');
                }
            }

            if (buttonId === 'profile-tab') {
                // Jika tombol saat ini adalah tombol "Profile", maka beri warna biru
                if (button.id === 'profile-tab') {
                    button.classList.add('text-red-600');
                    button.classList.remove('hover:text-gray-600');
                } else {
                    // Jika bukan, maka beri warna abu-abu
                    button.classList.remove('text-red-600');
                    button.classList.add('hover:text-gray-600');
                }
            } else if (buttonId === 'career-proggress-tab') {
                // Jika tombol adalah tombol "Career"
                // Jika tombol saat ini adalah tombol "Career", maka beri warna biru
                if (button.id === 'career-proggress-tab') {
                    button.classList.add('text-red-600');
                    button.classList.remove('hover:text-gray-600');
                } else {
                    // Jika bukan, maka beri warna abu-abu
                    button.classList.remove('text-red-600');
                    button.classList.add('hover:text-gray-600');
                }
            }
        });
    }

    // Menambahkan event listener untuk setiap tombol
    document.getElementById('profile-tab').addEventListener('click', function() {
        changeButtonColor('profile-tab');
    });

    document.getElementById('career-proggress-tab').addEventListener('click', function() {
        changeButtonColor('career-proggress-tab');
    });

    // Memanggil fungsi pertama kali untuk mengatur warna awal tombol
    changeButtonColor('profile-tab');

    document.addEventListener('DOMContentLoaded', function () {
        const carousel = document.querySelector('[data-carousel="slide"]');
        const prevButton = carousel.querySelector('[data-carousel-prev]');
        const nextButton = carousel.querySelector('[data-carousel-next]');
        const items = carousel.querySelectorAll('[data-carousel-item]');
        const indicators = carousel.querySelectorAll('[data-carousel-slide-to]');

        let currentIndex = 0;

        function showSlide(index) {
            items.forEach(item => item.classList.add('hidden'));
            indicators.forEach(indicator => indicator.setAttribute('aria-current', 'false'));

            items[index].classList.remove('hidden');
            indicators[index].setAttribute('aria-current', 'true');
        }

        function prevSlide() {
            currentIndex = (currentIndex === 0) ? items.length - 1 : currentIndex - 1;
            showSlide(currentIndex);
        }

        function nextSlide() {
            currentIndex = (currentIndex === items.length - 1) ? 0 : currentIndex + 1;
            showSlide(currentIndex);
        }

        prevButton.addEventListener('click', prevSlide);
        nextButton.addEventListener('click', nextSlide);
    });

    




    

    
