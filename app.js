const radio = document.getElementById("radio-container");
const submitButton = document.getElementById("submit-button");
const message = document.getElementById("message");
const inputStyle = document.getElementById("input-style");
const required = document.querySelectorAll(".required");

message.style.display = 'none';

required.forEach(item => {
    item.style.display = "none";
})

radio.addEventListener("click", () => {
    toggleSelection()
})

function toggleSelection(radio) {
    document.querySelectorAll('.radio-container').forEach(label => {
        label.classList.remove('selected');
    });

    if (radio.checked) {
        radio.closest('.radio-container').classList.add('selected');
    }
}

submitButton.addEventListener("click", () => {
    if(inputStyle.value.trim() === "") {
        required.forEach(item => {
            item.style.display = "";
        })
    } else {
        message.style.display = ""
    }
})