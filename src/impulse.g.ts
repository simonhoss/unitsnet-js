/** ImpulseUnits enumeration */
export enum ImpulseUnits {
    /** */
    KilogramMetersPerSecond,
    /** */
    NewtonSeconds,
    /** */
    PoundFeetPerSecond,
    /** */
    PoundForceSeconds,
    /** */
    SlugFeetPerSecond,
    /** */
    NanonewtonSeconds,
    /** */
    MicronewtonSeconds,
    /** */
    MillinewtonSeconds,
    /** */
    CentinewtonSeconds,
    /** */
    DecinewtonSeconds,
    /** */
    DecanewtonSeconds,
    /** */
    KilonewtonSeconds,
    /** */
    MeganewtonSeconds,
    /** */
    KilogramMeterPerSecond,
    /** */
    NewtonSecond,
    /** */
    PoundFootPerSecond,
    /** */
    PoundForceSecond,
    /** */
    SlugFootPerSecond,
    /** */
    NanonewtonSecond,
    /** */
    MicronewtonSecond,
    /** */
    MillinewtonSecond,
    /** */
    CentinewtonSecond,
    /** */
    DecinewtonSecond,
    /** */
    DecanewtonSecond,
    /** */
    KilonewtonSecond,
    /** */
    MeganewtonSecond
}

/** In classical mechanics, impulse is the integral of a force, F, over the time interval, t, for which it acts. Impulse applied to an object produces an equivalent vector change in its linear momentum, also in the resultant direction. */
export class Impulse {
    private value: number;
    private kilogrammeterspersecondLazy: number | null = null;
    private newtonsecondsLazy: number | null = null;
    private poundfeetpersecondLazy: number | null = null;
    private poundforcesecondsLazy: number | null = null;
    private slugfeetpersecondLazy: number | null = null;
    private nanonewtonsecondsLazy: number | null = null;
    private micronewtonsecondsLazy: number | null = null;
    private millinewtonsecondsLazy: number | null = null;
    private centinewtonsecondsLazy: number | null = null;
    private decinewtonsecondsLazy: number | null = null;
    private decanewtonsecondsLazy: number | null = null;
    private kilonewtonsecondsLazy: number | null = null;
    private meganewtonsecondsLazy: number | null = null;

    /**
     * Create a new Impulse.
     * @param value The value.
     * @param fromUnit The ‘Impulse’ unit to create from.
     * The default unit is NewtonSeconds
     */
    public constructor(value: number, fromUnit: ImpulseUnits = ImpulseUnits.NewtonSeconds) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of Impulse is NewtonSeconds.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get KilogramMetersPerSecond(): number {
        if(this.kilogrammeterspersecondLazy !== null){
            return this.kilogrammeterspersecondLazy;
        }
        return this.kilogrammeterspersecondLazy = this.convertFromBase(ImpulseUnits.KilogramMetersPerSecond);
    }

    /** */
    public get NewtonSeconds(): number {
        if(this.newtonsecondsLazy !== null){
            return this.newtonsecondsLazy;
        }
        return this.newtonsecondsLazy = this.convertFromBase(ImpulseUnits.NewtonSeconds);
    }

    /** */
    public get PoundFeetPerSecond(): number {
        if(this.poundfeetpersecondLazy !== null){
            return this.poundfeetpersecondLazy;
        }
        return this.poundfeetpersecondLazy = this.convertFromBase(ImpulseUnits.PoundFeetPerSecond);
    }

    /** */
    public get PoundForceSeconds(): number {
        if(this.poundforcesecondsLazy !== null){
            return this.poundforcesecondsLazy;
        }
        return this.poundforcesecondsLazy = this.convertFromBase(ImpulseUnits.PoundForceSeconds);
    }

    /** */
    public get SlugFeetPerSecond(): number {
        if(this.slugfeetpersecondLazy !== null){
            return this.slugfeetpersecondLazy;
        }
        return this.slugfeetpersecondLazy = this.convertFromBase(ImpulseUnits.SlugFeetPerSecond);
    }

