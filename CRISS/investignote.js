const articles = document.querySelectorAll('.article');
let currentArticleIndex = 0;

function showArticle(index, reverse = false) {
  if (reverse) {
    articles[currentArticleIndex].classList.add('slide-out-right');
    articles[index].classList.add('slide-in-left', 'active');
  } else {
    articles[currentArticleIndex].classList.add('slide-out-left');
    articles[index].classList.add('slide-in-right', 'active');
  }

  setTimeout(() => {
    articles[currentArticleIndex].classList.remove('active', 'slide-out-left', 'slide-out-right');
    articles[index].classList.remove('slide-in-right', 'slide-in-left');
    currentArticleIndex = index;
  }, 500);
}

function nextArticle() {
  if (currentArticleIndex < articles.length - 1) {
    showArticle(currentArticleIndex + 1);
  }
}

function prevArticle() {
  if (currentArticleIndex > 0) {
    showArticle(currentArticleIndex - 1, true);
  }
}

function initializeArticles() {
  articles.forEach((article, index) => {
    if (index === currentArticleIndex) {
      article.classList.add('active');
    } else {
      article.classList.remove('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', initializeArticles);

