function Staff(account, name, email, password, date, wage, position, hours) {
  this.account = account;
  this.name = name;
  this.email = email;
  this.password = password;
  this.date = date;
  this.wage = wage;
  this.position = position;
  this.hours = hours;
  this.payCheck = null;
  this.rank = null;
  this.toCalculatePay = function () {
    return (this.payCheck = this.hours * this.wage);
  };
  this.toEvaluateRank = function () {
    if (this.hours >= 40) {
      return (this.rank = "hard-working");
    } else if (this.hours > 20 && this.hours < 40) {
      return (this.rank = "moderate");
    } else {
      return (this.rank = "should work harder");
    }
  };
}
