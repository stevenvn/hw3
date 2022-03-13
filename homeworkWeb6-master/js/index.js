var listOfStaff = new ListOfStaff();
getLocalStorage();
function getEle(id) {
  return document.getElementById(id);
}

function getUserInputData() {
  var account = getEle("tknv").value;
  var name = getEle("name").value;
  var email = getEle("email").value;
  var password = getEle("password").value;
  var date = getEle("datepicker").value;
  var wage = getEle("luongCB").value;
  var position = getEle("chucvu").value;
  var hours = getEle("gioLam").value;

  var staff = new Staff(
    account,
    name,
    email,
    password,
    date,
    wage,
    position,
    hours
  );
  staff.toCalculatePay();
  staff.toEvaluateRank();
  return staff;
}
function setLocalStorage() {
  //JSON stringify convert JavaScrit object or value to a JSON string
  var arrString = JSON.stringify(listOfStaff.staffs);
  console.log("array", arrString);

  localStorage.setItem("staffs", arrString);
  console.log("array", arrString);
}

function createTable(arr) {
  getEle("tableDanhSach").innerHTML = "";
  console.log("arr", arr);
  for (var i = 0; i < arr.length; i++) {
    //create html tr
    var tagTr = document.createElement("tr");
    // create td tags
    var accountTdTag = document.createElement("td");
    var nameTdTag = document.createElement("td");
    var emailTdTag = document.createElement("td");
    var dateTdTag = document.createElement("td");
    var positionTdTag = document.createElement("td");
    var monthlyWageTdTag = document.createElement("td");
    var rankTdTag = document.createElement("td");
    var btnUpdateTdTag = document.createElement("td");
    var btnDeleteTdTag = document.createElement("td");
    //assign value to td tags
    console.log("arr data", i);
    accountTdTag.innerHTML = arr[i].account;
    nameTdTag.innerHTML = arr[i].name;
    emailTdTag.innerHTML = arr[i].email;
    dateTdTag.innerHTML = arr[i].date;
    positionTdTag.innerHTML = arr[i].position;
    monthlyWageTdTag.innerHTML = arr[i].payCheck;
    rankTdTag.innerHTML = arr[i].rank;

    btnUpdateTdTag.innerHTML =
      '<button data-toggle="modal" data-target="#myModal" class="btn btn-primary" onclick="updateStaff(\'' +
      arr[i].account +
      "')\">Update</button>";
    btnDeleteTdTag.innerHTML =
      '<btn class="btn btn-danger" onclick="deleteStaff(\'' +
      arr[i].account +
      "')\">Delete</button>";
    //append td tags to tr tag
    tagTr.appendChild(accountTdTag);
    tagTr.appendChild(nameTdTag);
    tagTr.appendChild(emailTdTag);
    tagTr.appendChild(dateTdTag);
    tagTr.appendChild(positionTdTag);
    tagTr.appendChild(monthlyWageTdTag);
    tagTr.appendChild(rankTdTag);
    tagTr.appendChild(btnUpdateTdTag);
    tagTr.appendChild(btnDeleteTdTag);
    //append tr tag to body
    getEle("tableDanhSach").appendChild(tagTr);
  }
}
function getLocalStorage() {
  if (localStorage.getItem("staffs")) {
    var data = localStorage.getItem("staffs");
    listOfStaff.staffs = JSON.parse(data);
    console.log("staffs", listOfStaff.staffs);
    createTable(listOfStaff.staffs);
  }
}
getEle("btnThem").addEventListener("click", function () {
  getEle("tknv").value = "";
  getEle("name").value = "";
  getEle("email").value = "";
  getEle("password").value = "";
  getEle("datepicker").value = "";
  getEle("luongCB").value = "";
  getEle("chucvu").value = "";
  getEle("gioLam").value = "";
});
getEle("btnThemNV").addEventListener("click", function () {
  var staff = getUserInputData();
  listOfStaff.addStaff(staff);
  setLocalStorage();
  createTable(listOfStaff.staffs);
  console.log("abd");
});
function deleteStaff(account) {
  listOfStaff.deleteStaff(account);
  setLocalStorage();
  createTable(listOfStaff.staffs);
}
function updateStaff(account) {
  var index = listOfStaff.lookForIndexAccount(account);
  //get current staff's info
  var account = listOfStaff.staffs[index].account;
  var name = listOfStaff.staffs[index].name;
  var email = listOfStaff.staffs[index].email;
  var password = listOfStaff.staffs[index].password;
  var date = listOfStaff.staffs[index].date;
  var wage = listOfStaff.staffs[index].wage;
  var position = listOfStaff.staffs[index].position;
  var hours = listOfStaff.staffs[index].hours;
  //reflect staff's info into form
  getEle("tknv").value = account;
  getEle("name").value = name;
  getEle("email").value = email;
  getEle("password").value = password;
  getEle("datepicker").value = date;
  getEle("luongCB").value = wage;
  getEle("chucvu").value = position;
  getEle("gioLam").value = hours;
  //disable account input
  getEle("tknv").setAttribute("disabled", "");
  //update staff info
  getEle("btnCapNhat").addEventListener("click", function () {
    var updatedStaff = getUserInputData();
    listOfStaff.toUpdateStaff(updatedStaff);
    //remove disable attribute
    getEle("tknv").removeAttribute("disabled");
    setLocalStorage();
    createTable(listOfStaff.staffs);
    console.log("staffs", listOfStaff);
  });
}
