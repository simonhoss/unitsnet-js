/** RotationalAccelerationUnits enumeration */
export enum RotationalAccelerationUnits {
    /** */
    RadiansPerSecondSquared,
    /** */
    DegreesPerSecondSquared,
    /** */
    RevolutionsPerMinutePerSecond,
    /** */
    RevolutionsPerSecondSquared,
    /** */
    RadianPerSecondSquared,
    /** */
    DegreePerSecondSquared,
    /** */
    RevolutionPerMinutePerSecond,
    /** */
    RevolutionPerSecondSquared
}

/** Angular acceleration is the rate of change of rotational speed. */
export class RotationalAcceleration {
    private value: number;
    private radianspersecondsquaredLazy: number | null = null;
    private degreespersecondsquaredLazy: number | null = null;
    private revolutionsperminutepersecondLazy: number | null = null;
    private revolutionspersecondsquaredLazy: number | null = null;

    /**
     * Create a new RotationalAcceleration.
     * @param value The value.
     * @param fromUnit The ‘RotationalAcceleration’ unit to create from.
     * The default unit is RadiansPerSecondSquared
     */
    public constructor(value: number, fromUnit: RotationalAccelerationUnits = RotationalAccelerationUnits.RadiansPerSecondSquared) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of RotationalAcceleration is RadiansPerSecondSquared.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get RadiansPerSecondSquared(): number {
        if(this.radianspersecondsquaredLazy !== null){
            return this.radianspersecondsquaredLazy;
        }
        return this.radianspersecondsquaredLazy = this.convertFromBase(RotationalAccelerationUnits.RadiansPerSecondSquared);
    }

    /** */
    public get DegreesPerSecondSquared(): number {
        if(this.degreespersecondsquaredLazy !== null){
            return this.degreespersecondsquaredLazy;
        }
        return this.degreespersecondsquaredLazy = this.convertFromBase(RotationalAccelerationUnits.DegreesPerSecondSquared);
    }

    /** */
    public get RevolutionsPerMinutePerSecond(): number {
        if(this.revolutionsperminutepersecondLazy !== null){
            return this.revolutionsperminutepersecondLazy;
        }
        return this.revolutionsperminutepersecondLazy = this.convertFromBase(RotationalAccelerationUnits.RevolutionsPerMinutePerSecond);
    }

    /** */
    public get RevolutionsPerSecondSquared(): number {
        if(this.revolutionspersecondsquaredLazy !== null){
            return this.revolutionspersecondsquaredLazy;
        }
        return this.revolutionspersecondsquaredLazy = this.convertFromBase(RotationalAccelerationUnits.RevolutionsPerSecondSquared);
    }

    /**
     * Create a new RotationalAcceleration instance from a RadiansPerSecondSquared
     *
     * @param value The unit as RadiansPerSecondSquared to create a new RotationalAcceleration from.
     * @returns The new RotationalAcceleration instance.
     */
    public static FromRadiansPerSecondSquared(value: number): RotationalAcceleration {
        return new RotationalAcceleration(value, RotationalAccelerationUnits.RadiansPerSecondSquared);
    }

    /**
     * Create a new RotationalAcceleration instance from a DegreesPerSecondSquared
     *
     * @param value The unit as DegreesPerSecondSquared to create a new RotationalAcceleration from.
     * @returns The new RotationalAcceleration instance.
     */
    public static FromDegreesPerSecondSquared(value: number): RotationalAcceleration {
        return new RotationalAcceleration(value, RotationalAccelerationUnits.DegreesPerSecondSquared);
    }

    /**
     * Create a new RotationalAcceleration instance from a RevolutionsPerMinutePerSecond
     *
     * @param value The unit as RevolutionsPerMinutePerSecond to create a new RotationalAcceleration from.
     * @returns The new RotationalAcceleration instance.
     */
    public static FromRevolutionsPerMinutePerSecond(value: number): RotationalAcceleration {
        return new RotationalAcceleration(value, RotationalAccelerationUnits.RevolutionsPerMinutePerSecond);
    }

    /**
     * Create a new RotationalAcceleration instance from a RevolutionsPerSecondSquared
     *
     * @param value The unit as RevolutionsPerSecondSquared to create a new RotationalAcceleration from.
     * @returns The new RotationalAcceleration instance.
     */
    public static FromRevolutionsPerSecondSquared(value: number): RotationalAcceleration {
        return new RotationalAcceleration(value, RotationalAccelerationUnits.RevolutionsPerSecondSquared);
    }

