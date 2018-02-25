---
title: Workbot triggers
date: 2017-03-30 05:00:00 Z
---

# Workbot triggers
Workbot for Slack allows you to send commands to Workbot on Slack. Workbot will handle these commands and interact with your connected apps to do things, such as display details of a customer account, close opportunities, display a list of invoices or tickets, or create/update existing tickets.

Each Workbot command is processed using a Workato recipe. The recipe trigger picks up the Workbot command as a trigger event, and the recipe determines the actions to carry out. With Workbot, you can create custom workflows that execute via your Slack commands, and optionally retrieve relevant data for you back to Slack.

The Workbot for Slack connector has 2 triggers:

- [New command](/workbot/workbot-triggers.md#new-commands-building-custom-commands)

This trigger allows you to build a custom command for Workbot in a Workato recipe. When you call this custom command in Slack to Workbot, the recipe will trigger and execute the actions you have defined.

- [New URL mention](/workbot/workbot-triggers.md#new-url-mention)

This trigger monitors certain types of URLs in Slack, and pulls pre-defined, formatted data into the channel when such an URL is mentioned. Currently, Salesforce and Github URLs are supported.

## New command trigger (building custom commands)
This trigger requires you to configure a custom Workbot command. When this recipe is started, Workbot will monitor for that command. Whenever the command is called, Workbot proceeds to carry out the recipe actions.

### New command trigger input fields
The following table lists the configurable input fields in the trigger, and what each field does.

| New command trigger input field | Description                                                                                                                                                                                                                                                                                                                                                                                |
|---------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Application                     | 1st part of the Workbot command. The app the Workbot command is working with. Groups the command under this application (when user types app name, command will show up as a button).                                                                                                                                                                                                                                                  |
| Command action                  | 2nd part of the Workbot command. What the Workbot command is doing with the business data, e.g. show, create, update.                                                                                                                                                                                                                                                                                                                                                           |
| Business data                   | 3rd part of the Workbot command. The record that the Workbot command works with, e.g. invoice, customer, ticket.                                                                                                                                                                                                                                                                                                                                                           |
| Input parameters                | The data to ask from the user so as to successfully carry out recipe actions, defined in a specific format.  Parameters may have the type *file*, which takes as input file content (e.g. text, binary content), that you may upload into Slack. You can use this file in subsequent operations using the Workbot action **[Download Attachment](workbot-actions.md#download-attachment)** |
| Help text                       | Short description of what the command does. Shows up in the Workbot app page under **Commands**.                                                                                                                                                                                                                                                                                           |
| Hide command                    | If **yes**, command will not show up as a button in the Slack channel when the user types app name. If **no**, command will show up as a button in the Slack channel when the user types app name.                                                                                                                                                                                         |

#### Workbot command format
The Workbot command is created by piecing 3 elements together, the `application`, `command action` and `business data`:

```
application command-action business-data
```

In the following case, the application is "Salesforce", command action is "Show", and business data is "Account". The command that Workbot will respond to is therefore:

```
Salesforce show account
```

#### Workbot command input parameters format
The **input parameters** field lets you decide what data is needed from the user to carry out the recipe actions successfully.

Each input parameter has to be provided in the following format:

```
param_name optional:true prompt:false type:string hint:hint_to_help_users sample:example_data
```

| Input parameter field | Description                                                                                                    |
|-----------------------|----------------------------------------------------------------------------------------------------------------|
| Name                  | Required. Needs to be a single word.                                                                           |
| Optional              | Not required. If not defined, defaults to `optional:true`. Input parameter will be optional.                   |
| Prompt                | Not required. If not defined, defaults to `prompt:false`. No prompt will be generated.                         |
| Type                  | Not required. If not defined, defaults to `type:string`. Possible types are `string`, `boolean`, `number,` `file`, and `date_time`. |
| Hint                  | Not required. If not defined, defaults to no hint.                                                             |
| Sample                | Not required. If not defined, defaults to no sample data.                                                      |

In this case, to successfully retrieve Salesforce account data, we need the full account name from the Slack user.

```
name optional: false prompt: false type: string hint: Exact account name sample: IBM
```

The configured input parameters will be displayed as follow up questions for the user after the Workbot command.

![Salesforce show account input parameters](/assets/images/workbot/workbot-trigger/salesforce-show-account-input-params-display.png)
*Input parameters display on Slack*

### New command trigger output datapills
The **New command** trigger also provides a set of datapill variables as that holds data about the command, such as the user making the command, the channel the command was made it, etc. The following table details these datapill variables.

![New bot command output datatree](/assets/images/workbot/workbot-trigger/new-bot-command-trigger-datatree.png)
*New bot command output datatree*

The following table lists the output datapills from the trigger, and what data each field contains.

| New command trigger datapill variables | Description                                                                                                                                                 |
|----------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Application                            | 1st part of the Workbot command. The app the Workbot command is working with.                                                                               |
| Business data                          | 2nd part of the Workbot command. What the Workbot command is doing with the business data, e.g. show, create, update.                                       |
| Command action                         | 3rd part of the Workbot command. The record that the Workbot command works with, e.g. invoice, customer, ticket.                                            |
| Message ID                             | The epoch time when the Workbot command was sent. Can be used to populate **Thread ID** input fields to create a thread under this Workbot command message. |
| Context                                | Slack data about this Workbot command, e.g. the team and channel it was posted in, the user who posted it, ID of the thread it was in, if applicable.       |
| Parameters                             | Data obtained from the user by asking follow up questions to their Workbot command.                                                                         |

The following table holds additional information about the **Context** object and the data it correspondingly holds.

|Context datapill variables   |Description   |
|---|---|
|Team   |Slack team ID|
|User   |Slack user ID|
|Reply channel   |Slack channel ID where message was posted|
|User handle| Slack user handle|
|User email | Slack user email |
|User name | Slack user friendly name|
|Thread ID| Thread ID if message was posted to thread, `null` otherwise|

Triggers may contain **Message ID** in their output. Message ID has a value only when **New command** was triggered by a button action. If command was triggered as result of a manually typed command, this field will be empty.

### Example: Salesforce show account command
In the following gif, we're chatting directly with Workbot via a DM. When we type in the app name "Salesforce", Workbot generates a list of available commands and displays them as buttons. The command can also be manually typed into the DM as `Salesforce show account`.

![Salesforce show account command](/assets/images/workbot/workbot-trigger/salesforce-show-account-command.gif)
*Salesforce show account command*

When the `Salesforce show account` command is called, either via the button click or the typed command, a corresponding recipe with a Workbot for Slack **new command trigger** will trigger. This recipe will have a Workbot **New command** trigger that listens specifically to the command `Salesforce show account`. The [pre-built Workbot for Slack recipe](https://www.workato.com/recipes/57662) that does this can be found below.

![Salesforce show account command recipe](/assets/images/workbot/workbot-trigger/salesforce-show-account-recipe.png)
*Salesforce show account command recipe [Example recipe](https://www.workato.com/recipes/57662)*

The trigger configuration for the `Salesforce show account` command is as follows.

![Salesforce show account command trigger configuration 1](/assets/images/workbot/workbot-trigger/salesforce-show-account-config-1.png)

![Salesforce show account command trigger configuration 2](/assets/images/workbot/workbot-trigger/salesforce-show-account-config-2.png)
*Salesforce show account command trigger configuration*

We know that Workbot commands are created by piecing 3 elements together, the `application`, `command action` and `business data`. In this case, application is "Salesforce", command action is "Show", and business data is "Account". The command that Workbot will respond to is therefore `Salesforce show account`.

The **input parameters** field lets you decide what data is needed from the user to carry out the recipe actions successfully. In this case, to successfully retrieve Salesforce account data, we need the full account name from the Slack user, so we define the parameter as follows:

```
name optional: false prompt: false type: string hint: Exact account name sample: IBM
```

The configured input parameters will be displayed as follow up questions for the user after the Workbot command.

![Salesforce show account input parameters](/assets/images/workbot/workbot-trigger/salesforce-show-account-input-params-display.png)
*Input parameters display on Slack*

When the user has finished providing all the required input, the recipe actions will be executed. In this case, the recipe action was to display the Salesforce account details as a message attachment in a grid format.

![Salesforce show account command results](/assets/images/workbot/workbot-trigger/salesforce-show-account-results.png)
*Salesforce show account command results*

## New URL mention
When you send a URL in Slack, you can have Workbot provide certain information into the channel for everyone to see. For example, you can send a Salesforce lead URL into your sales channel and workbot will automatically send a message showing more information about that particular lead.

![workbot triggers](/assets/images/workbot/workbot-trigger/workbot-url.gif)

Simply select the application in the trigger (Currently only Salesforce and Github), and select the Document, and set up your actions as you prefer. By default, giving a Salesforce or Github URL in a channel that Workbot is in will trigger a prompt from Workbot asking you if you want to show details of the content of the URL that you have sent. Click on yes to trigger the recipe. You can also edit the recipe in Workato if you want to have more or less fields included in the message.

![workbot triggers](/assets/images/workbot/workbot-trigger/workbot-url-mention.gif)
