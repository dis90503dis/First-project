function toggleSearch() {
    var searchBox = document.getElementById('searchBox');
    searchBox.style.display = 'block';
}
document.addEventListener('touchmove', function(event){
var searchBox = document.getElementById('searchBox');
searchBox.style.display = 'none';
})