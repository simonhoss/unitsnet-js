/** HeatTransferCoefficientUnits enumeration */
export enum HeatTransferCoefficientUnits {
    /** */
    WattsPerSquareMeterKelvin,
    /** */
    WattsPerSquareMeterCelsius,
    /** */
    BtusPerHourSquareFootDegreeFahrenheit,
    /** */
    CaloriesPerHourSquareMeterDegreeCelsius,
    /** */
    KilocaloriesPerHourSquareMeterDegreeCelsius,
    /** */
    WattPerSquareMeterKelvin,
    /** */
    WattPerSquareMeterCelsius,
    /** */
    BtuPerHourSquareFootDegreeFahrenheit,
    /** */
    CaloriePerHourSquareMeterDegreeCelsius,
    /** */
    KilocaloriePerHourSquareMeterDegreeCelsius
}

/** The heat transfer coefficient or film coefficient, or film effectiveness, in thermodynamics and in mechanics is the proportionality constant between the heat flux and the thermodynamic driving force for the flow of heat (i.e., the temperature difference, ΔT) */
export class HeatTransferCoefficient {
    private value: number;
    private wattspersquaremeterkelvinLazy: number | null = null;
    private wattspersquaremetercelsiusLazy: number | null = null;
    private btusperhoursquarefootdegreefahrenheitLazy: number | null = null;
    private caloriesperhoursquaremeterdegreecelsiusLazy: number | null = null;
    private kilocaloriesperhoursquaremeterdegreecelsiusLazy: number | null = null;

    /**
     * Create a new HeatTransferCoefficient.
     * @param value The value.
     * @param fromUnit The ‘HeatTransferCoefficient’ unit to create from.
     * The default unit is WattsPerSquareMeterKelvin
     */
    public constructor(value: number, fromUnit: HeatTransferCoefficientUnits = HeatTransferCoefficientUnits.WattsPerSquareMeterKelvin) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of HeatTransferCoefficient is WattsPerSquareMeterKelvin.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get WattsPerSquareMeterKelvin(): number {
        if(this.wattspersquaremeterkelvinLazy !== null){
            return this.wattspersquaremeterkelvinLazy;
        }
        return this.wattspersquaremeterkelvinLazy = this.convertFromBase(HeatTransferCoefficientUnits.WattsPerSquareMeterKelvin);
    }

    /** */
    public get WattsPerSquareMeterCelsius(): number {
        if(this.wattspersquaremetercelsiusLazy !== null){
            return this.wattspersquaremetercelsiusLazy;
        }
        return this.wattspersquaremetercelsiusLazy = this.convertFromBase(HeatTransferCoefficientUnits.WattsPerSquareMeterCelsius);
    }

    /** */
    public get BtusPerHourSquareFootDegreeFahrenheit(): number {
        if(this.btusperhoursquarefootdegreefahrenheitLazy !== null){
            return this.btusperhoursquarefootdegreefahrenheitLazy;
        }
        return this.btusperhoursquarefootdegreefahrenheitLazy = this.convertFromBase(HeatTransferCoefficientUnits.BtusPerHourSquareFootDegreeFahrenheit);
    }

    /** */
    public get CaloriesPerHourSquareMeterDegreeCelsius(): number {
        if(this.caloriesperhoursquaremeterdegreecelsiusLazy !== null){
            return this.caloriesperhoursquaremeterdegreecelsiusLazy;
        }
        return this.caloriesperhoursquaremeterdegreecelsiusLazy = this.convertFromBase(HeatTransferCoefficientUnits.CaloriesPerHourSquareMeterDegreeCelsius);
    }

    /** */
    public get KilocaloriesPerHourSquareMeterDegreeCelsius(): number {
        if(this.kilocaloriesperhoursquaremeterdegreecelsiusLazy !== null){
            return this.kilocaloriesperhoursquaremeterdegreecelsiusLazy;
        }
        return this.kilocaloriesperhoursquaremeterdegreecelsiusLazy = this.convertFromBase(HeatTransferCoefficientUnits.KilocaloriesPerHourSquareMeterDegreeCelsius);
    }

