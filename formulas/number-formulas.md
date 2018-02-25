---
title: Number formulas
date: 2017-03-30 05:00:00 Z
---

# Number formulas
In Ruby, Fixnum refers to integers, e.g. 9, 10, 11, while Float refers to decimals, e.g. 1.75.

Workato supports a variety of number formulas. Formulas in Workato are whitelisted Ruby methods, and therefore not all Ruby methods are supported. You can always [reach out to us](/contact-us.md) to add additional formulas to the whitelist. Syntax and functionality for these formulas are generally unchanged. Take note that most formulas will return an error and stop the job if it tries to operate on nulls (expressed as `nil` in Ruby), except for `present?`, `presence` and `blank?`.

You can refer to the complete Ruby documentation for Fixnum (integers) [here](http://ruby-doc.org/core-2.3.3/Fixnum.html) as well as the Ruby documentation for Float (decimals) [here](http://ruby-doc.org/core-2.3.3/Float.html).

# Arithmetic operations
In the cases of arithmetic operations, whether the values are of integer types or decimal (float) types are important. Formulas will alway stick to the types given as input, and the returned result will be of the most precise type.

For example:
- If integer values are provided, an integer value will be returned.
- If float values are provided, a float value will be returned.
- If both float and integer values are provided, a float value will be returned, as that is more precise.

## The add (+) operator

This operator allows the addition of operands on either side. This section talks about number arithmetics. Date arithmetics is possible as well and can be found [here](/formulas/date-formulas.md#date-arithmetics).

### Example
| Example     | Result | Type   |
| ----------- | ------ | ------ |
| `4 + 7`     | 11     | Fixnum |
| `4.0 + 7`   | 11.0   | Float  |
| `4.0 + 7.0` | 11.0   | Float  |

---

## The subtract (-) operator

This operator subtracts the right hand operand from the left hand operand. This section talks about number arithmetics. Date arithmetics is possible as well and can be found [here](/formulas/date-formulas.md#date-arithmetics).

### Example
| Example     | Result | Type   |
| ----------- | ------ | ------ |
| `4 - 7`     | -3     | Fixnum |
| `4.0 - 7`   | -3.0   | Float  |
| `4.0 - 7.0` | -3.0   | Float  |

---

## The multiply (*) operator
This operator multiplies the operands on either side.

### Example
| Example     | Result | Type   |
| ----------- | ------ | ------ |
| `4 * 7`     | 28     | Fixnum |
| `4.0 * 7`   | 28.0   | Float  |
| `4.0 * 7.0` | 28.0   | Float  |

---

## The divide (/) operator

Divides left hand operand by right hand operand.

### Example
| Example     | Result      | Type   |
| ----------- | ----------- | ------ |
| `4 / 7`     | 0           | Fixnum |
| `4.0 / 7`   | 0.571428... | Float  |
| `7 / 4`     | 1           | Fixnum |
| `7 / 4.0`   | 1.75        | Float  |
| `7.0 / 4`   | 1.75        | Float  |
| `7.0 / 4.0` | 1.75        | Float  |

---

## The modulo (%) operator

Divides left hand operand by right hand operand and returns the remainder.

### Example
| Example     | Result | Type   |
| ----------- | ------ | ------ |
| `4 % 7`     | 4      | Fixnum |
| `4.0 % 7`   | 4.0    | Float  |
| `4 % 7.0`   | 4.0    | Float  |
| `7 % 4`     | 3      | Fixnum |
| `7.0 % 4.0` | 3.0    | Float  |

---

# Other number formulas

## abs
This function returns the absolute (positive) value of a number.

### Example
| Example      | Result | Type   |
| ------------ | ------ | ------ |
| `-45.abs`    | 45     | Fixnum |
| `45.abs`     | 45     | Fixnum |
| `-45.0.abs`  | 45.0   | Float  |
| `-45.67.abs` | 45.67  | Float  |

---

## round

Rounds off a numerical value to a specified after the formula. Accepts negative values.

| Example              | Result  | Type   |
| -------------------- | ------- | ------ |
| `1234.567.round`     | 1235    | Fixnum |
| `1234.567.round(2)`  | 1234.57 | Float  |
| `1234.567.round(-2)` | 1200    | Fixnum |

---

# Conditionals

## blank?

This function checks the input and returns true if it is a null or an empty string.

### Example
| Example       | Result |
| ------------- | ------ |
| `" ".blank?`  | true   |
| `null.blank?` | true   |
| `-45.blank?`  | false  |
| `0.blank?`    | false  |

---

## presence

This function will check the input number, returning its value if there is one present, else returning nil.

### Example
| Example          | Result | Type   |
| ---------------- | ------ | ------ |
| `" ".presence`   | nil    | nil    |
| `null.presence`  | nil    | nil    |
| `-45.presence`   | -45    | Fixnum |
| `0.presence`     | 0      | Fixnum |
| `45.0.presence`  | 45.0   | Float  |
| `-45.0.presence` | -45.0  | Float  |

---

## present?

This function will check the input, returning true if there is a value present. If input is null or an empty string, formula returns false.

### Example
| Example         | Result |
| --------------- | ------ |
| `" ".present?`  | false  |
| `null.present?` | false  |
| `-45.present?`  | true   |
| `0.present?`    | true   |
| `45.0.present?` | true   |

# Conversions

## to_i

This function can be used on a number to only take its integer value. Floats will be rounded down. To round to closest integer, use the `round` formula instead.

### Example
| Example       | Result | Type   |
| ------------- | ------ | ------ |
| `45.67.to_i`  | 45     | Fixnum |
| `-45.67.to_i` | -45    | Fixnum |
| `45.to_i`     | 45     | Fixnum |
| `-45.to_i`    | -45    | Fixnum |
| `0.to_i`      | 0      | Fixnum |

---

## to_f

This function can be used on a number to retain its decimal values. When applied to an integer, it converts the data type from fixnum to float.

### Example
| Example       | Result | Type  |
| ------------- | ------ | ----- |
| `45.67.to_f`  | 45.67  | Float |
| `-45.67.to_f` | -45.67 | Float |
| `45.to_f`     | 45.0   | Float |
| `-45.to_f`    | -45.0  | Float |
| `0.to_f`      | 0      | Float |

---

## to_s

This function converts a number into a string.

### Example
| Example       | Result   | Type   |
| ------------- | -------- | ------ |
| `45.67.to_s`  | "45.67"  | String |
| `-45.67.to_s` | "-45.67" | String |
| `45.to_s`     | "45"     | String |
| `-45.to_s`    | "-45"    | String |
| `0.to_s`      | "0"      | String |

---

## to_currency
This function converts a number into a currency string. The number of decimal places to round to can be defined with an additional parameter.

By adding a parameter with a locale and country code, it will add the appropriate currency symbol.

### Example
| Example                            | Result  | Type     |
| ---------------------------------- | ------- | -------- |
| `45.678.to_currency`               | $45.68  | Currency |
| `45.6789.to_currency(precision:3)` | $45.678 | Currency |
| `45.67.to_currency(locale: fr)`    | 45.67 € | Currency |

---

## to_phone

This function converts a number into a formatted phone number. By default, the delimiter is a dash (-), but delimiters can be specified via a parameter.

By adding a parameter with area code: true, the first three numbers will be enclosed in brackets, representing the area.

By adding a parameter with extension: number, the formatted phone number will have the extension appended at the end.

By adding a parameter with country_code: number, the formatted phone number will be prefixed with the country code.

### Example
| Example                                  | Result               |
| ---------------------------------------- | -------------------- |
| `1112223333.to_phone`                    | "111-222-3333"       |
| `1112223333.to_phone(delimiter: " ")`    | "111 222 3333"       |
| `1112223333.to_phone(area_code: true)`   | "(111) 222-3333"     |
| `1112223333.to_phone(country_code: 1)`   | "+1-111-222-3333"    |
| `1112223333.to_phone(area_code: true, country_code: 1)` | "+1-(111) 222-3333"  |
| `1112223333.to_phone(extension: 444)`    | "111-222-3333 x 444" |

## Converting other data types to numbers

To convert a value of other data types, e.g. string, date, into an integer or a float, use the [to_i](#toi) and the [to_f](#tof) formulas respectively.
