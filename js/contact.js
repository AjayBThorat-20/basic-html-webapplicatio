function writeCookie() {
    if (document.form.Name.value == "") {
        alert("Enter your name..!");
    }
    if (document.form.Contact.value == "") {
        alert("Enter your contact..!");
    }
    if (document.form.Email.value == "") {
        alert("Enter your email..!");
    }
    if (document.form.Message.value == "") {
        alert("type your Message..!");
    } 
    cookienamevalue = escape(document.form.Name.value);
    cookieemailvalue = escape(document.form.Email.value);
    cookiecontactvalue = escape(document.form.Contact.value);
    cookiemessagevalue = escape(document.form.Message.value);
    document.write("<br> setting Cookies : " + "Name = " +
        cookienamevalue);
    document.write("<br> setiing Cookies : " + "Contact = " +
        cookiecontactvalue);
    document.write("<br> setiing Cookies : " + "Email = " +
        cookieemailvalue);
    document.write("<br> setiing Cookies : " + "Message = " +
        cookiemessagevalue);

}