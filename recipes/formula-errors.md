---
title: Formula Errors 
date: 2017-03-12 12:30:00 Z
---

# Formula Errors
When formula mode functions are used incorrectly, your Workato recipes will not work in the manner according to your intentions. 
This section will showcase the most frequent occurances of formula errors and how to troubleshoot them.

## Types of Formula Errors
There are two types of formula errors - Formula Compilation Error and Formula Runtime Error. 

### Formula Compilation Error
Formula compilation error occurs when you have used formula mode within one of your fields in a recipe, but have most likely mispelled the formula function.

#### Identifying the Error  
 You will identify that formula compilation error has occured when trying to to test or start the recipe. Workato prevents you from doing so and instead indicates that there is a formula error, and mentions which line in the recipe the error originates from. 
In the example below, there is no such formula function as <b>.nosuchformula</b>, and the recipe is prevented from being started. 

![Formula Compilation Error](/_uploads/formula-errors/compilation_formula_error.png)

#### Troubleshooting the Error
To troubleshoot and resolve the error, simply open the indicated lines, check and correct the formula functions used in the fields which are in formula mode. 
In some cases, you might have accidentally turned on the formula mode field without intention, also resulting in the formula compilation error.

### Formula Runtime Error
Formula runtime error is slightly trickier to troubleshoot. In these cases, the formula functions in the field are spelt correctly, but have most likely been used in an incorrect manner. We will look look at two examples below. 

#### Identifying the Error (Example 1: Formula received a nil value)
Formula runtime errors are not as straightforward to identify as compilation errors. Instead, they are discovered to be present when a recipe error is encountered and when looking through the job report. 

![Formula Runtime Error](/_uploads/formula-errors/formula_error_gif_1.gif)
Taking a look at the GIF above, the identified error is:
<b> Error calculating input for field 'title': Formula received a nil value: undefined method '+' for nil:NilClass</b>

YOu can see that the error description suggests the Formula function has failed because it receives an unexpected value. In other words, it implies that in one of the step's field, there lies a wrong use of a formula function that has caused the recipe to fail.

#### Troubleshooting the Error

When heading the recipe step, the recipe field shows two data pills concatenated between two strings. By taking a look at the data pills, it suggests that both data pills are empty for this particular record, and caused the formula mode to fail.

![Formula Runtime Error](/_uploads/formula-errors/formula_error_gif_2.gif)

To fix this case, we need to ensure that the formula field always return a value, or makes sure that the data pill that I used will always return a certain value. 

In short, the most important thing would be to figure out if the formula function is used correctly.

#### Identifying the Error (Example 2: No Method Error)
Again, looking through the job report will allow you to take a look at the recipe error. The no method error is another obvious keyword that highlights a formula error. 

![Formula Error 3](/_uploads/formula-errors/formula_error_3.png)

Taking a look at the GIF above, the identified error is:
<b> NoMethodError: undefined method `include?' for 2:Fixnum</b>

#### Troubleshooting the Error

To be able to solve this error, we need to learn more about the .include? formula function. There actually exists such a method in the Workato platform. .include? is useful to determine if a certain data pill contains a certain text. 

![Formula Error 4](/_uploads/formula-errors/formula_error_4.png)

However, when using the function on certain data pills or value that is numerical or non-text, it will not be able to accept the input and process it. The error is a result of such misuse, where literal numbers or non-text data pills are called on with .include?. (See Image above)

To resolve this, first check if the value in the data pill is returned as a number. If yes, you may first use .to_s to turn the number into literal text before applying .include?













