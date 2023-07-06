/** SpecificEntropyUnits enumeration */
export enum SpecificEntropyUnits {
    /** */
    JoulesPerKilogramKelvin,
    /** */
    JoulesPerKilogramDegreeCelsius,
    /** */
    CaloriesPerGramKelvin,
    /** */
    BtusPerPoundFahrenheit,
    /** */
    KilojoulesPerKilogramKelvin,
    /** */
    MegajoulesPerKilogramKelvin,
    /** */
    KilojoulesPerKilogramDegreeCelsius,
    /** */
    MegajoulesPerKilogramDegreeCelsius,
    /** */
    KilocaloriesPerGramKelvin,
    /** */
    JoulePerKilogramKelvin,
    /** */
    JoulePerKilogramDegreeCelsius,
    /** */
    CaloriePerGramKelvin,
    /** */
    BtuPerPoundFahrenheit,
    /** */
    KilojoulePerKilogramKelvin,
    /** */
    MegajoulePerKilogramKelvin,
    /** */
    KilojoulePerKilogramDegreeCelsius,
    /** */
    MegajoulePerKilogramDegreeCelsius,
    /** */
    KilocaloriePerGramKelvin
}

/** Specific entropy is an amount of energy required to raise temperature of a substance by 1 Kelvin per unit mass. */
export class SpecificEntropy {
    private value: number;
    private joulesperkilogramkelvinLazy: number | null = null;
    private joulesperkilogramdegreecelsiusLazy: number | null = null;
    private caloriespergramkelvinLazy: number | null = null;
    private btusperpoundfahrenheitLazy: number | null = null;
    private kilojoulesperkilogramkelvinLazy: number | null = null;
    private megajoulesperkilogramkelvinLazy: number | null = null;
    private kilojoulesperkilogramdegreecelsiusLazy: number | null = null;
    private megajoulesperkilogramdegreecelsiusLazy: number | null = null;
    private kilocaloriespergramkelvinLazy: number | null = null;

    /**
     * Create a new SpecificEntropy.
     * @param value The value.
     * @param fromUnit The ‘SpecificEntropy’ unit to create from.
     * The default unit is JoulesPerKilogramKelvin
     */
    public constructor(value: number, fromUnit: SpecificEntropyUnits = SpecificEntropyUnits.JoulesPerKilogramKelvin) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of SpecificEntropy is JoulesPerKilogramKelvin.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get JoulesPerKilogramKelvin(): number {
        if(this.joulesperkilogramkelvinLazy !== null){
            return this.joulesperkilogramkelvinLazy;
        }
        return this.joulesperkilogramkelvinLazy = this.convertFromBase(SpecificEntropyUnits.JoulesPerKilogramKelvin);
    }

    /** */
    public get JoulesPerKilogramDegreeCelsius(): number {
        if(this.joulesperkilogramdegreecelsiusLazy !== null){
            return this.joulesperkilogramdegreecelsiusLazy;
        }
        return this.joulesperkilogramdegreecelsiusLazy = this.convertFromBase(SpecificEntropyUnits.JoulesPerKilogramDegreeCelsius);
    }

    /** */
    public get CaloriesPerGramKelvin(): number {
        if(this.caloriespergramkelvinLazy !== null){
            return this.caloriespergramkelvinLazy;
        }
        return this.caloriespergramkelvinLazy = this.convertFromBase(SpecificEntropyUnits.CaloriesPerGramKelvin);
    }

    /** */
    public get BtusPerPoundFahrenheit(): number {
        if(this.btusperpoundfahrenheitLazy !== null){
            return this.btusperpoundfahrenheitLazy;
        }
        return this.btusperpoundfahrenheitLazy = this.convertFromBase(SpecificEntropyUnits.BtusPerPoundFahrenheit);
    }

