var tdList = $(".tdlApp ul");
var tdMask

var input = $(".tdlApp input").on("keydown", function (e) {
    if (e.keyCode != 13)
        return;
    var str = e.target.value;
    e.target.value = "";
    str.focus();

    if (str.length > 0) {
       var nId = 0;


        // esli budem tak soxranit setitem budet tolko possledni soxranitca
        localStorage.setItem("task", str);
        $('<li></li>').addClass('tdItem')
        // dobavlyaem data-itemid kuda budet dobavlyatca nash id
        // no esli eto budet chesl vazmojno peresecheniye s drugimi klyuchami ot drugix plaginov k dopalneniu brouzer
        .attr("data-itemid", nId)
        .text(str).appendTo(tdList)
    }
})