import { UvvDrivingSumulatorSceneState } from './uvv-driving-smulator-scene-state.class';

export enum MentalState {
    WATCHFUL = 'WATCHFUL',
    SLIGHTLY_DISTRACTED = 'SLIGHTLY_DISTRACTED',
    DISTRACTED = 'DISTRACTED'
}

export enum RoadCondition {
    NORMAL = 'NORMAL',
    WET = 'WET'
}

export enum SettingType {
    VEHICLE_SPEED,
    DRIVER_STATE,
    ROAD_CONDITION
}

export interface SettingsState {
    roadCondition: RoadCondition;
    driverState: MentalState;
    vehicleSpeed: number;
}

export interface SimulatorState {
    settings: SettingsState;
    scene: UvvDrivingSumulatorSceneState;
}

export type SettingValue = number | RoadCondition | MentalState;
