// JavaScript source code

// section services 

function mOver(obj) {
    obj.style.width = "22rem"
    obj.style.height = "13rem"
}

function mOut(obj) {
    obj.style.width = "20rem"
    obj.style.height = "12rem"
}


// validate form
function validateForm() {
    const inp = [];
    let empty = 0;

    inp[0] = document.forms["myForm"]["name"].value;
    inp[1] = document.forms["myForm"]["phone"].value;
    inp[2] = document.forms["myForm"]["email"].value;
    inp[3] = document.forms["myForm"]["number of Attendees"].value;
    inp[4] = document.forms["myForm"]["date"].value;
    inp[5] = document.forms["myForm"]["time"].value;

    function checkInput(value) {

        if (value == "") {
            empty++;
        }
    }

    inp.forEach(checkInput);

    if (empty) {
        alert("The form must be filled out completely");
        return false;
    }
    else {
        alert("Your reservation has been successfully made");
        return true;
    }
}