    private convertFromBase(toUnit: RotationalAccelerationUnits): number {
        switch (toUnit) {
                
            case RotationalAccelerationUnits.RadiansPerSecondSquared:
            case RotationalAccelerationUnits.RadiansPerSecondSquared:        
                return this.value;
            case RotationalAccelerationUnits.DegreesPerSecondSquared:
            case RotationalAccelerationUnits.DegreesPerSecondSquared:        
                return (180 / Math.PI) * this.value;
            case RotationalAccelerationUnits.RevolutionsPerMinutePerSecond:
            case RotationalAccelerationUnits.RevolutionsPerMinutePerSecond:        
                return (60 / (2 * Math.PI)) * this.value;
            case RotationalAccelerationUnits.RevolutionsPerSecondSquared:
            case RotationalAccelerationUnits.RevolutionsPerSecondSquared:        
                return (1 / (2 * Math.PI)) * this.value;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: RotationalAccelerationUnits): number {
        switch (fromUnit) {
                
            case RotationalAccelerationUnits.RadiansPerSecondSquared:
            case RotationalAccelerationUnits.RadiansPerSecondSquared:        
                return value;
            case RotationalAccelerationUnits.DegreesPerSecondSquared:
            case RotationalAccelerationUnits.DegreesPerSecondSquared:        
                return (Math.PI / 180) * value;
            case RotationalAccelerationUnits.RevolutionsPerMinutePerSecond:
            case RotationalAccelerationUnits.RevolutionsPerMinutePerSecond:        
                return ((2 * Math.PI) / 60) * value;
            case RotationalAccelerationUnits.RevolutionsPerSecondSquared:
            case RotationalAccelerationUnits.RevolutionsPerSecondSquared:        
                return (2 * Math.PI) * value;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the RotationalAcceleration to string.
     * Note! the default format for RotationalAcceleration is RadiansPerSecondSquared.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the RotationalAcceleration.
     * @returns The string format of the RotationalAcceleration.
     */
    public toString(unit: RotationalAccelerationUnits = RotationalAccelerationUnits.RadiansPerSecondSquared): string {

        switch (unit) {
            
            case RotationalAccelerationUnits.RadiansPerSecondSquared:
                return this.RadiansPerSecondSquared + ` rad/s²`;
            case RotationalAccelerationUnits.DegreesPerSecondSquared:
                return this.DegreesPerSecondSquared + ` °/s²`;
            case RotationalAccelerationUnits.RevolutionsPerMinutePerSecond:
                return this.RevolutionsPerMinutePerSecond + ` rpm/s`;
            case RotationalAccelerationUnits.RevolutionsPerSecondSquared:
                return this.RevolutionsPerSecondSquared + ` r/s²`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get RotationalAcceleration unit abbreviation.
     * Note! the default abbreviation for RotationalAcceleration is RadiansPerSecondSquared.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the RotationalAcceleration.
     * @returns The abbreviation string of RotationalAcceleration.
     */
    public getUnitAbbreviation(unitAbbreviation: RotationalAccelerationUnits = RotationalAccelerationUnits.RadiansPerSecondSquared): string {

        switch (unitAbbreviation) {
            
            case RotationalAccelerationUnits.RadiansPerSecondSquared:
                return `rad/s²`;
            case RotationalAccelerationUnits.DegreesPerSecondSquared:
                return `°/s²`;
            case RotationalAccelerationUnits.RevolutionsPerMinutePerSecond:
                return `rpm/s`;
            case RotationalAccelerationUnits.RevolutionsPerSecondSquared:
                return `r/s²`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given RotationalAcceleration are equals to the current RotationalAcceleration.
     * @param rotationalAcceleration The other RotationalAcceleration.
     * @returns True if the given RotationalAcceleration are equal to the current RotationalAcceleration.
     */
    public equals(rotationalAcceleration: RotationalAcceleration): boolean {
        return this.value === rotationalAcceleration.BaseValue;
    }

    /**
     * Compare the given RotationalAcceleration against the current RotationalAcceleration.
     * @param rotationalAcceleration The other RotationalAcceleration.
     * @returns 0 if they are equal, -1 if the current RotationalAcceleration is less then other, 1 if the current RotationalAcceleration is greater then other.
     */
    public compareTo(rotationalAcceleration: RotationalAcceleration): number {

        if (this.value > rotationalAcceleration.BaseValue)
            return 1;
        if (this.value < rotationalAcceleration.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given RotationalAcceleration with the current RotationalAcceleration.
     * @param rotationalAcceleration The other RotationalAcceleration.
     * @returns A new RotationalAcceleration instance with the results.
     */
    public add(rotationalAcceleration: RotationalAcceleration): RotationalAcceleration {
        return new RotationalAcceleration(this.value + rotationalAcceleration.BaseValue)
    }

    /**
     * Subtract the given RotationalAcceleration with the current RotationalAcceleration.
     * @param rotationalAcceleration The other RotationalAcceleration.
     * @returns A new RotationalAcceleration instance with the results.
     */
    public subtract(rotationalAcceleration: RotationalAcceleration): RotationalAcceleration {
        return new RotationalAcceleration(this.value - rotationalAcceleration.BaseValue)
    }

    /**
     * Multiply the given RotationalAcceleration with the current RotationalAcceleration.
     * @param rotationalAcceleration The other RotationalAcceleration.
     * @returns A new RotationalAcceleration instance with the results.
     */
    public multiply(rotationalAcceleration: RotationalAcceleration): RotationalAcceleration {
        return new RotationalAcceleration(this.value * rotationalAcceleration.BaseValue)
    }

    /**
     * Divide the given RotationalAcceleration with the current RotationalAcceleration.
     * @param rotationalAcceleration The other RotationalAcceleration.
     * @returns A new RotationalAcceleration instance with the results.
     */
    public divide(rotationalAcceleration: RotationalAcceleration): RotationalAcceleration {
        return new RotationalAcceleration(this.value / rotationalAcceleration.BaseValue)
    }

    /**
     * Modulo the given RotationalAcceleration with the current RotationalAcceleration.
     * @param rotationalAcceleration The other RotationalAcceleration.
     * @returns A new RotationalAcceleration instance with the results.
     */
    public modulo(rotationalAcceleration: RotationalAcceleration): RotationalAcceleration {
        return new RotationalAcceleration(this.value % rotationalAcceleration.BaseValue)
    }

    /**
     * Pow the given RotationalAcceleration with the current RotationalAcceleration.
     * @param rotationalAcceleration The other RotationalAcceleration.
     * @returns A new RotationalAcceleration instance with the results.
     */
    public pow(rotationalAcceleration: RotationalAcceleration): RotationalAcceleration {
        return new RotationalAcceleration(this.value ** rotationalAcceleration.BaseValue)
    }
}
