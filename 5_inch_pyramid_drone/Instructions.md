# Build guide

## List of parts

### 3D Printed parts
* 1x `canopy.stl` (or `canopy_long_camera_bolts.stl`)
* 1x `central_top_node.stl`
* 2x `arm_corner_0.stl`
* 2x `arm_corner_1.stl`
* 4x `motor_mount.stl`
* 4x `canopy_snap_on_anchor.stl`
* (Optional) 4x `battery_pad.stl`

### Carbon tubing
* 1x 87.1mm long 4x2 tube (diagonal brace)
* 4x 64.5mm long 4x2 tube (perimeter brace)
* 4x 121mm long 7x5 tube (arm tube)

### Metal fasteners
* 16x M3x12mm motor bolts
* 4x M2x12mm flight controller mount bolts

### Tools and consumabled
* Structural epoxy, 30min set-time is ideal, or alternatively MMA adhesive
* Small cut-off saw for cutting carbon tubing (hacksaw with very fine toothed blade works as well)
* Small strip of sandpaper of flat file to scratch tube mating surfaces

### Drone parts
* 1x AIO board (Speedybee F405 AIO is a good choice)
* 4x 16mm mount pattern motors, 2207 size is a good choice
* 4x 5-6" Props (6" is the max diameter supported by the frame)
* Small size race type VTX (DarwinFPV Ape 25-600mW is a good choice)
* Short (40mm) u.FL antenna
* Micro sized cam (19mm camera spacing)
* RX (Small size like HGLRC ELRS 2.4G like is a good choice)

## Assembly instructions

### Assembling the frame

Print all parts with suitable material, ASA, PCTG or PA12CF15 are all good choices.
PLA/PETG are too brittle and their impact resistance is poor, so it's better to avoid them.

Standard print settings with 2-3walls, 20% infill and 4 top/bottom layers are good, keep cooling
at minimum (max 40%) to achieve good layer adhesion, no supports are necessary.

Cut CFRP tubing to necessary length using cut-off saw with carbide/diamond cutting disc (fastest and cleanest method),
or manual hacksaw with fine toothed blade. 
Try to cut the tubes as precisely as possible, it's better to cut the tubes little bit longer and carefully shorten
them to desired length with flat diamond file.

