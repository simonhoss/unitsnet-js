/** DensityUnits enumeration */
export enum DensityUnits {
    /** */
    GramsPerCubicMillimeter,
    /** */
    GramsPerCubicCentimeter,
    /** */
    GramsPerCubicMeter,
    /** */
    PoundsPerCubicInch,
    /** */
    PoundsPerCubicFoot,
    /** */
    TonnesPerCubicMillimeter,
    /** */
    TonnesPerCubicCentimeter,
    /** */
    TonnesPerCubicMeter,
    /** */
    SlugsPerCubicFoot,
    /** */
    GramsPerLiter,
    /** */
    GramsPerDeciLiter,
    /** */
    GramsPerMilliliter,
    /** */
    PoundsPerUSGallon,
    /** */
    PoundsPerImperialGallon,
    /** */
    KilogramsPerLiter,
    /** */
    TonnesPerCubicFoot,
    /** */
    TonnesPerCubicInch,
    /** */
    GramsPerCubicFoot,
    /** */
    GramsPerCubicInch,
    /** */
    PoundsPerCubicMeter,
    /** */
    PoundsPerCubicCentimeter,
    /** */
    PoundsPerCubicMillimeter,
    /** */
    SlugsPerCubicMeter,
    /** */
    SlugsPerCubicCentimeter,
    /** */
    SlugsPerCubicMillimeter,
    /** */
    SlugsPerCubicInch,
    /** */
    KilogramsPerCubicMillimeter,
    /** */
    KilogramsPerCubicCentimeter,
    /** */
    KilogramsPerCubicMeter,
    /** */
    MilligramsPerCubicMeter,
    /** */
    MicrogramsPerCubicMeter,
    /** */
    KilopoundsPerCubicInch,
    /** */
    KilopoundsPerCubicFoot,
    /** */
    PicogramsPerLiter,
    /** */
    NanogramsPerLiter,
    /** */
    MicrogramsPerLiter,
    /** */
    MilligramsPerLiter,
    /** */
    CentigramsPerLiter,
    /** */
    DecigramsPerLiter,
    /** */
    PicogramsPerDeciLiter,
    /** */
    NanogramsPerDeciLiter,
    /** */
    MicrogramsPerDeciLiter,
    /** */
    MilligramsPerDeciLiter,
    /** */
    CentigramsPerDeciLiter,
    /** */
    DecigramsPerDeciLiter,
    /** */
    PicogramsPerMilliliter,
    /** */
    NanogramsPerMilliliter,
    /** */
    MicrogramsPerMilliliter,
    /** */
    MilligramsPerMilliliter,
    /** */
    CentigramsPerMilliliter,
    /** */
    DecigramsPerMilliliter,
    /** */
    GramPerCubicMillimeter,
    /** */
    GramPerCubicCentimeter,
    /** */
    GramPerCubicMeter,
    /** */
    PoundPerCubicInch,
    /** */
    PoundPerCubicFoot,
    /** */
    TonnePerCubicMillimeter,
    /** */
    TonnePerCubicCentimeter,
    /** */
    TonnePerCubicMeter,
    /** */
    SlugPerCubicFoot,
    /** */
    GramPerLiter,
    /** */
    GramPerDeciliter,
    /** */
    GramPerMilliliter,
    /** */
    PoundPerUSGallon,
    /** */
    PoundPerImperialGallon,
    /** */
    KilogramPerLiter,
    /** */
    TonnePerCubicFoot,
    /** */
    TonnePerCubicInch,
    /** */
    GramPerCubicFoot,
    /** */
    GramPerCubicInch,
    /** */
    PoundPerCubicMeter,
    /** */
    PoundPerCubicCentimeter,
    /** */
    PoundPerCubicMillimeter,
    /** */
    SlugPerCubicMeter,
    /** */
    SlugPerCubicCentimeter,
    /** */
    SlugPerCubicMillimeter,
    /** */
    SlugPerCubicInch,
    /** */
    KilogramPerCubicMillimeter,
    /** */
    KilogramPerCubicCentimeter,
    /** */
    KilogramPerCubicMeter,
    /** */
    MilligramPerCubicMeter,
    /** */
    MicrogramPerCubicMeter,
    /** */
    KilopoundPerCubicInch,
    /** */
    KilopoundPerCubicFoot,
    /** */
    PicogramPerLiter,
    /** */
    NanogramPerLiter,
    /** */
    MicrogramPerLiter,
    /** */
    MilligramPerLiter,
    /** */
    CentigramPerLiter,
    /** */
    DecigramPerLiter,
    /** */
    PicogramPerDeciliter,
    /** */
    NanogramPerDeciliter,
    /** */
    MicrogramPerDeciliter,
    /** */
    MilligramPerDeciliter,
    /** */
    CentigramPerDeciliter,
    /** */
    DecigramPerDeciliter,
    /** */
    PicogramPerMilliliter,
    /** */
    NanogramPerMilliliter,
    /** */
    MicrogramPerMilliliter,
    /** */
    MilligramPerMilliliter,
    /** */
    CentigramPerMilliliter,
    /** */
    DecigramPerMilliliter
}

/** The density, or more precisely, the volumetric mass density, of a substance is its mass per unit volume. */
export class Density {
    private value: number;
    private gramspercubicmillimeterLazy: number | null = null;
    private gramspercubiccentimeterLazy: number | null = null;
    private gramspercubicmeterLazy: number | null = null;
    private poundspercubicinchLazy: number | null = null;
    private poundspercubicfootLazy: number | null = null;
    private tonnespercubicmillimeterLazy: number | null = null;
    private tonnespercubiccentimeterLazy: number | null = null;
    private tonnespercubicmeterLazy: number | null = null;
    private slugspercubicfootLazy: number | null = null;
    private gramsperliterLazy: number | null = null;
    private gramsperdeciliterLazy: number | null = null;
    private gramspermilliliterLazy: number | null = null;
    private poundsperusgallonLazy: number | null = null;
    private poundsperimperialgallonLazy: number | null = null;
    private kilogramsperliterLazy: number | null = null;
    private tonnespercubicfootLazy: number | null = null;
    private tonnespercubicinchLazy: number | null = null;
    private gramspercubicfootLazy: number | null = null;
    private gramspercubicinchLazy: number | null = null;
    private poundspercubicmeterLazy: number | null = null;
    private poundspercubiccentimeterLazy: number | null = null;
    private poundspercubicmillimeterLazy: number | null = null;
    private slugspercubicmeterLazy: number | null = null;
    private slugspercubiccentimeterLazy: number | null = null;
    private slugspercubicmillimeterLazy: number | null = null;
    private slugspercubicinchLazy: number | null = null;
    private kilogramspercubicmillimeterLazy: number | null = null;
    private kilogramspercubiccentimeterLazy: number | null = null;
    private kilogramspercubicmeterLazy: number | null = null;
    private milligramspercubicmeterLazy: number | null = null;
    private microgramspercubicmeterLazy: number | null = null;
    private kilopoundspercubicinchLazy: number | null = null;
    private kilopoundspercubicfootLazy: number | null = null;
    private picogramsperliterLazy: number | null = null;
    private nanogramsperliterLazy: number | null = null;
    private microgramsperliterLazy: number | null = null;
    private milligramsperliterLazy: number | null = null;
    private centigramsperliterLazy: number | null = null;
    private decigramsperliterLazy: number | null = null;
    private picogramsperdeciliterLazy: number | null = null;
    private nanogramsperdeciliterLazy: number | null = null;
    private microgramsperdeciliterLazy: number | null = null;
    private milligramsperdeciliterLazy: number | null = null;
    private centigramsperdeciliterLazy: number | null = null;
    private decigramsperdeciliterLazy: number | null = null;
    private picogramspermilliliterLazy: number | null = null;
    private nanogramspermilliliterLazy: number | null = null;
    private microgramspermilliliterLazy: number | null = null;
    private milligramspermilliliterLazy: number | null = null;
    private centigramspermilliliterLazy: number | null = null;
    private decigramspermilliliterLazy: number | null = null;

