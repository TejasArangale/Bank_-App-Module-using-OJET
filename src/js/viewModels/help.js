define(['knockout'], function (ko) {

  function HelpViewModel() {
    this.connected = () => {
      document.title = "Help";
    };
  }

  return HelpViewModel;
});
