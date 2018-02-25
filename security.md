---
title: Security
date: 2017-12-12 18:00:00 Z
---

# Security
Workato is committed to providing a highly secure and reliable integration service using proven, tested, best-in-class technologies, practices and procedures. Workato's security policy can be found [here](https://www.workato.com/security).

## IP whitelists
IP whitelisting allows you to ensure traffic to/from Workato is not hijacked by a malicious website.

### Traffic from Workato
All traffic from Workato comes through the following IP addresses:

- **52.5.142.59**
- **34.226.132.221**
- **52.54.43.157**

You can add these IP addresses to your application/firewall whitelist. Add all three IP addresses to the whitelist to ensure continuous access.

#### Example whitelist configuration
If you have a recipe that accesses a MySQL server running on an Amazon EC2 machine, with a special user called **integrationuser**, you can run the following SQL command on your database to whitelist the Workato IP addresses.

```sql

GRANT ALL ON db1.*
TO 'integrationuser'@'52.5.142.59',
'integrationuser'@'34.226.132.221',
'integrationuser'@'52.54.43.157';
```

### Traffic from on-premise agent
Workato's [on-premise agent](on-prem.md) provides a secure way for Workato to selectively access customer-authorized on-prem apps, databases and folders without having to open inbound ‘ports’ in the corporate firewall. The on-premise agent makes an outbound connection to Workato via an on-premise gateway. 

If your organization has strict outbound traffic rules, you should whitelist the on-premise gateway IP address: 

- **52.206.58.244**
