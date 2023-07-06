/** RatioChangeRateUnits enumeration */
export enum RatioChangeRateUnits {
    /** */
    PercentsPerSecond,
    /** */
    DecimalFractionsPerSecond,
    /** */
    PercentPerSecond,
    /** */
    DecimalFractionPerSecond
}

/** The change in ratio per unit of time. */
export class RatioChangeRate {
    private value: number;
    private percentspersecondLazy: number | null = null;
    private decimalfractionspersecondLazy: number | null = null;

    /**
     * Create a new RatioChangeRate.
     * @param value The value.
     * @param fromUnit The ‘RatioChangeRate’ unit to create from.
     * The default unit is DecimalFractionsPerSecond
     */
    public constructor(value: number, fromUnit: RatioChangeRateUnits = RatioChangeRateUnits.DecimalFractionsPerSecond) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of RatioChangeRate is DecimalFractionsPerSecond.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get PercentsPerSecond(): number {
        if(this.percentspersecondLazy !== null){
            return this.percentspersecondLazy;
        }
        return this.percentspersecondLazy = this.convertFromBase(RatioChangeRateUnits.PercentsPerSecond);
    }

    /** */
    public get DecimalFractionsPerSecond(): number {
        if(this.decimalfractionspersecondLazy !== null){
            return this.decimalfractionspersecondLazy;
        }
        return this.decimalfractionspersecondLazy = this.convertFromBase(RatioChangeRateUnits.DecimalFractionsPerSecond);
    }

    /**
     * Create a new RatioChangeRate instance from a PercentsPerSecond
     *
     * @param value The unit as PercentsPerSecond to create a new RatioChangeRate from.
     * @returns The new RatioChangeRate instance.
     */
    public static FromPercentsPerSecond(value: number): RatioChangeRate {
        return new RatioChangeRate(value, RatioChangeRateUnits.PercentsPerSecond);
    }

    /**
     * Create a new RatioChangeRate instance from a DecimalFractionsPerSecond
     *
     * @param value The unit as DecimalFractionsPerSecond to create a new RatioChangeRate from.
     * @returns The new RatioChangeRate instance.
     */
    public static FromDecimalFractionsPerSecond(value: number): RatioChangeRate {
        return new RatioChangeRate(value, RatioChangeRateUnits.DecimalFractionsPerSecond);
    }

    private convertFromBase(toUnit: RatioChangeRateUnits): number {
        switch (toUnit) {
                
            case RatioChangeRateUnits.PercentsPerSecond:
            case RatioChangeRateUnits.PercentsPerSecond:        
                return this.value * 1e2;
            case RatioChangeRateUnits.DecimalFractionsPerSecond:
            case RatioChangeRateUnits.DecimalFractionsPerSecond:        
                return this.value;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: RatioChangeRateUnits): number {
        switch (fromUnit) {
                
            case RatioChangeRateUnits.PercentsPerSecond:
            case RatioChangeRateUnits.PercentsPerSecond:        
                return value / 1e2;
            case RatioChangeRateUnits.DecimalFractionsPerSecond:
            case RatioChangeRateUnits.DecimalFractionsPerSecond:        
                return value;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the RatioChangeRate to string.
     * Note! the default format for RatioChangeRate is DecimalFractionsPerSecond.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the RatioChangeRate.
     * @returns The string format of the RatioChangeRate.
     */
    public toString(unit: RatioChangeRateUnits = RatioChangeRateUnits.DecimalFractionsPerSecond): string {

        switch (unit) {
            
            case RatioChangeRateUnits.PercentsPerSecond:
                return this.PercentsPerSecond + ` %/s`;
            case RatioChangeRateUnits.DecimalFractionsPerSecond:
                return this.DecimalFractionsPerSecond + ` /s`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get RatioChangeRate unit abbreviation.
     * Note! the default abbreviation for RatioChangeRate is DecimalFractionsPerSecond.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the RatioChangeRate.
     * @returns The abbreviation string of RatioChangeRate.
     */
    public getUnitAbbreviation(unitAbbreviation: RatioChangeRateUnits = RatioChangeRateUnits.DecimalFractionsPerSecond): string {

        switch (unitAbbreviation) {
            
            case RatioChangeRateUnits.PercentsPerSecond:
                return `%/s`;
            case RatioChangeRateUnits.DecimalFractionsPerSecond:
                return `/s`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given RatioChangeRate are equals to the current RatioChangeRate.
     * @param ratioChangeRate The other RatioChangeRate.
     * @returns True if the given RatioChangeRate are equal to the current RatioChangeRate.
     */
    public equals(ratioChangeRate: RatioChangeRate): boolean {
        return this.value === ratioChangeRate.BaseValue;
    }

    /**
     * Compare the given RatioChangeRate against the current RatioChangeRate.
     * @param ratioChangeRate The other RatioChangeRate.
     * @returns 0 if they are equal, -1 if the current RatioChangeRate is less then other, 1 if the current RatioChangeRate is greater then other.
     */
    public compareTo(ratioChangeRate: RatioChangeRate): number {

        if (this.value > ratioChangeRate.BaseValue)
            return 1;
        if (this.value < ratioChangeRate.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given RatioChangeRate with the current RatioChangeRate.
     * @param ratioChangeRate The other RatioChangeRate.
     * @returns A new RatioChangeRate instance with the results.
     */
    public add(ratioChangeRate: RatioChangeRate): RatioChangeRate {
        return new RatioChangeRate(this.value + ratioChangeRate.BaseValue)
    }

    /**
     * Subtract the given RatioChangeRate with the current RatioChangeRate.
     * @param ratioChangeRate The other RatioChangeRate.
     * @returns A new RatioChangeRate instance with the results.
     */
    public subtract(ratioChangeRate: RatioChangeRate): RatioChangeRate {
        return new RatioChangeRate(this.value - ratioChangeRate.BaseValue)
    }

    /**
     * Multiply the given RatioChangeRate with the current RatioChangeRate.
     * @param ratioChangeRate The other RatioChangeRate.
     * @returns A new RatioChangeRate instance with the results.
     */
    public multiply(ratioChangeRate: RatioChangeRate): RatioChangeRate {
        return new RatioChangeRate(this.value * ratioChangeRate.BaseValue)
    }

    /**
     * Divide the given RatioChangeRate with the current RatioChangeRate.
     * @param ratioChangeRate The other RatioChangeRate.
     * @returns A new RatioChangeRate instance with the results.
     */
    public divide(ratioChangeRate: RatioChangeRate): RatioChangeRate {
        return new RatioChangeRate(this.value / ratioChangeRate.BaseValue)
    }

    /**
     * Modulo the given RatioChangeRate with the current RatioChangeRate.
     * @param ratioChangeRate The other RatioChangeRate.
     * @returns A new RatioChangeRate instance with the results.
     */
    public modulo(ratioChangeRate: RatioChangeRate): RatioChangeRate {
        return new RatioChangeRate(this.value % ratioChangeRate.BaseValue)
    }

    /**
     * Pow the given RatioChangeRate with the current RatioChangeRate.
     * @param ratioChangeRate The other RatioChangeRate.
     * @returns A new RatioChangeRate instance with the results.
     */
    public pow(ratioChangeRate: RatioChangeRate): RatioChangeRate {
        return new RatioChangeRate(this.value ** ratioChangeRate.BaseValue)
    }
}
