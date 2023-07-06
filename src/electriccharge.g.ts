/** ElectricChargeUnits enumeration */
export enum ElectricChargeUnits {
    /** */
    Coulombs,
    /** */
    AmpereHours,
    /** */
    Picocoulombs,
    /** */
    Nanocoulombs,
    /** */
    Microcoulombs,
    /** */
    Millicoulombs,
    /** */
    Kilocoulombs,
    /** */
    Megacoulombs,
    /** */
    MilliampereHours,
    /** */
    KiloampereHours,
    /** */
    MegaampereHours,
    /** */
    Coulomb,
    /** */
    AmpereHour,
    /** */
    Picocoulomb,
    /** */
    Nanocoulomb,
    /** */
    Microcoulomb,
    /** */
    Millicoulomb,
    /** */
    Kilocoulomb,
    /** */
    Megacoulomb,
    /** */
    MilliampereHour,
    /** */
    KiloampereHour,
    /** */
    MegaampereHour
}

/** Electric charge is the physical property of matter that causes it to experience a force when placed in an electromagnetic field. */
export class ElectricCharge {
    private value: number;
    private coulombsLazy: number | null = null;
    private amperehoursLazy: number | null = null;
    private picocoulombsLazy: number | null = null;
    private nanocoulombsLazy: number | null = null;
    private microcoulombsLazy: number | null = null;
    private millicoulombsLazy: number | null = null;
    private kilocoulombsLazy: number | null = null;
    private megacoulombsLazy: number | null = null;
    private milliamperehoursLazy: number | null = null;
    private kiloamperehoursLazy: number | null = null;
    private megaamperehoursLazy: number | null = null;

    /**
     * Create a new ElectricCharge.
     * @param value The value.
     * @param fromUnit The ‘ElectricCharge’ unit to create from.
     * The default unit is Coulombs
     */
    public constructor(value: number, fromUnit: ElectricChargeUnits = ElectricChargeUnits.Coulombs) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of ElectricCharge is Coulombs.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get Coulombs(): number {
        if(this.coulombsLazy !== null){
            return this.coulombsLazy;
        }
        return this.coulombsLazy = this.convertFromBase(ElectricChargeUnits.Coulombs);
    }

    /** */
    public get AmpereHours(): number {
        if(this.amperehoursLazy !== null){
            return this.amperehoursLazy;
        }
        return this.amperehoursLazy = this.convertFromBase(ElectricChargeUnits.AmpereHours);
    }

    /** */
    public get Picocoulombs(): number {
        if(this.picocoulombsLazy !== null){
            return this.picocoulombsLazy;
        }
        return this.picocoulombsLazy = this.convertFromBase(ElectricChargeUnits.Picocoulombs);
    }

    /** */
    public get Nanocoulombs(): number {
        if(this.nanocoulombsLazy !== null){
            return this.nanocoulombsLazy;
        }
        return this.nanocoulombsLazy = this.convertFromBase(ElectricChargeUnits.Nanocoulombs);
    }

    /** */
    public get Microcoulombs(): number {
        if(this.microcoulombsLazy !== null){
            return this.microcoulombsLazy;
        }
        return this.microcoulombsLazy = this.convertFromBase(ElectricChargeUnits.Microcoulombs);
    }

    /** */
    public get Millicoulombs(): number {
        if(this.millicoulombsLazy !== null){
            return this.millicoulombsLazy;
        }
        return this.millicoulombsLazy = this.convertFromBase(ElectricChargeUnits.Millicoulombs);
    }

    /** */
    public get Kilocoulombs(): number {
        if(this.kilocoulombsLazy !== null){
            return this.kilocoulombsLazy;
        }
        return this.kilocoulombsLazy = this.convertFromBase(ElectricChargeUnits.Kilocoulombs);
    }

    /** */
    public get Megacoulombs(): number {
        if(this.megacoulombsLazy !== null){
            return this.megacoulombsLazy;
        }
        return this.megacoulombsLazy = this.convertFromBase(ElectricChargeUnits.Megacoulombs);
    }

    /** */
    public get MilliampereHours(): number {
        if(this.milliamperehoursLazy !== null){
            return this.milliamperehoursLazy;
        }
        return this.milliamperehoursLazy = this.convertFromBase(ElectricChargeUnits.MilliampereHours);
    }

