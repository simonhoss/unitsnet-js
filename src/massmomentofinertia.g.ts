/** MassMomentOfInertiaUnits enumeration */
export enum MassMomentOfInertiaUnits {
    /** */
    GramSquareMeters,
    /** */
    GramSquareDecimeters,
    /** */
    GramSquareCentimeters,
    /** */
    GramSquareMillimeters,
    /** */
    TonneSquareMeters,
    /** */
    TonneSquareDecimeters,
    /** */
    TonneSquareCentimeters,
    /** */
    TonneSquareMilimeters,
    /** */
    PoundSquareFeet,
    /** */
    PoundSquareInches,
    /** */
    SlugSquareFeet,
    /** */
    SlugSquareInches,
    /** */
    MilligramSquareMeters,
    /** */
    KilogramSquareMeters,
    /** */
    MilligramSquareDecimeters,
    /** */
    KilogramSquareDecimeters,
    /** */
    MilligramSquareCentimeters,
    /** */
    KilogramSquareCentimeters,
    /** */
    MilligramSquareMillimeters,
    /** */
    KilogramSquareMillimeters,
    /** */
    KilotonneSquareMeters,
    /** */
    MegatonneSquareMeters,
    /** */
    KilotonneSquareDecimeters,
    /** */
    MegatonneSquareDecimeters,
    /** */
    KilotonneSquareCentimeters,
    /** */
    MegatonneSquareCentimeters,
    /** */
    KilotonneSquareMilimeters,
    /** */
    MegatonneSquareMilimeters,
    /** */
    GramSquareMeter,
    /** */
    GramSquareDecimeter,
    /** */
    GramSquareCentimeter,
    /** */
    GramSquareMillimeter,
    /** */
    TonneSquareMeter,
    /** */
    TonneSquareDecimeter,
    /** */
    TonneSquareCentimeter,
    /** */
    TonneSquareMilimeter,
    /** */
    PoundSquareFoot,
    /** */
    PoundSquareInch,
    /** */
    SlugSquareFoot,
    /** */
    SlugSquareInch,
    /** */
    MilligramSquareMeter,
    /** */
    KilogramSquareMeter,
    /** */
    MilligramSquareDecimeter,
    /** */
    KilogramSquareDecimeter,
    /** */
    MilligramSquareCentimeter,
    /** */
    KilogramSquareCentimeter,
    /** */
    MilligramSquareMillimeter,
    /** */
    KilogramSquareMillimeter,
    /** */
    KilotonneSquareMeter,
    /** */
    MegatonneSquareMeter,
    /** */
    KilotonneSquareDecimeter,
    /** */
    MegatonneSquareDecimeter,
    /** */
    KilotonneSquareCentimeter,
    /** */
    MegatonneSquareCentimeter,
    /** */
    KilotonneSquareMilimeter,
    /** */
    MegatonneSquareMilimeter
}

/** A property of body reflects how its mass is distributed with regard to an axis. */
export class MassMomentOfInertia {
    private value: number;
    private gramsquaremetersLazy: number | null = null;
    private gramsquaredecimetersLazy: number | null = null;
    private gramsquarecentimetersLazy: number | null = null;
    private gramsquaremillimetersLazy: number | null = null;
    private tonnesquaremetersLazy: number | null = null;
    private tonnesquaredecimetersLazy: number | null = null;
    private tonnesquarecentimetersLazy: number | null = null;
    private tonnesquaremilimetersLazy: number | null = null;
    private poundsquarefeetLazy: number | null = null;
    private poundsquareinchesLazy: number | null = null;
    private slugsquarefeetLazy: number | null = null;
    private slugsquareinchesLazy: number | null = null;
    private milligramsquaremetersLazy: number | null = null;
    private kilogramsquaremetersLazy: number | null = null;
    private milligramsquaredecimetersLazy: number | null = null;
    private kilogramsquaredecimetersLazy: number | null = null;
    private milligramsquarecentimetersLazy: number | null = null;
    private kilogramsquarecentimetersLazy: number | null = null;
    private milligramsquaremillimetersLazy: number | null = null;
    private kilogramsquaremillimetersLazy: number | null = null;
    private kilotonnesquaremetersLazy: number | null = null;
    private megatonnesquaremetersLazy: number | null = null;
    private kilotonnesquaredecimetersLazy: number | null = null;
    private megatonnesquaredecimetersLazy: number | null = null;
    private kilotonnesquarecentimetersLazy: number | null = null;
    private megatonnesquarecentimetersLazy: number | null = null;
    private kilotonnesquaremilimetersLazy: number | null = null;
    private megatonnesquaremilimetersLazy: number | null = null;

