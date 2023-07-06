/** IrradiationUnits enumeration */
export enum IrradiationUnits {
    /** */
    JoulesPerSquareMeter,
    /** */
    JoulesPerSquareCentimeter,
    /** */
    JoulesPerSquareMillimeter,
    /** */
    WattHoursPerSquareMeter,
    /** */
    KilojoulesPerSquareMeter,
    /** */
    MillijoulesPerSquareCentimeter,
    /** */
    KilowattHoursPerSquareMeter,
    /** */
    JoulePerSquareMeter,
    /** */
    JoulePerSquareCentimeter,
    /** */
    JoulePerSquareMillimeter,
    /** */
    WattHourPerSquareMeter,
    /** */
    KilojoulePerSquareMeter,
    /** */
    MillijoulePerSquareCentimeter,
    /** */
    KilowattHourPerSquareMeter
}

/** Irradiation is the process by which an object is exposed to radiation. The exposure can originate from various sources, including natural sources. */
export class Irradiation {
    private value: number;
    private joulespersquaremeterLazy: number | null = null;
    private joulespersquarecentimeterLazy: number | null = null;
    private joulespersquaremillimeterLazy: number | null = null;
    private watthourspersquaremeterLazy: number | null = null;
    private kilojoulespersquaremeterLazy: number | null = null;
    private millijoulespersquarecentimeterLazy: number | null = null;
    private kilowatthourspersquaremeterLazy: number | null = null;

    /**
     * Create a new Irradiation.
     * @param value The value.
     * @param fromUnit The ‘Irradiation’ unit to create from.
     * The default unit is JoulesPerSquareMeter
     */
    public constructor(value: number, fromUnit: IrradiationUnits = IrradiationUnits.JoulesPerSquareMeter) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of Irradiation is JoulesPerSquareMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get JoulesPerSquareMeter(): number {
        if(this.joulespersquaremeterLazy !== null){
            return this.joulespersquaremeterLazy;
        }
        return this.joulespersquaremeterLazy = this.convertFromBase(IrradiationUnits.JoulesPerSquareMeter);
    }

    /** */
    public get JoulesPerSquareCentimeter(): number {
        if(this.joulespersquarecentimeterLazy !== null){
            return this.joulespersquarecentimeterLazy;
        }
        return this.joulespersquarecentimeterLazy = this.convertFromBase(IrradiationUnits.JoulesPerSquareCentimeter);
    }

    /** */
    public get JoulesPerSquareMillimeter(): number {
        if(this.joulespersquaremillimeterLazy !== null){
            return this.joulespersquaremillimeterLazy;
        }
        return this.joulespersquaremillimeterLazy = this.convertFromBase(IrradiationUnits.JoulesPerSquareMillimeter);
    }

    /** */
    public get WattHoursPerSquareMeter(): number {
        if(this.watthourspersquaremeterLazy !== null){
            return this.watthourspersquaremeterLazy;
        }
        return this.watthourspersquaremeterLazy = this.convertFromBase(IrradiationUnits.WattHoursPerSquareMeter);
    }

    /** */
    public get KilojoulesPerSquareMeter(): number {
        if(this.kilojoulespersquaremeterLazy !== null){
            return this.kilojoulespersquaremeterLazy;
        }
        return this.kilojoulespersquaremeterLazy = this.convertFromBase(IrradiationUnits.KilojoulesPerSquareMeter);
    }

    /** */
    public get MillijoulesPerSquareCentimeter(): number {
        if(this.millijoulespersquarecentimeterLazy !== null){
            return this.millijoulespersquarecentimeterLazy;
        }
        return this.millijoulespersquarecentimeterLazy = this.convertFromBase(IrradiationUnits.MillijoulesPerSquareCentimeter);
    }

    /** */
    public get KilowattHoursPerSquareMeter(): number {
        if(this.kilowatthourspersquaremeterLazy !== null){
            return this.kilowatthourspersquaremeterLazy;
        }
        return this.kilowatthourspersquaremeterLazy = this.convertFromBase(IrradiationUnits.KilowattHoursPerSquareMeter);
    }

    /**
     * Create a new Irradiation instance from a JoulesPerSquareMeter
     *
     * @param value The unit as JoulesPerSquareMeter to create a new Irradiation from.
     * @returns The new Irradiation instance.
     */
    public static FromJoulesPerSquareMeter(value: number): Irradiation {
        return new Irradiation(value, IrradiationUnits.JoulesPerSquareMeter);
    }

    /**
     * Create a new Irradiation instance from a JoulesPerSquareCentimeter
     *
     * @param value The unit as JoulesPerSquareCentimeter to create a new Irradiation from.
     * @returns The new Irradiation instance.
     */
    public static FromJoulesPerSquareCentimeter(value: number): Irradiation {
        return new Irradiation(value, IrradiationUnits.JoulesPerSquareCentimeter);
    }

