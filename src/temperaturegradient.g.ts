/** TemperatureGradientUnits enumeration */
export enum TemperatureGradientUnits {
    /** */
    KelvinsPerMeter,
    /** */
    DegreesCelciusPerMeter,
    /** */
    DegreesFahrenheitPerFoot,
    /** */
    DegreesCelciusPerKilometer,
    /** */
    KelvinPerMeter,
    /** */
    DegreeCelsiusPerMeter,
    /** */
    DegreeFahrenheitPerFoot,
    /** */
    DegreeCelsiusPerKilometer
}

/** The rate of change of temperature with displacement in a given direction (as with increase of height) */
export class TemperatureGradient {
    private value: number;
    private kelvinspermeterLazy: number | null = null;
    private degreescelciuspermeterLazy: number | null = null;
    private degreesfahrenheitperfootLazy: number | null = null;
    private degreescelciusperkilometerLazy: number | null = null;

    /**
     * Create a new TemperatureGradient.
     * @param value The value.
     * @param fromUnit The ‘TemperatureGradient’ unit to create from.
     * The default unit is KelvinsPerMeter
     */
    public constructor(value: number, fromUnit: TemperatureGradientUnits = TemperatureGradientUnits.KelvinsPerMeter) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of TemperatureGradient is KelvinsPerMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get KelvinsPerMeter(): number {
        if(this.kelvinspermeterLazy !== null){
            return this.kelvinspermeterLazy;
        }
        return this.kelvinspermeterLazy = this.convertFromBase(TemperatureGradientUnits.KelvinsPerMeter);
    }

    /** */
    public get DegreesCelciusPerMeter(): number {
        if(this.degreescelciuspermeterLazy !== null){
            return this.degreescelciuspermeterLazy;
        }
        return this.degreescelciuspermeterLazy = this.convertFromBase(TemperatureGradientUnits.DegreesCelciusPerMeter);
    }

    /** */
    public get DegreesFahrenheitPerFoot(): number {
        if(this.degreesfahrenheitperfootLazy !== null){
            return this.degreesfahrenheitperfootLazy;
        }
        return this.degreesfahrenheitperfootLazy = this.convertFromBase(TemperatureGradientUnits.DegreesFahrenheitPerFoot);
    }

    /** */
    public get DegreesCelciusPerKilometer(): number {
        if(this.degreescelciusperkilometerLazy !== null){
            return this.degreescelciusperkilometerLazy;
        }
        return this.degreescelciusperkilometerLazy = this.convertFromBase(TemperatureGradientUnits.DegreesCelciusPerKilometer);
    }

    /**
     * Create a new TemperatureGradient instance from a KelvinsPerMeter
     *
     * @param value The unit as KelvinsPerMeter to create a new TemperatureGradient from.
     * @returns The new TemperatureGradient instance.
     */
    public static FromKelvinsPerMeter(value: number): TemperatureGradient {
        return new TemperatureGradient(value, TemperatureGradientUnits.KelvinsPerMeter);
    }

    /**
     * Create a new TemperatureGradient instance from a DegreesCelciusPerMeter
     *
     * @param value The unit as DegreesCelciusPerMeter to create a new TemperatureGradient from.
     * @returns The new TemperatureGradient instance.
     */
    public static FromDegreesCelciusPerMeter(value: number): TemperatureGradient {
        return new TemperatureGradient(value, TemperatureGradientUnits.DegreesCelciusPerMeter);
    }

    /**
     * Create a new TemperatureGradient instance from a DegreesFahrenheitPerFoot
     *
     * @param value The unit as DegreesFahrenheitPerFoot to create a new TemperatureGradient from.
     * @returns The new TemperatureGradient instance.
     */
    public static FromDegreesFahrenheitPerFoot(value: number): TemperatureGradient {
        return new TemperatureGradient(value, TemperatureGradientUnits.DegreesFahrenheitPerFoot);
    }

    /**
     * Create a new TemperatureGradient instance from a DegreesCelciusPerKilometer
     *
     * @param value The unit as DegreesCelciusPerKilometer to create a new TemperatureGradient from.
     * @returns The new TemperatureGradient instance.
     */
    public static FromDegreesCelciusPerKilometer(value: number): TemperatureGradient {
        return new TemperatureGradient(value, TemperatureGradientUnits.DegreesCelciusPerKilometer);
    }

