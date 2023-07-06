/** RotationalStiffnessUnits enumeration */
export enum RotationalStiffnessUnits {
    /** */
    NewtonMetersPerRadian,
    /** */
    PoundForceFeetPerDegrees,
    /** */
    KilopoundForceFeetPerDegrees,
    /** */
    NewtonMillimetersPerDegree,
    /** */
    NewtonMetersPerDegree,
    /** */
    NewtonMillimetersPerRadian,
    /** */
    PoundForceFeetPerRadian,
    /** */
    KilonewtonMetersPerRadian,
    /** */
    MeganewtonMetersPerRadian,
    /** */
    NanonewtonMillimetersPerDegree,
    /** */
    MicronewtonMillimetersPerDegree,
    /** */
    MillinewtonMillimetersPerDegree,
    /** */
    CentinewtonMillimetersPerDegree,
    /** */
    DecinewtonMillimetersPerDegree,
    /** */
    DecanewtonMillimetersPerDegree,
    /** */
    KilonewtonMillimetersPerDegree,
    /** */
    MeganewtonMillimetersPerDegree,
    /** */
    NanonewtonMetersPerDegree,
    /** */
    MicronewtonMetersPerDegree,
    /** */
    MillinewtonMetersPerDegree,
    /** */
    CentinewtonMetersPerDegree,
    /** */
    DecinewtonMetersPerDegree,
    /** */
    DecanewtonMetersPerDegree,
    /** */
    KilonewtonMetersPerDegree,
    /** */
    MeganewtonMetersPerDegree,
    /** */
    NanonewtonMillimetersPerRadian,
    /** */
    MicronewtonMillimetersPerRadian,
    /** */
    MillinewtonMillimetersPerRadian,
    /** */
    CentinewtonMillimetersPerRadian,
    /** */
    DecinewtonMillimetersPerRadian,
    /** */
    DecanewtonMillimetersPerRadian,
    /** */
    KilonewtonMillimetersPerRadian,
    /** */
    MeganewtonMillimetersPerRadian,
    /** */
    NewtonMeterPerRadian,
    /** */
    PoundForceFootPerDegrees,
    /** */
    KilopoundForceFootPerDegrees,
    /** */
    NewtonMillimeterPerDegree,
    /** */
    NewtonMeterPerDegree,
    /** */
    NewtonMillimeterPerRadian,
    /** */
    KilonewtonMeterPerRadian,
    /** */
    MeganewtonMeterPerRadian,
    /** */
    NanonewtonMillimeterPerDegree,
    /** */
    MicronewtonMillimeterPerDegree,
    /** */
    MillinewtonMillimeterPerDegree,
    /** */
    CentinewtonMillimeterPerDegree,
    /** */
    DecinewtonMillimeterPerDegree,
    /** */
    DecanewtonMillimeterPerDegree,
    /** */
    KilonewtonMillimeterPerDegree,
    /** */
    MeganewtonMillimeterPerDegree,
    /** */
    NanonewtonMeterPerDegree,
    /** */
    MicronewtonMeterPerDegree,
    /** */
    MillinewtonMeterPerDegree,
    /** */
    CentinewtonMeterPerDegree,
    /** */
    DecinewtonMeterPerDegree,
    /** */
    DecanewtonMeterPerDegree,
    /** */
    KilonewtonMeterPerDegree,
    /** */
    MeganewtonMeterPerDegree,
    /** */
    NanonewtonMillimeterPerRadian,
    /** */
    MicronewtonMillimeterPerRadian,
    /** */
    MillinewtonMillimeterPerRadian,
    /** */
    CentinewtonMillimeterPerRadian,
    /** */
    DecinewtonMillimeterPerRadian,
    /** */
    DecanewtonMillimeterPerRadian,
    /** */
    KilonewtonMillimeterPerRadian,
    /** */
    MeganewtonMillimeterPerRadian
}

/** https://en.wikipedia.org/wiki/Stiffness#Rotational_stiffness */
export class RotationalStiffness {
    private value: number;
    private newtonmetersperradianLazy: number | null = null;
    private poundforcefeetperdegreesLazy: number | null = null;
    private kilopoundforcefeetperdegreesLazy: number | null = null;
    private newtonmillimetersperdegreeLazy: number | null = null;
    private newtonmetersperdegreeLazy: number | null = null;
    private newtonmillimetersperradianLazy: number | null = null;
    private poundforcefeetperradianLazy: number | null = null;
    private kilonewtonmetersperradianLazy: number | null = null;
    private meganewtonmetersperradianLazy: number | null = null;
    private nanonewtonmillimetersperdegreeLazy: number | null = null;
    private micronewtonmillimetersperdegreeLazy: number | null = null;
    private millinewtonmillimetersperdegreeLazy: number | null = null;
    private centinewtonmillimetersperdegreeLazy: number | null = null;
    private decinewtonmillimetersperdegreeLazy: number | null = null;
    private decanewtonmillimetersperdegreeLazy: number | null = null;
    private kilonewtonmillimetersperdegreeLazy: number | null = null;
    private meganewtonmillimetersperdegreeLazy: number | null = null;
    private nanonewtonmetersperdegreeLazy: number | null = null;
    private micronewtonmetersperdegreeLazy: number | null = null;
    private millinewtonmetersperdegreeLazy: number | null = null;
    private centinewtonmetersperdegreeLazy: number | null = null;
    private decinewtonmetersperdegreeLazy: number | null = null;
    private decanewtonmetersperdegreeLazy: number | null = null;
    private kilonewtonmetersperdegreeLazy: number | null = null;
    private meganewtonmetersperdegreeLazy: number | null = null;
    private nanonewtonmillimetersperradianLazy: number | null = null;
    private micronewtonmillimetersperradianLazy: number | null = null;
    private millinewtonmillimetersperradianLazy: number | null = null;
    private centinewtonmillimetersperradianLazy: number | null = null;
    private decinewtonmillimetersperradianLazy: number | null = null;
    private decanewtonmillimetersperradianLazy: number | null = null;
    private kilonewtonmillimetersperradianLazy: number | null = null;
    private meganewtonmillimetersperradianLazy: number | null = null;

    /**
     * Create a new RotationalStiffness.
     * @param value The value.
     * @param fromUnit The ‘RotationalStiffness’ unit to create from.
     * The default unit is NewtonMetersPerRadian
     */
    public constructor(value: number, fromUnit: RotationalStiffnessUnits = RotationalStiffnessUnits.NewtonMetersPerRadian) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of RotationalStiffness is NewtonMetersPerRadian.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get NewtonMetersPerRadian(): number {
        if(this.newtonmetersperradianLazy !== null){
            return this.newtonmetersperradianLazy;
        }
        return this.newtonmetersperradianLazy = this.convertFromBase(RotationalStiffnessUnits.NewtonMetersPerRadian);
    }

    /** */
    public get PoundForceFeetPerDegrees(): number {
        if(this.poundforcefeetperdegreesLazy !== null){
            return this.poundforcefeetperdegreesLazy;
        }
        return this.poundforcefeetperdegreesLazy = this.convertFromBase(RotationalStiffnessUnits.PoundForceFeetPerDegrees);
    }

    /** */
    public get KilopoundForceFeetPerDegrees(): number {
        if(this.kilopoundforcefeetperdegreesLazy !== null){
            return this.kilopoundforcefeetperdegreesLazy;
        }
        return this.kilopoundforcefeetperdegreesLazy = this.convertFromBase(RotationalStiffnessUnits.KilopoundForceFeetPerDegrees);
    }

