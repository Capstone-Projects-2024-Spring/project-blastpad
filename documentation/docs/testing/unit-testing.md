---
sidebar_position: 1
---
# Unit tests
For each method, one or more test cases.

A test case consists of input parameter values and expected results.

All external classes should be stubbed using mock objects.

# BlocklyEditor

## +saveWorkspace()

Stubbed test class: blocklyEditor
Requires access to sandboxed filesystem.

Unit test checks if a workspace's contents have been updated after method is called.

## +loadWorkspace()

Stubbed test class: blocklyEditor
Requires some sort of sandboxed browser. Cypress is ideal for this.

Unit test checks that the correct workspace has been loaded and displayed in the editor.
