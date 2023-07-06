/** SpeedUnits enumeration */
export enum SpeedUnits {
    /** */
    MetersPerSecond,
    /** */
    MetersPerMinutes,
    /** */
    MetersPerHour,
    /** */
    FeetPerSecond,
    /** */
    FeetPerMinute,
    /** */
    FeetPerHour,
    /** */
    UsSurveyFeetPerSecond,
    /** */
    UsSurveyFeetPerMinute,
    /** */
    UsSurveyFeetPerHour,
    /** */
    InchesPerSecond,
    /** */
    InchesPerMinute,
    /** */
    InchesPerHour,
    /** */
    YardsPerSecond,
    /** */
    YardsPerMinute,
    /** */
    YardsPerHour,
    /** The knot, by definition, is a unit of speed equals to 1 nautical mile per hour, which is exactly 1852.000 metres per hour. The length of the internationally agreed nautical mile is 1852 m. The US adopted the international definition in 1954, the UK adopted the international nautical mile definition in 1970. */
    Knots,
    /** */
    MilesPerHour,
    /** */
    Mach,
    /** */
    NanometersPerSecond,
    /** */
    MicrometersPerSecond,
    /** */
    MillimetersPerSecond,
    /** */
    CentimetersPerSecond,
    /** */
    DecimetersPerSecond,
    /** */
    KilometersPerSecond,
    /** */
    NanometersPerMinutes,
    /** */
    MicrometersPerMinutes,
    /** */
    MillimetersPerMinutes,
    /** */
    CentimetersPerMinutes,
    /** */
    DecimetersPerMinutes,
    /** */
    KilometersPerMinutes,
    /** */
    MillimetersPerHour,
    /** */
    CentimetersPerHour,
    /** */
    KilometersPerHour,
    /** */
    MeterPerSecond,
    /** */
    MeterPerMinute,
    /** */
    MeterPerHour,
    /** */
    FootPerSecond,
    /** */
    FootPerMinute,
    /** */
    FootPerHour,
    /** */
    UsSurveyFootPerSecond,
    /** */
    UsSurveyFootPerMinute,
    /** */
    UsSurveyFootPerHour,
    /** */
    InchPerSecond,
    /** */
    InchPerMinute,
    /** */
    InchPerHour,
    /** */
    YardPerSecond,
    /** */
    YardPerMinute,
    /** */
    YardPerHour,
    /** The knot, by definition, is a unit of speed equals to 1 nautical mile per hour, which is exactly 1852.000 metres per hour. The length of the internationally agreed nautical mile is 1852 m. The US adopted the international definition in 1954, the UK adopted the international nautical mile definition in 1970. */
    Knot,
    /** */
    MilePerHour,
    /** */
    NanometerPerSecond,
    /** */
    MicrometerPerSecond,
    /** */
    MillimeterPerSecond,
    /** */
    CentimeterPerSecond,
    /** */
    DecimeterPerSecond,
    /** */
    KilometerPerSecond,
    /** */
    NanometerPerMinute,
    /** */
    MicrometerPerMinute,
    /** */
    MillimeterPerMinute,
    /** */
    CentimeterPerMinute,
    /** */
    DecimeterPerMinute,
    /** */
    KilometerPerMinute,
    /** */
    MillimeterPerHour,
    /** */
    CentimeterPerHour,
    /** */
    KilometerPerHour
}

/** In everyday use and in kinematics, the speed of an object is the magnitude of its velocity (the rate of change of its position); it is thus a scalar quantity.[1] The average speed of an object in an interval of time is the distance travelled by the object divided by the duration of the interval;[2] the instantaneous speed is the limit of the average speed as the duration of the time interval approaches zero. */
export class Speed {
    private value: number;
    private meterspersecondLazy: number | null = null;
    private metersperminutesLazy: number | null = null;
    private metersperhourLazy: number | null = null;
    private feetpersecondLazy: number | null = null;
    private feetperminuteLazy: number | null = null;
    private feetperhourLazy: number | null = null;
    private ussurveyfeetpersecondLazy: number | null = null;
    private ussurveyfeetperminuteLazy: number | null = null;
    private ussurveyfeetperhourLazy: number | null = null;
    private inchespersecondLazy: number | null = null;
    private inchesperminuteLazy: number | null = null;
    private inchesperhourLazy: number | null = null;
    private yardspersecondLazy: number | null = null;
    private yardsperminuteLazy: number | null = null;
    private yardsperhourLazy: number | null = null;
    private knotsLazy: number | null = null;
    private milesperhourLazy: number | null = null;
    private machLazy: number | null = null;
    private nanometerspersecondLazy: number | null = null;
    private micrometerspersecondLazy: number | null = null;
    private millimeterspersecondLazy: number | null = null;
    private centimeterspersecondLazy: number | null = null;
    private decimeterspersecondLazy: number | null = null;
    private kilometerspersecondLazy: number | null = null;
    private nanometersperminutesLazy: number | null = null;
    private micrometersperminutesLazy: number | null = null;
    private millimetersperminutesLazy: number | null = null;
    private centimetersperminutesLazy: number | null = null;
    private decimetersperminutesLazy: number | null = null;
    private kilometersperminutesLazy: number | null = null;
    private millimetersperhourLazy: number | null = null;
    private centimetersperhourLazy: number | null = null;
    private kilometersperhourLazy: number | null = null;