    /**
     * Create a new Irradiation instance from a JoulesPerSquareMillimeter
     *
     * @param value The unit as JoulesPerSquareMillimeter to create a new Irradiation from.
     * @returns The new Irradiation instance.
     */
    public static FromJoulesPerSquareMillimeter(value: number): Irradiation {
        return new Irradiation(value, IrradiationUnits.JoulesPerSquareMillimeter);
    }

    /**
     * Create a new Irradiation instance from a WattHoursPerSquareMeter
     *
     * @param value The unit as WattHoursPerSquareMeter to create a new Irradiation from.
     * @returns The new Irradiation instance.
     */
    public static FromWattHoursPerSquareMeter(value: number): Irradiation {
        return new Irradiation(value, IrradiationUnits.WattHoursPerSquareMeter);
    }

    /**
     * Create a new Irradiation instance from a KilojoulesPerSquareMeter
     *
     * @param value The unit as KilojoulesPerSquareMeter to create a new Irradiation from.
     * @returns The new Irradiation instance.
     */
    public static FromKilojoulesPerSquareMeter(value: number): Irradiation {
        return new Irradiation(value, IrradiationUnits.KilojoulesPerSquareMeter);
    }

    /**
     * Create a new Irradiation instance from a MillijoulesPerSquareCentimeter
     *
     * @param value The unit as MillijoulesPerSquareCentimeter to create a new Irradiation from.
     * @returns The new Irradiation instance.
     */
    public static FromMillijoulesPerSquareCentimeter(value: number): Irradiation {
        return new Irradiation(value, IrradiationUnits.MillijoulesPerSquareCentimeter);
    }

    /**
     * Create a new Irradiation instance from a KilowattHoursPerSquareMeter
     *
     * @param value The unit as KilowattHoursPerSquareMeter to create a new Irradiation from.
     * @returns The new Irradiation instance.
     */
    public static FromKilowattHoursPerSquareMeter(value: number): Irradiation {
        return new Irradiation(value, IrradiationUnits.KilowattHoursPerSquareMeter);
    }