    /** */
    public get NewtonMillimetersPerDegree(): number {
        if(this.newtonmillimetersperdegreeLazy !== null){
            return this.newtonmillimetersperdegreeLazy;
        }
        return this.newtonmillimetersperdegreeLazy = this.convertFromBase(RotationalStiffnessUnits.NewtonMillimetersPerDegree);
    }

    /** */
    public get NewtonMetersPerDegree(): number {
        if(this.newtonmetersperdegreeLazy !== null){
            return this.newtonmetersperdegreeLazy;
        }
        return this.newtonmetersperdegreeLazy = this.convertFromBase(RotationalStiffnessUnits.NewtonMetersPerDegree);
    }

    /** */
    public get NewtonMillimetersPerRadian(): number {
        if(this.newtonmillimetersperradianLazy !== null){
            return this.newtonmillimetersperradianLazy;
        }
        return this.newtonmillimetersperradianLazy = this.convertFromBase(RotationalStiffnessUnits.NewtonMillimetersPerRadian);
    }

    /** */
    public get PoundForceFeetPerRadian(): number {
        if(this.poundforcefeetperradianLazy !== null){
            return this.poundforcefeetperradianLazy;
        }
        return this.poundforcefeetperradianLazy = this.convertFromBase(RotationalStiffnessUnits.PoundForceFeetPerRadian);
    }

    /** */
    public get KilonewtonMetersPerRadian(): number {
        if(this.kilonewtonmetersperradianLazy !== null){
            return this.kilonewtonmetersperradianLazy;
        }
        return this.kilonewtonmetersperradianLazy = this.convertFromBase(RotationalStiffnessUnits.KilonewtonMetersPerRadian);
    }

    /** */
    public get MeganewtonMetersPerRadian(): number {
        if(this.meganewtonmetersperradianLazy !== null){
            return this.meganewtonmetersperradianLazy;
        }
        return this.meganewtonmetersperradianLazy = this.convertFromBase(RotationalStiffnessUnits.MeganewtonMetersPerRadian);
    }

    /** */
    public get NanonewtonMillimetersPerDegree(): number {
        if(this.nanonewtonmillimetersperdegreeLazy !== null){
            return this.nanonewtonmillimetersperdegreeLazy;
        }
        return this.nanonewtonmillimetersperdegreeLazy = this.convertFromBase(RotationalStiffnessUnits.NanonewtonMillimetersPerDegree);
    }

    /** */
    public get MicronewtonMillimetersPerDegree(): number {
        if(this.micronewtonmillimetersperdegreeLazy !== null){
            return this.micronewtonmillimetersperdegreeLazy;
        }
        return this.micronewtonmillimetersperdegreeLazy = this.convertFromBase(RotationalStiffnessUnits.MicronewtonMillimetersPerDegree);
    }

    /** */
    public get MillinewtonMillimetersPerDegree(): number {
        if(this.millinewtonmillimetersperdegreeLazy !== null){
            return this.millinewtonmillimetersperdegreeLazy;
        }
        return this.millinewtonmillimetersperdegreeLazy = this.convertFromBase(RotationalStiffnessUnits.MillinewtonMillimetersPerDegree);
    }

    /** */
    public get CentinewtonMillimetersPerDegree(): number {
        if(this.centinewtonmillimetersperdegreeLazy !== null){
            return this.centinewtonmillimetersperdegreeLazy;
        }
        return this.centinewtonmillimetersperdegreeLazy = this.convertFromBase(RotationalStiffnessUnits.CentinewtonMillimetersPerDegree);
    }

    /** */
    public get DecinewtonMillimetersPerDegree(): number {
        if(this.decinewtonmillimetersperdegreeLazy !== null){
            return this.decinewtonmillimetersperdegreeLazy;
        }
        return this.decinewtonmillimetersperdegreeLazy = this.convertFromBase(RotationalStiffnessUnits.DecinewtonMillimetersPerDegree);
    }

    /** */
    public get DecanewtonMillimetersPerDegree(): number {
        if(this.decanewtonmillimetersperdegreeLazy !== null){
            return this.decanewtonmillimetersperdegreeLazy;
        }
        return this.decanewtonmillimetersperdegreeLazy = this.convertFromBase(RotationalStiffnessUnits.DecanewtonMillimetersPerDegree);
    }

    /** */
    public get KilonewtonMillimetersPerDegree(): number {
        if(this.kilonewtonmillimetersperdegreeLazy !== null){
            return this.kilonewtonmillimetersperdegreeLazy;
        }
        return this.kilonewtonmillimetersperdegreeLazy = this.convertFromBase(RotationalStiffnessUnits.KilonewtonMillimetersPerDegree);
    }

    /** */
    public get MeganewtonMillimetersPerDegree(): number {
        if(this.meganewtonmillimetersperdegreeLazy !== null){
            return this.meganewtonmillimetersperdegreeLazy;
        }
        return this.meganewtonmillimetersperdegreeLazy = this.convertFromBase(RotationalStiffnessUnits.MeganewtonMillimetersPerDegree);
    }

    /** */
    public get NanonewtonMetersPerDegree(): number {
        if(this.nanonewtonmetersperdegreeLazy !== null){
            return this.nanonewtonmetersperdegreeLazy;
        }
        return this.nanonewtonmetersperdegreeLazy = this.convertFromBase(RotationalStiffnessUnits.NanonewtonMetersPerDegree);
    }

    /** */
    public get MicronewtonMetersPerDegree(): number {
        if(this.micronewtonmetersperdegreeLazy !== null){
            return this.micronewtonmetersperdegreeLazy;
        }
        return this.micronewtonmetersperdegreeLazy = this.convertFromBase(RotationalStiffnessUnits.MicronewtonMetersPerDegree);
    }

    /** */
    public get MillinewtonMetersPerDegree(): number {
        if(this.millinewtonmetersperdegreeLazy !== null){
            return this.millinewtonmetersperdegreeLazy;
        }
        return this.millinewtonmetersperdegreeLazy = this.convertFromBase(RotationalStiffnessUnits.MillinewtonMetersPerDegree);
    }

    /** */
    public get CentinewtonMetersPerDegree(): number {
        if(this.centinewtonmetersperdegreeLazy !== null){
            return this.centinewtonmetersperdegreeLazy;
        }
        return this.centinewtonmetersperdegreeLazy = this.convertFromBase(RotationalStiffnessUnits.CentinewtonMetersPerDegree);
    }

    /** */
    public get DecinewtonMetersPerDegree(): number {
        if(this.decinewtonmetersperdegreeLazy !== null){
            return this.decinewtonmetersperdegreeLazy;
        }
        return this.decinewtonmetersperdegreeLazy = this.convertFromBase(RotationalStiffnessUnits.DecinewtonMetersPerDegree);
    }

    /** */
    public get DecanewtonMetersPerDegree(): number {
        if(this.decanewtonmetersperdegreeLazy !== null){
            return this.decanewtonmetersperdegreeLazy;
        }
        return this.decanewtonmetersperdegreeLazy = this.convertFromBase(RotationalStiffnessUnits.DecanewtonMetersPerDegree);
    }

