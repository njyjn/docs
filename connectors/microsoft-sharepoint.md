---
title: Workato connectors - Microsoft Sharepoint
date: 2017-02-22 11:00:00 Z
---

# Microsoft Sharepoint
[Microsoft Sharepoint](https://products.office.com/en-us/sharepoint/collaboration) is a collaborative platform that enables document management and storage across teams and organizations. It is a part of the [Microsoft Office](https://products.office.com/en-US/) software products suite.

## How to connect to Microsoft Sharepoint on Workato

## Connecting to a cloud Microsoft Sharepoint instance
In order to connect to Microsoft Sharepoint on Workato, you need to obtain a client ID by registering your Microsoft Sharepoint app with Azure Active Directory. We walk through the process of registering Microsoft Sharepoint below.

1. Sign into the Microsoft Azure management portal by using an account with administrator permission. You must use an account in the same Office 365 subscription (tenant) as you intend to register the app with. You can also access the Microsoft Azure portal through the Office365 admin center by expanding the ADMIN item in the left navigation pane and selecting Azure AD.

2. Click on **Azure Active Directory (AAD)** in the left side menu.

![Azure Directory](/assets/images/connectors/microsoft-sharepoint/azure-directory.jpg)
*Click on Azure Active Directory*

3. Click **App registrations.**

![App registrations](/assets/images/connectors/microsoft-sharepoint/app-registrations.jpg)
*Click App registrations*

4. If you already have an application, use that ID. If not, proceed to click Add.   Provide a name for the application to add (typically "Workato"). Choose the application type as “Native” and provide a redirect URI value of https://www.workato.com/oauth/callback. Click Create in the bottom of the page.

![Add application](/assets/images/connectors/microsoft-sharepoint/add-application.jpg)
*Add application*

5. Click on the newly created application to look at the app details.

![New Application](/assets/images/connectors/microsoft-sharepoint/new-application.jpg)
*Click on the new application*

6. In the right menu click Required permissions.

![Required permissions](/assets/images/connectors/microsoft-sharepoint/permissions-required.jpg)

7. Add API access. Click Add -> Select  an API -> Office 365 sharepoint Online. Then, check the Delegated permissions checkbox. Click on Done

8. Use the application ID as the client ID to connect to Workato.

![Application ID](/assets/images/connectors/microsoft-sharepoint/application-id.jpg)
*Use the application ID*
