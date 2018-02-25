---
title: Job errors
date: 2018-01-24 15:00:00 Z
---

# Job errors (recipe execution errors)
Job errors, also known as recipe execution errors, usually occur when a trigger event has been found, and a job is being processed, therefore typically showing up as recipe job errors. An exception to this is trigger errors, which occur when the recipe fails to retrieve any trigger events, and therefore does not create any jobs.

## Trigger errors
Trigger errors occur when the recipe tries to retrieve trigger events by polling the trigger app, but fails to fetch trigger events successfully. As no trigger event data was retrieved, the recipe does not create a job in the first place.

![Trigger errors due to schema changes](/assets/images/troubleshooting/trigger-errors.gif)
*Trigger errors due to schema changes. Refreshing the schema will resolve this error.*

The following table details the various reasons for trigger errors, and how we can resolve them.

| Trigger error reason                                                                                                                                                            | What happens?                                    | How to resolve                                                                                                                                                                         |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| App connection becomes invalid and recipe is unable to connect successfully to the trigger app to fetch trigger events                                                          | Usually results in an 401 unauthorized error message | Reconnect successfully to trigger app                                                                                                                                                  |
| Connected user does not have the right permissions to fetch trigger events                                                                                                      | Usually results in an 403 forbidden message | Update the connected user's permissions to provide required read/write permission scopes                                                                                               |
| Recipe makes an invalid API call, e.g. due to schema changes such as field deletion in the app that wasn't reflected in the recipe                                              | Usually results in schema errors                 | Carry out a schema refresh for the recipes with schema errors                                                                                                                          |
| Recipe makes an API call that times out while waiting for trigger events to be fetched. This is usually transient, i.e. the API server might be experiencing temporary downtime | Usually results in a timeout error               | If transient, you should stop getting the error after a while.  If error keeps occurring, check the API uptime status of the app that the recipe keeps failing at, or reach out to us. |
| Trigger filters are logically incorrect, e.g. a null value is checked against an integer, a string is checked against a number.                                                 | Usually results in a formula error               | Trigger filters will need to be fixed before the recipe can run properly. Learn more about valid trigger filters [here](/features/if-conditions.md).                                   |

## Run-time formula errors
Every input field (except for list input fields) can be toggled between text and formula mode. Formulas that didn't throw any design-time errors when the recipe was started can still throw run-time errors during a job, when actual data is being processed by the recipe. Some of the reasons for run-time errors are:
- datapill had no value and was `nil`, and the formula acting on it doesn't work on null values
- formula tries to execute invalid operation that was not caught at design time, e.g. dividing a number by a string (text)
- formula was used on a datapill of the wrong data type, e.g. using `true?` formula on an array datapill

To find out more about run-time formula errors and how to resolve them, refer to the [formula errors article](/recipes/formula-errors.md#formula-errors).

## Missing required fields at run-time
Triggers and actions typically need configuration to be useful in a recipe. For example, to update a Zendesk organization, we need, at a minimum, the ID of the organization to update. Therefore, that's a required field in the recipe. Required input fields that didn't throw any design-time errors when the recipe was started, because the field had a datapill as input, can still throw run-time errors if the datapill had no value during the job, when actual data is being processed by the recipe.

The following screenshot shows a job error when a required field does not have any value. 

![Job error due to missing required field at run-time - error message](/assets/images/troubleshooting/run-time-error-message.png)
*Job error due to missing required field at run-time - error message*

If we toggle to the input tab in this job details screen, we see that the **Channel** input field has an empty string.

![Job error due to missing required field at run-time - input tab](/assets/images/troubleshooting/run-time-error-input.png)
*Job error due to missing required field at run-time - input tab*

If we look at the action mapping, we see that this action didn't throw a design-time error because it had a datapill in it, but it threw an error when the job was being processed as that datapill had no value. 

![Action did not throw design-time error as it had a datapill input](/assets/images/troubleshooting/run-time-error-action-mapping.png)
*Action did not throw design-time error as it had a datapill input*

## Timeouts
Whenever the recipe carries out the trigger (to request for a list of trigger events from the trigger app), or an action (to carry out the action in the action app), Workato is sending a request to the app and waiting for a response back.

Some reasons for a job timeout would be:
- the app might take too long to respond to Workato, and the trigger or action will raise a timeout error after it has waited for a certain amount of time
- the job might be taking too long to carry out, and the job raises a timeout error

## Passing wrong datatypes into input fields
In some cases, the datapill used for an input field have a data type which is not expected by the input field, e.g. we pass in a string (`"12.50"`) into a input field expecting a number (`12.50`). This might not be caught at design-time, but the app we provide this string to might throw an error when it receives unexpected data types.

To resolve this, you can use formulas for datatype conversions by referring to the documentation for [strings](/formulas/string-formulas.md#conversion-of-strings-to-other-data-types), [numbers](/formulas/number-formulas.md#conversions), [dates](/formulas/date-formulas.md#converting-datetime-to-date) or [lists](/formulas/array-list-formulas.md#conversion).

## Error code 401 Unauthorized
A 401 error code typically means that the app connection is invalid. If it happens for the trigger, [trigger errors](#trigger-errors) will occur. If it happens for an action, job errors will occur. To resolve this issue, you would need to reconnect the app connection.

## Error code 403 Forbidden
A 403 code typically means that the connected user does not have the right permissions to access, read or write to the records specified in the trigger/action. To resolve this issue, you would need to assign the correct permissions to the connected user.

## Error code 404 Not found
A 404 code typically occurs for **GET by ID** actions. If you have an unique ID for a record and attempt to retrieve its details, a 404 error will be returned if the app was not able to find the corresponding record for that ID. Some reasons for a 404 might be:
- the record corresponding to that ID was deleted in the app
- the ID is not correct for that app, e.g. if we pass in a Salesforce internal ID into NetSuite
- the ID is not correct for that object/record type, e.g. if we want to fetch details of a customer but pass in the ID for a contact instead

## Error code 422 Unprocessable entity
A 422 code typically means the action was not able to be carried out successfully, and it can be due to a variety of reasons, some of which are:
- if you were trying to create a new record, there might already be a record with a duplicate name
- if you were trying to update a record, the record to update might not have been found 
- invalid data might have been passed into the record during an attempt at creation/update, e.g. when trying to assign a lead to a sales rep, the ID for the sales rep was wrong, or sales rep could not be found

## Error code 500 Internal Server Error
A 500 error code is typically raised when there is no clear error message from the app to describe the error. In such cases, you can reach out to us with the unique error ID for more details and help on resolving the error.