    private convertFromBase(toUnit: IrradiationUnits): number {
        switch (toUnit) {
                
            case IrradiationUnits.JoulesPerSquareMeter:
            case IrradiationUnits.JoulesPerSquareMeter:        
                return this.value;
            case IrradiationUnits.JoulesPerSquareCentimeter:
            case IrradiationUnits.JoulesPerSquareCentimeter:        
                return this.value / 1e4;
            case IrradiationUnits.JoulesPerSquareMillimeter:
            case IrradiationUnits.JoulesPerSquareMillimeter:        
                return this.value / 1e6;
            case IrradiationUnits.WattHoursPerSquareMeter:
            case IrradiationUnits.WattHoursPerSquareMeter:        
                return this.value / 3600;
            case IrradiationUnits.KilojoulesPerSquareMeter:
            case IrradiationUnits.KilojoulesPerSquareMeter:        
                return (this.value) / 1000;
            case IrradiationUnits.MillijoulesPerSquareCentimeter:
            case IrradiationUnits.MillijoulesPerSquareCentimeter:        
                return (this.value / 1e4) / 0.001;
            case IrradiationUnits.KilowattHoursPerSquareMeter:
            case IrradiationUnits.KilowattHoursPerSquareMeter:        
                return (this.value / 3600) / 1000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: IrradiationUnits): number {
        switch (fromUnit) {
                
            case IrradiationUnits.JoulesPerSquareMeter:
            case IrradiationUnits.JoulesPerSquareMeter:        
                return value;
            case IrradiationUnits.JoulesPerSquareCentimeter:
            case IrradiationUnits.JoulesPerSquareCentimeter:        
                return value * 1e4;
            case IrradiationUnits.JoulesPerSquareMillimeter:
            case IrradiationUnits.JoulesPerSquareMillimeter:        
                return value * 1e6;
            case IrradiationUnits.WattHoursPerSquareMeter:
            case IrradiationUnits.WattHoursPerSquareMeter:        
                return value * 3600;
            case IrradiationUnits.KilojoulesPerSquareMeter:
            case IrradiationUnits.KilojoulesPerSquareMeter:        
                return (value) * 1000;
            case IrradiationUnits.MillijoulesPerSquareCentimeter:
            case IrradiationUnits.MillijoulesPerSquareCentimeter:        
                return (value * 1e4) * 0.001;
            case IrradiationUnits.KilowattHoursPerSquareMeter:
            case IrradiationUnits.KilowattHoursPerSquareMeter:        
                return (value * 3600) * 1000;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the Irradiation to string.
     * Note! the default format for Irradiation is JoulesPerSquareMeter.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the Irradiation.
     * @returns The string format of the Irradiation.
     */
    public toString(unit: IrradiationUnits = IrradiationUnits.JoulesPerSquareMeter): string {

        switch (unit) {
            
            case IrradiationUnits.JoulesPerSquareMeter:
                return this.JoulesPerSquareMeter + ` J/m²`;
            case IrradiationUnits.JoulesPerSquareCentimeter:
                return this.JoulesPerSquareCentimeter + ` J/cm²`;
            case IrradiationUnits.JoulesPerSquareMillimeter:
                return this.JoulesPerSquareMillimeter + ` J/mm²`;
            case IrradiationUnits.WattHoursPerSquareMeter:
                return this.WattHoursPerSquareMeter + ` Wh/m²`;
            case IrradiationUnits.KilojoulesPerSquareMeter:
                return this.KilojoulesPerSquareMeter + ` `;
            case IrradiationUnits.MillijoulesPerSquareCentimeter:
                return this.MillijoulesPerSquareCentimeter + ` `;
            case IrradiationUnits.KilowattHoursPerSquareMeter:
                return this.KilowattHoursPerSquareMeter + ` `;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get Irradiation unit abbreviation.
     * Note! the default abbreviation for Irradiation is JoulesPerSquareMeter.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the Irradiation.
     * @returns The abbreviation string of Irradiation.
     */
    public getUnitAbbreviation(unitAbbreviation: IrradiationUnits = IrradiationUnits.JoulesPerSquareMeter): string {

        switch (unitAbbreviation) {
            
            case IrradiationUnits.JoulesPerSquareMeter:
                return `J/m²`;
            case IrradiationUnits.JoulesPerSquareCentimeter:
                return `J/cm²`;
            case IrradiationUnits.JoulesPerSquareMillimeter:
                return `J/mm²`;
            case IrradiationUnits.WattHoursPerSquareMeter:
                return `Wh/m²`;
            case IrradiationUnits.KilojoulesPerSquareMeter:
                return ``;
            case IrradiationUnits.MillijoulesPerSquareCentimeter:
                return ``;
            case IrradiationUnits.KilowattHoursPerSquareMeter:
                return ``;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given Irradiation are equals to the current Irradiation.
     * @param irradiation The other Irradiation.
     * @returns True if the given Irradiation are equal to the current Irradiation.
     */
    public equals(irradiation: Irradiation): boolean {
        return this.value === irradiation.BaseValue;
    }

    /**
     * Compare the given Irradiation against the current Irradiation.
     * @param irradiation The other Irradiation.
     * @returns 0 if they are equal, -1 if the current Irradiation is less then other, 1 if the current Irradiation is greater then other.
     */
    public compareTo(irradiation: Irradiation): number {

        if (this.value > irradiation.BaseValue)
            return 1;
        if (this.value < irradiation.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given Irradiation with the current Irradiation.
     * @param irradiation The other Irradiation.
     * @returns A new Irradiation instance with the results.
     */
    public add(irradiation: Irradiation): Irradiation {
        return new Irradiation(this.value + irradiation.BaseValue)
    }

    /**
     * Subtract the given Irradiation with the current Irradiation.
     * @param irradiation The other Irradiation.
     * @returns A new Irradiation instance with the results.
     */
    public subtract(irradiation: Irradiation): Irradiation {
        return new Irradiation(this.value - irradiation.BaseValue)
    }

    /**
     * Multiply the given Irradiation with the current Irradiation.
     * @param irradiation The other Irradiation.
     * @returns A new Irradiation instance with the results.
     */
    public multiply(irradiation: Irradiation): Irradiation {
        return new Irradiation(this.value * irradiation.BaseValue)
    }

    /**
     * Divide the given Irradiation with the current Irradiation.
     * @param irradiation The other Irradiation.
     * @returns A new Irradiation instance with the results.
     */
    public divide(irradiation: Irradiation): Irradiation {
        return new Irradiation(this.value / irradiation.BaseValue)
    }

    /**
     * Modulo the given Irradiation with the current Irradiation.
     * @param irradiation The other Irradiation.
     * @returns A new Irradiation instance with the results.
     */
    public modulo(irradiation: Irradiation): Irradiation {
        return new Irradiation(this.value % irradiation.BaseValue)
    }

    /**
     * Pow the given Irradiation with the current Irradiation.
     * @param irradiation The other Irradiation.
     * @returns A new Irradiation instance with the results.
     */
    public pow(irradiation: Irradiation): Irradiation {
        return new Irradiation(this.value ** irradiation.BaseValue)
    }
}
