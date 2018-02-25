---
title: Using Workbot for Slack
date: 2017-03-30 05:00:00 Z
---

# Using Workbot for Slack
In this article, we cover the two ways you can use Workbot in your Slack organization:

1. [Carry out Workbot commands](/workbot/using-workbot-for-slack.md#1-carry-out-workbot-commands)
2. [Setup smart notifications (optional)](/workbot/using-workbot-for-slack.md#2-set-up-smart-notifications)

## 1. Carry out Workbot commands

As previously mentioned, there is a pre-built list of commands for each app. Click **Commands** right under the app name to view the list.

![Salesforce commands list](/assets/images/workbot/workbot/salesforce-commands-list.png)
*List of available Workbot commands for Salesforce*

For example, you can request Workbot to display the details of an opportunity in Salesforce, or list recent opportunities. You can also create accounts and cases from Slack with Workbot.

You can interact with Workbot on channels it has been invited to, or via direct message. Note that conversations with Workbot on channels are visible to all team members in that channel, and direct message with Workbot are not visible to anyone but you.

### Example of Salesforce show account command
Let’s ask Workbot to display account details for a customer in Salesforce. If the account exists (Salesforce accepts case-insensitive searches too), Workbot will display the account details in the channel or direct message, corresponding to where you were having the conversation with Workbot.

![Salesforce show account example](/assets/images/workbot/workbot/salesforce-show-account-example.png)
*Using the Salesforce show account command in Slack. Workbot displays the account details if found.*

If the account does not exist, Workbot will return with an error message.

![Salesforce show account example - account not found](/assets/images/workbot/workbot/salesforce-show-account-not-found-example.png)
*Using the Salesforce show account command in Slack. Workbot responds with an error if the accoun is not found.*

## 2. Set up smart notifications
After [setting up Workbot](/workbot/workbot-for-slack-setup.md) in your Slack organization, you can configure Workbot to monitor your apps for important events and notify your team about them. Workato recipes with the **Workbot for Slack** action **Post bot notification** will post messages in channels where:

- [Workbot has been invited](/workbot/workbot-for-slack-setup.md#3-invite-workbot-to-channels), and
- notifications for that recipe has been turned on

### Notification configuration example
We go through how to create the Workato recipe and turn on notifications below.

1. Create a Workato recipe with the Workbot action **Post bot notification**
We're using a simple recipe with a Salesforce trigger **New Salesforce account** and a Workbot for Slack action **Post bot notification**. Whenever a new account is created in Salesforce, we want to post a notification to Slack.

![New Salesforce account notification recipe](/assets/images/workbot/workbot/new-sf-account-notification-example-recipe.png)
*Recipe that posts notifications in Slack when new Salesforce accounts are created. [Example recipe](https://www.workato.com/recipes/601229)*

We have configured the input fields for the **Post bot notification** action as follows:

![Salesforce notification configuration 1](/assets/images/workbot/workbot/added-salesforce-account-notification-command-1.png)
![Salesforce notification configuration 2](/assets/images/workbot/workbot/added-salesforce-account-notification-command-2.png)
*Input fields configuration for post bot notification action*

2. Check that Workbot is a member of the channel to post notifications to.
If Workbot isn't a member, [invite it to the channel](/workbot/workbot-for-slack-setup.md#3-invite-workbot-to-channels).

2. Turn on the notifications via Workbot command
The command should follow this format:

`@workbot [appname] start notifications name:[document] [event]`

If you look at the **Post bot notification** action configuration again, you can use the values from the first 3 input fields to build the Workbot command to start notifications.

![Salesforce notification configuration 1](/assets/images/workbot/workbot/added-salesforce-account-notification-command-1.png)
*Workbot for Slack command configuration in post bot notification action*

In this case, the command will be:

`@workbot salesforce start notifications name:account added`

If you have not [toggled the app on and connected successfully](/workbot/workbot-for-slack-setup.md#2-connect-workbot-to-your-apps), you will not be able to start notifications. But if the app has been turned on earlier, Workbot will confirm that notifications is started.

![Workbot notifications started](/assets/images/workbot/workbot/workbot-notifications-started.png)
*Workbot command to start notifications*

Subsequently, whenever new accounts are created in Salesforce, Workbot posts a notifications on this channel.

![Workbot notification example](/assets/images/workbot/workbot/workbot-notification-example.png)
*New Salesforce account notification posted to the specified channel by Workbot*

You can configure multipl channels to receive the Workbot notifications by using the same command in multiple channels.

4. Optionally, turn off the notifications via Workbot command
The command should follow this format:

`@workbot [appname] stop notifications name:[document] [event]`

Workbot will confirm that it has stopped notifications for the specified event. In this case, the command will be:

`@workbot salesforce stop notifications name:account added`

![Turn Workbot notifications off via Workbot command](/assets/images/workbot/workbot/workbot-notifications-stopped.png)
*Turning Workbot notifications off via Workbot command*

Alternatively, you can also turn off the notifications via the button generated when you first started the notifications.

![Turn Workbot notifications off via buttons](/assets/images/workbot/workbot/turning-workbot-notifications-off-via-button.gif)
*Turning Workbot notifications off via buttons*
