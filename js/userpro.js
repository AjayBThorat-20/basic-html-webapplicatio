function writeCookie() {
    if (document.form.Name.value == "") {
        alert("Enter your name..!");
    }
    if (document.form.Username.value == "") {
        alert("Enter your username..!");
    }
    if (document.form.Email.value == "") {
        alert("Enter your email..!");
    }
    if (document.form.Contact.value == "") {
        alert("Enter your contact..!");
    }
    if (document.form.About.value == "") {
        alert("Enter you info..!");
    } 
    cookienamevalue = escape(document.form.Name.value);
    cookieusernamevalue = escape(document.form.Username.value);
    cookiecontactvalue = escape(document.form.Contact.value);
    cookieemailvalue = escape(document.form.Email.value);
    cookieaboutvalue = escape(document.form.About.value);
    document.write("<br> setting Cookies : " + "Name = " +
        cookienamevalue);
    document.write("<br> setiing Cookies : " + "User Name = " +
        cookieusernamevalue);
    document.write("<br> setiing Cookies : " + "Contact = " +
        cookiecontactvalue);
    document.write("<br> setiing Cookies : " + "Email = " +
        cookieemailvalue);
    document.write("<br> setiing Cookies : " + "Bio = " +
        cookieaboutvalue);

}