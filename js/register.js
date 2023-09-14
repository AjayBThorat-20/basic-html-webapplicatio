function writeCookie() {
    if (document.form.Name.value == "") {
        alert("Enter your name..!");
    }
    if (document.form.Gender.value == "TRUE") {
        alert("Enter your gender..!");
    }
    if (document.form.Location.value == "") {
        alert("Enter your location..!");
    }
    if (document.form.Birthday.value == "") {
        alert("Enter your birthday..!");
    }
    if (document.form.Email.value == "") {
        alert("Enter your email..!");
    }
    if (document.form.Password.value == "") {
        alert("Enter your password..!");
    }
    if (document.form.C_password.value == "") {
        alert("Enter your c_password..!");
    } 
    cookienamevalue = escape(document.form.Name.value);
    cookiegendervalue = escape(document.form.Gender.value);
    cookielocationvalue = escape(document.form.Location.value);
    cookiebirthdayvalue = escape(document.form.Birthday.value);
    cookieemailvalue = escape(document.form.Email.value);
    cookiepasswordvalue = escape(document.form.Password.value);
    cookiec_passwordvalue = escape(document.form.C_password.value);
    document.write("<br> setting Cookies : " + "Name = " +
        cookienamevalue);
    document.write("<br> setiing Cookies : " + "Gender = " +
        cookiegendervalue);
    document.write("<br> setiing Cookies : " + "Location = " +
        cookielocationvalue);
    document.write("<br> setiing Cookies : " + "birthdate = " +
        cookiebirthdayvalue);
    document.write("<br> setiing Cookies : " + "Email = " +
        cookieemailvalue);
    document.write("<br> setiing Cookies : " + "Password = " +
        cookiepasswordvalue);
    document.write("<br> setiing Cookies : " + "Confirm password = " +
        cookiec_passwordvalue);

}