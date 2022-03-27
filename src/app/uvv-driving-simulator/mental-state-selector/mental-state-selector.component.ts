import { MentalState } from '../uvv-driving-simulator.types';
import {Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
  selector: 'mental-state-selector',
  templateUrl: 'mental-state-selector.html',
})
export class MentalStateSelectorComponent {
  @Input() state: MentalState | undefined;
  @Output() onChange = new EventEmitter()
    public stateOptions = [MentalState.WATCHFUL, MentalState.SLIGHTLY_DISTRACTED, MentalState.DISTRACTED];
    public stateOptionsMap = {
        [MentalState.WATCHFUL]: 'Watchful',
        [MentalState.SLIGHTLY_DISTRACTED]: 'Slightly distracted',
        [MentalState.DISTRACTED]: 'Distracted'
    };
}
