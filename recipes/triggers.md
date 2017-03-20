---
title: Workato triggers
date: 2017-02-18 22:15:00 Z
---

# Triggers

## Polling triggers
When the recipe is first started, the polling trigger polls and fetches all events after the **From** date. Subsequently, polls are made at regular intervals to ensure all trigger events are fetched. Poll frequency depends on the Workato plan.

When the recipe is stopped, polling triggers stop fetching events from the trigger app. However, if the recipe is started again, polling triggers will fetch all events since the recipe was stopped.

### Polling trigger example
A Workato account on the Business plan has a 5-minute polling interval, as displayed on their polling triggers.

![Polling intervals](/assets/images/recipes/triggers/polling_intervals.png)

*Trigger hint regarding the specific polling interval*

The recipe polls every 5 minutes for new accounts created in Salesforce, and fetches any new accounts as trigger events. If the recipe is stopped on 1 Feb 2017, midnight PST, it will cease to fetch trigger events. However, if the recipe is started again on 1 March 2017, midnight PST, it will fetch all Salesforce accounts created since 1 Feb 2017, midnight PST.

## Real-time triggers
Real-time triggers are usually based on webhooks. Events are fetched from the trigger app as soon as the event happens.

Real-time triggers supported by Workato (this excludes HTTP real-time triggers) are also polling triggers - when first started, the recipe does a poll to fetch all events after the **From** date. Subsequently, polls are made on a regular basis to ensure all trigger events are fetched.

## Batch triggers
Batch triggers are similar to polling triggers in fetching the same records. However, where polling triggers have trigger events corresponding to a single record, batch triggers have trigger events corresponding to a list of records. Maximum batch size can usually be defined in the trigger configuration.

For further details about batch triggers, refer to the Batch processing article here.

## Scheduled triggers
Scheduled triggers are executed at defined days and times, either hourly, daily, or monthly.

![Salesforce scheduled trigger schedules](/assets/images/recipes/triggers/scheduled_trigger_schedules.png)

*Various schedule options for Salesforce scheduled search trigger*

When executed, records matching the search criteria will be returned, irrespective of whether the trigger had already picked it up in previous polls. These records will be returned in batches, with a user-defined maximum batch size.

## Since/From
The **Since** or **From** parameter found within the trigger enables fetching of trigger events from a specified date and time. This value can only be set once, and will be locked from further changing after the recipe has been started for the first time.

However, not all triggers have the **Since/From** parameter. For such triggers, the date and time from which trigger events will be fetched is predetermined by default, usually as an offset from the time the recipe is first ran. Common values are:
- When recipe is first started
- An hour before recipe is first started
- A day before recipe is first started.

This offset is usually communicated in the trigger hint.

![Google Calendar since parameter](/assets/images/recipes/triggers/google_calendar_since_param.png)

*Trigger hint regarding the default offset of 1 hour ago for Google Calendar*

### Since/From parameter example
In the following case, we're setting the **From** date as 1 Jan 2017, midnight PST, and then setting the object as Accounts.

[![https://gyazo.com/fef272317b761f9caee93d6fe81cd8b4](https://i.gyazo.com/fef272317b761f9caee93d6fe81cd8b4.gif)](https://gyazo.com/fef272317b761f9caee93d6fe81cd8b4)

*Setting the Since date for the trigger. Trigger will only pick up new accounts created since midnight of Jan 1, 2017*

When the recipe is started, only Salesforce accounts created after 1 Jan 2017, midnight PST will be picked up, as viewed from the created date column on the job report.

![Since parameter](/assets/images/recipes/triggers/since_param_ran_recipe.png)

*Custom job report showing that Salesforce accounts picked up were created after Jan 1, 2017*

Similarly, if the trigger was **New/updated Salesforce object** with the Account object selected, only Salesforce accounts created or updated after 1 Jan 2017, midnight PST will be picked up.

## Trigger conditions
Trigger conditions are client-side filters that enable users to define the trigger events they wish to be processed by the recipe. This means that the connected app still retrieves and passes all trigger events to Workato, but the Workato trigger will filter for only events the user wants.

Adding conditions to triggers will filter for only relevant trigger events to process, and reduce transaction counts. Trigger conditions can be combined using ORs only, or ANDs only.

However, not all triggers have trigger conditions. For such triggers, there is no way to filter for relevant trigger events.

### Trigger conditions example
To add a trigger condition, check the **Trigger IF** checkbox. The trigger datatree will appear, displaying the variables available to be filtered by.

[![https://gyazo.com/7af54cb19e2f2c3d417cdbd830d25345](https://i.gyazo.com/7af54cb19e2f2c3d417cdbd830d25345.gif)](https://gyazo.com/7af54cb19e2f2c3d417cdbd830d25345)

*Checking the Trigger IF checkbox brings up trigger condition fields to be configured*

Define the trigger condition. The following ensures that only Salesforce accounts with a **Warm** rating value will be picked up by the trigger. Values are case sensitive and should be exact.

[![https://gyazo.com/5d62320895ef3628b581aa1fd60e79d5](https://i.gyazo.com/5d62320895ef3628b581aa1fd60e79d5.gif)](https://gyazo.com/5d62320895ef3628b581aa1fd60e79d5)

*Define the trigger condition*

To add an additional trigger conditions, select from the OR or AND in the picklist. The selected operator will define how all additional trigger conditions will be added.

[![https://gyazo.com/1a43c84e1783091a15947f4256b02ae6](https://i.gyazo.com/1a43c84e1783091a15947f4256b02ae6.gif)](https://gyazo.com/1a43c84e1783091a15947f4256b02ae6)

*Adding another trigger condition with the OR operator*

Define the additional trigger condition. Values are case sensitive and should be exact. The following ensures that accounts with a **Hot** rating value will also be picked up by the trigger. Notice that from the third trigger condition onwards, trigger conditions will be combined with the previously selected operator (OR or AND).

[![https://gyazo.com/6c0c225b6ded8f13d642efc6e8a0df50](https://i.gyazo.com/6c0c225b6ded8f13d642efc6e8a0df50.gif)](https://gyazo.com/6c0c225b6ded8f13d642efc6e8a0df50)

*Define the additional trigger condition. Subsequent trigger conditions has to use the same AND operator*
