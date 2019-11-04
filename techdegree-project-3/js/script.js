$(document).ready(function() {

     
    //'BASIC INFO' SECTION
    

    $("#name").focus();
  
    $("#other-title").hide();
    //adds event listener to "Other" job role which makes text box appear
    $('#title').change(function() {
        if ($('#title [value="other"]').is(':selected')) {
            $("#other-title").show();
        } else {
            $("#other-title").hide();
        }
    });

    //updates the 'Job Role' field to read "Please select a job role."
    $('#title').prepend($('<option>Please select a job role</option>'));
    $('#title option:eq(0)').attr('selected', '');

    //hide the "Please select a job role" option element in the "Job Role" menu
    $('#title option:eq(0)').hide();

  
    //'T-SHIRT INFO' SECTION
   

    //Adds "Select Size" title under Size option and hides it in the drop down menu
    $('#size').prepend($('<option>Select Size</option>'));
    $('#size option:eq(0)').attr('selected', '');

    $('#size option:eq(0)').hide();

    $('#design option:eq(0)').hide();

    //updates the "Color" field to read "Please select a T-shirt theme."
    $('#color').prepend($('<option>Please select a T-shirt color</option>'));
    //$('#color option:eq(0)').show();

    //hides all options in the "Color" field, except for "Please select a T-shirt Color"
    $('#color option').each(function() {
        $(this).hide();
    });

    $('#colors-js-puns').hide();

    //Updates color fields based on selected theme in the "Design" drop down menu
    $('#design').change(function() {
        if ($('#design [value="js puns"]').is(':selected')) {
            $('#colors-js-puns').show();
            $('#color option:eq(0)').attr('selected', '');
            $('#color option:eq(1)').show();
            $('#color option:eq(2)').show();
            $('#color option:eq(3)').show();

            $('#color option:eq(4)').hide().prop('selected', false);
            $('#color option:eq(5)').hide().prop('selected', false);
            $('#color option:eq(6)').hide().prop('selected', false);

        } else if ($('#design [value="heart js"]').is(':selected')) {
            $('#colors-js-puns').show();
            $('#color option:eq(0)').attr('selected', '');

            $('#color option:eq(4)').show();
            $('#color option:eq(5)').show();
            $('#color option:eq(6)').show();

            $('#color option:eq(1)').hide().prop('selected', false);
            $('#color option:eq(2)').hide().prop('selected', false);
            $('#color option:eq(3)').hide().prop('selected', false);
        }
    });

   
    //'ACTIVITY REGISTRATION' SECTION
  

    let totalCost = 0;
    
    let totalCostElement = $('<div></div>').text("Total: $" + totalCost);
    $('.activities').append(totalCostElement);

    $('[type="checkbox"]').on('change', function(e) {
        const checkedBox = $(e.target);
        const checkedBoxCost = parseInt(checkedBox.attr('data-cost').replace(/\D/g, ''));
        const checkedBoxDateAndTime = checkedBox.attr('data-day-and-time');

        if (checkedBox.is(':checked')) {
            totalCost += checkedBoxCost;
            totalCostElement.text("Total: $" + totalCost);
        } else {
            totalCost -= checkedBoxCost;
            totalCostElement.text("Total: $" + totalCost);
        }

        $('[type="checkbox"]').each(function() {
            const currentBox = $(this);
            if ((checkedBoxDateAndTime === currentBox.attr('data-day-and-time')) && (checkedBox.attr('name') !== currentBox.attr('name'))) {
                if (checkedBox.is(':checked')) {
                    currentBox.attr('disabled', true);
                    checkedBox.attr('disabled', false);
                } else {
                    currentBox.attr('disabled', false);
                    checkedBox.attr('disabled', false);
                }
            }
        });
    });

     
    //'PAYMENT INFO' SECTION
   
    $('#payment option:eq(0)').hide();
    $('#paypal').hide();
    $('#bitcoin').hide();
    $('[value="Credit Card"]').attr('selected', '');

    $('#payment').change(function() {
        if ($('[value="Credit Card"]').is(':selected')) {
            $('#paypal').hide();
            $('#bitcoin').hide();
            $('#credit-card').show();
        } else if ($('[value="PayPal"]').is(':selected')) {
            $('#bitcoin').hide();
            $('#credit-card').hide();
            $('#paypal').show();
        } else if ($('[value="Bitcoin"]').is(':selected')) {
            $('#paypal').hide();
            $('#credit-card').hide();
            $('#bitcoin').show();
        }
    });


    //BASIC VALIDATION FUNCTIONS && 
    //EVENT LISTENERS FOR REAL TIME VALIDATION
   

    //validate name function
    function validateName() {
        if ($('#name').val().length === 0) {
            $('#name').css('border-color', 'red');
            $('[for="name"] span').remove();
            $('[for="name"]').append('<span> Please enter a valid name.</span>').css('color', 'red');
            return false;
        } else {
            $('#name').css('border-color', '#6F9DDC');
            $('[for="name"] span').remove();
            $('[for="name"]').css('color', '#000');
            return true;
        }

    }

    //event listener to enable real time 'name' input validation 
    $('#name').on('keyup', function() {
        validateName();
    });


    //validate email function
    function validateEmail() {
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!(regex.test($("#mail").val()))) {
            $('#mail').css('border-color', 'red');
            $('[for="mail"] span').remove();
            $('[for="mail"]').append('<span> Please enter a valid email.</span>').css('color', 'red');
            return false;
        } else {
            $('#mail').css('border-color', '#6F9DDC');
            $('[for="mail"] span').remove();
            $('[for="mail"]').css('color', '#000');
            return true;
        }
    }

    //event listener to enable real time 'email' input validation 
    $('#mail').on('keyup', function() {
        validateEmail();
    });


    //validate job role function
    function validateJobRole() {
        if ($('[value="full-stack js developer"]').is(':selected')) {
            $('#title').css('border-color', '#6F9DDC');
            $('[for="title"] span').remove();
            $('[for="title"]').css('color', '#000');
            return true;
        } else if ($('[value="front-end developer"]').is(':selected')) {
            $('#title').css('border-color', '#6F9DDC');
            $('[for="title"] span').remove();
            $('[for="title"]').css('color', '#000');
            return true;
        } else if ($('[value="back-end developer"]').is(':selected')) {
            $('#title').css('border-color', '#6F9DDC');
            $('[for="title"] span').remove();
            $('[for="title"]').css('color', '#000');
            return true;
        } else if ($('[value="designer"]').is(':selected')) {
            $('#title').css('border-color', '#6F9DDC');
            $('[for="title"] span').remove();
            $('[for="title"]').css('color', '#000');
            return true;
        } else if ($('[value="student"]').is(':selected')) {
            $('#title').css('border-color', '#6F9DDC');
            $('[for="title"] span').remove();
            $('[for="title"]').css('color', '#000');
            return true;
        } else if ($('[value="other"]').is(':selected')) {
            $('#title').css('border-color', '#6F9DDC');
            $('[for="title"] span').remove();
            $('[for="title"]').css('color', '#000');
            return true;
        } else {
            $('#title').css('border-color', 'red');
            $('[for="title"] span').remove();
            $('[for="title"]').append('<span> Please select a valid job role.</span>').css('color', 'red');
            return false;
        }
    }

    //event listener to enable real time 'job role' selection validation 
    $('#title').on('change', function() {
        validateJobRole();
    });


    //validate other job role function
    function validateOtherJobRole() {
        if ($('#title [value="other"]').is(':selected')) {
            if ($('#other-title').val().length === 0) {
                $('#other-title').css('border-color', 'red');
                $('[for="title"] span').remove();
                $('[for="title"]').append('<span> Please enter a valid job role.</span>').css('color', 'red');
                return false;
            } else {
                $('#other-title').css('border-color', '#6F9DDC');
                $('[for="title"] span').remove();
                $('[for="title"]').css('color', '#000');
                return true;
            }
        }
    }

    //event listener to enable real time 'other job role' input validation 
    $('#other-title').on('keyup', function() {
        validateOtherJobRole();
    });


    //validate activity registration
    function validateActivity() {
        if ($('input[type="checkbox"]').is(':checked')) {
            //$('fieldset.activities label').css('color', '#000');
            $('.activities legend span').remove();
            $('.activities legend').css('color', '#000');
            return true;
        } else {
            //$('fieldset.activities label').css('color', 'red');
            $('.activities legend span').remove();
            $('.activities legend').append('<span> Please select at least one activity.</span>').css('color', 'red');
            return false;
        }
    }

    //event listener to enable real time 'activity registration' validation 
    $('.activities').on('click', function() {
        validateActivity();
    });


    //validate credit card number
    function validateCreditCardNumber() {
        const regex = /^[0][1-9]\d{12,15}$|^[1-9]\d{12,15}$/;

        if ($('#cc-num').val().length < 13) {
            $('#cc-num').css('border-color', 'red');
            $('[for="cc-num"] span').remove();
            $('[for="cc-num"]').append('<span> Please enter a valid credit card number that is at least 13 digits long.</span>').css('color', 'red');
            return false;
        } else if ($('#cc-num').val().length > 16) {
            $('#cc-num').css('border-color', 'red');
            $('[for="cc-num"] span').remove();
            $('[for="cc-num"]').append('<span> Please enter a valid credit card number that is no more than 16 digits long.</span>').css('color', 'red');
            return false;
        } else {
            if ((regex.test(($('#cc-num').val())))) {
                $('#cc-num').css('border-color', '#6F9DDC');
                $('[for="cc-num"] span').remove();
                $('[for="cc-num"]').css('color', '#000');
                return true;
            } else {
                $('#cc-num').css('border-color', 'red');
                $('[for="cc-num"] span').remove();
                $('[for="cc-num"]').append('<span> Please enter a valid credit card number that is between 13 and 16 digits long.</span>').css('color', 'red');
                return false;
            }
        }
    }

    //event listener to enable real time 'credit card number' input validation 
    $('#cc-num').on('keyup', function() {
        validateCreditCardNumber();
    });


    //validate zipcode
    function validateZipCode() {
        const regex = /^[0][1-9]\d{4}$|^[1-9]\d{4}$/;

        if ($('#zip').val().length < 5) {
            $('#zip').css('border-color', 'red');
            $('[for="zip"] span').remove();
            $('[for="zip"]').append('<span> The zip code entered is too SHORT. Please enter a valid zip code that is 5 digits long.</span>').css('color', 'red');
            return false;

        } else if ($('#zip').val().length > 5) {
            $('#zip').css('border-color', 'red');
            $('[for="zip"] span').remove();
            $('[for="zip"]').append('<span> The zip code entered is too LONG. Please enter a valid zip code that is 5 digits long.</span>').css('color', 'red');
            return false;

        } else {
            if ((regex.test(($('#zip').val())))) {
                $('#zip').css('border-color', '#6F9DDC');
                $('[for="zip"] span').remove();
                $('[for="zip"]').css('color', '#000');
                return true;
            } else {
                $('#zip').css('border-color', 'red');
                $('[for="zip"] span').remove();
                $('[for="zip"]').append('<span> Please enter a valid zip code that is 5 digits long.</span>').css('color', 'red');
                return false;
            }
        }
    }

    //event listener to enable real time 'credit card zip code' input validation 
    $('#zip').on('keyup', function() {
        validateZipCode();
    });


    //validate CVV
    function validateCVV() {
        const regex = /^[0][1-9]\d{2}$|^[1-9]\d{2}$/;

        if ($('#cvv').val().length < 3) {
            $('#cvv').css('border-color', 'red');
            $('[for="cvv"] span').remove();
            $('[for="cvv"]').append('<span> The CVV entered is too SHORT. Please enter a valid CVV that is 3 digits long.</span>').css('color', 'red');
            return false;
        } else if ($('#cvv').val().length > 3) {
            $('#cvv').css('border-color', 'red');
            $('[for="cvv"] span').remove();
            $('[for="cvv"]').append('<span> The CVV entered is too LONG. Please enter a valid CVV that is 3 digits long.</span>').css('color', 'red');
            return false;
        } else {
            if ((regex.test(($('#cvv').val())))) {
                $('#cvv').css('border-color', '#6F9DDC');
                $('[for="cvv"] span').remove();
                $('[for="cvv"]').css('color', '#000');
                return true;
            } else {
                $('#cvv').css('border-color', 'red');
                $('[for="cvv"] span').remove();
                $('[for="cvv"]').append('<span> Please enter a valid CVV that is 3 digits long.</span>').css('color', 'red');
                return false;
            }
        }
    }

    //event listener to enable real time 'credit card zip code' input validation 
    $('#cvv').on('keyup', function() {
        validateCVV();
    });


    // //validates that a payment method is selected
    // function validatePayment() {
    //     if ($('[value="Credit Card"]').is(':selected')) {
    //         $('#payment').css('border-color', '#6F9DDC');
    //         $('[for="payment"] span').remove();
    //         $('[for="payment"]').css('color', '#000');
    //         return true;
    //     } else if ($('[value="PayPal"]').is(':selected')) {
    //         $('#payment').css('border-color', '#6F9DDC');
    //         $('[for="payment"] span').remove();
    //         $('[for="payment"]').css('color', '#000');
    //         return true;
    //     } else if ($('[value="Bitcoin"]').is(':selected')) {
    //         $('#payment').css('border-color', '#6F9DDC');
    //         $('[for="payment"] span').remove();
    //         $('[for="payment"]').css('color', '#000');
    //         return true;
    //     } else {
    //         $('#payment').css('border-color', 'red');
    //         $('[for="payment"] span').remove();
    //         $('[for="payment"]').append('<span> Please select a valid payment option.</span>').css('color', 'red');
    //         return false;
    //     }
    // }

    // //event listener to enable real time 'Payment' selection validation 
    // $('#payment').on('change', function() {
    //     validatePayment();
    // });



    //form validation to ensure that 'Name', 'Email', and 'Activity' Fields are properly completed
    $('[type="submit"]').on('click', function(e) {
        if (validateName() === false) {
            e.preventDefault();
        }
        if (validateEmail() === false) {
            e.preventDefault();
        }
        if (validateJobRole() === false) {
            e.preventDefault();
        }
        if (validateOtherJobRole() === false) {
            e.preventDefault();
        }
        if (validateActivity() === false) {
            e.preventDefault();
        }
        // if (validatePayment() === false) {
        //     e.preventDefault();
        // }
        if ($('[value="Credit Card"]').is(':selected')) {
            if (validateCreditCardNumber() === false) {
                e.preventDefault();
            }
            if (validateZipCode() === false) {
                e.preventDefault();
            }
            if (validateCVV() === false) {
                e.preventDefault();
            }
        }
    });



});
