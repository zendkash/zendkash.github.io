---
Title: 自律捜索
Lang: jp
MenuOrder: 5
Slug: AutonomousWiSAR
---
# 自律野外捜索

野外で遭難した人を見つける野外捜索の問題は最も困難な移動標的捜索問題の一種です。
問題の複雑さに加え、厳しい時間制限の下で広大な野外で人を探すことは捜索隊員にとって非常に危険なことです。
以下の研究は捜索隊員の安全を確保し捜索任務の成功率を上げるために、捜索の自動化を目的として行われました。
以下の研究は、[静的センサネットワークによる捜索](#staticSensor)や[動的・静的ハイブリッドチームによる捜索](#mobileStaticHybrid)など、捜索問題を解決するためのいくつかのアプローチを検討しました。

## 静的センサネットワークによる捜索<a name="staticSensor"></a>
静的センサーネットワークは、比較的低コストで広い領域を監視できます。
それにもかかわらず、移動するターゲットを捜索するための手段としては見過ごされがちです。
自律野外捜索に関するこの研究の一部では、静的センサーネットワークを野外捜索でどのように使用できるかを調査しました。
その結果、野外で遭難した人を効果的に見つけ出すための静的センサーネットワーク配置計画手順を提案しました。

![動的に配置された静的センサネットワークによる捜索の例]({static}/images/StaticSensorExample.jpg)
<details>
<summary>図の解説：</summary>
図は開発された静的センサネットワーク配置計画手順に従って計画され実行された捜索の例です。
標的が最後に把握していた位置を離れた後しばらくして一つのセンサ（青い点）で捜索が始まります。(a)
すべての図で、現在時刻までの標的が通った道は桃色の線で示されています。
図（b）と（c）では、さらにセンサが配置されて捜索が続きます。
図（ｄ）の時点で、標的によって落とされた手がかり（緑色の十字）が、別の動的センサー（図示せず）によって見つけられます。
新しい情報に基づいてセンサの配置を再計画したものが図（e）に示されています。その後の捜索において再計画されたセンサのうちの一つによって標的が見つかります。この時点でのセンサネットワークが図（ｆ）に示されています。
</details>

関連論文:
* [A Dynamic Approach to Sensor Network Deployment for Mobile-Target Detection in Unstructured, Expanding Search Areas](https://doi.org/10.1109/JSEN.2016.2537331)
* [Spatiotemporal Adaptive Optimization of a Static-Sensor Network via a Non-Parametric Estimation of Target Location Likelihood](https://doi.org/10.1109/JSEN.2016.2638623)

## 動・静的ハイブリッドチームによる捜索<a name="mobileStaticHybrid"></a>
上記の研究の静的センサは動かないと仮定されているので、他の移動手段の持つロボット（または捜索隊員）によって配備場所に設置される必要があります。
しかし、センサを運ぶために専用のロボットを使うのは非効率的です。
より効果的な捜索は、動的センサ（ロボット）に捜索させながらセンサを運ばせることで実現できます。
そこで、静的センサの運用に続いて、動的・静的センサをの共同運用についての研究が進められました。
この研究の結果、新しい経路指定問題の変種と新しいハイブリッド捜索計画手順が提案されました。

![An example search with a dynamically deployed static-sensor network]({static}/static/images/MobileStaticHybridSearch.jpg)
<details>
<summary>図の解説：</summary>
ハイブリッド捜索計画は、図（a）に示されているような動的に配置される静的センサネットワークを計画することから始まります。
その後、動的センサ（ロボット）が順番にセンサーを訪れるように経路が計画されます。
この経路は、センサ配置間の空き時間を最大化するために最適化されています。
ロボットがセンサを訪れるために通る経路の例が図（b）に示されています。
最後に、ロボットが割り当てられたセンサ配置間に通る道が計画されます。
センサの配置の合間に、空き時間に、ロボットは捜索を行います。
図（b）のあずき色の経路をたどるロボットの通る道が図（c）に示されています。
</details>

関連論文:
* [Vehicle Routing for Resource Management in Time-Phased Deployment of Sensor Networks](https://doi.org/10.1109/TASE.2018.2857630)
* [A Hybrid Strategy for Target Search Using Static and Mobile Sensors](https://doi.org/10.1109/TCYB.2018.2875625)