    /**
     * Create a new Density.
     * @param value The value.
     * @param fromUnit The ‘Density’ unit to create from.
     * The default unit is KilogramsPerCubicMeter
     */
    public constructor(value: number, fromUnit: DensityUnits = DensityUnits.KilogramsPerCubicMeter) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of Density is KilogramsPerCubicMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get GramsPerCubicMillimeter(): number {
        if(this.gramspercubicmillimeterLazy !== null){
            return this.gramspercubicmillimeterLazy;
        }
        return this.gramspercubicmillimeterLazy = this.convertFromBase(DensityUnits.GramsPerCubicMillimeter);
    }

    /** */
    public get GramsPerCubicCentimeter(): number {
        if(this.gramspercubiccentimeterLazy !== null){
            return this.gramspercubiccentimeterLazy;
        }
        return this.gramspercubiccentimeterLazy = this.convertFromBase(DensityUnits.GramsPerCubicCentimeter);
    }

    /** */
    public get GramsPerCubicMeter(): number {
        if(this.gramspercubicmeterLazy !== null){
            return this.gramspercubicmeterLazy;
        }
        return this.gramspercubicmeterLazy = this.convertFromBase(DensityUnits.GramsPerCubicMeter);
    }

    /** */
    public get PoundsPerCubicInch(): number {
        if(this.poundspercubicinchLazy !== null){
            return this.poundspercubicinchLazy;
        }
        return this.poundspercubicinchLazy = this.convertFromBase(DensityUnits.PoundsPerCubicInch);
    }

    /** */
    public get PoundsPerCubicFoot(): number {
        if(this.poundspercubicfootLazy !== null){
            return this.poundspercubicfootLazy;
        }
        return this.poundspercubicfootLazy = this.convertFromBase(DensityUnits.PoundsPerCubicFoot);
    }

    /** */
    public get TonnesPerCubicMillimeter(): number {
        if(this.tonnespercubicmillimeterLazy !== null){
            return this.tonnespercubicmillimeterLazy;
        }
        return this.tonnespercubicmillimeterLazy = this.convertFromBase(DensityUnits.TonnesPerCubicMillimeter);
    }

    /** */
    public get TonnesPerCubicCentimeter(): number {
        if(this.tonnespercubiccentimeterLazy !== null){
            return this.tonnespercubiccentimeterLazy;
        }
        return this.tonnespercubiccentimeterLazy = this.convertFromBase(DensityUnits.TonnesPerCubicCentimeter);
    }

    /** */
    public get TonnesPerCubicMeter(): number {
        if(this.tonnespercubicmeterLazy !== null){
            return this.tonnespercubicmeterLazy;
        }
        return this.tonnespercubicmeterLazy = this.convertFromBase(DensityUnits.TonnesPerCubicMeter);
    }

    /** */
    public get SlugsPerCubicFoot(): number {
        if(this.slugspercubicfootLazy !== null){
            return this.slugspercubicfootLazy;
        }
        return this.slugspercubicfootLazy = this.convertFromBase(DensityUnits.SlugsPerCubicFoot);
    }

    /** */
    public get GramsPerLiter(): number {
        if(this.gramsperliterLazy !== null){
            return this.gramsperliterLazy;
        }
        return this.gramsperliterLazy = this.convertFromBase(DensityUnits.GramsPerLiter);
    }

    /** */
    public get GramsPerDeciLiter(): number {
        if(this.gramsperdeciliterLazy !== null){
            return this.gramsperdeciliterLazy;
        }
        return this.gramsperdeciliterLazy = this.convertFromBase(DensityUnits.GramsPerDeciLiter);
    }

    /** */
    public get GramsPerMilliliter(): number {
        if(this.gramspermilliliterLazy !== null){
            return this.gramspermilliliterLazy;
        }
        return this.gramspermilliliterLazy = this.convertFromBase(DensityUnits.GramsPerMilliliter);
    }

    /** */
    public get PoundsPerUSGallon(): number {
        if(this.poundsperusgallonLazy !== null){
            return this.poundsperusgallonLazy;
        }
        return this.poundsperusgallonLazy = this.convertFromBase(DensityUnits.PoundsPerUSGallon);
    }

    /** */
    public get PoundsPerImperialGallon(): number {
        if(this.poundsperimperialgallonLazy !== null){
            return this.poundsperimperialgallonLazy;
        }
        return this.poundsperimperialgallonLazy = this.convertFromBase(DensityUnits.PoundsPerImperialGallon);
    }

    /** */
    public get KilogramsPerLiter(): number {
        if(this.kilogramsperliterLazy !== null){
            return this.kilogramsperliterLazy;
        }
        return this.kilogramsperliterLazy = this.convertFromBase(DensityUnits.KilogramsPerLiter);
    }

    /** */
    public get TonnesPerCubicFoot(): number {
        if(this.tonnespercubicfootLazy !== null){
            return this.tonnespercubicfootLazy;
        }
        return this.tonnespercubicfootLazy = this.convertFromBase(DensityUnits.TonnesPerCubicFoot);
    }

    /** */
    public get TonnesPerCubicInch(): number {
        if(this.tonnespercubicinchLazy !== null){
            return this.tonnespercubicinchLazy;
        }
        return this.tonnespercubicinchLazy = this.convertFromBase(DensityUnits.TonnesPerCubicInch);
    }

    /** */
    public get GramsPerCubicFoot(): number {
        if(this.gramspercubicfootLazy !== null){
            return this.gramspercubicfootLazy;
        }
        return this.gramspercubicfootLazy = this.convertFromBase(DensityUnits.GramsPerCubicFoot);
    }

    /** */
    public get GramsPerCubicInch(): number {
        if(this.gramspercubicinchLazy !== null){
            return this.gramspercubicinchLazy;
        }
        return this.gramspercubicinchLazy = this.convertFromBase(DensityUnits.GramsPerCubicInch);
    }

    /** */
    public get PoundsPerCubicMeter(): number {
        if(this.poundspercubicmeterLazy !== null){
            return this.poundspercubicmeterLazy;
        }
        return this.poundspercubicmeterLazy = this.convertFromBase(DensityUnits.PoundsPerCubicMeter);
    }

    /** */
    public get PoundsPerCubicCentimeter(): number {
        if(this.poundspercubiccentimeterLazy !== null){
            return this.poundspercubiccentimeterLazy;
        }
        return this.poundspercubiccentimeterLazy = this.convertFromBase(DensityUnits.PoundsPerCubicCentimeter);
    }

    /** */
    public get PoundsPerCubicMillimeter(): number {
        if(this.poundspercubicmillimeterLazy !== null){
            return this.poundspercubicmillimeterLazy;
        }
        return this.poundspercubicmillimeterLazy = this.convertFromBase(DensityUnits.PoundsPerCubicMillimeter);
    }

    /** */
    public get SlugsPerCubicMeter(): number {
        if(this.slugspercubicmeterLazy !== null){
            return this.slugspercubicmeterLazy;
        }
        return this.slugspercubicmeterLazy = this.convertFromBase(DensityUnits.SlugsPerCubicMeter);
    }

    /** */
    public get SlugsPerCubicCentimeter(): number {
        if(this.slugspercubiccentimeterLazy !== null){
            return this.slugspercubiccentimeterLazy;
        }
        return this.slugspercubiccentimeterLazy = this.convertFromBase(DensityUnits.SlugsPerCubicCentimeter);
    }

    /** */
    public get SlugsPerCubicMillimeter(): number {
        if(this.slugspercubicmillimeterLazy !== null){
            return this.slugspercubicmillimeterLazy;
        }
        return this.slugspercubicmillimeterLazy = this.convertFromBase(DensityUnits.SlugsPerCubicMillimeter);
    }

    /** */
    public get SlugsPerCubicInch(): number {
        if(this.slugspercubicinchLazy !== null){
            return this.slugspercubicinchLazy;
        }
        return this.slugspercubicinchLazy = this.convertFromBase(DensityUnits.SlugsPerCubicInch);
    }

    /** */
    public get KilogramsPerCubicMillimeter(): number {
        if(this.kilogramspercubicmillimeterLazy !== null){
            return this.kilogramspercubicmillimeterLazy;
        }
        return this.kilogramspercubicmillimeterLazy = this.convertFromBase(DensityUnits.KilogramsPerCubicMillimeter);
    }

