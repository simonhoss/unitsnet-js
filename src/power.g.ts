/** PowerUnits enumeration */
export enum PowerUnits {
    /** */
    Watts,
    /** */
    MechanicalHorsepower,
    /** */
    MetricHorsepower,
    /** */
    ElectricalHorsepower,
    /** */
    BoilerHorsepower,
    /** */
    HydraulicHorsepower,
    /** */
    BritishThermalUnitsPerHour,
    /** */
    JoulesPerHour,
    /** */
    Femtowatts,
    /** */
    Picowatts,
    /** */
    Nanowatts,
    /** */
    Microwatts,
    /** */
    Milliwatts,
    /** */
    Deciwatts,
    /** */
    Decawatts,
    /** */
    Kilowatts,
    /** */
    Megawatts,
    /** */
    Gigawatts,
    /** */
    Terawatts,
    /** */
    Petawatts,
    /** */
    KilobritishThermalUnitsPerHour,
    /** */
    MegabritishThermalUnitsPerHour,
    /** */
    MillijoulesPerHour,
    /** */
    KilojoulesPerHour,
    /** */
    MegajoulesPerHour,
    /** */
    GigajoulesPerHour,
    /** */
    Watt,
    /** */
    BritishThermalUnitPerHour,
    /** */
    JoulePerHour,
    /** */
    Femtowatt,
    /** */
    Picowatt,
    /** */
    Nanowatt,
    /** */
    Microwatt,
    /** */
    Milliwatt,
    /** */
    Deciwatt,
    /** */
    Decawatt,
    /** */
    Kilowatt,
    /** */
    Megawatt,
    /** */
    Gigawatt,
    /** */
    Terawatt,
    /** */
    Petawatt,
    /** */
    KilobritishThermalUnitPerHour,
    /** */
    MegabritishThermalUnitPerHour,
    /** */
    MillijoulePerHour,
    /** */
    KilojoulePerHour,
    /** */
    MegajoulePerHour,
    /** */
    GigajoulePerHour
}

/** In physics, power is the rate of doing work. It is equivalent to an amount of energy consumed per unit time. */
export class Power {
    private value: number;
    private wattsLazy: number | null = null;
    private mechanicalhorsepowerLazy: number | null = null;
    private metrichorsepowerLazy: number | null = null;
    private electricalhorsepowerLazy: number | null = null;
    private boilerhorsepowerLazy: number | null = null;
    private hydraulichorsepowerLazy: number | null = null;
    private britishthermalunitsperhourLazy: number | null = null;
    private joulesperhourLazy: number | null = null;
    private femtowattsLazy: number | null = null;
    private picowattsLazy: number | null = null;
    private nanowattsLazy: number | null = null;
    private microwattsLazy: number | null = null;
    private milliwattsLazy: number | null = null;
    private deciwattsLazy: number | null = null;
    private decawattsLazy: number | null = null;
    private kilowattsLazy: number | null = null;
    private megawattsLazy: number | null = null;
    private gigawattsLazy: number | null = null;
    private terawattsLazy: number | null = null;
    private petawattsLazy: number | null = null;
    private kilobritishthermalunitsperhourLazy: number | null = null;
    private megabritishthermalunitsperhourLazy: number | null = null;
    private millijoulesperhourLazy: number | null = null;
    private kilojoulesperhourLazy: number | null = null;
    private megajoulesperhourLazy: number | null = null;
    private gigajoulesperhourLazy: number | null = null;

    /**
     * Create a new Power.
     * @param value The value.
     * @param fromUnit The ‘Power’ unit to create from.
     * The default unit is Watts
     */
    public constructor(value: number, fromUnit: PowerUnits = PowerUnits.Watts) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of Power is Watts.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get Watts(): number {
        if(this.wattsLazy !== null){
            return this.wattsLazy;
        }
        return this.wattsLazy = this.convertFromBase(PowerUnits.Watts);
    }

    /** */
    public get MechanicalHorsepower(): number {
        if(this.mechanicalhorsepowerLazy !== null){
            return this.mechanicalhorsepowerLazy;
        }
        return this.mechanicalhorsepowerLazy = this.convertFromBase(PowerUnits.MechanicalHorsepower);
    }

    /** */
    public get MetricHorsepower(): number {
        if(this.metrichorsepowerLazy !== null){
            return this.metrichorsepowerLazy;
        }
        return this.metrichorsepowerLazy = this.convertFromBase(PowerUnits.MetricHorsepower);
    }

    /** */
    public get ElectricalHorsepower(): number {
        if(this.electricalhorsepowerLazy !== null){
            return this.electricalhorsepowerLazy;
        }
        return this.electricalhorsepowerLazy = this.convertFromBase(PowerUnits.ElectricalHorsepower);
    }

    /** */
    public get BoilerHorsepower(): number {
        if(this.boilerhorsepowerLazy !== null){
            return this.boilerhorsepowerLazy;
        }
        return this.boilerhorsepowerLazy = this.convertFromBase(PowerUnits.BoilerHorsepower);
    }

    /** */
    public get HydraulicHorsepower(): number {
        if(this.hydraulichorsepowerLazy !== null){
            return this.hydraulichorsepowerLazy;
        }
        return this.hydraulichorsepowerLazy = this.convertFromBase(PowerUnits.HydraulicHorsepower);
    }

    /** */
    public get BritishThermalUnitsPerHour(): number {
        if(this.britishthermalunitsperhourLazy !== null){
            return this.britishthermalunitsperhourLazy;
        }
        return this.britishthermalunitsperhourLazy = this.convertFromBase(PowerUnits.BritishThermalUnitsPerHour);
    }

    /** */
    public get JoulesPerHour(): number {
        if(this.joulesperhourLazy !== null){
            return this.joulesperhourLazy;
        }
        return this.joulesperhourLazy = this.convertFromBase(PowerUnits.JoulesPerHour);
    }

    /** */
    public get Femtowatts(): number {
        if(this.femtowattsLazy !== null){
            return this.femtowattsLazy;
        }
        return this.femtowattsLazy = this.convertFromBase(PowerUnits.Femtowatts);
    }

    /** */
    public get Picowatts(): number {
        if(this.picowattsLazy !== null){
            return this.picowattsLazy;
        }
        return this.picowattsLazy = this.convertFromBase(PowerUnits.Picowatts);
    }

    /** */
    public get Nanowatts(): number {
        if(this.nanowattsLazy !== null){
            return this.nanowattsLazy;
        }
        return this.nanowattsLazy = this.convertFromBase(PowerUnits.Nanowatts);
    }

    /** */
    public get Microwatts(): number {
        if(this.microwattsLazy !== null){
            return this.microwattsLazy;
        }
        return this.microwattsLazy = this.convertFromBase(PowerUnits.Microwatts);
    }

    /** */
    public get Milliwatts(): number {
        if(this.milliwattsLazy !== null){
            return this.milliwattsLazy;
        }
        return this.milliwattsLazy = this.convertFromBase(PowerUnits.Milliwatts);
    }

    /** */
    public get Deciwatts(): number {
        if(this.deciwattsLazy !== null){
            return this.deciwattsLazy;
        }
        return this.deciwattsLazy = this.convertFromBase(PowerUnits.Deciwatts);
    }

    /** */
    public get Decawatts(): number {
        if(this.decawattsLazy !== null){
            return this.decawattsLazy;
        }
        return this.decawattsLazy = this.convertFromBase(PowerUnits.Decawatts);
    }

    /** */
    public get Kilowatts(): number {
        if(this.kilowattsLazy !== null){
            return this.kilowattsLazy;
        }
        return this.kilowattsLazy = this.convertFromBase(PowerUnits.Kilowatts);
    }

    /** */
    public get Megawatts(): number {
        if(this.megawattsLazy !== null){
            return this.megawattsLazy;
        }
        return this.megawattsLazy = this.convertFromBase(PowerUnits.Megawatts);
    }

    /** */
    public get Gigawatts(): number {
        if(this.gigawattsLazy !== null){
            return this.gigawattsLazy;
        }
        return this.gigawattsLazy = this.convertFromBase(PowerUnits.Gigawatts);
    }

    /** */
    public get Terawatts(): number {
        if(this.terawattsLazy !== null){
            return this.terawattsLazy;
        }
        return this.terawattsLazy = this.convertFromBase(PowerUnits.Terawatts);
    }

    /** */
    public get Petawatts(): number {
        if(this.petawattsLazy !== null){
            return this.petawattsLazy;
        }
        return this.petawattsLazy = this.convertFromBase(PowerUnits.Petawatts);
    }

    /** */
    public get KilobritishThermalUnitsPerHour(): number {
        if(this.kilobritishthermalunitsperhourLazy !== null){
            return this.kilobritishthermalunitsperhourLazy;
        }
        return this.kilobritishthermalunitsperhourLazy = this.convertFromBase(PowerUnits.KilobritishThermalUnitsPerHour);
    }

    /** */
    public get MegabritishThermalUnitsPerHour(): number {
        if(this.megabritishthermalunitsperhourLazy !== null){
            return this.megabritishthermalunitsperhourLazy;
        }
        return this.megabritishthermalunitsperhourLazy = this.convertFromBase(PowerUnits.MegabritishThermalUnitsPerHour);
    }

    /** */
    public get MillijoulesPerHour(): number {
        if(this.millijoulesperhourLazy !== null){
            return this.millijoulesperhourLazy;
        }
        return this.millijoulesperhourLazy = this.convertFromBase(PowerUnits.MillijoulesPerHour);
    }

    /** */
    public get KilojoulesPerHour(): number {
        if(this.kilojoulesperhourLazy !== null){
            return this.kilojoulesperhourLazy;
        }
        return this.kilojoulesperhourLazy = this.convertFromBase(PowerUnits.KilojoulesPerHour);
    }

    /** */
    public get MegajoulesPerHour(): number {
        if(this.megajoulesperhourLazy !== null){
            return this.megajoulesperhourLazy;
        }
        return this.megajoulesperhourLazy = this.convertFromBase(PowerUnits.MegajoulesPerHour);
    }

    /** */
    public get GigajoulesPerHour(): number {
        if(this.gigajoulesperhourLazy !== null){
            return this.gigajoulesperhourLazy;
        }
        return this.gigajoulesperhourLazy = this.convertFromBase(PowerUnits.GigajoulesPerHour);
    }

    /**
     * Create a new Power instance from a Watts
     *
     * @param value The unit as Watts to create a new Power from.
     * @returns The new Power instance.
     */
    public static FromWatts(value: number): Power {
        return new Power(value, PowerUnits.Watts);
    }

    /**
     * Create a new Power instance from a MechanicalHorsepower
     *
     * @param value The unit as MechanicalHorsepower to create a new Power from.
     * @returns The new Power instance.
     */
    public static FromMechanicalHorsepower(value: number): Power {
        return new Power(value, PowerUnits.MechanicalHorsepower);
    }

    /**
     * Create a new Power instance from a MetricHorsepower
     *
     * @param value The unit as MetricHorsepower to create a new Power from.
     * @returns The new Power instance.
     */
    public static FromMetricHorsepower(value: number): Power {
        return new Power(value, PowerUnits.MetricHorsepower);
    }

    /**
     * Create a new Power instance from a ElectricalHorsepower
     *
     * @param value The unit as ElectricalHorsepower to create a new Power from.
     * @returns The new Power instance.
     */
    public static FromElectricalHorsepower(value: number): Power {
        return new Power(value, PowerUnits.ElectricalHorsepower);
    }

