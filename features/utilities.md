---
title: Utilities
date: 2017-02-23 15:15:00 Z
---

# Utilities
Workato's Utilities connector is useful for performing all sorts of tasks Here are the list of actions you can perform using.

1. [Create list](#create-list)

2. [Download file from URL](#download-file-from-url)

3. [Generate column chart](#generate-column-chart)

4. [Generate pie chart](#generate-pie-chart)

5. [Link two objects](#link-two-objects)

6. [Get linked object](#link-two-objects)

## Create list
In workato, to use the repeat action requires a List item to be present. However there may be some instances where you may want to repeat an action a specific number of times. To do so, you can use the **Create list** action to create a list with a predetermined size (up to 500) to use the repeat action.

First, create the **create list** action, and determine the size you want to use. Next, you can create a repeat action any time after the **Create list** action. Then, use the **list** pill from the **create list** step's output in the **Input list** field. Once you have configured your recipe, it will repeat the set of actions the same number of times as the size of the list.

![repeat_list_action](/assets/images/features/Utilities/repeat-list-action.png)

## Download file from URL
Downloading a file in a recipe allows you to use that file later in the recipe, usually to upload onto another app. However, downloaded text content can be used directly into the recipe. Downloading a file **does not mean** that you will see that file on your computer. It is merely download for use in a recipe. Take note the maximum file size you can download is **25MB**.

In the Download file from URL section, you can provide a static URL if you intend to upload the same file to multiple places, (e.g. as an attachment to all Accounts in Salesforce) or provide a dynamic URL by using a URL pill obtained from a previous step output. You may also choose if you want your download file content to be encoded using base64.

## Generate column chart
Using this action allows you to use data from two columns in a list to create a column chart to help visualize and analyze data better. Select a list from your recipe's app data, followed by 2 columns from the list. The X-axis should contain the independant value, while the Y axis contains the dependant value.

![chart](/assets/images/features/Utilities/utilities-chart.png)

## Generate pie chart
Using this action allows you to use data from two columns (name and values) in a list to create a pie chart to help visualize and analyze data better.

![piechart](/assets/images/features/Utilities/utilities-piechart.png)

## Link two objects
Linking two objects allows you to associate one object to another, and allows you to cme back to this connection in another recipe. Some simple coonnections includes a Salesforce account ID with a Zendesk ticket ID, for easy tracking.

![linkobject](/assets/images/features/Utilities/utilities-linkobject.png)

To come back to this connection in another recipe, use the **Get linked object** action under **Utilities**, select the object which exists in some part of the new recipe, and select which linked object you need.

![linkobject](/assets/images/features/Utilities/utilities-getlinkobject.png)
