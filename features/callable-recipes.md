# Callable Recipes
Callable Recipes are Workato integration recipes that wait for you to call upon them instead of running in the background. A regular recipe begins doing work when the trigger, an external force, occurs. The Callable Recipe only begins work if it is called by another recipe or a Rest API. They make recipe building less complex and help developers create simple apps faster. There are two kinds of Callable Recipes:

1. Callable Recipes for Recipe Building
You can create and save snippets of business logic as a callable recipe, then insert them into a new recipe. These snippets could be the workflow for error handling, approval workflows, or any set of steps in a recipe you use often. It will keep the complexity of your recipes low and only require you to make changes in one place.
2. REST Endpoint
You can provide a REST API endpoint to an outside party so they can activate the start of a recipe without logging into Workato or use a REST endpoint to bring data from an outside API into an application.

There are certain steps in a recipe that are often repeated in other recipes, such as the logic for error handling. Now, instead of building out the same 5 steps in each of your recipes, you can save time and make recipe creation easier with a Callable Recipe for Recipe Building. Think of callable recipes like a library of recipe sections that you can grab and insert into a recipe whenever you want to.

Some common recipe sections that make useful Callable Recipes include expense approval, auto-provisioning accounts in your apps, the notification process when things are not working correctly, and error handling to name a few. Making these recipe sections pre-made and readily available to insert into recipes not only makes recipe building faster, but ensures consistency in your business processes while reducing complexity in your recipes.

## How to create a callable recipe

Let’s take a look at an example to see how this works. Say you want to automate the process of creating an invoice in Quickbooks Online (QBO) when an opportunity is closed-won in Salesforce. In order to create a QBO invoice, you’ll need to create a new customer if the customer does not already exist in QBO. Now, this snippet of logic: “creating a customer in QBO when they don’t already exist,” is a process that is necessary not only with your Salesforce to QBO integrations, but also when you have Point Of Sale (POS) transactions flowing into QBO, invoices you receive from your vendors and more. Instead of recreating the logic for “creating a customer in QBO when they don’t already exist,” you can make this snippet of logic into a Callable Recipe.

**Step 1. Create a new recipe**

Create a recipe as you normally would, and for the trigger, select **Callable Recipe** under the application picklist. 
![CallableRecipeTrigger0](/assets/images/features/Callable Recipes/Callable Recipe Trigger 0.png)

Fill in a Name for the recipe, and fill up the Input Schema and the Response Schema in the JSON Format. You can find out more about JSON in this link (https://support.workato.com/support/solutions/articles/1000234879-schema-definition) here. 
![CallableRecipeTrigger1](/assets/images/features/Callable Recipes/Callable Recipe Trigger 1.png)
In **simple terms**, the input schema determines what fields will be shown and need to be filled in when a callable recipe action is created in the calling recipe. The Response schema determines what pills will be available for use in the calling recipes Output data. 

Lastly, you may choose to enable REST endpoint for your recipe. This defaults to No

[

Next, create your set of actions for the recipe. For this example you would create a set of standard de-duplication stpes, Run a search, and if search gives no results, create a customer, if exisiting customer found, update customer. For a sample recipe, click here https://www.workato.com/recipes/485991

**Step 2: Call recipe**

Create a recipe that requires the logic from the callable recipe we created earlier. Set up the trigger as required, and when created the actions you need. When you need to call the callable recipe, simply click on Add a new step, select **call recipe**, choose the recipe you created earlier, and you will see the fields from your **input schema** appear. Simply drag and drop the required pills and you'll be good to go! 

![CallableRecipeTrigger0](/assets/images/features/Callable Recipes/Call Recipe Action.png)



## Calling Recipes from Other Apps with REST API

Enabling a REST endpoint for recipes makes it available to be called by any application, internal or external, as long as they have the API token to do so. The token ensures the security of your API. Choosing to build simple web and mobile apps using Workato and a REST Endpoint takes out a majority of the custom coding that would be involved and ensures a fast turnaround. There are two ways you can use a REST Endpoint:

1. Bring Information Into An App

  You can connect any app that has an API available with a REST Endpoint even if Workato doesn’t have a connector for that app. For example, if you want to bring in information from Zillow.com so you know how much a real estate property is worth, you can create a REST Endpoint that will populate your fields in QuickBase every time an employee run the recipe.You can also create a button that will start the REST Endpoint recipe. You can place the button wherever you would like, for example inside of Salesforce, so employees can tell the recipe to run without logging into Workato.

2. Send Information Out Of An App

  Another scenario where this is useful is monitoring a supply chain – you could have a business partner call upon the REST endpoint you created to track shipping or generate a report via a link on your internal website. You can embed this anywhere you want.

To manage the REST endpoints and the API tokens, go to “Service Catalog” under your username on the right hand corner of the screen. Here, you can easily test your REST endpoints and find the specific URL used to call the REST API. These screenshots will show you a more detailed view of REST API management:
