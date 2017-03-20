# Infinite Loops

## What are infinite loops and when do they occur? 
Infinite loops are logic errors that cause a recipe to run continuously because an action in the recipe is also triggering the recipe again.

Infinite loops occur most commonly when the recipe is performing a **bi-directional** sync (ie. when there is more than 1 application and data moves from Application A to Application B and back to A) 

The example below shows how an infinite loop may occur: 

![infinite1](/_uploads/infinite-loops/infinite1.JPG)

The trigger picks up any New or Updated Contact in Salesforce. 

![infinite2](/_uploads/infinite-loops/infinite2.JPG)

In the final step, the recipe is configured to update the same object with information from QuickBooks.

![infinite3](/_uploads/infinite-loops/infinite3.JPG)

Because of this update step, the recipe is triggered again since the trigger uses two date/time fields (i.e. Created Date and Last Modified ) in the object records to determine if the record was newly created or updated.

Infinite loops may also occur if you have **multiple recipes** running at once and a similar issue occurs where one recipe is updating another that is triggered by an update in an object.

## Signs the recipe is in an infinite loop

Recipes may be in an infinite loop if:

  * There is an **unexpectedly high transaction count** 
  
  * The recipe is triggered when there are **no new trigger events** in the applications
  
  * There are many **duplicates** of an object in applications that was created by a recipe

## How to prevent infinite loops

### Trigger Filters
In order to stop the re-triggering of recipes, implement filters in the trigger. An example of how this can be done is as follows:

![infinite3](/_uploads/infinite-loops/infinite3.JPG)

From the image above, we can see that the action is updating the 'Opportunity' object in Salesforce with the QuickBooks Invoice ID and URL. This update is made to the field: `Contact Description`. 

Thus, in the trigger, filter out the jobs that already have an entry in this field. This prevents the job from running again as every job that has been succesfully synced by Workato will populate the field with data. 

The update will be picked up by Workato but not processed as it is filtered out by the trigger filter.


### Best Practices

#### Creating Custom Fields
Create fields in the connected applications that are meant for identifying jobs synced by Workato. Referring to the above example in 'Trigger Filters', the `Contact Description` field in the Salesforce Opportunity should **always** be empty so that Workato will identify that as a job to be synced over.

Thus, it is not advisable to use a commonly used field for these purposes, as they may be filled in by mistake and cause that job to be filtered out in the trigger. 

Use specific labels like: "Synced by Workato" or "QuickBooks Invoice URL" to prevent mistakes like these from happening.
