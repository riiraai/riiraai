const scriptURL = 'https://script.google.com/macros/s/AKfycbyU84MJue31s5MXj7gWMPDnGZBrCnHNzBKP9iSSsHijaiEBBBidbVm-5m4mx6I4lk9_jA/exec'
const form = document.forms['testing_form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(data=>{
        console.log(data);
        functionAlert();
        // alert("Thanks For Submitted");
    })
    .catch(err=>console.error(err)); //promise based
})

function functionAlert(msg, myYes) {
    var confirmBox = $("#confirm");
    confirmBox.find(".message").text(msg);
    confirmBox.find(".yes").unbind().click(function() {
       confirmBox.hide();
    });
    confirmBox.find(".yes").click(myYes);
    confirmBox.show();
}

// take body to change the content
const body = document.getElementsByTagName('body');

// stop keyboard shortcuts
window.addEventListener("keydown", (event) => {
    if(event.ctrlKey && (event.key === "S" || event.key === "s")) {
        event.preventDefault();
        body[0].innerHTML = "<span style='font-size:1.2rem'>💔 Sorry, you can't do this. <a style='text-decoration: underline' href='index.html'>Back to Home</a></span>";
    }
    if(event.ctrlKey && (event.key === "C")) {
        event.preventDefault();
        body[0].innerHTML = "<span style='font-size:1.2rem'>💔 Sorry, you can't do this. <a style='text-decoration: underline' href='index.html'>Back to Home</a></span>";
    }
    if(event.ctrlKey && (event.key === "E" || event.key === "e")) {
        event.preventDefault();
        body[0].innerHTML = "<span style='font-size:1.2rem'>💔 Sorry, you can't do this. <a style='text-decoration: underline' href='index.html'>Back to Home</a></span>";
    }
    if(event.ctrlKey && (event.key === "I" || event.key === "i")) {
        event.preventDefault();
        body[0].innerHTML = "<span style='font-size:1.2rem'>💔 Sorry, you can't do this. <a style='text-decoration: underline' href='index.html'>Back to Home</a></span>";
    }
    if(event.ctrlKey && (event.key === "K" || event.key === "k")) {
        event.preventDefault();
        body[0].innerHTML = "<span style='font-size:1.2rem'>💔 Sorry, you can't do this. <a style='text-decoration: underline' href='index.html'>Back to Home</a></span>";
    }
    if(event.ctrlKey && (event.key === "U" || event.key === "u")) {
        event.preventDefault();
        body[0].innerHTML = "<span style='font-size:1.2rem'>💔 Sorry, you can't do this. <a style='text-decoration: underline' href='index.html'>Back to Home</a></span>";
    }
});

// stop right click
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});