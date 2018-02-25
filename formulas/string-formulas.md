---
title: String formulas
date: 2017-03-30 05:00:00 Z
---

# String formulas
In Ruby, strings refer to sequences of text and characters.

Workato supports a variety of string formulas. Formulas in Workato are whitelisted Ruby methods, and therefore not all Ruby methods are supported. You can always [reach out to us](/contact-us.md) to add additional formulas to the whitelist. Syntax and functionality for these formulas are generally unchanged. Take note that most formulas will return an error and stop the job if it tries to operate on nulls (expressed as `nil` in Ruby), except for `present?`, `presence` and `blank?`.

You can refer to the complete Ruby documentation for strings [here](https://ruby-doc.org/core-2.3.3/String.html).

In the examples below, we will look at some of the methods that can be used to manipulate a string of text, which in this case the input string is 'Jean Marie'.

---

# Conditionals

This section will cover formulas which allow you to apply conditions (if-else) to your strings. Find out more about how to use conditionals [here](http://docs.workato.com/formulas.html#conditionals)

---

## blank?

This function checks the input string and returns true if it is an empty string or if it is null.

### Example
| Example               | Result |
| --------------------- | ------ |
| `"Jean Marie".blank?` | false  |
| `" ".blank?`          | true   |
| `nil.blank?`          | true   |

---

## present?

This function will check the input, returning true if there is a value present. If input is null or an empty string, formula returns false.

### Example
| Example                 | Result |
| ----------------------- | ------ |
| `" ".present?`          | false  |
| `nil.present?`          | false  |
| `"Jean Marie".present?` | true   |

---

## presence

This function will check the input, returning its value if there is one present, else returning nil.

### Example
| Example                 | Result     |
| ----------------------- | ---------- |
| `" ".presence`          | nil        |
| `nil.presence`          | nil        |
| `"Jean Marie".presence` | Jean Marie |

---

## include?

This function checks the input string and returns true if it contains the stated keyword. This function is case-sensitive - make sure to downcase or upcase before comparison if you are not concerned about case sensitivity.

### Example
| Example                                | Result |
| -------------------------------------- | ------ |
| `"Jean Marie".include?("Jean")`        | true   |
| `"Jean Marie".include?("Jane")`        | false  |
| `"Jean Marie".include?("Ma")`          | true   |
| `"Jean Marie".include?("ma")`          | false  |
| `"Jean Marie".downcase.include?("ma")` | true   |

---

## exclude?

This function acts in an opposite manner from include?. It will return true only if the input string does NOT contain the stated keyword. This function is case-sensitive - make sure to downcase or upcase before comparison if you are not concerned about case sensitivity.

### Example
| Example                                | Result |
| -------------------------------------- | ------ |
| `"Jean Marie".exclude?("Jean")`        | false  |
| `"Jean Marie".exclude?("Jane")`        | true   |
| `"Jean Marie".exclude?("Ma")`          | false  |
| `"Jean Marie".exclude?("ma")`          | true   |
| `"Jean Marie".downcase.exclude?("ma")` | false  |

---

## match?

This function checks the input string for a particular pattern. It returns true if the pattern is present. This function is case-sensitive - make sure to downcase or upcase before comparison if you are not concerned about case sensitivity.

### Example
| Example                                 | Result |
| --------------------------------------- | ------ |
| `"Jean Marie".match?(/Marie/)`          | true   |
| `"Jean Marie".match?(/marie/)`          | false  |
| `"Jean Marie".downcase.match?(/marie/)` | true   |
| `"Jean Marie".match?(/\s/)`             | true   |

---

## ends_with?

This function checks the input string on whether it finishes with the stated keyword. This function is case-sensitive - make sure to downcase or upcase before comparison if you are not concerned about case sensitivity.

### Example
| Example                                | Result |
| -------------------------------------- | ------ |
| `"Jean Marie".ends_with?("ie")`        | true   |
| `"Jean Marie".ends_with?("IE")`        | false  |
| `"Jean Marie".upcase.ends_with?("IE")` | true   |

---

## starts_with?

This function checks the input string on whether it begins with the stated keyword. This function is case-sensitive - make sure to downcase or upcase before comparison if you are not concerned about case sensitivity.

### Example
| Example                                  | Result |
| ---------------------------------------- | ------ |
| `"Jean Marie".starts_with?("Jean")`      | true   |
| `"Jean Marie".starts_with?("jean")`      | false  |
| `"Jean Marie".upcase.starts_with?("JEAN")` | true   |

---

# Text manipulation

This section will contain formula's which allows you to manipulate the text within strings

---

## parameterize

Replaces special characters in a string. Used when app does not accept non-standard characters.

### Example

| Example                     | Result       |
| --------------------------- | ------------ |
| `"Jeân Mârie".parameterize` | "Jean Marie" |

------

## lstrip

This function (left strip) removes the white space at the beginning of the input string.

### Example
| Example                       | Result            |
| ----------------------------- | ----------------- |
| `"   Jean   Marie   ".lstrip` | "Jean   Marie   " |

------

## rstrip

This function (right strip) removes the white space at the end of the input string.

### Example
| Example                       | Result            |
| ----------------------------- | ----------------- |
| `"   Jean   Marie   ".rstrip` | "   Jean   Marie" |

------

## strip

This function removes the white space at the beginning and the end of the input string.

### Example
| Example                      | Result         |
| ---------------------------- | -------------- |
| `"   Jean   Marie   ".strip` | "Jean   Marie" |

------

## ljust

Aligns the string to the left. You will need to specify the length of the string as this will add spaces/a pattern at the start of it.

### Example

| Example                       | Result         |
| ----------------------------- | -------------- |
| `"Jean Marie".ljust(12)`      | "Jean Marie  " |
| `"Jean Marie".ljust(12, "-")` | "Jean Marie--" |

---

## rjust

Aligns the string to the right. You will need to specify the length of the string as this will add spaces/a pattern at the start of it.

### Example

| Example                       | Result         |
| ----------------------------- | -------------- |
| `"Jean Marie".rjust(12)`      | "  Jean Marie" |
| `"Jean Marie".rjust(12, "-")` | "--Jean Marie" |

------

## reverse

This function inverts a string, reordering the characters in a backward manner. Case is preserved.

### Example
| Example                  | Result         |
| ------------------------ | -------------- |
| `"Jean Marie".reverse`   | "eiraM naeJ"   |
| `" jean marie ".reverse` | " eiram naej " |

------

## gsub

This function replaces all occurrence of the first input value, with the second input value, within the string. This function is case-sensitive - make sure to downcase or upcase before comparison if you are not concerned about case sensitivity.

### Example
| Example                                      | Result       |
| -------------------------------------------- | ------------ |
| `"Jean Marie".gsub("J", "M")`                | "Mean Marie" |
| `"Jean Marie".gsub("j", "M")`                | "Jean Marie" |
| `"Jean Marie".downcase.gsub("j", "M")`       | "Mean marie" |
| `"Awesome".gsub(/[Ae]/, 'A'=>'E', 'e'=>'a')` | "Ewasoma"    |
| `"Anna's Cafe".gsub("'", "\\'")`             | "Annas Cafes Cafe" #replace quotation symbol with text after breakpoint|
| `"Jean'Marie".gsub("'", "\\'")`              | "JeanMarieMarie" #replace quotation symbol with text after breakpoint|
| `"Anna's Cafe".gsub("'", {"'"=>"\\'"})`      | "Anna\\'s Cafe" #escaping the quotation symbol|

---

## length

This function returns the number of characters within an input string, including the white-spaces.

### Example

| Example                 | Result |
| ----------------------- | ------ |
| `"Jean Marie".length`   | 10     |
| `" jean marie ".length` | 12     |

---

## slice

This function returns a partial segment of a string. Pass in 2 parameters - the first parameter is the index that decides which part of the string to start returning from (first letter being 0 and subsequently progressing incrementally, negative numbers will be taken from the last character), the second parameter decides how many characters to return. If only the first parameter is passed in, only 1 character will be returned.

### Example

| Example                    | Result  |
| -------------------------- | ------- |
| `"Jean Marie".slice(0,3)`  | "Jea"   |
| `"Jean Marie".slice(3,3)`  | "n M"   |
| `"Jean Marie".slice(-5,5)` | "Marie" |

---

# Text case manipulation

This section covers formulas which allow you to change the case of certain parts of a word.

------

## capitalize

This function converts the input string into sentence case, i.e. the first character of each sentence is capitalized.

### Example

| Example                                | Result                    |
| -------------------------------------- | ------------------------- |
| `"ticket opened. Gold SLA".capitalize` | "Ticket opened. gold sla" |
| `"jean MARIE".capitalize`              | "Jean marie"              |

------

## titleize

This function converts the input string into title case, i.e. the first character of each word is capitalized.

### Example

| Example                              | Result                    |
| ------------------------------------ | ------------------------- |
| `"ticket opened. gold SLA".titleize` | "Ticket Opened. Gold Sla" |
| `"jean MARIE".titleize`              | "Jean Marie"              |

------

## upcase

This function converts all characters from the input string into upper-case.

### Example

| Example                            | Result                    |
| ---------------------------------- | ------------------------- |
| `"ticket opened. Gold SLA".upcase` | "TICKET OPENED. GOLD SLA" |
| `"jean MARIE".upcase`              | "JEAN MARIE"              |

------

## downcase

This function converts all characters from the input string into lower-case.

### Example

| Example                              | Result                    |
| ------------------------------------ | ------------------------- |
| `"ticket opened. Gold SLA".downcase` | "ticket opened. gold sla" |
| `"jean MARIE".downcase`              | "jean marie"              |

---

# Converting to arrays and back

This section shows how you can manipulate strings into arrays in other to get certain desired elements of a string.

---

## split

Splits up a string based on certain characters. Character is case sensitive. If no character is defined, by default, strings are split up by white spaces.

### Example

| Example                    | Result            |
| -------------------------- | ----------------- |
| `"Jean Marie".split`       | ["Jean", "Marie"] |
| `"Jean Marie".split("M")`  | ["Jean ", "arie"] |
| `"Marie, Jean".split(",")` | ["Marie", "Jean"] |

---

# Conversion formulas

To convert a value of other data types, e.g. number, date, into a string, use the to_s formula.

## Conversion of other data types to strings

## to_s

Converts a value of another data type into a string data type.

### Example
| Example               | Result                             | Type conversion  |
| --------------------- | ---------------------------------- | ---------------- |
| `123.to_s`            | "123"                              | Fixnum -> String |
| `123.0.to_s`          | "123.0"                            | Float -> String  |
| `[date].to_s`         | "2017-03-30T21:59:33.427684-07:00" | Date -> String   |
| `[date].to_s(:short)` | "30 Mar 21:59"                     | Date -> String   |
| `[date].to_s(:long)`  | "March 30, 2017 21:59"             | Date -> String   |

---

## Conversion of strings to other data types

## to_f

Changes the type of a variable to a float

### Example

| Example                   | Result    |
| ------------------------- | --------- |
| "Jean Marie".to_f         | "0"       |
| "123".to_f                | "123.0"   |
| "123 Jean Marie 321".to_f | "123.0"   |
| "123.456".to_f            | "123.456" |

---

## to_i

Changes the type of variable to an integer . Will always be rounded **down** to nearest integer.

### Example

| Example                   | Result |
| ------------------------- | ------ |
| "Jean Marie".to_i         | 0    |
| "123".to_i                | 123  |
| "123 Jean Marie 321".to_f | 123  |
| "123.456".to_f            | 123  |
| "123.9".to_f              | 123  |

---

## to_country_alpha2

Convert alpha-3 country code or country name to alpha2 country code (first 2 initials).

### Example

| Example                            | Result |
| ---------------------------------- | ------ |
| "GBR".to_country_alpha2            | "GB"     |
| "United Kingdom".to_country_alpha2 | "GB"     |

---

## to_country_alpha3

Convert alpha-2 country code or country name to alpha3 country code (first 3 initials).

### Example

| Example                            | Result |
| ---------------------------------- | ------ |
| "GB".to_country_alpha2             | "GBR"    |
| "United Kingdom".to_country_alpha2 | "GBR"    |

---

## to_country_name

Convert alpha-2/3 country code or country name to ISO3166 country name.

### Example

| Example               | Result         |
| --------------------- | -------------- |
| "GBR".to_country_name | "United Kingdom" |
| "GB".to_country_name  | "United Kingdom" |

---

## to_currency

Formats integers/numbers to a currency-style. You may add the precision as well. (Defaults to 2 decimal points)

### Example

| Example                               | Result     |
| ------------------------------------- | ---------- |
| "12345.60".to_currency                | "$12345.60"  |
| "12345.678".to_currency               | "$12345.68"  |
| "12345.678".to_currency(precision: 3) | "$12345.678" |

---

## to_currency_code

Convert alpha-2/3 country code or country name to ISO4217 currency code

### Example

| Example                | Result |
| ---------------------- | ------ |
| "GBR".to_currency_code | "GBP"    |
| "US".to_currency_code  | "USD"    |

---

## to_currency_name

Convert alpha-3 currency code or alpha-2/3 country code or country name to ISO4217 currency name.

### Example

| Example                | Result  |
| ---------------------- | ------- |
| "GBR".to_currency_code | "Pound"   |
| "USD".to_currency_code | "Dollars" |

---

## to_currency_symbol

Convert alpha-3 currency code or alpha-2/3 country code or country name to ISO4217 currency symbol.

### Example

| Example                | Result |
| ---------------------- | ------ |
| "GBR".to_currency_code | "£"      |
| "USD".to_currency_code | "$"      |

---

## to_phone

Converts string or number to a formatted phone number (user-defined).

###Example

| Example                                  | Result               |
| ---------------------------------------- | -------------------- |
| "5551234".to_phone                       | 555-1234             |
| 1235551234.to_phone                      | 123-555-1234         |
| 1235551234.to_phone(area_code: true)     | (123) 555-1234       |
| 1235551234.to_phone(delimiter: " ")      | 123 555 1234         |
| 1235551234.to_phone(area_code: true, extension: 555) | (123) 555-1234 x 555 |
| 1235551234.to_phone(country_code: 1)     | +1-123-555-1234      |
| "123a456".to_phone                       | 123a456              |
