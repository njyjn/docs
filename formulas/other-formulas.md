---
title: Other formulas
date: 2017-03-30 05:00:00 Z
---

# Other formulas
This section covers formulas that work with a number of data types.

---

## lookup

This formula allows you to lookup values from your Workato lookup tables via a key. It is case sensitive and data type sensitive.

### Example
For example, let's use the following lookup table with name `Department Codes` with an ID of 6:

![Sample department codes lookup table](/assets/images/formula-docs/department-codes-lookup-table.png)
*Sample department codes lookup table*

| Example                                                                       | Result        |
| ----------------------------------------------------------------------------- | ------------- |
| `lookup('Department Codes', 'Department code': 'ACC')['Department']`          | "Accounting"  |
| `lookup('Department Codes', 'Department code': 'SLS')['Department']`          | "Sales"       |
| `lookup('Department Codes', 'Department': 'Marketing')['Department code']`    | "MKT"         |
| `lookup('6', 'Department code': 'ACC')['Department']`                         | "Accounting"  #interchangeable lookup table name and ID |
| `lookup('Department Codes', 'Department': 'marketing')['Department code']`    | nil #case sensitive value for "Marketing"|
| `lookup('Department Codes', 'Department': 'Marketing')['Department Code']`    | nil #case sensitive value for column name "Department code"|

---

## lookup_table

This formula allows you to create a static lookup table and define the keys and values. It is case sensitive and data type sensitive.

### Example
| Example                                                                | Result    |
| ---------------------------------------------------------------------- | --------- |
| `{"key1" => "value1", "key2" => "value2", "key3" => "value3"}["key2"]` | "value2"  |
| `{"High" => "urgent", "Medium" => "mid", "Low" => "normal"}["Low"]`    | "normal"  |
| `{"High" => "urgent", "Medium" => "mid", "Low" => "normal"}["low"]`    | nil       |
| `{"High" => "urgent", "Medium" => "mid", "Low" => "normal"}["normal"]` | nil       |
| `{1 => "1", 2 => "2", 3 => "3"}[2]`                                    | "2"       |
| `{1 => "1", 2 => "2", 3 => "3"}[2.0]`                                  | nil       |
| `{1 => "1", 2 => "2", 3 => "3"}["2"]`                                  | nil       |

---
