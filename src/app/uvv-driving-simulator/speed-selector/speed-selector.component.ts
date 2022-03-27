import {Component, Input, Output, EventEmitter, SimpleChanges, OnChanges} from "@angular/core";

enum SpeedState {
    LOW = 'LOW',
    MEDIUM = 'MEDIUM',
    HIGH = 'HIGH',
    DANGEROUS = 'DANGEROUS'
}

@Component({
  selector: 'speed-selector',
  templateUrl:'speed-selector.html',
  styleUrls: ['speed-selector.scss']
})
export class SpeedSelectorComponent implements OnChanges {
    public speed = 0;
    public state: SpeedState | undefined;

    @Input() value: any;
    @Output() onChange = new EventEmitter()

    constructor() {
    }

    public ngOnChanges(onChanges: SimpleChanges): void {
        if (onChanges.value.currentValue) {
            this.speed = onChanges.value.currentValue;
            this.setSpeedState();
        }
    }

    public changeSpeed(value: number): void {
        this.speed += value;
        this.setSpeedState();
        this.onChange.emit(this.speed);
    }

    public setSpeedState(): void {
        switch (true) {
            case this.speed < 60:
                this.state = SpeedState.LOW;
                break;
            case this.speed === 60:
                this.state = SpeedState.MEDIUM;
                break;
            case this.speed > 60 && this.speed < 90:
                this.state = SpeedState.HIGH;
                break;
            case this.speed > 90:
                this.state = SpeedState.DANGEROUS;
                break;
        }
    }
}
