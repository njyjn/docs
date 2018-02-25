---
title: Workato connectors - Java messaging service
date: 2017-09-07 14:00:00 Z
---

# Java messaging service (JMS)
The JMS connector allows Workato to interact with JMS providers. The adapter can subscribe to topic/queue and publish to topic/queue. The JMS connector is an on-premise connector.

## Supported editions and versions
The connector supports [Amazon SQS](https://aws.amazon.com/sqs/) and [Apache MQ JMS](http://activemq.apache.org/jms.html) implementations.

## How to connect to the JMS connector on Workato
The JMS connector is an on-premise connector, therefore requiring Workato's [on-premise agent](/on-prem.html#setting-up-on-prem-access) and [JMS connection profiles](/on-prem.md#jms-connection-profile) to be set up before it can be used.

## Working with the JMS connector
In order to work with the JMS connector, users have to have a [common data model](/features/common-data-model.md) to work with.

### Using the new message in queue/topic trigger
To use the trigger, enter the exact queue name and select the format of the message, as well as the schema of the message, which should have been previously defined as a [common data model](/features/common-data-model.md).

![New message in queue trigger](/assets/images/connectors/jms/new-message-in-queue-trigger.png)
*New message in queue trigger*

The selected schema will create the output datatree for the trigger, for the message data to be used in the recipe for mapping to other systems.

### Using the publish message in queue/topic action
To use the action, enter the exact queue name and select the format of the message, as well as the schema of the message, which should have been previously defined as a [common data model](/features/common-data-model.md).

![Step input output](/assets/images/connectors/jms/publish-message-action.png)
*Publish message action*

The selected schema will create the input fields for the action. Fill in these input fields to populate the message with the data you wish to send.

The selected schema will also create the output datatree for the trigger, for the message data to be used in the recipe for mapping to other systems.
