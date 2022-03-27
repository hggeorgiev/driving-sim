import { Subscription } from 'rxjs';

import { UvvDrivingSimulatorService } from './uvv-driving-simulator.service';
import { SettingType, SettingValue, SimulatorState } from './uvv-driving-simulator.types';

import {Component, OnDestroy, OnInit} from "@angular/core";

@Component({
  selector: 'uvv-driving-simulator',
  templateUrl: 'uvv-driving-simulator.html',
  styleUrls: ['uvv-driving-simulator.scss']
})
export class UvvDrivingSimulatorComponent implements OnInit, OnDestroy{
    public state: SimulatorState | undefined;
    public settingType = SettingType;
    private stateSub: Subscription | undefined;

    constructor(private UvvDrivingSimulator: UvvDrivingSimulatorService) {}

    public ngOnInit(): void {
        this.stateSub = this.UvvDrivingSimulator.state$.subscribe(state => {
            this.state = state;
        });
    }

    public setSetting(value: SettingValue, type: SettingType): void {
        this.UvvDrivingSimulator.updateSetting(value, type);
    }

    public ngOnDestroy(): void {
        // @ts-ignore
      this.stateSub.unsubscribe();
    }
}
