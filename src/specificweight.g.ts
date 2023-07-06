/** SpecificWeightUnits enumeration */
export enum SpecificWeightUnits {
    /** */
    NewtonsPerCubicMillimeter,
    /** */
    NewtonsPerCubicCentimeter,
    /** */
    NewtonsPerCubicMeter,
    /** */
    KilogramsForcePerCubicMillimeter,
    /** */
    KilogramsForcePerCubicCentimeter,
    /** */
    KilogramsForcePerCubicMeter,
    /** */
    PoundsForcePerCubicInch,
    /** */
    PoundsForcePerCubicFoot,
    /** */
    TonnesForcePerCubicMillimeter,
    /** */
    TonnesForcePerCubicCentimeter,
    /** */
    TonnesForcePerCubicMeter,
    /** */
    KilonewtonsPerCubicMillimeter,
    /** */
    KilonewtonsPerCubicCentimeter,
    /** */
    KilonewtonsPerCubicMeter,
    /** */
    MeganewtonsPerCubicMeter,
    /** */
    KilopoundsForcePerCubicInch,
    /** */
    KilopoundsForcePerCubicFoot,
    /** */
    NewtonPerCubicMillimeter,
    /** */
    NewtonPerCubicCentimeter,
    /** */
    NewtonPerCubicMeter,
    /** */
    KilogramForcePerCubicMillimeter,
    /** */
    KilogramForcePerCubicCentimeter,
    /** */
    KilogramForcePerCubicMeter,
    /** */
    PoundForcePerCubicInch,
    /** */
    PoundForcePerCubicFoot,
    /** */
    TonneForcePerCubicMillimeter,
    /** */
    TonneForcePerCubicCentimeter,
    /** */
    TonneForcePerCubicMeter,
    /** */
    KilonewtonPerCubicMillimeter,
    /** */
    KilonewtonPerCubicCentimeter,
    /** */
    KilonewtonPerCubicMeter,
    /** */
    MeganewtonPerCubicMeter,
    /** */
    KilopoundForcePerCubicInch,
    /** */
    KilopoundForcePerCubicFoot
}

/** The SpecificWeight, or more precisely, the volumetric weight density, of a substance is its weight per unit volume. */
export class SpecificWeight {
    private value: number;
    private newtonspercubicmillimeterLazy: number | null = null;
    private newtonspercubiccentimeterLazy: number | null = null;
    private newtonspercubicmeterLazy: number | null = null;
    private kilogramsforcepercubicmillimeterLazy: number | null = null;
    private kilogramsforcepercubiccentimeterLazy: number | null = null;
    private kilogramsforcepercubicmeterLazy: number | null = null;
    private poundsforcepercubicinchLazy: number | null = null;
    private poundsforcepercubicfootLazy: number | null = null;
    private tonnesforcepercubicmillimeterLazy: number | null = null;
    private tonnesforcepercubiccentimeterLazy: number | null = null;
    private tonnesforcepercubicmeterLazy: number | null = null;
    private kilonewtonspercubicmillimeterLazy: number | null = null;
    private kilonewtonspercubiccentimeterLazy: number | null = null;
    private kilonewtonspercubicmeterLazy: number | null = null;
    private meganewtonspercubicmeterLazy: number | null = null;
    private kilopoundsforcepercubicinchLazy: number | null = null;
    private kilopoundsforcepercubicfootLazy: number | null = null;

    /**
     * Create a new SpecificWeight.
     * @param value The value.
     * @param fromUnit The ‘SpecificWeight’ unit to create from.
     * The default unit is NewtonsPerCubicMeter
     */
    public constructor(value: number, fromUnit: SpecificWeightUnits = SpecificWeightUnits.NewtonsPerCubicMeter) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of SpecificWeight is NewtonsPerCubicMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get NewtonsPerCubicMillimeter(): number {
        if(this.newtonspercubicmillimeterLazy !== null){
            return this.newtonspercubicmillimeterLazy;
        }
        return this.newtonspercubicmillimeterLazy = this.convertFromBase(SpecificWeightUnits.NewtonsPerCubicMillimeter);
    }

