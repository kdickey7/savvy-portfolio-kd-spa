$('nav ul li').on('click', function(event) {
    var currentNavLink = $("nav").find(".active")
    if(!$(event.target).parent().hasClass('active')) {
      var newNavLink = $(event.target).parent()
      var currentPageName = $(currentNavLink).text().toLowerCase()
      var currentPageId = '#' + currentPageName
      var newPageName = $(event.target).text().toLowerCase()
      var newPageId = "#" + newPageName

      $(currentNavLink).removeClass('active')
      $(newNavLink).addClass('active')
      $(currentPageId).addClass('hidden')
      $(newPageId).removeClass('hidden')
    }
  })
