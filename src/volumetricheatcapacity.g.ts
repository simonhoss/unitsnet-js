/** VolumetricHeatCapacityUnits enumeration */
export enum VolumetricHeatCapacityUnits {
    /** */
    JoulesPerCubicMeterKelvin,
    /** */
    JoulesPerCubicMeterDegreeCelsius,
    /** */
    CaloriesPerCubicCentimeterDegreeCelsius,
    /** */
    BtusPerCubicFootDegreeFahrenheit,
    /** */
    KilojoulesPerCubicMeterKelvin,
    /** */
    MegajoulesPerCubicMeterKelvin,
    /** */
    KilojoulesPerCubicMeterDegreeCelsius,
    /** */
    MegajoulesPerCubicMeterDegreeCelsius,
    /** */
    KilocaloriesPerCubicCentimeterDegreeCelsius,
    /** */
    JoulePerCubicMeterKelvin,
    /** */
    JoulePerCubicMeterDegreeCelsius,
    /** */
    CaloriePerCubicCentimeterDegreeCelsius,
    /** */
    BtuPerCubicFootDegreeFahrenheit,
    /** */
    KilojoulePerCubicMeterKelvin,
    /** */
    MegajoulePerCubicMeterKelvin,
    /** */
    KilojoulePerCubicMeterDegreeCelsius,
    /** */
    MegajoulePerCubicMeterDegreeCelsius,
    /** */
    KilocaloriePerCubicCentimeterDegreeCelsius
}

/** The volumetric heat capacity is the amount of energy that must be added, in the form of heat, to one unit of volume of the material in order to cause an increase of one unit in its temperature. */
export class VolumetricHeatCapacity {
    private value: number;
    private joulespercubicmeterkelvinLazy: number | null = null;
    private joulespercubicmeterdegreecelsiusLazy: number | null = null;
    private caloriespercubiccentimeterdegreecelsiusLazy: number | null = null;
    private btuspercubicfootdegreefahrenheitLazy: number | null = null;
    private kilojoulespercubicmeterkelvinLazy: number | null = null;
    private megajoulespercubicmeterkelvinLazy: number | null = null;
    private kilojoulespercubicmeterdegreecelsiusLazy: number | null = null;
    private megajoulespercubicmeterdegreecelsiusLazy: number | null = null;
    private kilocaloriespercubiccentimeterdegreecelsiusLazy: number | null = null;

    /**
     * Create a new VolumetricHeatCapacity.
     * @param value The value.
     * @param fromUnit The ‘VolumetricHeatCapacity’ unit to create from.
     * The default unit is JoulesPerCubicMeterKelvin
     */
    public constructor(value: number, fromUnit: VolumetricHeatCapacityUnits = VolumetricHeatCapacityUnits.JoulesPerCubicMeterKelvin) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of VolumetricHeatCapacity is JoulesPerCubicMeterKelvin.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get JoulesPerCubicMeterKelvin(): number {
        if(this.joulespercubicmeterkelvinLazy !== null){
            return this.joulespercubicmeterkelvinLazy;
        }
        return this.joulespercubicmeterkelvinLazy = this.convertFromBase(VolumetricHeatCapacityUnits.JoulesPerCubicMeterKelvin);
    }

    /** */
    public get JoulesPerCubicMeterDegreeCelsius(): number {
        if(this.joulespercubicmeterdegreecelsiusLazy !== null){
            return this.joulespercubicmeterdegreecelsiusLazy;
        }
        return this.joulespercubicmeterdegreecelsiusLazy = this.convertFromBase(VolumetricHeatCapacityUnits.JoulesPerCubicMeterDegreeCelsius);
    }

    /** */
    public get CaloriesPerCubicCentimeterDegreeCelsius(): number {
        if(this.caloriespercubiccentimeterdegreecelsiusLazy !== null){
            return this.caloriespercubiccentimeterdegreecelsiusLazy;
        }
        return this.caloriespercubiccentimeterdegreecelsiusLazy = this.convertFromBase(VolumetricHeatCapacityUnits.CaloriesPerCubicCentimeterDegreeCelsius);
    }

