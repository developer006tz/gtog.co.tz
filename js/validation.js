$(document).ready(function() {
    $('#contact_form').bootstrapValidator({        
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            fname: {
                validators: {
                        stringLength: {
                        min: 2,
                    },
                        notEmpty: {
                        message: 'Please enter your first name'
                    }
                }
            },
             lname: {
                validators: {
                     stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: 'Please enter your last name'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Please enter your email address'
                    },
                    emailAddress: {
                        message: 'Please enter a valid email address'
                    }
                }
            },
            comment: {
                validators: {
                      stringLength: {
                        min: 10,
                        max: 200,
                        message:'Please enter at least 10 characters and no more than 200'
                    },
                    notEmpty: {
                        message: 'Please enter a description'
                    }
                    }
                }
            }
        }).on('success.form.bv', function(e) {           
            e.preventDefault();            
            var $form = $(e.target);            
            $.post($form.attr('action'), $form.serialize(), function(result) {                
				$("#message").html(result.message).addClass('show');
				$("#contact_form").find("input[type=text], input[type=email], textarea").val("");
            }, 'json');
        });
});