    /** */
    public get KilogramsPerCubicCentimeter(): number {
        if(this.kilogramspercubiccentimeterLazy !== null){
            return this.kilogramspercubiccentimeterLazy;
        }
        return this.kilogramspercubiccentimeterLazy = this.convertFromBase(DensityUnits.KilogramsPerCubicCentimeter);
    }

    /** */
    public get KilogramsPerCubicMeter(): number {
        if(this.kilogramspercubicmeterLazy !== null){
            return this.kilogramspercubicmeterLazy;
        }
        return this.kilogramspercubicmeterLazy = this.convertFromBase(DensityUnits.KilogramsPerCubicMeter);
    }

    /** */
    public get MilligramsPerCubicMeter(): number {
        if(this.milligramspercubicmeterLazy !== null){
            return this.milligramspercubicmeterLazy;
        }
        return this.milligramspercubicmeterLazy = this.convertFromBase(DensityUnits.MilligramsPerCubicMeter);
    }

    /** */
    public get MicrogramsPerCubicMeter(): number {
        if(this.microgramspercubicmeterLazy !== null){
            return this.microgramspercubicmeterLazy;
        }
        return this.microgramspercubicmeterLazy = this.convertFromBase(DensityUnits.MicrogramsPerCubicMeter);
    }

    /** */
    public get KilopoundsPerCubicInch(): number {
        if(this.kilopoundspercubicinchLazy !== null){
            return this.kilopoundspercubicinchLazy;
        }
        return this.kilopoundspercubicinchLazy = this.convertFromBase(DensityUnits.KilopoundsPerCubicInch);
    }

    /** */
    public get KilopoundsPerCubicFoot(): number {
        if(this.kilopoundspercubicfootLazy !== null){
            return this.kilopoundspercubicfootLazy;
        }
        return this.kilopoundspercubicfootLazy = this.convertFromBase(DensityUnits.KilopoundsPerCubicFoot);
    }

    /** */
    public get PicogramsPerLiter(): number {
        if(this.picogramsperliterLazy !== null){
            return this.picogramsperliterLazy;
        }
        return this.picogramsperliterLazy = this.convertFromBase(DensityUnits.PicogramsPerLiter);
    }

    /** */
    public get NanogramsPerLiter(): number {
        if(this.nanogramsperliterLazy !== null){
            return this.nanogramsperliterLazy;
        }
        return this.nanogramsperliterLazy = this.convertFromBase(DensityUnits.NanogramsPerLiter);
    }

    /** */
    public get MicrogramsPerLiter(): number {
        if(this.microgramsperliterLazy !== null){
            return this.microgramsperliterLazy;
        }
        return this.microgramsperliterLazy = this.convertFromBase(DensityUnits.MicrogramsPerLiter);
    }

    /** */
    public get MilligramsPerLiter(): number {
        if(this.milligramsperliterLazy !== null){
            return this.milligramsperliterLazy;
        }
        return this.milligramsperliterLazy = this.convertFromBase(DensityUnits.MilligramsPerLiter);
    }

    /** */
    public get CentigramsPerLiter(): number {
        if(this.centigramsperliterLazy !== null){
            return this.centigramsperliterLazy;
        }
        return this.centigramsperliterLazy = this.convertFromBase(DensityUnits.CentigramsPerLiter);
    }

    /** */
    public get DecigramsPerLiter(): number {
        if(this.decigramsperliterLazy !== null){
            return this.decigramsperliterLazy;
        }
        return this.decigramsperliterLazy = this.convertFromBase(DensityUnits.DecigramsPerLiter);
    }

    /** */
    public get PicogramsPerDeciLiter(): number {
        if(this.picogramsperdeciliterLazy !== null){
            return this.picogramsperdeciliterLazy;
        }
        return this.picogramsperdeciliterLazy = this.convertFromBase(DensityUnits.PicogramsPerDeciLiter);
    }

    /** */
    public get NanogramsPerDeciLiter(): number {
        if(this.nanogramsperdeciliterLazy !== null){
            return this.nanogramsperdeciliterLazy;
        }
        return this.nanogramsperdeciliterLazy = this.convertFromBase(DensityUnits.NanogramsPerDeciLiter);
    }

    /** */
    public get MicrogramsPerDeciLiter(): number {
        if(this.microgramsperdeciliterLazy !== null){
            return this.microgramsperdeciliterLazy;
        }
        return this.microgramsperdeciliterLazy = this.convertFromBase(DensityUnits.MicrogramsPerDeciLiter);
    }

    /** */
    public get MilligramsPerDeciLiter(): number {
        if(this.milligramsperdeciliterLazy !== null){
            return this.milligramsperdeciliterLazy;
        }
        return this.milligramsperdeciliterLazy = this.convertFromBase(DensityUnits.MilligramsPerDeciLiter);
    }

    /** */
    public get CentigramsPerDeciLiter(): number {
        if(this.centigramsperdeciliterLazy !== null){
            return this.centigramsperdeciliterLazy;
        }
        return this.centigramsperdeciliterLazy = this.convertFromBase(DensityUnits.CentigramsPerDeciLiter);
    }

    /** */
    public get DecigramsPerDeciLiter(): number {
        if(this.decigramsperdeciliterLazy !== null){
            return this.decigramsperdeciliterLazy;
        }
        return this.decigramsperdeciliterLazy = this.convertFromBase(DensityUnits.DecigramsPerDeciLiter);
    }

    /** */
    public get PicogramsPerMilliliter(): number {
        if(this.picogramspermilliliterLazy !== null){
            return this.picogramspermilliliterLazy;
        }
        return this.picogramspermilliliterLazy = this.convertFromBase(DensityUnits.PicogramsPerMilliliter);
    }

    /** */
    public get NanogramsPerMilliliter(): number {
        if(this.nanogramspermilliliterLazy !== null){
            return this.nanogramspermilliliterLazy;
        }
        return this.nanogramspermilliliterLazy = this.convertFromBase(DensityUnits.NanogramsPerMilliliter);
    }

    /** */
    public get MicrogramsPerMilliliter(): number {
        if(this.microgramspermilliliterLazy !== null){
            return this.microgramspermilliliterLazy;
        }
        return this.microgramspermilliliterLazy = this.convertFromBase(DensityUnits.MicrogramsPerMilliliter);
    }

    /** */
    public get MilligramsPerMilliliter(): number {
        if(this.milligramspermilliliterLazy !== null){
            return this.milligramspermilliliterLazy;
        }
        return this.milligramspermilliliterLazy = this.convertFromBase(DensityUnits.MilligramsPerMilliliter);
    }

    /** */
    public get CentigramsPerMilliliter(): number {
        if(this.centigramspermilliliterLazy !== null){
            return this.centigramspermilliliterLazy;
        }
        return this.centigramspermilliliterLazy = this.convertFromBase(DensityUnits.CentigramsPerMilliliter);
    }

    /** */
    public get DecigramsPerMilliliter(): number {
        if(this.decigramspermilliliterLazy !== null){
            return this.decigramspermilliliterLazy;
        }
        return this.decigramspermilliliterLazy = this.convertFromBase(DensityUnits.DecigramsPerMilliliter);
    }

