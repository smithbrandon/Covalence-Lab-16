var chirps = [];
var chirp = {}

function getdate(time) {
    var currenttime = new Date();
    var d = new Date(time);
    var diffMin = (currenttime.getTime() - d.getTime()) / 60000;
    if (diffMin < 60) {
        return Math.ceil(diffMin) + " min ago";
    } else if (d.getFullYear() === currenttime.getFullYear() && d.getMonth() === currenttime.getMonth() && d.getDay() === currenttime.getDay()) {
        return Math.ceil(diffMin / 60) + " hours ago";
    } else if (d.getFullYear() === currenttime.getFullYear() && d.getMonth() === currenttime.getMonth() && d.getDate() === (currenttime.getDate() - 1)) {
        return "yesterday";
    } else {
        return Math.ceil(diffMin / (24 * 60)) + " days ago";
    }
}

function chirpBox(obj) {
    for (var i = obj.length - 1; i > 0; i--) {
        var $box = $('<div></div>');
        $box.addClass("chirpbox");
        var $img = $('<img/>');
        $img.addClass('chirpedImg');
        $img.attr('src', 'profile.jpg');
        $box.append($img);
        var $h3 = $('<h3></h3>');
        $h3.text(obj[i].user);
        $box.append($h3);
        var $h4 = $('<h4></h4>');
        $h4.text('@Rosslanding');
        var $h42 = $('<span></span>');
        $h42.addClass('time');
        $h42.text(getdate(obj[i].timestamp));
        $box.append($h4);
        $box.append($h42);
        var $h1 = $('<p></p>');
        $h1.text(obj[i].message);
        $box.append($h1);
        $box.append('<div style="clear:both"></div>');
        var $editbar = $('<div class="editBar"></div>')
        var $edit = $('<div class="editBtn"></div>');
        var $del = $('<div class="editBtn"></div>');
        $edit.append('<i class="fa fa-pencil" aria-hidden="true"></i>');
        $del.append('<i class="fa fa-trash" aria-hidden="true"></i>');
        $editbar.append($edit);
        $editbar.append($del);
        $box.append($editbar);
        var $btnbar = $('<div class="btnBar"></div>');
        var $comment = $('<div class="comment"></div>');
        var $like = $('<div class="like"></div>');
        var $share = $('<div class="share"></div>');
        $comment.append('<i class="fa fa-comment-o" aria-hidden="true"></i>');
        $like.append('<i class="fa fa-heart-o" aria-hidden="true"></i>');
        $share.append('<i class="fa fa-share-square-o" aria-hidden="true"></i>');
        $btnbar.append($share);
        $share.append(Math.floor(Math.random() * 1000));
        $btnbar.append($like);
        $like.append(Math.floor(Math.random() * 1000));
        $btnbar.append($comment);
        $comment.append(Math.floor(Math.random() * 1000));
        $box.append($btnbar);
        $('#chirpList').append($box);

    }

}
function captureChirp() {
    chirp.message = $('#chirp').val();
    chirp.user = 'Bob';

        $.ajax({
        method: "POST",
        url: "/api/chirp",
        contentType: "application/json",
        // dataType: "html",
        data: JSON.stringify(chirp)
    }).then(function (success) {
        ref();
        $('#chirp-btn').prop('disabled', true);
        $('#chirp').val('');
    }, function (XHR, status, error) {
        console.log("The Status is " + status + "resulting in " + error);
    })
}
$('#chirp-btn').on('click', captureChirp);

$('#chirp').keyup(function () {
    checkMsg();
    updateCount();
})

function updateCount() {
    $('#word-cnt > span').text($('#chirp').val().length);
}

function checkMsg() {
    var chars = $('#chirp').val().length;
    if (chars > 0) {
        $('#chirp-btn').prop('disabled', false)
    } else {
        $('#chirp-btn').prop('disabled', true)
    }
}

function ref() {
    $.ajax({
        method: "GET",
        url: "/api/chirps"
    }).then(function (success) {
        $("#chirpList").empty();
        chirpBox(success);
    }, function (error) {
        console.log(error);
    })
}
$(document).ready(function () {
    checkMsg();
    ref();
})