Once tubes are cut, you need to throughly scratch the mating surfaces with flat file for a good epoxy bond.
Scratching is not necessary with raw carbon pultruded tubes, like [DPP pultruded tubes](https://www.dpp-pultrusion.com/en-NL),
it's enough to clean and degrease them with IPA.

Next step is glueing the frame together. I recommend good structural epoxy with 30min set-time - while MMA adhesives
like [MD Megabond 3000](https://www.marstondomsel.de/index.php/en/product/md-megabond-3030) provide the best strength and
impact resistance, their set-time is usually quite short and their fumes are nasty.

It's easiest to divide glueing into 3 steps:
1. First, glue motor mounts on arm tube ends - test with a dry fit before, motor mount need to fit onn tube without excessive force.
Mix epoxy and apply it to the scratched/sanded end of the motor arm tube, then insert the tube into motor mount.
Make sure the tube is inserted all the way and rotate it couple of times to distribute epoxy evenly.
Be carefull to not clog the end of the tube with epoxy as it needs to be free for motor cable routing - remove the excess epoxy with piece of paper/towel in case some got into the tube.

2. As a second step, assemble the central support perimeter with diagonal tube.
Do a dry fit test before, making sure that tubes can be inserted into corner nodes easily and perimeter is square and lying flat on workbench.
Next, mix epoxy and put it inside each support tube hole/cavity (use a wooden stick for that).
Take 2 bigger corner nodes, mount them on diagonal tube and lay it on the workbench.
Take one of the smaller corner pieces and put 2 perimeter tubes into holes/sockets, repeat the same process for the last corner piece.
In the final assembly step, pull the 2 bigger corners with diagonal tube little bit apart and join it with rest of the pieces.
Once every tube is inside corner piece socket, press all corners together with your fingers and lay it flat on workbench.
You will need to wait till the epoxy cures for the last step.

3. Next, prepare the arm tubes with already mounted motor mounts (step 1) - make sure the through holes for 12mm long motor bolts are clear and bolts
can be inserted without problems. 
Once all bolt channels are ready, mount the bolts into motor mount, fixing them with nuts on the other side, so they don't fall out.
Alternatively, you can already mount motors with all 4 bolts, make sure the motor wires are facing outside the frame center, exactly opposite how would you normally mount them on a classic quad frame.

Test fit by inserting arm tubes (already with attached motor mounts) through the corners and joining them together with the central top node.
The best way do do it, is to first put 2 arm tubes through the smaller corner nodes (the ones joined by just 2 perimeter tubes, without the diagonal tube), and join them with the central node.
You can then use the cable hole in the central node + diagonal tube below it to visually center the arm tubes - put the remaining 2 arm tubes through the bigger perimeter corners afterwards and join them in the central node as well.
They should fit easily without excessive force and you should be able to easily rotate the arm tubes when the whole frame is assembled.
Put the frame on flat workbench, arm ends with motor mounts should be level when they rest on motor bolt heads and frame shouldn't be twisted, all 4 arm ends should be touching the bench.

Next, pull the arm tubes little bit (1-2cm) apart and remove the central node.
Mix epoxy and spread it on the arm tube just outside of the perimeter corner, cover a ~10mm band on the tube with epoxy, don't put too much there, just a thin layer.
Lift the frame (hold it by the perimeter tubes, avoid touching epoxied or to-be epoxied parts) and slowly push the arm tube you just epoxied ~2cm inside through the corner piece while rotating it at the same time, then pull it back.
The aim is to evenly spread the epoxy inside the corner piece, repeat for the each arm-tube/corner.
As a last step, spread epoxy on arm-tube ends (to be joined by the central top node), be careful to just spread it on the outside of the tube. Attach the central node, using the same sequence of steps as described
above in the (dry) fit test section, rotate each arm tube 2-3 times to spread the epoxy evenly, make sure that each tube is inserted fully to the end-stop in the central node and put the frame on flat workbench.
Make sure everything is aligned and level and wait for the epoxy to fully cure.

### Assembling the canopy housing

Put a bit of glue (epoxy or CA) on protruding sticks of canopy anchors and insert them into canopy anchor sockets.
Rotate the anchors in correct fashion - you can snap the canopy on frame and the anchors will align, wait for glue to set befor removing the canopy.

### Mounting frame components

1, Start by mounting motors, bolt each motor to mount on arm end in such a way that wires face outside of the frame center. 
Do not shorten the motor wires, you need at least 15cm long wires when routed internally.
Guide the wires through the hollow arm tube till you can see the wire ends in central node hole, then "fish" them out from the top hole with a help tweezers or small piece of bent wire. 
Once you have all 3 motor wires out tie them together with a small strip of tape, so you don't mix-up wires from separate motors later, 
when soldering them to ESC pads. 
You can even color mark wire before routing them through the tube, so you can solder them in the right order and you don't have to mess-up with motor direction in firmware later.

Alternative annd bit easier way is to mount motors in a standard way, with wires facing inwards, simply taped to the tube top side.
I think it's a shame to not take advantage of the unique internal routing capability of this frame and resulting better aesthetics & aerodynamics, but it's up to you.

2. Prepare AIO board by soldering battery leads, capacitor and CAM/VTX/RX connections.

3. Mount AIO board by placing it between top node and diagonal bracing tube and screwing bolts (M2x12mm) directly to holes in the central node.
Board needs to be flipped upside down, so that USB connector and solder pads are accessible.

After board is fixed, solder the the motor wires to ESC pads.

4. Fix the camera inside canopy with side bolts, connect it to camera wire from AIO.
Guide the short VTX antenna with uFL connector through the antenna tube and connect it to VTX.
Fix VTX with piece of double sided tape on canopy roof, fix RX board with double sided table inside canopy as well,
good place is front below the camera window.
Now you can tuck-in all connector wires inside canopy and snap canopy in place.

5. Secure RX antenna with zip tie or electrical tape on one the front arms (7mm) or front perimeter tube (4mm) if you use antenna with short lead.
Secure battery leads from AIO on rear perimeter tube (4mm) with zip tie as well.

### Mounting battery

Battery is mounted below the frame and you have 2 options how to secure it.

1. First option is to print 4 battery pads, put strips of non slippery silicone tape on them and snap them on front/back perimeter tubes (4mm).
Adjust their position according to battery width (they have raised edges to better secure battery against side to side movement)
and secure the battery with standard battery strip running below both side perimeter tubes + diagonal tube.

2. Alternatively, you can just fix the non-slipper silicone tape directly on battery side and mount the battery without additional pads,
battery will be resting directly against front/back and diagonal tubes.

### Betaflight configuration

Make sure to correctly adjust board/gyro position as flipped because you mounted the board upside-down, make sure to verify
it's behaving correctly.
Also make sure to correctly assign motors and their direction in the motors tab, especially when you didn't mark the motor wires
when routing them internally through arm tubes.

The quad flies very well on standard betaflight settings, even better with RPM filtering enabled and 5" Supafly preset.

[Flight video with 5" Supafly preset](https://www.youtube.com/watch?v=JDnkSyWG7Kg)
