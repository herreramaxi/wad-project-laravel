$(document).ready(function () {
    console.log("ready!");

    $("#clearLnk").on("click", function () {
        var searchBox = $('#searchBox');
        searchBox.val("");
        $('.section_menu__grid__item').each(function () {
            var boxMenu = $(this);
            boxMenu[0].style.display = "";
        });
    });

    $("#searchBtn").on("click", function () {
        event.preventDefault();
        var searchBox = $('#searchBox');
        var searchText = searchBox.val();
        searchText = searchText.toLowerCase();
        searchText = searchText.replace(/\s+/g, '');
        $('.section_menu__grid__item').each(function () {
            var foundInBox = false;
            var boxMenu = $(this);
            boxMenu.each(function () {
                var currentText = $(this).text();
                if (currentText.toLowerCase().replace(/\s+/g, '').indexOf(searchText) !== -1) {
                    foundInBox = true;
                }
            });
            if (foundInBox) {
                boxMenu[0].style.display = "";
            } else {
                boxMenu[0].style.display = "none";
            }
        });
    });
});