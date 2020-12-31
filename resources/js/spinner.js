module.exports = {
    show: function() {
        $("#modalSpinner").modal("show");
        
        setTimeout(function () {
            $("#modalSpinner").modal("hide");
        }, 2000);
    },
    hide: function() {
        setTimeout(function() {
            $("#modalSpinner").modal("hide");
        }, 500);
    }
};