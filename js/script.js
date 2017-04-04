function valid_submit( error_id){
    var x = document.getElementById('mail').value;

    if (x == '') {
        document.getElementById(error_id).innerHTML = 'This field is required!';
    } else {
        mail_address();
    }
}

function mail_address() {
    var x = document.getElementById('mail').value;
    if( x.indexOf('@') < 2 
        || x.indexOf('@') != x.lastIndexOf('@') 
        || x.lastIndexOf('.') > (x.length - 3) 
        || x.lastIndexOf('.') < (x.indexOf('@') + 3)
    ){
        document.getElementsByClassName('validator')[0].innerHTML = 'Invalid address!';
    } else { 
        document.getElementsByClassName('validator')[0].innerHTML = '';
    }
}

function valid_form(){
    var email = document.getElementById('email').value;
    var name = document.getElementById('text').value;
    var message = document.getElementById('message').value;

    if (name == '') {
        document.getElementById('error_text').innerHTML = 'This field is required!';
    }

    if (email == '') {
        document.getElementById('error_email').innerHTML = 'This field is required!';
    } else {
        valid_email();
    }

    if (message == '') {
        document.getElementById('error_message').innerHTML = 'This field is required!';
    }
}

function valid_name() {
    var name = document.getElementById('text').value;
    var re = /^[A-Za-z]+$/;
    if( name.length < 3 
        || !re.test(name)) {
        document.getElementById('error_text').innerHTML = 'Invalid Name!';
        document.getElementById('text').style.border = "2px solid red";
    } else {
        document.getElementById('error_text').innerHTML = '';
        document.getElementById('text').style.border = "none";
    }
}

function valid_email() {
    var x = document.getElementById('email').value;
    if( x.indexOf('@') < 2 
        || x.indexOf('@') != x.lastIndexOf('@') 
        || x.lastIndexOf('.') > (x.length - 3) 
        || x.lastIndexOf('.') < (x.indexOf('@') + 3)
    ){
        document.getElementById('email').style.border = "2px solid red";
        document.getElementById('error_email').innerHTML = 'Invalid address!';
    } else {
        document.getElementById('error_email').innerHTML = '';
        document.getElementById('email').style.border = "none";
        
    }
}

function valid_message() {
    var message = document.getElementById('message').value;
    if(message.length < 5){
        document.getElementById('error_message').innerHTML = 'Must have at least 5 characters!';
        document.getElementById('message').style.border = "2px solid red";
    } else {
        document.getElementById('error_message').innerHTML = '';
        document.getElementById('message').style.border = "none";
    }
}