    /** */
    public get BtusPerCubicFootDegreeFahrenheit(): number {
        if(this.btuspercubicfootdegreefahrenheitLazy !== null){
            return this.btuspercubicfootdegreefahrenheitLazy;
        }
        return this.btuspercubicfootdegreefahrenheitLazy = this.convertFromBase(VolumetricHeatCapacityUnits.BtusPerCubicFootDegreeFahrenheit);
    }

    /** */
    public get KilojoulesPerCubicMeterKelvin(): number {
        if(this.kilojoulespercubicmeterkelvinLazy !== null){
            return this.kilojoulespercubicmeterkelvinLazy;
        }
        return this.kilojoulespercubicmeterkelvinLazy = this.convertFromBase(VolumetricHeatCapacityUnits.KilojoulesPerCubicMeterKelvin);
    }

    /** */
    public get MegajoulesPerCubicMeterKelvin(): number {
        if(this.megajoulespercubicmeterkelvinLazy !== null){
            return this.megajoulespercubicmeterkelvinLazy;
        }
        return this.megajoulespercubicmeterkelvinLazy = this.convertFromBase(VolumetricHeatCapacityUnits.MegajoulesPerCubicMeterKelvin);
    }

    /** */
    public get KilojoulesPerCubicMeterDegreeCelsius(): number {
        if(this.kilojoulespercubicmeterdegreecelsiusLazy !== null){
            return this.kilojoulespercubicmeterdegreecelsiusLazy;
        }
        return this.kilojoulespercubicmeterdegreecelsiusLazy = this.convertFromBase(VolumetricHeatCapacityUnits.KilojoulesPerCubicMeterDegreeCelsius);
    }

    /** */
    public get MegajoulesPerCubicMeterDegreeCelsius(): number {
        if(this.megajoulespercubicmeterdegreecelsiusLazy !== null){
            return this.megajoulespercubicmeterdegreecelsiusLazy;
        }
        return this.megajoulespercubicmeterdegreecelsiusLazy = this.convertFromBase(VolumetricHeatCapacityUnits.MegajoulesPerCubicMeterDegreeCelsius);
    }

    /** */
    public get KilocaloriesPerCubicCentimeterDegreeCelsius(): number {
        if(this.kilocaloriespercubiccentimeterdegreecelsiusLazy !== null){
            return this.kilocaloriespercubiccentimeterdegreecelsiusLazy;
        }
        return this.kilocaloriespercubiccentimeterdegreecelsiusLazy = this.convertFromBase(VolumetricHeatCapacityUnits.KilocaloriesPerCubicCentimeterDegreeCelsius);
    }

    /**
     * Create a new VolumetricHeatCapacity instance from a JoulesPerCubicMeterKelvin
     *
     * @param value The unit as JoulesPerCubicMeterKelvin to create a new VolumetricHeatCapacity from.
     * @returns The new VolumetricHeatCapacity instance.
     */
    public static FromJoulesPerCubicMeterKelvin(value: number): VolumetricHeatCapacity {
        return new VolumetricHeatCapacity(value, VolumetricHeatCapacityUnits.JoulesPerCubicMeterKelvin);
    }

    /**
     * Create a new VolumetricHeatCapacity instance from a JoulesPerCubicMeterDegreeCelsius
     *
     * @param value The unit as JoulesPerCubicMeterDegreeCelsius to create a new VolumetricHeatCapacity from.
     * @returns The new VolumetricHeatCapacity instance.
     */
    public static FromJoulesPerCubicMeterDegreeCelsius(value: number): VolumetricHeatCapacity {
        return new VolumetricHeatCapacity(value, VolumetricHeatCapacityUnits.JoulesPerCubicMeterDegreeCelsius);
    }

