

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
// Date Fields
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