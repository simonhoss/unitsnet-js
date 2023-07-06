/** PowerRatioUnits enumeration */
export enum PowerRatioUnits {
    /** */
    DecibelWatts,
    /** */
    DecibelMilliwatts,
    /** */
    DecibelWatt,
    /** */
    DecibelMilliwatt
}

/** The strength of a signal expressed in decibels (dB) relative to one watt. */
export class PowerRatio {
    private value: number;
    private decibelwattsLazy: number | null = null;
    private decibelmilliwattsLazy: number | null = null;

    /**
     * Create a new PowerRatio.
     * @param value The value.
     * @param fromUnit The ‘PowerRatio’ unit to create from.
     * The default unit is DecibelWatts
     */
    public constructor(value: number, fromUnit: PowerRatioUnits = PowerRatioUnits.DecibelWatts) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of PowerRatio is DecibelWatts.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get DecibelWatts(): number {
        if(this.decibelwattsLazy !== null){
            return this.decibelwattsLazy;
        }
        return this.decibelwattsLazy = this.convertFromBase(PowerRatioUnits.DecibelWatts);
    }

    /** */
    public get DecibelMilliwatts(): number {
        if(this.decibelmilliwattsLazy !== null){
            return this.decibelmilliwattsLazy;
        }
        return this.decibelmilliwattsLazy = this.convertFromBase(PowerRatioUnits.DecibelMilliwatts);
    }

    /**
     * Create a new PowerRatio instance from a DecibelWatts
     *
     * @param value The unit as DecibelWatts to create a new PowerRatio from.
     * @returns The new PowerRatio instance.
     */
    public static FromDecibelWatts(value: number): PowerRatio {
        return new PowerRatio(value, PowerRatioUnits.DecibelWatts);
    }

    /**
     * Create a new PowerRatio instance from a DecibelMilliwatts
     *
     * @param value The unit as DecibelMilliwatts to create a new PowerRatio from.
     * @returns The new PowerRatio instance.
     */
    public static FromDecibelMilliwatts(value: number): PowerRatio {
        return new PowerRatio(value, PowerRatioUnits.DecibelMilliwatts);
    }

    private convertFromBase(toUnit: PowerRatioUnits): number {
        switch (toUnit) {
                
            case PowerRatioUnits.DecibelWatts:
            case PowerRatioUnits.DecibelWatts:        
                return this.value;
            case PowerRatioUnits.DecibelMilliwatts:
            case PowerRatioUnits.DecibelMilliwatts:        
                return this.value + 30;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: PowerRatioUnits): number {
        switch (fromUnit) {
                
            case PowerRatioUnits.DecibelWatts:
            case PowerRatioUnits.DecibelWatts:        
                return value;
            case PowerRatioUnits.DecibelMilliwatts:
            case PowerRatioUnits.DecibelMilliwatts:        
                return value - 30;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the PowerRatio to string.
     * Note! the default format for PowerRatio is DecibelWatts.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the PowerRatio.
     * @returns The string format of the PowerRatio.
     */
    public toString(unit: PowerRatioUnits = PowerRatioUnits.DecibelWatts): string {

        switch (unit) {
            
            case PowerRatioUnits.DecibelWatts:
                return this.DecibelWatts + ` dBW`;
            case PowerRatioUnits.DecibelMilliwatts:
                return this.DecibelMilliwatts + ` dBmW`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get PowerRatio unit abbreviation.
     * Note! the default abbreviation for PowerRatio is DecibelWatts.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the PowerRatio.
     * @returns The abbreviation string of PowerRatio.
     */
    public getUnitAbbreviation(unitAbbreviation: PowerRatioUnits = PowerRatioUnits.DecibelWatts): string {

        switch (unitAbbreviation) {
            
            case PowerRatioUnits.DecibelWatts:
                return `dBW`;
            case PowerRatioUnits.DecibelMilliwatts:
                return `dBmW`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given PowerRatio are equals to the current PowerRatio.
     * @param powerRatio The other PowerRatio.
     * @returns True if the given PowerRatio are equal to the current PowerRatio.
     */
    public equals(powerRatio: PowerRatio): boolean {
        return this.value === powerRatio.BaseValue;
    }

    /**
     * Compare the given PowerRatio against the current PowerRatio.
     * @param powerRatio The other PowerRatio.
     * @returns 0 if they are equal, -1 if the current PowerRatio is less then other, 1 if the current PowerRatio is greater then other.
     */
    public compareTo(powerRatio: PowerRatio): number {

        if (this.value > powerRatio.BaseValue)
            return 1;
        if (this.value < powerRatio.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given PowerRatio with the current PowerRatio.
     * @param powerRatio The other PowerRatio.
     * @returns A new PowerRatio instance with the results.
     */
    public add(powerRatio: PowerRatio): PowerRatio {
        return new PowerRatio(this.value + powerRatio.BaseValue)
    }

    /**
     * Subtract the given PowerRatio with the current PowerRatio.
     * @param powerRatio The other PowerRatio.
     * @returns A new PowerRatio instance with the results.
     */
    public subtract(powerRatio: PowerRatio): PowerRatio {
        return new PowerRatio(this.value - powerRatio.BaseValue)
    }

    /**
     * Multiply the given PowerRatio with the current PowerRatio.
     * @param powerRatio The other PowerRatio.
     * @returns A new PowerRatio instance with the results.
     */
    public multiply(powerRatio: PowerRatio): PowerRatio {
        return new PowerRatio(this.value * powerRatio.BaseValue)
    }

    /**
     * Divide the given PowerRatio with the current PowerRatio.
     * @param powerRatio The other PowerRatio.
     * @returns A new PowerRatio instance with the results.
     */
    public divide(powerRatio: PowerRatio): PowerRatio {
        return new PowerRatio(this.value / powerRatio.BaseValue)
    }

    /**
     * Modulo the given PowerRatio with the current PowerRatio.
     * @param powerRatio The other PowerRatio.
     * @returns A new PowerRatio instance with the results.
     */
    public modulo(powerRatio: PowerRatio): PowerRatio {
        return new PowerRatio(this.value % powerRatio.BaseValue)
    }

    /**
     * Pow the given PowerRatio with the current PowerRatio.
     * @param powerRatio The other PowerRatio.
     * @returns A new PowerRatio instance with the results.
     */
    public pow(powerRatio: PowerRatio): PowerRatio {
        return new PowerRatio(this.value ** powerRatio.BaseValue)
    }
}
