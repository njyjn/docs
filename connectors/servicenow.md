---
title: Workato connectors - ServiceNow
date: 2017-02-16 06:15:00 Z
---

# ServiceNow

## Connector information

### API version
The ServiceNow connector uses [ServiceNow REST API V1](http://wiki.servicenow.com/index.php?title=REST_API#ServiceNow_REST_API_Resources).

### Supported editions and versions
The ServiceNow connector works with ServiceNow and ServiceNow instances.

## How to connect to ServiceNow on Workato

### ServiceNow connection
The ServiceNow connector uses basic authentication to authenticate with ServiceNow.

![Configured ServiceNow connection](/assets/images/connectors/servicenow/configured-servicenow-connection.png)
* **Connection name**

  Give this ServiceNow connection a unique name that identifies which ServiceNow instance it is connected to.

* **Username**

  Username to connect to ServiceNow.

* **Password**

  Password to connect to ServiceNow.

* **Instance name**

  Complete ServiceNow instance URL used to login to ServiceNow.

### Roles and permissions required to connect
ServiceNow users need the **rest_service** role in order to connect to ServiceNow on Workato.

In addition, to use the generic triggers and actions on our ServiceNow connector, the connected ServiceNow user needs to have the **admin** role in order to access the full list of possible tables (ServiceNow objects, such as incidents), as well as the columns in that table (the fields in that ServiceNow object, such as incident ID and short description).

## Working with the ServiceNow connector
### Using generic triggers and actions
In addition, to use the generic triggers and actions on our ServiceNow connector, the connected ServiceNow user needs to have the **admin** role to access the full list of possible tables (ServiceNow objects, such as incidents), as well as the columns in that table (the fields in that ServiceNow object, such as incident ID and short description).


## Troubleshooting

### Can't find a table from the table dropdown menu

When using ServiceNow, you have to select a specific table when using actions such as search, create, or update objects for generic objects. Sometimes you may not find your table in the table drop down list. This can also happen when you are configuring your Trigger for new/updated objects. 

For example, this is how your drop down could look:

![Table options](/assets/images/connectors/servicenow/table-workato.png)
*sample table dropdown menu*

However, should you not be able to find the table you require, you can always toggle the 'Table' option by clicking on the arrow to the right of the name, and select 'Enter custom value', and type in name of the actual table in the field. Once you enter the name, click outside the field so that Workato fetches the definition for that table.

![Custom Value](/assets/images/connectors/servicenow/servicenow.gif
*custom value*

Do note that the table has to be it's EXACT internal name, e.g. change_request, and NOT it's label.

![Table name](/assets/images/connectors/servicenow/table-name.png)
*Table name*

### ServiceNow error: 784: Unexpected Token

This error means that the connected account is suspended. Contact your ServiceNow Sales contact or administrator to re-enable your instance 


##What permissions do I need to connect to the ServiceNow connector?

The Servicenow connector on Workato has generic object triggers and actions (that allows you to select the table you want from a picklist of any tables) as well as specific triggers and actions (that allows you to read/write to specific tables).

![Configure trigger](/assets/images/connectors/servicenow/configure-trigger.png)
*list of ServiceNow trigger*

To use the generic triggers and actions on our ServiceNow connector, the connected ServiceNow user needs to have the **admin** role in order to access the full list of possible tables (ServiceNow objects, such as incidents), as well as the columns in that table (the fields in that ServiceNow object, such as incident ID and short description).

To use non-generic triggers and actions, the connected ServiceNow user needs to have the **rest_service** role, as well as the roles for whatever object he wishes to read/write to. To write to incidents, that would be itil role and possibly **itil_admin** role. Here's a list of the possible default roles in Servicenow and the permissions they have: http://wiki.servicenow.com/index.php?title=Base_System_Roles#gsc.tab=0

Here's a quick view of the user management screen in ServiceNow. More roles can be added to suit whatever ServiceNow tables/objects you wish to read/write to.

![Management Screen](/assets/images/connectors/servicenow/management-screen.png)
*management screen in ServiceNow*
