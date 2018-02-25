require(['gitbook', 'jquery'], function (gitbook, $) {
  // Monitoring anchor change
  // Using `setInterval` because `hashchange` event doesn't work for some reason
  setInterval(checkCurrentPath, 200);

  gitbook.events.on('page.change', function () {
    // Should do it on `page.change` because buttons are being redrawn on every page change for some reason
    updateToolbarButtons();

    // Adding anchor icons next to markdown headers
    addHeaderLinks();

    // Scrolling page to anchor or top, because theme script scrolls wrong element (`.body-inner`)
    activePath = getCurrentPath();
    setTimeout(updatePageScroll, 0);
  });

  var activePath;

  function checkCurrentPath() {
    var currentPath = getCurrentPath();

    if (currentPath === activePath) {
      return;
    }

    activePath = currentPath;
    updatePageScroll();
  }

  function getCurrentPath() {
    return location.pathname + location.hash;
  }

  function updatePageScroll() {
    var scrollToElem = $(document.getElementById(location.hash.slice(1)));
    var scrollTop = scrollToElem.length ? scrollToElem.position().top : 0;
    $('.body-inner').scrollTop(scrollTop);
  }

  function updateToolbarButtons() {
    // `Menu` button
    $('.book-header .btn:has(.fa-align-justify)')
      .addClass('btn_menu');

    // `Edit This Page` button
    $('.book-header .btn:has(.fa-edit)')
      .addClass('btn_edit')
      // Changing icon
      .find('.fa-edit')
      .removeClass('fa-edit')
      .addClass('fa-github');
  }

  function addHeaderLinks() {
    $('.markdown-section')
      .find('h1, h2, h3, h4, h5')
      .filter(function () {
        return this.getAttribute("id");
      })
      .addClass('heading heading_linkable')
      .prepend(function () {
        return (
          '<a class="heading__anchor" ' +
            'href="#' + this.getAttribute('id') + '">' +
            '<i class="fa fa-link"></i>' +
          '</a>'
        );
      });
  }
});