    /** */
    public get KilojoulesPerKilogramKelvin(): number {
        if(this.kilojoulesperkilogramkelvinLazy !== null){
            return this.kilojoulesperkilogramkelvinLazy;
        }
        return this.kilojoulesperkilogramkelvinLazy = this.convertFromBase(SpecificEntropyUnits.KilojoulesPerKilogramKelvin);
    }

    /** */
    public get MegajoulesPerKilogramKelvin(): number {
        if(this.megajoulesperkilogramkelvinLazy !== null){
            return this.megajoulesperkilogramkelvinLazy;
        }
        return this.megajoulesperkilogramkelvinLazy = this.convertFromBase(SpecificEntropyUnits.MegajoulesPerKilogramKelvin);
    }

    /** */
    public get KilojoulesPerKilogramDegreeCelsius(): number {
        if(this.kilojoulesperkilogramdegreecelsiusLazy !== null){
            return this.kilojoulesperkilogramdegreecelsiusLazy;
        }
        return this.kilojoulesperkilogramdegreecelsiusLazy = this.convertFromBase(SpecificEntropyUnits.KilojoulesPerKilogramDegreeCelsius);
    }

    /** */
    public get MegajoulesPerKilogramDegreeCelsius(): number {
        if(this.megajoulesperkilogramdegreecelsiusLazy !== null){
            return this.megajoulesperkilogramdegreecelsiusLazy;
        }
        return this.megajoulesperkilogramdegreecelsiusLazy = this.convertFromBase(SpecificEntropyUnits.MegajoulesPerKilogramDegreeCelsius);
    }

    /** */
    public get KilocaloriesPerGramKelvin(): number {
        if(this.kilocaloriespergramkelvinLazy !== null){
            return this.kilocaloriespergramkelvinLazy;
        }
        return this.kilocaloriespergramkelvinLazy = this.convertFromBase(SpecificEntropyUnits.KilocaloriesPerGramKelvin);
    }

    /**
     * Create a new SpecificEntropy instance from a JoulesPerKilogramKelvin
     *
     * @param value The unit as JoulesPerKilogramKelvin to create a new SpecificEntropy from.
     * @returns The new SpecificEntropy instance.
     */
    public static FromJoulesPerKilogramKelvin(value: number): SpecificEntropy {
        return new SpecificEntropy(value, SpecificEntropyUnits.JoulesPerKilogramKelvin);
    }

    /**
     * Create a new SpecificEntropy instance from a JoulesPerKilogramDegreeCelsius
     *
     * @param value The unit as JoulesPerKilogramDegreeCelsius to create a new SpecificEntropy from.
     * @returns The new SpecificEntropy instance.
     */
    public static FromJoulesPerKilogramDegreeCelsius(value: number): SpecificEntropy {
        return new SpecificEntropy(value, SpecificEntropyUnits.JoulesPerKilogramDegreeCelsius);
    }

    /**
     * Create a new SpecificEntropy instance from a CaloriesPerGramKelvin
     *
     * @param value The unit as CaloriesPerGramKelvin to create a new SpecificEntropy from.
     * @returns The new SpecificEntropy instance.
     */
    public static FromCaloriesPerGramKelvin(value: number): SpecificEntropy {
        return new SpecificEntropy(value, SpecificEntropyUnits.CaloriesPerGramKelvin);
    }

    /**
     * Create a new SpecificEntropy instance from a BtusPerPoundFahrenheit
     *
     * @param value The unit as BtusPerPoundFahrenheit to create a new SpecificEntropy from.
     * @returns The new SpecificEntropy instance.
     */
    public static FromBtusPerPoundFahrenheit(value: number): SpecificEntropy {
        return new SpecificEntropy(value, SpecificEntropyUnits.BtusPerPoundFahrenheit);
    }

    /**
     * Create a new SpecificEntropy instance from a KilojoulesPerKilogramKelvin
     *
     * @param value The unit as KilojoulesPerKilogramKelvin to create a new SpecificEntropy from.
     * @returns The new SpecificEntropy instance.
     */
    public static FromKilojoulesPerKilogramKelvin(value: number): SpecificEntropy {
        return new SpecificEntropy(value, SpecificEntropyUnits.KilojoulesPerKilogramKelvin);
    }

