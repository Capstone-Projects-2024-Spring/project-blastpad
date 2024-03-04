---
sidebar_position: 1
---
# Unit tests
For each method, one or more test cases.

A test case consists of input parameter values and expected results.

All external classes should be stubbed using mock objects.

# BlocklyEditor Class

### +saveWorkspace()

Stubbed test class: blocklyEditor
Requires access to sandboxed filesystem.

Unit test checks if a workspace's contents have been updated after method is called.

### +loadWorkspace()

Stubbed test class: blocklyEditor
Requires some sort of sandboxed browser. Cypress is ideal for this.

Unit test checks that the correct workspace has been loaded and displayed in the editor.

# DeviceManager Class

### +loadGalleryTest()

This unit test is for the loadGallery() method in the DeviceManager class. The test calls the loadGallery method and tests if the "currentScreen" variable was changed to "Gallery".

- Stubbed test class: instance of DeviceManager class 
- Input: Void
- Expected Output: True

```
public loadGalleryTest(Void) -> Boolean
    deviceManager = New DeviceManager()
    deviceManager.loadGallery()
    return deviceManager.currentScreen == "Gallery"
```
