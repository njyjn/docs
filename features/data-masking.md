---
title: Data masking
date: 2017-03-02 02:00:00 Z
---

# Data masking
Data masking enables users to disable display of sensitive step level data within recipe job histories, e.g. hiding SSN and employee date of birth for employee onboarding recipes that move newly employees into HR and payroll systems. In such cases, users managing those integrations will not have access to such sensitive data.

Data masking is enabled only for certain plans. Check the [Pricing and Plans page](https://www.workato.com/pricing?audience=general) or reach out to Workato sales representatives at +1 (844) 469-6752 to find out more.

# Enabling data masking
Data can be masked for individual recipe steps, and both input and output data display will be disabled in he job history. To turn off display of this data as part of job history, you will need to check the **Enable data masking** field, found under the **Comment** section for each recipe step.

The following shows enabled data masking for the **Salesforce new account** trigger.

[![https://gyazo.com/5833f02f98a3c6627e19fad3cbe4187b](https://i.gyazo.com/5833f02f98a3c6627e19fad3cbe4187b.gif)](https://gyazo.com/5833f02f98a3c6627e19fad3cbe4187b)

[Example recipe with data masking](https://www.workato.com/recipes/480360)

The following shows job history before data masking.

[![https://gyazo.com/7473c74f2b0437d3576662c0c71135fb](https://i.gyazo.com/7473c74f2b0437d3576662c0c71135fb.gif)](https://gyazo.com/7473c74f2b0437d3576662c0c71135fb)

[Example recipe with data masking](https://www.workato.com/recipes/480360)

The following shows job history after data masking.

[![https://gyazo.com/125aff46f05db794788004afb7def8a0](https://i.gyazo.com/125aff46f05db794788004afb7def8a0.gif)](https://gyazo.com/125aff46f05db794788004afb7def8a0)

[Example recipe with data masking](https://www.workato.com/recipes/480360)