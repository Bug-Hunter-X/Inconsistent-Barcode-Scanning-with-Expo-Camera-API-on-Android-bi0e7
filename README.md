# Inconsistent Barcode Scanning with Expo Camera API on Android

This repository demonstrates a bug where the Expo Camera API's `onBarCodeScanned` function does not reliably trigger barcode scan events on Android devices.  The issue is intermittent and difficult to reproduce consistently, but it significantly impacts barcode scanning functionality.

## Bug Description

The `onBarCodeScanned` callback is expected to fire whenever a barcode is detected within the camera's viewfinder. However, in this instance, it frequently fails to trigger, even with clearly visible barcodes.  This problem is more prominent on Android compared to iOS.

## Steps to Reproduce

1. Clone this repository.
2. Run the project using Expo Go on an Android device.
3. Point the camera at a barcode.
4. Observe that the `onBarCodeScanned` function may not always be called when a barcode is detected.

## Solution

The proposed solution involves adjusting the camera's barcode scanning configuration and handling potential delays in barcode detection.  See `bugSolution.js` for implementation details.