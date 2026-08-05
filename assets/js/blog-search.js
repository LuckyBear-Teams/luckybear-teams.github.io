(function () {
  var input = document.getElementById('blog-search');
  var items = Array.prototype.slice.call(document.querySelectorAll('#blog-post-list .post-list-item'));
  var countEl = document.getElementById('blog-search-count');
  var noResult = document.getElementById('blog-no-result');
  if (!input) { return; }

  function normalize(str) {
    return (str || '').toLowerCase();
  }

  function filter() {
    var query = normalize(input.value).trim();
    var visible = 0;
    items.forEach(function (item) {
      var haystack = item.getAttribute('data-search') || '';
      var match = query === '' || haystack.indexOf(query) !== -1;
      item.style.display = match ? '' : 'none';
      if (match) { visible += 1; }
    });
    if (countEl) { countEl.textContent = visible; }
    if (noResult) { noResult.style.display = visible === 0 ? '' : 'none'; }
  }

  input.addEventListener('input', filter);
  filter();
})();
