/** ElectricConductanceUnits enumeration */
export enum ElectricConductanceUnits {
    /** */
    Siemens,
    /** */
    Nanosiemens,
    /** */
    Microsiemens,
    /** */
    Millisiemens,
    /** */
    Kilosiemens
}

/** The electrical conductance of an electrical conductor is a measure of the easeness to pass an electric current through that conductor. */
export class ElectricConductance {
    private value: number;
    private siemensLazy: number | null = null;
    private nanosiemensLazy: number | null = null;
    private microsiemensLazy: number | null = null;
    private millisiemensLazy: number | null = null;
    private kilosiemensLazy: number | null = null;

    /**
     * Create a new ElectricConductance.
     * @param value The value.
     * @param fromUnit The ‘ElectricConductance’ unit to create from.
     * The default unit is Siemens
     */
    public constructor(value: number, fromUnit: ElectricConductanceUnits = ElectricConductanceUnits.Siemens) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of ElectricConductance is Siemens.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get Siemens(): number {
        if(this.siemensLazy !== null){
            return this.siemensLazy;
        }
        return this.siemensLazy = this.convertFromBase(ElectricConductanceUnits.Siemens);
    }

    /** */
    public get Nanosiemens(): number {
        if(this.nanosiemensLazy !== null){
            return this.nanosiemensLazy;
        }
        return this.nanosiemensLazy = this.convertFromBase(ElectricConductanceUnits.Nanosiemens);
    }

    /** */
    public get Microsiemens(): number {
        if(this.microsiemensLazy !== null){
            return this.microsiemensLazy;
        }
        return this.microsiemensLazy = this.convertFromBase(ElectricConductanceUnits.Microsiemens);
    }

    /** */
    public get Millisiemens(): number {
        if(this.millisiemensLazy !== null){
            return this.millisiemensLazy;
        }
        return this.millisiemensLazy = this.convertFromBase(ElectricConductanceUnits.Millisiemens);
    }

    /** */
    public get Kilosiemens(): number {
        if(this.kilosiemensLazy !== null){
            return this.kilosiemensLazy;
        }
        return this.kilosiemensLazy = this.convertFromBase(ElectricConductanceUnits.Kilosiemens);
    }

    /**
     * Create a new ElectricConductance instance from a Siemens
     *
     * @param value The unit as Siemens to create a new ElectricConductance from.
     * @returns The new ElectricConductance instance.
     */
    public static FromSiemens(value: number): ElectricConductance {
        return new ElectricConductance(value, ElectricConductanceUnits.Siemens);
    }

    /**
     * Create a new ElectricConductance instance from a Nanosiemens
     *
     * @param value The unit as Nanosiemens to create a new ElectricConductance from.
     * @returns The new ElectricConductance instance.
     */
    public static FromNanosiemens(value: number): ElectricConductance {
        return new ElectricConductance(value, ElectricConductanceUnits.Nanosiemens);
    }

    /**
     * Create a new ElectricConductance instance from a Microsiemens
     *
     * @param value The unit as Microsiemens to create a new ElectricConductance from.
     * @returns The new ElectricConductance instance.
     */
    public static FromMicrosiemens(value: number): ElectricConductance {
        return new ElectricConductance(value, ElectricConductanceUnits.Microsiemens);
    }

    /**
     * Create a new ElectricConductance instance from a Millisiemens
     *
     * @param value The unit as Millisiemens to create a new ElectricConductance from.
     * @returns The new ElectricConductance instance.
     */
    public static FromMillisiemens(value: number): ElectricConductance {
        return new ElectricConductance(value, ElectricConductanceUnits.Millisiemens);
    }

    /**
     * Create a new ElectricConductance instance from a Kilosiemens
     *
     * @param value The unit as Kilosiemens to create a new ElectricConductance from.
     * @returns The new ElectricConductance instance.
     */
    public static FromKilosiemens(value: number): ElectricConductance {
        return new ElectricConductance(value, ElectricConductanceUnits.Kilosiemens);
    }

