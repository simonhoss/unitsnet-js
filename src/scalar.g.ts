/** ScalarUnits enumeration */
export enum ScalarUnits {
    /** */
    Amount
}

/** A way of representing a number of items. */
export class Scalar {
    private value: number;
    private amountLazy: number | null = null;

    /**
     * Create a new Scalar.
     * @param value The value.
     * @param fromUnit The ‘Scalar’ unit to create from.
     * The default unit is Amount
     */
    public constructor(value: number, fromUnit: ScalarUnits = ScalarUnits.Amount) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of Scalar is Amount.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get Amount(): number {
        if(this.amountLazy !== null){
            return this.amountLazy;
        }
        return this.amountLazy = this.convertFromBase(ScalarUnits.Amount);
    }

    /**
     * Create a new Scalar instance from a Amount
     *
     * @param value The unit as Amount to create a new Scalar from.
     * @returns The new Scalar instance.
     */
    public static FromAmount(value: number): Scalar {
        return new Scalar(value, ScalarUnits.Amount);
    }

    private convertFromBase(toUnit: ScalarUnits): number {
        switch (toUnit) {
                
            case ScalarUnits.Amount:
                    
                return this.value;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: ScalarUnits): number {
        switch (fromUnit) {
                
            case ScalarUnits.Amount:
                    
                return value;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the Scalar to string.
     * Note! the default format for Scalar is Amount.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the Scalar.
     * @returns The string format of the Scalar.
     */
    public toString(unit: ScalarUnits = ScalarUnits.Amount): string {

        switch (unit) {
            
            case ScalarUnits.Amount:
                return this.Amount + ` `;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get Scalar unit abbreviation.
     * Note! the default abbreviation for Scalar is Amount.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the Scalar.
     * @returns The abbreviation string of Scalar.
     */
    public getUnitAbbreviation(unitAbbreviation: ScalarUnits = ScalarUnits.Amount): string {

        switch (unitAbbreviation) {
            
            case ScalarUnits.Amount:
                return ``;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given Scalar are equals to the current Scalar.
     * @param scalar The other Scalar.
     * @returns True if the given Scalar are equal to the current Scalar.
     */
    public equals(scalar: Scalar): boolean {
        return this.value === scalar.BaseValue;
    }

    /**
     * Compare the given Scalar against the current Scalar.
     * @param scalar The other Scalar.
     * @returns 0 if they are equal, -1 if the current Scalar is less then other, 1 if the current Scalar is greater then other.
     */
    public compareTo(scalar: Scalar): number {

        if (this.value > scalar.BaseValue)
            return 1;
        if (this.value < scalar.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given Scalar with the current Scalar.
     * @param scalar The other Scalar.
     * @returns A new Scalar instance with the results.
     */
    public add(scalar: Scalar): Scalar {
        return new Scalar(this.value + scalar.BaseValue)
    }

    /**
     * Subtract the given Scalar with the current Scalar.
     * @param scalar The other Scalar.
     * @returns A new Scalar instance with the results.
     */
    public subtract(scalar: Scalar): Scalar {
        return new Scalar(this.value - scalar.BaseValue)
    }

    /**
     * Multiply the given Scalar with the current Scalar.
     * @param scalar The other Scalar.
     * @returns A new Scalar instance with the results.
     */
    public multiply(scalar: Scalar): Scalar {
        return new Scalar(this.value * scalar.BaseValue)
    }

    /**
     * Divide the given Scalar with the current Scalar.
     * @param scalar The other Scalar.
     * @returns A new Scalar instance with the results.
     */
    public divide(scalar: Scalar): Scalar {
        return new Scalar(this.value / scalar.BaseValue)
    }

    /**
     * Modulo the given Scalar with the current Scalar.
     * @param scalar The other Scalar.
     * @returns A new Scalar instance with the results.
     */
    public modulo(scalar: Scalar): Scalar {
        return new Scalar(this.value % scalar.BaseValue)
    }

    /**
     * Pow the given Scalar with the current Scalar.
     * @param scalar The other Scalar.
     * @returns A new Scalar instance with the results.
     */
    public pow(scalar: Scalar): Scalar {
        return new Scalar(this.value ** scalar.BaseValue)
    }
}
