# MMM-nasaastropic
Magic Mirror Module displaying NASA's astronomy picture of the day

### Prerequisites

- tested only on MagicMirror v2.0.0


### Download and Installation 

To use this module, clone this repository to your __modules__ folder of your MagicMirror: `https://github.com/nebulx29/MMM-nasaastropic`

Goto `MMM-nasaastropic` module directory and run `npm install`


### Configuration

The module needs the default configuration block in your config.js to work.

```
                {
                        module: 'MMM-nasaastropic',
                        position: 'top_left',
                        config: {
                                updateInterval: 6*60*60*1000,
                                animationSpeed: 0,
                                maxlongedge: 300
                        }
                },
```

The following properties can be configured:

|Option|Description|Values|Default|
|---|---|---|---|
|updateInterval|The update interval. Determines the refresh rate in ms at which sensor is read.<br>**Example:** `updateInterval: 10000`|int|`6*60*60*1000`ms = 6 hours|
|animationSpeed|Speed of animation when updates occur.<br>**Example:** `animationSpeed: 0`|int|0|
|maxlongedge|This is a number of pixels the long edge of the picture should have (CSS max-height/max-width attributes). <br>|integer|'300'|

