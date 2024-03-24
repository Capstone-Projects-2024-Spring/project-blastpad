# Services

In this install folder there are two service files.

To set up these services, first move them into the `/etc/systemd/system/` directory.

From there, you can use the following commands to manage the services:

`systemctl start <service-name>`
*Start the service*

`systemctl enable <service-name>`
*Enables the service so it will start after future reboots*

`systemctl status <service-name>`
*Displays basic information about the status of the service (i.e. whether it is running or not)*

`journalctl -u <service-name>`
*Displays service stdout logs, useful for if a service crashes and you need to debug*