    /**
     * Create a new Speed.
     * @param value The value.
     * @param fromUnit The ‘Speed’ unit to create from.
     * The default unit is MetersPerSecond
     */
    public constructor(value: number, fromUnit: SpeedUnits = SpeedUnits.MetersPerSecond) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of Speed is MetersPerSecond.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get MetersPerSecond(): number {
        if(this.meterspersecondLazy !== null){
            return this.meterspersecondLazy;
        }
        return this.meterspersecondLazy = this.convertFromBase(SpeedUnits.MetersPerSecond);
    }

    /** */
    public get MetersPerMinutes(): number {
        if(this.metersperminutesLazy !== null){
            return this.metersperminutesLazy;
        }
        return this.metersperminutesLazy = this.convertFromBase(SpeedUnits.MetersPerMinutes);
    }

    /** */
    public get MetersPerHour(): number {
        if(this.metersperhourLazy !== null){
            return this.metersperhourLazy;
        }
        return this.metersperhourLazy = this.convertFromBase(SpeedUnits.MetersPerHour);
    }

    /** */
    public get FeetPerSecond(): number {
        if(this.feetpersecondLazy !== null){
            return this.feetpersecondLazy;
        }
        return this.feetpersecondLazy = this.convertFromBase(SpeedUnits.FeetPerSecond);
    }

    /** */
    public get FeetPerMinute(): number {
        if(this.feetperminuteLazy !== null){
            return this.feetperminuteLazy;
        }
        return this.feetperminuteLazy = this.convertFromBase(SpeedUnits.FeetPerMinute);
    }

    /** */
    public get FeetPerHour(): number {
        if(this.feetperhourLazy !== null){
            return this.feetperhourLazy;
        }
        return this.feetperhourLazy = this.convertFromBase(SpeedUnits.FeetPerHour);
    }

    /** */
    public get UsSurveyFeetPerSecond(): number {
        if(this.ussurveyfeetpersecondLazy !== null){
            return this.ussurveyfeetpersecondLazy;
        }
        return this.ussurveyfeetpersecondLazy = this.convertFromBase(SpeedUnits.UsSurveyFeetPerSecond);
    }

    /** */
    public get UsSurveyFeetPerMinute(): number {
        if(this.ussurveyfeetperminuteLazy !== null){
            return this.ussurveyfeetperminuteLazy;
        }
        return this.ussurveyfeetperminuteLazy = this.convertFromBase(SpeedUnits.UsSurveyFeetPerMinute);
    }

    /** */
    public get UsSurveyFeetPerHour(): number {
        if(this.ussurveyfeetperhourLazy !== null){
            return this.ussurveyfeetperhourLazy;
        }
        return this.ussurveyfeetperhourLazy = this.convertFromBase(SpeedUnits.UsSurveyFeetPerHour);
    }

    /** */
    public get InchesPerSecond(): number {
        if(this.inchespersecondLazy !== null){
            return this.inchespersecondLazy;
        }
        return this.inchespersecondLazy = this.convertFromBase(SpeedUnits.InchesPerSecond);
    }

    /** */
    public get InchesPerMinute(): number {
        if(this.inchesperminuteLazy !== null){
            return this.inchesperminuteLazy;
        }
        return this.inchesperminuteLazy = this.convertFromBase(SpeedUnits.InchesPerMinute);
    }

    /** */
    public get InchesPerHour(): number {
        if(this.inchesperhourLazy !== null){
            return this.inchesperhourLazy;
        }
        return this.inchesperhourLazy = this.convertFromBase(SpeedUnits.InchesPerHour);
    }

    /** */
    public get YardsPerSecond(): number {
        if(this.yardspersecondLazy !== null){
            return this.yardspersecondLazy;
        }
        return this.yardspersecondLazy = this.convertFromBase(SpeedUnits.YardsPerSecond);
    }

    /** */
    public get YardsPerMinute(): number {
        if(this.yardsperminuteLazy !== null){
            return this.yardsperminuteLazy;
        }
        return this.yardsperminuteLazy = this.convertFromBase(SpeedUnits.YardsPerMinute);
    }

    /** */
    public get YardsPerHour(): number {
        if(this.yardsperhourLazy !== null){
            return this.yardsperhourLazy;
        }
        return this.yardsperhourLazy = this.convertFromBase(SpeedUnits.YardsPerHour);
    }

    /** The knot, by definition, is a unit of speed equals to 1 nautical mile per hour, which is exactly 1852.000 metres per hour. The length of the internationally agreed nautical mile is 1852 m. The US adopted the international definition in 1954, the UK adopted the international nautical mile definition in 1970. */
    public get Knots(): number {
        if(this.knotsLazy !== null){
            return this.knotsLazy;
        }
        return this.knotsLazy = this.convertFromBase(SpeedUnits.Knots);
    }

    /** */
    public get MilesPerHour(): number {
        if(this.milesperhourLazy !== null){
            return this.milesperhourLazy;
        }
        return this.milesperhourLazy = this.convertFromBase(SpeedUnits.MilesPerHour);
    }

    /** */
    public get Mach(): number {
        if(this.machLazy !== null){
            return this.machLazy;
        }
        return this.machLazy = this.convertFromBase(SpeedUnits.Mach);
    }

    /** */
    public get NanometersPerSecond(): number {
        if(this.nanometerspersecondLazy !== null){
            return this.nanometerspersecondLazy;
        }
        return this.nanometerspersecondLazy = this.convertFromBase(SpeedUnits.NanometersPerSecond);
    }

    /** */
    public get MicrometersPerSecond(): number {
        if(this.micrometerspersecondLazy !== null){
            return this.micrometerspersecondLazy;
        }
        return this.micrometerspersecondLazy = this.convertFromBase(SpeedUnits.MicrometersPerSecond);
    }

    /** */
    public get MillimetersPerSecond(): number {
        if(this.millimeterspersecondLazy !== null){
            return this.millimeterspersecondLazy;
        }
        return this.millimeterspersecondLazy = this.convertFromBase(SpeedUnits.MillimetersPerSecond);
    }

    /** */
    public get CentimetersPerSecond(): number {
        if(this.centimeterspersecondLazy !== null){
            return this.centimeterspersecondLazy;
        }
        return this.centimeterspersecondLazy = this.convertFromBase(SpeedUnits.CentimetersPerSecond);
    }

    /** */
    public get DecimetersPerSecond(): number {
        if(this.decimeterspersecondLazy !== null){
            return this.decimeterspersecondLazy;
        }
        return this.decimeterspersecondLazy = this.convertFromBase(SpeedUnits.DecimetersPerSecond);
    }

    /** */
    public get KilometersPerSecond(): number {
        if(this.kilometerspersecondLazy !== null){
            return this.kilometerspersecondLazy;
        }
        return this.kilometerspersecondLazy = this.convertFromBase(SpeedUnits.KilometersPerSecond);
    }

    /** */
    public get NanometersPerMinutes(): number {
        if(this.nanometersperminutesLazy !== null){
            return this.nanometersperminutesLazy;
        }
        return this.nanometersperminutesLazy = this.convertFromBase(SpeedUnits.NanometersPerMinutes);
    }

    /** */
    public get MicrometersPerMinutes(): number {
        if(this.micrometersperminutesLazy !== null){
            return this.micrometersperminutesLazy;
        }
        return this.micrometersperminutesLazy = this.convertFromBase(SpeedUnits.MicrometersPerMinutes);
    }

    /** */
    public get MillimetersPerMinutes(): number {
        if(this.millimetersperminutesLazy !== null){
            return this.millimetersperminutesLazy;
        }
        return this.millimetersperminutesLazy = this.convertFromBase(SpeedUnits.MillimetersPerMinutes);
    }

    /** */
    public get CentimetersPerMinutes(): number {
        if(this.centimetersperminutesLazy !== null){
            return this.centimetersperminutesLazy;
        }
        return this.centimetersperminutesLazy = this.convertFromBase(SpeedUnits.CentimetersPerMinutes);
    }

    /** */
    public get DecimetersPerMinutes(): number {
        if(this.decimetersperminutesLazy !== null){
            return this.decimetersperminutesLazy;
        }
        return this.decimetersperminutesLazy = this.convertFromBase(SpeedUnits.DecimetersPerMinutes);
    }

    /** */
    public get KilometersPerMinutes(): number {
        if(this.kilometersperminutesLazy !== null){
            return this.kilometersperminutesLazy;
        }
        return this.kilometersperminutesLazy = this.convertFromBase(SpeedUnits.KilometersPerMinutes);
    }

    /** */
    public get MillimetersPerHour(): number {
        if(this.millimetersperhourLazy !== null){
            return this.millimetersperhourLazy;
        }
        return this.millimetersperhourLazy = this.convertFromBase(SpeedUnits.MillimetersPerHour);
    }

    /** */
    public get CentimetersPerHour(): number {
        if(this.centimetersperhourLazy !== null){
            return this.centimetersperhourLazy;
        }
        return this.centimetersperhourLazy = this.convertFromBase(SpeedUnits.CentimetersPerHour);
    }

    /** */
    public get KilometersPerHour(): number {
        if(this.kilometersperhourLazy !== null){
            return this.kilometersperhourLazy;
        }
        return this.kilometersperhourLazy = this.convertFromBase(SpeedUnits.KilometersPerHour);
    }

    /**
     * Create a new Speed instance from a MetersPerSecond
     *
     * @param value The unit as MetersPerSecond to create a new Speed from.
     * @returns The new Speed instance.
     */
    public static FromMetersPerSecond(value: number): Speed {
        return new Speed(value, SpeedUnits.MetersPerSecond);
    }

    /**
     * Create a new Speed instance from a MetersPerMinutes
     *
     * @param value The unit as MetersPerMinutes to create a new Speed from.
     * @returns The new Speed instance.
     */
    public static FromMetersPerMinutes(value: number): Speed {
        return new Speed(value, SpeedUnits.MetersPerMinutes);
    }

    /**
     * Create a new Speed instance from a MetersPerHour
     *
     * @param value The unit as MetersPerHour to create a new Speed from.
     * @returns The new Speed instance.
     */
    public static FromMetersPerHour(value: number): Speed {
        return new Speed(value, SpeedUnits.MetersPerHour);
    }

    /**
     * Create a new Speed instance from a FeetPerSecond
     *
     * @param value The unit as FeetPerSecond to create a new Speed from.
     * @returns The new Speed instance.
     */
    public static FromFeetPerSecond(value: number): Speed {
        return new Speed(value, SpeedUnits.FeetPerSecond);
    }

    /**
     * Create a new Speed instance from a FeetPerMinute
     *
     * @param value The unit as FeetPerMinute to create a new Speed from.
     * @returns The new Speed instance.
     */
    public static FromFeetPerMinute(value: number): Speed {
        return new Speed(value, SpeedUnits.FeetPerMinute);
    }

