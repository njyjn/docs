---
title: Batch processing
date: 2017-03-06 15:30:00 Z
---

# Batch processing
Workato has the ability to handle enterprise application integration via transactional automation, e.g. moving a new Salesforce leads into Marketo in a single job. In addition, Workato also has the capability to handle batch processing, e.g. moving 50 new Salesforce leads into Marketo in a single job.

Batch processing is useful when moving large volumes of data. It is supported in certain connectors, such as database connectors (SQL Server, MySQL, etc.), cloud storage connectors that works with CSV files (e.g. Box, Amazon S3), Salesforce connector, etc.

## Batch triggers
Batch triggers are similar to polling triggers in fetching the same records. However, where polling triggers have trigger events corresponding to a single record, batch triggers have trigger events corresponding to a list of records. Maximum batch size can usually be defined in the trigger configuration.

### Batch trigger example
The Salesforce batch trigger has a default value of 100. In this case, each trigger event will contain a list of maximum 100 account records.

![Batch trigger](/_uploads/_recipes/triggers/batch_trigger_config.png)

*Batch trigger with a batch size of 100*

The job details for each trigger event will contain the specific details of only the first and last record in the list.

[![https://gyazo.com/1813107b9965a759a4ab7ba92cad18ef](https://i.gyazo.com/1813107b9965a759a4ab7ba92cad18ef.gif)](https://gyazo.com/1813107b9965a759a4ab7ba92cad18ef)

*Job details - trigger output for a batch of new accounts in Salesforce*

As the batch trigger polls at a regular basis, each poll may fetch more or less than the batch size defined in the trigger. For example, when the following recipe was first started, 843 records were fetched from 1 Jan 2015, midnight PST. These records were broken up into 8 trigger events of 100 records each, and 1 trigger event of 43 records. The next poll, 5 minutes later, fetched only 2 new account records created.

![Batch trigger](/_uploads/_recipes/triggers/batch_trigger_job_report.png)

*Custom job report displaying account batches' details - names of first and last accounts in the batch, as well as batch size*

## Batch actions
Batch actions are typically of the form **Create batch** or **Update batch** or **Upsert batch**. Accordingly, these actions create a list of new records, update a list of existing records, or upsert (create if record doesn't exist, update if record exists) a list of records.

### Batch create actions
Batch create actions create multiple records in a single action (typically corresponding to a single API call). Batch create actions usually accept a list of records as input, therefore typically recipes will:
- move a list of records from source app to target app, or
- prepare a list of records via building and accumulating data in a custom list, then moving that prepared list into the target app

## Batch create action example
The following is an example scenario that imports new products from a Box CSV file into Salesforce via the **Bulk insert** action.

![Example recipe using list input](/_uploads/_features/list-management/example-recipe-using-input-list.png)

*Example recipe using list input* [Example recipe](https://www.workato.com/recipes/488454)

Actions that take lists as inputs will have a input field called **Source list**, which will only take in list pills. When these list input fields are selected, the datatree changes to offer only list pills. The Rows list object pill is mapped into the Salesforce product source list input field.

![Example input source list](/_uploads/_features/list-management/example-input-source-list.png)

*Rows list object is mapped into the Salesforce products input source list*

For the list object passed into the input source list, the list will be transferred from the source app to the target app, with the values being trasnferred based on the fields mapped in the recipe. The three inventory items will be moved from Box into Salesforce as products.

[![https://gyazo.com/08c4f325262962296e7ca637b2e95b9e](https://i.gyazo.com/08c4f325262962296e7ca637b2e95b9e.gif)](https://gyazo.com/08c4f325262962296e7ca637b2e95b9e)

*Mapping of list datapills to list input*

The following shows the CSV file content.

![CSV trigger output](/_uploads/_features/list-management/csv-trigger-output.png)

*Trigger output details displaying lines within the CSV file*

The action output in the job history shows that three products have been created accordingly in Salesforce.

![Salesforce bulk insert via input list](/_uploads/_features/list-management/job-output-sf-bulk-insert.png)

*Salesforce bulk insert via list input*