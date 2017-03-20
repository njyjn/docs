---
title: Workato action steps
date: 2017-02-26 02:00:00 Z
---

# Actions
There are a variety of standard actions available on Workato such as Create, update, upsert, search, get and delete. We will be using the apps Zendesk and Salesforce in a Workato recipe to better illustrate these actions. You may visit the Workato recipe [here](https://www.workato.com/recipes/484532) and install them into your own Workato account if you would like test out these actions yourself. 

## Create
The Create Object action allows you to create any standard or custom object. In Salesforce, creating an account requires at least an Account Name to be stated. 

![create](/_uploads/actions-docs/action_1.png)
 
## Update
The Update Object action allows you to make changes and edits on any existing standard or custom object. In order to pinpoint on which object you will be updating, you would have to minimally input in the Object ID. Updating a Salesforce account will mean having to input in the Account ID. 

![update](/_uploads/actions-docs/action_2.png)
 

## Search
The search action act like a search engine - pass in the keywords (some actions ask for the exact keywords, some actions ask for partial keywords) and the details of the matching object will be provided to you. If Search actions don't find a matching object, the action will not fail, neither will they return anything. This might cause subsequent actions expecting values to be passed to them to fail. You can also think of Search actions like a filter that filters the specified conditions, and all the subsequent actions will be based on the specified "filter".

![search](/_uploads/actions-docs/action_3.png)
 

## Get
Get actions are more pinpointed - they require a unique ID to be passed to them, and the details of the matching object will be provided to you. If Get actions don't find a matching object, it will fail immediately. In the case of Salesforce, using the Get action on an Account will require you to input the Salesforce Account ID. 

![get](/_uploads/actions-docs/action_4.png)
 

## Upsert
Workato supports certain connectors with the Upsert command, which is a combination of the search, update and create(insert) actions. When used, Salesforce will perform a search for the object based on the object ID, create the object if it does not exist yet, else perform an update on it with the input field values.

![upsert](/_uploads/actions-docs/action_5.png)
 

## Delete
The delete action is supported by only a select number of applications on Workato. It allows the user to delete any standard or custom object by parsing in the Object ID. As the nature of this action can irreversibly lead to lost data, it is best to be cautious and understand the implications when using this action in Workato recipes.    

![delete](/_uploads/actions-docs/action_6.png)
