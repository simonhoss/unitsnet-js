# unitsnet-js

The unitsnet-js package provides an efficient way to store unit variables and perform easy conversions to different units when it required. 

It offers support for more than 100 unit types across various unit categories, including pretty-printing, comparison, and arithmetic methods. 

The API is designed to be user-friendly and straightforward to use.

The library is built on top of the [Units.NET](https://github.com/angularsen/UnitsNet) project and leverages their [definitions sources](https://github.com/angularsen/UnitsNet/tree/master/Common/UnitDefinitions) to generate the JavaScript unit classes.

[![Build & Test Status](https://github.com/haimkastner/unitsnet-js/workflows/unitsnet-js/badge.svg?branch=master)](https://github.com/haimkastner/unitsnet-js/actions)

###### The unitsnet-js package does not require any external dependencies or packages to function.

Package is available on NPM at https://www.npmjs.com/package/unitsnet-js

> The package for C# is available in the Nuget registry at https://www.nuget.org/packages/UnitsNet/
> And a similar package for Python is available in the PyPI registry at https://pypi.org/project/unitsnet-py/


## Install via NPM:

```bash 

npm install unitsnet-js

```

## Example Usage in TypeScript

```typescript
import { Angle, AngleUnits, Length, LengthUnits } from 'unitsnet-js';


let angle = Angle.FromDegrees(180);
// equals to
angle =  new Angle(180, AngleUnits.Degrees);

console.info(angle.Radians); // 3.141592653589793
console.info(angle.Microradians); // 3141592.65358979
console.info(angle.Gradians); // 200
console.info(angle.Microdegrees); // 180000000

// Print the default unit toString (The defualt for angle is degrees)
console.info(angle.toString()); // 180 °

console.info(angle.toString(AngleUnits.Degrees)); // 180 °
console.info(angle.toString(AngleUnits.Radians)); // 3.141592653589793 rad

// Additional methods

const length1 = Length.FromMeters(10);
const length2 = Length.FromDecimeters(100);
const length3 = Length.FromMeters(3);

// 'equals' method
console.log(length1.equals(length2)) // true;
console.log(length1.equals(length3)) // false;

// 'compareTo' method
console.log(length1.compareTo(length3)) // 1;
console.log(length3.compareTo(length1)) // -1;
console.log(length2.compareTo(length1)) // 0;

// Arithmetics methods
const results1 = length1.add(length3);
const results2 = length1.subtract(length3);
const results3 = length1.multiply(length3);
const results4 = length1.divide(length3);
const results5 = length1.modulo(length3);
const results6 = length1.pow(length3);
console.log(results1.toString(LengthUnits.Meters)) // 13 m
console.log(results2.toString(LengthUnits.Meters)) // 7 m
console.log(results3.toString(LengthUnits.Meters)) // 30 m
console.log(results4.toString(LengthUnits.Meters)) // 3.3333333333333335 m
console.log(results5.toString(LengthUnits.Meters)) // 1 m
console.log(results6.toString(LengthUnits.Meters)) // 1000 m
```

### Supported units

The package provides support for the following units:

~SUPPORTED_UNITS~

> This file generated from [README.t.md](./generator-scripts/src/assets/README.t.md) template file.
