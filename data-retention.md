---
title: Data rentention
date: 2017-02-24 03:15:00 Z
---

# Data retention
Workato retains data on the Workato platform for variable periods of time, depending on the Workato plan.

This time period is configurable for certain Workato plans. Shortening the retention time period is typically done for sensitive data, while lengthening the retention time period is typically done to maintain job logs for troubleshooting on Workato.

# Data retention policy
Data retention differs by Workato plans. Check the [Pricing and Plans page](https://www.workato.com/pricing?audience=general) or reach out to Workato sales representatives at +1 (844) 469-6752 to find out more.

# Types of data subject to data retention policy
The following details the data which are subject to the data retention policy and is erased after retention time period.

## Job history details
Detailed job steps that shows information about the data passed into each step, as well as the data response received from each step.

[![https://gyazo.com/3c7dbf8914444cea6cb5ef9da05619c7](https://i.gyazo.com/3c7dbf8914444cea6cb5ef9da05619c7.gif)](https://gyazo.com/3c7dbf8914444cea6cb5ef9da05619c7)

*Step-by-step details showing input and output of each action.*

After the retention period, detailed job logs will be erased. Job ID, job status and job timestamp will be retained.

## Trigger event data
Trigger event data is typically found in the job details section, within the trigger output tab as shown.

[![https://gyazo.com/0b2ca21e534188107bbc745b87aededc](https://i.gyazo.com/0b2ca21e534188107bbc745b87aededc.gif)](https://gyazo.com/0b2ca21e534188107bbc745b87aededc)

*Trigger data for new Salesforce account Myers Brewery can be found in the trigger output.*

Trigger event data is typically reused to rerun a job without having to create a new trigger event.

[![https://gyazo.com/3591903c23d64a894f381d7e797d37a8](https://i.gyazo.com/3591903c23d64a894f381d7e797d37a8.gif)](https://gyazo.com/3591903c23d64a894f381d7e797d37a8)

*Rerunning the trigger event for new Salesforce account Myers Brewery without having to create a new Salesforce account called Myers Brewery.*

After the retention period, reruns for these jobs will be disabled.

## Customized job report
Job reports can be customized to show jobs summary data that shows up on the jobs history.

![Custom job report](/_uploads/data-retention/custom_job_report.png)

*Custom job report showing the relevant data user defined*

After the retention period, custom job reports will be erased. Job ID, job status and job timestamp will be retained.

# Account deletion
If an account is deleted, all data associated with the account is removed.