var footerBgc = document.getElementById('footerBgc'); 
var footerSearchbox = document.getElementById('footerSearchbox');
function toggleSearch() {
    var searchBox = document.getElementById('searchBox');
    searchBox.style.display = 'block';
    footerBgc.style.display = 'none';
    searchBox.focus();
}
document.addEventListener('touchmove', function(event){
var searchBox = document.getElementById('searchBox');
searchBox.style.display = 'none';
footerBgc.style.display = 'block';
});