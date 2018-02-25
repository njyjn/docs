---
title: Workato connectors - Splunk
date: 2017-06-09 04:45:00 Z
---

# Splunk
[Splunk](https://www.splunk.com/) is software that enables monitoring, reporting and analyzing of real-time data to deliver operational intelligence for security, IT and business.

## Working with the Splunk connector

### Run query action
This action lets you run an ad hoc query in your Splunk instance, from a Workato recipe. We cover the input fields in this action in the following segments:

- [Output field list](#output-field-list)

- [Search query](#search-query)

- [Earliest/latest time](#earliestlatest-time)

#### Output field list
Every Splunk query has an expected response. When working with Splunk queries on Workato, you will need to define this response as output schema for the function being called. This output schema defined will be used to build the [output datatree](/workato-concepts.md#datatree-and-datapills) for the action. This datatree allows you to map the variables returned from the Splunk query in subsequent recipe actions.

![Schema Designer](/assets/images/splunk/response_body_input_field.png)
*Response body input field*

There are 2 ways to define this output schema:
1. Add individual fields
2. Use sample JSON

##### 1. Add individual fields
Click on `+ Add new field` to bring up the following schema designer widget.

![Single field pop up](/assets/images/splunk/individual_field_pop_up.png)
*Schema designer widget (Single field)*

Define the field name and type for each field returned from this search. Click on `Add field` to update the output schema with this new field.

##### 2. Use sample JSON
Click on `generate from JSON sample` to bring up the following schema designer widget.

![Sample JSON pop up](/assets/images/splunk/sample_json_pop_up.png)
*Schema designer widget (JSON)*

If you have a sample JSON response for your query, you can simply paste it in the widget to generate the output datatree. The schema will be automatically generated into the Workato schema definition structure. An example JSON is as follows.

```json
{
  "category": "sales",
  "count": 63,
  "percent": 29.71
}
```

#### Search query
Provide the Splunk query to run here. Refer to the [Search Tutorial](https://docs.splunk.com/Documentation/Splunk/latest/SearchTutorial/Usethesearchlanguage) by Splunk for more details.

#### Earliest/latest time
Events stored in Splunk are saved together with its timestamp (time when the event occurred) as the default field `_time` in UNIX time notation. Search queries generally contain a time period `earliest` or `latest`, in order to search for events with timestamp beginning/ending, or between the specified timestamps.

Refer to the [Time Modifiers Documentation](https://docs.splunk.com/Documentation/SplunkCloud/6.6.3/SearchReference/SearchTimeModifiers) by Splunk for more details.
