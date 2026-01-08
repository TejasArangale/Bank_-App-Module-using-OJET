
  /**
 * @license
 * Copyright (c) 2014, 2025, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * @ignore
 */
/*
 * Incidents ViewModel
 */



 

define(["require", "exports", "knockout", "ojs/ojbootstrap", "ojs/ojknockout", "ojs/ojinputtext", "ojs/ojlabel", "ojs/ojbutton", "ojs/ojformlayout"], function (require, exports, ko, Bootstrap) {
      "use strict";
      
      class DemoModel {
          constructor() {
              this.error = [{ summary: 'summary', detail: 'detail', severity: 'error' }];
              this.warning = [{ summary: 'summary', detail: 'detail', severity: 'warning' }];
              this.info = [{ summary: 'summary', detail: 'detail', severity: 'info' }];
              this.confirmation = [{ summary: 'summary', detail: 'detail', severity: 'confirmation' }];
              this.value = ko.observable('');
              this.rawValue = ko.observable('');
          }
      }
      Bootstrap.whenDocumentReady().then(() => {
          ko.applyBindings(new DemoModel(), document.getElementById('div1'));
      });
  });
