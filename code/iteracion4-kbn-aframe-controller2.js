import { createScene } from './a_scene';
import { createControls } from './a_controls';
    ...
          let escena = createScene();
          let controls = createControls();

          escena.appendChild(controls);
          escena.appendChild(chart);
          this.container.appendChild(escena);