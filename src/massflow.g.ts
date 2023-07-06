/** MassFlowUnits enumeration */
export enum MassFlowUnits {
    /** */
    GramsPerSecond,
    /** */
    GramsPerDay,
    /** */
    GramsPerHour,
    /** */
    KilogramsPerHour,
    /** */
    KilogramsPerMinute,
    /** */
    TonnesPerHour,
    /** */
    PoundsPerDay,
    /** */
    PoundsPerHour,
    /** */
    PoundsPerMinute,
    /** */
    PoundsPerSecond,
    /** */
    TonnesPerDay,
    /** */
    ShortTonsPerHour,
    /** */
    NanogramsPerSecond,
    /** */
    MicrogramsPerSecond,
    /** */
    MilligramsPerSecond,
    /** */
    CentigramsPerSecond,
    /** */
    DecigramsPerSecond,
    /** */
    DecagramsPerSecond,
    /** */
    HectogramsPerSecond,
    /** */
    KilogramsPerSecond,
    /** */
    NanogramsPerDay,
    /** */
    MicrogramsPerDay,
    /** */
    MilligramsPerDay,
    /** */
    CentigramsPerDay,
    /** */
    DecigramsPerDay,
    /** */
    DecagramsPerDay,
    /** */
    HectogramsPerDay,
    /** */
    KilogramsPerDay,
    /** */
    MegagramsPerDay,
    /** */
    MegapoundsPerDay,
    /** */
    MegapoundsPerHour,
    /** */
    MegapoundsPerMinute,
    /** */
    MegapoundsPerSecond,
    /** */
    GramPerSecond,
    /** */
    GramPerDay,
    /** */
    GramPerHour,
    /** */
    KilogramPerHour,
    /** */
    KilogramPerMinute,
    /** */
    TonnePerHour,
    /** */
    PoundPerDay,
    /** */
    PoundPerHour,
    /** */
    PoundPerMinute,
    /** */
    PoundPerSecond,
    /** */
    TonnePerDay,
    /** */
    ShortTonPerHour,
    /** */
    NanogramPerSecond,
    /** */
    MicrogramPerSecond,
    /** */
    MilligramPerSecond,
    /** */
    CentigramPerSecond,
    /** */
    DecigramPerSecond,
    /** */
    DecagramPerSecond,
    /** */
    HectogramPerSecond,
    /** */
    KilogramPerSecond,
    /** */
    NanogramPerDay,
    /** */
    MicrogramPerDay,
    /** */
    MilligramPerDay,
    /** */
    CentigramPerDay,
    /** */
    DecigramPerDay,
    /** */
    DecagramPerDay,
    /** */
    HectogramPerDay,
    /** */
    KilogramPerDay,
    /** */
    MegagramPerDay,
    /** */
    MegapoundPerDay,
    /** */
    MegapoundPerHour,
    /** */
    MegapoundPerMinute,
    /** */
    MegapoundPerSecond
}

/** Mass flow is the ratio of the mass change to the time during which the change occurred (value of mass changes per unit time). */
export class MassFlow {
    private value: number;
    private gramspersecondLazy: number | null = null;
    private gramsperdayLazy: number | null = null;
    private gramsperhourLazy: number | null = null;
    private kilogramsperhourLazy: number | null = null;
    private kilogramsperminuteLazy: number | null = null;
    private tonnesperhourLazy: number | null = null;
    private poundsperdayLazy: number | null = null;
    private poundsperhourLazy: number | null = null;
    private poundsperminuteLazy: number | null = null;
    private poundspersecondLazy: number | null = null;
    private tonnesperdayLazy: number | null = null;
    private shorttonsperhourLazy: number | null = null;
    private nanogramspersecondLazy: number | null = null;
    private microgramspersecondLazy: number | null = null;
    private milligramspersecondLazy: number | null = null;
    private centigramspersecondLazy: number | null = null;
    private decigramspersecondLazy: number | null = null;
    private decagramspersecondLazy: number | null = null;
    private hectogramspersecondLazy: number | null = null;
    private kilogramspersecondLazy: number | null = null;
    private nanogramsperdayLazy: number | null = null;
    private microgramsperdayLazy: number | null = null;
    private milligramsperdayLazy: number | null = null;
    private centigramsperdayLazy: number | null = null;
    private decigramsperdayLazy: number | null = null;
    private decagramsperdayLazy: number | null = null;
    private hectogramsperdayLazy: number | null = null;
    private kilogramsperdayLazy: number | null = null;
    private megagramsperdayLazy: number | null = null;
    private megapoundsperdayLazy: number | null = null;
    private megapoundsperhourLazy: number | null = null;
    private megapoundsperminuteLazy: number | null = null;
    private megapoundspersecondLazy: number | null = null;

