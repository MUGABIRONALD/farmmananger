

// INITIALISING...
// Produce form
let pdtNameField = document.querySelector("#pdt-name");
let byrNameField = document.querySelector("#dlr-name");
let pdTypeField = document.querySelector("#pd-type");
let pdTimeField = document.querySelector("#pd-time");
let dlrTypeField = document.querySelector("#dlr-type");
let ptelNoField = document.querySelector("#ptel-no");
// Sales form
let spdtNameField = document.querySelector("#spdt-name");
let sbyrNameField = document.querySelector("#byr-name");
let agtNameField = document.querySelector("#agt-name");
// Credit Sales form
let cbyrNameField = document.querySelector("#cbyr-name");
let ninField = document.querySelector("#ni-num");
let locField = document.querySelector("#loc-field");
let cpdTypeField = document.querySelector("#cpd-type");
let cpdtNameField = document.querySelector("#cprod-name");
let cagtNameField = document.querySelector("#cagt-name");
let ctelNoField = document.querySelector("#ctel-no");
// Users Form
let fNameField = document.querySelector("#first-name");
let lNameField = document.querySelector("#last-name");
let telNoField = document.querySelector("#tel-no");
let posField = document.querySelector("#pos-field");
let brField = document.querySelector("#branchfield");
let pwdField = document.querySelector("#pwd");
let pwdConField = document.querySelector("#pwd-conf");
// Date Fields
let procdate = document.produce.procdate;
let saledate = document.sales.saledate;
let disdate = document.csales.disdate;

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

// DATE FILL-IN
const getDate = (field) => {
  let currentDate = new Date();
  let dd = currentDate.getDate();
  let mm = currentDate.getMonth() + 1;
  let yyyy = currentDate.getFullYear();
  field.value = "";
  field.value = `${dd}/${mm}/${yyyy}`;
};
const getTime = () => {
  let time = document.sales.saletime
  let currentTime = new Date();
  let hh = currentTime.getHours();
  let mm = currentTime.getMinutes();
  time.value = `${hh}:${mm}`;
};

// PROCUREMENT FORM
// Validating Produce Name
const pdtVal = () => {
  let pdtName = document.produce.prodname;
  if (pdtName.value.match(alpnum)) {
    return true;
  } else {
    pdtName.focus();
    pdtName.style.border = bdrStyle;
    errDiv.textContent = `Name must be made of alphanumeric characters.`;
    pdtNameField.appendChild(errDiv);
  }
};
// Product Time
const timeVal = () => {
  let time = document.produce.prodtime;
  if (time.value == "") {
    time.focus();
    time.style.border = "2px red solid";
    errDiv.textContent = "You must choose an option.";
    pdTimeField.appendChild(errDiv);
    return false;
  }
  return true;
};
// Product Type
const typeVal = () => {
  let type = document.produce.prodtype;
  if (type.value == "") {
    type.focus();
    type.style.border = "2px red solid";
    errDiv.textContent = "You must choose an option.";
    pdTypeField.appendChild(errDiv);
    return false;
  }
  return true;
};
// Dealer Type
const dlrTypeVal = () => {
  let type = document.produce.dlrtype;
  if (type.value == "") {
    type.focus();
    type.style.border = "2px red solid";
    errDiv.textContent = "You must choose an option.";
    dlrTypeField.appendChild(errDiv);
    return false;
  }
  return true;
};

// Validating Dealer's Name
const dlrVal = (min) => {
  let byrName = document.produce.dlrname;
  if (byrName.value.match(alpnum) && byrName.value.length > 2) {
    return true;
  } else {
    byrName.focus();
    byrName.style.border = bdrStyle;
    errDiv.textContent = `Name must be made of more than ${min} alphanumeric characters.`;
    byrNameField.appendChild(errDiv);
    return false;
  }
};
// Validating Contact field.
const ptelNoVal = () => {
  let tel = document.produce.telno;
  let teLen = tel.value.length;

  if (teLen == 10 && tel.value.match(num)) {
    return true;
  } else {
    tel.style.border = bdrStyle;
    tel.focus();
    errDiv.textContent = "Format: 0701234567";
    ptelNoField.appendChild(errDiv);
    return false;
  }
};

