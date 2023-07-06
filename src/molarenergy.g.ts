/** MolarEnergyUnits enumeration */
export enum MolarEnergyUnits {
    /** */
    JoulesPerMole,
    /** */
    KilojoulesPerMole,
    /** */
    MegajoulesPerMole,
    /** */
    JoulePerMole,
    /** */
    KilojoulePerMole,
    /** */
    MegajoulePerMole
}

/** Molar energy is the amount of energy stored in 1 mole of a substance. */
export class MolarEnergy {
    private value: number;
    private joulespermoleLazy: number | null = null;
    private kilojoulespermoleLazy: number | null = null;
    private megajoulespermoleLazy: number | null = null;

    /**
     * Create a new MolarEnergy.
     * @param value The value.
     * @param fromUnit The ‘MolarEnergy’ unit to create from.
     * The default unit is JoulesPerMole
     */
    public constructor(value: number, fromUnit: MolarEnergyUnits = MolarEnergyUnits.JoulesPerMole) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of MolarEnergy is JoulesPerMole.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get JoulesPerMole(): number {
        if(this.joulespermoleLazy !== null){
            return this.joulespermoleLazy;
        }
        return this.joulespermoleLazy = this.convertFromBase(MolarEnergyUnits.JoulesPerMole);
    }

    /** */
    public get KilojoulesPerMole(): number {
        if(this.kilojoulespermoleLazy !== null){
            return this.kilojoulespermoleLazy;
        }
        return this.kilojoulespermoleLazy = this.convertFromBase(MolarEnergyUnits.KilojoulesPerMole);
    }

    /** */
    public get MegajoulesPerMole(): number {
        if(this.megajoulespermoleLazy !== null){
            return this.megajoulespermoleLazy;
        }
        return this.megajoulespermoleLazy = this.convertFromBase(MolarEnergyUnits.MegajoulesPerMole);
    }

    /**
     * Create a new MolarEnergy instance from a JoulesPerMole
     *
     * @param value The unit as JoulesPerMole to create a new MolarEnergy from.
     * @returns The new MolarEnergy instance.
     */
    public static FromJoulesPerMole(value: number): MolarEnergy {
        return new MolarEnergy(value, MolarEnergyUnits.JoulesPerMole);
    }

    /**
     * Create a new MolarEnergy instance from a KilojoulesPerMole
     *
     * @param value The unit as KilojoulesPerMole to create a new MolarEnergy from.
     * @returns The new MolarEnergy instance.
     */
    public static FromKilojoulesPerMole(value: number): MolarEnergy {
        return new MolarEnergy(value, MolarEnergyUnits.KilojoulesPerMole);
    }

    /**
     * Create a new MolarEnergy instance from a MegajoulesPerMole
     *
     * @param value The unit as MegajoulesPerMole to create a new MolarEnergy from.
     * @returns The new MolarEnergy instance.
     */
    public static FromMegajoulesPerMole(value: number): MolarEnergy {
        return new MolarEnergy(value, MolarEnergyUnits.MegajoulesPerMole);
    }

