define(['../constants/hotkeys-ids.js'], function(HOTKEYS) {
  /**
   * get a hotkey combination by hotkey id
   * @param hotkeyId
   * @param callback
   * @private
   */


  // function _getHotkey(hotkeyId, callback) {
  //   overwolf.settings.hotkeys.get(hotkeyId, function(result) {
  //     if (!result || result.status === 'error' || !result.hotkey) {
  //       setTimeout(function() {
  //         _getHotkey(hotkeyId, callback)
  //       }, 2000)
  //     } else {
  //       callback(result.hotkey)
  //     }
  //   })
  // }

function _getHotkey(hotkeyId, gameId, callback) {
		overwolf.settings.hotkeys.get(result => {
			if (result && result.success) {
				if (
					result.games &&
					result.games[gameId] &&
					result.games[gameId].length
				) {
					const hotkey = result.games[gameId].find(hotkey => {
						return (hotkey.name === hotkeyId);
					});

					if (hotkey) {
						callback(hotkey.binding);
						return;
					}
				}

				// callback(null);
			} else {
				setTimeout(() => this._getHotkey(hotkeyId, gameId, callback), 2000);
			}
		});
	}



  /**
   * set custom action for a hotkey id
   * @param hotkeyId
   * @param action
   * @private
   */
  function _setHotkey(hotkeyId, action) {
    overwolf.settings.hotkeys.onPressed.addListener(hotkeyId, function(result) {
      if (result.status === 'success') {
        action()
      } else {
        console.error(`[HOTKEYS SERVICE] failed to register hotkey ${hotkeyId}`)
      }
    })
  }

  function getToggleHotkey() {
    return new Promise((resolve, reject) => {
      _getHotkey(HOTKEYS.TOGGLE, function(result) {
        resolve(result)
      })
    })
  }

  function setToggleHotkey(action) {
    _setHotkey(HOTKEYS.TOGGLE, action)
  }

  function addHotkeyChangeListener(listener) {
    overwolf.settings.hotkeys.onChanged.addListener(listener)
    
  }

  return {
    getToggleHotkey,
    setToggleHotkey,
    addHotkeyChangeListener,
  }
})
