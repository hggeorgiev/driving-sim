import { MentalState, RoadCondition, SettingsState } from './uvv-driving-simulator.types';

export class UvvDrivingSumulatorSceneState {
    public reactionDistance: { value: number, percentage: number };
    public breakingDistance: { value: number, percentage: number };
    public totalDistanceTravelled: { value: number, percentage: number };
    public timeToStop: number;
    public vehicleSpeed: number;

    private driverStateMap: Record<MentalState, number> = {
        [MentalState.WATCHFUL]: 1,
        [MentalState.SLIGHTLY_DISTRACTED]: 1.5,
        [MentalState.DISTRACTED]: 2
    };

    private roadConditionFormulaMap: Record<RoadCondition, (speed: number) => number> = {
        [RoadCondition.NORMAL]: (speed: number) => Math.pow(speed / 10, 2) * 0.75,
        [RoadCondition.WET]: (speed: number) => Math.pow(speed / 10, 2)
    };

    private roadLength = 278;

    constructor(settingsState: SettingsState) {
        const reactionDistanceValue = this.calculateReactionDistance(settingsState.driverState, settingsState.vehicleSpeed);
        const breakingDistanceValue = this.calculateBreakingDistance(settingsState.roadCondition, settingsState.vehicleSpeed);
        const totalDistanceTravelledValue = breakingDistanceValue + reactionDistanceValue;

        this.vehicleSpeed = settingsState.vehicleSpeed;

        this.totalDistanceTravelled = {
            value: reactionDistanceValue + breakingDistanceValue,
            percentage: (totalDistanceTravelledValue / this.roadLength) * 100
        };

        this.reactionDistance = {
            value: reactionDistanceValue,
            percentage: this.calculateRoadTotalDistancePercentage(
                reactionDistanceValue,
                this.totalDistanceTravelled.value,
                this.totalDistanceTravelled.percentage
            )
        };
        this.breakingDistance = {
            value: breakingDistanceValue,
            percentage: this.calculateRoadTotalDistancePercentage(
                breakingDistanceValue,
                this.totalDistanceTravelled.value,
                this.totalDistanceTravelled.percentage
            )
        };

        this.timeToStop = this.calculateTimeToStop(this.totalDistanceTravelled.value, this.vehicleSpeed);
    }

    private calculateReactionDistance(driverState: MentalState, vehicleSpeed: number): number {
        return (this.driverStateMap[driverState] / 3600) * vehicleSpeed * 1000 + 4;
    }

    private calculateBreakingDistance(roadCondition: RoadCondition, vehicleSpeed: number): number {
        return this.roadConditionFormulaMap[roadCondition](vehicleSpeed);
    }

    // Calculate breaking or reaction distance as percentage of total distance travelled
    private calculateTotalDistanceTravelledPercentage(partialDistance: number, totalDistance: number): number {
        return (partialDistance / totalDistance) * 100;
    }

    // Calculate breaking or reaction distance as percentage of the total road length
    private calculateRoadTotalDistancePercentage(partialDistance: number, totalDistance: number, totalDistancePercentage: number): number {
        return (
            (totalDistancePercentage / 100) * (this.calculateTotalDistanceTravelledPercentage(partialDistance, totalDistance) / 100)
        ) * 100;
    }

    private calculateTimeToStop(distanceTravelled: number, speed: number): number {
        return (distanceTravelled / speed) * 10;
    }
}
