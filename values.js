let log = false;
function checkValue() {
  log = false;
  let input = document.querySelectorAll("input");
  for (let i = 0; i < input.length; i++) {
    let currentEle = document.querySelectorAll("input")[i];
    let currentEleId = document.querySelectorAll("input")[i].getAttribute("id");
    let checkbox = document.querySelector("#terms");
    let content = currentEle.value;
    if (content.length === 0 && currentEleId != null) {
      document.querySelector(".p_" + i).style.color = "red";
      document.querySelector(".p_" + i).textContent =
        currentEleId + " cannot be empty";
        log = true;
        
    } else if (currentEleId != null) {
      document.querySelector(".p_" + i).textContent = "";
      checkPass();
    }
    if (!checkbox.checked) {
      document.querySelector(".p_" + 6).style.color = "red";
      document.querySelector(".p_" + 6).textContent =
      "Please agree to terms and conditions";
      log = true;
    }
  }
  submit();
}

function checkPass() {
  let hasNumber = false;
  let hasUpperCase = false;
  var password = document.querySelector("#Password");
  if (password.value.length == 0) {
    document.querySelector(".p_" + 5).textContent = "Password cannot be empty";
    log = true;
    checkNum();
    return;
  }
  var checker = false;
  for (let i = 0; i < password.value.length; i++) {
    const character = password.value.charAt(i);
    if (!isNaN(character)) {
      hasNumber = true;
    }
    if (character === character.toUpperCase()) {
      hasUpperCase = true;
    }
    if (hasNumber && hasUpperCase) {
      checker = true;

      break;
    }
  }
  if (password.value.length < 8 && password.value.length != 0) {
    document.querySelector(".p_5").textContent =
      "Password must contain at least 8 characters";
        log=true;
  }
 
  if (!checker) {
    document.querySelector(".p_5").textContent =
      "Password must contain at least one number and one capital letter.";
      log=true;
    }
   
    checkNum();
}

function checkNum() {
  var num = document.querySelector("#Number").value;
  if (num.length != 10 &&   num.length != 0) {
    document.querySelector(".p_3").textContent = "Invalid Phone Number";
    log = true;
  } else if (num.length == 0) {
    document.querySelector(".p_3").textContent = "Number cannot be empty";
    log = true;
  }
  checkEmail();

}

function checkEmail() {
  var email = document.querySelector("#Email").value;
  hasA = false;
  hasB = false;
  if (email.length == "") {
    document.querySelector(".p_4").textContent = "Email cannot be empty";
      log = true;
    return;
  }

  for (var i = 0; i < email.length; i++) {
    if (email.charAt(i) == "@") {
      hasA = true;
    }
    if (email.charAt(i) == ".") {
      hasB = true;
    }
  }
  if (!(hasA && hasB)) {
    document.querySelector(".p_4").textContent = "Invalid Email";
      log = true;
    return;
  }
}

function submit() {
  if (!log) {
    var element = document.querySelectorAll("input");
    for (var i = 0; i < element.length; i++) {
      var ele_id = document.querySelectorAll("input")[i].getAttribute("id");
      var content = ele_id + "\t" + document.querySelectorAll("input")[i].value;
      if(ele_id===null){
        continue;
      }
      console.log(content);
    }
    alert("Form submitted successfully");
    location.reload();
  }
}
