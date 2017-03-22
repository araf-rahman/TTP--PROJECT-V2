$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
});



// Creating two new variables, form and formMessages, that reference the corresponding elements in your HTML markup.
$(function() {
    // Get the form.
    var form = $('#ajax-contact');

    // Get the messages div.
    var formMessages = $('#form-messages');

    // TODO: The rest of the code will go here...
});


// Create an event listener that will intercept submit events on the form.
// Set up an event listener for the contact form.
$(form).submit(function(event) {
    // Stop the browser from submitting the form.
    event.preventDefault();

    // TODO
});




// Convert the data the user has entered into the form into a key/value string that can be sent with the AJAX request. Use the jQuery serialize method to serialize the form data and then store the result in a variable called formData
// Serialize the form data.
var formData = $(form).serialize();



// Write the code that’s responsible for sending the form data to the server and processing the response
// Submit the form using AJAX.
$.ajax({
    type: 'POST',
    url: $(form).attr('action'),
    data: formData
})




// Handle a successful response from the server
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
    // Make sure that the formMessages div has the 'error' class.
    $(formMessages).removeClass('success');
    $(formMessages).addClass('error');

    // Set the message text.
    if (data.responseText !== '') {
        $(formMessages).text(data.responseText);
    } else {
        $(formMessages).text('Oops! An error occured and your message could not be sent.');
    }
});