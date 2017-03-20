![Workbot1](/_uploads/Workbot/Workbot/Workbot 1.png)

# Workbot 

Workbot from Workato helps you work with your business apps from within Slack. You can chat with your apps to access information or ask the the app to create or update business data. To cut down on traffic, apps can now send you smart notifications based on user specified filters.

We will cover four areas in this document to help you get started!
* Adding Workbot to Slack
* Connecting Workbot to Apps
* Sending commands to the Apps
* Setting up Workbot for Smart Notifications

## Adding Workbot to Slack
To add Workbot to your Slack, [click here](https://www.workato.com/workbot-slack) or enter www.workato.com/workbot-slack in the address bar
Workato will bring up the screen that will help you set up Workbot for Slack
Note: If you do not want to not make Workbot available to all your team members, or if you are doing your own testing, you can create a new Slack team and use that team to set up Workbot.

Click on the Add to Slack button. This will bring up a pop-up that shows you which slack channel you are connected to and ask you to authorize
![Workbot2](/_uploads/Workbot/Workbot/Workbot 2.png)

Authorize access to Slack

![Workbot3](/_uploads/Workbot/Workbot/Workbot 3.png)

Once you authorize, you will get a confirmation screen. From here you just have two more steps get going


Clicking on Got it! will add Workbot to your Slackand show you the list of pre-built apps

![Workbot4](/_uploads/Workbot/Workbot/Workbot 4.png)

Workbot Added to Slack
                                           
## Connecting Workbot to apps                                        
You can turn on the access to the apps you need simply by toggling the switches shown below.

![Workbot5](/_uploads/Workbot/Workbot/Workbot 5.png)

If you turn on an App, such as Salesforce, a connection screen will pop up and guide you to connect to the right App instance

![Workbot6](/_uploads/Workbot/Workbot/Workbot 6.png)

Once turned on, the apps will show up with the button as ON. You can click on the Commands link to see the list of available commands

Activated Apps and list of available commands

![Workbot16](/_uploads/Workbot/workbot/Workbot 16.png)

Now you are ready to start chatting with Workbot
Note that Direct messages or DM are private exchanges with Workbot and won’t be seen by others


## Sending Commands to the app
To send a command in workbot, you can simply use on of the default commands from the app, or you can build your own recipes and customize a command! For example,  Let’s ask workbot to **"show details for a customer"** from quickbooks

![Workbot7](/_uploads/Workbot/Workbot/Workbot 7.png)
Workbot then shows us the result and asks us if we want to create a corresponding account in Salesforce. if we want to do that, all we need to do is say "@workbot Yes" 
![Workbot8](/_uploads/Workbot/Workbot/Workbot 8.png)
As shown from above, Workbot will check to see if the **Account** already exists, and if it does, will notify you on the chat. If it does not exisit yet, the Account will be created and details will be shown. 


## Setting Up Notifications
Commands are one way to interact with Workbot. At the same time, you can also ask it to listen for important stuff and notify you about them. You can invite workbot to any channel and configure the notifications to go to that channel. Follow the steps below to set up notifications in your channel for specific recipes

1. Selecting the Channel for Workbot

![Workbot9](/_uploads/Workbot/Workbot/Workbot 9.png)

2. Inviting Workbot to the Channel

![Workbot10](/_uploads/Workbot/workbot/workbot-adding-channel.gif)

3. Send a command to workbot to trun on notifications
  
The command should follow this format: 
  
**@workbot appname start notifications name:\[document] [event]**
  
If the recipe is not started, you will not be able to turn on notifications. But if it is connected, it will confirm that notifications is turned on.

![Workbot12](/_uploads/Workbot/Workbot/Workbot 12.png)

And send you the notifications on this channel

![Workbot13](/_uploads/Workbot/Workbot/Workbot 13.png)

4. You can also turn off notifications, by using this format: 
  
**@workbot appname stop notifications name:\[document] [event]**
  
Workbot will confirm that it has turned notifications off

![Workbot15](/_uploads/Workbot/Workbot/Workbot 15.png)

### Things To Note

1. Treat workbot like an actual person, he deserves some respect (:
2. Make sure that workbot is always in the channel to run commands, you can do this by inviting workbot to the channel
3. Just like talking to a real person, always use @workbot because you want him to be alerted
4. When you talk to workbot in its direct message channel, you do not need to use @workbot because he knows you are talking to him
5. When you invite workbot into the channel, ANYONE in that channel can tell Workbot to do the assigned commands
6. In the event you want workbot to do something that he is unable to do, feel free to post your request here and our team can take a look at it 
7. The integration app connection will pick up the LATEST connection that you have made to the app