    private convertFromBase(toUnit: TemperatureGradientUnits): number {
        switch (toUnit) {
                
            case TemperatureGradientUnits.KelvinsPerMeter:
            case TemperatureGradientUnits.KelvinsPerMeter:        
                return this.value;
            case TemperatureGradientUnits.DegreesCelciusPerMeter:
            case TemperatureGradientUnits.DegreesCelciusPerMeter:        
                return this.value;
            case TemperatureGradientUnits.DegreesFahrenheitPerFoot:
            case TemperatureGradientUnits.DegreesFahrenheitPerFoot:        
                return (this.value * 0.3048) * 9 / 5;
            case TemperatureGradientUnits.DegreesCelciusPerKilometer:
            case TemperatureGradientUnits.DegreesCelciusPerKilometer:        
                return this.value * 1e3;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: TemperatureGradientUnits): number {
        switch (fromUnit) {
                
            case TemperatureGradientUnits.KelvinsPerMeter:
            case TemperatureGradientUnits.KelvinsPerMeter:        
                return value;
            case TemperatureGradientUnits.DegreesCelciusPerMeter:
            case TemperatureGradientUnits.DegreesCelciusPerMeter:        
                return value;
            case TemperatureGradientUnits.DegreesFahrenheitPerFoot:
            case TemperatureGradientUnits.DegreesFahrenheitPerFoot:        
                return (value / 0.3048) * 5 / 9;
            case TemperatureGradientUnits.DegreesCelciusPerKilometer:
            case TemperatureGradientUnits.DegreesCelciusPerKilometer:        
                return value / 1e3;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the TemperatureGradient to string.
     * Note! the default format for TemperatureGradient is KelvinsPerMeter.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the TemperatureGradient.
     * @returns The string format of the TemperatureGradient.
     */
    public toString(unit: TemperatureGradientUnits = TemperatureGradientUnits.KelvinsPerMeter): string {

        switch (unit) {
            
            case TemperatureGradientUnits.KelvinsPerMeter:
                return this.KelvinsPerMeter + ` ∆°K/m`;
            case TemperatureGradientUnits.DegreesCelciusPerMeter:
                return this.DegreesCelciusPerMeter + ` ∆°C/m`;
            case TemperatureGradientUnits.DegreesFahrenheitPerFoot:
                return this.DegreesFahrenheitPerFoot + ` ∆°F/ft`;
            case TemperatureGradientUnits.DegreesCelciusPerKilometer:
                return this.DegreesCelciusPerKilometer + ` ∆°C/km`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get TemperatureGradient unit abbreviation.
     * Note! the default abbreviation for TemperatureGradient is KelvinsPerMeter.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the TemperatureGradient.
     * @returns The abbreviation string of TemperatureGradient.
     */
    public getUnitAbbreviation(unitAbbreviation: TemperatureGradientUnits = TemperatureGradientUnits.KelvinsPerMeter): string {

        switch (unitAbbreviation) {
            
            case TemperatureGradientUnits.KelvinsPerMeter:
                return `∆°K/m`;
            case TemperatureGradientUnits.DegreesCelciusPerMeter:
                return `∆°C/m`;
            case TemperatureGradientUnits.DegreesFahrenheitPerFoot:
                return `∆°F/ft`;
            case TemperatureGradientUnits.DegreesCelciusPerKilometer:
                return `∆°C/km`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given TemperatureGradient are equals to the current TemperatureGradient.
     * @param temperatureGradient The other TemperatureGradient.
     * @returns True if the given TemperatureGradient are equal to the current TemperatureGradient.
     */
    public equals(temperatureGradient: TemperatureGradient): boolean {
        return this.value === temperatureGradient.BaseValue;
    }

    /**
     * Compare the given TemperatureGradient against the current TemperatureGradient.
     * @param temperatureGradient The other TemperatureGradient.
     * @returns 0 if they are equal, -1 if the current TemperatureGradient is less then other, 1 if the current TemperatureGradient is greater then other.
     */
    public compareTo(temperatureGradient: TemperatureGradient): number {

        if (this.value > temperatureGradient.BaseValue)
            return 1;
        if (this.value < temperatureGradient.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given TemperatureGradient with the current TemperatureGradient.
     * @param temperatureGradient The other TemperatureGradient.
     * @returns A new TemperatureGradient instance with the results.
     */
    public add(temperatureGradient: TemperatureGradient): TemperatureGradient {
        return new TemperatureGradient(this.value + temperatureGradient.BaseValue)
    }

    /**
     * Subtract the given TemperatureGradient with the current TemperatureGradient.
     * @param temperatureGradient The other TemperatureGradient.
     * @returns A new TemperatureGradient instance with the results.
     */
    public subtract(temperatureGradient: TemperatureGradient): TemperatureGradient {
        return new TemperatureGradient(this.value - temperatureGradient.BaseValue)
    }

    /**
     * Multiply the given TemperatureGradient with the current TemperatureGradient.
     * @param temperatureGradient The other TemperatureGradient.
     * @returns A new TemperatureGradient instance with the results.
     */
    public multiply(temperatureGradient: TemperatureGradient): TemperatureGradient {
        return new TemperatureGradient(this.value * temperatureGradient.BaseValue)
    }

    /**
     * Divide the given TemperatureGradient with the current TemperatureGradient.
     * @param temperatureGradient The other TemperatureGradient.
     * @returns A new TemperatureGradient instance with the results.
     */
    public divide(temperatureGradient: TemperatureGradient): TemperatureGradient {
        return new TemperatureGradient(this.value / temperatureGradient.BaseValue)
    }

    /**
     * Modulo the given TemperatureGradient with the current TemperatureGradient.
     * @param temperatureGradient The other TemperatureGradient.
     * @returns A new TemperatureGradient instance with the results.
     */
    public modulo(temperatureGradient: TemperatureGradient): TemperatureGradient {
        return new TemperatureGradient(this.value % temperatureGradient.BaseValue)
    }

    /**
     * Pow the given TemperatureGradient with the current TemperatureGradient.
     * @param temperatureGradient The other TemperatureGradient.
     * @returns A new TemperatureGradient instance with the results.
     */
    public pow(temperatureGradient: TemperatureGradient): TemperatureGradient {
        return new TemperatureGradient(this.value ** temperatureGradient.BaseValue)
    }
}
