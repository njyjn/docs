---
title: Workato connectors - Docusign
date: 2017-02-22 11:00:00 Z
---

# Docusign
[Docusign](https://www.docusign.com/) is a secure eSignature solution that provides electronic signature technology and digital transaction management services that enables fully digital workflows for businesses.

## API version
The Docusign connector uses the [V2 REST API](https://docs.docusign.com/esign/) with the base URL of `https://{server}.docusign.net/restapi/v2`.

## Supported editions and versions
The Docusign connector works with all Docusign plans - Personal, Standard, Business Pro.

## How to connect to Docusign on Workato
The Docusign connector uses HTTP Header authentication to authenticate to Docusign. Learn more about it [here](https://www.docusign.com/p/APIGuide/Content/Introduction+Changes/Authentication.htm).

To connect, simply fill up the fields the given fields.
![Docusign Permission](/assets/images/docusign/docusign_permission.png)

* **Connection name**

  Give this Docusign connection a unique name that identifies which Docusign instance it is connected to.

* **Username**

  Email to connect to Docusign.

* **Password**

  Password to connect to Docusign.

* **Demo**

  Indication of whether the credentials belong to a demo or production account.

### Roles and permissions required to connect
Docusgn users who can login to Docusign can connect to Docusign from Workato. The user will have the same [permissions](https://www.docusign.com/supportdocs/ndse-admin-guide/Content/permission-sets.htm) on Workato as in Docusign. This means that they will have the same capabilities to view, manage and send envelopes as per their respective permissions on the Docusign platform.

## Working with the Docusign connector

## Working with generic create/update/search actions in Docusign
When using a Create/Send Document for Signing action in Docusign, the File URL must be in a downloadable format. For example, if you're linking to a Google Drive document, you must follow https://drive.google.com/uc?export=download&id=FILE_ID and replace FILE_ID.