    private convertFromBase(toUnit: ElectricConductanceUnits): number {
        switch (toUnit) {
                
            case ElectricConductanceUnits.Siemens:
                    
                return this.value;
            case ElectricConductanceUnits.Nanosiemens:
                    
                return (this.value) / 1e-9;
            case ElectricConductanceUnits.Microsiemens:
                    
                return (this.value) / 0.000001;
            case ElectricConductanceUnits.Millisiemens:
                    
                return (this.value) / 0.001;
            case ElectricConductanceUnits.Kilosiemens:
                    
                return (this.value) / 1000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: ElectricConductanceUnits): number {
        switch (fromUnit) {
                
            case ElectricConductanceUnits.Siemens:
                    
                return value;
            case ElectricConductanceUnits.Nanosiemens:
                    
                return (value) * 1e-9;
            case ElectricConductanceUnits.Microsiemens:
                    
                return (value) * 0.000001;
            case ElectricConductanceUnits.Millisiemens:
                    
                return (value) * 0.001;
            case ElectricConductanceUnits.Kilosiemens:
                    
                return (value) * 1000;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the ElectricConductance to string.
     * Note! the default format for ElectricConductance is Siemens.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the ElectricConductance.
     * @returns The string format of the ElectricConductance.
     */
    public toString(unit: ElectricConductanceUnits = ElectricConductanceUnits.Siemens): string {

        switch (unit) {
            
            case ElectricConductanceUnits.Siemens:
                return this.Siemens + ` S`;
            case ElectricConductanceUnits.Nanosiemens:
                return this.Nanosiemens + ` `;
            case ElectricConductanceUnits.Microsiemens:
                return this.Microsiemens + ` `;
            case ElectricConductanceUnits.Millisiemens:
                return this.Millisiemens + ` `;
            case ElectricConductanceUnits.Kilosiemens:
                return this.Kilosiemens + ` `;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get ElectricConductance unit abbreviation.
     * Note! the default abbreviation for ElectricConductance is Siemens.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the ElectricConductance.
     * @returns The abbreviation string of ElectricConductance.
     */
    public getUnitAbbreviation(unitAbbreviation: ElectricConductanceUnits = ElectricConductanceUnits.Siemens): string {

        switch (unitAbbreviation) {
            
            case ElectricConductanceUnits.Siemens:
                return `S`;
            case ElectricConductanceUnits.Nanosiemens:
                return ``;
            case ElectricConductanceUnits.Microsiemens:
                return ``;
            case ElectricConductanceUnits.Millisiemens:
                return ``;
            case ElectricConductanceUnits.Kilosiemens:
                return ``;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given ElectricConductance are equals to the current ElectricConductance.
     * @param electricConductance The other ElectricConductance.
     * @returns True if the given ElectricConductance are equal to the current ElectricConductance.
     */
    public equals(electricConductance: ElectricConductance): boolean {
        return this.value === electricConductance.BaseValue;
    }

    /**
     * Compare the given ElectricConductance against the current ElectricConductance.
     * @param electricConductance The other ElectricConductance.
     * @returns 0 if they are equal, -1 if the current ElectricConductance is less then other, 1 if the current ElectricConductance is greater then other.
     */
    public compareTo(electricConductance: ElectricConductance): number {

        if (this.value > electricConductance.BaseValue)
            return 1;
        if (this.value < electricConductance.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given ElectricConductance with the current ElectricConductance.
     * @param electricConductance The other ElectricConductance.
     * @returns A new ElectricConductance instance with the results.
     */
    public add(electricConductance: ElectricConductance): ElectricConductance {
        return new ElectricConductance(this.value + electricConductance.BaseValue)
    }

    /**
     * Subtract the given ElectricConductance with the current ElectricConductance.
     * @param electricConductance The other ElectricConductance.
     * @returns A new ElectricConductance instance with the results.
     */
    public subtract(electricConductance: ElectricConductance): ElectricConductance {
        return new ElectricConductance(this.value - electricConductance.BaseValue)
    }

    /**
     * Multiply the given ElectricConductance with the current ElectricConductance.
     * @param electricConductance The other ElectricConductance.
     * @returns A new ElectricConductance instance with the results.
     */
    public multiply(electricConductance: ElectricConductance): ElectricConductance {
        return new ElectricConductance(this.value * electricConductance.BaseValue)
    }

    /**
     * Divide the given ElectricConductance with the current ElectricConductance.
     * @param electricConductance The other ElectricConductance.
     * @returns A new ElectricConductance instance with the results.
     */
    public divide(electricConductance: ElectricConductance): ElectricConductance {
        return new ElectricConductance(this.value / electricConductance.BaseValue)
    }

    /**
     * Modulo the given ElectricConductance with the current ElectricConductance.
     * @param electricConductance The other ElectricConductance.
     * @returns A new ElectricConductance instance with the results.
     */
    public modulo(electricConductance: ElectricConductance): ElectricConductance {
        return new ElectricConductance(this.value % electricConductance.BaseValue)
    }

    /**
     * Pow the given ElectricConductance with the current ElectricConductance.
     * @param electricConductance The other ElectricConductance.
     * @returns A new ElectricConductance instance with the results.
     */
    public pow(electricConductance: ElectricConductance): ElectricConductance {
        return new ElectricConductance(this.value ** electricConductance.BaseValue)
    }
}
