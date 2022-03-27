import { UvvDrivingSumulatorSceneState } from '../uvv-driving-smulator-scene-state.class';
import {Component, Input} from "@angular/core";

@Component({
  selector: 'simulator-scene',
  templateUrl: 'simulator-scene.html',
  styleUrls: ['simulator-scene.scss']
})
export  class SimulatorSceneComponent {
    @Input() scene: UvvDrivingSumulatorSceneState | undefined;
}