    /**
     * Create a new HeatTransferCoefficient instance from a WattsPerSquareMeterKelvin
     *
     * @param value The unit as WattsPerSquareMeterKelvin to create a new HeatTransferCoefficient from.
     * @returns The new HeatTransferCoefficient instance.
     */
    public static FromWattsPerSquareMeterKelvin(value: number): HeatTransferCoefficient {
        return new HeatTransferCoefficient(value, HeatTransferCoefficientUnits.WattsPerSquareMeterKelvin);
    }

    /**
     * Create a new HeatTransferCoefficient instance from a WattsPerSquareMeterCelsius
     *
     * @param value The unit as WattsPerSquareMeterCelsius to create a new HeatTransferCoefficient from.
     * @returns The new HeatTransferCoefficient instance.
     */
    public static FromWattsPerSquareMeterCelsius(value: number): HeatTransferCoefficient {
        return new HeatTransferCoefficient(value, HeatTransferCoefficientUnits.WattsPerSquareMeterCelsius);
    }

    /**
     * Create a new HeatTransferCoefficient instance from a BtusPerHourSquareFootDegreeFahrenheit
     *
     * @param value The unit as BtusPerHourSquareFootDegreeFahrenheit to create a new HeatTransferCoefficient from.
     * @returns The new HeatTransferCoefficient instance.
     */
    public static FromBtusPerHourSquareFootDegreeFahrenheit(value: number): HeatTransferCoefficient {
        return new HeatTransferCoefficient(value, HeatTransferCoefficientUnits.BtusPerHourSquareFootDegreeFahrenheit);
    }

    /**
     * Create a new HeatTransferCoefficient instance from a CaloriesPerHourSquareMeterDegreeCelsius
     *
     * @param value The unit as CaloriesPerHourSquareMeterDegreeCelsius to create a new HeatTransferCoefficient from.
     * @returns The new HeatTransferCoefficient instance.
     */
    public static FromCaloriesPerHourSquareMeterDegreeCelsius(value: number): HeatTransferCoefficient {
        return new HeatTransferCoefficient(value, HeatTransferCoefficientUnits.CaloriesPerHourSquareMeterDegreeCelsius);
    }

    /**
     * Create a new HeatTransferCoefficient instance from a KilocaloriesPerHourSquareMeterDegreeCelsius
     *
     * @param value The unit as KilocaloriesPerHourSquareMeterDegreeCelsius to create a new HeatTransferCoefficient from.
     * @returns The new HeatTransferCoefficient instance.
     */
    public static FromKilocaloriesPerHourSquareMeterDegreeCelsius(value: number): HeatTransferCoefficient {
        return new HeatTransferCoefficient(value, HeatTransferCoefficientUnits.KilocaloriesPerHourSquareMeterDegreeCelsius);
    }

