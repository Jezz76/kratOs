    document.addEventListener('DOMContentLoaded', () => {
        const sections = document.querySelectorAll('.section'); // Pilih semua elemen dengan kelas .section
        let currentSectionIndex = 0;

        // Fungsi untuk scroll ke halaman berikutnya
        const scrollToSection = (index) => {
            if (index >= 0 && index < sections.length) {
                sections[index].scrollIntoView({
                    behavior: 'smooth', 
                    block: 'start'
                });
                currentSectionIndex = index;
            }
        };

        // Menangani scroll mouse (scrolling up atau down)
        window.addEventListener('wheel', (event) => {
            if (event.deltaY > 0) {
                // Scroll ke bawah
                scrollToSection(currentSectionIndex + 1);
            } else {
                // Scroll ke atas
                scrollToSection(currentSectionIndex - 1);
            }
        });

        // Mencegah default behavior scroll
        window.addEventListener('scroll', (e) => {
            e.preventDefault(); // Menonaktifkan scroll biasa
        });

        // Inisialisasi halaman pertama
        scrollToSection(currentSectionIndex);
    });

