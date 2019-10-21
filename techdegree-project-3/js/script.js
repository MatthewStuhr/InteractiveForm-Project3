$(document).ready(function() {
  
  
  //BASIC INFO
  
  
  //When the page first loads, the first text field should be in focus by default.
  $("#name").focus();
  
  //Validate name function
  function validateName() {
    if ($('#name').val().length === 0) {
        $('#name').css('border-color', 'red');
        $('[for="name"] span').remove();
        $('[for="name"]').append('<span> Valid name only.</span>').css('color', 'red');
        return false;
    } else {
        $('#name').css('border-color', '#6F9DDC');
        $('[for="name"] span').remove();
        $('[for="name"]').css('color', '#000');
        return true;
    }
  }
  //Event listener for real time 'name' input validation
  $('#name').on('keyup', function() {
    validateName();
  });
  
  //Validate email function
  function validateEmail() {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!(regex.test($("#mail").val()))) {
        $('#mail').css('border-color', 'red');
        $('[for="mail"] span').remove();
        $('[for="mail"]').append('<span> Valid email only.</span>').css('color', 'red');
        return false;
    } else {
        $('#mail').css('border-color', '#6F9DDC');
        $('[for="mail"] span').remove();
        $('[for="mail"]').css('color', '#000');
        return true;
    }
  }
  
  //Event listener for real time 'email' input validation
  $('#mail').on('keyup', function() {
     validateEmail();
  });
  
  //Validate job role function
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
        $('[for="title"]').append('<span>Valid job role only.</span>').css('color', 'red');
        return false;
        }
    }
  
  //Event listener for real time 'job role' selection validation
  $('#title').on('change', function() {
     validateJobRole();
  });
  
  //Validate other job role function
  function validateOtherJobRole() {
    if ($('#title [value="other"]').is(':selected')) {
      if ($('#other-title').val().length === 0) {
          $('#other-title').css('border-color', 'red');
          $('[for="title"] span').remove();
          $('[for="title"]').append('<span>: Valid job role only.</span>').css('color', 'red');
          return false;
      } else {
          $('#other-title').css('border-color', '#6F9DDC');
          $('[for="title"] span').remove();
          $('[for="title"]').css('color', '#000');
          return true;
          }
      }
  }
  
  //Event listener for real time 'other job role' input validation
  $('#other-title').on('keyup', function() {
      validateOtherJobRole();
  });
  
  //Hides text element for other-title
  $("#other-title").hide();
  
  //Give the field an id of “other-title,” and add the placeholder text of "Your Job Role".
  //event listener to other job role which makes the text box appear
  $("#title").change(function() {
    if ($('#title [value="other"]').is(':selected')) {
        $("#other-title").show();
    } else {
        $("#other-title").hide();
      }
  });
  
  //Adds "Please select a Job Role" title under Job Role and hides it in the drop down menu
  $('#title').prepend($('<option>Please select a Job Role</option>'));
  $('#title option:eq(0)').attr('selected', '');
  $('#title option:eq(0)').hide();

  
  //T-SHIRT INFO
  
  
  //Adds "Select Size" title under Size option and hides it in the drop down menu
  $('#size').prepend($('<option>Select Size</option>'));
  $('#size option:eq(0)').attr('selected', '');
  $('#size option:eq(0)').hide();
  
  //Hides the "Select Theme" title in the Design drop down menu
  $('#design option:eq(0)').hide();
  
  $('#color').prepend($('<option>Please select a color</option>'));
  $('#color option').each(function() {
      $(this).hide();
  });
  
  $('#color-js-puns').hide();
  
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
        $('#color-js-puns').show();
        $('#color option:eq(0)').attr('selected', '');
        $('#color option:eq(4)').show();
        $('#color option:eq(5)').show();
        $('#color option:eq(6)').show();
      
        $('#color option:eq(1)').hide().prop('selected', false);
        $('#color option:eq(2)').hide().prop('selected', false);
        $('#color option:eq(3)').hide().prop('selected', false);
    }  
  });
  
  //ACTIVITY REGISTRATION
  
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
        if ((checkedBoxDateAndTime === currentBox.attr('data-day-and-time')) &&
            (checkedBox.attr('name') !== currentBox.attr('name'))) {
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
  
  
  //Validate activity registration
  function validateActivity() {
    if ($('input[type="checkbox"]').is(':checked')) {
        $('fieldset.activities label').css('color', '#000');
        $('.activities legend span').remove();
        $('.activities legend').css('color', '#000');
        return true;
    } else {
        $('fieldset.activities label').css('color', 'red');
        $('.activities legend span').remove();
        $('.activites legend').append('<span> Please select at least one activity.</span>')
        .css('color', 'red');
        return false;
    }
  }
  
  //Event listener for real time 'activity registration' validation
  $('.activities').on('click', function() {
     validateActivity();
  });
  
  //PAYMENT INFO
  
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
        $('#paypal').show();
        $('#bitcoin').hide();
        $('#credit-card').hide();
    } else if ($('[value="Bitcoin"]').is(':selected')) {
        $('#paypal').hide();
        $('#bitcoin').show();
        $('#credit-card').hide();
    }
  });
  
  //Validate credit card number
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
  
  //Event listener for real time 'credit card number' validation
  $('#cc-num').on('keyup', function() {
      validateCreditCardNumber();
  });
  
  
  //Validate zipcode
  function validateZipCode() {
    const regex = /^[0][1-9]\d{4}$|^[1-9]\d{4}$/;
    if ($('#zip').val().length < 5) {
        $('#zip').css('border-color', 'red');
        $('[for="zip"] span').remove();
        $('[for="zip"]').append('<span> The zip code entered is too SHORT. Please enter a valid zip code that is 5 digits long.</span>').css('color','red');
        return false;
    } else if ($('#zip').val().length > 5) {
        $('#zip').css('border-color', 'red');
        $('[for="zip"] span').remove();
        $('[for="zip"]').append('<span> The zip code entered is too LONG. Please enter a valid zip code that is 5 digits long.</span>').css('color','red');
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
  
  //event listener to enable real time 'zipcode' validation.
  $('#zip').on('keyup', function() {
      validateZipCode();
  });
  
  
  //Validate CVV
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
  
  
  //Event listener for real time 'CVV' validation
  $('#cvv').on('keyup', function() {
      validateCVV();
  });
  
  
  //Form validation for 'name', 'email', 'activity', and 'credit card' fields are filled out properly
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