    /**
     * Create a new VolumetricHeatCapacity instance from a CaloriesPerCubicCentimeterDegreeCelsius
     *
     * @param value The unit as CaloriesPerCubicCentimeterDegreeCelsius to create a new VolumetricHeatCapacity from.
     * @returns The new VolumetricHeatCapacity instance.
     */
    public static FromCaloriesPerCubicCentimeterDegreeCelsius(value: number): VolumetricHeatCapacity {
        return new VolumetricHeatCapacity(value, VolumetricHeatCapacityUnits.CaloriesPerCubicCentimeterDegreeCelsius);
    }

    /**
     * Create a new VolumetricHeatCapacity instance from a BtusPerCubicFootDegreeFahrenheit
     *
     * @param value The unit as BtusPerCubicFootDegreeFahrenheit to create a new VolumetricHeatCapacity from.
     * @returns The new VolumetricHeatCapacity instance.
     */
    public static FromBtusPerCubicFootDegreeFahrenheit(value: number): VolumetricHeatCapacity {
        return new VolumetricHeatCapacity(value, VolumetricHeatCapacityUnits.BtusPerCubicFootDegreeFahrenheit);
    }

    /**
     * Create a new VolumetricHeatCapacity instance from a KilojoulesPerCubicMeterKelvin
     *
     * @param value The unit as KilojoulesPerCubicMeterKelvin to create a new VolumetricHeatCapacity from.
     * @returns The new VolumetricHeatCapacity instance.
     */
    public static FromKilojoulesPerCubicMeterKelvin(value: number): VolumetricHeatCapacity {
        return new VolumetricHeatCapacity(value, VolumetricHeatCapacityUnits.KilojoulesPerCubicMeterKelvin);
    }

    /**
     * Create a new VolumetricHeatCapacity instance from a MegajoulesPerCubicMeterKelvin
     *
     * @param value The unit as MegajoulesPerCubicMeterKelvin to create a new VolumetricHeatCapacity from.
     * @returns The new VolumetricHeatCapacity instance.
     */
    public static FromMegajoulesPerCubicMeterKelvin(value: number): VolumetricHeatCapacity {
        return new VolumetricHeatCapacity(value, VolumetricHeatCapacityUnits.MegajoulesPerCubicMeterKelvin);
    }

    /**
     * Create a new VolumetricHeatCapacity instance from a KilojoulesPerCubicMeterDegreeCelsius
     *
     * @param value The unit as KilojoulesPerCubicMeterDegreeCelsius to create a new VolumetricHeatCapacity from.
     * @returns The new VolumetricHeatCapacity instance.
     */
    public static FromKilojoulesPerCubicMeterDegreeCelsius(value: number): VolumetricHeatCapacity {
        return new VolumetricHeatCapacity(value, VolumetricHeatCapacityUnits.KilojoulesPerCubicMeterDegreeCelsius);
    }

    /**
     * Create a new VolumetricHeatCapacity instance from a MegajoulesPerCubicMeterDegreeCelsius
     *
     * @param value The unit as MegajoulesPerCubicMeterDegreeCelsius to create a new VolumetricHeatCapacity from.
     * @returns The new VolumetricHeatCapacity instance.
     */
    public static FromMegajoulesPerCubicMeterDegreeCelsius(value: number): VolumetricHeatCapacity {
        return new VolumetricHeatCapacity(value, VolumetricHeatCapacityUnits.MegajoulesPerCubicMeterDegreeCelsius);
    }

    /**
     * Create a new VolumetricHeatCapacity instance from a KilocaloriesPerCubicCentimeterDegreeCelsius
     *
     * @param value The unit as KilocaloriesPerCubicCentimeterDegreeCelsius to create a new VolumetricHeatCapacity from.
     * @returns The new VolumetricHeatCapacity instance.
     */
    public static FromKilocaloriesPerCubicCentimeterDegreeCelsius(value: number): VolumetricHeatCapacity {
        return new VolumetricHeatCapacity(value, VolumetricHeatCapacityUnits.KilocaloriesPerCubicCentimeterDegreeCelsius);
    }

