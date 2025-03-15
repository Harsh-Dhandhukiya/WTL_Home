document.addEventListener("DOMContentLoaded", function () {
    const stars = document.querySelectorAll('.star');
    const ratingText = document.getElementById('ratingText');
    const ratingInput = document.getElementById('rating');

    // Star Rating Logic
    stars.forEach(star => {
        star.addEventListener('click', () => {
            const value = star.dataset.value;
            ratingText.textContent = `Rating: ${value}`;
            ratingInput.value = value;

            stars.forEach(s => s.classList.remove('active'));
            star.classList.add('active');
            let prev = star;
            while (prev.previousElementSibling) {
                prev = prev.previousElementSibling;
                prev.classList.add('active');
            }
        });

        star.addEventListener('mouseover', () => {
            stars.forEach(s => s.classList.remove('hover'));
            star.classList.add('hover');
            let prev = star;
            while (prev.previousElementSibling) {
                prev = prev.previousElementSibling;
                prev.classList.add('hover');
            }
        });

        star.addEventListener('mouseleave', () => {
            stars.forEach(s => s.classList.remove('hover'));
        });
    });

    // File Preview Logic
    const fileInput = document.getElementById('file');
    const preview = document.getElementById('preview');

    fileInput.addEventListener('change', function () {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                preview.src = e.target.result;
                preview.style.display = 'block';
            };
            reader.readAsDataURL(file);
        } else {
            preview.src = '';
            preview.style.display = 'none';
        }
    });

    // Form Submission Logic
    document.getElementById("reviewForm").addEventListener("submit", function (event) {
        event.preventDefault();
        const formData = new FormData(this);
        const data = {
            name: formData.get("uname"),
            email: formData.get("email"),
            mobile: formData.get("mobile"),
            file: formData.get("file") ? formData.get("file").name : "No file uploaded",
            rating: formData.get("rating")
        };
        console.log("Form Submitted:", data);

        // Clear form after submission
        this.reset();
        ratingText.textContent = "Rating: 0";
        stars.forEach(s => s.classList.remove('active'));
        preview.src = '';
        preview.style.display = 'none';

        alert("Thank you for your review!");
    });
});