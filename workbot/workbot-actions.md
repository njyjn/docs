---
title: Workbot actions
date: 2017-03-30 05:00:00 Z
---

# Workato actions
Workbot actions allow Workbot to post notifications into a specified channel when there are events to take note of, or respond to a command.

Workbot supports 2 actions:
* Post command reply
* Post notifications

## Post command reply
Post command reply allows you to customize how Workbot replies when an event is completed. This reply can be a simple message about the task completion, or a prompt for the user to take a subsequent action once the first has been done, e.g. after retrieving data for a custom account in Salesforce, ask if the user wishes to copy that information across to another application.

These are all the fields available in a **Post command reply** action. We will get into the details of each field means in the later part of the section.

|Field   |Explanation|What goes in here   |
|---|---|---|
|Application|The application you are dealing with (e.g. Salesforce, JIRA)|Use the **Application** Pill from the Workato Trigger output for this|
|Reply Channel|The channel Workbot replies in|Use the **Reply channel** Field from the Workato Trigger output|
|Message|Message posted in the channel|Whatever you want. Slack Emojis are supported too|
|Title|Title as seen in Slack message|Whatever you want. Slack Emojis are supported too|
|Title Link|Allows you to embed a link in the title|URL of a page you want to be brought to|
|Description|Detailed message|Whatever you want. Slack Emojis are supported too|
|Buttons|Buttons will be shown on the message, and you can click them in lieu of typing out another command|Array of JSON objects. (e.g. `\[{"title":"button title", "command":"button command"}]`)|
|Message Type|Colour displayed on the message to indicate message's importance or type|Good = Green <br>Warning = Amber <br>Danger = Red|
|Fields|Fields to display in a grid|One name-value pair per line (e.g. `<br>Name: John<br>Address: [address_pill]`)
|Image URL|Attach a picture to the message|URL of an image that will be displayed below the message
|Related documents|Commands can be linked to other commands via the document they operate on. Workbot uses this to recommend commands in a conversation|Specify links using this format: document name identifier_1:"App data from data tree" identifier_2:"App data from data tree" E.g. ticket id:"[data tree pill]" Specify one parameter per line. No spaces allowed in document name.|

Here is what the Post Command Reply action's output will look like in Slack.

![Workbot1](/assets/images/Workbot/Workbot/workbot-custom-commands/workbot-cc-1.png)

## Post notifications
This action allows you to post customized notifications to Slack channels.

The fields available are simillar to that of the **Post command reply** action, with all the typical fields you see in a Slack message. However, there is the addition of the field **Notification Filter**. This field allows you to set parameters for filters, which acts like a trigger filter for sending out notifications (i.e. the notification will only get sent when the set criteria is met).
