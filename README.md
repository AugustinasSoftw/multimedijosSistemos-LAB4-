# mediaLab4 - WebRTC Face Tracker

## Overview

This repository contains my WebRTC application for Lab 4. The application taps into the device's webcam stream and processes the video feed in real-time.

## Chosen Path: Option B

I chose **Option B**.
Instead of a simple CSS filter, I integrated the **Tracking.js** computer vision library. The application successfully requests webcam permissions via WebRTC's `getUserMedia` API, analyzes the live video feed, and dynamically draws a tracking box around the user's face using the HTML5 Canvas API.

## Browser Testing Validation

As per the general requirements, this WebRTC application has been successfully tested on the following browsers and devices:

- **Browser 1:** [Insert Browser 1, e.g., Google Chrome on Desktop]
- **Browser 2:** [Insert Browser 2, e.g., Safari on iOS]

_(Note: Application was run on a secure local HTTPS server using self-signed SSL certificates to bypass browser WebRTC restrictions)._
