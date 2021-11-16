const jquery360Min = require("./jquery-3.6.0.min");

$(function() {
    $('*[include-html]').each(function() {
        var t = $(this).attr('include-html'),
            u = this.id;
        jquery360Min.ajax({
            url: t,
            success: function(t) {
                $('#' + u).html(t)
            },
            error:function(n, c, i) {
                var s = n.status + ': ' + n.statusText;
                $('#' + u).html(t + '-' + s)
            }
        })
    })
});