    /**
     * Create a new Power instance from a BoilerHorsepower
     *
     * @param value The unit as BoilerHorsepower to create a new Power from.
     * @returns The new Power instance.
     */
    public static FromBoilerHorsepower(value: number): Power {
        return new Power(value, PowerUnits.BoilerHorsepower);
    }

    /**
     * Create a new Power instance from a HydraulicHorsepower
     *
     * @param value The unit as HydraulicHorsepower to create a new Power from.
     * @returns The new Power instance.
     */
    public static FromHydraulicHorsepower(value: number): Power {
        return new Power(value, PowerUnits.HydraulicHorsepower);
    }

    /**
     * Create a new Power instance from a BritishThermalUnitsPerHour
     *
     * @param value The unit as BritishThermalUnitsPerHour to create a new Power from.
     * @returns The new Power instance.
     */
    public static FromBritishThermalUnitsPerHour(value: number): Power {
        return new Power(value, PowerUnits.BritishThermalUnitsPerHour);
    }

    /**
     * Create a new Power instance from a JoulesPerHour
     *
     * @param value The unit as JoulesPerHour to create a new Power from.
     * @returns The new Power instance.
     */
    public static FromJoulesPerHour(value: number): Power {
        return new Power(value, PowerUnits.JoulesPerHour);
    }

    /**
     * Create a new Power instance from a Femtowatts
     *
     * @param value The unit as Femtowatts to create a new Power from.
     * @returns The new Power instance.
     */
    public static FromFemtowatts(value: number): Power {
        return new Power(value, PowerUnits.Femtowatts);
    }

    /**
     * Create a new Power instance from a Picowatts
     *
     * @param value The unit as Picowatts to create a new Power from.
     * @returns The new Power instance.
     */
    public static FromPicowatts(value: number): Power {
        return new Power(value, PowerUnits.Picowatts);
    }

    /**
     * Create a new Power instance from a Nanowatts
     *
     * @param value The unit as Nanowatts to create a new Power from.
     * @returns The new Power instance.
     */
    public static FromNanowatts(value: number): Power {
        return new Power(value, PowerUnits.Nanowatts);
    }

    /**
     * Create a new Power instance from a Microwatts
     *
     * @param value The unit as Microwatts to create a new Power from.
     * @returns The new Power instance.
     */
    public static FromMicrowatts(value: number): Power {
        return new Power(value, PowerUnits.Microwatts);
    }

    /**
     * Create a new Power instance from a Milliwatts
     *
     * @param value The unit as Milliwatts to create a new Power from.
     * @returns The new Power instance.
     */
    public static FromMilliwatts(value: number): Power {
        return new Power(value, PowerUnits.Milliwatts);
    }

    /**
     * Create a new Power instance from a Deciwatts
     *
     * @param value The unit as Deciwatts to create a new Power from.
     * @returns The new Power instance.
     */
    public static FromDeciwatts(value: number): Power {
        return new Power(value, PowerUnits.Deciwatts);
    }

    /**
     * Create a new Power instance from a Decawatts
     *
     * @param value The unit as Decawatts to create a new Power from.
     * @returns The new Power instance.
     */
    public static FromDecawatts(value: number): Power {
        return new Power(value, PowerUnits.Decawatts);
    }

    /**
     * Create a new Power instance from a Kilowatts
     *
     * @param value The unit as Kilowatts to create a new Power from.
     * @returns The new Power instance.
     */
    public static FromKilowatts(value: number): Power {
        return new Power(value, PowerUnits.Kilowatts);
    }

    /**
     * Create a new Power instance from a Megawatts
     *
     * @param value The unit as Megawatts to create a new Power from.
     * @returns The new Power instance.
     */
    public static FromMegawatts(value: number): Power {
        return new Power(value, PowerUnits.Megawatts);
    }

    /**
     * Create a new Power instance from a Gigawatts
     *
     * @param value The unit as Gigawatts to create a new Power from.
     * @returns The new Power instance.
     */
    public static FromGigawatts(value: number): Power {
        return new Power(value, PowerUnits.Gigawatts);
    }

