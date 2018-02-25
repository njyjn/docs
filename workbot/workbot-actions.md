---
title: Workbot actions
date: 2017-03-30 05:00:00 Z
---

# Workato actions
Workbot actions allow Workbot to post notifications into a specified channel when there are events to take note of, or respond to a command.

Workbot supports 3 actions:
* [Post command reply](#post-command-reply)
* [Post notifications](#post-notifications)
* [Download attachment](#download-attachment)

## Post command reply
Post command reply allows you to customize how Workbot replies when an event is completed. This reply can be a simple message about the task completion, or a prompt for the user to take a subsequent action once the first has been done, e.g. after retrieving data for a custom account in Salesforce, ask if the user wishes to copy that information across to another application.

Here is what the Post Command Reply action's output will look like in Slack.

![Workbot post command reply](/assets/images/workbot/workbot-custom-commands/post-command-reply2.png)
*Workbot's post command reply action in Slack*

The corresponding action with mapped fields can be found below.

![Workbot post command reply](/assets/images/workbot/workbot-custom-commands/post-command-action-mapping1.png)
![Workbot post command reply](/assets/images/workbot/workbot-custom-commands/post-command-action-mapping2.png)
*Post command action fields mapping*

The following table lists the fields available in a **Post command reply** action.

|Field   |Explanation|What goes in here   |
|---|---|---|
|Application|The application you are dealing with (e.g. Salesforce, JIRA)|Use the **Application** Pill from the Workato Trigger output for this|
|Reply Channel|The channel Workbot replies in|Use the **Reply channel** Field from the Workato Trigger output|
|Message to update|ID of an existing message that you want to replace with the new message. This overwrites the existing message in the channel|Message ID can be obtained from the output of a **Post command reply** or **Post notification** action,  or the **New command** trigger. Note: manual user inputs cannot be overwritten.|
|Thread ID|Pass in a thread ID to post your new message in that thread. Pass in a message ID if you wish to create a new thread and post your new message under that existing message.|For replying to the current thread use thread ID value from **New command** trigger. For creating new thread pass here message ID from output of another **Post command reply** or **New command** trigger - make sure it is not empty in the last case.|
|Message|Message posted in the channel.|Whatever you want. Slack Emojis are supported too. This field is optional if you use the **Fields** input field.|
|Message menu|This generates a picklist menu in the message for the user to select an option from.|Option placeholder text (shown when there is no option chosen) and array of JSON objects. (e.g. `\[{"title":"item title", "command":"item command"}]`)|
|Title|Title as seen in Slack message.|Whatever you want. Slack Emojis are supported too.|
|Title link|Allows you to embed a link in the title.|URL of a page you want to be brought to.|
|Description|Detailed message.|Whatever you want. Slack Emojis are supported too|
|Buttons|Buttons will be shown on the message, and you can click them in lieu of typing out another command|Array of JSON objects. (e.g. `\[{"title":"button title", "command":"button command"}]`)|
|Message Type|Colour displayed with the message to indicate message's importance or type.|Good = Green <br>Warning = Amber <br>Danger = Red|
|Fields|Fields to display in a grid.|One name-value pair per line (e.g. `<br>Name: John<br>Address: [address_pill]`)
|Image URL|Attach a picture to the message.|URL of an image that will be displayed below the message.
|Related documents|Commands can be linked to other commands via the document they operate on. Workbot uses this to recommend commands in a conversation|Specify links using this format: document name identifier_1:"App data from data tree" identifier_2:"App data from data tree" E.g. ticket id:"[data tree pill]" Specify one parameter per line. No spaces allowed in document name.|

## Post notifications
This action allows you to define which Slack channel to post customized notifications to. By default, Workbot posts direct messages only to the user who installed Workbot. Note, it is also possible to subscribe from a channel (where Workbot participates) to these notifications.

The fields available are simillar to that of the **Post command reply** action, with all the typical fields you see in a Slack message. However, there is the addition of the field **Notification filter**. This field allows you to set parameters for filters, which acts like a trigger filter for sending out notifications (i.e. the notification will only get sent when the set criteria is met).

## Download attachment
This action allows you to download attachments from Slack, received as input to [**New command** trigger](workbot-triggers.md#new-commands-building-custom-commands). Make sure command parameter for uploaded content has type *file*, e.g. `attachment type:file`. Pass file URL from **New command** output into the **URL** field to get attachment content. Then you may further pass this file content to Dropbox, Box or other connectors to upload them as files.
