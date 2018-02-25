---
title: Service catalog
date: 2017-03-18 15:45:00 Z
---

# Service catalog
Workato allows for callable recipes to be turned into an API endpoint. This means that your callable recipes can be called and used by someone who doesn't need to have access to your Workato account, provided that:

1) They have your confidential API token

2) The callable recipe they're trying to call is active

The service catalog is available from the account menu.

![Service catalog option](/assets/images/service-catalog/service-catalog-option.png)
*Service catalog menu option*

# API tokens
API tokens are meant to restrict access to your service catalog. Every call to an endpoint in your service catalog must be accompanied by an API token generated from your account.

Every user can generate multiple API tokens. All active API tokens generated from an account can be used to call upon the service catalog endpoints in that account, provided that the callable recipes corresponding to those endpoints are started and active.

Every API token generated in Workato is unique. For best practice, it is recommended that you distribute one API token per person you permit to access your service catalog, so that you can identify the users who are making calls to your API endpoints.

## Creating an API token
To create a new API token, simply give the API token a descriptive name (don't worry, you can always change it again later). Pass this token to someone to permit access to your service catalog.

![Create API token](/assets/images/service-catalog/create-api-token.gif)
*Creating an API token*

Currently, giving someone an API token essentially provides that person access to your entire service catalog, so be careful who you give API tokens to!

The following screenshot is the guest view of the service catalog, viewed by the person whom the service catalog owner has shared the link with.

![Shared service catalog](/assets/images/service-catalog/shared-service-catalog.png)
*Non-owner view of service catalog*

## Deactivating an API token
Once you delete an API token, it is no longer usable. Anyone passing that token along with the API call would receive an error.

# Service catalog endpoints

## Creating an endpoint
Each service catalog endpoint corresponds to a callable recipe. To create a service catalog endpoint from a callable recipe, select **Yes** for the **Enable REST endpoint**input field within the **Callable recipe** connector's **Call recipe request** trigger.

![Create endpoint](/assets/images/service-catalog/create-endpoint.gif)

Endpoints will not show up on the service catalog if **Enable REST endpoint** is marked **No**.

*Enable REST endpoint in your callable recipe*

Additional fields will be generated for you to configure your endpoint. Determine the HTTP method of your endpoint as well as the endpoint URL. Endpoint URLs have to be unique across your account.

![Configure REST endpoint](/assets/images/service-catalog/configure-rest-endpoint.gif)
*Configuring the REST endpoint*

Once you've done that, you should be able to see the new endpoint appear in your service catalog.

![Inactive endpoint in the service catalog](/assets/images/service-catalog/service-catalog-inactive-endpoint.png)
*Inactive endpoint in the service catalog*

## Making an endpoint active or inactive
Active recipes correspond to active endpoints in your service catalog, while inactive recipes correspond to inactive endpoints. No one can make a call to a specific endpoint if that endpoint is inactive, even if they have an active API token.

To activate a service catalog endpoint, start the corresponding recipe and the endpoint will be registered in the catalog as active.

![Active endpoint in the service catalog](/assets/images/service-catalog/service-catalog-active-endpoint.png)
*Active endpoint in the service catalog*

Similarly, stop the corresponding callable recipe and the endpoint will be registered in the catalog as inactive.

![Inactive endpoint in the service catalog](/assets/images/service-catalog/service-catalog-inactive-endpoint.png)
*Inactive endpoint in the service catalog*

## Testing an endpoint
Endpoints in the service catalog are displayed using Swagger. You can test the endpoints easily using the Swagger console.