    /** */
    public get NewtonsPerCubicCentimeter(): number {
        if(this.newtonspercubiccentimeterLazy !== null){
            return this.newtonspercubiccentimeterLazy;
        }
        return this.newtonspercubiccentimeterLazy = this.convertFromBase(SpecificWeightUnits.NewtonsPerCubicCentimeter);
    }

    /** */
    public get NewtonsPerCubicMeter(): number {
        if(this.newtonspercubicmeterLazy !== null){
            return this.newtonspercubicmeterLazy;
        }
        return this.newtonspercubicmeterLazy = this.convertFromBase(SpecificWeightUnits.NewtonsPerCubicMeter);
    }

    /** */
    public get KilogramsForcePerCubicMillimeter(): number {
        if(this.kilogramsforcepercubicmillimeterLazy !== null){
            return this.kilogramsforcepercubicmillimeterLazy;
        }
        return this.kilogramsforcepercubicmillimeterLazy = this.convertFromBase(SpecificWeightUnits.KilogramsForcePerCubicMillimeter);
    }

    /** */
    public get KilogramsForcePerCubicCentimeter(): number {
        if(this.kilogramsforcepercubiccentimeterLazy !== null){
            return this.kilogramsforcepercubiccentimeterLazy;
        }
        return this.kilogramsforcepercubiccentimeterLazy = this.convertFromBase(SpecificWeightUnits.KilogramsForcePerCubicCentimeter);
    }

    /** */
    public get KilogramsForcePerCubicMeter(): number {
        if(this.kilogramsforcepercubicmeterLazy !== null){
            return this.kilogramsforcepercubicmeterLazy;
        }
        return this.kilogramsforcepercubicmeterLazy = this.convertFromBase(SpecificWeightUnits.KilogramsForcePerCubicMeter);
    }

    /** */
    public get PoundsForcePerCubicInch(): number {
        if(this.poundsforcepercubicinchLazy !== null){
            return this.poundsforcepercubicinchLazy;
        }
        return this.poundsforcepercubicinchLazy = this.convertFromBase(SpecificWeightUnits.PoundsForcePerCubicInch);
    }

    /** */
    public get PoundsForcePerCubicFoot(): number {
        if(this.poundsforcepercubicfootLazy !== null){
            return this.poundsforcepercubicfootLazy;
        }
        return this.poundsforcepercubicfootLazy = this.convertFromBase(SpecificWeightUnits.PoundsForcePerCubicFoot);
    }

    /** */
    public get TonnesForcePerCubicMillimeter(): number {
        if(this.tonnesforcepercubicmillimeterLazy !== null){
            return this.tonnesforcepercubicmillimeterLazy;
        }
        return this.tonnesforcepercubicmillimeterLazy = this.convertFromBase(SpecificWeightUnits.TonnesForcePerCubicMillimeter);
    }

    /** */
    public get TonnesForcePerCubicCentimeter(): number {
        if(this.tonnesforcepercubiccentimeterLazy !== null){
            return this.tonnesforcepercubiccentimeterLazy;
        }
        return this.tonnesforcepercubiccentimeterLazy = this.convertFromBase(SpecificWeightUnits.TonnesForcePerCubicCentimeter);
    }

    /** */
    public get TonnesForcePerCubicMeter(): number {
        if(this.tonnesforcepercubicmeterLazy !== null){
            return this.tonnesforcepercubicmeterLazy;
        }
        return this.tonnesforcepercubicmeterLazy = this.convertFromBase(SpecificWeightUnits.TonnesForcePerCubicMeter);
    }

    /** */
    public get KilonewtonsPerCubicMillimeter(): number {
        if(this.kilonewtonspercubicmillimeterLazy !== null){
            return this.kilonewtonspercubicmillimeterLazy;
        }
        return this.kilonewtonspercubicmillimeterLazy = this.convertFromBase(SpecificWeightUnits.KilonewtonsPerCubicMillimeter);
    }