    private convertFromBase(toUnit: MolarEnergyUnits): number {
        switch (toUnit) {
                
            case MolarEnergyUnits.JoulesPerMole:
            case MolarEnergyUnits.JoulesPerMole:        
                return this.value;
            case MolarEnergyUnits.KilojoulesPerMole:
            case MolarEnergyUnits.KilojoulesPerMole:        
                return (this.value) / 1000;
            case MolarEnergyUnits.MegajoulesPerMole:
            case MolarEnergyUnits.MegajoulesPerMole:        
                return (this.value) / 1000000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: MolarEnergyUnits): number {
        switch (fromUnit) {
                
            case MolarEnergyUnits.JoulesPerMole:
            case MolarEnergyUnits.JoulesPerMole:        
                return value;
            case MolarEnergyUnits.KilojoulesPerMole:
            case MolarEnergyUnits.KilojoulesPerMole:        
                return (value) * 1000;
            case MolarEnergyUnits.MegajoulesPerMole:
            case MolarEnergyUnits.MegajoulesPerMole:        
                return (value) * 1000000;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the MolarEnergy to string.
     * Note! the default format for MolarEnergy is JoulesPerMole.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the MolarEnergy.
     * @returns The string format of the MolarEnergy.
     */
    public toString(unit: MolarEnergyUnits = MolarEnergyUnits.JoulesPerMole): string {

        switch (unit) {
            
            case MolarEnergyUnits.JoulesPerMole:
                return this.JoulesPerMole + ` J/mol`;
            case MolarEnergyUnits.KilojoulesPerMole:
                return this.KilojoulesPerMole + ` `;
            case MolarEnergyUnits.MegajoulesPerMole:
                return this.MegajoulesPerMole + ` `;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get MolarEnergy unit abbreviation.
     * Note! the default abbreviation for MolarEnergy is JoulesPerMole.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the MolarEnergy.
     * @returns The abbreviation string of MolarEnergy.
     */
    public getUnitAbbreviation(unitAbbreviation: MolarEnergyUnits = MolarEnergyUnits.JoulesPerMole): string {

        switch (unitAbbreviation) {
            
            case MolarEnergyUnits.JoulesPerMole:
                return `J/mol`;
            case MolarEnergyUnits.KilojoulesPerMole:
                return ``;
            case MolarEnergyUnits.MegajoulesPerMole:
                return ``;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given MolarEnergy are equals to the current MolarEnergy.
     * @param molarEnergy The other MolarEnergy.
     * @returns True if the given MolarEnergy are equal to the current MolarEnergy.
     */
    public equals(molarEnergy: MolarEnergy): boolean {
        return this.value === molarEnergy.BaseValue;
    }

    /**
     * Compare the given MolarEnergy against the current MolarEnergy.
     * @param molarEnergy The other MolarEnergy.
     * @returns 0 if they are equal, -1 if the current MolarEnergy is less then other, 1 if the current MolarEnergy is greater then other.
     */
    public compareTo(molarEnergy: MolarEnergy): number {

        if (this.value > molarEnergy.BaseValue)
            return 1;
        if (this.value < molarEnergy.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given MolarEnergy with the current MolarEnergy.
     * @param molarEnergy The other MolarEnergy.
     * @returns A new MolarEnergy instance with the results.
     */
    public add(molarEnergy: MolarEnergy): MolarEnergy {
        return new MolarEnergy(this.value + molarEnergy.BaseValue)
    }

    /**
     * Subtract the given MolarEnergy with the current MolarEnergy.
     * @param molarEnergy The other MolarEnergy.
     * @returns A new MolarEnergy instance with the results.
     */
    public subtract(molarEnergy: MolarEnergy): MolarEnergy {
        return new MolarEnergy(this.value - molarEnergy.BaseValue)
    }

    /**
     * Multiply the given MolarEnergy with the current MolarEnergy.
     * @param molarEnergy The other MolarEnergy.
     * @returns A new MolarEnergy instance with the results.
     */
    public multiply(molarEnergy: MolarEnergy): MolarEnergy {
        return new MolarEnergy(this.value * molarEnergy.BaseValue)
    }

    /**
     * Divide the given MolarEnergy with the current MolarEnergy.
     * @param molarEnergy The other MolarEnergy.
     * @returns A new MolarEnergy instance with the results.
     */
    public divide(molarEnergy: MolarEnergy): MolarEnergy {
        return new MolarEnergy(this.value / molarEnergy.BaseValue)
    }

    /**
     * Modulo the given MolarEnergy with the current MolarEnergy.
     * @param molarEnergy The other MolarEnergy.
     * @returns A new MolarEnergy instance with the results.
     */
    public modulo(molarEnergy: MolarEnergy): MolarEnergy {
        return new MolarEnergy(this.value % molarEnergy.BaseValue)
    }

    /**
     * Pow the given MolarEnergy with the current MolarEnergy.
     * @param molarEnergy The other MolarEnergy.
     * @returns A new MolarEnergy instance with the results.
     */
    public pow(molarEnergy: MolarEnergy): MolarEnergy {
        return new MolarEnergy(this.value ** molarEnergy.BaseValue)
    }
}