    /** */
    public get KilonewtonMetersPerDegree(): number {
        if(this.kilonewtonmetersperdegreeLazy !== null){
            return this.kilonewtonmetersperdegreeLazy;
        }
        return this.kilonewtonmetersperdegreeLazy = this.convertFromBase(RotationalStiffnessUnits.KilonewtonMetersPerDegree);
    }

    /** */
    public get MeganewtonMetersPerDegree(): number {
        if(this.meganewtonmetersperdegreeLazy !== null){
            return this.meganewtonmetersperdegreeLazy;
        }
        return this.meganewtonmetersperdegreeLazy = this.convertFromBase(RotationalStiffnessUnits.MeganewtonMetersPerDegree);
    }

    /** */
    public get NanonewtonMillimetersPerRadian(): number {
        if(this.nanonewtonmillimetersperradianLazy !== null){
            return this.nanonewtonmillimetersperradianLazy;
        }
        return this.nanonewtonmillimetersperradianLazy = this.convertFromBase(RotationalStiffnessUnits.NanonewtonMillimetersPerRadian);
    }

    /** */
    public get MicronewtonMillimetersPerRadian(): number {
        if(this.micronewtonmillimetersperradianLazy !== null){
            return this.micronewtonmillimetersperradianLazy;
        }
        return this.micronewtonmillimetersperradianLazy = this.convertFromBase(RotationalStiffnessUnits.MicronewtonMillimetersPerRadian);
    }

    /** */
    public get MillinewtonMillimetersPerRadian(): number {
        if(this.millinewtonmillimetersperradianLazy !== null){
            return this.millinewtonmillimetersperradianLazy;
        }
        return this.millinewtonmillimetersperradianLazy = this.convertFromBase(RotationalStiffnessUnits.MillinewtonMillimetersPerRadian);
    }

    /** */
    public get CentinewtonMillimetersPerRadian(): number {
        if(this.centinewtonmillimetersperradianLazy !== null){
            return this.centinewtonmillimetersperradianLazy;
        }
        return this.centinewtonmillimetersperradianLazy = this.convertFromBase(RotationalStiffnessUnits.CentinewtonMillimetersPerRadian);
    }

    /** */
    public get DecinewtonMillimetersPerRadian(): number {
        if(this.decinewtonmillimetersperradianLazy !== null){
            return this.decinewtonmillimetersperradianLazy;
        }
        return this.decinewtonmillimetersperradianLazy = this.convertFromBase(RotationalStiffnessUnits.DecinewtonMillimetersPerRadian);
    }

    /** */
    public get DecanewtonMillimetersPerRadian(): number {
        if(this.decanewtonmillimetersperradianLazy !== null){
            return this.decanewtonmillimetersperradianLazy;
        }
        return this.decanewtonmillimetersperradianLazy = this.convertFromBase(RotationalStiffnessUnits.DecanewtonMillimetersPerRadian);
    }

    /** */
    public get KilonewtonMillimetersPerRadian(): number {
        if(this.kilonewtonmillimetersperradianLazy !== null){
            return this.kilonewtonmillimetersperradianLazy;
        }
        return this.kilonewtonmillimetersperradianLazy = this.convertFromBase(RotationalStiffnessUnits.KilonewtonMillimetersPerRadian);
    }

    /** */
    public get MeganewtonMillimetersPerRadian(): number {
        if(this.meganewtonmillimetersperradianLazy !== null){
            return this.meganewtonmillimetersperradianLazy;
        }
        return this.meganewtonmillimetersperradianLazy = this.convertFromBase(RotationalStiffnessUnits.MeganewtonMillimetersPerRadian);
    }

    /**
     * Create a new RotationalStiffness instance from a NewtonMetersPerRadian
     *
     * @param value The unit as NewtonMetersPerRadian to create a new RotationalStiffness from.
     * @returns The new RotationalStiffness instance.
     */
    public static FromNewtonMetersPerRadian(value: number): RotationalStiffness {
        return new RotationalStiffness(value, RotationalStiffnessUnits.NewtonMetersPerRadian);
    }

    /**
     * Create a new RotationalStiffness instance from a PoundForceFeetPerDegrees
     *
     * @param value The unit as PoundForceFeetPerDegrees to create a new RotationalStiffness from.
     * @returns The new RotationalStiffness instance.
     */
    public static FromPoundForceFeetPerDegrees(value: number): RotationalStiffness {
        return new RotationalStiffness(value, RotationalStiffnessUnits.PoundForceFeetPerDegrees);
    }

    /**
     * Create a new RotationalStiffness instance from a KilopoundForceFeetPerDegrees
     *
     * @param value The unit as KilopoundForceFeetPerDegrees to create a new RotationalStiffness from.
     * @returns The new RotationalStiffness instance.
     */
    public static FromKilopoundForceFeetPerDegrees(value: number): RotationalStiffness {
        return new RotationalStiffness(value, RotationalStiffnessUnits.KilopoundForceFeetPerDegrees);
    }

    /**
     * Create a new RotationalStiffness instance from a NewtonMillimetersPerDegree
     *
     * @param value The unit as NewtonMillimetersPerDegree to create a new RotationalStiffness from.
     * @returns The new RotationalStiffness instance.
     */
    public static FromNewtonMillimetersPerDegree(value: number): RotationalStiffness {
        return new RotationalStiffness(value, RotationalStiffnessUnits.NewtonMillimetersPerDegree);
    }

    /**
     * Create a new RotationalStiffness instance from a NewtonMetersPerDegree
     *
     * @param value The unit as NewtonMetersPerDegree to create a new RotationalStiffness from.
     * @returns The new RotationalStiffness instance.
     */
    public static FromNewtonMetersPerDegree(value: number): RotationalStiffness {
        return new RotationalStiffness(value, RotationalStiffnessUnits.NewtonMetersPerDegree);
    }

    /**
     * Create a new RotationalStiffness instance from a NewtonMillimetersPerRadian
     *
     * @param value The unit as NewtonMillimetersPerRadian to create a new RotationalStiffness from.
     * @returns The new RotationalStiffness instance.
     */
    public static FromNewtonMillimetersPerRadian(value: number): RotationalStiffness {
        return new RotationalStiffness(value, RotationalStiffnessUnits.NewtonMillimetersPerRadian);
    }

    /**
     * Create a new RotationalStiffness instance from a PoundForceFeetPerRadian
     *
     * @param value The unit as PoundForceFeetPerRadian to create a new RotationalStiffness from.
     * @returns The new RotationalStiffness instance.
     */
    public static FromPoundForceFeetPerRadian(value: number): RotationalStiffness {
        return new RotationalStiffness(value, RotationalStiffnessUnits.PoundForceFeetPerRadian);
    }

    /**
     * Create a new RotationalStiffness instance from a KilonewtonMetersPerRadian
     *
     * @param value The unit as KilonewtonMetersPerRadian to create a new RotationalStiffness from.
     * @returns The new RotationalStiffness instance.
     */
    public static FromKilonewtonMetersPerRadian(value: number): RotationalStiffness {
        return new RotationalStiffness(value, RotationalStiffnessUnits.KilonewtonMetersPerRadian);
    }

    /**
     * Create a new RotationalStiffness instance from a MeganewtonMetersPerRadian
     *
     * @param value The unit as MeganewtonMetersPerRadian to create a new RotationalStiffness from.
     * @returns The new RotationalStiffness instance.
     */
    public static FromMeganewtonMetersPerRadian(value: number): RotationalStiffness {
        return new RotationalStiffness(value, RotationalStiffnessUnits.MeganewtonMetersPerRadian);
    }