    /** */
    public get KiloampereHours(): number {
        if(this.kiloamperehoursLazy !== null){
            return this.kiloamperehoursLazy;
        }
        return this.kiloamperehoursLazy = this.convertFromBase(ElectricChargeUnits.KiloampereHours);
    }

    /** */
    public get MegaampereHours(): number {
        if(this.megaamperehoursLazy !== null){
            return this.megaamperehoursLazy;
        }
        return this.megaamperehoursLazy = this.convertFromBase(ElectricChargeUnits.MegaampereHours);
    }

    /**
     * Create a new ElectricCharge instance from a Coulombs
     *
     * @param value The unit as Coulombs to create a new ElectricCharge from.
     * @returns The new ElectricCharge instance.
     */
    public static FromCoulombs(value: number): ElectricCharge {
        return new ElectricCharge(value, ElectricChargeUnits.Coulombs);
    }

    /**
     * Create a new ElectricCharge instance from a AmpereHours
     *
     * @param value The unit as AmpereHours to create a new ElectricCharge from.
     * @returns The new ElectricCharge instance.
     */
    public static FromAmpereHours(value: number): ElectricCharge {
        return new ElectricCharge(value, ElectricChargeUnits.AmpereHours);
    }

    /**
     * Create a new ElectricCharge instance from a Picocoulombs
     *
     * @param value The unit as Picocoulombs to create a new ElectricCharge from.
     * @returns The new ElectricCharge instance.
     */
    public static FromPicocoulombs(value: number): ElectricCharge {
        return new ElectricCharge(value, ElectricChargeUnits.Picocoulombs);
    }

    /**
     * Create a new ElectricCharge instance from a Nanocoulombs
     *
     * @param value The unit as Nanocoulombs to create a new ElectricCharge from.
     * @returns The new ElectricCharge instance.
     */
    public static FromNanocoulombs(value: number): ElectricCharge {
        return new ElectricCharge(value, ElectricChargeUnits.Nanocoulombs);
    }

    /**
     * Create a new ElectricCharge instance from a Microcoulombs
     *
     * @param value The unit as Microcoulombs to create a new ElectricCharge from.
     * @returns The new ElectricCharge instance.
     */
    public static FromMicrocoulombs(value: number): ElectricCharge {
        return new ElectricCharge(value, ElectricChargeUnits.Microcoulombs);
    }

    /**
     * Create a new ElectricCharge instance from a Millicoulombs
     *
     * @param value The unit as Millicoulombs to create a new ElectricCharge from.
     * @returns The new ElectricCharge instance.
     */
    public static FromMillicoulombs(value: number): ElectricCharge {
        return new ElectricCharge(value, ElectricChargeUnits.Millicoulombs);
    }

    /**
     * Create a new ElectricCharge instance from a Kilocoulombs
     *
     * @param value The unit as Kilocoulombs to create a new ElectricCharge from.
     * @returns The new ElectricCharge instance.
     */
    public static FromKilocoulombs(value: number): ElectricCharge {
        return new ElectricCharge(value, ElectricChargeUnits.Kilocoulombs);
    }

    /**
     * Create a new ElectricCharge instance from a Megacoulombs
     *
     * @param value The unit as Megacoulombs to create a new ElectricCharge from.
     * @returns The new ElectricCharge instance.
     */
    public static FromMegacoulombs(value: number): ElectricCharge {
        return new ElectricCharge(value, ElectricChargeUnits.Megacoulombs);
    }

    /**
     * Create a new ElectricCharge instance from a MilliampereHours
     *
     * @param value The unit as MilliampereHours to create a new ElectricCharge from.
     * @returns The new ElectricCharge instance.
     */
    public static FromMilliampereHours(value: number): ElectricCharge {
        return new ElectricCharge(value, ElectricChargeUnits.MilliampereHours);
    }

    /**
     * Create a new ElectricCharge instance from a KiloampereHours
     *
     * @param value The unit as KiloampereHours to create a new ElectricCharge from.
     * @returns The new ElectricCharge instance.
     */
    public static FromKiloampereHours(value: number): ElectricCharge {
        return new ElectricCharge(value, ElectricChargeUnits.KiloampereHours);
    }

    /**
     * Create a new ElectricCharge instance from a MegaampereHours
     *
     * @param value The unit as MegaampereHours to create a new ElectricCharge from.
     * @returns The new ElectricCharge instance.
     */
    public static FromMegaampereHours(value: number): ElectricCharge {
        return new ElectricCharge(value, ElectricChargeUnits.MegaampereHours);
    }