    /** */
    public get KilonewtonsPerCubicCentimeter(): number {
        if(this.kilonewtonspercubiccentimeterLazy !== null){
            return this.kilonewtonspercubiccentimeterLazy;
        }
        return this.kilonewtonspercubiccentimeterLazy = this.convertFromBase(SpecificWeightUnits.KilonewtonsPerCubicCentimeter);
    }

    /** */
    public get KilonewtonsPerCubicMeter(): number {
        if(this.kilonewtonspercubicmeterLazy !== null){
            return this.kilonewtonspercubicmeterLazy;
        }
        return this.kilonewtonspercubicmeterLazy = this.convertFromBase(SpecificWeightUnits.KilonewtonsPerCubicMeter);
    }

    /** */
    public get MeganewtonsPerCubicMeter(): number {
        if(this.meganewtonspercubicmeterLazy !== null){
            return this.meganewtonspercubicmeterLazy;
        }
        return this.meganewtonspercubicmeterLazy = this.convertFromBase(SpecificWeightUnits.MeganewtonsPerCubicMeter);
    }

    /** */
    public get KilopoundsForcePerCubicInch(): number {
        if(this.kilopoundsforcepercubicinchLazy !== null){
            return this.kilopoundsforcepercubicinchLazy;
        }
        return this.kilopoundsforcepercubicinchLazy = this.convertFromBase(SpecificWeightUnits.KilopoundsForcePerCubicInch);
    }

    /** */
    public get KilopoundsForcePerCubicFoot(): number {
        if(this.kilopoundsforcepercubicfootLazy !== null){
            return this.kilopoundsforcepercubicfootLazy;
        }
        return this.kilopoundsforcepercubicfootLazy = this.convertFromBase(SpecificWeightUnits.KilopoundsForcePerCubicFoot);
    }

    /**
     * Create a new SpecificWeight instance from a NewtonsPerCubicMillimeter
     *
     * @param value The unit as NewtonsPerCubicMillimeter to create a new SpecificWeight from.
     * @returns The new SpecificWeight instance.
     */
    public static FromNewtonsPerCubicMillimeter(value: number): SpecificWeight {
        return new SpecificWeight(value, SpecificWeightUnits.NewtonsPerCubicMillimeter);
    }

    /**
     * Create a new SpecificWeight instance from a NewtonsPerCubicCentimeter
     *
     * @param value The unit as NewtonsPerCubicCentimeter to create a new SpecificWeight from.
     * @returns The new SpecificWeight instance.
     */
    public static FromNewtonsPerCubicCentimeter(value: number): SpecificWeight {
        return new SpecificWeight(value, SpecificWeightUnits.NewtonsPerCubicCentimeter);
    }

    /**
     * Create a new SpecificWeight instance from a NewtonsPerCubicMeter
     *
     * @param value The unit as NewtonsPerCubicMeter to create a new SpecificWeight from.
     * @returns The new SpecificWeight instance.
     */
    public static FromNewtonsPerCubicMeter(value: number): SpecificWeight {
        return new SpecificWeight(value, SpecificWeightUnits.NewtonsPerCubicMeter);
    }

    /**
     * Create a new SpecificWeight instance from a KilogramsForcePerCubicMillimeter
     *
     * @param value The unit as KilogramsForcePerCubicMillimeter to create a new SpecificWeight from.
     * @returns The new SpecificWeight instance.
     */
    public static FromKilogramsForcePerCubicMillimeter(value: number): SpecificWeight {
        return new SpecificWeight(value, SpecificWeightUnits.KilogramsForcePerCubicMillimeter);
    }

    /**
     * Create a new SpecificWeight instance from a KilogramsForcePerCubicCentimeter
     *
     * @param value The unit as KilogramsForcePerCubicCentimeter to create a new SpecificWeight from.
     * @returns The new SpecificWeight instance.
     */
    public static FromKilogramsForcePerCubicCentimeter(value: number): SpecificWeight {
        return new SpecificWeight(value, SpecificWeightUnits.KilogramsForcePerCubicCentimeter);
    }

