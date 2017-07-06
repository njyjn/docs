---
title: Workato connectors - ServiceNow
date: 2017-02-16 06:15:00 Z
---

# ServiceNow

[ServiceNow](https://www.servicenow.com/) allows employees and customers to get the services that they need organized in one place.

Some supported [ServiceNow](https://www.workato.com/integrations/service_now) triggers on Workato include **New object** and **New/Updated Object** including certain real-time triggers.

On this page we'll walk you through:
1. [Connector information](http://docs.workato.com/connectors/servicenow.html#connector-information)
2. [How to connect to ServiceNow on Workato](http://docs.workato.com/connectors/servicenow.html#how-to-connect-to-servicenow-on-workato)


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

In addition, to use the generic triggers and actions on our ServiceNow connector, the connected ServiceNow user needs to have the **admin** role in order to access the full list of possible tables. This include ServiceNow objects, such as incidents, as well as the columns in that table (the fields in that ServiceNow object, such as incident ID and short description.
