---
title: Field mapping
date: 2017-03-16 10:00:00 Z
---

# Field Mapping
If you've read the previous section on Data pills, you are now ready to map them into Input Fields through this process we call Field Mapping. Field Mapping is one of the strongest ability that Workato users possess. With the ability to retrieve, modify and store values in any fields, including custom fields, you can now move data across your applications with better control and stronger data pipelines.


## Example of field mapping
The basics of Field Mapping in Workato begins with understanding what you are trying to map in a recipe. In the gif shown below, we map the Account Name data pill from the Salesforce Step into the Message input field in the email action. 
![mapping_gif](/_uploads/actions-docs/mapping_gif.gif)


## Types of Field mapping
There are 4 different types of field mapping methods - Static, Dynamic, Combination and Formula.

1. Static 
  This would mean that a fixed value is being placed into the Input field without the consideration of any Data Pills. This would be the cause for error when users realize that their results are the same despite running the recipe on different records. An example of static mapping can be seen in the "Email" field below, where the email would always be sent to aa@gmail.com. 
![mapping_type_1](/_uploads/actions-docs/mapping_type_1.png)

2. Dynamic
  Dynamic field mapping occurs when Data Pills are chosen as inputs. This means that the value passed into the field would vary accordingly to the object/record retrieved. The "First Name" data pill that was passed into the "Display name" field is an example of a dynamic field mapping.
![mapping_type_2](/_uploads/actions-docs/mapping_type_2.png)

3. Combination
  Combination field mapping type occurs when static and dynamic field types are being used concurrently. A common example would be to add a fixed value to a dynamic field type, such as adding a number to a dynamic numeric value. The example below shows how a static string is added to a dynamic string value called "Invoice Number".
![mapping_type_3](/_uploads/actions-docs/mapping_type_3.png)

4. Formula
  Formula field mapping type occurs when a formula is used to create a input into the field.This could be used to manipulate the value from a data pill. It could be used in a variety of ways, such as when users wish to split a string or apply an operator on a numerical values. In this example, formula mode is used to check on whether the data pill "Full Name" contains a value. If it does use that value, else use the value within the "First Name" data pill instead.
  
![mapping_type_4](/_uploads/actions-docs/mapping_type_4.png)

## Common Pitfalls when mapping fields
Taking the right data pill is just as important as setting up the right logic, when you choose the wrong data pill to work with, you are bounded to fall into errors. Here are some common pitfalls with regards to field mapping.

- Empty Data pills on Required Fields

  Required fields must always have a value. To ensure that, you will always need to make sure that the field is filled up, either    with a data pill that always have a value, or using formula mode. 

- Data pills from the wrong branch of logic

  When you used the recipe from the wrong branch of logic, you will definitely be meeting a data pill with empty value. This is because that data pill may come from a step that may never had been executed at all. 
