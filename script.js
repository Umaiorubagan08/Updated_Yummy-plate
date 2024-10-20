const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.classList.remove('hidden');
    } else {
        scrollToTopBtn.classList.add('hidden');
    }
};

scrollToTopBtn.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};











document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    alert('Form submitted successfully!');
});







function toggleCart() {
    const cartModal = document.getElementById('cartModal');
    if (cartModal.style.display === 'none' || cartModal.style.display === '') {
        cartModal.style.display = 'block';
    } else {
        cartModal.style.display = 'none';
    }
}
