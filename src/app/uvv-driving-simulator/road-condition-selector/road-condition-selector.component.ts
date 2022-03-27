import { RoadCondition } from '../uvv-driving-simulator.types';
import {Component, Input, Output, EventEmitter} from "@angular/core";


@Component({
  selector: 'road-condition-selector',
  templateUrl: 'road-condition-selector.html'
})
export class RoadConditionSelectorComponent {
    @Input() state: RoadCondition | undefined;
    @Output() onChange = new EventEmitter();
    public stateOptions = [RoadCondition.NORMAL, RoadCondition.WET];
    public stateOptionsMap = {
        [RoadCondition.NORMAL]: 'Normal',
        [RoadCondition.WET]: 'Wet'
    };
}