    /**
     * Create a new SpecificWeight instance from a KilogramsForcePerCubicMeter
     *
     * @param value The unit as KilogramsForcePerCubicMeter to create a new SpecificWeight from.
     * @returns The new SpecificWeight instance.
     */
    public static FromKilogramsForcePerCubicMeter(value: number): SpecificWeight {
        return new SpecificWeight(value, SpecificWeightUnits.KilogramsForcePerCubicMeter);
    }

    /**
     * Create a new SpecificWeight instance from a PoundsForcePerCubicInch
     *
     * @param value The unit as PoundsForcePerCubicInch to create a new SpecificWeight from.
     * @returns The new SpecificWeight instance.
     */
    public static FromPoundsForcePerCubicInch(value: number): SpecificWeight {
        return new SpecificWeight(value, SpecificWeightUnits.PoundsForcePerCubicInch);
    }

    /**
     * Create a new SpecificWeight instance from a PoundsForcePerCubicFoot
     *
     * @param value The unit as PoundsForcePerCubicFoot to create a new SpecificWeight from.
     * @returns The new SpecificWeight instance.
     */
    public static FromPoundsForcePerCubicFoot(value: number): SpecificWeight {
        return new SpecificWeight(value, SpecificWeightUnits.PoundsForcePerCubicFoot);
    }

    /**
     * Create a new SpecificWeight instance from a TonnesForcePerCubicMillimeter
     *
     * @param value The unit as TonnesForcePerCubicMillimeter to create a new SpecificWeight from.
     * @returns The new SpecificWeight instance.
     */
    public static FromTonnesForcePerCubicMillimeter(value: number): SpecificWeight {
        return new SpecificWeight(value, SpecificWeightUnits.TonnesForcePerCubicMillimeter);
    }

    /**
     * Create a new SpecificWeight instance from a TonnesForcePerCubicCentimeter
     *
     * @param value The unit as TonnesForcePerCubicCentimeter to create a new SpecificWeight from.
     * @returns The new SpecificWeight instance.
     */
    public static FromTonnesForcePerCubicCentimeter(value: number): SpecificWeight {
        return new SpecificWeight(value, SpecificWeightUnits.TonnesForcePerCubicCentimeter);
    }

    /**
     * Create a new SpecificWeight instance from a TonnesForcePerCubicMeter
     *
     * @param value The unit as TonnesForcePerCubicMeter to create a new SpecificWeight from.
     * @returns The new SpecificWeight instance.
     */
    public static FromTonnesForcePerCubicMeter(value: number): SpecificWeight {
        return new SpecificWeight(value, SpecificWeightUnits.TonnesForcePerCubicMeter);
    }

    /**
     * Create a new SpecificWeight instance from a KilonewtonsPerCubicMillimeter
     *
     * @param value The unit as KilonewtonsPerCubicMillimeter to create a new SpecificWeight from.
     * @returns The new SpecificWeight instance.
     */
    public static FromKilonewtonsPerCubicMillimeter(value: number): SpecificWeight {
        return new SpecificWeight(value, SpecificWeightUnits.KilonewtonsPerCubicMillimeter);
    }

    /**
     * Create a new SpecificWeight instance from a KilonewtonsPerCubicCentimeter
     *
     * @param value The unit as KilonewtonsPerCubicCentimeter to create a new SpecificWeight from.
     * @returns The new SpecificWeight instance.
     */
    public static FromKilonewtonsPerCubicCentimeter(value: number): SpecificWeight {
        return new SpecificWeight(value, SpecificWeightUnits.KilonewtonsPerCubicCentimeter);
    }

    /**
     * Create a new SpecificWeight instance from a KilonewtonsPerCubicMeter
     *
     * @param value The unit as KilonewtonsPerCubicMeter to create a new SpecificWeight from.
     * @returns The new SpecificWeight instance.
     */
    public static FromKilonewtonsPerCubicMeter(value: number): SpecificWeight {
        return new SpecificWeight(value, SpecificWeightUnits.KilonewtonsPerCubicMeter);
    }