// SALES FORM
// Validating Produce Name
const spdtVal = () => {
  let pdtName = document.sales.prodname;
  if (pdtName.value.match(alpnum)) {
    return true;
  } else {
    pdtName.focus();
    pdtName.style.border = bdrStyle;
    errDiv.textContent = `Name must be made of alphanumeric characters.`;
    spdtNameField.appendChild(errDiv);
  }
};
// Buyer's Name
const byrVal = (min) => {
  let byrName = document.sales.byrname;
  if (byrName.value.match(alpnum) && byrName.value.length > 2) {
    return true;
  } else {
    byrName.focus();
    byrName.style.border = bdrStyle;
    errDiv.textContent = `Name must be made of more than ${min} alphanumeric characters.`;
    sbyrNameField.appendChild(errDiv);
    return false;
  }
};
// Agent's Name
const agtVal = (min) => {
  let agtName = document.sales.agtname;
  if (agtName.value.match(alpnum) && agtName.value.length > 2) {
    return true;
  } else {
    agtName.focus();
    agtName.style.border = bdrStyle;
    errDiv.textContent = `Name must be made of more than ${min} alphanumeric characters.`;
    agtNameField.appendChild(errDiv);
    return false;
  }
};

// CREDIT SALES FORM
// Buyer's Name
const cbyrVal = (min) => {
  let byrName = document.csales.byrname;
  if (byrName.value.match(alpnum) && byrName.value.length > min) {
    return true;
  } else {
    byrName.focus();
    byrName.style.border = bdrStyle;
    errDiv.textContent = `Name must be made of more than ${min} alphanumeric characters.`;
    cbyrNameField.appendChild(errDiv);
    return false;
  }
};
// NIN Validation
const ninVal = () => {
  let nin = document.csales.nin;
  if (nin.value.match(ninExp) && nin.value.length === 14) {
    return true;
  } else {
    nin.focus();
    nin.style.border = bdrStyle;
    errDiv.textContent = `NIN is of 14 characters (numbers and capital letters).`;
    ninField.appendChild(errDiv);
    return false;
  }
};
// Location Validation
const locVal = (min) => {
  let location = document.csales.location;
  if (location.value.match(alpnum) && location.value.length > 2) {
    return true;
  } else {
    location.focus();
    location.style.border = bdrStyle;
    errDiv.textContent = `Location must be made of more than ${min} alphanumeric characters.`;
    locField.appendChild(errDiv);
    return false;
  }
};
// Validating Contact field.
const ctelNoVal = () => {
  let tel = document.csales.telno;
  let teLen = tel.value.length;

  if (teLen == 10 && tel.value.match(num)) {
    return true;
  } else {
    tel.style.border = bdrStyle;
    tel.focus();
    errDiv.textContent = "Format: 0701234567";
    ctelNoField.appendChild(errDiv);
    return false;
  }
};
// Produce Type Validation
const pdTypeVal = () => {
  let type = document.csales.pdtype;
  if (type.value == "") {
    type.focus();
    type.style.border = "2px red solid";
    errDiv.textContent = "You must choose an option.";
    cpdTypeField.appendChild(errDiv);
    return false;
  }
  return true;
};
// Produce Name Validation
const cpdtVal = (min) => {
  let pdtName = document.csales.prodname;
  if (pdtName.value.match(alpnum) && pdtName.value.length > min) {
    return true;
  } else {
    pdtName.focus();
    pdtName.style.border = bdrStyle;
    errDiv.textContent = `Name must be made of more than ${min} alphanumeric characters.`;
    cpdtNameField.appendChild(errDiv);
  }
};
// Sales Agent's Name Validation
const cagtVal = (min) => {
  let agtName = document.csales.agtname;
  if (agtName.value.match(alpnum) && agtName.value.length > min) {
    return true;
  } else {
    agtName.focus();
    agtName.style.border = bdrStyle;
    errDiv.textContent = `Name must be made of more than ${min} alphanumeric characters.`;
    cagtNameField.appendChild(errDiv);
    return false;
  }
};

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