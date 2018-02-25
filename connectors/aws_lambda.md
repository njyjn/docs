---
title: Workato connectors - AWS Lambda
date: 2017-06-09 04:45:00 Z
---

# AWS Lambda
[AWS Lambda](https://aws.amazon.com/lambda/) is a scalable compute service that allows you to execute code without provisioning or managing servers. It is a versatile service that enables users to build a variety of real-time serverless data processing systems quickly and easily.

## Working with the AWS Lambda connector

## Output schema definition
When working with Lambda functions as triggers or actions, you will need to define the output schema for the function being called, as each function's response is variable. This sample output schema will be used to build the [output datatree](/workato-concepts.md#data-tree-and-pills). This datatree allows you to use the data returned from the Lambda function in subsequent recipe actions.

To define the output schema, provide a sample response to the `Response body` input field. This should describe the data structure and schema of the output. There are 2 ways to configure this input field:
- Use a sample JSON
- Manually define schema using the schema designer widget

![Schema Designer](/assets/images/aws_lambda/response_body_input_field.png)
*Response body input field*

This article focuses on defining the output schema via sample JSON. Clicking on `generate from JSON sample` brings up the following schema designer widget.

![Sample JSON pop up](/assets/images/aws_lambda/sample_json_pop_up.png)
*Schema designer widget*

There are two typical formats for a JSON:
- JSON response body
- Single primitive data

## JSON response
Workato requires all data be presented as key & value pairs. This is done so that we can map values using its respective key. JSON data format is a good example. For the AWS Lambda connector, we require all response JSON to be wrapped in a parent `"response"` object. Hence using a given response like this:

```json
{
  "id": 123,
  "name": "Ee Shan",
  "email": "eeshan@workato.com"
}
```

Wrap it in a parent `"response"` object:

```json
{
  "response": {
    "id": 123,
    "name": "Ee Shan",
    "email": "eeshan@workato.com"
  }
}
```

Insert the output JSON and click `Generate`. This generates the following output datatree:

![JSON response output datatree](/assets/images/aws_lambda/json_sample_output.gif)
*JSON body output datatree*

## Primitive data response
If the Lambda function returns non-JSON data structure, like a single string, integer or a simple boolean value, it will likewise need to be wrapped in a parent `"response"` object. Let's look at a simple function that returns an integer value (ID for example). A sample response will be:

```json
4990
```

Wrap it in a parent `"response"` object:

```json
{
  "response": 4990
}
```

Insert the output JSON and click `Generate`. This generates the following output datatree:

![Primitive response output datatree](/assets/images/aws_lambda/primitive_sample_output.gif)
*Primitive response output datatree*
