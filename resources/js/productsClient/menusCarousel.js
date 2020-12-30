const Handlebars = require("handlebars");

$(function() {
    var div = document.getElementById("recommendedMenus");
    var isMobile = div.getAttribute("data-mobile");

    $.getJSON("json/recommendedMenus.json", function(data) {
        if (isMobile) {
            renderCarouselForMobile(div, data);
        } else {
            renderCarouselForDesktop(div, data);
        }
    }).fail(function() {
        console.log("Error when rendering recommended menus carousel");
    });
});

function renderCarouselForMobile(div, data) {
    var html = "";

    $.each(data.menus, function(key, val) {
        var i = key + 1;

        if (val.name == null || val.description == null || val.src == null)
            return true; //continue

        var active = key == 0 ? "active" : "";

        html += htmlFormat(
            '<div class="carousel-item {{active}}">' +
                '<div class="row no-gutters">' +
                '<div class="col-sm-12">' +
                '<div class="card">' +
                '<img src="{{ src}}" class="card-img-top  menu-image" />' +
                '<div class="card-body">' +
                '<h6 class="card-title text-truncate">{{name}}</h6>' +
                '<p class="card-text text-truncate">{{ description}}</p>' +
                "</div>" +
                "</div>" +
                "</div>" +
                "</div>" +
                "</div>",
            {
                active: active,
                src: val.src,
                name: val.name,
                description: val.description
            }
        );
    });

    div.innerHTML = html;
}

function renderCarouselForDesktop(div, data) {
    var lastElement = data.menus.length;
    var state = 0;
    var html = "";

    $.each(data.menus, function(key, val) {
        var i = key + 1;

        if (val.name == null || val.description == null || val.src == null)
            return true; //continue

        if (state == 0) {
            var active = key == 0 ? "active" : "";
            html += htmlFormat(
                '<div data-attr="abc" class="carousel-item {{active}}">',
                { active: active }
            );
            html += '<div class="row no-gutters">';

            state = 1;
        }

        html += htmlFormat('<div class="col-md-2">');
        html += htmlFormat('<div class="card">');

        html += htmlFormat(
            '<img src="{{src}}" class="card-img-top menu-image" />',
            { src: val.src }
        );

        html += htmlFormat(
            '<div class="card-body">' +
                '<h6 class="card-title text-truncate">{{name}}</h6>' +
                '<p class="card-text text-truncate">{{ description}}</p>' +
                "</div>" +
                "</div>" +
                "</div>",
            { name: val.name, description: val.description }
        );

        if (state == 1) {
            if (i % 6 == 0 || i == lastElement) {
                html += htmlFormat("</div></div>");
                state = 0;
            }
        }
    });

    div.innerHTML = html;
}

function htmlFormat(html, data) {
    var compiledTemplate = Handlebars.compile(html);
    return compiledTemplate(data);
}
