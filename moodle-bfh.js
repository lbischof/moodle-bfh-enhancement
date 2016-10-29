if (window.location.pathname == "/"){
    if (document.querySelector(".usermenu .login")) {
        console.log("redirecting to login page");
        window.location.href = "https://moodle.bfh.ch/auth/shibboleth";
    } else {
        console.log("redirecting to dashboard page");
        window.location.href = "https://moodle.bfh.ch/my/";
    }
}
if (window.location.href == "https://moodle.bfh.ch/my/"){
    console.log("on dashboard");
    document.querySelector('.page-context-header').style.display = 'none';
}
document.querySelector('header').classList.remove('navbar-fixed-top');
document.querySelector('.brand').setAttribute("href", "https://moodle.bfh.ch/my/");
