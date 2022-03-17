function Validation() {
  (this.checkEmpty = function (inputValue, divId, msg) {
    if (inputValue.trim() === "") {
      getEle(divId).innerHTML = msg;
      getEle(divId).style.display = "block";
      return false;
    } else {
      getEle(divId).innerHTML = "";
      getEle(divId).style.display = "none";
      return true;
    }
  }),
    (this.checkEmailFormat = function (inputValue, divId, msg) {
      if (inputValue.includes("@")) {
        getEle(divId).innerHTML = "";
        getEle(divId).style.display = "none";
        return true;
      } else {
        getEle(divId).innerHTML = msg;
        getEle(divId).style.display = "block";
        return false;
      }
    });
}
