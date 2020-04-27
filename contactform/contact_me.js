// Variable to hold request
var request;

// Bind to the submit event of our form
$("#contactForm").submit(function(event){

    // Abort any pending request
    if (request) {
        request.abort();
    }
    // setup some local variables
    var $form = $(this);

    // Let's select and cache all the fields
    var $inputs = $form.find("input, select, button, textarea");

    // Serialize the data in the form
    var serializedData = $form.serialize();

    // Let's disable the inputs for the duration of the Ajax request.
    // Note: we disable elements AFTER the form data has been serialized.
    // Disabled form elements will not be serialized.
    $inputs.prop("disabled", true);

    // Fire off the request to /form.php
    request = $.ajax({
        url: "https://script.google.com/macros/s/AKfycbyJahY3Ojv5Rn2TdpkOvzvJUOzvkJKtT2KlqOhQrGSNMP8WXuw/exec",
        type: "post",
        data: serializedData
    });

    // Callback handler that will be called on success
    request.done(function (response, textStatus, jqXHR){
        // Log a message to the console
        /* console.log("Hooray, it worked!");
        console.log(response);
        console.log(textStatus);
        console.log(jqXHR); */
		// Success message
		/* $('#success').html("<div class='alert alert-success'>");
		$('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
			.append("</button>");
		$('#success > .alert-success')
			.append("<strong>문의주셔서 감사합니다. <br>곧 답변드리겠습니다.</strong>");
		$('#success > .alert-success')
			.append('</div>'); */
		
		$("#sendmessage").addClass("show");
		$("#errormessage").removeClass("show");

		//clear all fields
		$('#contactForm').trigger("reset");
    });

    // Callback handler that will be called on failure
    request.fail(function (jqXHR, textStatus, errorThrown){
        // Log the error to the console
        /* console.error(
            "The following error occurred: "+
            textStatus, errorThrown
        ); */
		// Fail message
	/* 	$('#success').html("<div class='alert alert-danger'>");
		$('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
			.append("</button>");
		$('#success > .alert-danger')
			.append("<strong>The following error occurred: "+textStatus+" </strong>");
		$('#success > .alert-danger')
			.append('</div>'); */
		
		$("#sendmessage").removeClass("show");
		$("#errormessage").addClass("show");

		//clear all fields
		$('#contactForm').trigger("reset");
    });
	
    // Callback handler that will be called regardless
    // if the request failed or succeeded
    request.always(function () {
        // Reenable the inputs
        $inputs.prop("disabled", false);
    });

    // Prevent default posting of form
    event.preventDefault();
});
