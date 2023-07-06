/** ReciprocalLengthUnits enumeration */
export enum ReciprocalLengthUnits {
    /** */
    InverseMeters,
    /** */
    InverseCentimeters,
    /** */
    InverseMillimeters,
    /** */
    InverseMiles,
    /** */
    InverseYards,
    /** */
    InverseFeet,
    /** */
    InverseUsSurveyFeet,
    /** */
    InverseInches,
    /** */
    InverseMils,
    /** */
    InverseMicroinches,
    /** */
    InverseMeter,
    /** */
    InverseCentimeter,
    /** */
    InverseMillimeter,
    /** */
    InverseMile,
    /** */
    InverseYard,
    /** */
    InverseFoot,
    /** */
    InverseUsSurveyFoot,
    /** */
    InverseInch,
    /** */
    InverseMil,
    /** */
    InverseMicroinch
}

/** Reciprocal (Inverse) Length is used in various fields of science and mathematics. It is defined as the inverse value of a length unit. */
export class ReciprocalLength {
    private value: number;
    private inversemetersLazy: number | null = null;
    private inversecentimetersLazy: number | null = null;
    private inversemillimetersLazy: number | null = null;
    private inversemilesLazy: number | null = null;
    private inverseyardsLazy: number | null = null;
    private inversefeetLazy: number | null = null;
    private inverseussurveyfeetLazy: number | null = null;
    private inverseinchesLazy: number | null = null;
    private inversemilsLazy: number | null = null;
    private inversemicroinchesLazy: number | null = null;

    /**
     * Create a new ReciprocalLength.
     * @param value The value.
     * @param fromUnit The ‘ReciprocalLength’ unit to create from.
     * The default unit is InverseMeters
     */
    public constructor(value: number, fromUnit: ReciprocalLengthUnits = ReciprocalLengthUnits.InverseMeters) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of ReciprocalLength is InverseMeters.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get InverseMeters(): number {
        if(this.inversemetersLazy !== null){
            return this.inversemetersLazy;
        }
        return this.inversemetersLazy = this.convertFromBase(ReciprocalLengthUnits.InverseMeters);
    }

    /** */
    public get InverseCentimeters(): number {
        if(this.inversecentimetersLazy !== null){
            return this.inversecentimetersLazy;
        }
        return this.inversecentimetersLazy = this.convertFromBase(ReciprocalLengthUnits.InverseCentimeters);
    }

    /** */
    public get InverseMillimeters(): number {
        if(this.inversemillimetersLazy !== null){
            return this.inversemillimetersLazy;
        }
        return this.inversemillimetersLazy = this.convertFromBase(ReciprocalLengthUnits.InverseMillimeters);
    }

    /** */
    public get InverseMiles(): number {
        if(this.inversemilesLazy !== null){
            return this.inversemilesLazy;
        }
        return this.inversemilesLazy = this.convertFromBase(ReciprocalLengthUnits.InverseMiles);
    }

    /** */
    public get InverseYards(): number {
        if(this.inverseyardsLazy !== null){
            return this.inverseyardsLazy;
        }
        return this.inverseyardsLazy = this.convertFromBase(ReciprocalLengthUnits.InverseYards);
    }

    /** */
    public get InverseFeet(): number {
        if(this.inversefeetLazy !== null){
            return this.inversefeetLazy;
        }
        return this.inversefeetLazy = this.convertFromBase(ReciprocalLengthUnits.InverseFeet);
    }

    /** */
    public get InverseUsSurveyFeet(): number {
        if(this.inverseussurveyfeetLazy !== null){
            return this.inverseussurveyfeetLazy;
        }
        return this.inverseussurveyfeetLazy = this.convertFromBase(ReciprocalLengthUnits.InverseUsSurveyFeet);
    }

    /** */
    public get InverseInches(): number {
        if(this.inverseinchesLazy !== null){
            return this.inverseinchesLazy;
        }
        return this.inverseinchesLazy = this.convertFromBase(ReciprocalLengthUnits.InverseInches);
    }

    /** */
    public get InverseMils(): number {
        if(this.inversemilsLazy !== null){
            return this.inversemilsLazy;
        }
        return this.inversemilsLazy = this.convertFromBase(ReciprocalLengthUnits.InverseMils);
    }

