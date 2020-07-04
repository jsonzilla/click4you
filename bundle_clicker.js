 
function in_bundle() {
    return window.location.href.indexOf("bundle") >= 0;
}

function in_download() {
    return window.location.href.indexOf("download") >= 0;
}

function run_change() {
    if (in_bundle()) {
        buttonsToClick = Array.from(document.getElementsByClassName("button")).filter(n => n.value=="claim")
        if (buttonsToClick.length > 0) {

            history.pushState({}, "page", window.location.href)
            buttonsToClick[0].click()
        }
        else {
            nexts = Array.from(document.getElementsByClassName("icon-arrow-right"))
            if (nexts.length > 0) {
                nexts[0].click()
            }
        }
    }
    else if (in_download()) {
        window.history.go(-1);
    }
}

run_change();
(function loop(i) {          
    setTimeout(function () { ;  
       run_change();
       if (--i) loop(i); 
    }, 50000)
})(30);  