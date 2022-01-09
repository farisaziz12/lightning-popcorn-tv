import { Utils, Router } from '@lightningjs/sdk';
import { Menu, InputField, Detail, Dialog } from './widgets';
import routerConfig from './lib/routerConfig.js';
import { Backdrop, AmbientBackground } from './components';

export default class App extends Router.App{
  static getFonts() {
    return [
      { family: 'Regular', url: Utils.asset('fonts/Montserrat-Regular.ttf') },
      { family: 'Medium', url: Utils.asset('fonts/Montserrat-Medium.ttf') },
      { family: 'Bold', url: Utils.asset('fonts/Montserrat-Bold.ttf') },
      { family: 'MediumItalic', url: Utils.asset('fonts/Montserrat-MediumItalic.ttf') }
    ]
  }

  static _template() {
    return {
      Content: { zIndex: 1, rtt: true, w: 1920, h: 1080,
        AmbientBackground: {type: AmbientBackground},
        Backdrop: {type: Backdrop},
        Pages: {
          forceZIndexContext: true
        }
      },
      Loading: {

      },
      Widgets: {
        Menu: {
          type: Menu, visible: true
        },
        InputField: {
          type: InputField, visible: true
        },
        Detail: {
          type: Detail, visible: true
        },
        Dialog: {
          visible: false, type: Dialog, zIndex: 101
        },
      }
    }
  }

  _handleAppClose() {
    const dialog = this.tag('Dialog');
    dialog.open({header: "Closing App?!", message: "Are you sure you want to close the app?", actions: [
        {
            label: 'No',
            action: () => {
                dialog.close();
            }
        },
        {
            label: 'Yes',
            action: () => {
                this.application.closeApp();
            }
        }
    ]});
  }

  $getDetailWidget() {
    return this.tag('Widgets.Detail');
  }

  $getAppContentTexture() {
    return this.tag('Content').getTexture();
  }

  $updateBackdrop(e) {
    this.tag('Backdrop').update(e.id);
  }

  $updateAmbientBackground(e) {
    this.tag('AmbientBackground').update(e.color);
  }

  $hideBackground() {
    this.tag('Content').patch({
      AmbientBackground: {smooth: {alpha: [0, {duration: 0.2, delay: 0.0}]}},
      Backdrop: {smooth: {alpha: [0, {duration: 0.2, delay: 0.0}]}}
    });
  }

  $showBackground() {
    this.tag('Content').patch({
      AmbientBackground: {smooth: {alpha: [1, {duration: 0.2, delay: 0.2}]}},
      Backdrop: {smooth: {alpha: [1, {duration: 0.2, delay: 0.2}]}}
    });
  }

  _setup() {
    Router.startRouter(routerConfig, this);
  }

  static colors() {
    return true;
  }
}