    /**
     * Create a new Power instance from a Terawatts
     *
     * @param value The unit as Terawatts to create a new Power from.
     * @returns The new Power instance.
     */
    public static FromTerawatts(value: number): Power {
        return new Power(value, PowerUnits.Terawatts);
    }

    /**
     * Create a new Power instance from a Petawatts
     *
     * @param value The unit as Petawatts to create a new Power from.
     * @returns The new Power instance.
     */
    public static FromPetawatts(value: number): Power {
        return new Power(value, PowerUnits.Petawatts);
    }

    /**
     * Create a new Power instance from a KilobritishThermalUnitsPerHour
     *
     * @param value The unit as KilobritishThermalUnitsPerHour to create a new Power from.
     * @returns The new Power instance.
     */
    public static FromKilobritishThermalUnitsPerHour(value: number): Power {
        return new Power(value, PowerUnits.KilobritishThermalUnitsPerHour);
    }

    /**
     * Create a new Power instance from a MegabritishThermalUnitsPerHour
     *
     * @param value The unit as MegabritishThermalUnitsPerHour to create a new Power from.
     * @returns The new Power instance.
     */
    public static FromMegabritishThermalUnitsPerHour(value: number): Power {
        return new Power(value, PowerUnits.MegabritishThermalUnitsPerHour);
    }

    /**
     * Create a new Power instance from a MillijoulesPerHour
     *
     * @param value The unit as MillijoulesPerHour to create a new Power from.
     * @returns The new Power instance.
     */
    public static FromMillijoulesPerHour(value: number): Power {
        return new Power(value, PowerUnits.MillijoulesPerHour);
    }

    /**
     * Create a new Power instance from a KilojoulesPerHour
     *
     * @param value The unit as KilojoulesPerHour to create a new Power from.
     * @returns The new Power instance.
     */
    public static FromKilojoulesPerHour(value: number): Power {
        return new Power(value, PowerUnits.KilojoulesPerHour);
    }

    /**
     * Create a new Power instance from a MegajoulesPerHour
     *
     * @param value The unit as MegajoulesPerHour to create a new Power from.
     * @returns The new Power instance.
     */
    public static FromMegajoulesPerHour(value: number): Power {
        return new Power(value, PowerUnits.MegajoulesPerHour);
    }

    /**
     * Create a new Power instance from a GigajoulesPerHour
     *
     * @param value The unit as GigajoulesPerHour to create a new Power from.
     * @returns The new Power instance.
     */
    public static FromGigajoulesPerHour(value: number): Power {
        return new Power(value, PowerUnits.GigajoulesPerHour);
    }

