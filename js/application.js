// Wait till the browser is ready to render the game (avoids glitches)
var __warptest2048Booted = false;
function __warptest2048Boot() {
  if (__warptest2048Booted) return;
  __warptest2048Booted = true;
  var manager = new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);

  if (window.location.search.indexOf("warptest=1") !== -1) {
    window.__WARPTEST_2048__ = {
      getState: function () {
        return manager.serialize();
      },
      move: function (direction) {
        return manager.move(direction);
      },
      restart: function () {
        return manager.restart();
      }
    };
  }
}
window.requestAnimationFrame(__warptest2048Boot);
window.setTimeout(__warptest2048Boot, 50);
