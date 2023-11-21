function performGoogleSearch() {
  const searchQuery = document.getElementById('search-input').value;

  window.location.href = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
}

function performImageSearch() {
  const searchQuery = document.getElementById('search-input').value;

  window.location.href = `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(searchQuery)}`;
}



function performLuckySearch() {

  window.location.href = 'https://www.google.com/search?q=lucky+search&btnI';
}

function performAdvancedSearch() {
  const allWords = document.getElementById('all-words').value;
  const exactPhrase = document.getElementById('exact-phrase').value;
  const anyWords = document.getElementById('any-words').value;
  const noneWords = document.getElementById('none-words').value;


  const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(allWords)}`
                 + `+"${encodeURIComponent(exactPhrase)}"`
                 + ` ${encodeURIComponent(anyWords)}`
                 + ` -${encodeURIComponent(noneWords)}`;


  window.location.href = searchUrl;
}
