---
title: Workato connectors - Jira
date: 2017-02-16 06:15:00 Z
---

# Jira
[Jira](https://www.atlassian.com/software/jira) gives users a simple way to organize and plan the release of any software. This allows development teams to lay out key steps to follow when releasing the software including 'Plan', 'Track','Release','and Report' to guide users.

With Workato, you can keep projects and issues in sync between Jira and other issues or tickets tracking apps used by other departments such as Zendesk, ServiceNow, Salesforce's Desk.com.

## API version
The Jira connector uses [Jira Cloud REST API V2](https://docs.atlassian.com/jira/REST/cloud/).

## Supported editions and versions
The Jira connector works with Jira cloud instances and Jira on-premise instances from 7.x onwards.

## How to connect to JIRA on Workato
The Jira connector uses basic authentication to authenticate with Jira.
![Configured Jira connection](/assets/images/jira-docs/configured_jira_connection.png)

- **Connection name**

Give this Jira connection a unique name that identifies which Jira instance it is connected to.

- **On-prem secure agent**

To connect to on-premise Jira instances, set up the [on-premise agent](https://www.workato.com/secure_agents). Ability to use the on-premise access functionality depends on the Workato plan subscribed to.

- **Host name**

Complete Jira instance URL used to login to Jira.

- **Username**

Username to connect to Jira.

- **Password**

Password to connect to Jira.

- **Enable firewall-friendly IP**

Relevant for organizations with IP whitelisting. Select *yes* to have all requests from Workato originate from a consistent, known IP address.

### Roles and permissions required to connect
Jira users who can login to Jira can connect to Jira from Workato. The user will have the same [project permissions](https://confluence.atlassian.com/adminjiracloud/managing-project-permissions-776636362.html) on Workato as in Jira, and will be able to read and write to the same projects and issues.

To use Jira real-time triggers (which [registers a Jira webhook via the API](https://developer.atlassian.com/jiradev/jira-apis/webhooks#Webhooks-Registeringawebhook)), the authenticated user needs to have the **Jira Administrators global permission**. To set up real-time triggers without requiring the **Jira Administrators global permission**, use the HTTP connector, **New event via webhook** trigger to [set up a Jira webhook trigger via the Jira admin console](https://developer.atlassian.com/jiradev/jira-apis/webhooks#Webhooks-jiraadmin).

## Working with the Jira connector

### Using real-time triggers
To use Jira real-time triggers (which [registers a Jira webhook via the API](https://developer.atlassian.com/jiradev/jira-apis/webhooks#Webhooks-Registeringawebhook)), the authenticated user needs to have the **Jira Administrators global permission**. To set up real-time triggers without requiring the **Jira Administrators global permission**, use the HTTP connector, **New event via webhook** trigger to [set up a Jira webhook trigger via the Jira admin console](https://developer.atlassian.com/jiradev/jira-apis/webhooks#Webhooks-jiraadmin).
