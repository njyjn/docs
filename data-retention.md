---
title: Data rentention
date: 2017-02-24 03:15:00 Z
---

# Data retention
Workato retains data on the Workato platform for variable periods of time, depending on your account plan.

In certain cases, such as in cases of compliance, it might be necessary not to store data, or reduce the duration that data is stored. This time period is configurable for certain Workato plans. Shortening the retention time period is typically done for sensitive data, while lengthening the retention time period is typically done to maintain job logs for troubleshooting on Workato.

# Data retention policy
Data retention differs by Workato plans. Check the [Pricing and Plans page](https://www.workato.com/pricing?audience=general) or reach out to Workato sales representatives at +1 (844) 469-6752 to find out more.

| Plan             | Max. retention (days) | Configurable?  |
|------------------|-----------------------|----------------|
| Trial accounts   | 30                    | No             |
| Integration apps | 30                    | No             |
| Workbot apps     | 30                    | No             |
| Community        | 30                    | No             |
| Base             | 30                    | No             |
| Professional     | 90                    | No             |
| Business         | 180                   | Yes, min 1 day |
| Business Plus    | 180                   | Yes, min 1 day |
| Enterprise       | 365                   | Yes, min 1 day |

# Types of data subject to data retention policy
The following details the data which are subject to the data retention policy and is erased after retention time period.

## Job history details
Detailed job steps that shows information about the data passed into each step, as well as the data response received from each step.

![Step input output](/assets/images/data-retention/step-input-output.gif)
*Step-by-step details showing input and output of each action*

After the retention period, detailed job logs will be erased. Job ID, job status and job timestamp will be retained.

## Trigger event data
Trigger event data is typically found in the job details section, within the trigger output tab as shown.

![Trigger output](/assets/images/data-retention/trigger-output.gif)
*Trigger data for new Salesforce account Myers Brewery can be found in the trigger output.*

Trigger event data is typically reused to rerun a job without having to create a new trigger event.

![Rerun job](/assets/images/data-retention/rerun-job.gif)
*Rerunning the trigger event for new Salesforce account Myers Brewery without having to create a new Salesforce account called Myers Brewery.*

After the retention period, reruns for these jobs will be disabled.

## Customized job report
Job reports can be customized to show jobs summary data that shows up on the jobs history.

![Custom job report](/assets/images/data-retention/custom_job_report.png)
*Custom job report showing the relevant data user defined*

After the retention period, custom job reports will be erased. Job ID, job status and job timestamp will be retained.

# Account deletion
If an account is deleted, all data associated with the account is removed.
