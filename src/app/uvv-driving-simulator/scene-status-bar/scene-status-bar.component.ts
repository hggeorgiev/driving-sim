import { UvvDrivingSumulatorSceneState } from '../uvv-driving-smulator-scene-state.class';

import './scene-status-bar.scss';
import {Component, Input} from "@angular/core";


@Component({
  selector: 'scene-status-bar',
  templateUrl: 'scene-status-bar.html',
  styleUrls: ['scene-status-bar.scss']
})
export class SceneStatusBarComponent {
    @Input()  scene: UvvDrivingSumulatorSceneState | undefined;
}

