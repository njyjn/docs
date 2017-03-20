# Salesforce

## Connector information

### API version
The Salesforce connector uses [Salesforce REST API](https://developer.salesforce.com/page/REST_API).

### Supported editions and versions
The Salesforce connector works with all Salesforce cloud instances.

## How to connect to Salesforce on Workato

### Salesforce connection
The Salesforce connector uses basic authentication to authenticate with Salesforce.
![Configured Salesforce connection](/assets/images/Salesforce-docs-img/Salesforce New connection.PNG)
* **Connection name**

  Give this Salesforce connection a unique name that identifies which Salesforce instance it is connected to.

* **Sandbox**

  To connect to a Salesforce Sandbox instance, set up the [on-premise agent](https://www.workato.com/secure_agents). Ability to use the on-premise access functionality depends on the Workato plan subscribed to.

* **Enable restricted IP**

  Relevant for organizations with IP whitelisting. Select *yes* to have all requests from Workato originate from a consistent, known IP address.

Once you have filled up the above fields, click on connect a Salesforce connection pop-up will show up, allowing you to either chose an account that has been saved in your browser, or provide new login credentials. ![SF authentication](/assets/images/Salesforce-docs-img/Salesforce authentication.PNG)

* **Username**

  Username to connect to Salesforce.

* **Password**

  Password to connect to Salesforce.
  

### Roles and permissions required to connect
Salesforce users who can login to Salesforce can connect to Salesforce from Workato. The user will have the same [permissions](https://help.salesforce.com/articleView?id=admin_userperms.htm&language=en_US&type=0) on Workato as in Salesforce, and will be able to read and write to the same projects and issues.

To use Salesforce real-time triggers, the authenticated user needs to be on the **Workato Enteprise Plan**

## Working with the Salesforce connector

### Can I connect more that one Salesforce account in a single recipe?
Salesforce Secondary
### What versions and editions we work with or don't work with
Workato works with all versions of Salesforce including Force.com apps, witht he excpetion of SalesforceIQ? 


### Using real-time triggers



### Working with generic triggers in Salesforce
In workato, a Trigger refers to a condition that is set to start off a recipe. All the triggers on the Salesforce connector deals with **Objects**. The name of the trigger tells you exactly what event must occur for a recipe to take place. The term "object" is exactly the same as how it is used within Salesforce itself, and refers to things such as leads, opportunities, accounts, as well as custom objects you may have created for your organisation. Simply click on the Object field's dropdown list and you will be able to see all the objects associated with the instance of Salesforce you have connected to a recipe. For example, you use the trigger **"New Object"** and select **Lead** as the object. Your recipe will trigger every time a new lead is created. 

Check out the list of Triggers available on Workato below:
1. Bulk object created
  Bulk query for new objects once a threshold is met

2. Deleted object
  Triggers when selected Salesforce object, e.g. lead, is deleted 

3. New object 
  Trigger when selected Salesforce object, e.g. lead, is created

4. New object (Real Time) 
  Trigger immediately when selected Salesforce object, e.g. lead, is created

5. New object batch created
  Retrieves a list of objects created since the last time recipe triggered

6. New/updated object
  Triggers when selected Salesforce object, e.g.lead, is created/updated

7. New/updated object (Real time)
  Triggers immediately when selected Salesforce object, e.g.lead, is created/updated

8. Scheduled object search using SOQL
  Execute SOQL query on specified schedule and returns results as list of objects

### Working with generic create/update/search actions in Salesforce
When working with Salesforce Actions on Workato, you should find it extremely easy if you are familliar with the fields in the objects on your salesforce account. When you select an object to use in a create/update/search action, you will see all the fields associated with that object appearing in your action. For example, if you were to choose **Lead** you will see fields like phone, email, lead status etc. Simply drag and drop pills into the associated fields you want to populate in a create/update action, or for the field you want to search with in the searh action. 


### Working with attachments in Salesforce

#### Uploading

To upload an attachement to Salesforce using Workato, you can use the **Create Object** Action, and select **Attachement** under the **Object** field. Before that however, you need to have a step that downloads an the file to be uploaded to saleforce. You may use the **box** action **get file download URL**, followed by using the  **utilities** tool to upload it from the obtained URL, or a simillar flow of actions with another connector.  

#### Downloading
To download an attachment from Salesforce, you can use the **Download file** Action.  The **file ID** must be obtained from a previos step, usually from the get object details step. Once that step is properly set up, you will be able to use the attachment as a pill in oth#er steps of the recipe, for example, you can use the **Upload file** action in the **box** connector. 

## Working with SOQL in Salesforce
**Salesforce Object Query Language (SOQL)** is used to search your Salesforce data for specific information. SOQL syntax consists of a required SELECT statement which may be followed by a number of optional clauses (such as TYPEOF, WHERE, WITH, GROUP BY, etc.).
In a Workato recipe, the scheduled object query trigger will run SOQL queries with the following basic syntax: SELECT (list of fields) FROM (an object) WHERE (filter statements/sorting). You could also use JOIN to merge two tables with at least one similar column. 

The recipe will automatically handle the SELECT FROM portion of your query. It will SELECT all fields FROM the object you choose from the pick list. For optional clauses, the trigger currently only supports WHERE conditions.
For a list of standard fields for major Salesforce objects, see: Salesforce Fields Reference

### Using Join 
It is also possible to join two tables with at least one similar column. For example, let's take a look at the query below: 

**SELECT Id, Name, Account.Name, Account.Parent.Name FROM Contact WHERE Account.Name = '1-800 Flowers'**

This example shows objects under account such as Id and Account Name join with the Contact which the common column is the  Account.Name='1-800 Flowers'. Contact object is therefore linked to Account object and Account object is also linked to another Account object, which is the parent of current Account.

It is important to take note that the query function is case sensitive, all inputs have to be exactly the same as it is in the original form.
 
### Inputting SOQL WHERE Conditions (Syntax):
The WHERE clause follows field expression syntax. A **fieldExpression** is defined as follows: fieldName comparisonOperator value.
**Comparison operators:**
Comparison operators include the following: =, !=, <, <=, >, >=, LIKE, IN, NOT IN, INCLUDES, and EXCLUDES. Here is a simple example following fieldExpression syntax:
 
For detailed information on how to use each comparison operator, see: Comparison Operators
**Logical operators:**
Multiple field expressions can be joined using logical operators. These include: AND, OR, and NOT. The basic syntax is as follows:
fieldExpressionX **AND** fieldExpressionY
fieldExpressionX **OR** fieldExpressionY
**NOT** fieldExpressionX
Here is an example showing two fieldExpressions joined by a logical operator:

For more information on logical operators, see: Logical Operators
 
### Date Formats and Date Literals:
To filter on date fields in a query, you must use Date only format. The syntax for this is: YYYY-MM-DD.
To filter on dateTime fields in a query, you must use the format including: date, time, and time zone offset. There are three possible syntax formats for this:
YYYY-MM-DDThh:mm:ss+hh:mm
YYYY-MM-DDThh:mm:ss-hh:mm
YYYY-MM-DDThh:mm:ssZ
In order to query a date or dateTime field, you may need to turn on formula mode if you are not using it already. This is needed to convert your timestamp to the ISO8601 format expected in SOQL. Also note that you do not need to use single quotes around date or dateTime values.
For date fields, add ‘.to_date’ to the end of your date formula to convert your date or timestamp to the correct format.


For dateTime fields, the third syntax format is the simplest to use. After entering the formula to get your desired timestamp (eg: now, 2.weeks.ago.beginning_of_day, etc.), add ‘.strftime("%Y-%m-%dT%H:%M:%S%z")’ to the end of it.

For more information on date formats and date literals, see: Date Formats and Date Literals

For additional hlp, see Salesforce documentation
* [SOQL](https://developer.salesforce.com/docs/atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql.htm) 
* [WHERE Clause Syntax](https://developer.salesforce.com/docs/atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_conditionexpression.htm)

## Articles on how to use additional special actions, such as get related objects, etc.

## Best practices in working with the connector
When starting to use Workato with your salesforce account, we reccomend that you either do it on a sandbox account, or test on non-essential pieces of data. This would prevent any loss of crucial data, especially since actions performed through Workato cannot be undone. 
### Working with Sandbox on Workato
Salesforce Sandboxes are isolated from your Salesforce production organization, so operations that you perform in your sandboxes don’t affect your Salesforce production organization, and conversely. Sandboxes are nearly identical to your Salesforce production organization. For a list of differences, see [Sandbox Setup Tips and Considerations](https://help.salesforce.com/HTViewHelpDoc?id=data_sandbox_implementation_tips.htm&language=en_US).
## Troubleshooting
Here is a list of common erros that you may encounter, and how to rectify them.
### 400 Bad Request

####  errorCode: MALFORMED_ID. Wrong Field is mapped

####  Invalid Cross-Reference Key

####  CANNOT_INSERT_UPDATE_ACTIVATE_ENTITY

####  No such column 

### 401 Unauthorised: Invalid Session ID

### 404 Resource not found 

### Custom field not present. 

### Entered email ID is not valid, Incorrect format, input data too big

### Input required for field or required field missing
