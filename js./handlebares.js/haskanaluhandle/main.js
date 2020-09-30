(function () {


    var content = document.getElementById("content");
    var html = "";
    var data = {
        bold: '<b>Same Bold text</b>',
        title: "Really coll people",
        people: [{
                name: "John",
                age: 34,
                email: "john@gmail.com"
            },
            {
                name: "Sally",
                age: 22,
                email: "sallqms@gmail.com"
            },
            {
                name: "Esho",
                age: 30,
                email: "esho@gmail.com"
            }
        ]
    }

    Handlebars.registerHelper("bold", function (text) {
        text = Handlebars.escapeExpression(text);
        return new Handlebars.SafeString(
            '<b>' + text + '</b>'
        )
    });

    Handlebars.registerHelper("list", function (items, options) {
        var out = "<ul>";
        for (var i = 0; i < items.length; i++) {
            out += "<li>" + options.fn(items[i]) + "</li>";
        }
        return out + "</ul>"
    })


    var template = Handlebars.compile(document.getElementById("people-template").innerHTML);
    content.innerHTML = template(data)
})();