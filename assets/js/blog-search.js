(function () {
  var PAGE_SIZE = 10;
  var input = document.getElementById('blog-search');
  var items = Array.prototype.slice.call(document.querySelectorAll('#blog-post-list .post-list-item'));
  var countEl = document.getElementById('blog-search-count');
  var noResult = document.getElementById('blog-no-result');
  var pagination = document.getElementById('blog-pagination');
  var prevBtn = document.getElementById('blog-page-prev');
  var nextBtn = document.getElementById('blog-page-next');
  var currentEl = document.getElementById('blog-page-current');
  if (!input) { return; }

  var currentPage = 1;
  var matched = items;

  function normalize(str) {
    return (str || '').toLowerCase();
  }

  function applyFilter() {
    var query = normalize(input.value).trim();
    matched = items.filter(function (item) {
      var haystack = item.getAttribute('data-search') || '';
      return query === '' || haystack.indexOf(query) !== -1;
    });
    currentPage = 1;
    render();
  }

  function render() {
    var total = matched.length;
    if (countEl) { countEl.textContent = total; }

    items.forEach(function (item) { item.style.display = 'none'; });

    if (total === 0) {
      if (noResult) { noResult.style.display = ''; }
      if (pagination) { pagination.style.display = 'none'; }
      return;
    }

    if (noResult) { noResult.style.display = 'none'; }

    var totalPages = Math.ceil(total / PAGE_SIZE);
    if (currentPage > totalPages) { currentPage = totalPages; }
    if (currentPage < 1) { currentPage = 1; }

    var start = (currentPage - 1) * PAGE_SIZE;
    var end = start + PAGE_SIZE;
    matched.slice(start, end).forEach(function (item) {
      item.style.display = '';
    });

    if (pagination) {
      pagination.style.display = totalPages > 1 ? '' : 'none';
    }
    if (currentEl) { currentEl.textContent = currentPage + ' / ' + totalPages; }
    if (prevBtn) { prevBtn.disabled = currentPage <= 1; }
    if (nextBtn) { nextBtn.disabled = currentPage >= totalPages; }
  }

  input.addEventListener('input', applyFilter);

  if (prevBtn) {
    prevBtn.addEventListener('click', function () {
      currentPage -= 1;
      render();
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', function () {
      currentPage += 1;
      render();
    });
  }

  applyFilter();
})();
