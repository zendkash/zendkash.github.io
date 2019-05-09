---
layout: page
title: Autonomous WiSAR
lang: en
lang-ref: AutonomousWiSAR
page-order: 5
---
# Autonomous WiSAR




The WiSAR problem of locating a lost person in the wilderness is one of the more challenging variants of the mobile-target search problem. In addition to the complexity of the problem, searching for people in the wilderness under tight time constraints is highly stressful for search and rescue personnel. The research described herein was performed with the aim of automating search to relieve SAR personnel of some of the stress while improving the probability of a successful search mission.  
The research examined several approaches to addressing the WiSAR search problem including [search with a static-sensor network](#staticSensor) and [search with a mobile-static hybrid search team](#mobileStaticHybrid).

## Static-Sensor Search<a name="staticSensor"></a>
Static-sensor networks can cover a large geographical area at a relatively low cost.
Despite this, they have been largely overlooked as an approach to mobile-target search.
Part of my research into autonomous WiSAR looked into how static-sensor networks could be used in WiSAR.
The work has resulted in a strategy for planning a static-sensor network deployment for effectively locating lost persons in a wilderness setting.

Select papers:
* [A Dynamic Approach to Sensor Network Deployment for Mobile-Target Detection in Unstructured, Expanding Search Areas](https://doi.org/10.1109/JSEN.2016.2537331)
* [Spatiotemporal Adaptive Optimization of a Static-Sensor Network via a Non-Parametric Estimation of Target Location Likelihood](https://doi.org/10.1109/JSEN.2016.2638623)

## Mobile-Static Hybrid Search<a name="mobileStaticHybrid"></a>
Since static-sensors in the above work are assumed to be immobile, they need to be delivered to deployment locations by mobile-agents.
Dedicating agents to the delivery of sensors, however, is an inefficient use of resources.
This is especially true since the sensors in the above work have scheduled deployments.
A more effective overall search can be achieved by having mobile-agents multitask, i.e., search for the target as they deliver sensors.
My research into autonomous WiSAR continued with the investigation into how mobile and static searches could be used together.
The work has resulted in the formulation of a novel variant of the vechile routing problem and a novel hybrid search planning strategy.

Select papers:
* [Vehicle Routing for Resource Management in Time-Phased Deployment of Sensor Networks](https://doi.org/10.1109/TASE.2018.2857630)
* [A Hybrid Strategy for Target Search Using Static and Mobile Sensors](https://doi.org/10.1109/TCYB.2018.2875625)
