This bug occurs when using the Expo Camera API with a custom `onBarCodeScanned` function.  The function may not be called consistently or at all, even if barcodes are clearly visible within the camera's viewfinder.  This is particularly noticeable on Android devices.