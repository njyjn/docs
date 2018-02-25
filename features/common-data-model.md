---
title: Common data model
date: 2017-09-07 14:00:00 Z
---

# Common data model
The common data model, also known as the canonical data model or the abstract data model, is a standard schema that organizations define in order to simplify data flow and interaction between the different applications they use across the organization. This enables integrations to be built based on the common data model instead of being based on the application - and as a result, minimizes impact on organizations when they add, edit or remove integrations and applications.

The common data model feature is enabled only for certain plans. Check the [Pricing and Plans page](https://www.workato.com/pricing?audience=general) or reach out to Workato sales representatives at +1 (844) 469-6752 to find out more.

## Applications of the common data model
The shared schemas created in the common data model in Workato can be currently used in the following connectors:

- [Java messaging service connector](/connectors/jms.md)
- [Mapper connector](/connectors/mapper.md)

## Working with the common data model
When using the PubSub connector, you can listen to messages in a topic or publish messages to a topic. In order to do so, you have to first create a topic, and define the message structure for that topic, so that publishers and consumers alike know what to expect when sending or receiving messages.

You can create and manage your shared schema on the shared schema feature page.

![Shared schema management](/assets/images/features/common-data-model/shared-schema-management.png)
*Create and manage shared schema on the shared schema page*

When creating shared schemas, you will need to define what the data structure of the schema will look like. This structure can be subsequently edited.

![Editing shared schema](/assets/images/features/common-data-model/editing-schema.gif)
*Editing the shared schema definition*
