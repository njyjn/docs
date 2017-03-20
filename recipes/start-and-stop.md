# Starting & Stopping Recipes

## Starting Recipes

After successfully testing your recipes, start running them to automate your workflows. Click on 'Start recipe' and allow the recipe to run continually in the background. 

The 'Start recipe' button should be available to you by default after you have run at least 1 test. If you wish to start the recipe before testing, the button is available in the dropdown beside 'Test recipe'.

![Teststart](/assets/images/testing-recipes/Teststart.JPG)

After you have started the recipe, the recipe becomes an 'Active' recipe. On your Home page, you can filter by active recipes to see all the recipes currently running.


### Configuring the Administrator Email
When any errors that occur in the active recipes, an email will be sent to the Notifications Email you specify in the Account Settings. To add/change this email, click on your account name on the top right of your screen > Settings. 

![settingsdropdown](/assets/images/startstop/settingsdropdown.JPG)

Go to the 'Contact' tab to change the Notifications Email.

![notemail](/assets/images/startstop/notemail.JPG)

## Stopping Recipes

### When do I stop my recipes?

![stopbutton](/assets/images/startstop/stopbutton.JPG)

Stop the recipes when they are no longer relevant. You can only delete recipes after they have been stopped. 

You should also stop the recipes that are running into constant errors or if you notice incorrect data passing into your applications as a result of the recipe and fix these errors.

### Why are my recipes automatically stopped?
There are 2 reasons for this: 

  1. You have reached your monthly transaction limit. Recipes are automatically stopped when the transaction limit is hit. Contact our Customer Success team to add more transactions. You may also wait till the start of the new cycle when the monthly transactions are restored.
  
  2. There are more than 60 consecutive trigger errors. This error message appears on the top of the recipe when you try to start it.
  When you receive this error message on your recipe, it means the recipe failed to trigger for more than 60 jobs. In this case, view the error message provided and fix the errors before starting the recipe again.
  
  ![consecerror](/assets/images/startstop/consecerror.png)
  
## What happens when I start a stopped recipe?
Starting a stopped recipe will pick up jobs from where it last stopped. 

For example, if I stopped my recipe on January 1st, 10:30pm, and start it again on January 10th, 7pm, it will begin picking up jobs from January 1st, 10:31pm onwards. 

If you wish for the recipe to only start picking up new jobs from January 10th onwards, copy the recipe and change the 'From' date. The 'copy' button is below the recipe name. 

![copyrecipe](/assets/images/startstop/copyrecipe.png)