    /** */
    public get InverseMicroinches(): number {
        if(this.inversemicroinchesLazy !== null){
            return this.inversemicroinchesLazy;
        }
        return this.inversemicroinchesLazy = this.convertFromBase(ReciprocalLengthUnits.InverseMicroinches);
    }

    /**
     * Create a new ReciprocalLength instance from a InverseMeters
     *
     * @param value The unit as InverseMeters to create a new ReciprocalLength from.
     * @returns The new ReciprocalLength instance.
     */
    public static FromInverseMeters(value: number): ReciprocalLength {
        return new ReciprocalLength(value, ReciprocalLengthUnits.InverseMeters);
    }

    /**
     * Create a new ReciprocalLength instance from a InverseCentimeters
     *
     * @param value The unit as InverseCentimeters to create a new ReciprocalLength from.
     * @returns The new ReciprocalLength instance.
     */
    public static FromInverseCentimeters(value: number): ReciprocalLength {
        return new ReciprocalLength(value, ReciprocalLengthUnits.InverseCentimeters);
    }

    /**
     * Create a new ReciprocalLength instance from a InverseMillimeters
     *
     * @param value The unit as InverseMillimeters to create a new ReciprocalLength from.
     * @returns The new ReciprocalLength instance.
     */
    public static FromInverseMillimeters(value: number): ReciprocalLength {
        return new ReciprocalLength(value, ReciprocalLengthUnits.InverseMillimeters);
    }

    /**
     * Create a new ReciprocalLength instance from a InverseMiles
     *
     * @param value The unit as InverseMiles to create a new ReciprocalLength from.
     * @returns The new ReciprocalLength instance.
     */
    public static FromInverseMiles(value: number): ReciprocalLength {
        return new ReciprocalLength(value, ReciprocalLengthUnits.InverseMiles);
    }

    /**
     * Create a new ReciprocalLength instance from a InverseYards
     *
     * @param value The unit as InverseYards to create a new ReciprocalLength from.
     * @returns The new ReciprocalLength instance.
     */
    public static FromInverseYards(value: number): ReciprocalLength {
        return new ReciprocalLength(value, ReciprocalLengthUnits.InverseYards);
    }

    /**
     * Create a new ReciprocalLength instance from a InverseFeet
     *
     * @param value The unit as InverseFeet to create a new ReciprocalLength from.
     * @returns The new ReciprocalLength instance.
     */
    public static FromInverseFeet(value: number): ReciprocalLength {
        return new ReciprocalLength(value, ReciprocalLengthUnits.InverseFeet);
    }

    /**
     * Create a new ReciprocalLength instance from a InverseUsSurveyFeet
     *
     * @param value The unit as InverseUsSurveyFeet to create a new ReciprocalLength from.
     * @returns The new ReciprocalLength instance.
     */
    public static FromInverseUsSurveyFeet(value: number): ReciprocalLength {
        return new ReciprocalLength(value, ReciprocalLengthUnits.InverseUsSurveyFeet);
    }

    /**
     * Create a new ReciprocalLength instance from a InverseInches
     *
     * @param value The unit as InverseInches to create a new ReciprocalLength from.
     * @returns The new ReciprocalLength instance.
     */
    public static FromInverseInches(value: number): ReciprocalLength {
        return new ReciprocalLength(value, ReciprocalLengthUnits.InverseInches);
    }

    /**
     * Create a new ReciprocalLength instance from a InverseMils
     *
     * @param value The unit as InverseMils to create a new ReciprocalLength from.
     * @returns The new ReciprocalLength instance.
     */
    public static FromInverseMils(value: number): ReciprocalLength {
        return new ReciprocalLength(value, ReciprocalLengthUnits.InverseMils);
    }

    /**
     * Create a new ReciprocalLength instance from a InverseMicroinches
     *
     * @param value The unit as InverseMicroinches to create a new ReciprocalLength from.
     * @returns The new ReciprocalLength instance.
     */
    public static FromInverseMicroinches(value: number): ReciprocalLength {
        return new ReciprocalLength(value, ReciprocalLengthUnits.InverseMicroinches);
    }