    /**
     * Create a new RotationalStiffness instance from a NanonewtonMillimetersPerDegree
     *
     * @param value The unit as NanonewtonMillimetersPerDegree to create a new RotationalStiffness from.
     * @returns The new RotationalStiffness instance.
     */
    public static FromNanonewtonMillimetersPerDegree(value: number): RotationalStiffness {
        return new RotationalStiffness(value, RotationalStiffnessUnits.NanonewtonMillimetersPerDegree);
    }

    /**
     * Create a new RotationalStiffness instance from a MicronewtonMillimetersPerDegree
     *
     * @param value The unit as MicronewtonMillimetersPerDegree to create a new RotationalStiffness from.
     * @returns The new RotationalStiffness instance.
     */
    public static FromMicronewtonMillimetersPerDegree(value: number): RotationalStiffness {
        return new RotationalStiffness(value, RotationalStiffnessUnits.MicronewtonMillimetersPerDegree);
    }

    /**
     * Create a new RotationalStiffness instance from a MillinewtonMillimetersPerDegree
     *
     * @param value The unit as MillinewtonMillimetersPerDegree to create a new RotationalStiffness from.
     * @returns The new RotationalStiffness instance.
     */
    public static FromMillinewtonMillimetersPerDegree(value: number): RotationalStiffness {
        return new RotationalStiffness(value, RotationalStiffnessUnits.MillinewtonMillimetersPerDegree);
    }

    /**
     * Create a new RotationalStiffness instance from a CentinewtonMillimetersPerDegree
     *
     * @param value The unit as CentinewtonMillimetersPerDegree to create a new RotationalStiffness from.
     * @returns The new RotationalStiffness instance.
     */
    public static FromCentinewtonMillimetersPerDegree(value: number): RotationalStiffness {
        return new RotationalStiffness(value, RotationalStiffnessUnits.CentinewtonMillimetersPerDegree);
    }

    /**
     * Create a new RotationalStiffness instance from a DecinewtonMillimetersPerDegree
     *
     * @param value The unit as DecinewtonMillimetersPerDegree to create a new RotationalStiffness from.
     * @returns The new RotationalStiffness instance.
     */
    public static FromDecinewtonMillimetersPerDegree(value: number): RotationalStiffness {
        return new RotationalStiffness(value, RotationalStiffnessUnits.DecinewtonMillimetersPerDegree);
    }

    /**
     * Create a new RotationalStiffness instance from a DecanewtonMillimetersPerDegree
     *
     * @param value The unit as DecanewtonMillimetersPerDegree to create a new RotationalStiffness from.
     * @returns The new RotationalStiffness instance.
     */
    public static FromDecanewtonMillimetersPerDegree(value: number): RotationalStiffness {
        return new RotationalStiffness(value, RotationalStiffnessUnits.DecanewtonMillimetersPerDegree);
    }

    /**
     * Create a new RotationalStiffness instance from a KilonewtonMillimetersPerDegree
     *
     * @param value The unit as KilonewtonMillimetersPerDegree to create a new RotationalStiffness from.
     * @returns The new RotationalStiffness instance.
     */
    public static FromKilonewtonMillimetersPerDegree(value: number): RotationalStiffness {
        return new RotationalStiffness(value, RotationalStiffnessUnits.KilonewtonMillimetersPerDegree);
    }

    /**
     * Create a new RotationalStiffness instance from a MeganewtonMillimetersPerDegree
     *
     * @param value The unit as MeganewtonMillimetersPerDegree to create a new RotationalStiffness from.
     * @returns The new RotationalStiffness instance.
     */
    public static FromMeganewtonMillimetersPerDegree(value: number): RotationalStiffness {
        return new RotationalStiffness(value, RotationalStiffnessUnits.MeganewtonMillimetersPerDegree);
    }

    /**
     * Create a new RotationalStiffness instance from a NanonewtonMetersPerDegree
     *
     * @param value The unit as NanonewtonMetersPerDegree to create a new RotationalStiffness from.
     * @returns The new RotationalStiffness instance.
     */
    public static FromNanonewtonMetersPerDegree(value: number): RotationalStiffness {
        return new RotationalStiffness(value, RotationalStiffnessUnits.NanonewtonMetersPerDegree);
    }

    /**
     * Create a new RotationalStiffness instance from a MicronewtonMetersPerDegree
     *
     * @param value The unit as MicronewtonMetersPerDegree to create a new RotationalStiffness from.
     * @returns The new RotationalStiffness instance.
     */
    public static FromMicronewtonMetersPerDegree(value: number): RotationalStiffness {
        return new RotationalStiffness(value, RotationalStiffnessUnits.MicronewtonMetersPerDegree);
    }

    /**
     * Create a new RotationalStiffness instance from a MillinewtonMetersPerDegree
     *
     * @param value The unit as MillinewtonMetersPerDegree to create a new RotationalStiffness from.
     * @returns The new RotationalStiffness instance.
     */
    public static FromMillinewtonMetersPerDegree(value: number): RotationalStiffness {
        return new RotationalStiffness(value, RotationalStiffnessUnits.MillinewtonMetersPerDegree);
    }

    /**
     * Create a new RotationalStiffness instance from a CentinewtonMetersPerDegree
     *
     * @param value The unit as CentinewtonMetersPerDegree to create a new RotationalStiffness from.
     * @returns The new RotationalStiffness instance.
     */
    public static FromCentinewtonMetersPerDegree(value: number): RotationalStiffness {
        return new RotationalStiffness(value, RotationalStiffnessUnits.CentinewtonMetersPerDegree);
    }

    /**
     * Create a new RotationalStiffness instance from a DecinewtonMetersPerDegree
     *
     * @param value The unit as DecinewtonMetersPerDegree to create a new RotationalStiffness from.
     * @returns The new RotationalStiffness instance.
     */
    public static FromDecinewtonMetersPerDegree(value: number): RotationalStiffness {
        return new RotationalStiffness(value, RotationalStiffnessUnits.DecinewtonMetersPerDegree);
    }

    /**
     * Create a new RotationalStiffness instance from a DecanewtonMetersPerDegree
     *
     * @param value The unit as DecanewtonMetersPerDegree to create a new RotationalStiffness from.
     * @returns The new RotationalStiffness instance.
     */
    public static FromDecanewtonMetersPerDegree(value: number): RotationalStiffness {
        return new RotationalStiffness(value, RotationalStiffnessUnits.DecanewtonMetersPerDegree);
    }

    /**
     * Create a new RotationalStiffness instance from a KilonewtonMetersPerDegree
     *
     * @param value The unit as KilonewtonMetersPerDegree to create a new RotationalStiffness from.
     * @returns The new RotationalStiffness instance.
     */
    public static FromKilonewtonMetersPerDegree(value: number): RotationalStiffness {
        return new RotationalStiffness(value, RotationalStiffnessUnits.KilonewtonMetersPerDegree);
    }

    /**
     * Create a new RotationalStiffness instance from a MeganewtonMetersPerDegree
     *
     * @param value The unit as MeganewtonMetersPerDegree to create a new RotationalStiffness from.
     * @returns The new RotationalStiffness instance.
     */
    public static FromMeganewtonMetersPerDegree(value: number): RotationalStiffness {
        return new RotationalStiffness(value, RotationalStiffnessUnits.MeganewtonMetersPerDegree);
    }

