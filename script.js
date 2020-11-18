function handleChange(checkbox) {
    if(checkbox.checked == true) {
        document.getElementById("waiverBtn").removeAttribute("disabled");
    }else{
        document.getElementById("waiverBtn").setAttribute("disabled", "disabled");
    }
}