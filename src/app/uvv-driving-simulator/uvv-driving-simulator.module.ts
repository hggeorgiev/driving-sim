import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UvvDrivingSimulatorComponent} from "./uvv-driving-simulator.component";
import {SpeedSelectorComponent} from "./speed-selector/speed-selector.component";
import {MentalStateSelectorComponent} from "./mental-state-selector/mental-state-selector.component";
import {RoadConditionSelectorComponent} from "./road-condition-selector/road-condition-selector.component";
import {SimulatorSceneComponent} from "./simulator-scene/simulator-scene.component";
import {SceneStatusBarComponent} from "./scene-status-bar/scene-status-bar.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    UvvDrivingSimulatorComponent,
    SpeedSelectorComponent,
    MentalStateSelectorComponent,
    RoadConditionSelectorComponent,
    SimulatorSceneComponent,
    SceneStatusBarComponent,
  ],
  exports: [
    UvvDrivingSimulatorComponent,
    SpeedSelectorComponent,
    MentalStateSelectorComponent,
    RoadConditionSelectorComponent,
    SimulatorSceneComponent,
    SceneStatusBarComponent,
  ],
  imports: [
    FormsModule,
    CommonModule
  ]
})
export class UvvDrivingSimulatorModule { }