    /**
     * Create a new Speed instance from a FeetPerHour
     *
     * @param value The unit as FeetPerHour to create a new Speed from.
     * @returns The new Speed instance.
     */
    public static FromFeetPerHour(value: number): Speed {
        return new Speed(value, SpeedUnits.FeetPerHour);
    }

    /**
     * Create a new Speed instance from a UsSurveyFeetPerSecond
     *
     * @param value The unit as UsSurveyFeetPerSecond to create a new Speed from.
     * @returns The new Speed instance.
     */
    public static FromUsSurveyFeetPerSecond(value: number): Speed {
        return new Speed(value, SpeedUnits.UsSurveyFeetPerSecond);
    }

    /**
     * Create a new Speed instance from a UsSurveyFeetPerMinute
     *
     * @param value The unit as UsSurveyFeetPerMinute to create a new Speed from.
     * @returns The new Speed instance.
     */
    public static FromUsSurveyFeetPerMinute(value: number): Speed {
        return new Speed(value, SpeedUnits.UsSurveyFeetPerMinute);
    }

    /**
     * Create a new Speed instance from a UsSurveyFeetPerHour
     *
     * @param value The unit as UsSurveyFeetPerHour to create a new Speed from.
     * @returns The new Speed instance.
     */
    public static FromUsSurveyFeetPerHour(value: number): Speed {
        return new Speed(value, SpeedUnits.UsSurveyFeetPerHour);
    }

    /**
     * Create a new Speed instance from a InchesPerSecond
     *
     * @param value The unit as InchesPerSecond to create a new Speed from.
     * @returns The new Speed instance.
     */
    public static FromInchesPerSecond(value: number): Speed {
        return new Speed(value, SpeedUnits.InchesPerSecond);
    }

    /**
     * Create a new Speed instance from a InchesPerMinute
     *
     * @param value The unit as InchesPerMinute to create a new Speed from.
     * @returns The new Speed instance.
     */
    public static FromInchesPerMinute(value: number): Speed {
        return new Speed(value, SpeedUnits.InchesPerMinute);
    }

    /**
     * Create a new Speed instance from a InchesPerHour
     *
     * @param value The unit as InchesPerHour to create a new Speed from.
     * @returns The new Speed instance.
     */
    public static FromInchesPerHour(value: number): Speed {
        return new Speed(value, SpeedUnits.InchesPerHour);
    }

    /**
     * Create a new Speed instance from a YardsPerSecond
     *
     * @param value The unit as YardsPerSecond to create a new Speed from.
     * @returns The new Speed instance.
     */
    public static FromYardsPerSecond(value: number): Speed {
        return new Speed(value, SpeedUnits.YardsPerSecond);
    }

    /**
     * Create a new Speed instance from a YardsPerMinute
     *
     * @param value The unit as YardsPerMinute to create a new Speed from.
     * @returns The new Speed instance.
     */
    public static FromYardsPerMinute(value: number): Speed {
        return new Speed(value, SpeedUnits.YardsPerMinute);
    }

    /**
     * Create a new Speed instance from a YardsPerHour
     *
     * @param value The unit as YardsPerHour to create a new Speed from.
     * @returns The new Speed instance.
     */
    public static FromYardsPerHour(value: number): Speed {
        return new Speed(value, SpeedUnits.YardsPerHour);
    }

    /**
     * Create a new Speed instance from a Knots
     * The knot, by definition, is a unit of speed equals to 1 nautical mile per hour, which is exactly 1852.000 metres per hour. The length of the internationally agreed nautical mile is 1852 m. The US adopted the international definition in 1954, the UK adopted the international nautical mile definition in 1970.
     * @param value The unit as Knots to create a new Speed from.
     * @returns The new Speed instance.
     */
    public static FromKnots(value: number): Speed {
        return new Speed(value, SpeedUnits.Knots);
    }

    /**
     * Create a new Speed instance from a MilesPerHour
     *
     * @param value The unit as MilesPerHour to create a new Speed from.
     * @returns The new Speed instance.
     */
    public static FromMilesPerHour(value: number): Speed {
        return new Speed(value, SpeedUnits.MilesPerHour);
    }

    /**
     * Create a new Speed instance from a Mach
     *
     * @param value The unit as Mach to create a new Speed from.
     * @returns The new Speed instance.
     */
    public static FromMach(value: number): Speed {
        return new Speed(value, SpeedUnits.Mach);
    }

    /**
     * Create a new Speed instance from a NanometersPerSecond
     *
     * @param value The unit as NanometersPerSecond to create a new Speed from.
     * @returns The new Speed instance.
     */
    public static FromNanometersPerSecond(value: number): Speed {
        return new Speed(value, SpeedUnits.NanometersPerSecond);
    }

    /**
     * Create a new Speed instance from a MicrometersPerSecond
     *
     * @param value The unit as MicrometersPerSecond to create a new Speed from.
     * @returns The new Speed instance.
     */
    public static FromMicrometersPerSecond(value: number): Speed {
        return new Speed(value, SpeedUnits.MicrometersPerSecond);
    }

    /**
     * Create a new Speed instance from a MillimetersPerSecond
     *
     * @param value The unit as MillimetersPerSecond to create a new Speed from.
     * @returns The new Speed instance.
     */
    public static FromMillimetersPerSecond(value: number): Speed {
        return new Speed(value, SpeedUnits.MillimetersPerSecond);
    }

    /**
     * Create a new Speed instance from a CentimetersPerSecond
     *
     * @param value The unit as CentimetersPerSecond to create a new Speed from.
     * @returns The new Speed instance.
     */
    public static FromCentimetersPerSecond(value: number): Speed {
        return new Speed(value, SpeedUnits.CentimetersPerSecond);
    }