    /** */
    public get NanonewtonSeconds(): number {
        if(this.nanonewtonsecondsLazy !== null){
            return this.nanonewtonsecondsLazy;
        }
        return this.nanonewtonsecondsLazy = this.convertFromBase(ImpulseUnits.NanonewtonSeconds);
    }

    /** */
    public get MicronewtonSeconds(): number {
        if(this.micronewtonsecondsLazy !== null){
            return this.micronewtonsecondsLazy;
        }
        return this.micronewtonsecondsLazy = this.convertFromBase(ImpulseUnits.MicronewtonSeconds);
    }

    /** */
    public get MillinewtonSeconds(): number {
        if(this.millinewtonsecondsLazy !== null){
            return this.millinewtonsecondsLazy;
        }
        return this.millinewtonsecondsLazy = this.convertFromBase(ImpulseUnits.MillinewtonSeconds);
    }

    /** */
    public get CentinewtonSeconds(): number {
        if(this.centinewtonsecondsLazy !== null){
            return this.centinewtonsecondsLazy;
        }
        return this.centinewtonsecondsLazy = this.convertFromBase(ImpulseUnits.CentinewtonSeconds);
    }

    /** */
    public get DecinewtonSeconds(): number {
        if(this.decinewtonsecondsLazy !== null){
            return this.decinewtonsecondsLazy;
        }
        return this.decinewtonsecondsLazy = this.convertFromBase(ImpulseUnits.DecinewtonSeconds);
    }

    /** */
    public get DecanewtonSeconds(): number {
        if(this.decanewtonsecondsLazy !== null){
            return this.decanewtonsecondsLazy;
        }
        return this.decanewtonsecondsLazy = this.convertFromBase(ImpulseUnits.DecanewtonSeconds);
    }

    /** */
    public get KilonewtonSeconds(): number {
        if(this.kilonewtonsecondsLazy !== null){
            return this.kilonewtonsecondsLazy;
        }
        return this.kilonewtonsecondsLazy = this.convertFromBase(ImpulseUnits.KilonewtonSeconds);
    }

    /** */
    public get MeganewtonSeconds(): number {
        if(this.meganewtonsecondsLazy !== null){
            return this.meganewtonsecondsLazy;
        }
        return this.meganewtonsecondsLazy = this.convertFromBase(ImpulseUnits.MeganewtonSeconds);
    }

    /**
     * Create a new Impulse instance from a KilogramMetersPerSecond
     *
     * @param value The unit as KilogramMetersPerSecond to create a new Impulse from.
     * @returns The new Impulse instance.
     */
    public static FromKilogramMetersPerSecond(value: number): Impulse {
        return new Impulse(value, ImpulseUnits.KilogramMetersPerSecond);
    }

    /**
     * Create a new Impulse instance from a NewtonSeconds
     *
     * @param value The unit as NewtonSeconds to create a new Impulse from.
     * @returns The new Impulse instance.
     */
    public static FromNewtonSeconds(value: number): Impulse {
        return new Impulse(value, ImpulseUnits.NewtonSeconds);
    }

    /**
     * Create a new Impulse instance from a PoundFeetPerSecond
     *
     * @param value The unit as PoundFeetPerSecond to create a new Impulse from.
     * @returns The new Impulse instance.
     */
    public static FromPoundFeetPerSecond(value: number): Impulse {
        return new Impulse(value, ImpulseUnits.PoundFeetPerSecond);
    }

    /**
     * Create a new Impulse instance from a PoundForceSeconds
     *
     * @param value The unit as PoundForceSeconds to create a new Impulse from.
     * @returns The new Impulse instance.
     */
    public static FromPoundForceSeconds(value: number): Impulse {
        return new Impulse(value, ImpulseUnits.PoundForceSeconds);
    }

    /**
     * Create a new Impulse instance from a SlugFeetPerSecond
     *
     * @param value The unit as SlugFeetPerSecond to create a new Impulse from.
     * @returns The new Impulse instance.
     */
    public static FromSlugFeetPerSecond(value: number): Impulse {
        return new Impulse(value, ImpulseUnits.SlugFeetPerSecond);
    }

