function ListOfStaff() {
  (this.staffs = []),
    (this.addStaff = function (staff) {
      this.staffs.push(staff);
    }),
    (this.lookForIndexAccount = function (account) {
      var index = -1;
      for (var i = 0; i < this.staffs.length; i++) {
        if (account === this.staffs[i].account) {
          index = i;
          break;
        }
      }
      return index;
    }),
    (this.getStafInfo = function (account) {
      var index = this.lookForIndexAccount(account);
      if (index !== -1) {
        return this.staffs[index];
      }
    }),
    (this.toUpdateStaff = function (newStaff) {
      var index = this.lookForIndexAccount(newStaff.account);
      if (this.staffs[index] !== -1) {
        this.staffs[index] = newStaff;
      }
    }),
    (this.deleteStaff = function (account) {
      var index = this.lookForIndexAccount(account);
      if (index !== -1) {
        this.staffs.splice(index, 1);
      }
    });
  this.searchingStaff = function (name) {
    var results = [];
    for (var i = 0; i < this.staffs.length; i++) {
      if (
        this.staffs[i].name.toLowerCase().indexOf(name.toLowerCase()) !== -1
      ) {
        results.push(this.staffs[i]);
      }
    }
    return results;
  };
}
