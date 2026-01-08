define(['knockout', 'ojs/ojbootstrap', 'ojs/ojknockout', 'oj-c/meter-circle'], 
  function (ko, Bootstrap) {

    function CustomersViewModel() {
      this.balanceUsage = ko.observable(45);      // 45% balance used
      this.monthlySpending = ko.observable(70);   // 70% of monthly budget used
      this.creditUsage = ko.observable(55);       // credit card usage
      this.emiProgress = ko.observable(30);       // EMI cycle progress
      this.savingsGoal = ko.observable(85);       // savings goal completion
    }

    Bootstrap.whenDocumentReady().then(() => {
      ko.applyBindings(new CustomersViewModel(), document.getElementById('gauge-container'));
    });

    return CustomersViewModel;
});
