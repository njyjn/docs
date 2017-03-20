---
title: Workato connectors - JIRA
date: 2017-02-16 06:15:00 Z
---

# JIRA

## Connector information

### API version
The JIRA connector uses [JIRA Cloud REST API V2](https://docs.atlassian.com/jira/REST/cloud/).

### Supported editions and versions
The JIRA connector works only with JIRA cloud instances. These instances can be hosted on cloud or on-premise.

## How to connect to JIRA on Workato

### JIRA connection
The JIRA connector uses basic authentication to authenticate with JIRA.
![Configured JIRA connection](/assets/images/jira-docs/configured_jira_connection.png)
* **Connection name**

  Give this JIRA connection a unique name that identifies which JIRA instance it is connected to.

* **On-prem secure agent**

  To connect to on-premise JIRA instances, set up the [on-premise agent](https://www.workato.com/secure_agents). Ability to use the on-premise access functionality depends on the Workato plan subscribed to.

* **Host name**

  Complete JIRA instance URL used to login to JIRA.

* **Username**

  Username to connect to JIRA.

* **Password**

  Password to connect to JIRA.

* **Enable firewall-friendly IP**

  Relevant for organizations with IP whitelisting. Select *yes* to have all requests from Workato originate from a consistent, known IP address.

### Roles and permissions required to connect
JIRA users who can login to JIRA can connect to JIRA from Workato. The user will have the same [project permissions](https://confluence.atlassian.com/adminjiracloud/managing-project-permissions-776636362.html) on Workato as in JIRA, and will be able to read and write to the same projects and issues.

To use JIRA real-time triggers (which [registers a JIRA webhook via the API](https://developer.atlassian.com/jiradev/jira-apis/webhooks#Webhooks-Registeringawebhook)), the authenticated user needs to have the **JIRA Administrators global permission**. To set up real-time triggers without requiring the **JIRA Administrators global permission**, use the HTTP connector, **New event via webhook** trigger to [set up a JIRA webhook trigger via the JIRA admin console](https://developer.atlassian.com/jiradev/jira-apis/webhooks#Webhooks-jiraadmin).

## Working with the JIRA connector
### Using real-time triggers
To use JIRA real-time triggers (which [registers a JIRA webhook via the API](https://developer.atlassian.com/jiradev/jira-apis/webhooks#Webhooks-Registeringawebhook)), the authenticated user needs to have the **JIRA Administrators global permission**. To set up real-time triggers without requiring the **JIRA Administrators global permission**, use the HTTP connector, **New event via webhook** trigger to [set up a JIRA webhook trigger via the JIRA admin console](https://developer.atlassian.com/jiradev/jira-apis/webhooks#Webhooks-jiraadmin).