    /**
     * Create a new Density instance from a GramsPerCubicMillimeter
     *
     * @param value The unit as GramsPerCubicMillimeter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromGramsPerCubicMillimeter(value: number): Density {
        return new Density(value, DensityUnits.GramsPerCubicMillimeter);
    }

    /**
     * Create a new Density instance from a GramsPerCubicCentimeter
     *
     * @param value The unit as GramsPerCubicCentimeter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromGramsPerCubicCentimeter(value: number): Density {
        return new Density(value, DensityUnits.GramsPerCubicCentimeter);
    }

    /**
     * Create a new Density instance from a GramsPerCubicMeter
     *
     * @param value The unit as GramsPerCubicMeter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromGramsPerCubicMeter(value: number): Density {
        return new Density(value, DensityUnits.GramsPerCubicMeter);
    }

    /**
     * Create a new Density instance from a PoundsPerCubicInch
     *
     * @param value The unit as PoundsPerCubicInch to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromPoundsPerCubicInch(value: number): Density {
        return new Density(value, DensityUnits.PoundsPerCubicInch);
    }

    /**
     * Create a new Density instance from a PoundsPerCubicFoot
     *
     * @param value The unit as PoundsPerCubicFoot to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromPoundsPerCubicFoot(value: number): Density {
        return new Density(value, DensityUnits.PoundsPerCubicFoot);
    }

    /**
     * Create a new Density instance from a TonnesPerCubicMillimeter
     *
     * @param value The unit as TonnesPerCubicMillimeter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromTonnesPerCubicMillimeter(value: number): Density {
        return new Density(value, DensityUnits.TonnesPerCubicMillimeter);
    }

    /**
     * Create a new Density instance from a TonnesPerCubicCentimeter
     *
     * @param value The unit as TonnesPerCubicCentimeter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromTonnesPerCubicCentimeter(value: number): Density {
        return new Density(value, DensityUnits.TonnesPerCubicCentimeter);
    }

    /**
     * Create a new Density instance from a TonnesPerCubicMeter
     *
     * @param value The unit as TonnesPerCubicMeter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromTonnesPerCubicMeter(value: number): Density {
        return new Density(value, DensityUnits.TonnesPerCubicMeter);
    }

    /**
     * Create a new Density instance from a SlugsPerCubicFoot
     *
     * @param value The unit as SlugsPerCubicFoot to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromSlugsPerCubicFoot(value: number): Density {
        return new Density(value, DensityUnits.SlugsPerCubicFoot);
    }

    /**
     * Create a new Density instance from a GramsPerLiter
     *
     * @param value The unit as GramsPerLiter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromGramsPerLiter(value: number): Density {
        return new Density(value, DensityUnits.GramsPerLiter);
    }

    /**
     * Create a new Density instance from a GramsPerDeciLiter
     *
     * @param value The unit as GramsPerDeciLiter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromGramsPerDeciLiter(value: number): Density {
        return new Density(value, DensityUnits.GramsPerDeciLiter);
    }

    /**
     * Create a new Density instance from a GramsPerMilliliter
     *
     * @param value The unit as GramsPerMilliliter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromGramsPerMilliliter(value: number): Density {
        return new Density(value, DensityUnits.GramsPerMilliliter);
    }

    /**
     * Create a new Density instance from a PoundsPerUSGallon
     *
     * @param value The unit as PoundsPerUSGallon to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromPoundsPerUSGallon(value: number): Density {
        return new Density(value, DensityUnits.PoundsPerUSGallon);
    }

    /**
     * Create a new Density instance from a PoundsPerImperialGallon
     *
     * @param value The unit as PoundsPerImperialGallon to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromPoundsPerImperialGallon(value: number): Density {
        return new Density(value, DensityUnits.PoundsPerImperialGallon);
    }

    /**
     * Create a new Density instance from a KilogramsPerLiter
     *
     * @param value The unit as KilogramsPerLiter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromKilogramsPerLiter(value: number): Density {
        return new Density(value, DensityUnits.KilogramsPerLiter);
    }

    /**
     * Create a new Density instance from a TonnesPerCubicFoot
     *
     * @param value The unit as TonnesPerCubicFoot to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromTonnesPerCubicFoot(value: number): Density {
        return new Density(value, DensityUnits.TonnesPerCubicFoot);
    }

    /**
     * Create a new Density instance from a TonnesPerCubicInch
     *
     * @param value The unit as TonnesPerCubicInch to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromTonnesPerCubicInch(value: number): Density {
        return new Density(value, DensityUnits.TonnesPerCubicInch);
    }

    /**
     * Create a new Density instance from a GramsPerCubicFoot
     *
     * @param value The unit as GramsPerCubicFoot to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromGramsPerCubicFoot(value: number): Density {
        return new Density(value, DensityUnits.GramsPerCubicFoot);
    }

    /**
     * Create a new Density instance from a GramsPerCubicInch
     *
     * @param value The unit as GramsPerCubicInch to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromGramsPerCubicInch(value: number): Density {
        return new Density(value, DensityUnits.GramsPerCubicInch);
    }

    /**
     * Create a new Density instance from a PoundsPerCubicMeter
     *
     * @param value The unit as PoundsPerCubicMeter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromPoundsPerCubicMeter(value: number): Density {
        return new Density(value, DensityUnits.PoundsPerCubicMeter);
    }

    /**
     * Create a new Density instance from a PoundsPerCubicCentimeter
     *
     * @param value The unit as PoundsPerCubicCentimeter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromPoundsPerCubicCentimeter(value: number): Density {
        return new Density(value, DensityUnits.PoundsPerCubicCentimeter);
    }

    /**
     * Create a new Density instance from a PoundsPerCubicMillimeter
     *
     * @param value The unit as PoundsPerCubicMillimeter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromPoundsPerCubicMillimeter(value: number): Density {
        return new Density(value, DensityUnits.PoundsPerCubicMillimeter);
    }

    /**
     * Create a new Density instance from a SlugsPerCubicMeter
     *
     * @param value The unit as SlugsPerCubicMeter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromSlugsPerCubicMeter(value: number): Density {
        return new Density(value, DensityUnits.SlugsPerCubicMeter);
    }

    /**
     * Create a new Density instance from a SlugsPerCubicCentimeter
     *
     * @param value The unit as SlugsPerCubicCentimeter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromSlugsPerCubicCentimeter(value: number): Density {
        return new Density(value, DensityUnits.SlugsPerCubicCentimeter);
    }

    /**
     * Create a new Density instance from a SlugsPerCubicMillimeter
     *
     * @param value The unit as SlugsPerCubicMillimeter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromSlugsPerCubicMillimeter(value: number): Density {
        return new Density(value, DensityUnits.SlugsPerCubicMillimeter);
    }

    /**
     * Create a new Density instance from a SlugsPerCubicInch
     *
     * @param value The unit as SlugsPerCubicInch to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromSlugsPerCubicInch(value: number): Density {
        return new Density(value, DensityUnits.SlugsPerCubicInch);
    }

    /**
     * Create a new Density instance from a KilogramsPerCubicMillimeter
     *
     * @param value The unit as KilogramsPerCubicMillimeter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromKilogramsPerCubicMillimeter(value: number): Density {
        return new Density(value, DensityUnits.KilogramsPerCubicMillimeter);
    }

    /**
     * Create a new Density instance from a KilogramsPerCubicCentimeter
     *
     * @param value The unit as KilogramsPerCubicCentimeter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromKilogramsPerCubicCentimeter(value: number): Density {
        return new Density(value, DensityUnits.KilogramsPerCubicCentimeter);
    }

    /**
     * Create a new Density instance from a KilogramsPerCubicMeter
     *
     * @param value The unit as KilogramsPerCubicMeter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromKilogramsPerCubicMeter(value: number): Density {
        return new Density(value, DensityUnits.KilogramsPerCubicMeter);
    }

    /**
     * Create a new Density instance from a MilligramsPerCubicMeter
     *
     * @param value The unit as MilligramsPerCubicMeter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromMilligramsPerCubicMeter(value: number): Density {
        return new Density(value, DensityUnits.MilligramsPerCubicMeter);
    }

    /**
     * Create a new Density instance from a MicrogramsPerCubicMeter
     *
     * @param value The unit as MicrogramsPerCubicMeter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromMicrogramsPerCubicMeter(value: number): Density {
        return new Density(value, DensityUnits.MicrogramsPerCubicMeter);
    }

    /**
     * Create a new Density instance from a KilopoundsPerCubicInch
     *
     * @param value The unit as KilopoundsPerCubicInch to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromKilopoundsPerCubicInch(value: number): Density {
        return new Density(value, DensityUnits.KilopoundsPerCubicInch);
    }

    /**
     * Create a new Density instance from a KilopoundsPerCubicFoot
     *
     * @param value The unit as KilopoundsPerCubicFoot to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromKilopoundsPerCubicFoot(value: number): Density {
        return new Density(value, DensityUnits.KilopoundsPerCubicFoot);
    }

    /**
     * Create a new Density instance from a PicogramsPerLiter
     *
     * @param value The unit as PicogramsPerLiter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromPicogramsPerLiter(value: number): Density {
        return new Density(value, DensityUnits.PicogramsPerLiter);
    }

    /**
     * Create a new Density instance from a NanogramsPerLiter
     *
     * @param value The unit as NanogramsPerLiter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromNanogramsPerLiter(value: number): Density {
        return new Density(value, DensityUnits.NanogramsPerLiter);
    }

    /**
     * Create a new Density instance from a MicrogramsPerLiter
     *
     * @param value The unit as MicrogramsPerLiter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromMicrogramsPerLiter(value: number): Density {
        return new Density(value, DensityUnits.MicrogramsPerLiter);
    }

    /**
     * Create a new Density instance from a MilligramsPerLiter
     *
     * @param value The unit as MilligramsPerLiter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromMilligramsPerLiter(value: number): Density {
        return new Density(value, DensityUnits.MilligramsPerLiter);
    }

    /**
     * Create a new Density instance from a CentigramsPerLiter
     *
     * @param value The unit as CentigramsPerLiter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromCentigramsPerLiter(value: number): Density {
        return new Density(value, DensityUnits.CentigramsPerLiter);
    }

    /**
     * Create a new Density instance from a DecigramsPerLiter
     *
     * @param value The unit as DecigramsPerLiter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromDecigramsPerLiter(value: number): Density {
        return new Density(value, DensityUnits.DecigramsPerLiter);
    }

    /**
     * Create a new Density instance from a PicogramsPerDeciLiter
     *
     * @param value The unit as PicogramsPerDeciLiter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromPicogramsPerDeciLiter(value: number): Density {
        return new Density(value, DensityUnits.PicogramsPerDeciLiter);
    }

    /**
     * Create a new Density instance from a NanogramsPerDeciLiter
     *
     * @param value The unit as NanogramsPerDeciLiter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromNanogramsPerDeciLiter(value: number): Density {
        return new Density(value, DensityUnits.NanogramsPerDeciLiter);
    }

    /**
     * Create a new Density instance from a MicrogramsPerDeciLiter
     *
     * @param value The unit as MicrogramsPerDeciLiter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromMicrogramsPerDeciLiter(value: number): Density {
        return new Density(value, DensityUnits.MicrogramsPerDeciLiter);
    }

    /**
     * Create a new Density instance from a MilligramsPerDeciLiter
     *
     * @param value The unit as MilligramsPerDeciLiter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromMilligramsPerDeciLiter(value: number): Density {
        return new Density(value, DensityUnits.MilligramsPerDeciLiter);
    }

    /**
     * Create a new Density instance from a CentigramsPerDeciLiter
     *
     * @param value The unit as CentigramsPerDeciLiter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromCentigramsPerDeciLiter(value: number): Density {
        return new Density(value, DensityUnits.CentigramsPerDeciLiter);
    }

    /**
     * Create a new Density instance from a DecigramsPerDeciLiter
     *
     * @param value The unit as DecigramsPerDeciLiter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromDecigramsPerDeciLiter(value: number): Density {
        return new Density(value, DensityUnits.DecigramsPerDeciLiter);
    }

    /**
     * Create a new Density instance from a PicogramsPerMilliliter
     *
     * @param value The unit as PicogramsPerMilliliter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromPicogramsPerMilliliter(value: number): Density {
        return new Density(value, DensityUnits.PicogramsPerMilliliter);
    }

    /**
     * Create a new Density instance from a NanogramsPerMilliliter
     *
     * @param value The unit as NanogramsPerMilliliter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromNanogramsPerMilliliter(value: number): Density {
        return new Density(value, DensityUnits.NanogramsPerMilliliter);
    }

    /**
     * Create a new Density instance from a MicrogramsPerMilliliter
     *
     * @param value The unit as MicrogramsPerMilliliter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromMicrogramsPerMilliliter(value: number): Density {
        return new Density(value, DensityUnits.MicrogramsPerMilliliter);
    }

    /**
     * Create a new Density instance from a MilligramsPerMilliliter
     *
     * @param value The unit as MilligramsPerMilliliter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromMilligramsPerMilliliter(value: number): Density {
        return new Density(value, DensityUnits.MilligramsPerMilliliter);
    }

    /**
     * Create a new Density instance from a CentigramsPerMilliliter
     *
     * @param value The unit as CentigramsPerMilliliter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromCentigramsPerMilliliter(value: number): Density {
        return new Density(value, DensityUnits.CentigramsPerMilliliter);
    }

    /**
     * Create a new Density instance from a DecigramsPerMilliliter
     *
     * @param value The unit as DecigramsPerMilliliter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromDecigramsPerMilliliter(value: number): Density {
        return new Density(value, DensityUnits.DecigramsPerMilliliter);
    }

    private convertFromBase(toUnit: DensityUnits): number {
        switch (toUnit) {
                
            case DensityUnits.GramsPerCubicMillimeter:
            case DensityUnits.GramsPerCubicMillimeter:        
                return this.value * 1e-6;
            case DensityUnits.GramsPerCubicCentimeter:
            case DensityUnits.GramsPerCubicCentimeter:        
                return this.value * 1e-3;
            case DensityUnits.GramsPerCubicMeter:
            case DensityUnits.GramsPerCubicMeter:        
                return this.value * 1e3;
            case DensityUnits.PoundsPerCubicInch:
            case DensityUnits.PoundsPerCubicInch:        
                return this.value * 3.6127298147753e-5;
            case DensityUnits.PoundsPerCubicFoot:
            case DensityUnits.PoundsPerCubicFoot:        
                return this.value * 0.062427961;
            case DensityUnits.TonnesPerCubicMillimeter:
            case DensityUnits.TonnesPerCubicMillimeter:        
                return this.value * 1e-12;
            case DensityUnits.TonnesPerCubicCentimeter:
            case DensityUnits.TonnesPerCubicCentimeter:        
                return this.value * 1e-9;
            case DensityUnits.TonnesPerCubicMeter:
            case DensityUnits.TonnesPerCubicMeter:        
                return this.value * 0.001;
            case DensityUnits.SlugsPerCubicFoot:
            case DensityUnits.SlugsPerCubicFoot:        
                return this.value * 0.00194032033;
            case DensityUnits.GramsPerLiter:
            case DensityUnits.GramsPerLiter:        
                return this.value * 1;
            case DensityUnits.GramsPerDeciLiter:
            case DensityUnits.GramsPerDeciLiter:        
                return this.value * 1e-1;
            case DensityUnits.GramsPerMilliliter:
            case DensityUnits.GramsPerMilliliter:        
                return this.value * 1e-3;
            case DensityUnits.PoundsPerUSGallon:
            case DensityUnits.PoundsPerUSGallon:        
                return this.value / 1.19826427e2;
            case DensityUnits.PoundsPerImperialGallon:
            case DensityUnits.PoundsPerImperialGallon:        
                return this.value / 9.9776398e1;
            case DensityUnits.KilogramsPerLiter:
            case DensityUnits.KilogramsPerLiter:        
                return this.value / 1e3;
            case DensityUnits.TonnesPerCubicFoot:
            case DensityUnits.TonnesPerCubicFoot:        
                return this.value / 3.53146667214886e4;
            case DensityUnits.TonnesPerCubicInch:
            case DensityUnits.TonnesPerCubicInch:        
                return this.value / 6.10237440947323e7;
            case DensityUnits.GramsPerCubicFoot:
            case DensityUnits.GramsPerCubicFoot:        
                return this.value / 0.0353146667214886;
            case DensityUnits.GramsPerCubicInch:
            case DensityUnits.GramsPerCubicInch:        
                return this.value / 61.0237440947323;
            case DensityUnits.PoundsPerCubicMeter:
            case DensityUnits.PoundsPerCubicMeter:        
                return this.value * 2.204622621848775;
            case DensityUnits.PoundsPerCubicCentimeter:
            case DensityUnits.PoundsPerCubicCentimeter:        
                return this.value * 2.204622621848775e-6;
            case DensityUnits.PoundsPerCubicMillimeter:
            case DensityUnits.PoundsPerCubicMillimeter:        
                return this.value * 2.204622621848775e-9;
            case DensityUnits.SlugsPerCubicMeter:
            case DensityUnits.SlugsPerCubicMeter:        
                return this.value / 14.5939;
            case DensityUnits.SlugsPerCubicCentimeter:
            case DensityUnits.SlugsPerCubicCentimeter:        
                return this.value / 14593903;
            case DensityUnits.SlugsPerCubicMillimeter:
            case DensityUnits.SlugsPerCubicMillimeter:        
                return this.value / 14593903000;
            case DensityUnits.SlugsPerCubicInch:
            case DensityUnits.SlugsPerCubicInch:        
                return this.value / 890574.60201535;
            case DensityUnits.KilogramsPerCubicMillimeter:
            case DensityUnits.KilogramsPerCubicMillimeter:        
                return (this.value * 1e-6) / 1000;
            case DensityUnits.KilogramsPerCubicCentimeter:
            case DensityUnits.KilogramsPerCubicCentimeter:        
                return (this.value * 1e-3) / 1000;
            case DensityUnits.KilogramsPerCubicMeter:
            case DensityUnits.KilogramsPerCubicMeter:        
                return (this.value * 1e3) / 1000;
            case DensityUnits.MilligramsPerCubicMeter:
            case DensityUnits.MilligramsPerCubicMeter:        
                return (this.value * 1e3) / 0.001;
            case DensityUnits.MicrogramsPerCubicMeter:
            case DensityUnits.MicrogramsPerCubicMeter:        
                return (this.value * 1e3) / 0.000001;
            case DensityUnits.KilopoundsPerCubicInch:
            case DensityUnits.KilopoundsPerCubicInch:        
                return (this.value * 3.6127298147753e-5) / 1000;
            case DensityUnits.KilopoundsPerCubicFoot:
            case DensityUnits.KilopoundsPerCubicFoot:        
                return (this.value * 0.062427961) / 1000;
            case DensityUnits.PicogramsPerLiter:
            case DensityUnits.PicogramsPerLiter:        
                return (this.value * 1) / 1e-12;
            case DensityUnits.NanogramsPerLiter:
            case DensityUnits.NanogramsPerLiter:        
                return (this.value * 1) / 1e-9;
            case DensityUnits.MicrogramsPerLiter:
            case DensityUnits.MicrogramsPerLiter:        
                return (this.value * 1) / 0.000001;
            case DensityUnits.MilligramsPerLiter:
            case DensityUnits.MilligramsPerLiter:        
                return (this.value * 1) / 0.001;
            case DensityUnits.CentigramsPerLiter:
            case DensityUnits.CentigramsPerLiter:        
                return (this.value * 1) / 0.01;
            case DensityUnits.DecigramsPerLiter:
            case DensityUnits.DecigramsPerLiter:        
                return (this.value * 1) / 0.1;
            case DensityUnits.PicogramsPerDeciLiter:
            case DensityUnits.PicogramsPerDeciLiter:        
                return (this.value * 1e-1) / 1e-12;
            case DensityUnits.NanogramsPerDeciLiter:
            case DensityUnits.NanogramsPerDeciLiter:        
                return (this.value * 1e-1) / 1e-9;
            case DensityUnits.MicrogramsPerDeciLiter:
            case DensityUnits.MicrogramsPerDeciLiter:        
                return (this.value * 1e-1) / 0.000001;
            case DensityUnits.MilligramsPerDeciLiter:
            case DensityUnits.MilligramsPerDeciLiter:        
                return (this.value * 1e-1) / 0.001;
            case DensityUnits.CentigramsPerDeciLiter:
            case DensityUnits.CentigramsPerDeciLiter:        
                return (this.value * 1e-1) / 0.01;
            case DensityUnits.DecigramsPerDeciLiter:
            case DensityUnits.DecigramsPerDeciLiter:        
                return (this.value * 1e-1) / 0.1;
            case DensityUnits.PicogramsPerMilliliter:
            case DensityUnits.PicogramsPerMilliliter:        
                return (this.value * 1e-3) / 1e-12;
            case DensityUnits.NanogramsPerMilliliter:
            case DensityUnits.NanogramsPerMilliliter:        
                return (this.value * 1e-3) / 1e-9;
            case DensityUnits.MicrogramsPerMilliliter:
            case DensityUnits.MicrogramsPerMilliliter:        
                return (this.value * 1e-3) / 0.000001;
            case DensityUnits.MilligramsPerMilliliter:
            case DensityUnits.MilligramsPerMilliliter:        
                return (this.value * 1e-3) / 0.001;
            case DensityUnits.CentigramsPerMilliliter:
            case DensityUnits.CentigramsPerMilliliter:        
                return (this.value * 1e-3) / 0.01;
            case DensityUnits.DecigramsPerMilliliter:
            case DensityUnits.DecigramsPerMilliliter:        
                return (this.value * 1e-3) / 0.1;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: DensityUnits): number {
        switch (fromUnit) {
                
            case DensityUnits.GramsPerCubicMillimeter:
            case DensityUnits.GramsPerCubicMillimeter:        
                return value / 1e-6;
            case DensityUnits.GramsPerCubicCentimeter:
            case DensityUnits.GramsPerCubicCentimeter:        
                return value / 1e-3;
            case DensityUnits.GramsPerCubicMeter:
            case DensityUnits.GramsPerCubicMeter:        
                return value / 1e3;
            case DensityUnits.PoundsPerCubicInch:
            case DensityUnits.PoundsPerCubicInch:        
                return value / 3.6127298147753e-5;
            case DensityUnits.PoundsPerCubicFoot:
            case DensityUnits.PoundsPerCubicFoot:        
                return value / 0.062427961;
            case DensityUnits.TonnesPerCubicMillimeter:
            case DensityUnits.TonnesPerCubicMillimeter:        
                return value / 1e-12;
            case DensityUnits.TonnesPerCubicCentimeter:
            case DensityUnits.TonnesPerCubicCentimeter:        
                return value / 1e-9;
            case DensityUnits.TonnesPerCubicMeter:
            case DensityUnits.TonnesPerCubicMeter:        
                return value / 0.001;
            case DensityUnits.SlugsPerCubicFoot:
            case DensityUnits.SlugsPerCubicFoot:        
                return value * 515.378818;
            case DensityUnits.GramsPerLiter:
            case DensityUnits.GramsPerLiter:        
                return value / 1;
            case DensityUnits.GramsPerDeciLiter:
            case DensityUnits.GramsPerDeciLiter:        
                return value / 1e-1;
            case DensityUnits.GramsPerMilliliter:
            case DensityUnits.GramsPerMilliliter:        
                return value / 1e-3;
            case DensityUnits.PoundsPerUSGallon:
            case DensityUnits.PoundsPerUSGallon:        
                return value * 1.19826427e2;
            case DensityUnits.PoundsPerImperialGallon:
            case DensityUnits.PoundsPerImperialGallon:        
                return value * 9.9776398e1;
            case DensityUnits.KilogramsPerLiter:
            case DensityUnits.KilogramsPerLiter:        
                return value * 1e3;
            case DensityUnits.TonnesPerCubicFoot:
            case DensityUnits.TonnesPerCubicFoot:        
                return value * 3.53146667214886e4;
            case DensityUnits.TonnesPerCubicInch:
            case DensityUnits.TonnesPerCubicInch:        
                return value * 6.10237440947323e7;
            case DensityUnits.GramsPerCubicFoot:
            case DensityUnits.GramsPerCubicFoot:        
                return value * 0.0353146667214886;
            case DensityUnits.GramsPerCubicInch:
            case DensityUnits.GramsPerCubicInch:        
                return value * 61.0237440947323;
            case DensityUnits.PoundsPerCubicMeter:
            case DensityUnits.PoundsPerCubicMeter:        
                return value / 2.204622621848775;
            case DensityUnits.PoundsPerCubicCentimeter:
            case DensityUnits.PoundsPerCubicCentimeter:        
                return value / 2.204622621848775e-6;
            case DensityUnits.PoundsPerCubicMillimeter:
            case DensityUnits.PoundsPerCubicMillimeter:        
                return value / 2.204622621848775e-9;
            case DensityUnits.SlugsPerCubicMeter:
            case DensityUnits.SlugsPerCubicMeter:        
                return value * 14.5939;
            case DensityUnits.SlugsPerCubicCentimeter:
            case DensityUnits.SlugsPerCubicCentimeter:        
                return value * 14593903;
            case DensityUnits.SlugsPerCubicMillimeter:
            case DensityUnits.SlugsPerCubicMillimeter:        
                return value * 14593903000;
            case DensityUnits.SlugsPerCubicInch:
            case DensityUnits.SlugsPerCubicInch:        
                return value * 890574.60201535;
            case DensityUnits.KilogramsPerCubicMillimeter:
            case DensityUnits.KilogramsPerCubicMillimeter:        
                return (value / 1e-6) * 1000;
            case DensityUnits.KilogramsPerCubicCentimeter:
            case DensityUnits.KilogramsPerCubicCentimeter:        
                return (value / 1e-3) * 1000;
            case DensityUnits.KilogramsPerCubicMeter:
            case DensityUnits.KilogramsPerCubicMeter:        
                return (value / 1e3) * 1000;
            case DensityUnits.MilligramsPerCubicMeter:
            case DensityUnits.MilligramsPerCubicMeter:        
                return (value / 1e3) * 0.001;
            case DensityUnits.MicrogramsPerCubicMeter:
            case DensityUnits.MicrogramsPerCubicMeter:        
                return (value / 1e3) * 0.000001;
            case DensityUnits.KilopoundsPerCubicInch:
            case DensityUnits.KilopoundsPerCubicInch:        
                return (value / 3.6127298147753e-5) * 1000;
            case DensityUnits.KilopoundsPerCubicFoot:
            case DensityUnits.KilopoundsPerCubicFoot:        
                return (value / 0.062427961) * 1000;
            case DensityUnits.PicogramsPerLiter:
            case DensityUnits.PicogramsPerLiter:        
                return (value / 1) * 1e-12;
            case DensityUnits.NanogramsPerLiter:
            case DensityUnits.NanogramsPerLiter:        
                return (value / 1) * 1e-9;
            case DensityUnits.MicrogramsPerLiter:
            case DensityUnits.MicrogramsPerLiter:        
                return (value / 1) * 0.000001;
            case DensityUnits.MilligramsPerLiter:
            case DensityUnits.MilligramsPerLiter:        
                return (value / 1) * 0.001;
            case DensityUnits.CentigramsPerLiter:
            case DensityUnits.CentigramsPerLiter:        
                return (value / 1) * 0.01;
            case DensityUnits.DecigramsPerLiter:
            case DensityUnits.DecigramsPerLiter:        
                return (value / 1) * 0.1;
            case DensityUnits.PicogramsPerDeciLiter:
            case DensityUnits.PicogramsPerDeciLiter:        
                return (value / 1e-1) * 1e-12;
            case DensityUnits.NanogramsPerDeciLiter:
            case DensityUnits.NanogramsPerDeciLiter:        
                return (value / 1e-1) * 1e-9;
            case DensityUnits.MicrogramsPerDeciLiter:
            case DensityUnits.MicrogramsPerDeciLiter:        
                return (value / 1e-1) * 0.000001;
            case DensityUnits.MilligramsPerDeciLiter:
            case DensityUnits.MilligramsPerDeciLiter:        
                return (value / 1e-1) * 0.001;
            case DensityUnits.CentigramsPerDeciLiter:
            case DensityUnits.CentigramsPerDeciLiter:        
                return (value / 1e-1) * 0.01;
            case DensityUnits.DecigramsPerDeciLiter:
            case DensityUnits.DecigramsPerDeciLiter:        
                return (value / 1e-1) * 0.1;
            case DensityUnits.PicogramsPerMilliliter:
            case DensityUnits.PicogramsPerMilliliter:        
                return (value / 1e-3) * 1e-12;
            case DensityUnits.NanogramsPerMilliliter:
            case DensityUnits.NanogramsPerMilliliter:        
                return (value / 1e-3) * 1e-9;
            case DensityUnits.MicrogramsPerMilliliter:
            case DensityUnits.MicrogramsPerMilliliter:        
                return (value / 1e-3) * 0.000001;
            case DensityUnits.MilligramsPerMilliliter:
            case DensityUnits.MilligramsPerMilliliter:        
                return (value / 1e-3) * 0.001;
            case DensityUnits.CentigramsPerMilliliter:
            case DensityUnits.CentigramsPerMilliliter:        
                return (value / 1e-3) * 0.01;
            case DensityUnits.DecigramsPerMilliliter:
            case DensityUnits.DecigramsPerMilliliter:        
                return (value / 1e-3) * 0.1;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the Density to string.
     * Note! the default format for Density is KilogramsPerCubicMeter.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the Density.
     * @returns The string format of the Density.
     */
    public toString(unit: DensityUnits = DensityUnits.KilogramsPerCubicMeter): string {

        switch (unit) {
            
            case DensityUnits.GramsPerCubicMillimeter:
                return this.GramsPerCubicMillimeter + ` g/mm³`;
            case DensityUnits.GramsPerCubicCentimeter:
                return this.GramsPerCubicCentimeter + ` g/cm³`;
            case DensityUnits.GramsPerCubicMeter:
                return this.GramsPerCubicMeter + ` g/m³`;
            case DensityUnits.PoundsPerCubicInch:
                return this.PoundsPerCubicInch + ` lb/in³`;
            case DensityUnits.PoundsPerCubicFoot:
                return this.PoundsPerCubicFoot + ` lb/ft³`;
            case DensityUnits.TonnesPerCubicMillimeter:
                return this.TonnesPerCubicMillimeter + ` t/mm³`;
            case DensityUnits.TonnesPerCubicCentimeter:
                return this.TonnesPerCubicCentimeter + ` t/cm³`;
            case DensityUnits.TonnesPerCubicMeter:
                return this.TonnesPerCubicMeter + ` t/m³`;
            case DensityUnits.SlugsPerCubicFoot:
                return this.SlugsPerCubicFoot + ` slug/ft³`;
            case DensityUnits.GramsPerLiter:
                return this.GramsPerLiter + ` g/L`;
            case DensityUnits.GramsPerDeciLiter:
                return this.GramsPerDeciLiter + ` g/dl`;
            case DensityUnits.GramsPerMilliliter:
                return this.GramsPerMilliliter + ` g/ml`;
            case DensityUnits.PoundsPerUSGallon:
                return this.PoundsPerUSGallon + ` ppg (U.S.)`;
            case DensityUnits.PoundsPerImperialGallon:
                return this.PoundsPerImperialGallon + ` ppg (imp.)`;
            case DensityUnits.KilogramsPerLiter:
                return this.KilogramsPerLiter + ` kg/l`;
            case DensityUnits.TonnesPerCubicFoot:
                return this.TonnesPerCubicFoot + ` t/ft³`;
            case DensityUnits.TonnesPerCubicInch:
                return this.TonnesPerCubicInch + ` t/in³`;
            case DensityUnits.GramsPerCubicFoot:
                return this.GramsPerCubicFoot + ` g/ft³`;
            case DensityUnits.GramsPerCubicInch:
                return this.GramsPerCubicInch + ` g/in³`;
            case DensityUnits.PoundsPerCubicMeter:
                return this.PoundsPerCubicMeter + ` lb/m³`;
            case DensityUnits.PoundsPerCubicCentimeter:
                return this.PoundsPerCubicCentimeter + ` lb/cm³`;
            case DensityUnits.PoundsPerCubicMillimeter:
                return this.PoundsPerCubicMillimeter + ` lb/mm³`;
            case DensityUnits.SlugsPerCubicMeter:
                return this.SlugsPerCubicMeter + ` slug/m³`;
            case DensityUnits.SlugsPerCubicCentimeter:
                return this.SlugsPerCubicCentimeter + ` slug/cm³`;
            case DensityUnits.SlugsPerCubicMillimeter:
                return this.SlugsPerCubicMillimeter + ` slug/mm³`;
            case DensityUnits.SlugsPerCubicInch:
                return this.SlugsPerCubicInch + ` slug/in³`;
            case DensityUnits.KilogramsPerCubicMillimeter:
                return this.KilogramsPerCubicMillimeter + ` `;
            case DensityUnits.KilogramsPerCubicCentimeter:
                return this.KilogramsPerCubicCentimeter + ` `;
            case DensityUnits.KilogramsPerCubicMeter:
                return this.KilogramsPerCubicMeter + ` `;
            case DensityUnits.MilligramsPerCubicMeter:
                return this.MilligramsPerCubicMeter + ` `;
            case DensityUnits.MicrogramsPerCubicMeter:
                return this.MicrogramsPerCubicMeter + ` `;
            case DensityUnits.KilopoundsPerCubicInch:
                return this.KilopoundsPerCubicInch + ` `;
            case DensityUnits.KilopoundsPerCubicFoot:
                return this.KilopoundsPerCubicFoot + ` `;
            case DensityUnits.PicogramsPerLiter:
                return this.PicogramsPerLiter + ` `;
            case DensityUnits.NanogramsPerLiter:
                return this.NanogramsPerLiter + ` `;
            case DensityUnits.MicrogramsPerLiter:
                return this.MicrogramsPerLiter + ` `;
            case DensityUnits.MilligramsPerLiter:
                return this.MilligramsPerLiter + ` `;
            case DensityUnits.CentigramsPerLiter:
                return this.CentigramsPerLiter + ` `;
            case DensityUnits.DecigramsPerLiter:
                return this.DecigramsPerLiter + ` `;
            case DensityUnits.PicogramsPerDeciLiter:
                return this.PicogramsPerDeciLiter + ` `;
            case DensityUnits.NanogramsPerDeciLiter:
                return this.NanogramsPerDeciLiter + ` `;
            case DensityUnits.MicrogramsPerDeciLiter:
                return this.MicrogramsPerDeciLiter + ` `;
            case DensityUnits.MilligramsPerDeciLiter:
                return this.MilligramsPerDeciLiter + ` `;
            case DensityUnits.CentigramsPerDeciLiter:
                return this.CentigramsPerDeciLiter + ` `;
            case DensityUnits.DecigramsPerDeciLiter:
                return this.DecigramsPerDeciLiter + ` `;
            case DensityUnits.PicogramsPerMilliliter:
                return this.PicogramsPerMilliliter + ` `;
            case DensityUnits.NanogramsPerMilliliter:
                return this.NanogramsPerMilliliter + ` `;
            case DensityUnits.MicrogramsPerMilliliter:
                return this.MicrogramsPerMilliliter + ` `;
            case DensityUnits.MilligramsPerMilliliter:
                return this.MilligramsPerMilliliter + ` `;
            case DensityUnits.CentigramsPerMilliliter:
                return this.CentigramsPerMilliliter + ` `;
            case DensityUnits.DecigramsPerMilliliter:
                return this.DecigramsPerMilliliter + ` `;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get Density unit abbreviation.
     * Note! the default abbreviation for Density is KilogramsPerCubicMeter.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the Density.
     * @returns The abbreviation string of Density.
     */
    public getUnitAbbreviation(unitAbbreviation: DensityUnits = DensityUnits.KilogramsPerCubicMeter): string {

        switch (unitAbbreviation) {
            
            case DensityUnits.GramsPerCubicMillimeter:
                return `g/mm³`;
            case DensityUnits.GramsPerCubicCentimeter:
                return `g/cm³`;
            case DensityUnits.GramsPerCubicMeter:
                return `g/m³`;
            case DensityUnits.PoundsPerCubicInch:
                return `lb/in³`;
            case DensityUnits.PoundsPerCubicFoot:
                return `lb/ft³`;
            case DensityUnits.TonnesPerCubicMillimeter:
                return `t/mm³`;
            case DensityUnits.TonnesPerCubicCentimeter:
                return `t/cm³`;
            case DensityUnits.TonnesPerCubicMeter:
                return `t/m³`;
            case DensityUnits.SlugsPerCubicFoot:
                return `slug/ft³`;
            case DensityUnits.GramsPerLiter:
                return `g/L`;
            case DensityUnits.GramsPerDeciLiter:
                return `g/dl`;
            case DensityUnits.GramsPerMilliliter:
                return `g/ml`;
            case DensityUnits.PoundsPerUSGallon:
                return `ppg (U.S.)`;
            case DensityUnits.PoundsPerImperialGallon:
                return `ppg (imp.)`;
            case DensityUnits.KilogramsPerLiter:
                return `kg/l`;
            case DensityUnits.TonnesPerCubicFoot:
                return `t/ft³`;
            case DensityUnits.TonnesPerCubicInch:
                return `t/in³`;
            case DensityUnits.GramsPerCubicFoot:
                return `g/ft³`;
            case DensityUnits.GramsPerCubicInch:
                return `g/in³`;
            case DensityUnits.PoundsPerCubicMeter:
                return `lb/m³`;
            case DensityUnits.PoundsPerCubicCentimeter:
                return `lb/cm³`;
            case DensityUnits.PoundsPerCubicMillimeter:
                return `lb/mm³`;
            case DensityUnits.SlugsPerCubicMeter:
                return `slug/m³`;
            case DensityUnits.SlugsPerCubicCentimeter:
                return `slug/cm³`;
            case DensityUnits.SlugsPerCubicMillimeter:
                return `slug/mm³`;
            case DensityUnits.SlugsPerCubicInch:
                return `slug/in³`;
            case DensityUnits.KilogramsPerCubicMillimeter:
                return ``;
            case DensityUnits.KilogramsPerCubicCentimeter:
                return ``;
            case DensityUnits.KilogramsPerCubicMeter:
                return ``;
            case DensityUnits.MilligramsPerCubicMeter:
                return ``;
            case DensityUnits.MicrogramsPerCubicMeter:
                return ``;
            case DensityUnits.KilopoundsPerCubicInch:
                return ``;
            case DensityUnits.KilopoundsPerCubicFoot:
                return ``;
            case DensityUnits.PicogramsPerLiter:
                return ``;
            case DensityUnits.NanogramsPerLiter:
                return ``;
            case DensityUnits.MicrogramsPerLiter:
                return ``;
            case DensityUnits.MilligramsPerLiter:
                return ``;
            case DensityUnits.CentigramsPerLiter:
                return ``;
            case DensityUnits.DecigramsPerLiter:
                return ``;
            case DensityUnits.PicogramsPerDeciLiter:
                return ``;
            case DensityUnits.NanogramsPerDeciLiter:
                return ``;
            case DensityUnits.MicrogramsPerDeciLiter:
                return ``;
            case DensityUnits.MilligramsPerDeciLiter:
                return ``;
            case DensityUnits.CentigramsPerDeciLiter:
                return ``;
            case DensityUnits.DecigramsPerDeciLiter:
                return ``;
            case DensityUnits.PicogramsPerMilliliter:
                return ``;
            case DensityUnits.NanogramsPerMilliliter:
                return ``;
            case DensityUnits.MicrogramsPerMilliliter:
                return ``;
            case DensityUnits.MilligramsPerMilliliter:
                return ``;
            case DensityUnits.CentigramsPerMilliliter:
                return ``;
            case DensityUnits.DecigramsPerMilliliter:
                return ``;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given Density are equals to the current Density.
     * @param density The other Density.
     * @returns True if the given Density are equal to the current Density.
     */
    public equals(density: Density): boolean {
        return this.value === density.BaseValue;
    }

    /**
     * Compare the given Density against the current Density.
     * @param density The other Density.
     * @returns 0 if they are equal, -1 if the current Density is less then other, 1 if the current Density is greater then other.
     */
    public compareTo(density: Density): number {

        if (this.value > density.BaseValue)
            return 1;
        if (this.value < density.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given Density with the current Density.
     * @param density The other Density.
     * @returns A new Density instance with the results.
     */
    public add(density: Density): Density {
        return new Density(this.value + density.BaseValue)
    }

    /**
     * Subtract the given Density with the current Density.
     * @param density The other Density.
     * @returns A new Density instance with the results.
     */
    public subtract(density: Density): Density {
        return new Density(this.value - density.BaseValue)
    }

    /**
     * Multiply the given Density with the current Density.
     * @param density The other Density.
     * @returns A new Density instance with the results.
     */
    public multiply(density: Density): Density {
        return new Density(this.value * density.BaseValue)
    }

    /**
     * Divide the given Density with the current Density.
     * @param density The other Density.
     * @returns A new Density instance with the results.
     */
    public divide(density: Density): Density {
        return new Density(this.value / density.BaseValue)
    }

    /**
     * Modulo the given Density with the current Density.
     * @param density The other Density.
     * @returns A new Density instance with the results.
     */
    public modulo(density: Density): Density {
        return new Density(this.value % density.BaseValue)
    }

    /**
     * Pow the given Density with the current Density.
     * @param density The other Density.
     * @returns A new Density instance with the results.
     */
    public pow(density: Density): Density {
        return new Density(this.value ** density.BaseValue)
    }
}
