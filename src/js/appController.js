/**
 * @license
 * Copyright (c) 2014, 2025, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * https://oss.oracle.com/licenses/upl/
 * @ignore
 */

define([
  'knockout',
  'ojs/ojcontext',
  'ojs/ojmodule-element-utils',
  'ojs/ojresponsiveutils',
  'ojs/ojresponsiveknockoututils',
  'ojs/ojcorerouter',
  'ojs/ojmodulerouter-adapter',
  'ojs/ojknockoutrouteradapter',
  'ojs/ojurlparamadapter',
  'ojs/ojarraydataprovider',
  'ojs/ojknockouttemplateutils',
  'ojs/ojmodule-element',
  'ojs/ojknockout'
], function (
  ko,
  Context,
  moduleUtils,
  ResponsiveUtils,
  ResponsiveKnockoutUtils,
  CoreRouter,
  ModuleRouterAdapter,
  KnockoutRouterAdapter,
  UrlParamAdapter,
  ArrayDataProvider,
  KnockoutTemplateUtils
) {

  function ControllerViewModel() {

    this.KnockoutTemplateUtils = KnockoutTemplateUtils;

    // Accessibility announcements
    this.manner = ko.observable('polite');
    this.message = ko.observable();

    announcementHandler = (event) => {
      this.message(event.detail.message);
      this.manner(event.detail.manner);
    };

    document.getElementById('globalBody')
      .addEventListener('announce', announcementHandler, false);

    // Responsive
    const smQuery = ResponsiveUtils.getFrameworkQuery(
      ResponsiveUtils.FRAMEWORK_QUERY_KEY.SM_ONLY
    );
    this.smScreen = ResponsiveKnockoutUtils.createMediaQueryObservable(smQuery);

    // ------------------------------------------
    // ⭐ ROUTES AREA (Your updated navigation)
    // ------------------------------------------
    let navData = [
      { path: '', redirect: 'dashboard' },
      { path: 'dashboard', detail: { label: 'Dashboard', iconClass: 'oj-ux-ico-bar-chart' } },
      { path: 'incidents', detail: { label: 'Incidents', iconClass: 'oj-ux-ico-fire' } },
      { path: 'customers', detail: { label: 'Customers', iconClass: 'oj-ux-ico-contact-group' } },
      { path: 'about', detail: { label: 'About', iconClass: 'oj-ux-ico-information-s' } },

      // ⭐ ADDED NEW ROUTES HERE
      { path: 'preferences', detail: { label: 'Preferences', iconClass: 'oj-ux-ico-settings' } },
      { path: 'help', detail: { label: 'Help', iconClass: 'oj-ux-ico-help' } }
      // ⭐ END OF NEW ROUTES
    ];

    // Router setup
    let router = new CoreRouter(navData, {
      urlAdapter: new UrlParamAdapter()
    });
    router.sync();

    this.moduleAdapter = new ModuleRouterAdapter(router);
    this.selection = new KnockoutRouterAdapter(router);

    this.navDataProvider = new ArrayDataProvider(navData.slice(1), {
      keyAttributes: "path"
    });

    // Header info
    this.appName = ko.observable("Accrevent Bank App");
    this.userLogin = ko.observable("john.hancock@oracle.com");

    // -------------------------------------------
    // ⭐ HANDLE MENU CLICKS FOR ROUTING
    // -------------------------------------------
    this.handleUserMenuAction = (event) => {
      const selected = event.detail.value;

      switch (selected) {
        case "preferences":
          router.go({ path: "preferences" });
          break;

        case "help":
          router.go({ path: "help" });
          break;

        case "about":
          router.go({ path: "about" });
          break;

        case "signout":
          alert("Signing out...");
          break;
      }
    };
    // ⭐ END OF NEW HANDLER

    // Footer links
    this.footerLinks = [
      { name: 'About Oracle', linkId: 'aboutOracle', linkTarget: 'http://www.oracle.com/us/corporate/index.html#menu-about' },
      { name: "Contact Us", id: "contactUs", linkTarget: "http://www.oracle.com/us/corporate/contact/index.html" },
      { name: "Legal Notices", id: "legalNotices", linkTarget: "http://www.oracle.com/us/legal/index.html" },
      { name: "Terms Of Use", id: "termsOfUse", linkTarget: "http://www.oracle.com/us/legal/terms/index.html" },
      { name: "Your Privacy Rights", id: "yourPrivacyRights", linkTarget: "http://www.oracle.com/us/legal/privacy/index.html" },
    ];
  }

  Context.getPageContext().getBusyContext().applicationBootstrapComplete();

  return new ControllerViewModel();
});
