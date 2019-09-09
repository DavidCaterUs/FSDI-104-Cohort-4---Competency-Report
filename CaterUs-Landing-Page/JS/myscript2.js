function sendMail() {
    var link = "mailto:kleibert.diazevoli@gmail.com"
            + escape(document.getElementById('myText').value)
    ;

    window.location.href = link;
}
