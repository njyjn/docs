---
title: Workato connectors - Mapper by Workato
date: 2017-09-07 14:00:00 Z
---

# Mapper by Workato
The Mapper connector is a way for users to interact with schemas defined in the [common data model](/features/common-data-model.md).

The Mapper connector's **Map to object** action is typically used as a temporary step to store data in a predefined structure before publishing the data somewhere for a subscriber to consume, or before moving the data to another application. It would typically be used with the [JMS connector](/connectors/jms.md) or the [PubSub connector](/connectors/pubsub.md).

## How to connect to the Mapper connector on Workato
There is no connection required to use the Mapper connector, as schemas are stored in the Workato account for recipes to interact with.

## Working with the Mapper connector
In order to work with the JMS connector, users have to have a [common data model](/features/common-data-model.md) to work with. The common data model feature is enabled only for certain plans. Check the [Pricing and Plans page](https://www.workato.com/pricing?audience=general) or reach out to Workato sales representatives at +1 (844) 469-6752 to find out more.

### Using the map to object action
To use the action, simply select the schema you wish to interact with. The selected schema will create the input fields for the action. Fill in these input fields to populate the schema with the data you wish to populate it with.

![Map to object action](/assets/images/connectors/mapper/map-to-object.png)
*The configured action utilizing the user schema*
