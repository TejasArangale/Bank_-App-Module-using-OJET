define(['../accUtils'], function (accUtils) {
  
  function AboutViewModel() {
    this.connected = () => {
      accUtils.announce('About page loaded.');
      document.title = "About | Accrevent Bank App";
    };
  }

  return AboutViewModel;
});
