define(['knockout', 'ojs/ojcontext'], function (ko, Context) {
    
  function PreferencesViewModel() {
    this.connected = () => {
      document.title = "Preferences";
    };
  }

  return PreferencesViewModel;
});
