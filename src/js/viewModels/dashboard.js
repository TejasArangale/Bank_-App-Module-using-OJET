/**
 * @license
 * Copyright...
 */

define([
  'knockout',
  'ojs/ojknockout',
  'ojs/ojaccordion',
  'ojs/ojradioset',
  'ojs/ojlabel',
  '../accUtils'
], function(ko, ojknockout, ojaccordion, ojradioset, ojlabel, accUtils) {

  function DashboardViewModel() {

    this.connected = function() {
      accUtils.announce('Dashboard page loaded.');
      document.title = "Dashboard";
    };

    this.disconnected = function() {};

    this.transitionCompleted = function() {};
  }

  return DashboardViewModel;
});
