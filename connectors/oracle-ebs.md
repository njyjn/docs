---
title: Oracle E-Business Suite
date: 2017-02-16 06:15:00 Z
---

# Oracle E-Business Suite

## Pre-requisites

1. Install [Oracle E-Business Suite Integrated SOA Gateway](https://docs.oracle.com/cd/E26401_01/doc.122/e20925/T511175T578675.htm)

2. Install [Workato on-prem agent](https://www.workato.com/secure_agents)

3. In the Oracle EBS, deploy User PL/SQL REST service (internal name: FND_USER_PKG) with name “user”. Below are the steps to install PL/SQL REST service

a. Login to Oracle EBS

b. From the main menu, click on *Integrated SOA Gateway* > *Integration Repository*

![Oracle Applications Home page](/assets/images/connectors/oracle-ebs/oracle-applications.png)
*Oracle Applications home page*

c. Click on **Search**

![Search on page](/assets/images/connectors/oracle-ebs/search.png)
*Click on Search*

d. Search for Interface name **User** and Select the service with internal name **FND_USER_PKG**

![Search for User](/assets/images/connectors/oracle-ebs/interface.png)
*Locate FND_USER_PKG*

e. Go to the **REST Web Services** tab. Enter the service name as **user** and click on **Deploy**.

![User service name](/assets/images/connectors/oracle-ebs/web-service.png)
*Locate the REST web services and enter "user"*

## Creating Oracle EBS connections

From within the recipe **Connections** tab, or from the account [connections page](https://www.workato.com/connections):

1. Select **Oracle E-Business Suite**

![Oracle recipe](/assets/images/connectors/oracle-ebs/oracle-recipe.jpg)
*Creating new Oracle E-Business Suite connection*

Fields are as follows:

* Connection name:

Use something that identifies the specific Oracle EBS instance, e.g. “HR Sandbox”.

* On-prem secure agent:

If your Oracle EBS instance is not accessible directly from the Internet, Workato will need to connect to it via an [on-premise agent](/on-prem.md).  Select the appropriate, active on-premise agent that has network access to this Oracle EBS instance.

* Instance URL:

The base URL where the REST services enabled on your Oracle SOA gateway can be accessed.

* Username:

The username that Workato will use to access the REST services on your Oracle SOA gateway.

* Password:

Corresponding password for the above username.

* User service name:

This is used only to test connectivity

2. Click **Connect**

At this point, Workato will make a simple “hello world” test to your Oracle EBS instance, using the REST service specified in **User service name** above.

If all goes well, you should get a green success message displayed next to the button.