    /**
     * Create a new MassFlow.
     * @param value The value.
     * @param fromUnit The ‘MassFlow’ unit to create from.
     * The default unit is GramsPerSecond
     */
    public constructor(value: number, fromUnit: MassFlowUnits = MassFlowUnits.GramsPerSecond) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of MassFlow is GramsPerSecond.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get GramsPerSecond(): number {
        if(this.gramspersecondLazy !== null){
            return this.gramspersecondLazy;
        }
        return this.gramspersecondLazy = this.convertFromBase(MassFlowUnits.GramsPerSecond);
    }

    /** */
    public get GramsPerDay(): number {
        if(this.gramsperdayLazy !== null){
            return this.gramsperdayLazy;
        }
        return this.gramsperdayLazy = this.convertFromBase(MassFlowUnits.GramsPerDay);
    }

    /** */
    public get GramsPerHour(): number {
        if(this.gramsperhourLazy !== null){
            return this.gramsperhourLazy;
        }
        return this.gramsperhourLazy = this.convertFromBase(MassFlowUnits.GramsPerHour);
    }

    /** */
    public get KilogramsPerHour(): number {
        if(this.kilogramsperhourLazy !== null){
            return this.kilogramsperhourLazy;
        }
        return this.kilogramsperhourLazy = this.convertFromBase(MassFlowUnits.KilogramsPerHour);
    }

    /** */
    public get KilogramsPerMinute(): number {
        if(this.kilogramsperminuteLazy !== null){
            return this.kilogramsperminuteLazy;
        }
        return this.kilogramsperminuteLazy = this.convertFromBase(MassFlowUnits.KilogramsPerMinute);
    }

    /** */
    public get TonnesPerHour(): number {
        if(this.tonnesperhourLazy !== null){
            return this.tonnesperhourLazy;
        }
        return this.tonnesperhourLazy = this.convertFromBase(MassFlowUnits.TonnesPerHour);
    }

    /** */
    public get PoundsPerDay(): number {
        if(this.poundsperdayLazy !== null){
            return this.poundsperdayLazy;
        }
        return this.poundsperdayLazy = this.convertFromBase(MassFlowUnits.PoundsPerDay);
    }

    /** */
    public get PoundsPerHour(): number {
        if(this.poundsperhourLazy !== null){
            return this.poundsperhourLazy;
        }
        return this.poundsperhourLazy = this.convertFromBase(MassFlowUnits.PoundsPerHour);
    }

    /** */
    public get PoundsPerMinute(): number {
        if(this.poundsperminuteLazy !== null){
            return this.poundsperminuteLazy;
        }
        return this.poundsperminuteLazy = this.convertFromBase(MassFlowUnits.PoundsPerMinute);
    }

    /** */
    public get PoundsPerSecond(): number {
        if(this.poundspersecondLazy !== null){
            return this.poundspersecondLazy;
        }
        return this.poundspersecondLazy = this.convertFromBase(MassFlowUnits.PoundsPerSecond);
    }

    /** */
    public get TonnesPerDay(): number {
        if(this.tonnesperdayLazy !== null){
            return this.tonnesperdayLazy;
        }
        return this.tonnesperdayLazy = this.convertFromBase(MassFlowUnits.TonnesPerDay);
    }

    /** */
    public get ShortTonsPerHour(): number {
        if(this.shorttonsperhourLazy !== null){
            return this.shorttonsperhourLazy;
        }
        return this.shorttonsperhourLazy = this.convertFromBase(MassFlowUnits.ShortTonsPerHour);
    }

    /** */
    public get NanogramsPerSecond(): number {
        if(this.nanogramspersecondLazy !== null){
            return this.nanogramspersecondLazy;
        }
        return this.nanogramspersecondLazy = this.convertFromBase(MassFlowUnits.NanogramsPerSecond);
    }

    /** */
    public get MicrogramsPerSecond(): number {
        if(this.microgramspersecondLazy !== null){
            return this.microgramspersecondLazy;
        }
        return this.microgramspersecondLazy = this.convertFromBase(MassFlowUnits.MicrogramsPerSecond);
    }

    /** */
    public get MilligramsPerSecond(): number {
        if(this.milligramspersecondLazy !== null){
            return this.milligramspersecondLazy;
        }
        return this.milligramspersecondLazy = this.convertFromBase(MassFlowUnits.MilligramsPerSecond);
    }

    /** */
    public get CentigramsPerSecond(): number {
        if(this.centigramspersecondLazy !== null){
            return this.centigramspersecondLazy;
        }
        return this.centigramspersecondLazy = this.convertFromBase(MassFlowUnits.CentigramsPerSecond);
    }

    /** */
    public get DecigramsPerSecond(): number {
        if(this.decigramspersecondLazy !== null){
            return this.decigramspersecondLazy;
        }
        return this.decigramspersecondLazy = this.convertFromBase(MassFlowUnits.DecigramsPerSecond);
    }

    /** */
    public get DecagramsPerSecond(): number {
        if(this.decagramspersecondLazy !== null){
            return this.decagramspersecondLazy;
        }
        return this.decagramspersecondLazy = this.convertFromBase(MassFlowUnits.DecagramsPerSecond);
    }

