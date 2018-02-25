---
title: IF conditions
date: 2017-02-23 15:15:00 Z
---

# IF conditions
IF conditions can be found in multiple features in Workato:

- [Trigger conditions](/recipes/triggers.md#trigger-conditions)

You can set IF conditions for your triggers to define what subset of trigger events should be processed by the recipe, e.g. only new Salesforce accounts with the type "Customer", or only Salesforce leads with the rating "Hot".

![Example Trigger IF recipe](/assets/images/features/trigger-conditions/example-trigger-if-recipe.png)
*The Salesforce trigger has the trigger condition set to only process new/updated cases with the status of "Closed”*

- [Conditional action step](/recipes/steps.md#conditional-action-step)

You can set IF conditions within your recipes to better define the workflow procesing logic, e.g. update the Zendesk organization if found, otherwise create new Zendesk organization.

![Example conditional step recipe](/assets/images/features/trigger-conditions/conditional_step_examples.png)
*Recipe that uses conditional steps to decide whether to create or update Zendesk organization. [Example recipe](https://www.workato.com/recipes/480358)*

- [Auto-retry feature](/recipes/steps.md#auto-retry) in [error monitor step](/recipes/steps.md#action-with-error-handler-step)

You can set IF conditions to determine when to carry out auto-retries, e.g. only auto-retry the steps in the **Monitor** block again if the error thrown is a timeout or a temporary network issue.

![Auto-retry condition](/assets/images/features/trigger-conditions/retry-condition.png)
*Configuring the retry condition field. In this example, the actions in the Monitor block will only be carried out again if the error message does not contain the 401 error code. [Example recipe](https://www.workato.com/recipes/599962)*

## Conditions
Each condition consists of 3 parts - data, condition and value. Conventionally, the data (left-hand-side) is the variable data from your app, e.g. case status, or lead rating. Accordingly, the value (right-hand-side) is the static value you wish to check against, e.g. "Closed" or "Hot", correspondingly. Data and values are case sensitive.

In this article, we go through the 14 conditions you can choose from. We will be using trigger conditions as examples. Additionally, you can combine multiple conditions with the **AND** or **OR** operators to set up complex conditions.

Each condition will be valid for different data types. If a condition is attempted to be used for invalid data types, it might prevent the recipe from starting successfully.

Furthermore, if an invalid IF condition was set up for triggers, the recipe might:

- throw a trigger error after the recipe has started, resulting in the inability to pick up trigger events, or
- result in the recipe filtering out all trigger events.

---

## contains
This condition checks if the data contains the value. It is case-sensitive - make sure to downcase or upcase both before comparison if you are not concerned about case sensitivity. It works with any characters, numbers, words, letters, and symbols.

![Example contains recipe](/assets/images/features/trigger-conditions/example-contains-recipe.png)
*The trigger condition tells the recipe to only process new Zendesk tickets with a subject that contains the word "bug"*

### Valid types
This condition is only valid for array and string data types.

### Examples
| Trigger data            | Condition/value           | Picked up by recipe? |
|-------------------------|---------------------------|----------------------|
| "UI bug"                | `contains` "bug"          | Yes                  |
| "UI BUG"                | `contains` "bug"          | No                   |
| "Instructions unclear"  | `contains` "bug"          | No                   |
| ""                      | `contains` "bug"          | No                   |
| `nil`                   | `contains` "bug"          | No                   |
| 12345                   | `contains` 123            | No                   |
| [1, 2, 3]               | `contains` 1              | Yes                  |
| [1, 2, 3]               | `contains` [1, 3]         | No                   |
| ["abc", "pqr", "xyz"]   | `contains` "abc"          | Yes                  |
| ["abc", "pqr", "xyz"]   | `contains` ["abc", "pqr"] | No                   |

---

## starts with
This condition checks if the trigger data string begins with the value. It is case-sensitive - make sure to downcase or upcase both before comparison if you are not concerned about case sensitivity.

![Example starts with recipe](/assets/images/features/trigger-conditions/example-starts-with-recipe.png)
*The trigger condition tells the recipe to only process new Zendesk users with phone numbers beginning with the string “(408)” or “(669)”*

The **Starts with** condition searches only for exact matches, and null values will not be picked up.

### Valid types
This condition is only valid for string data types.

### Examples
| Trigger data        | Condition/value       | Picked up by recipe? |
|---------------------|-----------------------|----------------------|
| "(408) 555-6928"    | `starts with` "(408)" | Yes                  |
| "408 555-6928"      | `starts with` "(408)" | No                   |
| "(650) 555-2395"    | `starts with` "(408)" | No                   |
| ""                  | `starts with` "(408)" | No                   |
| `nil`               | `starts with` "(408)" | No                   |
| 12345               | `starts with` 123     | Trigger error thrown |
| [numeric_type_pill] | `starts with` 123     | Trigger error thrown |
| [numeric_type_pill] | `starts with` "123"   | Yes   #if pill=12345 |

### Special non-string data type cases
When we try to compare non-string data types with a `starts with` condition, it will throw a [trigger error](/recipes/error-notifications.md#trigger-errors). For example, comparing a number type with a number type will throw an error.

![Comparing number types for starts with condition](/assets/images/features/trigger-conditions/comparing-number-types-starts-with-condition.png)
*Comparing number types for starts with condition will throw a trigger error*

However, if the trigger data input field is a non-string datapill, and the value is a string, Workato converts the datapill's value into a string value for you and does the comparison, evaluating to true if the converted value meets the condition.

![Comparing number types for starts with condition](/assets/images/features/trigger-conditions/string-conversion-starts-with-condition.png)
*Non-string datapills will be converted to a string for comparison if value is a string*

---

## ends with
This condition checks if the trigger data ends with the value. It is case-sensitive - make sure to downcase or upcase both before comparison if you are not concerned about case sensitivity. It works with any characters, numbers, words, letters, and symbols.

![Example ends with recipe](/assets/images/features/trigger-conditions/example-ends-with-recipe.png)
*The trigger condition tells the recipe to only process new emails if the sender's email address ends with the string “@workato.com”*

If the field you specify in your condition is left blank in the application you’re using, no event will be picked up.

### Valid types
This condition is only valid for string data types.

### Examples
| Trigger data        | Condition/value      | Picked up by recipe? |
|---------------------|----------------------|----------------------|
| "(408) 555-6928"    | `ends with` "6928"   | Yes                  |
| "408 555-6928"      | `ends with` "(6928)" | No                   |
| "(650) 555-2395"    | `ends with` "6928"   | No                   |
| ""                  | `ends with` "6928"   | No                   |
| `nil`               | `ends with` "6928"   | No                   |
| 12345               | `ends with` 345      | Trigger error thrown |
| [numeric_type_pill] | `ends with` 345      | Trigger error thrown |
| [numeric_type_pill] | `ends with` "345"    | Yes   #if pill=12345 |
| [numeric_type_pill] | `ends with` "345"    | No   #if pill=123    |

### Special non-string data type cases
When we try to compare non-string data types with a `ends with` condition, it will throw a [trigger error](/recipes/error-notifications.md#trigger-errors). For example, comparing a number type with a number type will throw an error.

![Comparing number types for starts with condition](/assets/images/features/trigger-conditions/comparing-number-types-ends-with-condition.png)
*Comparing number types for ends with condition will throw a trigger error*

However, if the trigger data input field is a non-string datapill, and the value is a string, Workato converts the datapill's value into a string value for you and does the comparison, evaluating to true if the converted value meets the condition.

![Comparing number types for starts with condition](/assets/images/features/trigger-conditions/string-conversion-ends-with-condition.png)
*Non-string datapills will be converted to a string for comparison if value is a string*

---

## doesn’t contain
This condition is the opposite of the [contains condition](#contains). It checks if the trigger data **DOES NOT** contain the value. It is case-sensitive - make sure to downcase or upcase both before comparison if you are not concerned about case sensitivity.

![Example doesn't contain recipe](/assets/images/features/trigger-conditions/example-doesnt-contain-recipe.png)
*The trigger condition tells the recipe to only process new Shopify products if the product's title doesn’t contain the string “Shirt”*

If the field you specify is left blank in the application you are using, the **Doesn’t contain** condition will not count it, and no event will be picked up. This can be circumvented by using the **Is true** or **Is not true** conditions with a string formula, as shown in the **Is true** section below, or by pairing it with the **Is present** condition.

### Valid types
This condition is only valid for array and string data types.

### Examples
| Trigger data           | Condition/value                  | Picked up by recipe?  |
|------------------------|----------------------------------|-----------------------|
| "UI bug"               | `doesn't contain` "bug"          | No                    |
| "UI BUG"               | `doesn't contain` "bug"          | Yes                   |
| "Instructions unclear" | `doesn't contain` "bug"          | Yes                   |
| ""                     | `doesn't contain` "bug"          | Yes                   |
| `nil`                  | `doesn't contain` "bug"          | No                    |
| 12345                  | `doesn't contain` 123            | No                    |
| [1, 2, 3]              | `doesn't contain` 1              | No                    |
| [1, 2, 3]              | `doesn't contain` [1, 3]         | Yes                   |
| ["abc", "pqr", "xyz"]  | `doesn't contain` "abc"          | No                    |
| ["abc", "pqr", "xyz"]  | `doesn't contain` ["abc", "pqr"] | Yes                   |

---

## doesn’t start with
This condition is the opposite of the [starts with condition](#starts-with). It checks if the trigger data string **DOES NOT** begins with the value. It is case-sensitive - make sure to downcase or upcase both before comparison if you are not concerned about case sensitivity.

![Example doesn't start with recipe](/assets/images/features/trigger-conditions/example-doesnt-start-with-recipe.png)
*The trigger condition tells the recipe to only process new/updated Quick Base opportunity records if the Opportunity field doesn’t start with the string “B”*

If the field you specify is left blank in the application you are using, the **Doesn’t start with** condition will not count it, and no event will be picked up. As with the **Doesn’t contain** trigger condition, this can be circumvented by using a string formula with the **Is true** formula as shown in the **Is true** section below, or by pairing it with the **Is present** condition.

### Valid types
This condition is only valid for string data types.

### Examples
| Trigger data        | Condition/value                         | Picked up by recipe? |
|---------------------|-----------------------------------------|----------------------|
| "(408) 555-6928"    | `doesn't start with` "(408)" or "(669)" | No                   |
| "408 555-6928"      | `doesn't start with` "(408)" or "(669)" | Yes                  |
| "(650) 555-2395"    | `doesn't start with` "(408)" or "(669)" | Yes                  |
| ""                  | `doesn't start with` "(408)" or "(669)" | Yes                  |
| `nil`               | `doesn't start with` "(408)" or "(669)" | No                   |
| 12345               | `doesn't start with` 123                | Trigger error thrown |
| [numeric_type_pill] | `doesn't start with` 123                | Trigger error thrown |
| [numeric_type_pill] | `doesn't start with` "123"              | No   #if pill=12345  |
| [numeric_type_pill] | `doesn't start with` "123"              | Yes   #if pill=345   |

### Special cases

1) Non-string data types

When we try to compare non-string data types with a `doesn't start with` condition, it will throw a [trigger error](/recipes/error-notifications.md#trigger-errors). For example, comparing a number type with a number type will throw an error.

![Comparing number types for starts with condition](/assets/images/features/trigger-conditions/comparing-number-types-doesnt-start-with-condition.png)
*Comparing number types for doesn't start with condition will throw a trigger error*

However, if the trigger data input field is a non-string datapill, and the value is a string, Workato converts the datapill's value into a string value for you and does the comparison, evaluating to true if the converted value meets the condition.

![Comparing number types for starts with condition](/assets/images/features/trigger-conditions/string-conversion-doesnt-start-with-condition.png)
*Non-string datapills will be converted to a string for comparison if value is a string*

2) Nil/null

When the trigger data is nil (also known as null), the trigger event will not be picked up by the recipe, even if it seems like it matches the condition, e.g. `nil` doesn't end with "345".

---

## doesn’t end with
This condition is the opposite of the [ends with](#ends-with) condition. It checks if the trigger data **DOES NOT** end with the value. It is case-sensitive - make sure to downcase or upcase both before comparison if you are not concerned about case sensitivity. It works with any characters, numbers, words, letters, and symbols.

![Example doesn't end with recipe](/assets/images/features/trigger-conditions/example-doesnt-end-with-recipe.png)
*The trigger condition tells the recipe to only process new/updated Dynamics CRM customers if their Full Name doesn’t end with the string “Skywalker”*

If the field you specify is left blank in the application you are using, the **Doesn’t end with** condition will not count it, and no event will be picked up. Similar to the **Doesn’t contain** trigger condition, this can be circumvented by using a string formula with the **Is true** formula as shown in the **Is true** section below, or by pairing it with the **Is present** condition.

### Valid types
This condition is only valid for string data types.

### Examples
| Trigger data        | Condition/value              | Picked up by recipe? |
|---------------------|------------------------------|----------------------|
| "(408) 555-6928"    | `doesn't ends with` "6928"   | No                   |
| "408 555-6928"      | `doesn't ends with` "(6928)" | Yes                  |
| "(650) 555-2395"    | `doesn't ends with` "6928"   | Yes                  |
| ""                  | `doesn't ends with` "6928"   | Yes                  |
| `nil`               | `doesn't ends with` "6928"   | No                   |
| 12345               | `doesn't ends with` 345      | Trigger error thrown |
| [numeric_type_pill] | `doesn't ends with` 345      | Trigger error thrown |
| [numeric_type_pill] | `doesn't ends with` "345"    | No   #if pill=12345  |
| [numeric_type_pill] | `doesn't ends with` "345"    | Yes   #if pill=123   |

### Special cases

1) Non-string data types

When we try to compare non-string data types with a `doesn't end with` condition, it will throw a [trigger error](/recipes/error-notifications.md#trigger-errors). For example, comparing a number type with a number type will throw an error.

![Comparing number types for starts with condition](/assets/images/features/trigger-conditions/comparing-number-types-doesnt-end-with-condition.png)
*Comparing number types for doesn't end with condition will throw a trigger error*

However, if the trigger data input field is a non-string datapill, and the value is a string, Workato converts the datapill's value into a string value for you and does the comparison, evaluating to true if the converted value meets the condition.

![Comparing number types for starts with condition](/assets/images/features/trigger-conditions/string-conversion-doesnt-end-with-condition.png)
*Non-string datapills will be converted to a string for comparison if value is a string*

2) Nil/null

When the trigger data is nil (also known as null), the trigger event will not be picked up by the recipe, even if it seems like it matches the condition, e.g. `nil` doesn't end with "345".

---

## equals
This condition checks if the trigger data equals to the value. It is case-sensitive - make sure to downcase or upcase both before comparison if you are not concerned about case sensitivity. It works with any characters, numbers, words, letters, and symbols.

![Example equals recipe](/assets/images/features/trigger-conditions/example-equals-recipe.png)
*The trigger condition tells the recipe to only process new/updated Salesforce cases with the case-sensitive status of “Closed”*

### Valid types
This condition is valid for all data types, e.g. booleans, string, integers and floats, dates, arrays.

### Examples
| Trigger data      | Condition/value   | Picked up by recipe? |
|-------------------|-------------------|----------------------|
| "Closed"          | `equals` "Closed" | Yes                  |
| "Closed"          | `equals` "closed" | No                   |
| ""                | `equals` "Closed" | No                   |
| ""                | `equals` `null`   | No                   |
| 'null'            | `equals` `nil`    | Yes                  |
| `nil`             | `equals` "Closed" | No                   |
| 12345             | `equals` 12345    | Yes                  |
| 12345             | `equals` "12345"  | Yes                  |
| 6 - 1             | `equals` 5        | Yes                  |
| "Closed".present? | `equals` `true`   | Yes                  |
| "Closed".present? | `equals` "true"   | No                   |
| "Closed".present? | `equals` 1        | No                   |

### Special string conversion cases
When we try to compare a non-string data type trigger data to a string data type value, Workato will convert the trigger data into string for comparison, e.g. 12345 equals "12345" will evaluate to true.

---

## does not equal
This condition is the opposite of the [equal condition](#equals). It checks if the trigger data **DOES NOT** equal the value. It is case-sensitive - make sure to downcase or upcase both before comparison if you are not concerned about case sensitivity. It works with any characters, numbers, words, letters, and symbols.

![Example does not equal recipe](/assets/images/features/trigger-conditions/example-doesnt-equal-recipe.png)
*The trigger condition tells the recipe to only process new Zendesk tickets with a priority not equal to the case-sensitive string “Low”*

### Valid types
This condition is valid for all data types, e.g. booleans, string, integers and floats, dates, arrays.

### Examples
| Trigger data      | Condition/value           | Picked up by recipe? |
|-------------------|---------------------------|----------------------|
| "Closed"          | `does not equal` "Closed" | No                   |
| "Closed"          | `does not equal` "closed" | Yes                  |
| ""                | `does not equal` "Closed" | Yes                  |
| ""                | `does not equal` `null`   | Yes                  |
| 'null'            | `does not equal` `nil`    | No                   |
| `nil`             | `does not equal` "Closed" | Yes                  |
| 12345             | `does not equal` 12345    | No                   |
| 12345             | `does not equal` "12345"  | No                   |
| 6 - 1             | `does not equal` 5        | No                   |
| "Closed".present? | `does not equal` `true`   | No                   |
| "Closed".present? | `does not equal` "true"   | Yes                  |
| "Closed".present? | `does not equal` 1        | Yes                  |

---

## greater than
This conditions checks if the trigger data is greater than the value.

![Example is greater than recipe](/assets/images/features/trigger-conditions/example-is-greater-than-recipe.png)
*The trigger condition tells the recipe to only process new Box files if their created date is greater than the date of “12/31/2017”. This means that the Box file was created after 31 December 2017.*

If **value** is set to a number, and the **trigger data** field has a null value, the recipe will raise a trigger error, as computationally, a number cannot be compared with a null value. To resolve this issue, add an **is present** condition along with the **greater than** condition.

![Example is present and greater than recipe](/assets/images/features/trigger-conditions/example-is-present-and-greater-than-recipe.png)
*The trigger condition tells the recipe to only process new Salesforce opportunities with an existing amount field (i.e. amount is present) and with a value greater than 0*

### Valid types
This condition is valid for string, date, timestamp, integer and number data types.

### Examples
| Trigger data                       | Condition/value                                   | Picked up by recipe?         |
|------------------------------------|---------------------------------------------------|------------------------------|
| "2017-06-31T12:00:00.252805-07:00" | `greater than` "2017-12-31T12:00:00.252805-07:00" | No                           |
| "2017-06-30T12:00:00.252805-07:00" | `greater than` "2017-01-31T12:00:00.252805-07:00" | Yes                          |
| "2017-06-31"                       | `greater than` "2017-12-31"                       | No                           |
| "2017-06-31"                       | `greater than` "2017-01-31"                       | Yes                          |
| 5                                  | `greater than` 10                                 | No                           |
| 5                                  | `greater than` 1                                  | Yes                          |
| 1.5                                | `greater than` 10.5                               | No                           |
| 1.5                                | `greater than` 1.23                               | Yes                          |
| "abc"                              | `greater than` "abcde"                            | No  #ASCII value comparison  |
| "abc"                              | `greater than` "a"                                | Yes  #ASCII value comparison |
| `nil`                              | `greater than` "2017-01-31T22:00:00.252805-07:00" | Trigger error thrown         |
| "2017-06-31"                       | `greater than` `nil`                              | Trigger error thrown         |
| `nil`                              | `greater than` 10                                 | Trigger error thrown         |
| 1.5                                | `greater than` `nil`                              | Trigger error thrown         |
| "abc"                              | `greater than` `nil`                              | Trigger error thrown         |
---

## less than
This conditions checks if the trigger data is less than the value.

![Example is less than recipe](/assets/images/features/trigger-conditions/example-is-less-than-recipe.png)
*The trigger condition tells the recipe to only process new Shopify product variants if the variant price is less than 50*

If **value** is set to a number, and the **trigger data** field has a null value, the recipe will raise a trigger error, as computationally, a number cannot be compared with a null value. To resolve this issue, add an **is present** condition along with the **less than** condition.

### Valid types
This condition is valid for string, date, timestamp, integer and number data types.

### Examples
| Trigger data                       | Condition/value                                | Picked up by recipe?         |
|------------------------------------|------------------------------------------------|------------------------------|
| "2017-06-31T12:00:00.252805-07:00" | `less than` "2017-12-31T12:00:00.252805-07:00" | Yes                          |
| "2017-06-30T12:00:00.252805-07:00" | `less than` "2017-01-31T12:00:00.252805-07:00" | No                           |
| "2017-06-31"                       | `less than` "2017-12-31"                       | Yes                          |
| "2017-06-31"                       | `less than` "2017-01-31"                       | No                           |
| 5                                  | `less than` 10                                 | Yes                          |
| 5                                  | `less than` 1                                  | No                           |
| 1.5                                | `less than` 10.5                               | Yes                          |
| 1.5                                | `less than` 1.23                               | No                           |
| "abc"                              | `less than` "abcde"                            | Yes  #ASCII value comparison |
| "abc"                              | `less than` "a"                                | No  #ASCII value comparison  |
| `nil`                              | `less than` "2017-01-31T22:00:00.252805-07:00" | Trigger error thrown         |
| "2017-06-31"                       | `less than` `nil`                              | Trigger error thrown         |
| `nil`                              | `less than` 10                                 | Trigger error thrown         |
| 1.5                                | `less than` `nil`                              | Trigger error thrown         |
| "abc"                              | `less than` `nil`                              | Trigger error thrown         |

---

## is true
This condition checks that the trigger data is true.

![Example is true recipe](/assets/images/features/trigger-conditions/example-is-true-recipe.png)
*The trigger condition tells the recipe to only process new Shopify product variants if the variant's requires shipping field is marked as true*

It can also be used to check that the formula provided in the trigger data input field evaluates to true. For example, you can convert string type datapills via string formulas into conditions that evaluates to a boolean, which can be found [here](/formulas/string-formulas.md), with an example as follows.

![Example boolean recipe](/assets/images/features/trigger-conditions/example-boolean-recipe.png)
*The trigger condition tells the recipe to only process new Quick Base opportunity records if the formula **amount.blank?** evaluates to true (i.e. if the amount field is blank)*

### Valid types
This condition is only valid for boolean data types. We can use this condition to check against a boolean datapill, or check against formula that evaluates to `true` or `false`.

### Examples
| Trigger data                               | Condition/value | Picked up by recipe?                                               |
|--------------------------------------------|-----------------|--------------------------------------------------------------------|
| [pill].present?                            | `is true`       | No  #if [pill] has a `nil` or `null value or is an empty string "" |
| [pill].present?                            | `is true`       | Yes  #if [pill] has a value                                        |
| "Advanced Solutions".include?("Solutions") | `is true`       | Yes                                                                |
| "Advanced Solutions".include?("solutions") | `is true`       | No                                                                 |

---

## is not true
This condition is the opposite of the [is true condition](#is-true). It checks that the trigger data **IS NOT** true.

![Example is not true recipe](/assets/images/features/trigger-conditions/example-is-not-true-recipe.png)
*The trigger condition tells the recipe to only process new Salesforce cases if they are not closed*

It can also be used to check that the formula provided in the trigger data input field evaluates to false. For example, you can convert string type datapills via string formulas into conditions that evaluates to a boolean, which can be found [here](/formulas/string-formulas.md), with an example as follows.

### Examples
| Trigger data                               | Condition/value | Picked up by recipe?                                               |
|--------------------------------------------|-----------------|--------------------------------------------------------------------|
| [pill].present?                            | `is not true`   | No  #if [pill] has a `nil` or `null value or is an empty string "" |
| [pill].present?                            | `is not true`   | No  #if [pill] has a value                                         |
| "Advanced Solutions".include?("Solutions") | `is not true`   | No                                                                 |
| "Advanced Solutions".include?("solutions") | `is not true`   | Yes                                                                |

---

## is present
This condition will check the trigger data. If there is data present, the trigger event will be picked up by the recipe. If input is null or an empty string, the trigger event will not be picked up by the recipe.

![Example is present recipe](/assets/images/features/trigger-conditions/example-is-present-recipe.png)
*The trigger condition tells the recipe to only process new Box files if the file has a name*

### Valid types
This condition is valid for all data types, e.g. booleans, string, integers and floats, dates, arrays.

### Examples
| Trigger data         | Condition/value | Picked up by recipe? |
|----------------------|-----------------|----------------------|
| "Advanced Solutions" | `is present`    | Yes                  |
| 12345                | `is present`    | Yes                  |
| ""                   | `is present`    | No                   |
| `nil`                | `is present`    | No                   |

---

## is not present
This condition will check the trigger data. If there is data present, the trigger event **WILL NOT** be picked up by the recipe. If input is null or an empty string, the trigger event **WILL** be picked up by the recipe.

![Example is not present recipe](/assets/images/features/trigger-conditions/example-is-not-present-recipe.png)
*The trigger condition tells the recipe to only process new Zendesk tickets with no agent assigned to it*

### Valid types
This condition is valid for all data types, e.g. booleans, string, integers and floats, dates, arrays.

### Examples
| Trigger data         | Condition/value  | Picked up by recipe?  |
|----------------------|------------------|-----------------------|
| "Advanced Solutions" | `is not present` | No                    |
| 12345                | `is not present` | No                    |
| ""                   | `is not present` | Yes                   |
| `nil`                | `is not present` | Yes                   |
