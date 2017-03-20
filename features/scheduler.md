#Scheduler ![Scheduler Icon](/_uploads/_features/Scheduler/Scheduler Icon.png)
Workato's Scheduler trigger is convenient for scheduling repeated tasks, and can be used tohelp perform time related commands.

Two types of Scheduler triggers are provided:
* New Scheduled event: happens every X intervals (5 minutes, 30 days, etc.)
* New Scheduled event (Advanced): happens at specified timings (1:15pm every Monday and Tuesday)
There are also 2 Scheduler actions provided:
* Get current time - provides the time when the action was performed,
* Wait - set recipe to wait for a  certain amount of time between steps

## Triggers

### New Scheduled Events

**New Scheduled Events**  are triggered at regular intervals. Simply select the intervals at which you wish for the recipe to run. This is usually best for monitoring-related use cases, such as checking how whether or not your customer service messages are being processed quickly enough (are there more than X unattended conversations in the last hour?). You can also set the time you want the recipe to start running using "Start at".

### Scheduled tasks 
**Scheduled tasks** are triggered at specific times. For instance, we might like our recipe to be triggered at 1:15pm every Monday and Tuesday. First, select the "Scheduled task" trigger, and then add the "Hour" optional field.

* In the "Hour" field, fill in 13.
* In the "Minute" field, fill in 15.
* Choose your time zone.
* Choose "yes" for Monday and Tuesday, and "no" for the rest.
Now, the recipe will run at 1:15pm every Monday and Tuesday.

**What happens if I don't fill in the "Hour" field?**
In that case, your recipe will run at MM minutes, every hour of every day specified. In this example, on Monday and Tuesday, the recipe would be triggered at 0015, 0115, etc.

## Actions

### Get current time
This can be used to get the time at which a certain step was performed, and can be useful when you need to input a time stamp of a task 

### Wait
The wait action enables a recipe wait for a set amount of time between steps. This is especially useful to ensure a recipe is using the most updated data in your mapping. 

## How to use Scheduler to test recipes

You can use scheduler to test recipe by using it as a dummy trigger or dummy action. This is useful when you want to determine which action in a recipe is causing problems as you don't need to keep repeating a trigger event (e.g. creating a new salesforce lead over and over). Simply create a recipe with the trigger as scheduler, and set up the action(s) that you want to test. Alternatively, if you need to test if a trigger is working properly, you can use scheduler as a dummy action so that the recipe can be started.