    /**
     * Create a new SpecificWeight instance from a MeganewtonsPerCubicMeter
     *
     * @param value The unit as MeganewtonsPerCubicMeter to create a new SpecificWeight from.
     * @returns The new SpecificWeight instance.
     */
    public static FromMeganewtonsPerCubicMeter(value: number): SpecificWeight {
        return new SpecificWeight(value, SpecificWeightUnits.MeganewtonsPerCubicMeter);
    }

    /**
     * Create a new SpecificWeight instance from a KilopoundsForcePerCubicInch
     *
     * @param value The unit as KilopoundsForcePerCubicInch to create a new SpecificWeight from.
     * @returns The new SpecificWeight instance.
     */
    public static FromKilopoundsForcePerCubicInch(value: number): SpecificWeight {
        return new SpecificWeight(value, SpecificWeightUnits.KilopoundsForcePerCubicInch);
    }

    /**
     * Create a new SpecificWeight instance from a KilopoundsForcePerCubicFoot
     *
     * @param value The unit as KilopoundsForcePerCubicFoot to create a new SpecificWeight from.
     * @returns The new SpecificWeight instance.
     */
    public static FromKilopoundsForcePerCubicFoot(value: number): SpecificWeight {
        return new SpecificWeight(value, SpecificWeightUnits.KilopoundsForcePerCubicFoot);
    }

