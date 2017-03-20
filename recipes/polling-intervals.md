# Polling Intervals

## What is Polling? 
Workato recipes call the applications you have connected at fixed intervals of time to check for changes. 

## Polling Cycles Explained

For recipes on a polling cycle, Workato uses two date/time fields (i.e. **Created Date** and **Last Modified** ) in the object records to determine if the record was newly created or updated.

When checking for **newly created** records, recipes are triggered if two conditions are met:
  * The record was created since the time you specified. Is the "created date" since the "since" parameter?
  * The record was not already processed by Workato. Has this triggered the recipe already?

Similarly, when checking for **updated** records, recipes are triggered if two conditions are met on any record:
  * The record was updated since the time you specified. Is the "last modified date" after both the "since" and "created date" parameters?
  * The record was not already processed by Workato. Has this triggered the recipe already?

**Note:** To pick up new trigger events immediately instead of waiting 5 or 10 minutes, click on 'Test recipe' instead or 'Start recipe' and 'Stop recipe' instead. The act of starting the recipe will make it poll the app immediately.

## How long are polling intervals? 
Polling intervals are determined by the tier of Workato plan you are subscribed to. 
  * **Community** and **Base** plan subscribers have a 10 minute polling cycle on recipes
  * **Professional and above** plans have a 5 minute polling cycle

## I want my jobs to trigger the recipe instantly
For jobs to be picked up immediately, Webhooks have to be used instead. Some applications on Workato support Webhooks and you will see a `REAL TIME` indication in the trigger. 

![real time](/assets/images/polling-cycle/real time.JPG)

Webhooks have to be configured and set-up before use.
It is also possible to build a webhooks connection with the HTTP application.