    /**
     * Create a new Speed instance from a DecimetersPerSecond
     *
     * @param value The unit as DecimetersPerSecond to create a new Speed from.
     * @returns The new Speed instance.
     */
    public static FromDecimetersPerSecond(value: number): Speed {
        return new Speed(value, SpeedUnits.DecimetersPerSecond);
    }

    /**
     * Create a new Speed instance from a KilometersPerSecond
     *
     * @param value The unit as KilometersPerSecond to create a new Speed from.
     * @returns The new Speed instance.
     */
    public static FromKilometersPerSecond(value: number): Speed {
        return new Speed(value, SpeedUnits.KilometersPerSecond);
    }

    /**
     * Create a new Speed instance from a NanometersPerMinutes
     *
     * @param value The unit as NanometersPerMinutes to create a new Speed from.
     * @returns The new Speed instance.
     */
    public static FromNanometersPerMinutes(value: number): Speed {
        return new Speed(value, SpeedUnits.NanometersPerMinutes);
    }

    /**
     * Create a new Speed instance from a MicrometersPerMinutes
     *
     * @param value The unit as MicrometersPerMinutes to create a new Speed from.
     * @returns The new Speed instance.
     */
    public static FromMicrometersPerMinutes(value: number): Speed {
        return new Speed(value, SpeedUnits.MicrometersPerMinutes);
    }

    /**
     * Create a new Speed instance from a MillimetersPerMinutes
     *
     * @param value The unit as MillimetersPerMinutes to create a new Speed from.
     * @returns The new Speed instance.
     */
    public static FromMillimetersPerMinutes(value: number): Speed {
        return new Speed(value, SpeedUnits.MillimetersPerMinutes);
    }

    /**
     * Create a new Speed instance from a CentimetersPerMinutes
     *
     * @param value The unit as CentimetersPerMinutes to create a new Speed from.
     * @returns The new Speed instance.
     */
    public static FromCentimetersPerMinutes(value: number): Speed {
        return new Speed(value, SpeedUnits.CentimetersPerMinutes);
    }

    /**
     * Create a new Speed instance from a DecimetersPerMinutes
     *
     * @param value The unit as DecimetersPerMinutes to create a new Speed from.
     * @returns The new Speed instance.
     */
    public static FromDecimetersPerMinutes(value: number): Speed {
        return new Speed(value, SpeedUnits.DecimetersPerMinutes);
    }

    /**
     * Create a new Speed instance from a KilometersPerMinutes
     *
     * @param value The unit as KilometersPerMinutes to create a new Speed from.
     * @returns The new Speed instance.
     */
    public static FromKilometersPerMinutes(value: number): Speed {
        return new Speed(value, SpeedUnits.KilometersPerMinutes);
    }

    /**
     * Create a new Speed instance from a MillimetersPerHour
     *
     * @param value The unit as MillimetersPerHour to create a new Speed from.
     * @returns The new Speed instance.
     */
    public static FromMillimetersPerHour(value: number): Speed {
        return new Speed(value, SpeedUnits.MillimetersPerHour);
    }

    /**
     * Create a new Speed instance from a CentimetersPerHour
     *
     * @param value The unit as CentimetersPerHour to create a new Speed from.
     * @returns The new Speed instance.
     */
    public static FromCentimetersPerHour(value: number): Speed {
        return new Speed(value, SpeedUnits.CentimetersPerHour);
    }

    /**
     * Create a new Speed instance from a KilometersPerHour
     *
     * @param value The unit as KilometersPerHour to create a new Speed from.
     * @returns The new Speed instance.
     */
    public static FromKilometersPerHour(value: number): Speed {
        return new Speed(value, SpeedUnits.KilometersPerHour);
    }

