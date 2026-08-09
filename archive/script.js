       // JavaScript for the image carousel
       const carouselImages = document.querySelector('.carousel-images');
       const totalImages = document.querySelectorAll('.carousel-image').length;
       let currentIndex = 0;
       let intervalId;

       // Function to show the next image
       function nextImage() {
           currentIndex = (currentIndex + 1) % totalImages;
           updateCarousel();
           resetInterval();
       }

       // Function to show the previous image
       function prevImage() {
           currentIndex = (currentIndex - 1 + totalImages) % totalImages;
           updateCarousel();
           resetInterval();
       }

       // Function to update the carousel position
       function updateCarousel() {
           const translateX = -currentIndex * 100;
           carouselImages.style.transform = `translateX(${translateX}%)`;
       }

       // Function to start the auto slide
       function startAutoSlide() {
           intervalId = setInterval(nextImage, 3000); // Change image every 3 seconds
       }

       // Function to reset the interval
       function resetInterval() {
           clearInterval(intervalId);
           startAutoSlide();
       }

       // Initialize the carousel
       document.addEventListener('DOMContentLoaded', () => {
           startAutoSlide();
       });

       // JavaScript for Overlay Menu
       function toggleMenu() {
           const overlay = document.getElementById('overlay');
           overlay.classList.toggle('active');
       }

       function closeMenu() {
           const overlay = document.getElementById('overlay');
           overlay.classList.remove('active');
       }

       document.getElementById('classDropdown').addEventListener('change', function() {
        var selectedValue = this.value;
        
        // Hide default content
        document.getElementById('defaultContent').classList.add('hidden');
        
        // Show grade-specific content
        var gradeContent = document.getElementById('gradeContent');
        gradeContent.classList.remove('hidden');
        
        // Hide all grade-specific content initially
        var allGradeContents = gradeContent.querySelectorAll('.bg-white');
        allGradeContents.forEach(function(content) {
            content.classList.add('hidden');
        });
        
        // Show selected grade-specific content
        if (selectedValue) {
            var gradeSpecificContent = document.getElementById(selectedValue + 'Content');
            if (gradeSpecificContent) {
                gradeSpecificContent.classList.remove('hidden');
            }else{
                gradeContent.classList.add('hidden');
                document.getElementById('defaultContent').classList.remove('hidden');
            }
            
        } else {
            gradeContent.classList.add('hidden');
            document.getElementById('defaultContent').classList.remove('hidden');
        }
    });


     // Array of image URLs categorized by grade
     const imagesByGrade = {
        "k2": [
            "https://images.unsplash.com/photo-1534126511673-b6899657816a",
            "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
            "https://images.unsplash.com/photo-1534126511673-b6899657816a",
            "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
            "https://images.unsplash.com/photo-1534126511673-b6899657816a",
            "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",


        ],
        "3": [
        "https://images.unsplash.com/photo-1534126511673-b6899657816a",
            "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
            "https://images.unsplash.com/photo-1508610048659-a06b669e3321",
            "https://images.unsplash.com/photo-1534126511673-b6899657816a",
            "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c"
        ],
        "4": [
            "https://images.unsplash.com/photo-1511044568932-338cba0ad803",
            "https://images.unsplash.com/photo-1534126511673-b6899657816a",
            "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
            "https://images.unsplash.com/photo-1511044568932-338cba0ad803",
            "https://images.unsplash.com/photo-1534126511673-b6899657816a"

        ]
    };

    function generateImageGallery(grade) {
        const container = document.querySelector(`#grade-${grade} .image-gallery`);
        container.innerHTML = ''; // Clear previous images
        imagesByGrade[grade].forEach((image, index) => {
            const anchor = document.createElement('a');
            anchor.href = image;
            anchor.setAttribute('data-lightbox', `seva-gallery-${grade}`);
            anchor.setAttribute('data-title', `Seva Activity ${index + 1}`);

            const img = document.createElement('img');
            img.src = image;
            img.alt = `Seva Activity ${index + 1}`;
            
            anchor.appendChild(img);
            container.appendChild(anchor);
        });
    }

    // Call the function to generate galleries for all grades
    generateImageGallery('k2');
    generateImageGallery('3');
    generateImageGallery('4');