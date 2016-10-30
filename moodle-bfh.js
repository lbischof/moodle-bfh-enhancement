if (window.location.pathname == "/"){
    if (document.querySelector(".usermenu .login")) {
        console.log("redirecting to login page");
        window.location.href = "https://moodle.bfh.ch/auth/shibboleth";
    } else {
        console.log("redirecting to dashboard page");
        window.location.href = "https://moodle.bfh.ch/my/";
    }
}
if (window.location.pathname == "/my/"){
    console.log("on dashboard");
    // Hide your own name on the dashboard
    document.querySelector('.page-context-header').style.display = 'none';
}

// Hide empty sections
var emptySections = document.querySelectorAll('.topics .section.main .section:empty');
for (i = 0; i < emptySections.length; i++) {
    emptySections[i].parentElement.parentElement.style.display = 'none'
}

// Don't fix the header
document.querySelector('header').classList.remove('navbar-fixed-top');
// Make the logo link to the dashboard
document.querySelector('.brand').setAttribute("href", "https://moodle.bfh.ch/my/");