    private convertFromBase(toUnit: HeatTransferCoefficientUnits): number {
        switch (toUnit) {
                
            case HeatTransferCoefficientUnits.WattsPerSquareMeterKelvin:
            case HeatTransferCoefficientUnits.WattsPerSquareMeterKelvin:        
                return this.value;
            case HeatTransferCoefficientUnits.WattsPerSquareMeterCelsius:
            case HeatTransferCoefficientUnits.WattsPerSquareMeterCelsius:        
                return this.value;
            case HeatTransferCoefficientUnits.BtusPerHourSquareFootDegreeFahrenheit:
            case HeatTransferCoefficientUnits.BtusPerHourSquareFootDegreeFahrenheit:        
                return this.value / 5.6782633411134878;
            case HeatTransferCoefficientUnits.CaloriesPerHourSquareMeterDegreeCelsius:
            case HeatTransferCoefficientUnits.CaloriesPerHourSquareMeterDegreeCelsius:        
                return (this.value / 4.1868) * 3600;
            case HeatTransferCoefficientUnits.KilocaloriesPerHourSquareMeterDegreeCelsius:
            case HeatTransferCoefficientUnits.KilocaloriesPerHourSquareMeterDegreeCelsius:        
                return ((this.value / 4.1868) * 3600) / 1000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: HeatTransferCoefficientUnits): number {
        switch (fromUnit) {
                
            case HeatTransferCoefficientUnits.WattsPerSquareMeterKelvin:
            case HeatTransferCoefficientUnits.WattsPerSquareMeterKelvin:        
                return value;
            case HeatTransferCoefficientUnits.WattsPerSquareMeterCelsius:
            case HeatTransferCoefficientUnits.WattsPerSquareMeterCelsius:        
                return value;
            case HeatTransferCoefficientUnits.BtusPerHourSquareFootDegreeFahrenheit:
            case HeatTransferCoefficientUnits.BtusPerHourSquareFootDegreeFahrenheit:        
                return value * 5.6782633411134878;
            case HeatTransferCoefficientUnits.CaloriesPerHourSquareMeterDegreeCelsius:
            case HeatTransferCoefficientUnits.CaloriesPerHourSquareMeterDegreeCelsius:        
                return (value * 4.1868) / 3600;
            case HeatTransferCoefficientUnits.KilocaloriesPerHourSquareMeterDegreeCelsius:
            case HeatTransferCoefficientUnits.KilocaloriesPerHourSquareMeterDegreeCelsius:        
                return ((value * 4.1868) / 3600) * 1000;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the HeatTransferCoefficient to string.
     * Note! the default format for HeatTransferCoefficient is WattsPerSquareMeterKelvin.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the HeatTransferCoefficient.
     * @returns The string format of the HeatTransferCoefficient.
     */
    public toString(unit: HeatTransferCoefficientUnits = HeatTransferCoefficientUnits.WattsPerSquareMeterKelvin): string {

        switch (unit) {
            
            case HeatTransferCoefficientUnits.WattsPerSquareMeterKelvin:
                return this.WattsPerSquareMeterKelvin + ` W/m²·K`;
            case HeatTransferCoefficientUnits.WattsPerSquareMeterCelsius:
                return this.WattsPerSquareMeterCelsius + ` W/m²·°C`;
            case HeatTransferCoefficientUnits.BtusPerHourSquareFootDegreeFahrenheit:
                return this.BtusPerHourSquareFootDegreeFahrenheit + ` Btu/h·ft²·°F`;
            case HeatTransferCoefficientUnits.CaloriesPerHourSquareMeterDegreeCelsius:
                return this.CaloriesPerHourSquareMeterDegreeCelsius + ` kcal/h·m²·°C`;
            case HeatTransferCoefficientUnits.KilocaloriesPerHourSquareMeterDegreeCelsius:
                return this.KilocaloriesPerHourSquareMeterDegreeCelsius + ` `;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get HeatTransferCoefficient unit abbreviation.
     * Note! the default abbreviation for HeatTransferCoefficient is WattsPerSquareMeterKelvin.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the HeatTransferCoefficient.
     * @returns The abbreviation string of HeatTransferCoefficient.
     */
    public getUnitAbbreviation(unitAbbreviation: HeatTransferCoefficientUnits = HeatTransferCoefficientUnits.WattsPerSquareMeterKelvin): string {

        switch (unitAbbreviation) {
            
            case HeatTransferCoefficientUnits.WattsPerSquareMeterKelvin:
                return `W/m²·K`;
            case HeatTransferCoefficientUnits.WattsPerSquareMeterCelsius:
                return `W/m²·°C`;
            case HeatTransferCoefficientUnits.BtusPerHourSquareFootDegreeFahrenheit:
                return `Btu/h·ft²·°F`;
            case HeatTransferCoefficientUnits.CaloriesPerHourSquareMeterDegreeCelsius:
                return `kcal/h·m²·°C`;
            case HeatTransferCoefficientUnits.KilocaloriesPerHourSquareMeterDegreeCelsius:
                return ``;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given HeatTransferCoefficient are equals to the current HeatTransferCoefficient.
     * @param heatTransferCoefficient The other HeatTransferCoefficient.
     * @returns True if the given HeatTransferCoefficient are equal to the current HeatTransferCoefficient.
     */
    public equals(heatTransferCoefficient: HeatTransferCoefficient): boolean {
        return this.value === heatTransferCoefficient.BaseValue;
    }

    /**
     * Compare the given HeatTransferCoefficient against the current HeatTransferCoefficient.
     * @param heatTransferCoefficient The other HeatTransferCoefficient.
     * @returns 0 if they are equal, -1 if the current HeatTransferCoefficient is less then other, 1 if the current HeatTransferCoefficient is greater then other.
     */
    public compareTo(heatTransferCoefficient: HeatTransferCoefficient): number {

        if (this.value > heatTransferCoefficient.BaseValue)
            return 1;
        if (this.value < heatTransferCoefficient.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given HeatTransferCoefficient with the current HeatTransferCoefficient.
     * @param heatTransferCoefficient The other HeatTransferCoefficient.
     * @returns A new HeatTransferCoefficient instance with the results.
     */
    public add(heatTransferCoefficient: HeatTransferCoefficient): HeatTransferCoefficient {
        return new HeatTransferCoefficient(this.value + heatTransferCoefficient.BaseValue)
    }

    /**
     * Subtract the given HeatTransferCoefficient with the current HeatTransferCoefficient.
     * @param heatTransferCoefficient The other HeatTransferCoefficient.
     * @returns A new HeatTransferCoefficient instance with the results.
     */
    public subtract(heatTransferCoefficient: HeatTransferCoefficient): HeatTransferCoefficient {
        return new HeatTransferCoefficient(this.value - heatTransferCoefficient.BaseValue)
    }

    /**
     * Multiply the given HeatTransferCoefficient with the current HeatTransferCoefficient.
     * @param heatTransferCoefficient The other HeatTransferCoefficient.
     * @returns A new HeatTransferCoefficient instance with the results.
     */
    public multiply(heatTransferCoefficient: HeatTransferCoefficient): HeatTransferCoefficient {
        return new HeatTransferCoefficient(this.value * heatTransferCoefficient.BaseValue)
    }

    /**
     * Divide the given HeatTransferCoefficient with the current HeatTransferCoefficient.
     * @param heatTransferCoefficient The other HeatTransferCoefficient.
     * @returns A new HeatTransferCoefficient instance with the results.
     */
    public divide(heatTransferCoefficient: HeatTransferCoefficient): HeatTransferCoefficient {
        return new HeatTransferCoefficient(this.value / heatTransferCoefficient.BaseValue)
    }

    /**
     * Modulo the given HeatTransferCoefficient with the current HeatTransferCoefficient.
     * @param heatTransferCoefficient The other HeatTransferCoefficient.
     * @returns A new HeatTransferCoefficient instance with the results.
     */
    public modulo(heatTransferCoefficient: HeatTransferCoefficient): HeatTransferCoefficient {
        return new HeatTransferCoefficient(this.value % heatTransferCoefficient.BaseValue)
    }

    /**
     * Pow the given HeatTransferCoefficient with the current HeatTransferCoefficient.
     * @param heatTransferCoefficient The other HeatTransferCoefficient.
     * @returns A new HeatTransferCoefficient instance with the results.
     */
    public pow(heatTransferCoefficient: HeatTransferCoefficient): HeatTransferCoefficient {
        return new HeatTransferCoefficient(this.value ** heatTransferCoefficient.BaseValue)
    }
}