    private convertFromBase(toUnit: ReciprocalLengthUnits): number {
        switch (toUnit) {
                
            case ReciprocalLengthUnits.InverseMeters:
            case ReciprocalLengthUnits.InverseMeters:        
                return this.value;
            case ReciprocalLengthUnits.InverseCentimeters:
            case ReciprocalLengthUnits.InverseCentimeters:        
                return this.value / 1e2;
            case ReciprocalLengthUnits.InverseMillimeters:
            case ReciprocalLengthUnits.InverseMillimeters:        
                return this.value / 1e3;
            case ReciprocalLengthUnits.InverseMiles:
            case ReciprocalLengthUnits.InverseMiles:        
                return this.value * 1609.344;
            case ReciprocalLengthUnits.InverseYards:
            case ReciprocalLengthUnits.InverseYards:        
                return this.value * 0.9144;
            case ReciprocalLengthUnits.InverseFeet:
            case ReciprocalLengthUnits.InverseFeet:        
                return this.value * 0.3048;
            case ReciprocalLengthUnits.InverseUsSurveyFeet:
            case ReciprocalLengthUnits.InverseUsSurveyFeet:        
                return this.value * 1200 / 3937;
            case ReciprocalLengthUnits.InverseInches:
            case ReciprocalLengthUnits.InverseInches:        
                return this.value * 2.54e-2;
            case ReciprocalLengthUnits.InverseMils:
            case ReciprocalLengthUnits.InverseMils:        
                return this.value * 2.54e-5;
            case ReciprocalLengthUnits.InverseMicroinches:
            case ReciprocalLengthUnits.InverseMicroinches:        
                return this.value * 2.54e-8;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: ReciprocalLengthUnits): number {
        switch (fromUnit) {
                
            case ReciprocalLengthUnits.InverseMeters:
            case ReciprocalLengthUnits.InverseMeters:        
                return value;
            case ReciprocalLengthUnits.InverseCentimeters:
            case ReciprocalLengthUnits.InverseCentimeters:        
                return value * 1e2;
            case ReciprocalLengthUnits.InverseMillimeters:
            case ReciprocalLengthUnits.InverseMillimeters:        
                return value * 1e3;
            case ReciprocalLengthUnits.InverseMiles:
            case ReciprocalLengthUnits.InverseMiles:        
                return value / 1609.344;
            case ReciprocalLengthUnits.InverseYards:
            case ReciprocalLengthUnits.InverseYards:        
                return value / 0.9144;
            case ReciprocalLengthUnits.InverseFeet:
            case ReciprocalLengthUnits.InverseFeet:        
                return value / 0.3048;
            case ReciprocalLengthUnits.InverseUsSurveyFeet:
            case ReciprocalLengthUnits.InverseUsSurveyFeet:        
                return value * 3937 / 1200;
            case ReciprocalLengthUnits.InverseInches:
            case ReciprocalLengthUnits.InverseInches:        
                return value / 2.54e-2;
            case ReciprocalLengthUnits.InverseMils:
            case ReciprocalLengthUnits.InverseMils:        
                return value / 2.54e-5;
            case ReciprocalLengthUnits.InverseMicroinches:
            case ReciprocalLengthUnits.InverseMicroinches:        
                return value / 2.54e-8;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the ReciprocalLength to string.
     * Note! the default format for ReciprocalLength is InverseMeters.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the ReciprocalLength.
     * @returns The string format of the ReciprocalLength.
     */
    public toString(unit: ReciprocalLengthUnits = ReciprocalLengthUnits.InverseMeters): string {

        switch (unit) {
            
            case ReciprocalLengthUnits.InverseMeters:
                return this.InverseMeters + ` m⁻¹`;
            case ReciprocalLengthUnits.InverseCentimeters:
                return this.InverseCentimeters + ` cm⁻¹`;
            case ReciprocalLengthUnits.InverseMillimeters:
                return this.InverseMillimeters + ` mm⁻¹`;
            case ReciprocalLengthUnits.InverseMiles:
                return this.InverseMiles + ` mi⁻¹`;
            case ReciprocalLengthUnits.InverseYards:
                return this.InverseYards + ` yd⁻¹`;
            case ReciprocalLengthUnits.InverseFeet:
                return this.InverseFeet + ` ft⁻¹`;
            case ReciprocalLengthUnits.InverseUsSurveyFeet:
                return this.InverseUsSurveyFeet + ` ftUS⁻¹`;
            case ReciprocalLengthUnits.InverseInches:
                return this.InverseInches + ` in⁻¹`;
            case ReciprocalLengthUnits.InverseMils:
                return this.InverseMils + ` mil⁻¹`;
            case ReciprocalLengthUnits.InverseMicroinches:
                return this.InverseMicroinches + ` µin⁻¹`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get ReciprocalLength unit abbreviation.
     * Note! the default abbreviation for ReciprocalLength is InverseMeters.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the ReciprocalLength.
     * @returns The abbreviation string of ReciprocalLength.
     */
    public getUnitAbbreviation(unitAbbreviation: ReciprocalLengthUnits = ReciprocalLengthUnits.InverseMeters): string {

        switch (unitAbbreviation) {
            
            case ReciprocalLengthUnits.InverseMeters:
                return `m⁻¹`;
            case ReciprocalLengthUnits.InverseCentimeters:
                return `cm⁻¹`;
            case ReciprocalLengthUnits.InverseMillimeters:
                return `mm⁻¹`;
            case ReciprocalLengthUnits.InverseMiles:
                return `mi⁻¹`;
            case ReciprocalLengthUnits.InverseYards:
                return `yd⁻¹`;
            case ReciprocalLengthUnits.InverseFeet:
                return `ft⁻¹`;
            case ReciprocalLengthUnits.InverseUsSurveyFeet:
                return `ftUS⁻¹`;
            case ReciprocalLengthUnits.InverseInches:
                return `in⁻¹`;
            case ReciprocalLengthUnits.InverseMils:
                return `mil⁻¹`;
            case ReciprocalLengthUnits.InverseMicroinches:
                return `µin⁻¹`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given ReciprocalLength are equals to the current ReciprocalLength.
     * @param reciprocalLength The other ReciprocalLength.
     * @returns True if the given ReciprocalLength are equal to the current ReciprocalLength.
     */
    public equals(reciprocalLength: ReciprocalLength): boolean {
        return this.value === reciprocalLength.BaseValue;
    }

    /**
     * Compare the given ReciprocalLength against the current ReciprocalLength.
     * @param reciprocalLength The other ReciprocalLength.
     * @returns 0 if they are equal, -1 if the current ReciprocalLength is less then other, 1 if the current ReciprocalLength is greater then other.
     */
    public compareTo(reciprocalLength: ReciprocalLength): number {

        if (this.value > reciprocalLength.BaseValue)
            return 1;
        if (this.value < reciprocalLength.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given ReciprocalLength with the current ReciprocalLength.
     * @param reciprocalLength The other ReciprocalLength.
     * @returns A new ReciprocalLength instance with the results.
     */
    public add(reciprocalLength: ReciprocalLength): ReciprocalLength {
        return new ReciprocalLength(this.value + reciprocalLength.BaseValue)
    }

    /**
     * Subtract the given ReciprocalLength with the current ReciprocalLength.
     * @param reciprocalLength The other ReciprocalLength.
     * @returns A new ReciprocalLength instance with the results.
     */
    public subtract(reciprocalLength: ReciprocalLength): ReciprocalLength {
        return new ReciprocalLength(this.value - reciprocalLength.BaseValue)
    }

    /**
     * Multiply the given ReciprocalLength with the current ReciprocalLength.
     * @param reciprocalLength The other ReciprocalLength.
     * @returns A new ReciprocalLength instance with the results.
     */
    public multiply(reciprocalLength: ReciprocalLength): ReciprocalLength {
        return new ReciprocalLength(this.value * reciprocalLength.BaseValue)
    }

    /**
     * Divide the given ReciprocalLength with the current ReciprocalLength.
     * @param reciprocalLength The other ReciprocalLength.
     * @returns A new ReciprocalLength instance with the results.
     */
    public divide(reciprocalLength: ReciprocalLength): ReciprocalLength {
        return new ReciprocalLength(this.value / reciprocalLength.BaseValue)
    }

    /**
     * Modulo the given ReciprocalLength with the current ReciprocalLength.
     * @param reciprocalLength The other ReciprocalLength.
     * @returns A new ReciprocalLength instance with the results.
     */
    public modulo(reciprocalLength: ReciprocalLength): ReciprocalLength {
        return new ReciprocalLength(this.value % reciprocalLength.BaseValue)
    }

    /**
     * Pow the given ReciprocalLength with the current ReciprocalLength.
     * @param reciprocalLength The other ReciprocalLength.
     * @returns A new ReciprocalLength instance with the results.
     */
    public pow(reciprocalLength: ReciprocalLength): ReciprocalLength {
        return new ReciprocalLength(this.value ** reciprocalLength.BaseValue)
    }
}