    /**
     * Create a new Impulse instance from a NanonewtonSeconds
     *
     * @param value The unit as NanonewtonSeconds to create a new Impulse from.
     * @returns The new Impulse instance.
     */
    public static FromNanonewtonSeconds(value: number): Impulse {
        return new Impulse(value, ImpulseUnits.NanonewtonSeconds);
    }

    /**
     * Create a new Impulse instance from a MicronewtonSeconds
     *
     * @param value The unit as MicronewtonSeconds to create a new Impulse from.
     * @returns The new Impulse instance.
     */
    public static FromMicronewtonSeconds(value: number): Impulse {
        return new Impulse(value, ImpulseUnits.MicronewtonSeconds);
    }

    /**
     * Create a new Impulse instance from a MillinewtonSeconds
     *
     * @param value The unit as MillinewtonSeconds to create a new Impulse from.
     * @returns The new Impulse instance.
     */
    public static FromMillinewtonSeconds(value: number): Impulse {
        return new Impulse(value, ImpulseUnits.MillinewtonSeconds);
    }

    /**
     * Create a new Impulse instance from a CentinewtonSeconds
     *
     * @param value The unit as CentinewtonSeconds to create a new Impulse from.
     * @returns The new Impulse instance.
     */
    public static FromCentinewtonSeconds(value: number): Impulse {
        return new Impulse(value, ImpulseUnits.CentinewtonSeconds);
    }

    /**
     * Create a new Impulse instance from a DecinewtonSeconds
     *
     * @param value The unit as DecinewtonSeconds to create a new Impulse from.
     * @returns The new Impulse instance.
     */
    public static FromDecinewtonSeconds(value: number): Impulse {
        return new Impulse(value, ImpulseUnits.DecinewtonSeconds);
    }

    /**
     * Create a new Impulse instance from a DecanewtonSeconds
     *
     * @param value The unit as DecanewtonSeconds to create a new Impulse from.
     * @returns The new Impulse instance.
     */
    public static FromDecanewtonSeconds(value: number): Impulse {
        return new Impulse(value, ImpulseUnits.DecanewtonSeconds);
    }

    /**
     * Create a new Impulse instance from a KilonewtonSeconds
     *
     * @param value The unit as KilonewtonSeconds to create a new Impulse from.
     * @returns The new Impulse instance.
     */
    public static FromKilonewtonSeconds(value: number): Impulse {
        return new Impulse(value, ImpulseUnits.KilonewtonSeconds);
    }

    /**
     * Create a new Impulse instance from a MeganewtonSeconds
     *
     * @param value The unit as MeganewtonSeconds to create a new Impulse from.
     * @returns The new Impulse instance.
     */
    public static FromMeganewtonSeconds(value: number): Impulse {
        return new Impulse(value, ImpulseUnits.MeganewtonSeconds);
    }