    /**
     * Create a new SpecificEntropy instance from a MegajoulesPerKilogramKelvin
     *
     * @param value The unit as MegajoulesPerKilogramKelvin to create a new SpecificEntropy from.
     * @returns The new SpecificEntropy instance.
     */
    public static FromMegajoulesPerKilogramKelvin(value: number): SpecificEntropy {
        return new SpecificEntropy(value, SpecificEntropyUnits.MegajoulesPerKilogramKelvin);
    }

    /**
     * Create a new SpecificEntropy instance from a KilojoulesPerKilogramDegreeCelsius
     *
     * @param value The unit as KilojoulesPerKilogramDegreeCelsius to create a new SpecificEntropy from.
     * @returns The new SpecificEntropy instance.
     */
    public static FromKilojoulesPerKilogramDegreeCelsius(value: number): SpecificEntropy {
        return new SpecificEntropy(value, SpecificEntropyUnits.KilojoulesPerKilogramDegreeCelsius);
    }

    /**
     * Create a new SpecificEntropy instance from a MegajoulesPerKilogramDegreeCelsius
     *
     * @param value The unit as MegajoulesPerKilogramDegreeCelsius to create a new SpecificEntropy from.
     * @returns The new SpecificEntropy instance.
     */
    public static FromMegajoulesPerKilogramDegreeCelsius(value: number): SpecificEntropy {
        return new SpecificEntropy(value, SpecificEntropyUnits.MegajoulesPerKilogramDegreeCelsius);
    }

    /**
     * Create a new SpecificEntropy instance from a KilocaloriesPerGramKelvin
     *
     * @param value The unit as KilocaloriesPerGramKelvin to create a new SpecificEntropy from.
     * @returns The new SpecificEntropy instance.
     */
    public static FromKilocaloriesPerGramKelvin(value: number): SpecificEntropy {
        return new SpecificEntropy(value, SpecificEntropyUnits.KilocaloriesPerGramKelvin);
    }