    private convertFromBase(toUnit: ElectricChargeUnits): number {
        switch (toUnit) {
                
            case ElectricChargeUnits.Coulombs:
            case ElectricChargeUnits.Coulombs:        
                return this.value;
            case ElectricChargeUnits.AmpereHours:
            case ElectricChargeUnits.AmpereHours:        
                return this.value * 2.77777777777e-4;
            case ElectricChargeUnits.Picocoulombs:
            case ElectricChargeUnits.Picocoulombs:        
                return (this.value) / 1e-12;
            case ElectricChargeUnits.Nanocoulombs:
            case ElectricChargeUnits.Nanocoulombs:        
                return (this.value) / 1e-9;
            case ElectricChargeUnits.Microcoulombs:
            case ElectricChargeUnits.Microcoulombs:        
                return (this.value) / 0.000001;
            case ElectricChargeUnits.Millicoulombs:
            case ElectricChargeUnits.Millicoulombs:        
                return (this.value) / 0.001;
            case ElectricChargeUnits.Kilocoulombs:
            case ElectricChargeUnits.Kilocoulombs:        
                return (this.value) / 1000;
            case ElectricChargeUnits.Megacoulombs:
            case ElectricChargeUnits.Megacoulombs:        
                return (this.value) / 1000000;
            case ElectricChargeUnits.MilliampereHours:
            case ElectricChargeUnits.MilliampereHours:        
                return (this.value * 2.77777777777e-4) / 0.001;
            case ElectricChargeUnits.KiloampereHours:
            case ElectricChargeUnits.KiloampereHours:        
                return (this.value * 2.77777777777e-4) / 1000;
            case ElectricChargeUnits.MegaampereHours:
            case ElectricChargeUnits.MegaampereHours:        
                return (this.value * 2.77777777777e-4) / 1000000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: ElectricChargeUnits): number {
        switch (fromUnit) {
                
            case ElectricChargeUnits.Coulombs:
            case ElectricChargeUnits.Coulombs:        
                return value;
            case ElectricChargeUnits.AmpereHours:
            case ElectricChargeUnits.AmpereHours:        
                return value / 2.77777777777e-4;
            case ElectricChargeUnits.Picocoulombs:
            case ElectricChargeUnits.Picocoulombs:        
                return (value) * 1e-12;
            case ElectricChargeUnits.Nanocoulombs:
            case ElectricChargeUnits.Nanocoulombs:        
                return (value) * 1e-9;
            case ElectricChargeUnits.Microcoulombs:
            case ElectricChargeUnits.Microcoulombs:        
                return (value) * 0.000001;
            case ElectricChargeUnits.Millicoulombs:
            case ElectricChargeUnits.Millicoulombs:        
                return (value) * 0.001;
            case ElectricChargeUnits.Kilocoulombs:
            case ElectricChargeUnits.Kilocoulombs:        
                return (value) * 1000;
            case ElectricChargeUnits.Megacoulombs:
            case ElectricChargeUnits.Megacoulombs:        
                return (value) * 1000000;
            case ElectricChargeUnits.MilliampereHours:
            case ElectricChargeUnits.MilliampereHours:        
                return (value / 2.77777777777e-4) * 0.001;
            case ElectricChargeUnits.KiloampereHours:
            case ElectricChargeUnits.KiloampereHours:        
                return (value / 2.77777777777e-4) * 1000;
            case ElectricChargeUnits.MegaampereHours:
            case ElectricChargeUnits.MegaampereHours:        
                return (value / 2.77777777777e-4) * 1000000;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the ElectricCharge to string.
     * Note! the default format for ElectricCharge is Coulombs.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the ElectricCharge.
     * @returns The string format of the ElectricCharge.
     */
    public toString(unit: ElectricChargeUnits = ElectricChargeUnits.Coulombs): string {

        switch (unit) {
            
            case ElectricChargeUnits.Coulombs:
                return this.Coulombs + ` C`;
            case ElectricChargeUnits.AmpereHours:
                return this.AmpereHours + ` A-h`;
            case ElectricChargeUnits.Picocoulombs:
                return this.Picocoulombs + ` `;
            case ElectricChargeUnits.Nanocoulombs:
                return this.Nanocoulombs + ` `;
            case ElectricChargeUnits.Microcoulombs:
                return this.Microcoulombs + ` `;
            case ElectricChargeUnits.Millicoulombs:
                return this.Millicoulombs + ` `;
            case ElectricChargeUnits.Kilocoulombs:
                return this.Kilocoulombs + ` `;
            case ElectricChargeUnits.Megacoulombs:
                return this.Megacoulombs + ` `;
            case ElectricChargeUnits.MilliampereHours:
                return this.MilliampereHours + ` `;
            case ElectricChargeUnits.KiloampereHours:
                return this.KiloampereHours + ` `;
            case ElectricChargeUnits.MegaampereHours:
                return this.MegaampereHours + ` `;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get ElectricCharge unit abbreviation.
     * Note! the default abbreviation for ElectricCharge is Coulombs.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the ElectricCharge.
     * @returns The abbreviation string of ElectricCharge.
     */
    public getUnitAbbreviation(unitAbbreviation: ElectricChargeUnits = ElectricChargeUnits.Coulombs): string {

        switch (unitAbbreviation) {
            
            case ElectricChargeUnits.Coulombs:
                return `C`;
            case ElectricChargeUnits.AmpereHours:
                return `A-h`;
            case ElectricChargeUnits.Picocoulombs:
                return ``;
            case ElectricChargeUnits.Nanocoulombs:
                return ``;
            case ElectricChargeUnits.Microcoulombs:
                return ``;
            case ElectricChargeUnits.Millicoulombs:
                return ``;
            case ElectricChargeUnits.Kilocoulombs:
                return ``;
            case ElectricChargeUnits.Megacoulombs:
                return ``;
            case ElectricChargeUnits.MilliampereHours:
                return ``;
            case ElectricChargeUnits.KiloampereHours:
                return ``;
            case ElectricChargeUnits.MegaampereHours:
                return ``;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given ElectricCharge are equals to the current ElectricCharge.
     * @param electricCharge The other ElectricCharge.
     * @returns True if the given ElectricCharge are equal to the current ElectricCharge.
     */
    public equals(electricCharge: ElectricCharge): boolean {
        return this.value === electricCharge.BaseValue;
    }

    /**
     * Compare the given ElectricCharge against the current ElectricCharge.
     * @param electricCharge The other ElectricCharge.
     * @returns 0 if they are equal, -1 if the current ElectricCharge is less then other, 1 if the current ElectricCharge is greater then other.
     */
    public compareTo(electricCharge: ElectricCharge): number {

        if (this.value > electricCharge.BaseValue)
            return 1;
        if (this.value < electricCharge.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given ElectricCharge with the current ElectricCharge.
     * @param electricCharge The other ElectricCharge.
     * @returns A new ElectricCharge instance with the results.
     */
    public add(electricCharge: ElectricCharge): ElectricCharge {
        return new ElectricCharge(this.value + electricCharge.BaseValue)
    }

    /**
     * Subtract the given ElectricCharge with the current ElectricCharge.
     * @param electricCharge The other ElectricCharge.
     * @returns A new ElectricCharge instance with the results.
     */
    public subtract(electricCharge: ElectricCharge): ElectricCharge {
        return new ElectricCharge(this.value - electricCharge.BaseValue)
    }

    /**
     * Multiply the given ElectricCharge with the current ElectricCharge.
     * @param electricCharge The other ElectricCharge.
     * @returns A new ElectricCharge instance with the results.
     */
    public multiply(electricCharge: ElectricCharge): ElectricCharge {
        return new ElectricCharge(this.value * electricCharge.BaseValue)
    }

    /**
     * Divide the given ElectricCharge with the current ElectricCharge.
     * @param electricCharge The other ElectricCharge.
     * @returns A new ElectricCharge instance with the results.
     */
    public divide(electricCharge: ElectricCharge): ElectricCharge {
        return new ElectricCharge(this.value / electricCharge.BaseValue)
    }

    /**
     * Modulo the given ElectricCharge with the current ElectricCharge.
     * @param electricCharge The other ElectricCharge.
     * @returns A new ElectricCharge instance with the results.
     */
    public modulo(electricCharge: ElectricCharge): ElectricCharge {
        return new ElectricCharge(this.value % electricCharge.BaseValue)
    }

    /**
     * Pow the given ElectricCharge with the current ElectricCharge.
     * @param electricCharge The other ElectricCharge.
     * @returns A new ElectricCharge instance with the results.
     */
    public pow(electricCharge: ElectricCharge): ElectricCharge {
        return new ElectricCharge(this.value ** electricCharge.BaseValue)
    }
}
