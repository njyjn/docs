---
title: Workato connectors - Microsoft Dynamics CRM
date: 2017-06-13 06:15:00 Z
---

# Microsoft Dynamics CRM
[Microsoft Dynamics CRM](https://dynamics.microsoft.com/en-us/) is a customer relationship management software package developed by Microsoft. It is built on the Microsoft Dynamics 365 platform, allowing users to easily extend and tailor the application for their business.

## How to connect to Microsoft Dynamics CRM on Workato

## Connecting to a cloud Microsoft Dynamics CRM instance
In order to connect to Microsoft CRM Dynamics on Workato, you need to obtain a client ID by registering your Microsoft CRM Dynamics app with Azure Active Directory. We walk through the process of registering Microsoft CRM Dynamics below.

1. Sign in to the Microsoft Azure management portal by using an account with administrator permission. You must use an account in the same Office 365 subscription (tenant) as you intend to register the app with. You can also access the Microsoft Azure portal through the Office 365 admin center by expanding the ADMIN item in the left navigation pane and selecting Azure AD.

2. Click on **Azure Active Directory (AAD)** in the left side menu.

![Azure Directory](/assets/images/connectors/microsoft-dynamics-CRM/azure-directory.png)
*Azure Active Directory is located on the navigation menu on the left*

3. Click **App registrations**.

![App Registration](/assets/images/connectors/microsoft-dynamics-CRM/app-registrations.png)
*App registrations is located on the navigation menu on the left*

4. If you already have an application, use that ID. If not, proceed to click **Add**. Provide a name for the application to add (typically "Workato"). Choose the application type as “Native” and provide a redirect URI value of `https://www.workato.com/oauth/callback`. Click **Create** in the bottom of the page.

![Add application](/assets/images/connectors/microsoft-dynamics-CRM/add.gif)
*Create the application*

5. Click on the newly created application to look at the app details.

![Add](/assets/images/connectors/microsoft-dynamics-CRM/click-on-app.png)
*Click on the newly created application*

6. In the right menu click **Required permissions**.

![Required permissions](/assets/images/connectors/microsoft-dynamics-CRM/permission.png)
*Click Required permissions*

7. Add API access. Click *Add* > *Select an API* > *Dynamics CRM Online*. Then, check the **Access CRM Online as organization users** checkbox. Click on **Done**

![Dynamics CRM](/assets/images/connectors/microsoft-dynamics-CRM/dynamics.gif)
*Add Dynamics CRM Online API access*

8. Click on **Grant permissons** (right next to **+Add**) and click **Yes**.

![Grant permissions](/assets/images/connectors/microsoft-dynamics-CRM/grant-permissions.png)
*Grant permissions*

9. Use the application ID as the client ID to connect to Workato.

![Application ID](/assets/images/connectors/microsoft-dynamics-CRM/application.png)
*Retrieve the Application ID*

9. [Extend the refresh token expiration time](#extending-refresh-token-expiration-time) if required.

## Connecting to an on-premise Microsoft Dynamics CRM instance
In order to connect to Microsoft CRM Dynamics on Workato, you need to obtain a client ID by registering Microsoft CRM Dynamics App with Azure Active Directory. Click [here](https://technet.microsoft.com/itpro/powershell/windows/adfs/add-adfsclient) to read more on how to register an on-premise Dynamics app with Azure Active Directory.

Remember to [extend the refresh token expiration time](#extending-refresh-token-expiration-time) if required.

## Extending refresh token expiration time
Whenever you connect to a Dynamics app, Workato gets an access token to be able to read and write to your Dynamics instance. This access token is valid until its expiry date. Workato also gets an accompanying refresh token with this access token. Whenever your access token expires, Workato can request for a new access token with the refresh token. Dynamics will check that this refresh token is still valid (i.e. the token has not been revoked), and provide a new pair of access and refresh tokens.

However, refresh tokens have expiry dates as well. If both access token and refresh token expires before Workato requests for new tokens, the Dynamics connection will no longer be valid, and a re-connection is required from the user. When this happens, Workato's requests to Dynamics will get a 400 response. If you are using a Dynamics CRM trigger, this results in your recipe experiencing [trigger errors](/recipes/error-notifications.md#trigger-errors). If you are using a Dynamics CRM action, this results in [job errors](/recipes/error-notifications.md#action-errors).

To ensure your recipes run continuously without requiring intervention, extend your refresh token expiration time, or set it to unlimited. You can apply and scope it to an OAuth application instead of applying it to the entire organization.

Read more about token lifetimes in the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/active-directory/active-directory-configurable-token-lifetimes).