    /** */
    public get HectogramsPerSecond(): number {
        if(this.hectogramspersecondLazy !== null){
            return this.hectogramspersecondLazy;
        }
        return this.hectogramspersecondLazy = this.convertFromBase(MassFlowUnits.HectogramsPerSecond);
    }

    /** */
    public get KilogramsPerSecond(): number {
        if(this.kilogramspersecondLazy !== null){
            return this.kilogramspersecondLazy;
        }
        return this.kilogramspersecondLazy = this.convertFromBase(MassFlowUnits.KilogramsPerSecond);
    }

    /** */
    public get NanogramsPerDay(): number {
        if(this.nanogramsperdayLazy !== null){
            return this.nanogramsperdayLazy;
        }
        return this.nanogramsperdayLazy = this.convertFromBase(MassFlowUnits.NanogramsPerDay);
    }

    /** */
    public get MicrogramsPerDay(): number {
        if(this.microgramsperdayLazy !== null){
            return this.microgramsperdayLazy;
        }
        return this.microgramsperdayLazy = this.convertFromBase(MassFlowUnits.MicrogramsPerDay);
    }

    /** */
    public get MilligramsPerDay(): number {
        if(this.milligramsperdayLazy !== null){
            return this.milligramsperdayLazy;
        }
        return this.milligramsperdayLazy = this.convertFromBase(MassFlowUnits.MilligramsPerDay);
    }

    /** */
    public get CentigramsPerDay(): number {
        if(this.centigramsperdayLazy !== null){
            return this.centigramsperdayLazy;
        }
        return this.centigramsperdayLazy = this.convertFromBase(MassFlowUnits.CentigramsPerDay);
    }

    /** */
    public get DecigramsPerDay(): number {
        if(this.decigramsperdayLazy !== null){
            return this.decigramsperdayLazy;
        }
        return this.decigramsperdayLazy = this.convertFromBase(MassFlowUnits.DecigramsPerDay);
    }

    /** */
    public get DecagramsPerDay(): number {
        if(this.decagramsperdayLazy !== null){
            return this.decagramsperdayLazy;
        }
        return this.decagramsperdayLazy = this.convertFromBase(MassFlowUnits.DecagramsPerDay);
    }

    /** */
    public get HectogramsPerDay(): number {
        if(this.hectogramsperdayLazy !== null){
            return this.hectogramsperdayLazy;
        }
        return this.hectogramsperdayLazy = this.convertFromBase(MassFlowUnits.HectogramsPerDay);
    }

    /** */
    public get KilogramsPerDay(): number {
        if(this.kilogramsperdayLazy !== null){
            return this.kilogramsperdayLazy;
        }
        return this.kilogramsperdayLazy = this.convertFromBase(MassFlowUnits.KilogramsPerDay);
    }

    /** */
    public get MegagramsPerDay(): number {
        if(this.megagramsperdayLazy !== null){
            return this.megagramsperdayLazy;
        }
        return this.megagramsperdayLazy = this.convertFromBase(MassFlowUnits.MegagramsPerDay);
    }

    /** */
    public get MegapoundsPerDay(): number {
        if(this.megapoundsperdayLazy !== null){
            return this.megapoundsperdayLazy;
        }
        return this.megapoundsperdayLazy = this.convertFromBase(MassFlowUnits.MegapoundsPerDay);
    }

    /** */
    public get MegapoundsPerHour(): number {
        if(this.megapoundsperhourLazy !== null){
            return this.megapoundsperhourLazy;
        }
        return this.megapoundsperhourLazy = this.convertFromBase(MassFlowUnits.MegapoundsPerHour);
    }

    /** */
    public get MegapoundsPerMinute(): number {
        if(this.megapoundsperminuteLazy !== null){
            return this.megapoundsperminuteLazy;
        }
        return this.megapoundsperminuteLazy = this.convertFromBase(MassFlowUnits.MegapoundsPerMinute);
    }

    /** */
    public get MegapoundsPerSecond(): number {
        if(this.megapoundspersecondLazy !== null){
            return this.megapoundspersecondLazy;
        }
        return this.megapoundspersecondLazy = this.convertFromBase(MassFlowUnits.MegapoundsPerSecond);
    }

