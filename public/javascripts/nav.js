const searchIcon = document.querySelector('.mobile-search-icon');
const cancelSearch = document.querySelector('.cancel-search')
const hons = document.querySelectorAll('.hons');
const logo = document.querySelector('.logo');

searchIcon.addEventListener('click', () => {
    document.querySelector('.mobile-search').style.display = 'inline-block';
    hons.forEach(e => {
        e.style.display = 'none';
    })
    logo.style.display = 'none';
})
cancelSearch.addEventListener('click', () => {
    document.querySelector('.mobile-search').style.display = 'none';
    hons.forEach(e => {
        e.style.display = 'block';
    })
    logo.style.display = 'block';
})