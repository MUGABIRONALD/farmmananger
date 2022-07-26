
let fNameField = document.querySelector("#first-name");
let lNameField = document.querySelector("#last-name");
let roleField = document.querySelector('#user-role')
let telNoField = document.querySelector("#tel-no");
let posField = document.querySelector("#pos-field");
let brField = document.querySelector("#user-branch");
let pwdField = document.querySelector("#pwd");
let pwdConField = document.querySelector("#pwd-conf");

// Regexp
let letters = /^[A-Za-z]+$/;
let num = /^[0-9]+$/;
let alpnum = /^[a-zA-Z0-9-.,]+$/;
let ninExp = /^[A-Z0-9]+$/;

// Create Element
let errDiv = document.createElement("p");

// Style Element
errDiv.style.color = "red";
errDiv.style.fontSize = "13px";
const bdrStyle = "2px solid red";

// USERS VALIDATION
// First Name Validation.
const fNameVal = (min, max) => {
  let fstName = document.register.firstname;
  let fNameLen = fstName.value.length;

  if (fNameLen == 0) {
    fstName.focus();
    fstName.style.border = bdrStyle;
    errDiv.textContent = "Field must not be left empty.";
    fNameField.appendChild(errDiv);
  } else if (fNameLen < min || fNameLen > max) {
    fstName.focus();
    fstName.style.border = bdrStyle;
    errDiv.textContent = `Name must be between ${min} and ${max} characters.`;
    fNameField.appendChild(errDiv);
  } else if (!fstName.value.match(letters)) {
    fstName.focus();
    fstName.style.border = bdrStyle;
    errDiv.textContent = `Name must be made of strictly alphabet characters.`;
    fNameField.appendChild(errDiv);
  }
  return false;
};

// Last Name Validation.
const lNameVal = (min, max) => {
  let lstName = document.register.lastname;
  let lNameLen = lstName.value.length;

  if (lNameLen == 0) {
    lstName.focus();
    lstName.style.border = bdrStyle;
    errDiv.textContent = "Field must not be left empty.";
    lNameField.appendChild(errDiv);
  } else if (lNameLen < min || lNameLen > max) {
    lstName.focus();
    lstName.style.border = bdrStyle;
    errDiv.textContent = `Name must be between ${min} and ${max} characters.`;
    lNameField.appendChild(errDiv);
  } else if (!lstName.value.match(letters)) {
    lstName.focus();
    lstName.style.border = bdrStyle;
    errDiv.textContent = `Name must be made of strictly alphabet characters.`;
    lNameField.appendChild(errDiv);
  }
  return true;
};
// Position Validation
const roleVal = () => {
  let role = document.register.role;
  if (role.value == "") {
    role.focus();
    role.style.border = "2px red solid";
    errDiv.textContent = "You must choose an option.";
    roleField.appendChild(errDiv);
    return false;
  }
  return true;
};
// Branch Validation
const branchVal = () => {
  let branch = document.register.branch;
  if (branch.value == "") {
    branch.focus();
    branch.style.border = "2px red solid";
    errDiv.textContent = "You must choose an option.";
    brField.appendChild(errDiv);
    return false;
  }
  return true;
};
// Validating Contact field.
const telNoVal = () => {
  let tel = document.register.telno;
  let teLen = tel.value.length;

  if (teLen == 10 && tel.value.match(num)) {
    return true;
  } else {
    tel.style.border = bdrStyle;
    tel.focus();
    errDiv.textContent = "Format: 0701234567";
    telNoField.appendChild(errDiv);
    return false;
  }
};
// Password Validation
const pwdVal = (min) => {
  let pwd = document.register.password;
  let pwdLen = pwd.value.length;
  let pwdValue = pwd.value;

  if (pwdLen == 0) {
    pwd.focus();
    pwd.style.border = bdrStyle;
    errDiv.textContent = "Field must not be left empty.";
    pwdField.appendChild(errDiv);
  } else if (pwdLen < min) {
    pwd.focus();
    pwd.style.border = bdrStyle;
    errDiv.textContent = `Password must be more than ${min} characters.`;
    pwdField.appendChild(errDiv);
  }
  return true;
};
// Confirm Password
const confPwd = () => {
  let pwdConf = document.register.passconf;
  let pwdValue = document.register.password.value;

  if (pwdConf.value === pwdValue) {
    return true;
  } else {
    pwdConf.focus();
    pwdConf.style.border = bdrStyle;
    errDiv.textContent = `Passwords don't match.`;
    pwdConField.appendChild(errDiv);
  }
};