    /**
     * Create a new RotationalStiffness instance from a NanonewtonMillimetersPerRadian
     *
     * @param value The unit as NanonewtonMillimetersPerRadian to create a new RotationalStiffness from.
     * @returns The new RotationalStiffness instance.
     */
    public static FromNanonewtonMillimetersPerRadian(value: number): RotationalStiffness {
        return new RotationalStiffness(value, RotationalStiffnessUnits.NanonewtonMillimetersPerRadian);
    }

    /**
     * Create a new RotationalStiffness instance from a MicronewtonMillimetersPerRadian
     *
     * @param value The unit as MicronewtonMillimetersPerRadian to create a new RotationalStiffness from.
     * @returns The new RotationalStiffness instance.
     */
    public static FromMicronewtonMillimetersPerRadian(value: number): RotationalStiffness {
        return new RotationalStiffness(value, RotationalStiffnessUnits.MicronewtonMillimetersPerRadian);
    }

    /**
     * Create a new RotationalStiffness instance from a MillinewtonMillimetersPerRadian
     *
     * @param value The unit as MillinewtonMillimetersPerRadian to create a new RotationalStiffness from.
     * @returns The new RotationalStiffness instance.
     */
    public static FromMillinewtonMillimetersPerRadian(value: number): RotationalStiffness {
        return new RotationalStiffness(value, RotationalStiffnessUnits.MillinewtonMillimetersPerRadian);
    }

    /**
     * Create a new RotationalStiffness instance from a CentinewtonMillimetersPerRadian
     *
     * @param value The unit as CentinewtonMillimetersPerRadian to create a new RotationalStiffness from.
     * @returns The new RotationalStiffness instance.
     */
    public static FromCentinewtonMillimetersPerRadian(value: number): RotationalStiffness {
        return new RotationalStiffness(value, RotationalStiffnessUnits.CentinewtonMillimetersPerRadian);
    }

    /**
     * Create a new RotationalStiffness instance from a DecinewtonMillimetersPerRadian
     *
     * @param value The unit as DecinewtonMillimetersPerRadian to create a new RotationalStiffness from.
     * @returns The new RotationalStiffness instance.
     */
    public static FromDecinewtonMillimetersPerRadian(value: number): RotationalStiffness {
        return new RotationalStiffness(value, RotationalStiffnessUnits.DecinewtonMillimetersPerRadian);
    }

    /**
     * Create a new RotationalStiffness instance from a DecanewtonMillimetersPerRadian
     *
     * @param value The unit as DecanewtonMillimetersPerRadian to create a new RotationalStiffness from.
     * @returns The new RotationalStiffness instance.
     */
    public static FromDecanewtonMillimetersPerRadian(value: number): RotationalStiffness {
        return new RotationalStiffness(value, RotationalStiffnessUnits.DecanewtonMillimetersPerRadian);
    }

    /**
     * Create a new RotationalStiffness instance from a KilonewtonMillimetersPerRadian
     *
     * @param value The unit as KilonewtonMillimetersPerRadian to create a new RotationalStiffness from.
     * @returns The new RotationalStiffness instance.
     */
    public static FromKilonewtonMillimetersPerRadian(value: number): RotationalStiffness {
        return new RotationalStiffness(value, RotationalStiffnessUnits.KilonewtonMillimetersPerRadian);
    }

    /**
     * Create a new RotationalStiffness instance from a MeganewtonMillimetersPerRadian
     *
     * @param value The unit as MeganewtonMillimetersPerRadian to create a new RotationalStiffness from.
     * @returns The new RotationalStiffness instance.
     */
    public static FromMeganewtonMillimetersPerRadian(value: number): RotationalStiffness {
        return new RotationalStiffness(value, RotationalStiffnessUnits.MeganewtonMillimetersPerRadian);
    }