    /**
     * Create a new MassMomentOfInertia.
     * @param value The value.
     * @param fromUnit The ‘MassMomentOfInertia’ unit to create from.
     * The default unit is KilogramSquareMeters
     */
    public constructor(value: number, fromUnit: MassMomentOfInertiaUnits = MassMomentOfInertiaUnits.KilogramSquareMeters) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of MassMomentOfInertia is KilogramSquareMeters.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get GramSquareMeters(): number {
        if(this.gramsquaremetersLazy !== null){
            return this.gramsquaremetersLazy;
        }
        return this.gramsquaremetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.GramSquareMeters);
    }

    /** */
    public get GramSquareDecimeters(): number {
        if(this.gramsquaredecimetersLazy !== null){
            return this.gramsquaredecimetersLazy;
        }
        return this.gramsquaredecimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.GramSquareDecimeters);
    }

    /** */
    public get GramSquareCentimeters(): number {
        if(this.gramsquarecentimetersLazy !== null){
            return this.gramsquarecentimetersLazy;
        }
        return this.gramsquarecentimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.GramSquareCentimeters);
    }

    /** */
    public get GramSquareMillimeters(): number {
        if(this.gramsquaremillimetersLazy !== null){
            return this.gramsquaremillimetersLazy;
        }
        return this.gramsquaremillimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.GramSquareMillimeters);
    }

    /** */
    public get TonneSquareMeters(): number {
        if(this.tonnesquaremetersLazy !== null){
            return this.tonnesquaremetersLazy;
        }
        return this.tonnesquaremetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.TonneSquareMeters);
    }

    /** */
    public get TonneSquareDecimeters(): number {
        if(this.tonnesquaredecimetersLazy !== null){
            return this.tonnesquaredecimetersLazy;
        }
        return this.tonnesquaredecimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.TonneSquareDecimeters);
    }

    /** */
    public get TonneSquareCentimeters(): number {
        if(this.tonnesquarecentimetersLazy !== null){
            return this.tonnesquarecentimetersLazy;
        }
        return this.tonnesquarecentimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.TonneSquareCentimeters);
    }

    /** */
    public get TonneSquareMilimeters(): number {
        if(this.tonnesquaremilimetersLazy !== null){
            return this.tonnesquaremilimetersLazy;
        }
        return this.tonnesquaremilimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.TonneSquareMilimeters);
    }

    /** */
    public get PoundSquareFeet(): number {
        if(this.poundsquarefeetLazy !== null){
            return this.poundsquarefeetLazy;
        }
        return this.poundsquarefeetLazy = this.convertFromBase(MassMomentOfInertiaUnits.PoundSquareFeet);
    }

    /** */
    public get PoundSquareInches(): number {
        if(this.poundsquareinchesLazy !== null){
            return this.poundsquareinchesLazy;
        }
        return this.poundsquareinchesLazy = this.convertFromBase(MassMomentOfInertiaUnits.PoundSquareInches);
    }

    /** */
    public get SlugSquareFeet(): number {
        if(this.slugsquarefeetLazy !== null){
            return this.slugsquarefeetLazy;
        }
        return this.slugsquarefeetLazy = this.convertFromBase(MassMomentOfInertiaUnits.SlugSquareFeet);
    }

    /** */
    public get SlugSquareInches(): number {
        if(this.slugsquareinchesLazy !== null){
            return this.slugsquareinchesLazy;
        }
        return this.slugsquareinchesLazy = this.convertFromBase(MassMomentOfInertiaUnits.SlugSquareInches);
    }

    /** */
    public get MilligramSquareMeters(): number {
        if(this.milligramsquaremetersLazy !== null){
            return this.milligramsquaremetersLazy;
        }
        return this.milligramsquaremetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.MilligramSquareMeters);
    }

    /** */
    public get KilogramSquareMeters(): number {
        if(this.kilogramsquaremetersLazy !== null){
            return this.kilogramsquaremetersLazy;
        }
        return this.kilogramsquaremetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.KilogramSquareMeters);
    }

    /** */
    public get MilligramSquareDecimeters(): number {
        if(this.milligramsquaredecimetersLazy !== null){
            return this.milligramsquaredecimetersLazy;
        }
        return this.milligramsquaredecimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.MilligramSquareDecimeters);
    }

    /** */
    public get KilogramSquareDecimeters(): number {
        if(this.kilogramsquaredecimetersLazy !== null){
            return this.kilogramsquaredecimetersLazy;
        }
        return this.kilogramsquaredecimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.KilogramSquareDecimeters);
    }

    /** */
    public get MilligramSquareCentimeters(): number {
        if(this.milligramsquarecentimetersLazy !== null){
            return this.milligramsquarecentimetersLazy;
        }
        return this.milligramsquarecentimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.MilligramSquareCentimeters);
    }

    /** */
    public get KilogramSquareCentimeters(): number {
        if(this.kilogramsquarecentimetersLazy !== null){
            return this.kilogramsquarecentimetersLazy;
        }
        return this.kilogramsquarecentimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.KilogramSquareCentimeters);
    }

    /** */
    public get MilligramSquareMillimeters(): number {
        if(this.milligramsquaremillimetersLazy !== null){
            return this.milligramsquaremillimetersLazy;
        }
        return this.milligramsquaremillimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.MilligramSquareMillimeters);
    }

    /** */
    public get KilogramSquareMillimeters(): number {
        if(this.kilogramsquaremillimetersLazy !== null){
            return this.kilogramsquaremillimetersLazy;
        }
        return this.kilogramsquaremillimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.KilogramSquareMillimeters);
    }

    /** */
    public get KilotonneSquareMeters(): number {
        if(this.kilotonnesquaremetersLazy !== null){
            return this.kilotonnesquaremetersLazy;
        }
        return this.kilotonnesquaremetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.KilotonneSquareMeters);
    }

    /** */
    public get MegatonneSquareMeters(): number {
        if(this.megatonnesquaremetersLazy !== null){
            return this.megatonnesquaremetersLazy;
        }
        return this.megatonnesquaremetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.MegatonneSquareMeters);
    }

    /** */
    public get KilotonneSquareDecimeters(): number {
        if(this.kilotonnesquaredecimetersLazy !== null){
            return this.kilotonnesquaredecimetersLazy;
        }
        return this.kilotonnesquaredecimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.KilotonneSquareDecimeters);
    }

    /** */
    public get MegatonneSquareDecimeters(): number {
        if(this.megatonnesquaredecimetersLazy !== null){
            return this.megatonnesquaredecimetersLazy;
        }
        return this.megatonnesquaredecimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.MegatonneSquareDecimeters);
    }

    /** */
    public get KilotonneSquareCentimeters(): number {
        if(this.kilotonnesquarecentimetersLazy !== null){
            return this.kilotonnesquarecentimetersLazy;
        }
        return this.kilotonnesquarecentimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.KilotonneSquareCentimeters);
    }

    /** */
    public get MegatonneSquareCentimeters(): number {
        if(this.megatonnesquarecentimetersLazy !== null){
            return this.megatonnesquarecentimetersLazy;
        }
        return this.megatonnesquarecentimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.MegatonneSquareCentimeters);
    }

    /** */
    public get KilotonneSquareMilimeters(): number {
        if(this.kilotonnesquaremilimetersLazy !== null){
            return this.kilotonnesquaremilimetersLazy;
        }
        return this.kilotonnesquaremilimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.KilotonneSquareMilimeters);
    }

    /** */
    public get MegatonneSquareMilimeters(): number {
        if(this.megatonnesquaremilimetersLazy !== null){
            return this.megatonnesquaremilimetersLazy;
        }
        return this.megatonnesquaremilimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.MegatonneSquareMilimeters);
    }

    /**
     * Create a new MassMomentOfInertia instance from a GramSquareMeters
     *
     * @param value The unit as GramSquareMeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    public static FromGramSquareMeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.GramSquareMeters);
    }

    /**
     * Create a new MassMomentOfInertia instance from a GramSquareDecimeters
     *
     * @param value The unit as GramSquareDecimeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    public static FromGramSquareDecimeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.GramSquareDecimeters);
    }

    /**
     * Create a new MassMomentOfInertia instance from a GramSquareCentimeters
     *
     * @param value The unit as GramSquareCentimeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    public static FromGramSquareCentimeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.GramSquareCentimeters);
    }

    /**
     * Create a new MassMomentOfInertia instance from a GramSquareMillimeters
     *
     * @param value The unit as GramSquareMillimeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    public static FromGramSquareMillimeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.GramSquareMillimeters);
    }

    /**
     * Create a new MassMomentOfInertia instance from a TonneSquareMeters
     *
     * @param value The unit as TonneSquareMeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    public static FromTonneSquareMeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.TonneSquareMeters);
    }

    /**
     * Create a new MassMomentOfInertia instance from a TonneSquareDecimeters
     *
     * @param value The unit as TonneSquareDecimeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    public static FromTonneSquareDecimeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.TonneSquareDecimeters);
    }

    /**
     * Create a new MassMomentOfInertia instance from a TonneSquareCentimeters
     *
     * @param value The unit as TonneSquareCentimeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    public static FromTonneSquareCentimeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.TonneSquareCentimeters);
    }

    /**
     * Create a new MassMomentOfInertia instance from a TonneSquareMilimeters
     *
     * @param value The unit as TonneSquareMilimeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    public static FromTonneSquareMilimeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.TonneSquareMilimeters);
    }

    /**
     * Create a new MassMomentOfInertia instance from a PoundSquareFeet
     *
     * @param value The unit as PoundSquareFeet to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    public static FromPoundSquareFeet(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.PoundSquareFeet);
    }

    /**
     * Create a new MassMomentOfInertia instance from a PoundSquareInches
     *
     * @param value The unit as PoundSquareInches to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    public static FromPoundSquareInches(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.PoundSquareInches);
    }

    /**
     * Create a new MassMomentOfInertia instance from a SlugSquareFeet
     *
     * @param value The unit as SlugSquareFeet to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    public static FromSlugSquareFeet(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.SlugSquareFeet);
    }

    /**
     * Create a new MassMomentOfInertia instance from a SlugSquareInches
     *
     * @param value The unit as SlugSquareInches to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    public static FromSlugSquareInches(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.SlugSquareInches);
    }

    /**
     * Create a new MassMomentOfInertia instance from a MilligramSquareMeters
     *
     * @param value The unit as MilligramSquareMeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    public static FromMilligramSquareMeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.MilligramSquareMeters);
    }

    /**
     * Create a new MassMomentOfInertia instance from a KilogramSquareMeters
     *
     * @param value The unit as KilogramSquareMeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    public static FromKilogramSquareMeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.KilogramSquareMeters);
    }

    /**
     * Create a new MassMomentOfInertia instance from a MilligramSquareDecimeters
     *
     * @param value The unit as MilligramSquareDecimeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    public static FromMilligramSquareDecimeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.MilligramSquareDecimeters);
    }

    /**
     * Create a new MassMomentOfInertia instance from a KilogramSquareDecimeters
     *
     * @param value The unit as KilogramSquareDecimeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    public static FromKilogramSquareDecimeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.KilogramSquareDecimeters);
    }

    /**
     * Create a new MassMomentOfInertia instance from a MilligramSquareCentimeters
     *
     * @param value The unit as MilligramSquareCentimeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    public static FromMilligramSquareCentimeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.MilligramSquareCentimeters);
    }

    /**
     * Create a new MassMomentOfInertia instance from a KilogramSquareCentimeters
     *
     * @param value The unit as KilogramSquareCentimeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    public static FromKilogramSquareCentimeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.KilogramSquareCentimeters);
    }

    /**
     * Create a new MassMomentOfInertia instance from a MilligramSquareMillimeters
     *
     * @param value The unit as MilligramSquareMillimeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    public static FromMilligramSquareMillimeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.MilligramSquareMillimeters);
    }

    /**
     * Create a new MassMomentOfInertia instance from a KilogramSquareMillimeters
     *
     * @param value The unit as KilogramSquareMillimeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    public static FromKilogramSquareMillimeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.KilogramSquareMillimeters);
    }

    /**
     * Create a new MassMomentOfInertia instance from a KilotonneSquareMeters
     *
     * @param value The unit as KilotonneSquareMeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    public static FromKilotonneSquareMeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.KilotonneSquareMeters);
    }

    /**
     * Create a new MassMomentOfInertia instance from a MegatonneSquareMeters
     *
     * @param value The unit as MegatonneSquareMeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    public static FromMegatonneSquareMeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.MegatonneSquareMeters);
    }

    /**
     * Create a new MassMomentOfInertia instance from a KilotonneSquareDecimeters
     *
     * @param value The unit as KilotonneSquareDecimeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    public static FromKilotonneSquareDecimeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.KilotonneSquareDecimeters);
    }

    /**
     * Create a new MassMomentOfInertia instance from a MegatonneSquareDecimeters
     *
     * @param value The unit as MegatonneSquareDecimeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    public static FromMegatonneSquareDecimeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.MegatonneSquareDecimeters);
    }

    /**
     * Create a new MassMomentOfInertia instance from a KilotonneSquareCentimeters
     *
     * @param value The unit as KilotonneSquareCentimeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    public static FromKilotonneSquareCentimeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.KilotonneSquareCentimeters);
    }

    /**
     * Create a new MassMomentOfInertia instance from a MegatonneSquareCentimeters
     *
     * @param value The unit as MegatonneSquareCentimeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    public static FromMegatonneSquareCentimeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.MegatonneSquareCentimeters);
    }

    /**
     * Create a new MassMomentOfInertia instance from a KilotonneSquareMilimeters
     *
     * @param value The unit as KilotonneSquareMilimeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    public static FromKilotonneSquareMilimeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.KilotonneSquareMilimeters);
    }

    /**
     * Create a new MassMomentOfInertia instance from a MegatonneSquareMilimeters
     *
     * @param value The unit as MegatonneSquareMilimeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    public static FromMegatonneSquareMilimeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.MegatonneSquareMilimeters);
    }

    private convertFromBase(toUnit: MassMomentOfInertiaUnits): number {
        switch (toUnit) {
                
            case MassMomentOfInertiaUnits.GramSquareMeters:
            case MassMomentOfInertiaUnits.GramSquareMeters:        
                return this.value * 1e3;
            case MassMomentOfInertiaUnits.GramSquareDecimeters:
            case MassMomentOfInertiaUnits.GramSquareDecimeters:        
                return this.value * 1e5;
            case MassMomentOfInertiaUnits.GramSquareCentimeters:
            case MassMomentOfInertiaUnits.GramSquareCentimeters:        
                return this.value * 1e7;
            case MassMomentOfInertiaUnits.GramSquareMillimeters:
            case MassMomentOfInertiaUnits.GramSquareMillimeters:        
                return this.value * 1e9;
            case MassMomentOfInertiaUnits.TonneSquareMeters:
            case MassMomentOfInertiaUnits.TonneSquareMeters:        
                return this.value * 1e-3;
            case MassMomentOfInertiaUnits.TonneSquareDecimeters:
            case MassMomentOfInertiaUnits.TonneSquareDecimeters:        
                return this.value * 1e-1;
            case MassMomentOfInertiaUnits.TonneSquareCentimeters:
            case MassMomentOfInertiaUnits.TonneSquareCentimeters:        
                return this.value * 1e1;
            case MassMomentOfInertiaUnits.TonneSquareMilimeters:
            case MassMomentOfInertiaUnits.TonneSquareMilimeters:        
                return this.value * 1e3;
            case MassMomentOfInertiaUnits.PoundSquareFeet:
            case MassMomentOfInertiaUnits.PoundSquareFeet:        
                return this.value / 4.21401101e-2;
            case MassMomentOfInertiaUnits.PoundSquareInches:
            case MassMomentOfInertiaUnits.PoundSquareInches:        
                return this.value / 2.9263965e-4;
            case MassMomentOfInertiaUnits.SlugSquareFeet:
            case MassMomentOfInertiaUnits.SlugSquareFeet:        
                return this.value / 1.3558179619;
            case MassMomentOfInertiaUnits.SlugSquareInches:
            case MassMomentOfInertiaUnits.SlugSquareInches:        
                return this.value / 9.41540242e-3;
            case MassMomentOfInertiaUnits.MilligramSquareMeters:
            case MassMomentOfInertiaUnits.MilligramSquareMeters:        
                return (this.value * 1e3) / 0.001;
            case MassMomentOfInertiaUnits.KilogramSquareMeters:
            case MassMomentOfInertiaUnits.KilogramSquareMeters:        
                return (this.value * 1e3) / 1000;
            case MassMomentOfInertiaUnits.MilligramSquareDecimeters:
            case MassMomentOfInertiaUnits.MilligramSquareDecimeters:        
                return (this.value * 1e5) / 0.001;
            case MassMomentOfInertiaUnits.KilogramSquareDecimeters:
            case MassMomentOfInertiaUnits.KilogramSquareDecimeters:        
                return (this.value * 1e5) / 1000;
            case MassMomentOfInertiaUnits.MilligramSquareCentimeters:
            case MassMomentOfInertiaUnits.MilligramSquareCentimeters:        
                return (this.value * 1e7) / 0.001;
            case MassMomentOfInertiaUnits.KilogramSquareCentimeters:
            case MassMomentOfInertiaUnits.KilogramSquareCentimeters:        
                return (this.value * 1e7) / 1000;
            case MassMomentOfInertiaUnits.MilligramSquareMillimeters:
            case MassMomentOfInertiaUnits.MilligramSquareMillimeters:        
                return (this.value * 1e9) / 0.001;
            case MassMomentOfInertiaUnits.KilogramSquareMillimeters:
            case MassMomentOfInertiaUnits.KilogramSquareMillimeters:        
                return (this.value * 1e9) / 1000;
            case MassMomentOfInertiaUnits.KilotonneSquareMeters:
            case MassMomentOfInertiaUnits.KilotonneSquareMeters:        
                return (this.value * 1e-3) / 1000;
            case MassMomentOfInertiaUnits.MegatonneSquareMeters:
            case MassMomentOfInertiaUnits.MegatonneSquareMeters:        
                return (this.value * 1e-3) / 1000000;
            case MassMomentOfInertiaUnits.KilotonneSquareDecimeters:
            case MassMomentOfInertiaUnits.KilotonneSquareDecimeters:        
                return (this.value * 1e-1) / 1000;
            case MassMomentOfInertiaUnits.MegatonneSquareDecimeters:
            case MassMomentOfInertiaUnits.MegatonneSquareDecimeters:        
                return (this.value * 1e-1) / 1000000;
            case MassMomentOfInertiaUnits.KilotonneSquareCentimeters:
            case MassMomentOfInertiaUnits.KilotonneSquareCentimeters:        
                return (this.value * 1e1) / 1000;
            case MassMomentOfInertiaUnits.MegatonneSquareCentimeters:
            case MassMomentOfInertiaUnits.MegatonneSquareCentimeters:        
                return (this.value * 1e1) / 1000000;
            case MassMomentOfInertiaUnits.KilotonneSquareMilimeters:
            case MassMomentOfInertiaUnits.KilotonneSquareMilimeters:        
                return (this.value * 1e3) / 1000;
            case MassMomentOfInertiaUnits.MegatonneSquareMilimeters:
            case MassMomentOfInertiaUnits.MegatonneSquareMilimeters:        
                return (this.value * 1e3) / 1000000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: MassMomentOfInertiaUnits): number {
        switch (fromUnit) {
                
            case MassMomentOfInertiaUnits.GramSquareMeters:
            case MassMomentOfInertiaUnits.GramSquareMeters:        
                return value / 1e3;
            case MassMomentOfInertiaUnits.GramSquareDecimeters:
            case MassMomentOfInertiaUnits.GramSquareDecimeters:        
                return value / 1e5;
            case MassMomentOfInertiaUnits.GramSquareCentimeters:
            case MassMomentOfInertiaUnits.GramSquareCentimeters:        
                return value / 1e7;
            case MassMomentOfInertiaUnits.GramSquareMillimeters:
            case MassMomentOfInertiaUnits.GramSquareMillimeters:        
                return value / 1e9;
            case MassMomentOfInertiaUnits.TonneSquareMeters:
            case MassMomentOfInertiaUnits.TonneSquareMeters:        
                return value / 1e-3;
            case MassMomentOfInertiaUnits.TonneSquareDecimeters:
            case MassMomentOfInertiaUnits.TonneSquareDecimeters:        
                return value / 1e-1;
            case MassMomentOfInertiaUnits.TonneSquareCentimeters:
            case MassMomentOfInertiaUnits.TonneSquareCentimeters:        
                return value / 1e1;
            case MassMomentOfInertiaUnits.TonneSquareMilimeters:
            case MassMomentOfInertiaUnits.TonneSquareMilimeters:        
                return value / 1e3;
            case MassMomentOfInertiaUnits.PoundSquareFeet:
            case MassMomentOfInertiaUnits.PoundSquareFeet:        
                return value * 4.21401101e-2;
            case MassMomentOfInertiaUnits.PoundSquareInches:
            case MassMomentOfInertiaUnits.PoundSquareInches:        
                return value * 2.9263965e-4;
            case MassMomentOfInertiaUnits.SlugSquareFeet:
            case MassMomentOfInertiaUnits.SlugSquareFeet:        
                return value * 1.3558179619;
            case MassMomentOfInertiaUnits.SlugSquareInches:
            case MassMomentOfInertiaUnits.SlugSquareInches:        
                return value * 9.41540242e-3;
            case MassMomentOfInertiaUnits.MilligramSquareMeters:
            case MassMomentOfInertiaUnits.MilligramSquareMeters:        
                return (value / 1e3) * 0.001;
            case MassMomentOfInertiaUnits.KilogramSquareMeters:
            case MassMomentOfInertiaUnits.KilogramSquareMeters:        
                return (value / 1e3) * 1000;
            case MassMomentOfInertiaUnits.MilligramSquareDecimeters:
            case MassMomentOfInertiaUnits.MilligramSquareDecimeters:        
                return (value / 1e5) * 0.001;
            case MassMomentOfInertiaUnits.KilogramSquareDecimeters:
            case MassMomentOfInertiaUnits.KilogramSquareDecimeters:        
                return (value / 1e5) * 1000;
            case MassMomentOfInertiaUnits.MilligramSquareCentimeters:
            case MassMomentOfInertiaUnits.MilligramSquareCentimeters:        
                return (value / 1e7) * 0.001;
            case MassMomentOfInertiaUnits.KilogramSquareCentimeters:
            case MassMomentOfInertiaUnits.KilogramSquareCentimeters:        
                return (value / 1e7) * 1000;
            case MassMomentOfInertiaUnits.MilligramSquareMillimeters:
            case MassMomentOfInertiaUnits.MilligramSquareMillimeters:        
                return (value / 1e9) * 0.001;
            case MassMomentOfInertiaUnits.KilogramSquareMillimeters:
            case MassMomentOfInertiaUnits.KilogramSquareMillimeters:        
                return (value / 1e9) * 1000;
            case MassMomentOfInertiaUnits.KilotonneSquareMeters:
            case MassMomentOfInertiaUnits.KilotonneSquareMeters:        
                return (value / 1e-3) * 1000;
            case MassMomentOfInertiaUnits.MegatonneSquareMeters:
            case MassMomentOfInertiaUnits.MegatonneSquareMeters:        
                return (value / 1e-3) * 1000000;
            case MassMomentOfInertiaUnits.KilotonneSquareDecimeters:
            case MassMomentOfInertiaUnits.KilotonneSquareDecimeters:        
                return (value / 1e-1) * 1000;
            case MassMomentOfInertiaUnits.MegatonneSquareDecimeters:
            case MassMomentOfInertiaUnits.MegatonneSquareDecimeters:        
                return (value / 1e-1) * 1000000;
            case MassMomentOfInertiaUnits.KilotonneSquareCentimeters:
            case MassMomentOfInertiaUnits.KilotonneSquareCentimeters:        
                return (value / 1e1) * 1000;
            case MassMomentOfInertiaUnits.MegatonneSquareCentimeters:
            case MassMomentOfInertiaUnits.MegatonneSquareCentimeters:        
                return (value / 1e1) * 1000000;
            case MassMomentOfInertiaUnits.KilotonneSquareMilimeters:
            case MassMomentOfInertiaUnits.KilotonneSquareMilimeters:        
                return (value / 1e3) * 1000;
            case MassMomentOfInertiaUnits.MegatonneSquareMilimeters:
            case MassMomentOfInertiaUnits.MegatonneSquareMilimeters:        
                return (value / 1e3) * 1000000;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the MassMomentOfInertia to string.
     * Note! the default format for MassMomentOfInertia is KilogramSquareMeters.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the MassMomentOfInertia.
     * @returns The string format of the MassMomentOfInertia.
     */
    public toString(unit: MassMomentOfInertiaUnits = MassMomentOfInertiaUnits.KilogramSquareMeters): string {

        switch (unit) {
            
            case MassMomentOfInertiaUnits.GramSquareMeters:
                return this.GramSquareMeters + ` g·m²`;
            case MassMomentOfInertiaUnits.GramSquareDecimeters:
                return this.GramSquareDecimeters + ` g·dm²`;
            case MassMomentOfInertiaUnits.GramSquareCentimeters:
                return this.GramSquareCentimeters + ` g·cm²`;
            case MassMomentOfInertiaUnits.GramSquareMillimeters:
                return this.GramSquareMillimeters + ` g·mm²`;
            case MassMomentOfInertiaUnits.TonneSquareMeters:
                return this.TonneSquareMeters + ` t·m²`;
            case MassMomentOfInertiaUnits.TonneSquareDecimeters:
                return this.TonneSquareDecimeters + ` t·dm²`;
            case MassMomentOfInertiaUnits.TonneSquareCentimeters:
                return this.TonneSquareCentimeters + ` t·cm²`;
            case MassMomentOfInertiaUnits.TonneSquareMilimeters:
                return this.TonneSquareMilimeters + ` t·mm²`;
            case MassMomentOfInertiaUnits.PoundSquareFeet:
                return this.PoundSquareFeet + ` lb·ft²`;
            case MassMomentOfInertiaUnits.PoundSquareInches:
                return this.PoundSquareInches + ` lb·in²`;
            case MassMomentOfInertiaUnits.SlugSquareFeet:
                return this.SlugSquareFeet + ` slug·ft²`;
            case MassMomentOfInertiaUnits.SlugSquareInches:
                return this.SlugSquareInches + ` slug·in²`;
            case MassMomentOfInertiaUnits.MilligramSquareMeters:
                return this.MilligramSquareMeters + ` `;
            case MassMomentOfInertiaUnits.KilogramSquareMeters:
                return this.KilogramSquareMeters + ` `;
            case MassMomentOfInertiaUnits.MilligramSquareDecimeters:
                return this.MilligramSquareDecimeters + ` `;
            case MassMomentOfInertiaUnits.KilogramSquareDecimeters:
                return this.KilogramSquareDecimeters + ` `;
            case MassMomentOfInertiaUnits.MilligramSquareCentimeters:
                return this.MilligramSquareCentimeters + ` `;
            case MassMomentOfInertiaUnits.KilogramSquareCentimeters:
                return this.KilogramSquareCentimeters + ` `;
            case MassMomentOfInertiaUnits.MilligramSquareMillimeters:
                return this.MilligramSquareMillimeters + ` `;
            case MassMomentOfInertiaUnits.KilogramSquareMillimeters:
                return this.KilogramSquareMillimeters + ` `;
            case MassMomentOfInertiaUnits.KilotonneSquareMeters:
                return this.KilotonneSquareMeters + ` `;
            case MassMomentOfInertiaUnits.MegatonneSquareMeters:
                return this.MegatonneSquareMeters + ` `;
            case MassMomentOfInertiaUnits.KilotonneSquareDecimeters:
                return this.KilotonneSquareDecimeters + ` `;
            case MassMomentOfInertiaUnits.MegatonneSquareDecimeters:
                return this.MegatonneSquareDecimeters + ` `;
            case MassMomentOfInertiaUnits.KilotonneSquareCentimeters:
                return this.KilotonneSquareCentimeters + ` `;
            case MassMomentOfInertiaUnits.MegatonneSquareCentimeters:
                return this.MegatonneSquareCentimeters + ` `;
            case MassMomentOfInertiaUnits.KilotonneSquareMilimeters:
                return this.KilotonneSquareMilimeters + ` `;
            case MassMomentOfInertiaUnits.MegatonneSquareMilimeters:
                return this.MegatonneSquareMilimeters + ` `;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get MassMomentOfInertia unit abbreviation.
     * Note! the default abbreviation for MassMomentOfInertia is KilogramSquareMeters.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the MassMomentOfInertia.
     * @returns The abbreviation string of MassMomentOfInertia.
     */
    public getUnitAbbreviation(unitAbbreviation: MassMomentOfInertiaUnits = MassMomentOfInertiaUnits.KilogramSquareMeters): string {

        switch (unitAbbreviation) {
            
            case MassMomentOfInertiaUnits.GramSquareMeters:
                return `g·m²`;
            case MassMomentOfInertiaUnits.GramSquareDecimeters:
                return `g·dm²`;
            case MassMomentOfInertiaUnits.GramSquareCentimeters:
                return `g·cm²`;
            case MassMomentOfInertiaUnits.GramSquareMillimeters:
                return `g·mm²`;
            case MassMomentOfInertiaUnits.TonneSquareMeters:
                return `t·m²`;
            case MassMomentOfInertiaUnits.TonneSquareDecimeters:
                return `t·dm²`;
            case MassMomentOfInertiaUnits.TonneSquareCentimeters:
                return `t·cm²`;
            case MassMomentOfInertiaUnits.TonneSquareMilimeters:
                return `t·mm²`;
            case MassMomentOfInertiaUnits.PoundSquareFeet:
                return `lb·ft²`;
            case MassMomentOfInertiaUnits.PoundSquareInches:
                return `lb·in²`;
            case MassMomentOfInertiaUnits.SlugSquareFeet:
                return `slug·ft²`;
            case MassMomentOfInertiaUnits.SlugSquareInches:
                return `slug·in²`;
            case MassMomentOfInertiaUnits.MilligramSquareMeters:
                return ``;
            case MassMomentOfInertiaUnits.KilogramSquareMeters:
                return ``;
            case MassMomentOfInertiaUnits.MilligramSquareDecimeters:
                return ``;
            case MassMomentOfInertiaUnits.KilogramSquareDecimeters:
                return ``;
            case MassMomentOfInertiaUnits.MilligramSquareCentimeters:
                return ``;
            case MassMomentOfInertiaUnits.KilogramSquareCentimeters:
                return ``;
            case MassMomentOfInertiaUnits.MilligramSquareMillimeters:
                return ``;
            case MassMomentOfInertiaUnits.KilogramSquareMillimeters:
                return ``;
            case MassMomentOfInertiaUnits.KilotonneSquareMeters:
                return ``;
            case MassMomentOfInertiaUnits.MegatonneSquareMeters:
                return ``;
            case MassMomentOfInertiaUnits.KilotonneSquareDecimeters:
                return ``;
            case MassMomentOfInertiaUnits.MegatonneSquareDecimeters:
                return ``;
            case MassMomentOfInertiaUnits.KilotonneSquareCentimeters:
                return ``;
            case MassMomentOfInertiaUnits.MegatonneSquareCentimeters:
                return ``;
            case MassMomentOfInertiaUnits.KilotonneSquareMilimeters:
                return ``;
            case MassMomentOfInertiaUnits.MegatonneSquareMilimeters:
                return ``;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given MassMomentOfInertia are equals to the current MassMomentOfInertia.
     * @param massMomentOfInertia The other MassMomentOfInertia.
     * @returns True if the given MassMomentOfInertia are equal to the current MassMomentOfInertia.
     */
    public equals(massMomentOfInertia: MassMomentOfInertia): boolean {
        return this.value === massMomentOfInertia.BaseValue;
    }

    /**
     * Compare the given MassMomentOfInertia against the current MassMomentOfInertia.
     * @param massMomentOfInertia The other MassMomentOfInertia.
     * @returns 0 if they are equal, -1 if the current MassMomentOfInertia is less then other, 1 if the current MassMomentOfInertia is greater then other.
     */
    public compareTo(massMomentOfInertia: MassMomentOfInertia): number {

        if (this.value > massMomentOfInertia.BaseValue)
            return 1;
        if (this.value < massMomentOfInertia.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given MassMomentOfInertia with the current MassMomentOfInertia.
     * @param massMomentOfInertia The other MassMomentOfInertia.
     * @returns A new MassMomentOfInertia instance with the results.
     */
    public add(massMomentOfInertia: MassMomentOfInertia): MassMomentOfInertia {
        return new MassMomentOfInertia(this.value + massMomentOfInertia.BaseValue)
    }

    /**
     * Subtract the given MassMomentOfInertia with the current MassMomentOfInertia.
     * @param massMomentOfInertia The other MassMomentOfInertia.
     * @returns A new MassMomentOfInertia instance with the results.
     */
    public subtract(massMomentOfInertia: MassMomentOfInertia): MassMomentOfInertia {
        return new MassMomentOfInertia(this.value - massMomentOfInertia.BaseValue)
    }

    /**
     * Multiply the given MassMomentOfInertia with the current MassMomentOfInertia.
     * @param massMomentOfInertia The other MassMomentOfInertia.
     * @returns A new MassMomentOfInertia instance with the results.
     */
    public multiply(massMomentOfInertia: MassMomentOfInertia): MassMomentOfInertia {
        return new MassMomentOfInertia(this.value * massMomentOfInertia.BaseValue)
    }

    /**
     * Divide the given MassMomentOfInertia with the current MassMomentOfInertia.
     * @param massMomentOfInertia The other MassMomentOfInertia.
     * @returns A new MassMomentOfInertia instance with the results.
     */
    public divide(massMomentOfInertia: MassMomentOfInertia): MassMomentOfInertia {
        return new MassMomentOfInertia(this.value / massMomentOfInertia.BaseValue)
    }

    /**
     * Modulo the given MassMomentOfInertia with the current MassMomentOfInertia.
     * @param massMomentOfInertia The other MassMomentOfInertia.
     * @returns A new MassMomentOfInertia instance with the results.
     */
    public modulo(massMomentOfInertia: MassMomentOfInertia): MassMomentOfInertia {
        return new MassMomentOfInertia(this.value % massMomentOfInertia.BaseValue)
    }

    /**
     * Pow the given MassMomentOfInertia with the current MassMomentOfInertia.
     * @param massMomentOfInertia The other MassMomentOfInertia.
     * @returns A new MassMomentOfInertia instance with the results.
     */
    public pow(massMomentOfInertia: MassMomentOfInertia): MassMomentOfInertia {
        return new MassMomentOfInertia(this.value ** massMomentOfInertia.BaseValue)
    }
}
