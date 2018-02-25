---
title: Workato connectors - ServiceNow
date: 2017-02-16 06:15:00 Z
---

# ServiceNow
[ServiceNow](https://www.servicenow.com/) is a cloud software solution that offers a comprehensive suite of IT management software in the areas of IT service, IT operations, and IT business.

## API version
The ServiceNow connector uses [ServiceNow REST API V1](http://wiki.servicenow.com/index.php?title=REST_API#ServiceNow_REST_API_Resources).

## Supported editions and versions
The ServiceNow connector works with ServiceNow and ServiceNow Express instances.

## How to connect to ServiceNow on Workato
The ServiceNow connector uses basic authentication to authenticate with ServiceNow.
![Configured ServiceNow connection](/assets/images/connectors/servicenow/configured_servicenow_connection.png)

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
In addition, to use the generic triggers and actions on our ServiceNow connector, the connected ServiceNow user needs to have the **admin** role in order to access the full list of possible tables (ServiceNow objects, such as incidents), as well as the columns in that table (the fields in that ServiceNow object, such as incident ID and short description).
