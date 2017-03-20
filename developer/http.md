---
title: HTTP connector
date: 2017-02-22 23:00:00 Z
---

<!--- Didn't want to import the data from Articulate since we're working on a new UI for HTTP. Let's come back to this when the new design is on production. -->

# HTTP connector
The generic HTTP and HTTP (OAUTH2) connector enables integration with any cloud applications that has an application program interface (API for short). This enables additional triggers or actions not currently supported on Workato to be built easily and quickly.

# Difference between HTTP and HTTP (Oauth2) connector
Apart from the authentication flow for the connection, the functionalities of both connectors are the same. The process of configuring webhook triggers, polling triggers and REST actions are identical.

For non-OAuth2 connections, an additional test API request is required to ascertain that the connection is valid, whereas OAuth2 connections don't require the additional test request.

# Further information on using the HTTP connector
Refer to our [HTTP connector course](http://resources.workato.com/http-connector/#/?_k=1szm77) for a detailed guide and examples on building HTTP triggers and actions