/** CompressibilityUnits enumeration */
export enum CompressibilityUnits {
    /** */
    InversePascals,
    /** */
    InverseKilopascals,
    /** */
    InverseMegapascals,
    /** */
    InverseAtmospheres,
    /** */
    InverseMillibars,
    /** */
    InverseBars,
    /** */
    InversePoundsForcePerSquareInch,
    /** */
    InversePascal,
    /** */
    InverseKilopascal,
    /** */
    InverseMegapascal,
    /** */
    InverseAtmosphere,
    /** */
    InverseMillibar,
    /** */
    InverseBar,
    /** */
    InversePoundForcePerSquareInch
}

/** Compressibility is the measure of the relative volume change of a fluid or solid in response to pressure changes. */
export class Compressibility {
    private value: number;
    private inversepascalsLazy: number | null = null;
    private inversekilopascalsLazy: number | null = null;
    private inversemegapascalsLazy: number | null = null;
    private inverseatmospheresLazy: number | null = null;
    private inversemillibarsLazy: number | null = null;
    private inversebarsLazy: number | null = null;
    private inversepoundsforcepersquareinchLazy: number | null = null;

    /**
     * Create a new Compressibility.
     * @param value The value.
     * @param fromUnit The ‘Compressibility’ unit to create from.
     * The default unit is InversePascals
     */
    public constructor(value: number, fromUnit: CompressibilityUnits = CompressibilityUnits.InversePascals) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of Compressibility is InversePascals.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get InversePascals(): number {
        if(this.inversepascalsLazy !== null){
            return this.inversepascalsLazy;
        }
        return this.inversepascalsLazy = this.convertFromBase(CompressibilityUnits.InversePascals);
    }

    /** */
    public get InverseKilopascals(): number {
        if(this.inversekilopascalsLazy !== null){
            return this.inversekilopascalsLazy;
        }
        return this.inversekilopascalsLazy = this.convertFromBase(CompressibilityUnits.InverseKilopascals);
    }

    /** */
    public get InverseMegapascals(): number {
        if(this.inversemegapascalsLazy !== null){
            return this.inversemegapascalsLazy;
        }
        return this.inversemegapascalsLazy = this.convertFromBase(CompressibilityUnits.InverseMegapascals);
    }

    /** */
    public get InverseAtmospheres(): number {
        if(this.inverseatmospheresLazy !== null){
            return this.inverseatmospheresLazy;
        }
        return this.inverseatmospheresLazy = this.convertFromBase(CompressibilityUnits.InverseAtmospheres);
    }

    /** */
    public get InverseMillibars(): number {
        if(this.inversemillibarsLazy !== null){
            return this.inversemillibarsLazy;
        }
        return this.inversemillibarsLazy = this.convertFromBase(CompressibilityUnits.InverseMillibars);
    }

    /** */
    public get InverseBars(): number {
        if(this.inversebarsLazy !== null){
            return this.inversebarsLazy;
        }
        return this.inversebarsLazy = this.convertFromBase(CompressibilityUnits.InverseBars);
    }

    /** */
    public get InversePoundsForcePerSquareInch(): number {
        if(this.inversepoundsforcepersquareinchLazy !== null){
            return this.inversepoundsforcepersquareinchLazy;
        }
        return this.inversepoundsforcepersquareinchLazy = this.convertFromBase(CompressibilityUnits.InversePoundsForcePerSquareInch);
    }

    /**
     * Create a new Compressibility instance from a InversePascals
     *
     * @param value The unit as InversePascals to create a new Compressibility from.
     * @returns The new Compressibility instance.
     */
    public static FromInversePascals(value: number): Compressibility {
        return new Compressibility(value, CompressibilityUnits.InversePascals);
    }

    /**
     * Create a new Compressibility instance from a InverseKilopascals
     *
     * @param value The unit as InverseKilopascals to create a new Compressibility from.
     * @returns The new Compressibility instance.
     */
    public static FromInverseKilopascals(value: number): Compressibility {
        return new Compressibility(value, CompressibilityUnits.InverseKilopascals);
    }

