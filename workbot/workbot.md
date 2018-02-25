---
title: Workbot for Slack
date: 2017-03-30 05:00:00 Z
---

# Workbot for Slack
Workbot for Slack is a Workato chatbot that helps you monitor and interact with your business apps from within Slack.

Your team can configure Workbot to post notifications to Slack channels when important events happen, such as when a key customer files a ticket, a lead from a Fortune 500 company fills in a form on your website, or when a DevOps alert is created.

You can also retrieve information from your apps and post it to Slack, or create and update business data from within Slack. To cut down on notifications volume, apps can now send you smart notifications based on user-specified filters.

![Workbot1](/assets/images/workbot/workbot/workbot-1.png)

By default, Workbot comes with a set of pre-built recipes that allows you to interact with your applications and enable notifications with minimal setup.

## Slack connector VS Workbot for Slack connector
Workato supports both the Slack connector and the Workbot for Slack connector.

The Slack connector allows you to authorize to your Slack team as a team member, and immediately post messages onto channels, send direct messages to Slack team members, and manage channels and groups. It does not require any app installation onto your Slack team. Recipes built on the Slack connector allows you to respond to message buttons and menus.

The Workbot for Slack connector enables you to build additional recipes on top of Workbot, which is an app that needs to be installed onto your Slack team, and comes with pre-built recipes. Messages posted in Slack via this connector will show up as being posted by **Workbot**. Recipes built on top of the Workbot connector has the ability to facilitate more complex interactions and communicate with Workbot to read or write data to other connected apps.

A detailed comparison table for both the Slack connector and the Workbot for Slack connector is below.

| Features                                                      | Slack connector                                                                                                                   | Slack for Workbot connector                                                                                                                                                                                                     |
|---------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Attachment](https://api.slack.com/docs/message-attachments)  | [Yes](/connectors/slack.md#example-message-with-attachment)                                                                       | [Yes](/workbot/workbot-actions.md#post-command-reply)                                                                                                                                                                           |
| [Message buttons](https://api.slack.com/docs/message-buttons) | [Yes](/connectors/slack.md#using-slack-message-buttons)                                                                           | Yes                                                                                                                                                                                                                             |
| [Message menus](https://api.slack.com/docs/message-menus)     | Yes                                                                                                                               | No                                                                                                                                                                                                                              |
| [Threads](https://api.slack.com/docs/message-threading)       | [Yes](connectors/slack.md#using-slack-threads)                                                                                    | Yes                                                                                                                                                                                                                             |
| Need to install into Slack team?                              | No                                                                                                                                | Yes                                                                                                                                                                                                                             |
| Post as user customization                                    | [Yes](/connectors/slack.md#example-message-with-attachment-customized-app-name-and-images)                                        | No, always posts as Workbot                                                                                                                                                                                                     |
| Pre-built recipes/commands?                                   | No                                                                                                                                | [Yes](https://www.workato.com/workbot-slack)                                                                                                                                                                                    |
| Notifications need to be set up?                              | No. Recipes that post Slack messages just have to be started, and notifications will start being posted to the specified channel. | [Yes](/workbot/using-workbot-for-slack.md#2-set-up-smart-notifications). Recipes that post Workbot notifications have to be started, and notifications turned on in the Slack channels that should receive these notifications. |
| Verified user access?                                         | No                                                                                                                                | [Yes](/workbot/workbot-latebinding.md)                                                                                                                                                                                          |
| Pass data (parameters) to subsequent messages/recipes         | No                                                                                                                                | Yes                                                                                                                                                                                                                             |

## Notes

1. Make sure that Workbot is always in the channel to run commands. Do this by inviting it to the channel.
2. Just like talking to a real person, always use @workbot because you want it to be alerted.
3. When you talk to Workbot in his direct message channel, you do not need to use @workbot because it knows you are talking to it.
4. When you invite Workbot into the channel, **anyone** in that channel can interact with Workbot via commands.
5. When first installing Workbot into your Slack team, Workbot will detect the **latest** app connections you have made in your Workato account and automatically connect to them.
