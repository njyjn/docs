---
title: Recipe design-time errors
date: 2018-01-24 15:00:00 Z
---

# Recipe design-time errors
Recipe design-time errors refer to errors which are caught while building a recipe. These errors typically show up when you click on recipe test or recipe start, and prevent you from testing or starting the recipe until they are resolved. This is because recipes with design-time errors will definitely result in job errors if ran. We go through common design-time errors in this section.

![Recipe design-time errors show up when recipe is tested or started](/assets/images/troubleshooting/design-time-errors-invalid-pills.gif)
*Recipe design-time errors show up when recipe is tested or started*

## Missing required input fields at design-time
Triggers and actions typically need configuration to be useful in a recipe. For example, to update a Zendesk organization, we need, at a minimum, the ID of the organization to update. Therefore, that's a required field in the recipe.

If the recipe detects that a required input field is lacking values or datapills, it will raise a design-time error and refuse to start until the input field has been filled with a value or a datapill. 

![Missing required field](/assets/images/troubleshooting/missing-required-field.gif)
*Recipe design error due to missing required input field (Organization ID) in Step 3*

## Design-time formula errors
Every input field (except for list input fields) can be toggled between text and formula mode. When in formula mode, errors in formula syntax will raise design-time errors.

![Formula error](/assets/images/troubleshooting/formula-error.gif)
*Recipe design error due to misspelt formula in Step 5*

Common design-time formula errors are:
- misspelt formulas (such as the above)
- lack of proper spacing between formulas and operators (e.g. having 2 whitespaces instead of 1)
- formula syntax errors (e.g. using curly braces `{ }` instead of square brackets `[ ]`)
- symbols in the wrong format (e.g. when copying formulas and symbols from word processors like OpenOffice and Microsoft Word, these programs may format symbols like `"`, `'` and `{ }` differently and cause the Workato formula editor to not recognize these symbols)

For more formula errors examples and how to resolve them, you can refer to the [formula errors article](/recipes/formula-errors.md).

## Invalid datapills
Datapills can become invalid when their source is missing, e.g. if the trigger or action that the datapill comes from is changed, or if the field gets deleted from the app (e.g. if the custom field `Customer subscription plan` in Salesforce object `Account` gets deleted in Salesforce, that datapill will become invalid for use in Workato). Invalid datapills will turn red.

In the following example, design-time errors due to invalid datapills are raised when the Salesforce trigger is changed.

![Salesforce trigger is changed from New/updated object to New object](/assets/images/troubleshooting/design-time-errors-change-trigger.gif)
*Salesforce trigger is changed from New/updated object to New object*

The recipe proceeds to raise errors when we try to test the recipe.

![Design-time errors for invalid pills show up when recipe is tested or started](/assets/images/troubleshooting/design-time-errors-invalid-pills.gif)
*Design-time errors for invalid pills show up when recipe is tested or started*

To resolve issues with invalid datapills, you need to replace these pills with valid datapills or values. In the above example, we need to replace datapills from the old trigger **New/updated Account** with datapills from the new trigger **New Account**.

![Replacing the invalid datapill with a valid datapill](/assets/images/troubleshooting/fixing-invalid-pills.gif)
*Replacing the invalid datapill with a valid datapill*

## App connection errors
App connections can become invalid due to several reasons:
- app credentials were changed and the connection was not updated correspondingly in Workato
- connected user doesn't have the right set of permissions to read/write selected records
- permissions of the connected user was changed to a reduced scope

In such cases, reconnecting or verifying that the connected user has permissions to read/write records used in the recipes should work to re-establish the connection.

![Design-time errors for app connection errors](/assets/images/troubleshooting/connection-error.png)
*Design-time errors for app connection errors*
