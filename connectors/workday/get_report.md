---
title: Workato connectors - Workday get report
date: 2017-11-05 09:00:00 Z
---

# Get report

## How to use
Workday Report-as-a-Service is exposed as an action in Workato. This action will execute a run of the report and retrieve all data from that report as return them as an array. This data can be used in a recipe like any other actions. Learn how to setup a custom report [here](/connectors/workday/workday_raas.html).

### Inputs
The only input required is the RaaS JSON URL. Find out how to get this URL in the Custom Reports section of this documentation. When this URL is provided, the Workday action will generate the appropriate output fields.

![Run report input](/assets/images/workday/raas_input.png)
*Run report input*

### Outputs
The output of this action is presented as an array. Each element in this array corresponds to a row in the report. Similarly, each column in your report will be rendered as a field in the report output array.

![Run report output](/assets/images/workday/raas_output.png)
*Run report output*

### Use cases

#### Generate a custom CSV file
A very simple use case for running and retrieving custom report data from Workday is to create a CSV file from the report. This can be done using the `Compose CSV` action under the `Utilities` application.

![Create CSV file](/assets/images/workday/compose_csv.png)
*Create CSV file from Workday custom report data*

#### Filter rows using custom logic
Workday provides a comprehensive feature to add filters and validation logic to report results. However, it is limited to data available in Workday. Workato allows you to extract report data out of Workday, and execute validation logic against data from multiple sources.

![Custom filter logic](/assets/images/workday/multi_app_filter.png)
*Custom filter logic using data from external applications*

This example shows how to filter out rows in a report against data from Salesforce but checking for presence of a corresponding Salesforce User account. The resulting report will contain only employees from Workday that are active Salesforce Users.