    private convertFromBase(toUnit: PowerUnits): number {
        switch (toUnit) {
                
            case PowerUnits.Watts:
            case PowerUnits.Watts:        
                return this.value;
            case PowerUnits.MechanicalHorsepower:
                    
                return this.value / 745.69;
            case PowerUnits.MetricHorsepower:
                    
                return this.value / 735.49875;
            case PowerUnits.ElectricalHorsepower:
                    
                return this.value / 746;
            case PowerUnits.BoilerHorsepower:
                    
                return this.value / 9812.5;
            case PowerUnits.HydraulicHorsepower:
                    
                return this.value / 745.69988145;
            case PowerUnits.BritishThermalUnitsPerHour:
            case PowerUnits.BritishThermalUnitsPerHour:        
                return this.value / 0.29307107017;
            case PowerUnits.JoulesPerHour:
            case PowerUnits.JoulesPerHour:        
                return this.value * 3600;
            case PowerUnits.Femtowatts:
            case PowerUnits.Femtowatts:        
                return (this.value) / 1e-15;
            case PowerUnits.Picowatts:
            case PowerUnits.Picowatts:        
                return (this.value) / 1e-12;
            case PowerUnits.Nanowatts:
            case PowerUnits.Nanowatts:        
                return (this.value) / 1e-9;
            case PowerUnits.Microwatts:
            case PowerUnits.Microwatts:        
                return (this.value) / 0.000001;
            case PowerUnits.Milliwatts:
            case PowerUnits.Milliwatts:        
                return (this.value) / 0.001;
            case PowerUnits.Deciwatts:
            case PowerUnits.Deciwatts:        
                return (this.value) / 0.1;
            case PowerUnits.Decawatts:
            case PowerUnits.Decawatts:        
                return (this.value) / 10;
            case PowerUnits.Kilowatts:
            case PowerUnits.Kilowatts:        
                return (this.value) / 1000;
            case PowerUnits.Megawatts:
            case PowerUnits.Megawatts:        
                return (this.value) / 1000000;
            case PowerUnits.Gigawatts:
            case PowerUnits.Gigawatts:        
                return (this.value) / 1000000000;
            case PowerUnits.Terawatts:
            case PowerUnits.Terawatts:        
                return (this.value) / 1000000000000;
            case PowerUnits.Petawatts:
            case PowerUnits.Petawatts:        
                return (this.value) / 1000000000000000;
            case PowerUnits.KilobritishThermalUnitsPerHour:
            case PowerUnits.KilobritishThermalUnitsPerHour:        
                return (this.value / 0.29307107017) / 1000;
            case PowerUnits.MegabritishThermalUnitsPerHour:
            case PowerUnits.MegabritishThermalUnitsPerHour:        
                return (this.value / 0.29307107017) / 1000000;
            case PowerUnits.MillijoulesPerHour:
            case PowerUnits.MillijoulesPerHour:        
                return (this.value * 3600) / 0.001;
            case PowerUnits.KilojoulesPerHour:
            case PowerUnits.KilojoulesPerHour:        
                return (this.value * 3600) / 1000;
            case PowerUnits.MegajoulesPerHour:
            case PowerUnits.MegajoulesPerHour:        
                return (this.value * 3600) / 1000000;
            case PowerUnits.GigajoulesPerHour:
            case PowerUnits.GigajoulesPerHour:        
                return (this.value * 3600) / 1000000000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: PowerUnits): number {
        switch (fromUnit) {
                
            case PowerUnits.Watts:
            case PowerUnits.Watts:        
                return value;
            case PowerUnits.MechanicalHorsepower:
                    
                return value * 745.69;
            case PowerUnits.MetricHorsepower:
                    
                return value * 735.49875;
            case PowerUnits.ElectricalHorsepower:
                    
                return value * 746;
            case PowerUnits.BoilerHorsepower:
                    
                return value * 9812.5;
            case PowerUnits.HydraulicHorsepower:
                    
                return value * 745.69988145;
            case PowerUnits.BritishThermalUnitsPerHour:
            case PowerUnits.BritishThermalUnitsPerHour:        
                return value * 0.29307107017;
            case PowerUnits.JoulesPerHour:
            case PowerUnits.JoulesPerHour:        
                return value / 3600;
            case PowerUnits.Femtowatts:
            case PowerUnits.Femtowatts:        
                return (value) * 1e-15;
            case PowerUnits.Picowatts:
            case PowerUnits.Picowatts:        
                return (value) * 1e-12;
            case PowerUnits.Nanowatts:
            case PowerUnits.Nanowatts:        
                return (value) * 1e-9;
            case PowerUnits.Microwatts:
            case PowerUnits.Microwatts:        
                return (value) * 0.000001;
            case PowerUnits.Milliwatts:
            case PowerUnits.Milliwatts:        
                return (value) * 0.001;
            case PowerUnits.Deciwatts:
            case PowerUnits.Deciwatts:        
                return (value) * 0.1;
            case PowerUnits.Decawatts:
            case PowerUnits.Decawatts:        
                return (value) * 10;
            case PowerUnits.Kilowatts:
            case PowerUnits.Kilowatts:        
                return (value) * 1000;
            case PowerUnits.Megawatts:
            case PowerUnits.Megawatts:        
                return (value) * 1000000;
            case PowerUnits.Gigawatts:
            case PowerUnits.Gigawatts:        
                return (value) * 1000000000;
            case PowerUnits.Terawatts:
            case PowerUnits.Terawatts:        
                return (value) * 1000000000000;
            case PowerUnits.Petawatts:
            case PowerUnits.Petawatts:        
                return (value) * 1000000000000000;
            case PowerUnits.KilobritishThermalUnitsPerHour:
            case PowerUnits.KilobritishThermalUnitsPerHour:        
                return (value * 0.29307107017) * 1000;
            case PowerUnits.MegabritishThermalUnitsPerHour:
            case PowerUnits.MegabritishThermalUnitsPerHour:        
                return (value * 0.29307107017) * 1000000;
            case PowerUnits.MillijoulesPerHour:
            case PowerUnits.MillijoulesPerHour:        
                return (value / 3600) * 0.001;
            case PowerUnits.KilojoulesPerHour:
            case PowerUnits.KilojoulesPerHour:        
                return (value / 3600) * 1000;
            case PowerUnits.MegajoulesPerHour:
            case PowerUnits.MegajoulesPerHour:        
                return (value / 3600) * 1000000;
            case PowerUnits.GigajoulesPerHour:
            case PowerUnits.GigajoulesPerHour:        
                return (value / 3600) * 1000000000;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the Power to string.
     * Note! the default format for Power is Watts.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the Power.
     * @returns The string format of the Power.
     */
    public toString(unit: PowerUnits = PowerUnits.Watts): string {

        switch (unit) {
            
            case PowerUnits.Watts:
                return this.Watts + ` W`;
            case PowerUnits.MechanicalHorsepower:
                return this.MechanicalHorsepower + ` hp(I)`;
            case PowerUnits.MetricHorsepower:
                return this.MetricHorsepower + ` hp(M)`;
            case PowerUnits.ElectricalHorsepower:
                return this.ElectricalHorsepower + ` hp(E)`;
            case PowerUnits.BoilerHorsepower:
                return this.BoilerHorsepower + ` hp(S)`;
            case PowerUnits.HydraulicHorsepower:
                return this.HydraulicHorsepower + ` hp(H)`;
            case PowerUnits.BritishThermalUnitsPerHour:
                return this.BritishThermalUnitsPerHour + ` Btu/h`;
            case PowerUnits.JoulesPerHour:
                return this.JoulesPerHour + ` J/h`;
            case PowerUnits.Femtowatts:
                return this.Femtowatts + ` `;
            case PowerUnits.Picowatts:
                return this.Picowatts + ` `;
            case PowerUnits.Nanowatts:
                return this.Nanowatts + ` `;
            case PowerUnits.Microwatts:
                return this.Microwatts + ` `;
            case PowerUnits.Milliwatts:
                return this.Milliwatts + ` `;
            case PowerUnits.Deciwatts:
                return this.Deciwatts + ` `;
            case PowerUnits.Decawatts:
                return this.Decawatts + ` `;
            case PowerUnits.Kilowatts:
                return this.Kilowatts + ` `;
            case PowerUnits.Megawatts:
                return this.Megawatts + ` `;
            case PowerUnits.Gigawatts:
                return this.Gigawatts + ` `;
            case PowerUnits.Terawatts:
                return this.Terawatts + ` `;
            case PowerUnits.Petawatts:
                return this.Petawatts + ` `;
            case PowerUnits.KilobritishThermalUnitsPerHour:
                return this.KilobritishThermalUnitsPerHour + ` `;
            case PowerUnits.MegabritishThermalUnitsPerHour:
                return this.MegabritishThermalUnitsPerHour + ` `;
            case PowerUnits.MillijoulesPerHour:
                return this.MillijoulesPerHour + ` `;
            case PowerUnits.KilojoulesPerHour:
                return this.KilojoulesPerHour + ` `;
            case PowerUnits.MegajoulesPerHour:
                return this.MegajoulesPerHour + ` `;
            case PowerUnits.GigajoulesPerHour:
                return this.GigajoulesPerHour + ` `;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get Power unit abbreviation.
     * Note! the default abbreviation for Power is Watts.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the Power.
     * @returns The abbreviation string of Power.
     */
    public getUnitAbbreviation(unitAbbreviation: PowerUnits = PowerUnits.Watts): string {

        switch (unitAbbreviation) {
            
            case PowerUnits.Watts:
                return `W`;
            case PowerUnits.MechanicalHorsepower:
                return `hp(I)`;
            case PowerUnits.MetricHorsepower:
                return `hp(M)`;
            case PowerUnits.ElectricalHorsepower:
                return `hp(E)`;
            case PowerUnits.BoilerHorsepower:
                return `hp(S)`;
            case PowerUnits.HydraulicHorsepower:
                return `hp(H)`;
            case PowerUnits.BritishThermalUnitsPerHour:
                return `Btu/h`;
            case PowerUnits.JoulesPerHour:
                return `J/h`;
            case PowerUnits.Femtowatts:
                return ``;
            case PowerUnits.Picowatts:
                return ``;
            case PowerUnits.Nanowatts:
                return ``;
            case PowerUnits.Microwatts:
                return ``;
            case PowerUnits.Milliwatts:
                return ``;
            case PowerUnits.Deciwatts:
                return ``;
            case PowerUnits.Decawatts:
                return ``;
            case PowerUnits.Kilowatts:
                return ``;
            case PowerUnits.Megawatts:
                return ``;
            case PowerUnits.Gigawatts:
                return ``;
            case PowerUnits.Terawatts:
                return ``;
            case PowerUnits.Petawatts:
                return ``;
            case PowerUnits.KilobritishThermalUnitsPerHour:
                return ``;
            case PowerUnits.MegabritishThermalUnitsPerHour:
                return ``;
            case PowerUnits.MillijoulesPerHour:
                return ``;
            case PowerUnits.KilojoulesPerHour:
                return ``;
            case PowerUnits.MegajoulesPerHour:
                return ``;
            case PowerUnits.GigajoulesPerHour:
                return ``;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given Power are equals to the current Power.
     * @param power The other Power.
     * @returns True if the given Power are equal to the current Power.
     */
    public equals(power: Power): boolean {
        return this.value === power.BaseValue;
    }

    /**
     * Compare the given Power against the current Power.
     * @param power The other Power.
     * @returns 0 if they are equal, -1 if the current Power is less then other, 1 if the current Power is greater then other.
     */
    public compareTo(power: Power): number {

        if (this.value > power.BaseValue)
            return 1;
        if (this.value < power.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given Power with the current Power.
     * @param power The other Power.
     * @returns A new Power instance with the results.
     */
    public add(power: Power): Power {
        return new Power(this.value + power.BaseValue)
    }

    /**
     * Subtract the given Power with the current Power.
     * @param power The other Power.
     * @returns A new Power instance with the results.
     */
    public subtract(power: Power): Power {
        return new Power(this.value - power.BaseValue)
    }

    /**
     * Multiply the given Power with the current Power.
     * @param power The other Power.
     * @returns A new Power instance with the results.
     */
    public multiply(power: Power): Power {
        return new Power(this.value * power.BaseValue)
    }

    /**
     * Divide the given Power with the current Power.
     * @param power The other Power.
     * @returns A new Power instance with the results.
     */
    public divide(power: Power): Power {
        return new Power(this.value / power.BaseValue)
    }

    /**
     * Modulo the given Power with the current Power.
     * @param power The other Power.
     * @returns A new Power instance with the results.
     */
    public modulo(power: Power): Power {
        return new Power(this.value % power.BaseValue)
    }

    /**
     * Pow the given Power with the current Power.
     * @param power The other Power.
     * @returns A new Power instance with the results.
     */
    public pow(power: Power): Power {
        return new Power(this.value ** power.BaseValue)
    }
}
