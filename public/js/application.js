$(document).ready(function() {

});
$(function() {
    var form = $('#ajax-contact');
    var formMessages = $('#form-messages');
    TODO:
});
$(form).submit(function(event) {
    event.preventDefault();
    TODO
});
var formData = $(form).serialize();
$.ajax({
    type: 'POST',
    url: $(form).attr('action'),
    data: formData
})
.done(function(response) {
    // Make sure that the formMessages div has the 'success' class.
    $(formMessages).removeClass('error');
    $(formMessages).addClass('success');

    // Set the message text.
    $(formMessages).text(response);

    // Clear the form.
    $('#title').val('');
    $('#message').val('');
})


// Write handles what should happen if an error occurs
.fail(function(data) {
    $(formMessages).removeClass('success');
    $(formMessages).addClass('error');

    if (data.responseText !== '') {
        $(formMessages).text(data.responseText);
    } else {
        $(formMessages).text('Oops! An error occured and your message could not be sent.');
    }
});
