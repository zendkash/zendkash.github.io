---
layout: page
title: Autonomous WiSAR
lang: jp
lang-ref: AutonomousWiSAR
page-order: 5
---
# Autonomous WiSAR

Related papers:
* [Static sensor search planning](https://doi.org/10.1109/JSEN.2016.2638623)
* [Vehicle routing for sensor delivery](https://doi.org/10.1109/TASE.2018.2857630)
* [Hybrid static-mobile search planning](https://doi.org/10.1109/TCYB.2018.2875625)

This research addresses the problem of planning search for an un-trackable mobile-target with autonomous search resources. While this problem is relevant to a variety of real-world problems [1]–[3], my research focuses on addressing the wilderness search and rescue (WiSAR) problem of locating a lost person in the wilderness. My approach to this problem is to plan a cooperative search using a variety of search resources. The work aims to open previously untapped approaches to improving search performance by incorporating search resources not typically used in traditional WiSAR. 
The WiSAR problem of locating a lost person in the wilderness is one of the more challenging variants of the mobile-target search problem. The unstructured, cluttered, unbounded, and expanding search area, the time-critical nature of the search, and the limited resources available all contribute to making search planning a significant challenge [4]. Additionally, in WiSAR, the target location is unknown throughout the search and estimates of where the target could be can change unpredictably during the search [5]. Finding an article of clothing dropped by the target, for example, can significantly change where searchers think the target is likely to be. To take advantage of new information, the search team and plan must be adaptable. 
Traditionally, this is not an issue since WiSAR operations are carried out by trained SAR personnel. However, due to the conditions under which persons usually get lost in the wilderness, SAR personnel are typically subject to high-stress, high-risk situations for extended periods of time. Prolonged exposure to such situations can be dangerous. Relieving some of this stress while also improving the probability of a successful search is one of the major motivators for research in this field. 
Existing research into mobile-target search planning generally considers the use of mobile search agents [6]–[9]. Other works suggest the use of static-sensor networks for similar problems like surveillance [10], [11]. More recently, unmanned aerial vehicles (UAVs) have also been suggested for use in WiSAR due to their low-cost and high maneuverability [12], [13]. However, each of the above search agent types has its own issues (e.g., robots are expensive, sensors are static, and UAVs have high false positive detection rates). This research focuses on maximizing the effectiveness of search by combining a range of search resources like the ones mentioned above to maximize search effectiveness.
To date, my work has explored search by a dynamically deployed static sensor network [14], [15] and integration of static-sensor networks with a mobile-robot search team [16]–[18]. The former work builds upon previous work [19] and optimally plan the time-phased deployment of a static-sensor network. The latter work combines our work on mobile-robot search planning and static-sensor network deployment planning in a hybrid-search planning method. In the method, a mobile-robot team simultaneously searches for the target and deploys an optimal static-sensor network. 
There are two streams of current work in progress that further build on the work done thus far. The first investigates the hybrid mobile-static search problem from an alternative perspective. Namely, it is considering the deployment of static-sensors along optimal mobile-robot search trajectories. This will show if there is a clear advantage to emphasizing the optimality of mobile-robots over static-sensors instead of the reverse. The second stream aims to integrate UAVs into search planning, further expanding the range of search resources considered in our heterogeneous search. 
The above work will bring the research closer to realizing a heterogeneous search system for effectively locating un-trackable mobile-targets. Along the way, sub-problems such as optimal trajectory planning, route planning, and multi-agent task allocation will be addressed. Solutions to these sub-problems will typically have applications beyond the domain of WiSAR search planning, making contributions to the larger scientific community. The solution to the route-planning problem, for example, could be applied to a range of scheduled delivery applications (e.g., just-in-time package delivery). Developing solutions will involve drawing from techniques in task allocation, graph theory, mobile robotics, metaheuristic optimization, statistics, agent modelling, and wireless sensor networks.

## References
1.	P. J. Doherty, Q. Guo, J. Doke, and D. Ferguson, “An analysis of probability of area techniques for missing persons in Yosemite National Park,” Appl. Geogr., vol. 47, pp. 99–110, Feb. 2014.
2.	A. Macwan, G. Nejat, and B. Benhabib, “Optimal deployment of robotic teams for autonomous wilderness search and rescue,” in IEEE/RSJ Int. Conf. Intell. Robots Syst., 2011, pp. 4544–4549.
3.	A. Kehagias, D. Mitsche, and P. Prałat, “Cops and invisible robbers: The cost of drunkenness,” Theor. Comput. Sci., vol. 481, pp. 100–120, Apr. 2013.
4.	A. Macwan, J. Vilela, G. Nejat, and B. Benhabib, “Multi-Robot Deployment for Wilderness Search and Rescue,” Int. J. Robot. Autom., vol. 31, no. 1, 2016.
5.	A. Macwan, G. Nejat, and B. Benhabib, “Target-Motion Prediction for Robotic Search and Rescue in Wilderness Environments,” IEEE Trans. Syst. Man Cybern. Part B Cybern., vol. 41, no. 5, pp. 1287–1298, Oct. 2011.
6.	H. Xiao, R. Cui, and D. Xu, “A Sampling-Based Bayesian Approach for Cooperative Multiagent Online Search With Resource Constraints,” IEEE Trans. Cybern., vol. PP, no. 99, pp. 1–13, 2017.
7.	M. T. Agcayazi, E. Cawi, A. Jurgenson, P. Ghassemi, and G. Cook, “ResQuad: Toward a semi-autonomous wilderness search and rescue unmanned aerial system,” in Int. Conf. Unmanned Aircraft Syst., 2016, pp. 898–904.
8.	A. Macwan, J. Vilela, G. Nejat, and B. Benhabib, “A Multirobot Path-Planning Strategy for Autonomous Wilderness Search and Rescue,” IEEE Trans. Cybern., vol. 45, no. 9, pp. 1784–1797, Sep. 2015.
9.	Y. Sung and T. Furukawa, “Information measure for the optimal control of target searching via the grid-based method,” in Int. Conf. Inform. Fusion, 2016, pp. 2075–2080.
10.	I. F. Akyildiz and M. C. Vuran, Wireless Sensor Networks. John Wiley & Sons, 2010.
11.	E. Amaldi, A. Capone, M. Cesana, and I. Filippini, “Design of Wireless Sensor Networks for Mobile Target Detection,” IEEEACM Trans. Netw., vol. 20, no. 3, pp. 784–797, Jun. 2012.
12.	C. Baker, G. Ramchurn, L. Teacy, and N. Jennings, “Planning search and rescue missions for UAV teams,” in ECAI 2016, 2016, vol. 285, pp. 1777–1782.
13.	N. M. Dinnbier, Y. Thueux, A. Savvaris, and A. Tsourdos, “Target detection using Gaussian mixture models and fourier transforms for UAV maritime search and rescue,” in Proc. Int. Conf. Unmanned Aircraft Syst., Miami, FL, USA, 2017, pp. 1418–1424.
17.	Z. Kashino, J. Vilela, J. Y. Kim, G. Nejat, and B. Benhabib, “An adaptive static-sensor network deployment strategy for detecting mobile targets,” in Proc. IEEE Int. Symp. Safety, Security, Rescue Robotics, Lausanne, Switzerland, 2016, pp. 1–8.
15.	Z. Kashino, J. Y. Kim, G. Nejat, and B. Benhabib, “Spatiotemporal Adaptive Optimization of a Static-Sensor Network via a Non-Parametric Estimation of Target Location Likelihood,” IEEE Sens. J., vol. 17, no. 5, pp. 1479–1492, Mar. 2017.
20.	Z. Kashino, G. Nejat, and B. Benhabib, “A multi-robot sensor-delivery planning strategy for static-sensor networks,” in IEEE/RSJ Int. Conf. Intell. Robots Syst., 2017, pp. 6640–6647.
17.	Z. Kashino, G. Nejat, and B. Benhabib, “A Hybrid Strategy for Target Search Using Static and Mobile Sensors,” IEEE Trans. Cybern., pp. 1–13, 2018.
18.	K. Woiceshyn, Z. Kashino, G. Nejat, and B. Benhabib, “Vehicle Routing for Resource Management in Time-Phased Deployment of Sensor Networks,” IEEE Trans. Autom. Sci. Eng., pp. 1–13, 2018.
19.	J. Vilela, Z. Kashino, R. Ly, G. Nejat, and B. Benhabib, “A Dynamic Approach to Sensor Network Deployment for Mobile-Target Detection in Unstructured, Expanding Search Areas,” IEEE Sens. J., vol. 16, no. 11, pp. 4405–4417, Jun. 2016.

