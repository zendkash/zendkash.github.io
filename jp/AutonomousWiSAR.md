---
layout: page
title: 自律捜索
lang: jp
lang-ref: AutonomousWiSAR
page-order: 5
---
# 自律野外捜索

野外で遭難した人を見つける野外捜索救難の問題は最も困難な移動標的捜索問題の一種です。
問題の複雑さに加え、厳しい時間制限の下で広大な野外で人を探すことは捜索救助隊員にとって非常に危険でストレスの多いことです。
以下に記された研究は捜索救難隊員の安全を確保し捜索任務の成功率を上げるために捜索の自動化を目的として行われました。
以下の研究は[静的センサネットワークによる捜索](#staticSensor)や[動・静的ハイブリッドチームによる捜索](#mobileStaticHybrid)など捜索問題を解決するためのいくつかのアプローチを検討しました。

## 静的センサネットワークによる捜索<a name="staticSensor"></a>
静的センサーネットワークは、比較的低コストで広い領域を監視できます。
それにもかかわらず、移動標的捜索へのアプローチとして見過ごされがちです。
自律野外捜索救難に関するこの研究の一部では、静的センサーネットワークを野外捜索救難でどのように使用できるかを調べました。
結果、野外で遭難した人を効果的に見つけ出すための静的センサーネットワーク配置を計画するための手順が開発されました。

![動的に配置された静的センサネットワークによる捜索の例]({{ site.baseurl }}images/StaticSensorExample.jpg)
<details>
<summary>図の解説</summary>
開発された静的センサネットワーク配置計画手順に従って計画され実行された捜索の例。
標的が最近既知位置を離れた後しばらくして最初のセンサ（青い点）の配置で捜索が始まる、図（a）。
すべての図で、現在時刻までのターゲットの通った道はピンクの線で表示されています。
（b）と（c）では、さらにセンサが配置されて捜索が続きます。
（ｄ）の時点で、ターゲットによって落とされた手がかり（緑色の十字）が、別個の動的センサー（図示せず）によって見つけられる。
新しい情報に基づいてセンサの配置を再計画したものが（e）に示されています。その後の捜索において再計画されたセンサのうちの１つによって標的が見つかります。この時点でのセンサネットワークが（ｆ）に示されています。
</details>

関連論文:
* [A Dynamic Approach to Sensor Network Deployment for Mobile-Target Detection in Unstructured, Expanding Search Areas](https://doi.org/10.1109/JSEN.2016.2537331)
* [Spatiotemporal Adaptive Optimization of a Static-Sensor Network via a Non-Parametric Estimation of Target Location Likelihood](https://doi.org/10.1109/JSEN.2016.2638623)

## 動・静的ハイブリッドチームによる捜索<a name="mobileStaticHybrid"></a>
上記の研究の静的センサは不動であると仮定されているので、それらは移動エージェントによって配備場所に配達される必要があります。
しかし、センサを配達するたに専用のエージェントを使うのはセンサの非効率的な運用です。
より効果的な捜索を行うことは動的センサに捜索を行いながらセンサを配達させることで実現できます。
なので、静的センサの運用に続いて、動・静的センサをどのように共同的に運用できるかについて研究が進められました。
この研究の結果、新しい経路指定問題の変種と新しいハイブリッド捜索計画手順が開発されました。

![An example search with a dynamically deployed static-sensor network]({{ site.baseurl }}images/MobileStaticHybridSearch.jpg)
<details>
<summary>図の解説</summary>
ハイブリッド捜索計画は、（a）に示されているような動的に配置される静的センサネットワークを計画することから始まります。
その後、動的センサ（ロボット）が順番にセンサーを訪れるように経路が計画されます。
この経路は、センサ配置間の空き時間を最大化するために最適化されています。
ロボットがセンサを訪れるために通る経路の例が（b）に示されています。
最後に、ロボットが割り当てられたセンサ配置間に通る道が計画されます。
センサの配置の合間に、空き時間に、ロボットは捜索を行います。
（b）のあずき色の経路をたどるロボットの通る道が（c）に示されています。
</details>

関連論文:
* [Vehicle Routing for Resource Management in Time-Phased Deployment of Sensor Networks](https://doi.org/10.1109/TASE.2018.2857630)
* [A Hybrid Strategy for Target Search Using Static and Mobile Sensors](https://doi.org/10.1109/TCYB.2018.2875625)
