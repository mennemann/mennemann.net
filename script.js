const popup = document.getElementById("popup");

popup.addEventListener("click", (e) => {
    if (e.target === popup) popup.close();
});

function show_mail() {
    popup.showModal();
}

function close_popup() {
    popup.close();
}

function copy_input_field(id) {
    const el = document.getElementById(id);
    el.select();
    el.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(el.value);
}

window.onload = () => {
    const birthday = new Date("07/12/2003");

    document.getElementById("age").innerText = Math.abs(new Date(Date.now() - birthday.getTime()).getUTCFullYear() - 1970);
};
