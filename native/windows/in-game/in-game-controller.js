define([
  '../../windows/in-game/in-game-view.js',
  '../../scripts/services/hotkeys-service.js'
], function (
  InGameView,
  HotkeysService
  ) {

  class InGameController {

    constructor() {
      this.inGameView = new InGameView();
      this._updateHotkey = this._updateHotkey.bind(this);
    }

    run() {
      // listen to events from the event bus from the main window,
      // the callback will be run in the context of the current window
      let mainWindow = overwolf.windows.getMainWindow();
      mainWindow.ow_eventBus.addListener(this._eventListener);

      // Update hotkey view and listen to changes:
      this._updateHotkey();
      HotkeysService.addHotkeyChangeListener(this._updateHotkey);
    }

    async _updateHotkey() {
      const hotkey = await HotkeysService.getToggleHotkey();
      this.inGameView.updateHotkey(hotkey);
    }

    _eventListener(eventName, data) {
      switch (eventName) {
        case 'event': {
          break;
        }
        case 'info': {
          this._infoUpdateHandler(data);
          break;
        }
      }
    }
  }
  return InGameController;
});