    /**
     * Create a new Compressibility instance from a InverseMegapascals
     *
     * @param value The unit as InverseMegapascals to create a new Compressibility from.
     * @returns The new Compressibility instance.
     */
    public static FromInverseMegapascals(value: number): Compressibility {
        return new Compressibility(value, CompressibilityUnits.InverseMegapascals);
    }

    /**
     * Create a new Compressibility instance from a InverseAtmospheres
     *
     * @param value The unit as InverseAtmospheres to create a new Compressibility from.
     * @returns The new Compressibility instance.
     */
    public static FromInverseAtmospheres(value: number): Compressibility {
        return new Compressibility(value, CompressibilityUnits.InverseAtmospheres);
    }

    /**
     * Create a new Compressibility instance from a InverseMillibars
     *
     * @param value The unit as InverseMillibars to create a new Compressibility from.
     * @returns The new Compressibility instance.
     */
    public static FromInverseMillibars(value: number): Compressibility {
        return new Compressibility(value, CompressibilityUnits.InverseMillibars);
    }

    /**
     * Create a new Compressibility instance from a InverseBars
     *
     * @param value The unit as InverseBars to create a new Compressibility from.
     * @returns The new Compressibility instance.
     */
    public static FromInverseBars(value: number): Compressibility {
        return new Compressibility(value, CompressibilityUnits.InverseBars);
    }

    /**
     * Create a new Compressibility instance from a InversePoundsForcePerSquareInch
     *
     * @param value The unit as InversePoundsForcePerSquareInch to create a new Compressibility from.
     * @returns The new Compressibility instance.
     */
    public static FromInversePoundsForcePerSquareInch(value: number): Compressibility {
        return new Compressibility(value, CompressibilityUnits.InversePoundsForcePerSquareInch);
    }

