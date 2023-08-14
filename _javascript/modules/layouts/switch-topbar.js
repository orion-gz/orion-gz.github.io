/*
 * Hide Header on scroll down
 */

export function switchTopbar() {

    const topbarWrapper = $("#topbar-wrapper");
    const toc = $("#toc-wrapper");
    const access = $(".access");
    const searchInput = $("#search-input");
  
    let didScroll;
    let lastScrollTop = 0;
  
    const delta = 5;
    const topbarHeight = topbarWrapper.outerHeight();
  
    function hasScrolled() {
      var st = $(this).scrollTop();
  
      /* Make sure they scroll more than delta */
      if (Math.abs(lastScrollTop - st) <= delta) {
        return;
      }
  
      if (st > lastScrollTop && st > topbarHeight) {
        /* Scroll Down */
        topbarWrapper.addClass("hide");
  
        if (toc.length > 0) {
          toc.removeClass("hide");
        }
  
        if (access.length > 0) {
          access.removeClass("hide");
        }
  
        if (searchInput.is(":focus")) {
          searchInput.blur(); /* remove focus */
        }
  
      } else if (st + $(window).height() < $(document).height()) {
        /* Scroll Up */
        topbarWrapper.removeClass("hide");
        if (toc.length > 0) {
          toc.removeClass("hide");
        }
        if (access.length > 0) {
          access.removeClass("hide");
        }
      }
  
      lastScrollTop = st;
    }
  
    $(window).scroll(function(event) {
      if ($("#topbar-title").is(":hidden")) { /* Not in small screens */
        didScroll = true;
      }
    });
  
    setInterval(function() {
      if (didScroll) {
        hasScrolled();
        didScroll = false;
      }
    }, 250);
  
  };