    /**
     * Create a new MassFlow instance from a GramsPerSecond
     *
     * @param value The unit as GramsPerSecond to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    public static FromGramsPerSecond(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.GramsPerSecond);
    }

    /**
     * Create a new MassFlow instance from a GramsPerDay
     *
     * @param value The unit as GramsPerDay to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    public static FromGramsPerDay(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.GramsPerDay);
    }

    /**
     * Create a new MassFlow instance from a GramsPerHour
     *
     * @param value The unit as GramsPerHour to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    public static FromGramsPerHour(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.GramsPerHour);
    }

    /**
     * Create a new MassFlow instance from a KilogramsPerHour
     *
     * @param value The unit as KilogramsPerHour to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    public static FromKilogramsPerHour(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.KilogramsPerHour);
    }

    /**
     * Create a new MassFlow instance from a KilogramsPerMinute
     *
     * @param value The unit as KilogramsPerMinute to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    public static FromKilogramsPerMinute(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.KilogramsPerMinute);
    }

    /**
     * Create a new MassFlow instance from a TonnesPerHour
     *
     * @param value The unit as TonnesPerHour to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    public static FromTonnesPerHour(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.TonnesPerHour);
    }

    /**
     * Create a new MassFlow instance from a PoundsPerDay
     *
     * @param value The unit as PoundsPerDay to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    public static FromPoundsPerDay(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.PoundsPerDay);
    }

    /**
     * Create a new MassFlow instance from a PoundsPerHour
     *
     * @param value The unit as PoundsPerHour to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    public static FromPoundsPerHour(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.PoundsPerHour);
    }

    /**
     * Create a new MassFlow instance from a PoundsPerMinute
     *
     * @param value The unit as PoundsPerMinute to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    public static FromPoundsPerMinute(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.PoundsPerMinute);
    }

    /**
     * Create a new MassFlow instance from a PoundsPerSecond
     *
     * @param value The unit as PoundsPerSecond to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    public static FromPoundsPerSecond(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.PoundsPerSecond);
    }

    /**
     * Create a new MassFlow instance from a TonnesPerDay
     *
     * @param value The unit as TonnesPerDay to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    public static FromTonnesPerDay(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.TonnesPerDay);
    }

    /**
     * Create a new MassFlow instance from a ShortTonsPerHour
     *
     * @param value The unit as ShortTonsPerHour to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    public static FromShortTonsPerHour(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.ShortTonsPerHour);
    }

    /**
     * Create a new MassFlow instance from a NanogramsPerSecond
     *
     * @param value The unit as NanogramsPerSecond to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    public static FromNanogramsPerSecond(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.NanogramsPerSecond);
    }

    /**
     * Create a new MassFlow instance from a MicrogramsPerSecond
     *
     * @param value The unit as MicrogramsPerSecond to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    public static FromMicrogramsPerSecond(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.MicrogramsPerSecond);
    }

    /**
     * Create a new MassFlow instance from a MilligramsPerSecond
     *
     * @param value The unit as MilligramsPerSecond to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    public static FromMilligramsPerSecond(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.MilligramsPerSecond);
    }

    /**
     * Create a new MassFlow instance from a CentigramsPerSecond
     *
     * @param value The unit as CentigramsPerSecond to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    public static FromCentigramsPerSecond(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.CentigramsPerSecond);
    }

    /**
     * Create a new MassFlow instance from a DecigramsPerSecond
     *
     * @param value The unit as DecigramsPerSecond to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    public static FromDecigramsPerSecond(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.DecigramsPerSecond);
    }

    /**
     * Create a new MassFlow instance from a DecagramsPerSecond
     *
     * @param value The unit as DecagramsPerSecond to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    public static FromDecagramsPerSecond(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.DecagramsPerSecond);
    }

    /**
     * Create a new MassFlow instance from a HectogramsPerSecond
     *
     * @param value The unit as HectogramsPerSecond to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    public static FromHectogramsPerSecond(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.HectogramsPerSecond);
    }

    /**
     * Create a new MassFlow instance from a KilogramsPerSecond
     *
     * @param value The unit as KilogramsPerSecond to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    public static FromKilogramsPerSecond(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.KilogramsPerSecond);
    }

    /**
     * Create a new MassFlow instance from a NanogramsPerDay
     *
     * @param value The unit as NanogramsPerDay to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    public static FromNanogramsPerDay(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.NanogramsPerDay);
    }

    /**
     * Create a new MassFlow instance from a MicrogramsPerDay
     *
     * @param value The unit as MicrogramsPerDay to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    public static FromMicrogramsPerDay(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.MicrogramsPerDay);
    }

    /**
     * Create a new MassFlow instance from a MilligramsPerDay
     *
     * @param value The unit as MilligramsPerDay to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    public static FromMilligramsPerDay(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.MilligramsPerDay);
    }

    /**
     * Create a new MassFlow instance from a CentigramsPerDay
     *
     * @param value The unit as CentigramsPerDay to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    public static FromCentigramsPerDay(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.CentigramsPerDay);
    }

    /**
     * Create a new MassFlow instance from a DecigramsPerDay
     *
     * @param value The unit as DecigramsPerDay to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    public static FromDecigramsPerDay(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.DecigramsPerDay);
    }

    /**
     * Create a new MassFlow instance from a DecagramsPerDay
     *
     * @param value The unit as DecagramsPerDay to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    public static FromDecagramsPerDay(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.DecagramsPerDay);
    }

    /**
     * Create a new MassFlow instance from a HectogramsPerDay
     *
     * @param value The unit as HectogramsPerDay to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    public static FromHectogramsPerDay(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.HectogramsPerDay);
    }

    /**
     * Create a new MassFlow instance from a KilogramsPerDay
     *
     * @param value The unit as KilogramsPerDay to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    public static FromKilogramsPerDay(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.KilogramsPerDay);
    }

    /**
     * Create a new MassFlow instance from a MegagramsPerDay
     *
     * @param value The unit as MegagramsPerDay to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    public static FromMegagramsPerDay(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.MegagramsPerDay);
    }

    /**
     * Create a new MassFlow instance from a MegapoundsPerDay
     *
     * @param value The unit as MegapoundsPerDay to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    public static FromMegapoundsPerDay(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.MegapoundsPerDay);
    }

    /**
     * Create a new MassFlow instance from a MegapoundsPerHour
     *
     * @param value The unit as MegapoundsPerHour to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    public static FromMegapoundsPerHour(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.MegapoundsPerHour);
    }

    /**
     * Create a new MassFlow instance from a MegapoundsPerMinute
     *
     * @param value The unit as MegapoundsPerMinute to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    public static FromMegapoundsPerMinute(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.MegapoundsPerMinute);
    }

    /**
     * Create a new MassFlow instance from a MegapoundsPerSecond
     *
     * @param value The unit as MegapoundsPerSecond to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    public static FromMegapoundsPerSecond(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.MegapoundsPerSecond);
    }

    private convertFromBase(toUnit: MassFlowUnits): number {
        switch (toUnit) {
                
            case MassFlowUnits.GramsPerSecond:
            case MassFlowUnits.GramsPerSecond:        
                return this.value;
            case MassFlowUnits.GramsPerDay:
            case MassFlowUnits.GramsPerDay:        
                return this.value * 86400;
            case MassFlowUnits.GramsPerHour:
            case MassFlowUnits.GramsPerHour:        
                return this.value * 3600;
            case MassFlowUnits.KilogramsPerHour:
            case MassFlowUnits.KilogramsPerHour:        
                return this.value * 3.6;
            case MassFlowUnits.KilogramsPerMinute:
            case MassFlowUnits.KilogramsPerMinute:        
                return this.value * 0.06;
            case MassFlowUnits.TonnesPerHour:
            case MassFlowUnits.TonnesPerHour:        
                return this.value * 3.6 / 1000;
            case MassFlowUnits.PoundsPerDay:
            case MassFlowUnits.PoundsPerDay:        
                return this.value * 190.47936;
            case MassFlowUnits.PoundsPerHour:
            case MassFlowUnits.PoundsPerHour:        
                return this.value * 7.93664;
            case MassFlowUnits.PoundsPerMinute:
            case MassFlowUnits.PoundsPerMinute:        
                return this.value * 0.132277;
            case MassFlowUnits.PoundsPerSecond:
            case MassFlowUnits.PoundsPerSecond:        
                return this.value / 453.59237;
            case MassFlowUnits.TonnesPerDay:
            case MassFlowUnits.TonnesPerDay:        
                return this.value * 0.0864000;
            case MassFlowUnits.ShortTonsPerHour:
            case MassFlowUnits.ShortTonsPerHour:        
                return this.value / 251.9957611;
            case MassFlowUnits.NanogramsPerSecond:
            case MassFlowUnits.NanogramsPerSecond:        
                return (this.value) / 1e-9;
            case MassFlowUnits.MicrogramsPerSecond:
            case MassFlowUnits.MicrogramsPerSecond:        
                return (this.value) / 0.000001;
            case MassFlowUnits.MilligramsPerSecond:
            case MassFlowUnits.MilligramsPerSecond:        
                return (this.value) / 0.001;
            case MassFlowUnits.CentigramsPerSecond:
            case MassFlowUnits.CentigramsPerSecond:        
                return (this.value) / 0.01;
            case MassFlowUnits.DecigramsPerSecond:
            case MassFlowUnits.DecigramsPerSecond:        
                return (this.value) / 0.1;
            case MassFlowUnits.DecagramsPerSecond:
            case MassFlowUnits.DecagramsPerSecond:        
                return (this.value) / 10;
            case MassFlowUnits.HectogramsPerSecond:
            case MassFlowUnits.HectogramsPerSecond:        
                return (this.value) / 100;
            case MassFlowUnits.KilogramsPerSecond:
            case MassFlowUnits.KilogramsPerSecond:        
                return (this.value) / 1000;
            case MassFlowUnits.NanogramsPerDay:
            case MassFlowUnits.NanogramsPerDay:        
                return (this.value * 86400) / 1e-9;
            case MassFlowUnits.MicrogramsPerDay:
            case MassFlowUnits.MicrogramsPerDay:        
                return (this.value * 86400) / 0.000001;
            case MassFlowUnits.MilligramsPerDay:
            case MassFlowUnits.MilligramsPerDay:        
                return (this.value * 86400) / 0.001;
            case MassFlowUnits.CentigramsPerDay:
            case MassFlowUnits.CentigramsPerDay:        
                return (this.value * 86400) / 0.01;
            case MassFlowUnits.DecigramsPerDay:
            case MassFlowUnits.DecigramsPerDay:        
                return (this.value * 86400) / 0.1;
            case MassFlowUnits.DecagramsPerDay:
            case MassFlowUnits.DecagramsPerDay:        
                return (this.value * 86400) / 10;
            case MassFlowUnits.HectogramsPerDay:
            case MassFlowUnits.HectogramsPerDay:        
                return (this.value * 86400) / 100;
            case MassFlowUnits.KilogramsPerDay:
            case MassFlowUnits.KilogramsPerDay:        
                return (this.value * 86400) / 1000;
            case MassFlowUnits.MegagramsPerDay:
            case MassFlowUnits.MegagramsPerDay:        
                return (this.value * 86400) / 1000000;
            case MassFlowUnits.MegapoundsPerDay:
            case MassFlowUnits.MegapoundsPerDay:        
                return (this.value * 190.47936) / 1000000;
            case MassFlowUnits.MegapoundsPerHour:
            case MassFlowUnits.MegapoundsPerHour:        
                return (this.value * 7.93664) / 1000000;
            case MassFlowUnits.MegapoundsPerMinute:
            case MassFlowUnits.MegapoundsPerMinute:        
                return (this.value * 0.132277) / 1000000;
            case MassFlowUnits.MegapoundsPerSecond:
            case MassFlowUnits.MegapoundsPerSecond:        
                return (this.value / 453.59237) / 1000000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: MassFlowUnits): number {
        switch (fromUnit) {
                
            case MassFlowUnits.GramsPerSecond:
            case MassFlowUnits.GramsPerSecond:        
                return value;
            case MassFlowUnits.GramsPerDay:
            case MassFlowUnits.GramsPerDay:        
                return value / 86400;
            case MassFlowUnits.GramsPerHour:
            case MassFlowUnits.GramsPerHour:        
                return value / 3600;
            case MassFlowUnits.KilogramsPerHour:
            case MassFlowUnits.KilogramsPerHour:        
                return value / 3.6;
            case MassFlowUnits.KilogramsPerMinute:
            case MassFlowUnits.KilogramsPerMinute:        
                return value / 0.06;
            case MassFlowUnits.TonnesPerHour:
            case MassFlowUnits.TonnesPerHour:        
                return 1000 * value / 3.6;
            case MassFlowUnits.PoundsPerDay:
            case MassFlowUnits.PoundsPerDay:        
                return value / 190.47936;
            case MassFlowUnits.PoundsPerHour:
            case MassFlowUnits.PoundsPerHour:        
                return value / 7.93664;
            case MassFlowUnits.PoundsPerMinute:
            case MassFlowUnits.PoundsPerMinute:        
                return value / 0.132277;
            case MassFlowUnits.PoundsPerSecond:
            case MassFlowUnits.PoundsPerSecond:        
                return value * 453.59237;
            case MassFlowUnits.TonnesPerDay:
            case MassFlowUnits.TonnesPerDay:        
                return value / 0.0864000;
            case MassFlowUnits.ShortTonsPerHour:
            case MassFlowUnits.ShortTonsPerHour:        
                return value * 251.9957611;
            case MassFlowUnits.NanogramsPerSecond:
            case MassFlowUnits.NanogramsPerSecond:        
                return (value) * 1e-9;
            case MassFlowUnits.MicrogramsPerSecond:
            case MassFlowUnits.MicrogramsPerSecond:        
                return (value) * 0.000001;
            case MassFlowUnits.MilligramsPerSecond:
            case MassFlowUnits.MilligramsPerSecond:        
                return (value) * 0.001;
            case MassFlowUnits.CentigramsPerSecond:
            case MassFlowUnits.CentigramsPerSecond:        
                return (value) * 0.01;
            case MassFlowUnits.DecigramsPerSecond:
            case MassFlowUnits.DecigramsPerSecond:        
                return (value) * 0.1;
            case MassFlowUnits.DecagramsPerSecond:
            case MassFlowUnits.DecagramsPerSecond:        
                return (value) * 10;
            case MassFlowUnits.HectogramsPerSecond:
            case MassFlowUnits.HectogramsPerSecond:        
                return (value) * 100;
            case MassFlowUnits.KilogramsPerSecond:
            case MassFlowUnits.KilogramsPerSecond:        
                return (value) * 1000;
            case MassFlowUnits.NanogramsPerDay:
            case MassFlowUnits.NanogramsPerDay:        
                return (value / 86400) * 1e-9;
            case MassFlowUnits.MicrogramsPerDay:
            case MassFlowUnits.MicrogramsPerDay:        
                return (value / 86400) * 0.000001;
            case MassFlowUnits.MilligramsPerDay:
            case MassFlowUnits.MilligramsPerDay:        
                return (value / 86400) * 0.001;
            case MassFlowUnits.CentigramsPerDay:
            case MassFlowUnits.CentigramsPerDay:        
                return (value / 86400) * 0.01;
            case MassFlowUnits.DecigramsPerDay:
            case MassFlowUnits.DecigramsPerDay:        
                return (value / 86400) * 0.1;
            case MassFlowUnits.DecagramsPerDay:
            case MassFlowUnits.DecagramsPerDay:        
                return (value / 86400) * 10;
            case MassFlowUnits.HectogramsPerDay:
            case MassFlowUnits.HectogramsPerDay:        
                return (value / 86400) * 100;
            case MassFlowUnits.KilogramsPerDay:
            case MassFlowUnits.KilogramsPerDay:        
                return (value / 86400) * 1000;
            case MassFlowUnits.MegagramsPerDay:
            case MassFlowUnits.MegagramsPerDay:        
                return (value / 86400) * 1000000;
            case MassFlowUnits.MegapoundsPerDay:
            case MassFlowUnits.MegapoundsPerDay:        
                return (value / 190.47936) * 1000000;
            case MassFlowUnits.MegapoundsPerHour:
            case MassFlowUnits.MegapoundsPerHour:        
                return (value / 7.93664) * 1000000;
            case MassFlowUnits.MegapoundsPerMinute:
            case MassFlowUnits.MegapoundsPerMinute:        
                return (value / 0.132277) * 1000000;
            case MassFlowUnits.MegapoundsPerSecond:
            case MassFlowUnits.MegapoundsPerSecond:        
                return (value * 453.59237) * 1000000;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the MassFlow to string.
     * Note! the default format for MassFlow is GramsPerSecond.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the MassFlow.
     * @returns The string format of the MassFlow.
     */
    public toString(unit: MassFlowUnits = MassFlowUnits.GramsPerSecond): string {

        switch (unit) {
            
            case MassFlowUnits.GramsPerSecond:
                return this.GramsPerSecond + ` g/s`;
            case MassFlowUnits.GramsPerDay:
                return this.GramsPerDay + ` g/d`;
            case MassFlowUnits.GramsPerHour:
                return this.GramsPerHour + ` g/h`;
            case MassFlowUnits.KilogramsPerHour:
                return this.KilogramsPerHour + ` kg/h`;
            case MassFlowUnits.KilogramsPerMinute:
                return this.KilogramsPerMinute + ` kg/min`;
            case MassFlowUnits.TonnesPerHour:
                return this.TonnesPerHour + ` t/h`;
            case MassFlowUnits.PoundsPerDay:
                return this.PoundsPerDay + ` lb/d`;
            case MassFlowUnits.PoundsPerHour:
                return this.PoundsPerHour + ` lb/h`;
            case MassFlowUnits.PoundsPerMinute:
                return this.PoundsPerMinute + ` lb/min`;
            case MassFlowUnits.PoundsPerSecond:
                return this.PoundsPerSecond + ` lb/s`;
            case MassFlowUnits.TonnesPerDay:
                return this.TonnesPerDay + ` t/d`;
            case MassFlowUnits.ShortTonsPerHour:
                return this.ShortTonsPerHour + ` short tn/h`;
            case MassFlowUnits.NanogramsPerSecond:
                return this.NanogramsPerSecond + ` `;
            case MassFlowUnits.MicrogramsPerSecond:
                return this.MicrogramsPerSecond + ` `;
            case MassFlowUnits.MilligramsPerSecond:
                return this.MilligramsPerSecond + ` `;
            case MassFlowUnits.CentigramsPerSecond:
                return this.CentigramsPerSecond + ` `;
            case MassFlowUnits.DecigramsPerSecond:
                return this.DecigramsPerSecond + ` `;
            case MassFlowUnits.DecagramsPerSecond:
                return this.DecagramsPerSecond + ` `;
            case MassFlowUnits.HectogramsPerSecond:
                return this.HectogramsPerSecond + ` `;
            case MassFlowUnits.KilogramsPerSecond:
                return this.KilogramsPerSecond + ` `;
            case MassFlowUnits.NanogramsPerDay:
                return this.NanogramsPerDay + ` `;
            case MassFlowUnits.MicrogramsPerDay:
                return this.MicrogramsPerDay + ` `;
            case MassFlowUnits.MilligramsPerDay:
                return this.MilligramsPerDay + ` `;
            case MassFlowUnits.CentigramsPerDay:
                return this.CentigramsPerDay + ` `;
            case MassFlowUnits.DecigramsPerDay:
                return this.DecigramsPerDay + ` `;
            case MassFlowUnits.DecagramsPerDay:
                return this.DecagramsPerDay + ` `;
            case MassFlowUnits.HectogramsPerDay:
                return this.HectogramsPerDay + ` `;
            case MassFlowUnits.KilogramsPerDay:
                return this.KilogramsPerDay + ` `;
            case MassFlowUnits.MegagramsPerDay:
                return this.MegagramsPerDay + ` `;
            case MassFlowUnits.MegapoundsPerDay:
                return this.MegapoundsPerDay + ` `;
            case MassFlowUnits.MegapoundsPerHour:
                return this.MegapoundsPerHour + ` `;
            case MassFlowUnits.MegapoundsPerMinute:
                return this.MegapoundsPerMinute + ` `;
            case MassFlowUnits.MegapoundsPerSecond:
                return this.MegapoundsPerSecond + ` `;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get MassFlow unit abbreviation.
     * Note! the default abbreviation for MassFlow is GramsPerSecond.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the MassFlow.
     * @returns The abbreviation string of MassFlow.
     */
    public getUnitAbbreviation(unitAbbreviation: MassFlowUnits = MassFlowUnits.GramsPerSecond): string {

        switch (unitAbbreviation) {
            
            case MassFlowUnits.GramsPerSecond:
                return `g/s`;
            case MassFlowUnits.GramsPerDay:
                return `g/d`;
            case MassFlowUnits.GramsPerHour:
                return `g/h`;
            case MassFlowUnits.KilogramsPerHour:
                return `kg/h`;
            case MassFlowUnits.KilogramsPerMinute:
                return `kg/min`;
            case MassFlowUnits.TonnesPerHour:
                return `t/h`;
            case MassFlowUnits.PoundsPerDay:
                return `lb/d`;
            case MassFlowUnits.PoundsPerHour:
                return `lb/h`;
            case MassFlowUnits.PoundsPerMinute:
                return `lb/min`;
            case MassFlowUnits.PoundsPerSecond:
                return `lb/s`;
            case MassFlowUnits.TonnesPerDay:
                return `t/d`;
            case MassFlowUnits.ShortTonsPerHour:
                return `short tn/h`;
            case MassFlowUnits.NanogramsPerSecond:
                return ``;
            case MassFlowUnits.MicrogramsPerSecond:
                return ``;
            case MassFlowUnits.MilligramsPerSecond:
                return ``;
            case MassFlowUnits.CentigramsPerSecond:
                return ``;
            case MassFlowUnits.DecigramsPerSecond:
                return ``;
            case MassFlowUnits.DecagramsPerSecond:
                return ``;
            case MassFlowUnits.HectogramsPerSecond:
                return ``;
            case MassFlowUnits.KilogramsPerSecond:
                return ``;
            case MassFlowUnits.NanogramsPerDay:
                return ``;
            case MassFlowUnits.MicrogramsPerDay:
                return ``;
            case MassFlowUnits.MilligramsPerDay:
                return ``;
            case MassFlowUnits.CentigramsPerDay:
                return ``;
            case MassFlowUnits.DecigramsPerDay:
                return ``;
            case MassFlowUnits.DecagramsPerDay:
                return ``;
            case MassFlowUnits.HectogramsPerDay:
                return ``;
            case MassFlowUnits.KilogramsPerDay:
                return ``;
            case MassFlowUnits.MegagramsPerDay:
                return ``;
            case MassFlowUnits.MegapoundsPerDay:
                return ``;
            case MassFlowUnits.MegapoundsPerHour:
                return ``;
            case MassFlowUnits.MegapoundsPerMinute:
                return ``;
            case MassFlowUnits.MegapoundsPerSecond:
                return ``;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given MassFlow are equals to the current MassFlow.
     * @param massFlow The other MassFlow.
     * @returns True if the given MassFlow are equal to the current MassFlow.
     */
    public equals(massFlow: MassFlow): boolean {
        return this.value === massFlow.BaseValue;
    }

    /**
     * Compare the given MassFlow against the current MassFlow.
     * @param massFlow The other MassFlow.
     * @returns 0 if they are equal, -1 if the current MassFlow is less then other, 1 if the current MassFlow is greater then other.
     */
    public compareTo(massFlow: MassFlow): number {

        if (this.value > massFlow.BaseValue)
            return 1;
        if (this.value < massFlow.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given MassFlow with the current MassFlow.
     * @param massFlow The other MassFlow.
     * @returns A new MassFlow instance with the results.
     */
    public add(massFlow: MassFlow): MassFlow {
        return new MassFlow(this.value + massFlow.BaseValue)
    }

    /**
     * Subtract the given MassFlow with the current MassFlow.
     * @param massFlow The other MassFlow.
     * @returns A new MassFlow instance with the results.
     */
    public subtract(massFlow: MassFlow): MassFlow {
        return new MassFlow(this.value - massFlow.BaseValue)
    }

    /**
     * Multiply the given MassFlow with the current MassFlow.
     * @param massFlow The other MassFlow.
     * @returns A new MassFlow instance with the results.
     */
    public multiply(massFlow: MassFlow): MassFlow {
        return new MassFlow(this.value * massFlow.BaseValue)
    }

    /**
     * Divide the given MassFlow with the current MassFlow.
     * @param massFlow The other MassFlow.
     * @returns A new MassFlow instance with the results.
     */
    public divide(massFlow: MassFlow): MassFlow {
        return new MassFlow(this.value / massFlow.BaseValue)
    }

    /**
     * Modulo the given MassFlow with the current MassFlow.
     * @param massFlow The other MassFlow.
     * @returns A new MassFlow instance with the results.
     */
    public modulo(massFlow: MassFlow): MassFlow {
        return new MassFlow(this.value % massFlow.BaseValue)
    }

    /**
     * Pow the given MassFlow with the current MassFlow.
     * @param massFlow The other MassFlow.
     * @returns A new MassFlow instance with the results.
     */
    public pow(massFlow: MassFlow): MassFlow {
        return new MassFlow(this.value ** massFlow.BaseValue)
    }
}
