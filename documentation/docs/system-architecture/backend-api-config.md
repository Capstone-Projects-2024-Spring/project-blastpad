---
sidebar_position: 8
---

# Backend API Configuration?

## `class Configuration`

This class runs the backend functions allowing a user to connect to a wifi network, list available networks, scan, and close a connection.

## `connectionStatus`

This is a boolean variable that shows if the device is connected

## `listOfAvailNetworks`

This is a list that holds the list of names of available networks

## `SSID`

This is the string of the name of the network a user wants to connect to

## `securityKey`

This is the string to which the user's security key to the network is saved

## `scan()`

Function to scan for avialble wifi networks.

* **Returns:** `String []`

## `connect(SSID: string, securityKey: string)`

Function to connect to a wifi network.

* **Parameters:**
  * `SSID` — `String` representing the name of the desired wifi network
  * `securityKey` — `String` representing the network key of said network
* **Returns:** `void`

## `close()`

Function to close the current connection to a wifi network.

* **Pre-condition:** Must be connected to a WiFi network

* **Returns:** `void`

## `class Sensor`

This class communicates between blockly blocks and sensors on the Raspberry Pi to get sensor information for user-created programs

## `sensorID`

This is an integer that holds the ID of the current sensor

## `sensorData`

This is an array of integers that holds the sensor data

## `getSensorData()`

Function to get data from the current sensor

* **Pre-condition:** Must have run for at least some time to get enough valid data
* **Returns:** `Int []`

## `recalibrateSensor()`

Recalibrate the current sensor.

* **Returns:** `void`

## `clearSensorData()`

Function to clear the current buffer of saved sensor data.

* **Pre-condition:** Must have a full buffer of data

* **Returns:** `void`

## `class Documentation`

This class stores and displays the help documentation for Blockly blocks

## `header`

This is a string that holds the important information of the current doc to distinguish it from others

## `body`

This is a string that holds the content of the documentation block

## `loadContent(type: String)`

Function to get data from the current sensor

* **Parameters:**
    * `type` — `String` representing the ID of the block we are getting documentation for
* **Returns:** `String`