    private convertFromBase(toUnit: SpeedUnits): number {
        switch (toUnit) {
                
            case SpeedUnits.MetersPerSecond:
            case SpeedUnits.MetersPerSecond:        
                return this.value;
            case SpeedUnits.MetersPerMinutes:
            case SpeedUnits.MetersPerMinutes:        
                return this.value * 60;
            case SpeedUnits.MetersPerHour:
            case SpeedUnits.MetersPerHour:        
                return this.value * 3600;
            case SpeedUnits.FeetPerSecond:
            case SpeedUnits.FeetPerSecond:        
                return this.value / 0.3048;
            case SpeedUnits.FeetPerMinute:
            case SpeedUnits.FeetPerMinute:        
                return this.value / 0.3048 * 60;
            case SpeedUnits.FeetPerHour:
            case SpeedUnits.FeetPerHour:        
                return this.value / 0.3048 * 3600;
            case SpeedUnits.UsSurveyFeetPerSecond:
            case SpeedUnits.UsSurveyFeetPerSecond:        
                return this.value * 3937 / 1200;
            case SpeedUnits.UsSurveyFeetPerMinute:
            case SpeedUnits.UsSurveyFeetPerMinute:        
                return (this.value * 3937 / 1200) * 60;
            case SpeedUnits.UsSurveyFeetPerHour:
            case SpeedUnits.UsSurveyFeetPerHour:        
                return (this.value * 3937 / 1200) * 3600;
            case SpeedUnits.InchesPerSecond:
            case SpeedUnits.InchesPerSecond:        
                return this.value / 2.54e-2;
            case SpeedUnits.InchesPerMinute:
            case SpeedUnits.InchesPerMinute:        
                return (this.value / 2.54e-2) * 60;
            case SpeedUnits.InchesPerHour:
            case SpeedUnits.InchesPerHour:        
                return (this.value / 2.54e-2) * 3600;
            case SpeedUnits.YardsPerSecond:
            case SpeedUnits.YardsPerSecond:        
                return this.value / 0.9144;
            case SpeedUnits.YardsPerMinute:
            case SpeedUnits.YardsPerMinute:        
                return this.value / 0.9144 * 60;
            case SpeedUnits.YardsPerHour:
            case SpeedUnits.YardsPerHour:        
                return this.value / 0.9144 * 3600;
            case SpeedUnits.Knots:
            case SpeedUnits.Knots:        
                return this.value / (1852.0 / 3600.0);
            case SpeedUnits.MilesPerHour:
            case SpeedUnits.MilesPerHour:        
                return this.value / 0.44704;
            case SpeedUnits.Mach:
                    
                return this.value / 340.29;
            case SpeedUnits.NanometersPerSecond:
            case SpeedUnits.NanometersPerSecond:        
                return (this.value) / 1e-9;
            case SpeedUnits.MicrometersPerSecond:
            case SpeedUnits.MicrometersPerSecond:        
                return (this.value) / 0.000001;
            case SpeedUnits.MillimetersPerSecond:
            case SpeedUnits.MillimetersPerSecond:        
                return (this.value) / 0.001;
            case SpeedUnits.CentimetersPerSecond:
            case SpeedUnits.CentimetersPerSecond:        
                return (this.value) / 0.01;
            case SpeedUnits.DecimetersPerSecond:
            case SpeedUnits.DecimetersPerSecond:        
                return (this.value) / 0.1;
            case SpeedUnits.KilometersPerSecond:
            case SpeedUnits.KilometersPerSecond:        
                return (this.value) / 1000;
            case SpeedUnits.NanometersPerMinutes:
            case SpeedUnits.NanometersPerMinutes:        
                return (this.value * 60) / 1e-9;
            case SpeedUnits.MicrometersPerMinutes:
            case SpeedUnits.MicrometersPerMinutes:        
                return (this.value * 60) / 0.000001;
            case SpeedUnits.MillimetersPerMinutes:
            case SpeedUnits.MillimetersPerMinutes:        
                return (this.value * 60) / 0.001;
            case SpeedUnits.CentimetersPerMinutes:
            case SpeedUnits.CentimetersPerMinutes:        
                return (this.value * 60) / 0.01;
            case SpeedUnits.DecimetersPerMinutes:
            case SpeedUnits.DecimetersPerMinutes:        
                return (this.value * 60) / 0.1;
            case SpeedUnits.KilometersPerMinutes:
            case SpeedUnits.KilometersPerMinutes:        
                return (this.value * 60) / 1000;
            case SpeedUnits.MillimetersPerHour:
            case SpeedUnits.MillimetersPerHour:        
                return (this.value * 3600) / 0.001;
            case SpeedUnits.CentimetersPerHour:
            case SpeedUnits.CentimetersPerHour:        
                return (this.value * 3600) / 0.01;
            case SpeedUnits.KilometersPerHour:
            case SpeedUnits.KilometersPerHour:        
                return (this.value * 3600) / 1000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: SpeedUnits): number {
        switch (fromUnit) {
                
            case SpeedUnits.MetersPerSecond:
            case SpeedUnits.MetersPerSecond:        
                return value;
            case SpeedUnits.MetersPerMinutes:
            case SpeedUnits.MetersPerMinutes:        
                return value / 60;
            case SpeedUnits.MetersPerHour:
            case SpeedUnits.MetersPerHour:        
                return value / 3600;
            case SpeedUnits.FeetPerSecond:
            case SpeedUnits.FeetPerSecond:        
                return value * 0.3048;
            case SpeedUnits.FeetPerMinute:
            case SpeedUnits.FeetPerMinute:        
                return value * 0.3048 / 60;
            case SpeedUnits.FeetPerHour:
            case SpeedUnits.FeetPerHour:        
                return value * 0.3048 / 3600;
            case SpeedUnits.UsSurveyFeetPerSecond:
            case SpeedUnits.UsSurveyFeetPerSecond:        
                return value * 1200 / 3937;
            case SpeedUnits.UsSurveyFeetPerMinute:
            case SpeedUnits.UsSurveyFeetPerMinute:        
                return (value * 1200 / 3937) / 60;
            case SpeedUnits.UsSurveyFeetPerHour:
            case SpeedUnits.UsSurveyFeetPerHour:        
                return (value * 1200 / 3937) / 3600;
            case SpeedUnits.InchesPerSecond:
            case SpeedUnits.InchesPerSecond:        
                return value * 2.54e-2;
            case SpeedUnits.InchesPerMinute:
            case SpeedUnits.InchesPerMinute:        
                return (value / 60) * 2.54e-2;
            case SpeedUnits.InchesPerHour:
            case SpeedUnits.InchesPerHour:        
                return (value / 3600) * 2.54e-2;
            case SpeedUnits.YardsPerSecond:
            case SpeedUnits.YardsPerSecond:        
                return value * 0.9144;
            case SpeedUnits.YardsPerMinute:
            case SpeedUnits.YardsPerMinute:        
                return value * 0.9144 / 60;
            case SpeedUnits.YardsPerHour:
            case SpeedUnits.YardsPerHour:        
                return value * 0.9144 / 3600;
            case SpeedUnits.Knots:
            case SpeedUnits.Knots:        
                return value * (1852.0 / 3600.0);
            case SpeedUnits.MilesPerHour:
            case SpeedUnits.MilesPerHour:        
                return value * 0.44704;
            case SpeedUnits.Mach:
                    
                return value * 340.29;
            case SpeedUnits.NanometersPerSecond:
            case SpeedUnits.NanometersPerSecond:        
                return (value) * 1e-9;
            case SpeedUnits.MicrometersPerSecond:
            case SpeedUnits.MicrometersPerSecond:        
                return (value) * 0.000001;
            case SpeedUnits.MillimetersPerSecond:
            case SpeedUnits.MillimetersPerSecond:        
                return (value) * 0.001;
            case SpeedUnits.CentimetersPerSecond:
            case SpeedUnits.CentimetersPerSecond:        
                return (value) * 0.01;
            case SpeedUnits.DecimetersPerSecond:
            case SpeedUnits.DecimetersPerSecond:        
                return (value) * 0.1;
            case SpeedUnits.KilometersPerSecond:
            case SpeedUnits.KilometersPerSecond:        
                return (value) * 1000;
            case SpeedUnits.NanometersPerMinutes:
            case SpeedUnits.NanometersPerMinutes:        
                return (value / 60) * 1e-9;
            case SpeedUnits.MicrometersPerMinutes:
            case SpeedUnits.MicrometersPerMinutes:        
                return (value / 60) * 0.000001;
            case SpeedUnits.MillimetersPerMinutes:
            case SpeedUnits.MillimetersPerMinutes:        
                return (value / 60) * 0.001;
            case SpeedUnits.CentimetersPerMinutes:
            case SpeedUnits.CentimetersPerMinutes:        
                return (value / 60) * 0.01;
            case SpeedUnits.DecimetersPerMinutes:
            case SpeedUnits.DecimetersPerMinutes:        
                return (value / 60) * 0.1;
            case SpeedUnits.KilometersPerMinutes:
            case SpeedUnits.KilometersPerMinutes:        
                return (value / 60) * 1000;
            case SpeedUnits.MillimetersPerHour:
            case SpeedUnits.MillimetersPerHour:        
                return (value / 3600) * 0.001;
            case SpeedUnits.CentimetersPerHour:
            case SpeedUnits.CentimetersPerHour:        
                return (value / 3600) * 0.01;
            case SpeedUnits.KilometersPerHour:
            case SpeedUnits.KilometersPerHour:        
                return (value / 3600) * 1000;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the Speed to string.
     * Note! the default format for Speed is MetersPerSecond.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the Speed.
     * @returns The string format of the Speed.
     */
    public toString(unit: SpeedUnits = SpeedUnits.MetersPerSecond): string {

        switch (unit) {
            
            case SpeedUnits.MetersPerSecond:
                return this.MetersPerSecond + ` m/s`;
            case SpeedUnits.MetersPerMinutes:
                return this.MetersPerMinutes + ` m/min`;
            case SpeedUnits.MetersPerHour:
                return this.MetersPerHour + ` m/h`;
            case SpeedUnits.FeetPerSecond:
                return this.FeetPerSecond + ` ft/s`;
            case SpeedUnits.FeetPerMinute:
                return this.FeetPerMinute + ` ft/min`;
            case SpeedUnits.FeetPerHour:
                return this.FeetPerHour + ` ft/h`;
            case SpeedUnits.UsSurveyFeetPerSecond:
                return this.UsSurveyFeetPerSecond + ` ftUS/s`;
            case SpeedUnits.UsSurveyFeetPerMinute:
                return this.UsSurveyFeetPerMinute + ` ftUS/min`;
            case SpeedUnits.UsSurveyFeetPerHour:
                return this.UsSurveyFeetPerHour + ` ftUS/h`;
            case SpeedUnits.InchesPerSecond:
                return this.InchesPerSecond + ` in/s`;
            case SpeedUnits.InchesPerMinute:
                return this.InchesPerMinute + ` in/min`;
            case SpeedUnits.InchesPerHour:
                return this.InchesPerHour + ` in/h`;
            case SpeedUnits.YardsPerSecond:
                return this.YardsPerSecond + ` yd/s`;
            case SpeedUnits.YardsPerMinute:
                return this.YardsPerMinute + ` yd/min`;
            case SpeedUnits.YardsPerHour:
                return this.YardsPerHour + ` yd/h`;
            case SpeedUnits.Knots:
                return this.Knots + ` kn`;
            case SpeedUnits.MilesPerHour:
                return this.MilesPerHour + ` mph`;
            case SpeedUnits.Mach:
                return this.Mach + ` M`;
            case SpeedUnits.NanometersPerSecond:
                return this.NanometersPerSecond + ` `;
            case SpeedUnits.MicrometersPerSecond:
                return this.MicrometersPerSecond + ` `;
            case SpeedUnits.MillimetersPerSecond:
                return this.MillimetersPerSecond + ` `;
            case SpeedUnits.CentimetersPerSecond:
                return this.CentimetersPerSecond + ` `;
            case SpeedUnits.DecimetersPerSecond:
                return this.DecimetersPerSecond + ` `;
            case SpeedUnits.KilometersPerSecond:
                return this.KilometersPerSecond + ` `;
            case SpeedUnits.NanometersPerMinutes:
                return this.NanometersPerMinutes + ` `;
            case SpeedUnits.MicrometersPerMinutes:
                return this.MicrometersPerMinutes + ` `;
            case SpeedUnits.MillimetersPerMinutes:
                return this.MillimetersPerMinutes + ` `;
            case SpeedUnits.CentimetersPerMinutes:
                return this.CentimetersPerMinutes + ` `;
            case SpeedUnits.DecimetersPerMinutes:
                return this.DecimetersPerMinutes + ` `;
            case SpeedUnits.KilometersPerMinutes:
                return this.KilometersPerMinutes + ` `;
            case SpeedUnits.MillimetersPerHour:
                return this.MillimetersPerHour + ` `;
            case SpeedUnits.CentimetersPerHour:
                return this.CentimetersPerHour + ` `;
            case SpeedUnits.KilometersPerHour:
                return this.KilometersPerHour + ` `;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get Speed unit abbreviation.
     * Note! the default abbreviation for Speed is MetersPerSecond.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the Speed.
     * @returns The abbreviation string of Speed.
     */
    public getUnitAbbreviation(unitAbbreviation: SpeedUnits = SpeedUnits.MetersPerSecond): string {

        switch (unitAbbreviation) {
            
            case SpeedUnits.MetersPerSecond:
                return `m/s`;
            case SpeedUnits.MetersPerMinutes:
                return `m/min`;
            case SpeedUnits.MetersPerHour:
                return `m/h`;
            case SpeedUnits.FeetPerSecond:
                return `ft/s`;
            case SpeedUnits.FeetPerMinute:
                return `ft/min`;
            case SpeedUnits.FeetPerHour:
                return `ft/h`;
            case SpeedUnits.UsSurveyFeetPerSecond:
                return `ftUS/s`;
            case SpeedUnits.UsSurveyFeetPerMinute:
                return `ftUS/min`;
            case SpeedUnits.UsSurveyFeetPerHour:
                return `ftUS/h`;
            case SpeedUnits.InchesPerSecond:
                return `in/s`;
            case SpeedUnits.InchesPerMinute:
                return `in/min`;
            case SpeedUnits.InchesPerHour:
                return `in/h`;
            case SpeedUnits.YardsPerSecond:
                return `yd/s`;
            case SpeedUnits.YardsPerMinute:
                return `yd/min`;
            case SpeedUnits.YardsPerHour:
                return `yd/h`;
            case SpeedUnits.Knots:
                return `kn`;
            case SpeedUnits.MilesPerHour:
                return `mph`;
            case SpeedUnits.Mach:
                return `M`;
            case SpeedUnits.NanometersPerSecond:
                return ``;
            case SpeedUnits.MicrometersPerSecond:
                return ``;
            case SpeedUnits.MillimetersPerSecond:
                return ``;
            case SpeedUnits.CentimetersPerSecond:
                return ``;
            case SpeedUnits.DecimetersPerSecond:
                return ``;
            case SpeedUnits.KilometersPerSecond:
                return ``;
            case SpeedUnits.NanometersPerMinutes:
                return ``;
            case SpeedUnits.MicrometersPerMinutes:
                return ``;
            case SpeedUnits.MillimetersPerMinutes:
                return ``;
            case SpeedUnits.CentimetersPerMinutes:
                return ``;
            case SpeedUnits.DecimetersPerMinutes:
                return ``;
            case SpeedUnits.KilometersPerMinutes:
                return ``;
            case SpeedUnits.MillimetersPerHour:
                return ``;
            case SpeedUnits.CentimetersPerHour:
                return ``;
            case SpeedUnits.KilometersPerHour:
                return ``;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given Speed are equals to the current Speed.
     * @param speed The other Speed.
     * @returns True if the given Speed are equal to the current Speed.
     */
    public equals(speed: Speed): boolean {
        return this.value === speed.BaseValue;
    }

    /**
     * Compare the given Speed against the current Speed.
     * @param speed The other Speed.
     * @returns 0 if they are equal, -1 if the current Speed is less then other, 1 if the current Speed is greater then other.
     */
    public compareTo(speed: Speed): number {

        if (this.value > speed.BaseValue)
            return 1;
        if (this.value < speed.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given Speed with the current Speed.
     * @param speed The other Speed.
     * @returns A new Speed instance with the results.
     */
    public add(speed: Speed): Speed {
        return new Speed(this.value + speed.BaseValue)
    }

    /**
     * Subtract the given Speed with the current Speed.
     * @param speed The other Speed.
     * @returns A new Speed instance with the results.
     */
    public subtract(speed: Speed): Speed {
        return new Speed(this.value - speed.BaseValue)
    }

    /**
     * Multiply the given Speed with the current Speed.
     * @param speed The other Speed.
     * @returns A new Speed instance with the results.
     */
    public multiply(speed: Speed): Speed {
        return new Speed(this.value * speed.BaseValue)
    }

    /**
     * Divide the given Speed with the current Speed.
     * @param speed The other Speed.
     * @returns A new Speed instance with the results.
     */
    public divide(speed: Speed): Speed {
        return new Speed(this.value / speed.BaseValue)
    }

    /**
     * Modulo the given Speed with the current Speed.
     * @param speed The other Speed.
     * @returns A new Speed instance with the results.
     */
    public modulo(speed: Speed): Speed {
        return new Speed(this.value % speed.BaseValue)
    }

    /**
     * Pow the given Speed with the current Speed.
     * @param speed The other Speed.
     * @returns A new Speed instance with the results.
     */
    public pow(speed: Speed): Speed {
        return new Speed(this.value ** speed.BaseValue)
    }
}