    private convertFromBase(toUnit: RotationalStiffnessUnits): number {
        switch (toUnit) {
                
            case RotationalStiffnessUnits.NewtonMetersPerRadian:
            case RotationalStiffnessUnits.NewtonMetersPerRadian:        
                return this.value;
            case RotationalStiffnessUnits.PoundForceFeetPerDegrees:
            case RotationalStiffnessUnits.PoundForceFeetPerDegrees:        
                return this.value / 77.6826;
            case RotationalStiffnessUnits.KilopoundForceFeetPerDegrees:
            case RotationalStiffnessUnits.KilopoundForceFeetPerDegrees:        
                return this.value / 77682.6;
            case RotationalStiffnessUnits.NewtonMillimetersPerDegree:
            case RotationalStiffnessUnits.NewtonMillimetersPerDegree:        
                return this.value / 180 * Math.PI * 1000;
            case RotationalStiffnessUnits.NewtonMetersPerDegree:
            case RotationalStiffnessUnits.NewtonMetersPerDegree:        
                return this.value / (180 / Math.PI);
            case RotationalStiffnessUnits.NewtonMillimetersPerRadian:
            case RotationalStiffnessUnits.NewtonMillimetersPerRadian:        
                return this.value * 1000;
            case RotationalStiffnessUnits.PoundForceFeetPerRadian:
                    
                return this.value / 1.3558179483314;
            case RotationalStiffnessUnits.KilonewtonMetersPerRadian:
            case RotationalStiffnessUnits.KilonewtonMetersPerRadian:        
                return (this.value) / 1000;
            case RotationalStiffnessUnits.MeganewtonMetersPerRadian:
            case RotationalStiffnessUnits.MeganewtonMetersPerRadian:        
                return (this.value) / 1000000;
            case RotationalStiffnessUnits.NanonewtonMillimetersPerDegree:
            case RotationalStiffnessUnits.NanonewtonMillimetersPerDegree:        
                return (this.value / 180 * Math.PI * 1000) / 1e-9;
            case RotationalStiffnessUnits.MicronewtonMillimetersPerDegree:
            case RotationalStiffnessUnits.MicronewtonMillimetersPerDegree:        
                return (this.value / 180 * Math.PI * 1000) / 0.000001;
            case RotationalStiffnessUnits.MillinewtonMillimetersPerDegree:
            case RotationalStiffnessUnits.MillinewtonMillimetersPerDegree:        
                return (this.value / 180 * Math.PI * 1000) / 0.001;
            case RotationalStiffnessUnits.CentinewtonMillimetersPerDegree:
            case RotationalStiffnessUnits.CentinewtonMillimetersPerDegree:        
                return (this.value / 180 * Math.PI * 1000) / 0.01;
            case RotationalStiffnessUnits.DecinewtonMillimetersPerDegree:
            case RotationalStiffnessUnits.DecinewtonMillimetersPerDegree:        
                return (this.value / 180 * Math.PI * 1000) / 0.1;
            case RotationalStiffnessUnits.DecanewtonMillimetersPerDegree:
            case RotationalStiffnessUnits.DecanewtonMillimetersPerDegree:        
                return (this.value / 180 * Math.PI * 1000) / 10;
            case RotationalStiffnessUnits.KilonewtonMillimetersPerDegree:
            case RotationalStiffnessUnits.KilonewtonMillimetersPerDegree:        
                return (this.value / 180 * Math.PI * 1000) / 1000;
            case RotationalStiffnessUnits.MeganewtonMillimetersPerDegree:
            case RotationalStiffnessUnits.MeganewtonMillimetersPerDegree:        
                return (this.value / 180 * Math.PI * 1000) / 1000000;
            case RotationalStiffnessUnits.NanonewtonMetersPerDegree:
            case RotationalStiffnessUnits.NanonewtonMetersPerDegree:        
                return (this.value / (180 / Math.PI)) / 1e-9;
            case RotationalStiffnessUnits.MicronewtonMetersPerDegree:
            case RotationalStiffnessUnits.MicronewtonMetersPerDegree:        
                return (this.value / (180 / Math.PI)) / 0.000001;
            case RotationalStiffnessUnits.MillinewtonMetersPerDegree:
            case RotationalStiffnessUnits.MillinewtonMetersPerDegree:        
                return (this.value / (180 / Math.PI)) / 0.001;
            case RotationalStiffnessUnits.CentinewtonMetersPerDegree:
            case RotationalStiffnessUnits.CentinewtonMetersPerDegree:        
                return (this.value / (180 / Math.PI)) / 0.01;
            case RotationalStiffnessUnits.DecinewtonMetersPerDegree:
            case RotationalStiffnessUnits.DecinewtonMetersPerDegree:        
                return (this.value / (180 / Math.PI)) / 0.1;
            case RotationalStiffnessUnits.DecanewtonMetersPerDegree:
            case RotationalStiffnessUnits.DecanewtonMetersPerDegree:        
                return (this.value / (180 / Math.PI)) / 10;
            case RotationalStiffnessUnits.KilonewtonMetersPerDegree:
            case RotationalStiffnessUnits.KilonewtonMetersPerDegree:        
                return (this.value / (180 / Math.PI)) / 1000;
            case RotationalStiffnessUnits.MeganewtonMetersPerDegree:
            case RotationalStiffnessUnits.MeganewtonMetersPerDegree:        
                return (this.value / (180 / Math.PI)) / 1000000;
            case RotationalStiffnessUnits.NanonewtonMillimetersPerRadian:
            case RotationalStiffnessUnits.NanonewtonMillimetersPerRadian:        
                return (this.value * 1000) / 1e-9;
            case RotationalStiffnessUnits.MicronewtonMillimetersPerRadian:
            case RotationalStiffnessUnits.MicronewtonMillimetersPerRadian:        
                return (this.value * 1000) / 0.000001;
            case RotationalStiffnessUnits.MillinewtonMillimetersPerRadian:
            case RotationalStiffnessUnits.MillinewtonMillimetersPerRadian:        
                return (this.value * 1000) / 0.001;
            case RotationalStiffnessUnits.CentinewtonMillimetersPerRadian:
            case RotationalStiffnessUnits.CentinewtonMillimetersPerRadian:        
                return (this.value * 1000) / 0.01;
            case RotationalStiffnessUnits.DecinewtonMillimetersPerRadian:
            case RotationalStiffnessUnits.DecinewtonMillimetersPerRadian:        
                return (this.value * 1000) / 0.1;
            case RotationalStiffnessUnits.DecanewtonMillimetersPerRadian:
            case RotationalStiffnessUnits.DecanewtonMillimetersPerRadian:        
                return (this.value * 1000) / 10;
            case RotationalStiffnessUnits.KilonewtonMillimetersPerRadian:
            case RotationalStiffnessUnits.KilonewtonMillimetersPerRadian:        
                return (this.value * 1000) / 1000;
            case RotationalStiffnessUnits.MeganewtonMillimetersPerRadian:
            case RotationalStiffnessUnits.MeganewtonMillimetersPerRadian:        
                return (this.value * 1000) / 1000000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: RotationalStiffnessUnits): number {
        switch (fromUnit) {
                
            case RotationalStiffnessUnits.NewtonMetersPerRadian:
            case RotationalStiffnessUnits.NewtonMetersPerRadian:        
                return value;
            case RotationalStiffnessUnits.PoundForceFeetPerDegrees:
            case RotationalStiffnessUnits.PoundForceFeetPerDegrees:        
                return value * 77.6826;
            case RotationalStiffnessUnits.KilopoundForceFeetPerDegrees:
            case RotationalStiffnessUnits.KilopoundForceFeetPerDegrees:        
                return value * 77682.6;
            case RotationalStiffnessUnits.NewtonMillimetersPerDegree:
            case RotationalStiffnessUnits.NewtonMillimetersPerDegree:        
                return value * 180 / Math.PI * 0.001;
            case RotationalStiffnessUnits.NewtonMetersPerDegree:
            case RotationalStiffnessUnits.NewtonMetersPerDegree:        
                return value * (180 / Math.PI);
            case RotationalStiffnessUnits.NewtonMillimetersPerRadian:
            case RotationalStiffnessUnits.NewtonMillimetersPerRadian:        
                return value * 0.001;
            case RotationalStiffnessUnits.PoundForceFeetPerRadian:
                    
                return value * 1.3558179483314;
            case RotationalStiffnessUnits.KilonewtonMetersPerRadian:
            case RotationalStiffnessUnits.KilonewtonMetersPerRadian:        
                return (value) * 1000;
            case RotationalStiffnessUnits.MeganewtonMetersPerRadian:
            case RotationalStiffnessUnits.MeganewtonMetersPerRadian:        
                return (value) * 1000000;
            case RotationalStiffnessUnits.NanonewtonMillimetersPerDegree:
            case RotationalStiffnessUnits.NanonewtonMillimetersPerDegree:        
                return (value * 180 / Math.PI * 0.001) * 1e-9;
            case RotationalStiffnessUnits.MicronewtonMillimetersPerDegree:
            case RotationalStiffnessUnits.MicronewtonMillimetersPerDegree:        
                return (value * 180 / Math.PI * 0.001) * 0.000001;
            case RotationalStiffnessUnits.MillinewtonMillimetersPerDegree:
            case RotationalStiffnessUnits.MillinewtonMillimetersPerDegree:        
                return (value * 180 / Math.PI * 0.001) * 0.001;
            case RotationalStiffnessUnits.CentinewtonMillimetersPerDegree:
            case RotationalStiffnessUnits.CentinewtonMillimetersPerDegree:        
                return (value * 180 / Math.PI * 0.001) * 0.01;
            case RotationalStiffnessUnits.DecinewtonMillimetersPerDegree:
            case RotationalStiffnessUnits.DecinewtonMillimetersPerDegree:        
                return (value * 180 / Math.PI * 0.001) * 0.1;
            case RotationalStiffnessUnits.DecanewtonMillimetersPerDegree:
            case RotationalStiffnessUnits.DecanewtonMillimetersPerDegree:        
                return (value * 180 / Math.PI * 0.001) * 10;
            case RotationalStiffnessUnits.KilonewtonMillimetersPerDegree:
            case RotationalStiffnessUnits.KilonewtonMillimetersPerDegree:        
                return (value * 180 / Math.PI * 0.001) * 1000;
            case RotationalStiffnessUnits.MeganewtonMillimetersPerDegree:
            case RotationalStiffnessUnits.MeganewtonMillimetersPerDegree:        
                return (value * 180 / Math.PI * 0.001) * 1000000;
            case RotationalStiffnessUnits.NanonewtonMetersPerDegree:
            case RotationalStiffnessUnits.NanonewtonMetersPerDegree:        
                return (value * (180 / Math.PI)) * 1e-9;
            case RotationalStiffnessUnits.MicronewtonMetersPerDegree:
            case RotationalStiffnessUnits.MicronewtonMetersPerDegree:        
                return (value * (180 / Math.PI)) * 0.000001;
            case RotationalStiffnessUnits.MillinewtonMetersPerDegree:
            case RotationalStiffnessUnits.MillinewtonMetersPerDegree:        
                return (value * (180 / Math.PI)) * 0.001;
            case RotationalStiffnessUnits.CentinewtonMetersPerDegree:
            case RotationalStiffnessUnits.CentinewtonMetersPerDegree:        
                return (value * (180 / Math.PI)) * 0.01;
            case RotationalStiffnessUnits.DecinewtonMetersPerDegree:
            case RotationalStiffnessUnits.DecinewtonMetersPerDegree:        
                return (value * (180 / Math.PI)) * 0.1;
            case RotationalStiffnessUnits.DecanewtonMetersPerDegree:
            case RotationalStiffnessUnits.DecanewtonMetersPerDegree:        
                return (value * (180 / Math.PI)) * 10;
            case RotationalStiffnessUnits.KilonewtonMetersPerDegree:
            case RotationalStiffnessUnits.KilonewtonMetersPerDegree:        
                return (value * (180 / Math.PI)) * 1000;
            case RotationalStiffnessUnits.MeganewtonMetersPerDegree:
            case RotationalStiffnessUnits.MeganewtonMetersPerDegree:        
                return (value * (180 / Math.PI)) * 1000000;
            case RotationalStiffnessUnits.NanonewtonMillimetersPerRadian:
            case RotationalStiffnessUnits.NanonewtonMillimetersPerRadian:        
                return (value * 0.001) * 1e-9;
            case RotationalStiffnessUnits.MicronewtonMillimetersPerRadian:
            case RotationalStiffnessUnits.MicronewtonMillimetersPerRadian:        
                return (value * 0.001) * 0.000001;
            case RotationalStiffnessUnits.MillinewtonMillimetersPerRadian:
            case RotationalStiffnessUnits.MillinewtonMillimetersPerRadian:        
                return (value * 0.001) * 0.001;
            case RotationalStiffnessUnits.CentinewtonMillimetersPerRadian:
            case RotationalStiffnessUnits.CentinewtonMillimetersPerRadian:        
                return (value * 0.001) * 0.01;
            case RotationalStiffnessUnits.DecinewtonMillimetersPerRadian:
            case RotationalStiffnessUnits.DecinewtonMillimetersPerRadian:        
                return (value * 0.001) * 0.1;
            case RotationalStiffnessUnits.DecanewtonMillimetersPerRadian:
            case RotationalStiffnessUnits.DecanewtonMillimetersPerRadian:        
                return (value * 0.001) * 10;
            case RotationalStiffnessUnits.KilonewtonMillimetersPerRadian:
            case RotationalStiffnessUnits.KilonewtonMillimetersPerRadian:        
                return (value * 0.001) * 1000;
            case RotationalStiffnessUnits.MeganewtonMillimetersPerRadian:
            case RotationalStiffnessUnits.MeganewtonMillimetersPerRadian:        
                return (value * 0.001) * 1000000;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the RotationalStiffness to string.
     * Note! the default format for RotationalStiffness is NewtonMetersPerRadian.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the RotationalStiffness.
     * @returns The string format of the RotationalStiffness.
     */
    public toString(unit: RotationalStiffnessUnits = RotationalStiffnessUnits.NewtonMetersPerRadian): string {

        switch (unit) {
            
            case RotationalStiffnessUnits.NewtonMetersPerRadian:
                return this.NewtonMetersPerRadian + ` N·m/rad`;
            case RotationalStiffnessUnits.PoundForceFeetPerDegrees:
                return this.PoundForceFeetPerDegrees + ` lbf·ft/deg`;
            case RotationalStiffnessUnits.KilopoundForceFeetPerDegrees:
                return this.KilopoundForceFeetPerDegrees + ` kipf·ft/°`;
            case RotationalStiffnessUnits.NewtonMillimetersPerDegree:
                return this.NewtonMillimetersPerDegree + ` N·mm/deg`;
            case RotationalStiffnessUnits.NewtonMetersPerDegree:
                return this.NewtonMetersPerDegree + ` N·m/deg`;
            case RotationalStiffnessUnits.NewtonMillimetersPerRadian:
                return this.NewtonMillimetersPerRadian + ` N·mm/rad`;
            case RotationalStiffnessUnits.PoundForceFeetPerRadian:
                return this.PoundForceFeetPerRadian + ` lbf·ft/rad`;
            case RotationalStiffnessUnits.KilonewtonMetersPerRadian:
                return this.KilonewtonMetersPerRadian + ` `;
            case RotationalStiffnessUnits.MeganewtonMetersPerRadian:
                return this.MeganewtonMetersPerRadian + ` `;
            case RotationalStiffnessUnits.NanonewtonMillimetersPerDegree:
                return this.NanonewtonMillimetersPerDegree + ` `;
            case RotationalStiffnessUnits.MicronewtonMillimetersPerDegree:
                return this.MicronewtonMillimetersPerDegree + ` `;
            case RotationalStiffnessUnits.MillinewtonMillimetersPerDegree:
                return this.MillinewtonMillimetersPerDegree + ` `;
            case RotationalStiffnessUnits.CentinewtonMillimetersPerDegree:
                return this.CentinewtonMillimetersPerDegree + ` `;
            case RotationalStiffnessUnits.DecinewtonMillimetersPerDegree:
                return this.DecinewtonMillimetersPerDegree + ` `;
            case RotationalStiffnessUnits.DecanewtonMillimetersPerDegree:
                return this.DecanewtonMillimetersPerDegree + ` `;
            case RotationalStiffnessUnits.KilonewtonMillimetersPerDegree:
                return this.KilonewtonMillimetersPerDegree + ` `;
            case RotationalStiffnessUnits.MeganewtonMillimetersPerDegree:
                return this.MeganewtonMillimetersPerDegree + ` `;
            case RotationalStiffnessUnits.NanonewtonMetersPerDegree:
                return this.NanonewtonMetersPerDegree + ` `;
            case RotationalStiffnessUnits.MicronewtonMetersPerDegree:
                return this.MicronewtonMetersPerDegree + ` `;
            case RotationalStiffnessUnits.MillinewtonMetersPerDegree:
                return this.MillinewtonMetersPerDegree + ` `;
            case RotationalStiffnessUnits.CentinewtonMetersPerDegree:
                return this.CentinewtonMetersPerDegree + ` `;
            case RotationalStiffnessUnits.DecinewtonMetersPerDegree:
                return this.DecinewtonMetersPerDegree + ` `;
            case RotationalStiffnessUnits.DecanewtonMetersPerDegree:
                return this.DecanewtonMetersPerDegree + ` `;
            case RotationalStiffnessUnits.KilonewtonMetersPerDegree:
                return this.KilonewtonMetersPerDegree + ` `;
            case RotationalStiffnessUnits.MeganewtonMetersPerDegree:
                return this.MeganewtonMetersPerDegree + ` `;
            case RotationalStiffnessUnits.NanonewtonMillimetersPerRadian:
                return this.NanonewtonMillimetersPerRadian + ` `;
            case RotationalStiffnessUnits.MicronewtonMillimetersPerRadian:
                return this.MicronewtonMillimetersPerRadian + ` `;
            case RotationalStiffnessUnits.MillinewtonMillimetersPerRadian:
                return this.MillinewtonMillimetersPerRadian + ` `;
            case RotationalStiffnessUnits.CentinewtonMillimetersPerRadian:
                return this.CentinewtonMillimetersPerRadian + ` `;
            case RotationalStiffnessUnits.DecinewtonMillimetersPerRadian:
                return this.DecinewtonMillimetersPerRadian + ` `;
            case RotationalStiffnessUnits.DecanewtonMillimetersPerRadian:
                return this.DecanewtonMillimetersPerRadian + ` `;
            case RotationalStiffnessUnits.KilonewtonMillimetersPerRadian:
                return this.KilonewtonMillimetersPerRadian + ` `;
            case RotationalStiffnessUnits.MeganewtonMillimetersPerRadian:
                return this.MeganewtonMillimetersPerRadian + ` `;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get RotationalStiffness unit abbreviation.
     * Note! the default abbreviation for RotationalStiffness is NewtonMetersPerRadian.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the RotationalStiffness.
     * @returns The abbreviation string of RotationalStiffness.
     */
    public getUnitAbbreviation(unitAbbreviation: RotationalStiffnessUnits = RotationalStiffnessUnits.NewtonMetersPerRadian): string {

        switch (unitAbbreviation) {
            
            case RotationalStiffnessUnits.NewtonMetersPerRadian:
                return `N·m/rad`;
            case RotationalStiffnessUnits.PoundForceFeetPerDegrees:
                return `lbf·ft/deg`;
            case RotationalStiffnessUnits.KilopoundForceFeetPerDegrees:
                return `kipf·ft/°`;
            case RotationalStiffnessUnits.NewtonMillimetersPerDegree:
                return `N·mm/deg`;
            case RotationalStiffnessUnits.NewtonMetersPerDegree:
                return `N·m/deg`;
            case RotationalStiffnessUnits.NewtonMillimetersPerRadian:
                return `N·mm/rad`;
            case RotationalStiffnessUnits.PoundForceFeetPerRadian:
                return `lbf·ft/rad`;
            case RotationalStiffnessUnits.KilonewtonMetersPerRadian:
                return ``;
            case RotationalStiffnessUnits.MeganewtonMetersPerRadian:
                return ``;
            case RotationalStiffnessUnits.NanonewtonMillimetersPerDegree:
                return ``;
            case RotationalStiffnessUnits.MicronewtonMillimetersPerDegree:
                return ``;
            case RotationalStiffnessUnits.MillinewtonMillimetersPerDegree:
                return ``;
            case RotationalStiffnessUnits.CentinewtonMillimetersPerDegree:
                return ``;
            case RotationalStiffnessUnits.DecinewtonMillimetersPerDegree:
                return ``;
            case RotationalStiffnessUnits.DecanewtonMillimetersPerDegree:
                return ``;
            case RotationalStiffnessUnits.KilonewtonMillimetersPerDegree:
                return ``;
            case RotationalStiffnessUnits.MeganewtonMillimetersPerDegree:
                return ``;
            case RotationalStiffnessUnits.NanonewtonMetersPerDegree:
                return ``;
            case RotationalStiffnessUnits.MicronewtonMetersPerDegree:
                return ``;
            case RotationalStiffnessUnits.MillinewtonMetersPerDegree:
                return ``;
            case RotationalStiffnessUnits.CentinewtonMetersPerDegree:
                return ``;
            case RotationalStiffnessUnits.DecinewtonMetersPerDegree:
                return ``;
            case RotationalStiffnessUnits.DecanewtonMetersPerDegree:
                return ``;
            case RotationalStiffnessUnits.KilonewtonMetersPerDegree:
                return ``;
            case RotationalStiffnessUnits.MeganewtonMetersPerDegree:
                return ``;
            case RotationalStiffnessUnits.NanonewtonMillimetersPerRadian:
                return ``;
            case RotationalStiffnessUnits.MicronewtonMillimetersPerRadian:
                return ``;
            case RotationalStiffnessUnits.MillinewtonMillimetersPerRadian:
                return ``;
            case RotationalStiffnessUnits.CentinewtonMillimetersPerRadian:
                return ``;
            case RotationalStiffnessUnits.DecinewtonMillimetersPerRadian:
                return ``;
            case RotationalStiffnessUnits.DecanewtonMillimetersPerRadian:
                return ``;
            case RotationalStiffnessUnits.KilonewtonMillimetersPerRadian:
                return ``;
            case RotationalStiffnessUnits.MeganewtonMillimetersPerRadian:
                return ``;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given RotationalStiffness are equals to the current RotationalStiffness.
     * @param rotationalStiffness The other RotationalStiffness.
     * @returns True if the given RotationalStiffness are equal to the current RotationalStiffness.
     */
    public equals(rotationalStiffness: RotationalStiffness): boolean {
        return this.value === rotationalStiffness.BaseValue;
    }

    /**
     * Compare the given RotationalStiffness against the current RotationalStiffness.
     * @param rotationalStiffness The other RotationalStiffness.
     * @returns 0 if they are equal, -1 if the current RotationalStiffness is less then other, 1 if the current RotationalStiffness is greater then other.
     */
    public compareTo(rotationalStiffness: RotationalStiffness): number {

        if (this.value > rotationalStiffness.BaseValue)
            return 1;
        if (this.value < rotationalStiffness.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given RotationalStiffness with the current RotationalStiffness.
     * @param rotationalStiffness The other RotationalStiffness.
     * @returns A new RotationalStiffness instance with the results.
     */
    public add(rotationalStiffness: RotationalStiffness): RotationalStiffness {
        return new RotationalStiffness(this.value + rotationalStiffness.BaseValue)
    }

    /**
     * Subtract the given RotationalStiffness with the current RotationalStiffness.
     * @param rotationalStiffness The other RotationalStiffness.
     * @returns A new RotationalStiffness instance with the results.
     */
    public subtract(rotationalStiffness: RotationalStiffness): RotationalStiffness {
        return new RotationalStiffness(this.value - rotationalStiffness.BaseValue)
    }

    /**
     * Multiply the given RotationalStiffness with the current RotationalStiffness.
     * @param rotationalStiffness The other RotationalStiffness.
     * @returns A new RotationalStiffness instance with the results.
     */
    public multiply(rotationalStiffness: RotationalStiffness): RotationalStiffness {
        return new RotationalStiffness(this.value * rotationalStiffness.BaseValue)
    }

    /**
     * Divide the given RotationalStiffness with the current RotationalStiffness.
     * @param rotationalStiffness The other RotationalStiffness.
     * @returns A new RotationalStiffness instance with the results.
     */
    public divide(rotationalStiffness: RotationalStiffness): RotationalStiffness {
        return new RotationalStiffness(this.value / rotationalStiffness.BaseValue)
    }

    /**
     * Modulo the given RotationalStiffness with the current RotationalStiffness.
     * @param rotationalStiffness The other RotationalStiffness.
     * @returns A new RotationalStiffness instance with the results.
     */
    public modulo(rotationalStiffness: RotationalStiffness): RotationalStiffness {
        return new RotationalStiffness(this.value % rotationalStiffness.BaseValue)
    }

    /**
     * Pow the given RotationalStiffness with the current RotationalStiffness.
     * @param rotationalStiffness The other RotationalStiffness.
     * @returns A new RotationalStiffness instance with the results.
     */
    public pow(rotationalStiffness: RotationalStiffness): RotationalStiffness {
        return new RotationalStiffness(this.value ** rotationalStiffness.BaseValue)
    }
}
