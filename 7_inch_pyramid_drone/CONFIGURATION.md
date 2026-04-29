# Configuration

Betaflight tuning for this build. For assembly, see the [build instructions](README.md).

## Betaflight

Make sure to correctly adjust board/gyro position as flipped because you mounted the board upside down, make sure to verify it's behaving correctly.
Also make sure to correctly assign motors and their direction in the motors tab, especially when you didn't mark the motor wires when routing them internally through arm tubes.

The quad flies very well on standard betaflight settings, even better with RPM filtering enabled and 7" Supafly preset.
Due to the very low weight and low disc loading, set RPM for dynamic idle quite low (~12); otherwise low-throttle management is quite difficult and the quad feels very floaty.
As you can see in the video, it's a super stable platform, perfect for precise hovering on spot.

## Flight video

<video controls width="100%" preload="metadata">
  <source src="video/flight_video.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
