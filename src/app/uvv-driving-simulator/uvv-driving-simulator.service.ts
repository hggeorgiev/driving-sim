import { BehaviorSubject } from 'rxjs';
import { MentalState, RoadCondition, SettingsState, SettingType, SettingValue, SimulatorState } from './uvv-driving-simulator.types';
import { UvvDrivingSumulatorSceneState } from './uvv-driving-smulator-scene-state.class';
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class UvvDrivingSimulatorService {
    public state$: BehaviorSubject<SimulatorState>;

    constructor() {
        const initialState = this.setSimulatorState({
            roadCondition: RoadCondition.NORMAL,
            driverState: MentalState.WATCHFUL,
            vehicleSpeed: 50
        });

        this.state$ = new BehaviorSubject(initialState);
    }

    public updateSetting(value: SettingValue, type: SettingType): void {
        const stateSettings = this.state$.value.settings;

        switch (type) {
            case SettingType.ROAD_CONDITION:
                this.state$.next(this.setSimulatorState({ ...stateSettings, roadCondition: value as RoadCondition }));
                break;
            case SettingType.DRIVER_STATE:
                this.state$.next(this.setSimulatorState({ ...stateSettings, driverState: value as MentalState }));
                break;
            case SettingType.VEHICLE_SPEED:
                this.state$.next(this.setSimulatorState({ ...stateSettings, vehicleSpeed: value as number }));
                break;
        }
    }

    private setSimulatorState(settingsState: SettingsState): SimulatorState {
        return {
            settings: settingsState,
            scene: new UvvDrivingSumulatorSceneState(settingsState)
        };
    }
}
