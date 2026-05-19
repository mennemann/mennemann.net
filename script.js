const popup = document.getElementById("popup");

function newTab(url) {
    window.open(url, "_blank").focus();
}

function show_mail() {
    popup.style.display = "block";
}

function close_popup() {
    popup.style.display = "none";
}

function copy_input_field(id) {
    el = document.getElementById(id);
    el.select();
    el.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(el.value);
}

function scroll_to_el(id, offset) {
    el = document.getElementById(id);
    window.scrollTo({
        behavior: "smooth",
        top: el.getBoundingClientRect().top - document.body.getBoundingClientRect().top - offset,
    });
}
