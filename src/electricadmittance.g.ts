/** ElectricAdmittanceUnits enumeration */
export enum ElectricAdmittanceUnits {
    /** */
    Siemens,
    /** */
    Nanosiemens,
    /** */
    Microsiemens,
    /** */
    Millisiemens
}

/** Electric admittance is a measure of how easily a circuit or device will allow a current to flow. It is defined as the inverse of impedance. The SI unit of admittance is the siemens (symbol S). */
export class ElectricAdmittance {
    private value: number;
    private siemensLazy: number | null = null;
    private nanosiemensLazy: number | null = null;
    private microsiemensLazy: number | null = null;
    private millisiemensLazy: number | null = null;

    /**
     * Create a new ElectricAdmittance.
     * @param value The value.
     * @param fromUnit The ‘ElectricAdmittance’ unit to create from.
     * The default unit is Siemens
     */
    public constructor(value: number, fromUnit: ElectricAdmittanceUnits = ElectricAdmittanceUnits.Siemens) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of ElectricAdmittance is Siemens.
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
        return this.siemensLazy = this.convertFromBase(ElectricAdmittanceUnits.Siemens);
    }

    /** */
    public get Nanosiemens(): number {
        if(this.nanosiemensLazy !== null){
            return this.nanosiemensLazy;
        }
        return this.nanosiemensLazy = this.convertFromBase(ElectricAdmittanceUnits.Nanosiemens);
    }

    /** */
    public get Microsiemens(): number {
        if(this.microsiemensLazy !== null){
            return this.microsiemensLazy;
        }
        return this.microsiemensLazy = this.convertFromBase(ElectricAdmittanceUnits.Microsiemens);
    }

    /** */
    public get Millisiemens(): number {
        if(this.millisiemensLazy !== null){
            return this.millisiemensLazy;
        }
        return this.millisiemensLazy = this.convertFromBase(ElectricAdmittanceUnits.Millisiemens);
    }

    /**
     * Create a new ElectricAdmittance instance from a Siemens
     *
     * @param value The unit as Siemens to create a new ElectricAdmittance from.
     * @returns The new ElectricAdmittance instance.
     */
    public static FromSiemens(value: number): ElectricAdmittance {
        return new ElectricAdmittance(value, ElectricAdmittanceUnits.Siemens);
    }

    /**
     * Create a new ElectricAdmittance instance from a Nanosiemens
     *
     * @param value The unit as Nanosiemens to create a new ElectricAdmittance from.
     * @returns The new ElectricAdmittance instance.
     */
    public static FromNanosiemens(value: number): ElectricAdmittance {
        return new ElectricAdmittance(value, ElectricAdmittanceUnits.Nanosiemens);
    }

    /**
     * Create a new ElectricAdmittance instance from a Microsiemens
     *
     * @param value The unit as Microsiemens to create a new ElectricAdmittance from.
     * @returns The new ElectricAdmittance instance.
     */
    public static FromMicrosiemens(value: number): ElectricAdmittance {
        return new ElectricAdmittance(value, ElectricAdmittanceUnits.Microsiemens);
    }

    /**
     * Create a new ElectricAdmittance instance from a Millisiemens
     *
     * @param value The unit as Millisiemens to create a new ElectricAdmittance from.
     * @returns The new ElectricAdmittance instance.
     */
    public static FromMillisiemens(value: number): ElectricAdmittance {
        return new ElectricAdmittance(value, ElectricAdmittanceUnits.Millisiemens);
    }

    private convertFromBase(toUnit: ElectricAdmittanceUnits): number {
        switch (toUnit) {
                
            case ElectricAdmittanceUnits.Siemens:
                    
                return this.value;
            case ElectricAdmittanceUnits.Nanosiemens:
                    
                return (this.value) / 1e-9;
            case ElectricAdmittanceUnits.Microsiemens:
                    
                return (this.value) / 0.000001;
            case ElectricAdmittanceUnits.Millisiemens:
                    
                return (this.value) / 0.001;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: ElectricAdmittanceUnits): number {
        switch (fromUnit) {
                
            case ElectricAdmittanceUnits.Siemens:
                    
                return value;
            case ElectricAdmittanceUnits.Nanosiemens:
                    
                return (value) * 1e-9;
            case ElectricAdmittanceUnits.Microsiemens:
                    
                return (value) * 0.000001;
            case ElectricAdmittanceUnits.Millisiemens:
                    
                return (value) * 0.001;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the ElectricAdmittance to string.
     * Note! the default format for ElectricAdmittance is Siemens.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the ElectricAdmittance.
     * @returns The string format of the ElectricAdmittance.
     */
    public toString(unit: ElectricAdmittanceUnits = ElectricAdmittanceUnits.Siemens): string {

        switch (unit) {
            
            case ElectricAdmittanceUnits.Siemens:
                return this.Siemens + ` S`;
            case ElectricAdmittanceUnits.Nanosiemens:
                return this.Nanosiemens + ` `;
            case ElectricAdmittanceUnits.Microsiemens:
                return this.Microsiemens + ` `;
            case ElectricAdmittanceUnits.Millisiemens:
                return this.Millisiemens + ` `;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get ElectricAdmittance unit abbreviation.
     * Note! the default abbreviation for ElectricAdmittance is Siemens.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the ElectricAdmittance.
     * @returns The abbreviation string of ElectricAdmittance.
     */
    public getUnitAbbreviation(unitAbbreviation: ElectricAdmittanceUnits = ElectricAdmittanceUnits.Siemens): string {

        switch (unitAbbreviation) {
            
            case ElectricAdmittanceUnits.Siemens:
                return `S`;
            case ElectricAdmittanceUnits.Nanosiemens:
                return ``;
            case ElectricAdmittanceUnits.Microsiemens:
                return ``;
            case ElectricAdmittanceUnits.Millisiemens:
                return ``;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given ElectricAdmittance are equals to the current ElectricAdmittance.
     * @param electricAdmittance The other ElectricAdmittance.
     * @returns True if the given ElectricAdmittance are equal to the current ElectricAdmittance.
     */
    public equals(electricAdmittance: ElectricAdmittance): boolean {
        return this.value === electricAdmittance.BaseValue;
    }

    /**
     * Compare the given ElectricAdmittance against the current ElectricAdmittance.
     * @param electricAdmittance The other ElectricAdmittance.
     * @returns 0 if they are equal, -1 if the current ElectricAdmittance is less then other, 1 if the current ElectricAdmittance is greater then other.
     */
    public compareTo(electricAdmittance: ElectricAdmittance): number {

        if (this.value > electricAdmittance.BaseValue)
            return 1;
        if (this.value < electricAdmittance.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given ElectricAdmittance with the current ElectricAdmittance.
     * @param electricAdmittance The other ElectricAdmittance.
     * @returns A new ElectricAdmittance instance with the results.
     */
    public add(electricAdmittance: ElectricAdmittance): ElectricAdmittance {
        return new ElectricAdmittance(this.value + electricAdmittance.BaseValue)
    }

    /**
     * Subtract the given ElectricAdmittance with the current ElectricAdmittance.
     * @param electricAdmittance The other ElectricAdmittance.
     * @returns A new ElectricAdmittance instance with the results.
     */
    public subtract(electricAdmittance: ElectricAdmittance): ElectricAdmittance {
        return new ElectricAdmittance(this.value - electricAdmittance.BaseValue)
    }

    /**
     * Multiply the given ElectricAdmittance with the current ElectricAdmittance.
     * @param electricAdmittance The other ElectricAdmittance.
     * @returns A new ElectricAdmittance instance with the results.
     */
    public multiply(electricAdmittance: ElectricAdmittance): ElectricAdmittance {
        return new ElectricAdmittance(this.value * electricAdmittance.BaseValue)
    }

    /**
     * Divide the given ElectricAdmittance with the current ElectricAdmittance.
     * @param electricAdmittance The other ElectricAdmittance.
     * @returns A new ElectricAdmittance instance with the results.
     */
    public divide(electricAdmittance: ElectricAdmittance): ElectricAdmittance {
        return new ElectricAdmittance(this.value / electricAdmittance.BaseValue)
    }

    /**
     * Modulo the given ElectricAdmittance with the current ElectricAdmittance.
     * @param electricAdmittance The other ElectricAdmittance.
     * @returns A new ElectricAdmittance instance with the results.
     */
    public modulo(electricAdmittance: ElectricAdmittance): ElectricAdmittance {
        return new ElectricAdmittance(this.value % electricAdmittance.BaseValue)
    }

    /**
     * Pow the given ElectricAdmittance with the current ElectricAdmittance.
     * @param electricAdmittance The other ElectricAdmittance.
     * @returns A new ElectricAdmittance instance with the results.
     */
    public pow(electricAdmittance: ElectricAdmittance): ElectricAdmittance {
        return new ElectricAdmittance(this.value ** electricAdmittance.BaseValue)
    }
}