    private convertFromBase(toUnit: CompressibilityUnits): number {
        switch (toUnit) {
                
            case CompressibilityUnits.InversePascals:
            case CompressibilityUnits.InversePascals:        
                return this.value;
            case CompressibilityUnits.InverseKilopascals:
            case CompressibilityUnits.InverseKilopascals:        
                return this.value / 1e3;
            case CompressibilityUnits.InverseMegapascals:
            case CompressibilityUnits.InverseMegapascals:        
                return this.value / 1e6;
            case CompressibilityUnits.InverseAtmospheres:
            case CompressibilityUnits.InverseAtmospheres:        
                return this.value / 101325;
            case CompressibilityUnits.InverseMillibars:
            case CompressibilityUnits.InverseMillibars:        
                return this.value / 100;
            case CompressibilityUnits.InverseBars:
            case CompressibilityUnits.InverseBars:        
                return this.value / 1e5;
            case CompressibilityUnits.InversePoundsForcePerSquareInch:
            case CompressibilityUnits.InversePoundsForcePerSquareInch:        
                return this.value / 6.894757293168361e3;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: CompressibilityUnits): number {
        switch (fromUnit) {
                
            case CompressibilityUnits.InversePascals:
            case CompressibilityUnits.InversePascals:        
                return value;
            case CompressibilityUnits.InverseKilopascals:
            case CompressibilityUnits.InverseKilopascals:        
                return value * 1e3;
            case CompressibilityUnits.InverseMegapascals:
            case CompressibilityUnits.InverseMegapascals:        
                return value * 1e6;
            case CompressibilityUnits.InverseAtmospheres:
            case CompressibilityUnits.InverseAtmospheres:        
                return value * 101325;
            case CompressibilityUnits.InverseMillibars:
            case CompressibilityUnits.InverseMillibars:        
                return value * 100;
            case CompressibilityUnits.InverseBars:
            case CompressibilityUnits.InverseBars:        
                return value * 1e5;
            case CompressibilityUnits.InversePoundsForcePerSquareInch:
            case CompressibilityUnits.InversePoundsForcePerSquareInch:        
                return value * 6.894757293168361e3;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the Compressibility to string.
     * Note! the default format for Compressibility is InversePascals.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the Compressibility.
     * @returns The string format of the Compressibility.
     */
    public toString(unit: CompressibilityUnits = CompressibilityUnits.InversePascals): string {

        switch (unit) {
            
            case CompressibilityUnits.InversePascals:
                return this.InversePascals + ` Pa⁻¹`;
            case CompressibilityUnits.InverseKilopascals:
                return this.InverseKilopascals + ` kPa⁻¹`;
            case CompressibilityUnits.InverseMegapascals:
                return this.InverseMegapascals + ` MPa⁻¹`;
            case CompressibilityUnits.InverseAtmospheres:
                return this.InverseAtmospheres + ` atm⁻¹`;
            case CompressibilityUnits.InverseMillibars:
                return this.InverseMillibars + ` mbar⁻¹`;
            case CompressibilityUnits.InverseBars:
                return this.InverseBars + ` bar⁻¹`;
            case CompressibilityUnits.InversePoundsForcePerSquareInch:
                return this.InversePoundsForcePerSquareInch + ` psi⁻¹`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get Compressibility unit abbreviation.
     * Note! the default abbreviation for Compressibility is InversePascals.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the Compressibility.
     * @returns The abbreviation string of Compressibility.
     */
    public getUnitAbbreviation(unitAbbreviation: CompressibilityUnits = CompressibilityUnits.InversePascals): string {

        switch (unitAbbreviation) {
            
            case CompressibilityUnits.InversePascals:
                return `Pa⁻¹`;
            case CompressibilityUnits.InverseKilopascals:
                return `kPa⁻¹`;
            case CompressibilityUnits.InverseMegapascals:
                return `MPa⁻¹`;
            case CompressibilityUnits.InverseAtmospheres:
                return `atm⁻¹`;
            case CompressibilityUnits.InverseMillibars:
                return `mbar⁻¹`;
            case CompressibilityUnits.InverseBars:
                return `bar⁻¹`;
            case CompressibilityUnits.InversePoundsForcePerSquareInch:
                return `psi⁻¹`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given Compressibility are equals to the current Compressibility.
     * @param compressibility The other Compressibility.
     * @returns True if the given Compressibility are equal to the current Compressibility.
     */
    public equals(compressibility: Compressibility): boolean {
        return this.value === compressibility.BaseValue;
    }

    /**
     * Compare the given Compressibility against the current Compressibility.
     * @param compressibility The other Compressibility.
     * @returns 0 if they are equal, -1 if the current Compressibility is less then other, 1 if the current Compressibility is greater then other.
     */
    public compareTo(compressibility: Compressibility): number {

        if (this.value > compressibility.BaseValue)
            return 1;
        if (this.value < compressibility.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given Compressibility with the current Compressibility.
     * @param compressibility The other Compressibility.
     * @returns A new Compressibility instance with the results.
     */
    public add(compressibility: Compressibility): Compressibility {
        return new Compressibility(this.value + compressibility.BaseValue)
    }

    /**
     * Subtract the given Compressibility with the current Compressibility.
     * @param compressibility The other Compressibility.
     * @returns A new Compressibility instance with the results.
     */
    public subtract(compressibility: Compressibility): Compressibility {
        return new Compressibility(this.value - compressibility.BaseValue)
    }

    /**
     * Multiply the given Compressibility with the current Compressibility.
     * @param compressibility The other Compressibility.
     * @returns A new Compressibility instance with the results.
     */
    public multiply(compressibility: Compressibility): Compressibility {
        return new Compressibility(this.value * compressibility.BaseValue)
    }

    /**
     * Divide the given Compressibility with the current Compressibility.
     * @param compressibility The other Compressibility.
     * @returns A new Compressibility instance with the results.
     */
    public divide(compressibility: Compressibility): Compressibility {
        return new Compressibility(this.value / compressibility.BaseValue)
    }

    /**
     * Modulo the given Compressibility with the current Compressibility.
     * @param compressibility The other Compressibility.
     * @returns A new Compressibility instance with the results.
     */
    public modulo(compressibility: Compressibility): Compressibility {
        return new Compressibility(this.value % compressibility.BaseValue)
    }

    /**
     * Pow the given Compressibility with the current Compressibility.
     * @param compressibility The other Compressibility.
     * @returns A new Compressibility instance with the results.
     */
    public pow(compressibility: Compressibility): Compressibility {
        return new Compressibility(this.value ** compressibility.BaseValue)
    }
}