    private convertFromBase(toUnit: SpecificWeightUnits): number {
        switch (toUnit) {
                
            case SpecificWeightUnits.NewtonsPerCubicMillimeter:
            case SpecificWeightUnits.NewtonsPerCubicMillimeter:        
                return this.value * 0.000000001;
            case SpecificWeightUnits.NewtonsPerCubicCentimeter:
            case SpecificWeightUnits.NewtonsPerCubicCentimeter:        
                return this.value * 0.000001;
            case SpecificWeightUnits.NewtonsPerCubicMeter:
            case SpecificWeightUnits.NewtonsPerCubicMeter:        
                return this.value;
            case SpecificWeightUnits.KilogramsForcePerCubicMillimeter:
            case SpecificWeightUnits.KilogramsForcePerCubicMillimeter:        
                return this.value / 9.80665e9;
            case SpecificWeightUnits.KilogramsForcePerCubicCentimeter:
            case SpecificWeightUnits.KilogramsForcePerCubicCentimeter:        
                return this.value / 9.80665e6;
            case SpecificWeightUnits.KilogramsForcePerCubicMeter:
            case SpecificWeightUnits.KilogramsForcePerCubicMeter:        
                return this.value / 9.80665;
            case SpecificWeightUnits.PoundsForcePerCubicInch:
            case SpecificWeightUnits.PoundsForcePerCubicInch:        
                return this.value / 2.714471375263134e5;
            case SpecificWeightUnits.PoundsForcePerCubicFoot:
            case SpecificWeightUnits.PoundsForcePerCubicFoot:        
                return this.value / 1.570874638462462e2;
            case SpecificWeightUnits.TonnesForcePerCubicMillimeter:
            case SpecificWeightUnits.TonnesForcePerCubicMillimeter:        
                return this.value / 9.80665e12;
            case SpecificWeightUnits.TonnesForcePerCubicCentimeter:
            case SpecificWeightUnits.TonnesForcePerCubicCentimeter:        
                return this.value / 9.80665e9;
            case SpecificWeightUnits.TonnesForcePerCubicMeter:
            case SpecificWeightUnits.TonnesForcePerCubicMeter:        
                return this.value / 9.80665e3;
            case SpecificWeightUnits.KilonewtonsPerCubicMillimeter:
            case SpecificWeightUnits.KilonewtonsPerCubicMillimeter:        
                return (this.value * 0.000000001) / 1000;
            case SpecificWeightUnits.KilonewtonsPerCubicCentimeter:
            case SpecificWeightUnits.KilonewtonsPerCubicCentimeter:        
                return (this.value * 0.000001) / 1000;
            case SpecificWeightUnits.KilonewtonsPerCubicMeter:
            case SpecificWeightUnits.KilonewtonsPerCubicMeter:        
                return (this.value) / 1000;
            case SpecificWeightUnits.MeganewtonsPerCubicMeter:
            case SpecificWeightUnits.MeganewtonsPerCubicMeter:        
                return (this.value) / 1000000;
            case SpecificWeightUnits.KilopoundsForcePerCubicInch:
            case SpecificWeightUnits.KilopoundsForcePerCubicInch:        
                return (this.value / 2.714471375263134e5) / 1000;
            case SpecificWeightUnits.KilopoundsForcePerCubicFoot:
            case SpecificWeightUnits.KilopoundsForcePerCubicFoot:        
                return (this.value / 1.570874638462462e2) / 1000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: SpecificWeightUnits): number {
        switch (fromUnit) {
                
            case SpecificWeightUnits.NewtonsPerCubicMillimeter:
            case SpecificWeightUnits.NewtonsPerCubicMillimeter:        
                return value * 1000000000;
            case SpecificWeightUnits.NewtonsPerCubicCentimeter:
            case SpecificWeightUnits.NewtonsPerCubicCentimeter:        
                return value * 1000000;
            case SpecificWeightUnits.NewtonsPerCubicMeter:
            case SpecificWeightUnits.NewtonsPerCubicMeter:        
                return value;
            case SpecificWeightUnits.KilogramsForcePerCubicMillimeter:
            case SpecificWeightUnits.KilogramsForcePerCubicMillimeter:        
                return value * 9.80665e9;
            case SpecificWeightUnits.KilogramsForcePerCubicCentimeter:
            case SpecificWeightUnits.KilogramsForcePerCubicCentimeter:        
                return value * 9.80665e6;
            case SpecificWeightUnits.KilogramsForcePerCubicMeter:
            case SpecificWeightUnits.KilogramsForcePerCubicMeter:        
                return value * 9.80665;
            case SpecificWeightUnits.PoundsForcePerCubicInch:
            case SpecificWeightUnits.PoundsForcePerCubicInch:        
                return value * 2.714471375263134e5;
            case SpecificWeightUnits.PoundsForcePerCubicFoot:
            case SpecificWeightUnits.PoundsForcePerCubicFoot:        
                return value * 1.570874638462462e2;
            case SpecificWeightUnits.TonnesForcePerCubicMillimeter:
            case SpecificWeightUnits.TonnesForcePerCubicMillimeter:        
                return value * 9.80665e12;
            case SpecificWeightUnits.TonnesForcePerCubicCentimeter:
            case SpecificWeightUnits.TonnesForcePerCubicCentimeter:        
                return value * 9.80665e9;
            case SpecificWeightUnits.TonnesForcePerCubicMeter:
            case SpecificWeightUnits.TonnesForcePerCubicMeter:        
                return value * 9.80665e3;
            case SpecificWeightUnits.KilonewtonsPerCubicMillimeter:
            case SpecificWeightUnits.KilonewtonsPerCubicMillimeter:        
                return (value * 1000000000) * 1000;
            case SpecificWeightUnits.KilonewtonsPerCubicCentimeter:
            case SpecificWeightUnits.KilonewtonsPerCubicCentimeter:        
                return (value * 1000000) * 1000;
            case SpecificWeightUnits.KilonewtonsPerCubicMeter:
            case SpecificWeightUnits.KilonewtonsPerCubicMeter:        
                return (value) * 1000;
            case SpecificWeightUnits.MeganewtonsPerCubicMeter:
            case SpecificWeightUnits.MeganewtonsPerCubicMeter:        
                return (value) * 1000000;
            case SpecificWeightUnits.KilopoundsForcePerCubicInch:
            case SpecificWeightUnits.KilopoundsForcePerCubicInch:        
                return (value * 2.714471375263134e5) * 1000;
            case SpecificWeightUnits.KilopoundsForcePerCubicFoot:
            case SpecificWeightUnits.KilopoundsForcePerCubicFoot:        
                return (value * 1.570874638462462e2) * 1000;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the SpecificWeight to string.
     * Note! the default format for SpecificWeight is NewtonsPerCubicMeter.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the SpecificWeight.
     * @returns The string format of the SpecificWeight.
     */
    public toString(unit: SpecificWeightUnits = SpecificWeightUnits.NewtonsPerCubicMeter): string {

        switch (unit) {
            
            case SpecificWeightUnits.NewtonsPerCubicMillimeter:
                return this.NewtonsPerCubicMillimeter + ` N/mm³`;
            case SpecificWeightUnits.NewtonsPerCubicCentimeter:
                return this.NewtonsPerCubicCentimeter + ` N/cm³`;
            case SpecificWeightUnits.NewtonsPerCubicMeter:
                return this.NewtonsPerCubicMeter + ` N/m³`;
            case SpecificWeightUnits.KilogramsForcePerCubicMillimeter:
                return this.KilogramsForcePerCubicMillimeter + ` kgf/mm³`;
            case SpecificWeightUnits.KilogramsForcePerCubicCentimeter:
                return this.KilogramsForcePerCubicCentimeter + ` kgf/cm³`;
            case SpecificWeightUnits.KilogramsForcePerCubicMeter:
                return this.KilogramsForcePerCubicMeter + ` kgf/m³`;
            case SpecificWeightUnits.PoundsForcePerCubicInch:
                return this.PoundsForcePerCubicInch + ` lbf/in³`;
            case SpecificWeightUnits.PoundsForcePerCubicFoot:
                return this.PoundsForcePerCubicFoot + ` lbf/ft³`;
            case SpecificWeightUnits.TonnesForcePerCubicMillimeter:
                return this.TonnesForcePerCubicMillimeter + ` tf/mm³`;
            case SpecificWeightUnits.TonnesForcePerCubicCentimeter:
                return this.TonnesForcePerCubicCentimeter + ` tf/cm³`;
            case SpecificWeightUnits.TonnesForcePerCubicMeter:
                return this.TonnesForcePerCubicMeter + ` tf/m³`;
            case SpecificWeightUnits.KilonewtonsPerCubicMillimeter:
                return this.KilonewtonsPerCubicMillimeter + ` `;
            case SpecificWeightUnits.KilonewtonsPerCubicCentimeter:
                return this.KilonewtonsPerCubicCentimeter + ` `;
            case SpecificWeightUnits.KilonewtonsPerCubicMeter:
                return this.KilonewtonsPerCubicMeter + ` `;
            case SpecificWeightUnits.MeganewtonsPerCubicMeter:
                return this.MeganewtonsPerCubicMeter + ` `;
            case SpecificWeightUnits.KilopoundsForcePerCubicInch:
                return this.KilopoundsForcePerCubicInch + ` `;
            case SpecificWeightUnits.KilopoundsForcePerCubicFoot:
                return this.KilopoundsForcePerCubicFoot + ` `;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get SpecificWeight unit abbreviation.
     * Note! the default abbreviation for SpecificWeight is NewtonsPerCubicMeter.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the SpecificWeight.
     * @returns The abbreviation string of SpecificWeight.
     */
    public getUnitAbbreviation(unitAbbreviation: SpecificWeightUnits = SpecificWeightUnits.NewtonsPerCubicMeter): string {

        switch (unitAbbreviation) {
            
            case SpecificWeightUnits.NewtonsPerCubicMillimeter:
                return `N/mm³`;
            case SpecificWeightUnits.NewtonsPerCubicCentimeter:
                return `N/cm³`;
            case SpecificWeightUnits.NewtonsPerCubicMeter:
                return `N/m³`;
            case SpecificWeightUnits.KilogramsForcePerCubicMillimeter:
                return `kgf/mm³`;
            case SpecificWeightUnits.KilogramsForcePerCubicCentimeter:
                return `kgf/cm³`;
            case SpecificWeightUnits.KilogramsForcePerCubicMeter:
                return `kgf/m³`;
            case SpecificWeightUnits.PoundsForcePerCubicInch:
                return `lbf/in³`;
            case SpecificWeightUnits.PoundsForcePerCubicFoot:
                return `lbf/ft³`;
            case SpecificWeightUnits.TonnesForcePerCubicMillimeter:
                return `tf/mm³`;
            case SpecificWeightUnits.TonnesForcePerCubicCentimeter:
                return `tf/cm³`;
            case SpecificWeightUnits.TonnesForcePerCubicMeter:
                return `tf/m³`;
            case SpecificWeightUnits.KilonewtonsPerCubicMillimeter:
                return ``;
            case SpecificWeightUnits.KilonewtonsPerCubicCentimeter:
                return ``;
            case SpecificWeightUnits.KilonewtonsPerCubicMeter:
                return ``;
            case SpecificWeightUnits.MeganewtonsPerCubicMeter:
                return ``;
            case SpecificWeightUnits.KilopoundsForcePerCubicInch:
                return ``;
            case SpecificWeightUnits.KilopoundsForcePerCubicFoot:
                return ``;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given SpecificWeight are equals to the current SpecificWeight.
     * @param specificWeight The other SpecificWeight.
     * @returns True if the given SpecificWeight are equal to the current SpecificWeight.
     */
    public equals(specificWeight: SpecificWeight): boolean {
        return this.value === specificWeight.BaseValue;
    }

    /**
     * Compare the given SpecificWeight against the current SpecificWeight.
     * @param specificWeight The other SpecificWeight.
     * @returns 0 if they are equal, -1 if the current SpecificWeight is less then other, 1 if the current SpecificWeight is greater then other.
     */
    public compareTo(specificWeight: SpecificWeight): number {

        if (this.value > specificWeight.BaseValue)
            return 1;
        if (this.value < specificWeight.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given SpecificWeight with the current SpecificWeight.
     * @param specificWeight The other SpecificWeight.
     * @returns A new SpecificWeight instance with the results.
     */
    public add(specificWeight: SpecificWeight): SpecificWeight {
        return new SpecificWeight(this.value + specificWeight.BaseValue)
    }

    /**
     * Subtract the given SpecificWeight with the current SpecificWeight.
     * @param specificWeight The other SpecificWeight.
     * @returns A new SpecificWeight instance with the results.
     */
    public subtract(specificWeight: SpecificWeight): SpecificWeight {
        return new SpecificWeight(this.value - specificWeight.BaseValue)
    }

    /**
     * Multiply the given SpecificWeight with the current SpecificWeight.
     * @param specificWeight The other SpecificWeight.
     * @returns A new SpecificWeight instance with the results.
     */
    public multiply(specificWeight: SpecificWeight): SpecificWeight {
        return new SpecificWeight(this.value * specificWeight.BaseValue)
    }

    /**
     * Divide the given SpecificWeight with the current SpecificWeight.
     * @param specificWeight The other SpecificWeight.
     * @returns A new SpecificWeight instance with the results.
     */
    public divide(specificWeight: SpecificWeight): SpecificWeight {
        return new SpecificWeight(this.value / specificWeight.BaseValue)
    }

    /**
     * Modulo the given SpecificWeight with the current SpecificWeight.
     * @param specificWeight The other SpecificWeight.
     * @returns A new SpecificWeight instance with the results.
     */
    public modulo(specificWeight: SpecificWeight): SpecificWeight {
        return new SpecificWeight(this.value % specificWeight.BaseValue)
    }

    /**
     * Pow the given SpecificWeight with the current SpecificWeight.
     * @param specificWeight The other SpecificWeight.
     * @returns A new SpecificWeight instance with the results.
     */
    public pow(specificWeight: SpecificWeight): SpecificWeight {
        return new SpecificWeight(this.value ** specificWeight.BaseValue)
    }
}