    private convertFromBase(toUnit: SpecificEntropyUnits): number {
        switch (toUnit) {
                
            case SpecificEntropyUnits.JoulesPerKilogramKelvin:
            case SpecificEntropyUnits.JoulesPerKilogramKelvin:        
                return this.value;
            case SpecificEntropyUnits.JoulesPerKilogramDegreeCelsius:
            case SpecificEntropyUnits.JoulesPerKilogramDegreeCelsius:        
                return this.value;
            case SpecificEntropyUnits.CaloriesPerGramKelvin:
            case SpecificEntropyUnits.CaloriesPerGramKelvin:        
                return this.value / 4.184e3;
            case SpecificEntropyUnits.BtusPerPoundFahrenheit:
            case SpecificEntropyUnits.BtusPerPoundFahrenheit:        
                return this.value / 4.1868e3;
            case SpecificEntropyUnits.KilojoulesPerKilogramKelvin:
            case SpecificEntropyUnits.KilojoulesPerKilogramKelvin:        
                return (this.value) / 1000;
            case SpecificEntropyUnits.MegajoulesPerKilogramKelvin:
            case SpecificEntropyUnits.MegajoulesPerKilogramKelvin:        
                return (this.value) / 1000000;
            case SpecificEntropyUnits.KilojoulesPerKilogramDegreeCelsius:
            case SpecificEntropyUnits.KilojoulesPerKilogramDegreeCelsius:        
                return (this.value) / 1000;
            case SpecificEntropyUnits.MegajoulesPerKilogramDegreeCelsius:
            case SpecificEntropyUnits.MegajoulesPerKilogramDegreeCelsius:        
                return (this.value) / 1000000;
            case SpecificEntropyUnits.KilocaloriesPerGramKelvin:
            case SpecificEntropyUnits.KilocaloriesPerGramKelvin:        
                return (this.value / 4.184e3) / 1000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: SpecificEntropyUnits): number {
        switch (fromUnit) {
                
            case SpecificEntropyUnits.JoulesPerKilogramKelvin:
            case SpecificEntropyUnits.JoulesPerKilogramKelvin:        
                return value;
            case SpecificEntropyUnits.JoulesPerKilogramDegreeCelsius:
            case SpecificEntropyUnits.JoulesPerKilogramDegreeCelsius:        
                return value;
            case SpecificEntropyUnits.CaloriesPerGramKelvin:
            case SpecificEntropyUnits.CaloriesPerGramKelvin:        
                return value * 4.184e3;
            case SpecificEntropyUnits.BtusPerPoundFahrenheit:
            case SpecificEntropyUnits.BtusPerPoundFahrenheit:        
                return value * 4.1868e3;
            case SpecificEntropyUnits.KilojoulesPerKilogramKelvin:
            case SpecificEntropyUnits.KilojoulesPerKilogramKelvin:        
                return (value) * 1000;
            case SpecificEntropyUnits.MegajoulesPerKilogramKelvin:
            case SpecificEntropyUnits.MegajoulesPerKilogramKelvin:        
                return (value) * 1000000;
            case SpecificEntropyUnits.KilojoulesPerKilogramDegreeCelsius:
            case SpecificEntropyUnits.KilojoulesPerKilogramDegreeCelsius:        
                return (value) * 1000;
            case SpecificEntropyUnits.MegajoulesPerKilogramDegreeCelsius:
            case SpecificEntropyUnits.MegajoulesPerKilogramDegreeCelsius:        
                return (value) * 1000000;
            case SpecificEntropyUnits.KilocaloriesPerGramKelvin:
            case SpecificEntropyUnits.KilocaloriesPerGramKelvin:        
                return (value * 4.184e3) * 1000;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the SpecificEntropy to string.
     * Note! the default format for SpecificEntropy is JoulesPerKilogramKelvin.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the SpecificEntropy.
     * @returns The string format of the SpecificEntropy.
     */
    public toString(unit: SpecificEntropyUnits = SpecificEntropyUnits.JoulesPerKilogramKelvin): string {

        switch (unit) {
            
            case SpecificEntropyUnits.JoulesPerKilogramKelvin:
                return this.JoulesPerKilogramKelvin + ` J/kg.K`;
            case SpecificEntropyUnits.JoulesPerKilogramDegreeCelsius:
                return this.JoulesPerKilogramDegreeCelsius + ` J/kg.C`;
            case SpecificEntropyUnits.CaloriesPerGramKelvin:
                return this.CaloriesPerGramKelvin + ` cal/g.K`;
            case SpecificEntropyUnits.BtusPerPoundFahrenheit:
                return this.BtusPerPoundFahrenheit + ` BTU/lb·°F`;
            case SpecificEntropyUnits.KilojoulesPerKilogramKelvin:
                return this.KilojoulesPerKilogramKelvin + ` `;
            case SpecificEntropyUnits.MegajoulesPerKilogramKelvin:
                return this.MegajoulesPerKilogramKelvin + ` `;
            case SpecificEntropyUnits.KilojoulesPerKilogramDegreeCelsius:
                return this.KilojoulesPerKilogramDegreeCelsius + ` `;
            case SpecificEntropyUnits.MegajoulesPerKilogramDegreeCelsius:
                return this.MegajoulesPerKilogramDegreeCelsius + ` `;
            case SpecificEntropyUnits.KilocaloriesPerGramKelvin:
                return this.KilocaloriesPerGramKelvin + ` `;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get SpecificEntropy unit abbreviation.
     * Note! the default abbreviation for SpecificEntropy is JoulesPerKilogramKelvin.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the SpecificEntropy.
     * @returns The abbreviation string of SpecificEntropy.
     */
    public getUnitAbbreviation(unitAbbreviation: SpecificEntropyUnits = SpecificEntropyUnits.JoulesPerKilogramKelvin): string {

        switch (unitAbbreviation) {
            
            case SpecificEntropyUnits.JoulesPerKilogramKelvin:
                return `J/kg.K`;
            case SpecificEntropyUnits.JoulesPerKilogramDegreeCelsius:
                return `J/kg.C`;
            case SpecificEntropyUnits.CaloriesPerGramKelvin:
                return `cal/g.K`;
            case SpecificEntropyUnits.BtusPerPoundFahrenheit:
                return `BTU/lb·°F`;
            case SpecificEntropyUnits.KilojoulesPerKilogramKelvin:
                return ``;
            case SpecificEntropyUnits.MegajoulesPerKilogramKelvin:
                return ``;
            case SpecificEntropyUnits.KilojoulesPerKilogramDegreeCelsius:
                return ``;
            case SpecificEntropyUnits.MegajoulesPerKilogramDegreeCelsius:
                return ``;
            case SpecificEntropyUnits.KilocaloriesPerGramKelvin:
                return ``;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given SpecificEntropy are equals to the current SpecificEntropy.
     * @param specificEntropy The other SpecificEntropy.
     * @returns True if the given SpecificEntropy are equal to the current SpecificEntropy.
     */
    public equals(specificEntropy: SpecificEntropy): boolean {
        return this.value === specificEntropy.BaseValue;
    }

    /**
     * Compare the given SpecificEntropy against the current SpecificEntropy.
     * @param specificEntropy The other SpecificEntropy.
     * @returns 0 if they are equal, -1 if the current SpecificEntropy is less then other, 1 if the current SpecificEntropy is greater then other.
     */
    public compareTo(specificEntropy: SpecificEntropy): number {

        if (this.value > specificEntropy.BaseValue)
            return 1;
        if (this.value < specificEntropy.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given SpecificEntropy with the current SpecificEntropy.
     * @param specificEntropy The other SpecificEntropy.
     * @returns A new SpecificEntropy instance with the results.
     */
    public add(specificEntropy: SpecificEntropy): SpecificEntropy {
        return new SpecificEntropy(this.value + specificEntropy.BaseValue)
    }

    /**
     * Subtract the given SpecificEntropy with the current SpecificEntropy.
     * @param specificEntropy The other SpecificEntropy.
     * @returns A new SpecificEntropy instance with the results.
     */
    public subtract(specificEntropy: SpecificEntropy): SpecificEntropy {
        return new SpecificEntropy(this.value - specificEntropy.BaseValue)
    }

    /**
     * Multiply the given SpecificEntropy with the current SpecificEntropy.
     * @param specificEntropy The other SpecificEntropy.
     * @returns A new SpecificEntropy instance with the results.
     */
    public multiply(specificEntropy: SpecificEntropy): SpecificEntropy {
        return new SpecificEntropy(this.value * specificEntropy.BaseValue)
    }

    /**
     * Divide the given SpecificEntropy with the current SpecificEntropy.
     * @param specificEntropy The other SpecificEntropy.
     * @returns A new SpecificEntropy instance with the results.
     */
    public divide(specificEntropy: SpecificEntropy): SpecificEntropy {
        return new SpecificEntropy(this.value / specificEntropy.BaseValue)
    }

    /**
     * Modulo the given SpecificEntropy with the current SpecificEntropy.
     * @param specificEntropy The other SpecificEntropy.
     * @returns A new SpecificEntropy instance with the results.
     */
    public modulo(specificEntropy: SpecificEntropy): SpecificEntropy {
        return new SpecificEntropy(this.value % specificEntropy.BaseValue)
    }

    /**
     * Pow the given SpecificEntropy with the current SpecificEntropy.
     * @param specificEntropy The other SpecificEntropy.
     * @returns A new SpecificEntropy instance with the results.
     */
    public pow(specificEntropy: SpecificEntropy): SpecificEntropy {
        return new SpecificEntropy(this.value ** specificEntropy.BaseValue)
    }
}
