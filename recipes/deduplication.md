# Deduplication

## Why should I ensure steps are taken for deduplication in my recipes?
Deduplication ensures only 1 unique instance is stored in each of your applications. Ensuring that the steps below are taken in every recipe will prevent unwanted duplicates of the same record which can make data in your business applications very messy.

## Step-by-Step Guide
View this recipe to see an example of how deduplication can be done with Workato in a few simple steps: https://www.workato.com/recipes/486082
 
### 1. Trigger
In this recipe, the trigger event is a New or Updated Contact in Salesforce. This means that whenever a Contact is created or updated in Salesforce, the recipe runs.

![trigger2](/assets/images/deduplication/trigger2.JPG)

### 2. Search
The search action searches the QuickBooks for the Display name which corresponds to the Contact's full name in Salesforce. 

![trigger](/assets/images/deduplication/trigger.JPG)

#### Unique Identifiers in Applications
To ensure that there is only 1 unique instance in each application when performing searches, use a unique identifer. In QuickBooks, the Display Name is one of them (ie. Display Names are unique in QuickBooks and no 2 customers can have the same display name). 

In other applications, commonly used identifiers are IDs and Record Numbers. These numbers can often be found appended to the end of the URL of the object.

### 3. Conditional Actions 

To ensure the search action is looking for a perfect match, the conditional action that follows uses the 'is present' and 'is not present' conditions. 

![conditional](/assets/images/deduplication/conditional.JPG)

**Tip:** If you wish to do a partial search, use the 'Contains' condition.

The Data field you want to test is also a unique identifier in QuickBooks. In this case, `Customer ID` is used. For every Customer in QuickBooks, there is a unique ID. Thus, if the 'Search' action finds a customer in QuickBooks with a corresponding name, the Customer ID is sure to exist.

If a customer is found, the Customer ID will be present. In this case, we want to update this record in QuickBooks. This can be used to update information such as the Customer's phone number, email, billing/shipping addresses etc.

In step 4, if a Customer is not found, we want to create a new customer record using existing information from Salesforce.

![conditional2](/assets/images/deduplication/conditional2.JPG)



