---
title: Workato action steps
date: 2017-02-20 13:00:00 Z
---

# Steps
There are various types of recipe steps that can be added to recipes, each with different logic.

![Available steps](/assets/images/recipes/steps/available_steps.png)

*Various recipe steps available in recipe editor*

## Action
Actions carry out an operation in your target app, usually a create, update, or search operation. Each action usually has a set of input fields and an output datatree.

### Action step example
The following step carries out a **Search organizations** action in Zendesk. The input fields on the left shows the available fields to search for a Zendesk organization by:
- Name
- Tags
- Notes
- Details

In the following case, the **Search organization** action is carried out by name.

[![https://gyazo.com/fb1ceed821c308692032f1b2044a5c8d](https://i.gyazo.com/fb1ceed821c308692032f1b2044a5c8d.gif)](https://gyazo.com/fb1ceed821c308692032f1b2044a5c8d)
*Mapping fields to an action step* [Example recipe](https://www.workato.com/recipes/480358)

When the **Search organizations** action has been carried out, Zendesk returns data about the organizations found, if any. The output datatree displays available fields for mapping in subsequent steps.

In the following case, the **Update organization** action uses the ID field from the **Search organizations** action to identify which Zendesk organization to update (ID field as highlighted).

[![https://gyazo.com/60d727866dfea675bb1e61f94634e54a](https://i.gyazo.com/60d727866dfea675bb1e61f94634e54a.gif)](https://gyazo.com/60d727866dfea675bb1e61f94634e54a)

*Mapping fields to an action step* [Example recipe](https://www.workato.com/recipes/480358)

## Conditional action
Conditional actions will only be carried out if the defined condition is true. All actions indented within a conditional action block will be carried out if that condition is true.

### Conditional step example
The following recipe has two conditional steps:
- If Zendesk organization was found, update Zendesk organization
- If Zendesk organization was not found, create new Zendesk organization

![Conditional step examples](/assets/images/recipes/steps/conditional_step_examples.png)

*Recipe that uses conditional steps to decide whether to create or update Zendesk organization* [Example recipe](https://www.workato.com/recipes/480358)

Any job ran by this recipe can only proceed through either one of the conditional step, as the Zendesk organization must have either been found or not.

## Repeat step
The repeat step works with lists to carry out a series of actions on every item in that list. Actions indented within a repeat block will be carried out for all items in the list.

First, select the list to iterate through. In order to use the values from each element of the list, all data fields must be from the **Foreach** datatree.

### Repeat step example
Refer to the example scenario of syncing Salesforce accounts (using the batch trigger) to Zendesk as organizations.

![Foreach step example scenario](/assets/images/recipes/steps/foreach_example_scenario.png)

*Recipe that uses the Repeat step to iterate through list of Salesforce accounts* [Example recipe](https://www.workato.com/recipes/480695)

As the batch trigger returns a list of newly created Salesforce accounts, all records in this list have to be moved into Zendesk. However, as the Zendesk API does not have a batch write funtionality, the repeat action is required to iterate through this list of Salesforce accounts and repeat the action of creating the corresponding Zendesk organization for each Salesforce account.

The list datapill has to be passed into the repeat step. When the input list field is selected, only list type datapills are usable in the datatree, as portrayed in the GIF. List type pills can also be identified via their stack icon.

[![https://gyazo.com/ab9b65d39dcd957f99fe134c31081fc8](https://i.gyazo.com/ab9b65d39dcd957f99fe134c31081fc8.gif)](https://gyazo.com/ab9b65d39dcd957f99fe134c31081fc8)

*Mapping a list data pill into the Repeat step's input list field* [Example recipe](https://www.workato.com/recipes/480695)

Datapills from the **Foreach** output datatree should be mapped to ensure that values from each list item are used when the action is repeated. For example, if two Salesforce accounts were fetched by the trigger, using pills from the **Foreach** datatree ensures that the **Create organization** action creates a Zendesk organization with the data from the first Salesforce account on its first iteration, then with the data from the second Salesforce account on its second iteration.

[![https://gyazo.com/1e351e4f54856488381a5b49677d58b9](https://i.gyazo.com/1e351e4f54856488381a5b49677d58b9.gif)](https://gyazo.com/1e351e4f54856488381a5b49677d58b9)

*Using datapills from the Repeat step's datatree. This ensures values from the list being iterated through are used.* [Example recipe](https://www.workato.com/recipes/480695)

The following displays the mapping from the **Foreach** datatree.

![Foreach step example](/assets/images/recipes/steps/foreach_example.png)

*Datapills are mapped from the Repeat step's datatree* [Example recipe](https://www.workato.com/recipes/480695)

For further Repeat step examples or more info about list processing, refer to the List management article.

## Call recipe
Call recipe will run another recipe (named a callable recipe). Callable recipes are usually built to extract a set of common steps, which multiple recipes use, into a separate recipe that all main recipes can use. This reduces the complexity of individual recipes.

Callable recipes are an advanced feature in Workato that you can read more about in the Callable recipes article.

## Stop
The stop step ends a single job from being processed any further. It is usually used in cases whereby there are no recipe errors (i.e. no error is thrown in the job), but where there may be business errors and no data should be processed.

The stop step can be configured to mark the job as a failed job or a successful job, depending on business logic. If marking the job as failed, an explantory error message is required.

![Stop options](/assets/images/recipes/steps/stop_options.png)

*Configure the Stop step to mark the job as successful or failed* [Example recipe](https://www.workato.com/recipes/480360)

### Stop step example
The following recipe expects all Salesforce accounts to be present in Zendesk as organizations. In cases whereby no matching Zendesk organization is found, no recipe error is thrown as the search simply returns an empty list. In this case, the recipe will send an email to the recipe owner before ending the job.

![Stop step example](/assets/images/recipes/steps/stop_step_example.png)

*Recipe that utilizes the Stop step to send email and end job* [Example recipe](https://www.workato.com/recipes/480360)

The recipe also marks the job as an error, so that the recipe owner will take notice of this job and attempt to rerun it.
![Stop step with error](/assets/images/recipes/steps/stop_with_error.png)

*Configuring the Step step's error message* [Example recipe](https://www.workato.com/recipes/480360)

Any job ran by this recipe can only proceed through either one of the conditional step, as the Zendesk organization must have either been found or not. If not found, the job will stop at Step 4. If found, the job will not carry out actions within the conditional step (Steps 3 and 4), instead only updating the matching Zendesk organization.

## Action with error handler
This step, also known as the try-catch step, is used to define remedial actions when errors occur. Common remedial steps are to notify users of the error via email or error messages in the app, or to carry out a rollback (i.e. reversing the job by deleting any created or half-created records).

There are 2 blocks: the **Monitor actions for error** and the **On error** block. All actions to be carried out should be within the **Monitor** block. If all actions are successful, the **On error** block will be ignored. However, if any step in the **Moitor** block fails, the actions within the **On error** block will be carried out.

## Error handler step example
The following recipe tries to update the Zendesk organization right after the search step, irrespective of whether any Zendesk organizations were found. In cases whereby no Zendesk organization matching the Salesforce account name was found, the **Update organization** step fails.
![Error monitor step example](/assets/images/recipes/steps/error_monitor_example.png)

*Recipe that uses the error monitor to monitor failures in updating Zendesk organizations* [Example recipe](https://www.workato.com/recipes/480361)

As the recipe catches failed actions within the error monitor block, failed **Update organization** actions will be caught, and the recipe proceeds to carry out steps within the **On error** block. In this case, it seems that the only reason for the update failing is because no matching Zendesk organization was found. Hence the remedial step creates a new Zendesk organization.