    private convertFromBase(toUnit: ImpulseUnits): number {
        switch (toUnit) {
                
            case ImpulseUnits.KilogramMetersPerSecond:
            case ImpulseUnits.KilogramMetersPerSecond:        
                return this.value;
            case ImpulseUnits.NewtonSeconds:
            case ImpulseUnits.NewtonSeconds:        
                return this.value;
            case ImpulseUnits.PoundFeetPerSecond:
            case ImpulseUnits.PoundFeetPerSecond:        
                return this.value * 7.230657989877;
            case ImpulseUnits.PoundForceSeconds:
            case ImpulseUnits.PoundForceSeconds:        
                return this.value * 0.2248089430997;
            case ImpulseUnits.SlugFeetPerSecond:
            case ImpulseUnits.SlugFeetPerSecond:        
                return this.value * 0.224735720691;
            case ImpulseUnits.NanonewtonSeconds:
            case ImpulseUnits.NanonewtonSeconds:        
                return (this.value) / 1e-9;
            case ImpulseUnits.MicronewtonSeconds:
            case ImpulseUnits.MicronewtonSeconds:        
                return (this.value) / 0.000001;
            case ImpulseUnits.MillinewtonSeconds:
            case ImpulseUnits.MillinewtonSeconds:        
                return (this.value) / 0.001;
            case ImpulseUnits.CentinewtonSeconds:
            case ImpulseUnits.CentinewtonSeconds:        
                return (this.value) / 0.01;
            case ImpulseUnits.DecinewtonSeconds:
            case ImpulseUnits.DecinewtonSeconds:        
                return (this.value) / 0.1;
            case ImpulseUnits.DecanewtonSeconds:
            case ImpulseUnits.DecanewtonSeconds:        
                return (this.value) / 10;
            case ImpulseUnits.KilonewtonSeconds:
            case ImpulseUnits.KilonewtonSeconds:        
                return (this.value) / 1000;
            case ImpulseUnits.MeganewtonSeconds:
            case ImpulseUnits.MeganewtonSeconds:        
                return (this.value) / 1000000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: ImpulseUnits): number {
        switch (fromUnit) {
                
            case ImpulseUnits.KilogramMetersPerSecond:
            case ImpulseUnits.KilogramMetersPerSecond:        
                return value;
            case ImpulseUnits.NewtonSeconds:
            case ImpulseUnits.NewtonSeconds:        
                return value;
            case ImpulseUnits.PoundFeetPerSecond:
            case ImpulseUnits.PoundFeetPerSecond:        
                return value / 7.230657989877;
            case ImpulseUnits.PoundForceSeconds:
            case ImpulseUnits.PoundForceSeconds:        
                return value / 0.2248089430997;
            case ImpulseUnits.SlugFeetPerSecond:
            case ImpulseUnits.SlugFeetPerSecond:        
                return value / 0.224735720691;
            case ImpulseUnits.NanonewtonSeconds:
            case ImpulseUnits.NanonewtonSeconds:        
                return (value) * 1e-9;
            case ImpulseUnits.MicronewtonSeconds:
            case ImpulseUnits.MicronewtonSeconds:        
                return (value) * 0.000001;
            case ImpulseUnits.MillinewtonSeconds:
            case ImpulseUnits.MillinewtonSeconds:        
                return (value) * 0.001;
            case ImpulseUnits.CentinewtonSeconds:
            case ImpulseUnits.CentinewtonSeconds:        
                return (value) * 0.01;
            case ImpulseUnits.DecinewtonSeconds:
            case ImpulseUnits.DecinewtonSeconds:        
                return (value) * 0.1;
            case ImpulseUnits.DecanewtonSeconds:
            case ImpulseUnits.DecanewtonSeconds:        
                return (value) * 10;
            case ImpulseUnits.KilonewtonSeconds:
            case ImpulseUnits.KilonewtonSeconds:        
                return (value) * 1000;
            case ImpulseUnits.MeganewtonSeconds:
            case ImpulseUnits.MeganewtonSeconds:        
                return (value) * 1000000;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the Impulse to string.
     * Note! the default format for Impulse is NewtonSeconds.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the Impulse.
     * @returns The string format of the Impulse.
     */
    public toString(unit: ImpulseUnits = ImpulseUnits.NewtonSeconds): string {

        switch (unit) {
            
            case ImpulseUnits.KilogramMetersPerSecond:
                return this.KilogramMetersPerSecond + ` kg·m/s`;
            case ImpulseUnits.NewtonSeconds:
                return this.NewtonSeconds + ` N·s`;
            case ImpulseUnits.PoundFeetPerSecond:
                return this.PoundFeetPerSecond + ` lb·ft/s`;
            case ImpulseUnits.PoundForceSeconds:
                return this.PoundForceSeconds + ` lbf·s`;
            case ImpulseUnits.SlugFeetPerSecond:
                return this.SlugFeetPerSecond + ` slug·ft/s`;
            case ImpulseUnits.NanonewtonSeconds:
                return this.NanonewtonSeconds + ` `;
            case ImpulseUnits.MicronewtonSeconds:
                return this.MicronewtonSeconds + ` `;
            case ImpulseUnits.MillinewtonSeconds:
                return this.MillinewtonSeconds + ` `;
            case ImpulseUnits.CentinewtonSeconds:
                return this.CentinewtonSeconds + ` `;
            case ImpulseUnits.DecinewtonSeconds:
                return this.DecinewtonSeconds + ` `;
            case ImpulseUnits.DecanewtonSeconds:
                return this.DecanewtonSeconds + ` `;
            case ImpulseUnits.KilonewtonSeconds:
                return this.KilonewtonSeconds + ` `;
            case ImpulseUnits.MeganewtonSeconds:
                return this.MeganewtonSeconds + ` `;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get Impulse unit abbreviation.
     * Note! the default abbreviation for Impulse is NewtonSeconds.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the Impulse.
     * @returns The abbreviation string of Impulse.
     */
    public getUnitAbbreviation(unitAbbreviation: ImpulseUnits = ImpulseUnits.NewtonSeconds): string {

        switch (unitAbbreviation) {
            
            case ImpulseUnits.KilogramMetersPerSecond:
                return `kg·m/s`;
            case ImpulseUnits.NewtonSeconds:
                return `N·s`;
            case ImpulseUnits.PoundFeetPerSecond:
                return `lb·ft/s`;
            case ImpulseUnits.PoundForceSeconds:
                return `lbf·s`;
            case ImpulseUnits.SlugFeetPerSecond:
                return `slug·ft/s`;
            case ImpulseUnits.NanonewtonSeconds:
                return ``;
            case ImpulseUnits.MicronewtonSeconds:
                return ``;
            case ImpulseUnits.MillinewtonSeconds:
                return ``;
            case ImpulseUnits.CentinewtonSeconds:
                return ``;
            case ImpulseUnits.DecinewtonSeconds:
                return ``;
            case ImpulseUnits.DecanewtonSeconds:
                return ``;
            case ImpulseUnits.KilonewtonSeconds:
                return ``;
            case ImpulseUnits.MeganewtonSeconds:
                return ``;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given Impulse are equals to the current Impulse.
     * @param impulse The other Impulse.
     * @returns True if the given Impulse are equal to the current Impulse.
     */
    public equals(impulse: Impulse): boolean {
        return this.value === impulse.BaseValue;
    }

    /**
     * Compare the given Impulse against the current Impulse.
     * @param impulse The other Impulse.
     * @returns 0 if they are equal, -1 if the current Impulse is less then other, 1 if the current Impulse is greater then other.
     */
    public compareTo(impulse: Impulse): number {

        if (this.value > impulse.BaseValue)
            return 1;
        if (this.value < impulse.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given Impulse with the current Impulse.
     * @param impulse The other Impulse.
     * @returns A new Impulse instance with the results.
     */
    public add(impulse: Impulse): Impulse {
        return new Impulse(this.value + impulse.BaseValue)
    }

    /**
     * Subtract the given Impulse with the current Impulse.
     * @param impulse The other Impulse.
     * @returns A new Impulse instance with the results.
     */
    public subtract(impulse: Impulse): Impulse {
        return new Impulse(this.value - impulse.BaseValue)
    }

    /**
     * Multiply the given Impulse with the current Impulse.
     * @param impulse The other Impulse.
     * @returns A new Impulse instance with the results.
     */
    public multiply(impulse: Impulse): Impulse {
        return new Impulse(this.value * impulse.BaseValue)
    }

    /**
     * Divide the given Impulse with the current Impulse.
     * @param impulse The other Impulse.
     * @returns A new Impulse instance with the results.
     */
    public divide(impulse: Impulse): Impulse {
        return new Impulse(this.value / impulse.BaseValue)
    }

    /**
     * Modulo the given Impulse with the current Impulse.
     * @param impulse The other Impulse.
     * @returns A new Impulse instance with the results.
     */
    public modulo(impulse: Impulse): Impulse {
        return new Impulse(this.value % impulse.BaseValue)
    }

    /**
     * Pow the given Impulse with the current Impulse.
     * @param impulse The other Impulse.
     * @returns A new Impulse instance with the results.
     */
    public pow(impulse: Impulse): Impulse {
        return new Impulse(this.value ** impulse.BaseValue)
    }
}
