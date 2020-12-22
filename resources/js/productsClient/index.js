$(function () {
    $(document).autocomplete();
});

function setPartialView(href, itemName) {
    event.preventDefault();
    $.ajax({
        url: href,
        data: {
            name: itemName
        },
        beforeSend: function () {
        },
        success: function (data) {
            let doc = document.implementation.createHTMLDocument("partial view doc");
            doc.documentElement.innerHTML = data;
            let partialViewBody = doc.documentElement.childNodes[2].innerHTML;
            document.documentElement.childNodes[2].innerHTML = partialViewBody;
        },
        error: function (xhr, status, error) {
            console.log(status);
            console.log(error);

            if (status == 404) {
                showErrorMessage("View not found");
            } else {
                showErrorMessage("Error when trying to load create view");
            }
        },
        complete: function (jqXHR, textStatus) {
        }
    });
}

$.fn.autocomplete = function () {
    {
        $('#productsClientContainer').on('click', '#search', function (e) {
            e.preventDefault();
            $('#search').typeahead({
                highlight: true,
                suggestions:false,
                hint:false,
                minLength: 1,
                updater: function (item) {
                    let href = $("#searchForm").attr("data-attr");
                    setPartialView(href, item.name);
                    return false;
                },
                source: function (term, process) {
                    let route = $("#searchForm").attr("filter-attr");
                    return $.get(route, {
                        term: term
                    }, function (data) {
                        return process(data);
                    });

                }
            });
        });
    }
}

//When Ajax completes we need to unbind all the events from the document ready, otherwise the script won't run for a second time
$(document).ajaxStop(function () {

    $(document).autocomplete();
});

// Instantiate the Bootstrap carousel
$('.multi-item-carousel').carousel({
    interval: false
  });
  
  // for every slide in carousel, copy the next slide's item in the slide.
  // Do the same for the next, next item.
  $('.multi-item-carousel .item').each(function(){
    var next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    
    if (next.next().length>0) {
      next.next().children(':first-child').clone().appendTo($(this));
    } else {
        $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
    }
  });