    private convertFromBase(toUnit: VolumetricHeatCapacityUnits): number {
        switch (toUnit) {
                
            case VolumetricHeatCapacityUnits.JoulesPerCubicMeterKelvin:
            case VolumetricHeatCapacityUnits.JoulesPerCubicMeterKelvin:        
                return this.value;
            case VolumetricHeatCapacityUnits.JoulesPerCubicMeterDegreeCelsius:
            case VolumetricHeatCapacityUnits.JoulesPerCubicMeterDegreeCelsius:        
                return this.value;
            case VolumetricHeatCapacityUnits.CaloriesPerCubicCentimeterDegreeCelsius:
            case VolumetricHeatCapacityUnits.CaloriesPerCubicCentimeterDegreeCelsius:        
                return this.value * 2.388459e-7;
            case VolumetricHeatCapacityUnits.BtusPerCubicFootDegreeFahrenheit:
            case VolumetricHeatCapacityUnits.BtusPerCubicFootDegreeFahrenheit:        
                return this.value * 1.4910660e-5;
            case VolumetricHeatCapacityUnits.KilojoulesPerCubicMeterKelvin:
            case VolumetricHeatCapacityUnits.KilojoulesPerCubicMeterKelvin:        
                return (this.value) / 1000;
            case VolumetricHeatCapacityUnits.MegajoulesPerCubicMeterKelvin:
            case VolumetricHeatCapacityUnits.MegajoulesPerCubicMeterKelvin:        
                return (this.value) / 1000000;
            case VolumetricHeatCapacityUnits.KilojoulesPerCubicMeterDegreeCelsius:
            case VolumetricHeatCapacityUnits.KilojoulesPerCubicMeterDegreeCelsius:        
                return (this.value) / 1000;
            case VolumetricHeatCapacityUnits.MegajoulesPerCubicMeterDegreeCelsius:
            case VolumetricHeatCapacityUnits.MegajoulesPerCubicMeterDegreeCelsius:        
                return (this.value) / 1000000;
            case VolumetricHeatCapacityUnits.KilocaloriesPerCubicCentimeterDegreeCelsius:
            case VolumetricHeatCapacityUnits.KilocaloriesPerCubicCentimeterDegreeCelsius:        
                return (this.value * 2.388459e-7) / 1000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: VolumetricHeatCapacityUnits): number {
        switch (fromUnit) {
                
            case VolumetricHeatCapacityUnits.JoulesPerCubicMeterKelvin:
            case VolumetricHeatCapacityUnits.JoulesPerCubicMeterKelvin:        
                return value;
            case VolumetricHeatCapacityUnits.JoulesPerCubicMeterDegreeCelsius:
            case VolumetricHeatCapacityUnits.JoulesPerCubicMeterDegreeCelsius:        
                return value;
            case VolumetricHeatCapacityUnits.CaloriesPerCubicCentimeterDegreeCelsius:
            case VolumetricHeatCapacityUnits.CaloriesPerCubicCentimeterDegreeCelsius:        
                return value / 2.388459e-7;
            case VolumetricHeatCapacityUnits.BtusPerCubicFootDegreeFahrenheit:
            case VolumetricHeatCapacityUnits.BtusPerCubicFootDegreeFahrenheit:        
                return value / 1.4910660e-5;
            case VolumetricHeatCapacityUnits.KilojoulesPerCubicMeterKelvin:
            case VolumetricHeatCapacityUnits.KilojoulesPerCubicMeterKelvin:        
                return (value) * 1000;
            case VolumetricHeatCapacityUnits.MegajoulesPerCubicMeterKelvin:
            case VolumetricHeatCapacityUnits.MegajoulesPerCubicMeterKelvin:        
                return (value) * 1000000;
            case VolumetricHeatCapacityUnits.KilojoulesPerCubicMeterDegreeCelsius:
            case VolumetricHeatCapacityUnits.KilojoulesPerCubicMeterDegreeCelsius:        
                return (value) * 1000;
            case VolumetricHeatCapacityUnits.MegajoulesPerCubicMeterDegreeCelsius:
            case VolumetricHeatCapacityUnits.MegajoulesPerCubicMeterDegreeCelsius:        
                return (value) * 1000000;
            case VolumetricHeatCapacityUnits.KilocaloriesPerCubicCentimeterDegreeCelsius:
            case VolumetricHeatCapacityUnits.KilocaloriesPerCubicCentimeterDegreeCelsius:        
                return (value / 2.388459e-7) * 1000;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the VolumetricHeatCapacity to string.
     * Note! the default format for VolumetricHeatCapacity is JoulesPerCubicMeterKelvin.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the VolumetricHeatCapacity.
     * @returns The string format of the VolumetricHeatCapacity.
     */
    public toString(unit: VolumetricHeatCapacityUnits = VolumetricHeatCapacityUnits.JoulesPerCubicMeterKelvin): string {

        switch (unit) {
            
            case VolumetricHeatCapacityUnits.JoulesPerCubicMeterKelvin:
                return this.JoulesPerCubicMeterKelvin + ` J/m³·K`;
            case VolumetricHeatCapacityUnits.JoulesPerCubicMeterDegreeCelsius:
                return this.JoulesPerCubicMeterDegreeCelsius + ` J/m³·°C`;
            case VolumetricHeatCapacityUnits.CaloriesPerCubicCentimeterDegreeCelsius:
                return this.CaloriesPerCubicCentimeterDegreeCelsius + ` cal/cm³·°C`;
            case VolumetricHeatCapacityUnits.BtusPerCubicFootDegreeFahrenheit:
                return this.BtusPerCubicFootDegreeFahrenheit + ` BTU/ft³·°F`;
            case VolumetricHeatCapacityUnits.KilojoulesPerCubicMeterKelvin:
                return this.KilojoulesPerCubicMeterKelvin + ` `;
            case VolumetricHeatCapacityUnits.MegajoulesPerCubicMeterKelvin:
                return this.MegajoulesPerCubicMeterKelvin + ` `;
            case VolumetricHeatCapacityUnits.KilojoulesPerCubicMeterDegreeCelsius:
                return this.KilojoulesPerCubicMeterDegreeCelsius + ` `;
            case VolumetricHeatCapacityUnits.MegajoulesPerCubicMeterDegreeCelsius:
                return this.MegajoulesPerCubicMeterDegreeCelsius + ` `;
            case VolumetricHeatCapacityUnits.KilocaloriesPerCubicCentimeterDegreeCelsius:
                return this.KilocaloriesPerCubicCentimeterDegreeCelsius + ` `;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get VolumetricHeatCapacity unit abbreviation.
     * Note! the default abbreviation for VolumetricHeatCapacity is JoulesPerCubicMeterKelvin.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the VolumetricHeatCapacity.
     * @returns The abbreviation string of VolumetricHeatCapacity.
     */
    public getUnitAbbreviation(unitAbbreviation: VolumetricHeatCapacityUnits = VolumetricHeatCapacityUnits.JoulesPerCubicMeterKelvin): string {

        switch (unitAbbreviation) {
            
            case VolumetricHeatCapacityUnits.JoulesPerCubicMeterKelvin:
                return `J/m³·K`;
            case VolumetricHeatCapacityUnits.JoulesPerCubicMeterDegreeCelsius:
                return `J/m³·°C`;
            case VolumetricHeatCapacityUnits.CaloriesPerCubicCentimeterDegreeCelsius:
                return `cal/cm³·°C`;
            case VolumetricHeatCapacityUnits.BtusPerCubicFootDegreeFahrenheit:
                return `BTU/ft³·°F`;
            case VolumetricHeatCapacityUnits.KilojoulesPerCubicMeterKelvin:
                return ``;
            case VolumetricHeatCapacityUnits.MegajoulesPerCubicMeterKelvin:
                return ``;
            case VolumetricHeatCapacityUnits.KilojoulesPerCubicMeterDegreeCelsius:
                return ``;
            case VolumetricHeatCapacityUnits.MegajoulesPerCubicMeterDegreeCelsius:
                return ``;
            case VolumetricHeatCapacityUnits.KilocaloriesPerCubicCentimeterDegreeCelsius:
                return ``;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given VolumetricHeatCapacity are equals to the current VolumetricHeatCapacity.
     * @param volumetricHeatCapacity The other VolumetricHeatCapacity.
     * @returns True if the given VolumetricHeatCapacity are equal to the current VolumetricHeatCapacity.
     */
    public equals(volumetricHeatCapacity: VolumetricHeatCapacity): boolean {
        return this.value === volumetricHeatCapacity.BaseValue;
    }

    /**
     * Compare the given VolumetricHeatCapacity against the current VolumetricHeatCapacity.
     * @param volumetricHeatCapacity The other VolumetricHeatCapacity.
     * @returns 0 if they are equal, -1 if the current VolumetricHeatCapacity is less then other, 1 if the current VolumetricHeatCapacity is greater then other.
     */
    public compareTo(volumetricHeatCapacity: VolumetricHeatCapacity): number {

        if (this.value > volumetricHeatCapacity.BaseValue)
            return 1;
        if (this.value < volumetricHeatCapacity.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given VolumetricHeatCapacity with the current VolumetricHeatCapacity.
     * @param volumetricHeatCapacity The other VolumetricHeatCapacity.
     * @returns A new VolumetricHeatCapacity instance with the results.
     */
    public add(volumetricHeatCapacity: VolumetricHeatCapacity): VolumetricHeatCapacity {
        return new VolumetricHeatCapacity(this.value + volumetricHeatCapacity.BaseValue)
    }

    /**
     * Subtract the given VolumetricHeatCapacity with the current VolumetricHeatCapacity.
     * @param volumetricHeatCapacity The other VolumetricHeatCapacity.
     * @returns A new VolumetricHeatCapacity instance with the results.
     */
    public subtract(volumetricHeatCapacity: VolumetricHeatCapacity): VolumetricHeatCapacity {
        return new VolumetricHeatCapacity(this.value - volumetricHeatCapacity.BaseValue)
    }

    /**
     * Multiply the given VolumetricHeatCapacity with the current VolumetricHeatCapacity.
     * @param volumetricHeatCapacity The other VolumetricHeatCapacity.
     * @returns A new VolumetricHeatCapacity instance with the results.
     */
    public multiply(volumetricHeatCapacity: VolumetricHeatCapacity): VolumetricHeatCapacity {
        return new VolumetricHeatCapacity(this.value * volumetricHeatCapacity.BaseValue)
    }

    /**
     * Divide the given VolumetricHeatCapacity with the current VolumetricHeatCapacity.
     * @param volumetricHeatCapacity The other VolumetricHeatCapacity.
     * @returns A new VolumetricHeatCapacity instance with the results.
     */
    public divide(volumetricHeatCapacity: VolumetricHeatCapacity): VolumetricHeatCapacity {
        return new VolumetricHeatCapacity(this.value / volumetricHeatCapacity.BaseValue)
    }

    /**
     * Modulo the given VolumetricHeatCapacity with the current VolumetricHeatCapacity.
     * @param volumetricHeatCapacity The other VolumetricHeatCapacity.
     * @returns A new VolumetricHeatCapacity instance with the results.
     */
    public modulo(volumetricHeatCapacity: VolumetricHeatCapacity): VolumetricHeatCapacity {
        return new VolumetricHeatCapacity(this.value % volumetricHeatCapacity.BaseValue)
    }

    /**
     * Pow the given VolumetricHeatCapacity with the current VolumetricHeatCapacity.
     * @param volumetricHeatCapacity The other VolumetricHeatCapacity.
     * @returns A new VolumetricHeatCapacity instance with the results.
     */
    public pow(volumetricHeatCapacity: VolumetricHeatCapacity): VolumetricHeatCapacity {
        return new VolumetricHeatCapacity(this.value ** volumetricHeatCapacity.BaseValue)
    }
}
