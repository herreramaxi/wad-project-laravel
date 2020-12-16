module.exports = {
    show: function() {
        $("#modalSpinner").modal("show");
    },
    hide: function() {
        setTimeout(function() {
            $("#modalSpinner").modal("hide");
        }, 500);
    }
};