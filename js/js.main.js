const article = document.getElementById('article');
const button = document.getElementById('btn');

btn.addEventListener ('click',() =>){
    article.classList.toggle ('expanded');
    button.style.display = 'none';
}