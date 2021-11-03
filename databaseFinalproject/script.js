function onButtonClick(){
    document.getElementById('textInput').style.display='block';
    document.getElementById('newbtn').style.display='none';
}

function onButtonClickk(){
    document.getElementById('textInput').style.display='none';
    document.getElementById('newbtn').style.display='block';
    document.getElementById('textBox').value = "";
}

let submittButton = document.getElementById("btnsub")

submittButton.addEventListener("click",()=> {
    alert("The Document Has Been Submitted");
});

