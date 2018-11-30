---
title: 3.4 – Is it possible to identify a Hate Echo Chamber?
cover: /assets/images/covers/viz02.jpg
number: 8
---

### Description 

The previous protocol shows the different ways used by the users to reach the hate sites defined by [RationalWiki](https://rationalwiki.org/wiki/Category:Internet_hate_sites) that are still opened. 
If we consider the traffic share of the referrals sites, it is possible to identify with the [SimilarWeb](https://www.similarweb.com/) tool the leading referral sites and the leading destination ones. By connecting these sites with the hate ones, we have tried to identify a hate echo chamber through which the user can observe the connections between them.

The graph displays the hate echo chamber by positioning the 33 hate sites defined by RationalWiki in a circular composition, while the referral and destination ones align themselves around them. If they assume an external position in the map it means they only have one connection with the hate site related to them. Instead, if they are placed in the central area of the graph, it means they have a higher number of connections. 

The nodes’ size depends on the number of connections that each site has with the others, therefore on the relevance in the hate echo chamber.
The color defines the category: the RationalWiki hate sites are orange, the referring ones are lilac, the destination ones are blue and the ones that are both referral and destination are purple. The edges are colored with the same method and the arrows are used to enhance the direction of it.

Moreover, we have designed a toggle to highlight the most relevant sites in the hate echo chamber. When it is pushed, it underlines that among the most relevant sites of the echo chamber there are a lot of alt-right and far-right sites, so it can be possible to find a real connection between the hateful sites and the extremist ones.
The sites that have only one connection are shown in gray color to position them in a second level. 


### Protocol

We started our analysis from the data of protocols 3.1 and 3.3.
We searched for the referral sites and the destination sites with [SimilarWeb](https://www.similarweb.com/) for each [RationalWiki](https://rationalwiki.org/wiki/Category:Internet_hate_sites) “Hate Site” and we collected the results in an Excel file.
We decided to leave empty spaces in the Excel file when SimilarWeb didn’t find any referrals sites nor destination ones and when the sites we found were irrelevant.

Afterwards, we imported a CSV file in Gephi in order to design the visualization. In the nodes table we assigned an attribute to each site: “hatred”, “in”, “out”. In this way we created the levels to filter the data with the software.
We used the Circular Layout plug-in to position the “hatred” nodes in a circular composition, then we locked them and we positioned the remaining nodes using the Force Atlas 2 layout. We adjusted the parameters and then we exported an SVG file. We used Adobe Illustrator to manually improve the network visualization.


### Data
##### Data Source: [RationalWiki](https://rationalwiki.org/wiki/Category:Internet_hate_sites), [SimilarWeb](https://www.similarweb.com/)
##### Timestamp: 11/19/2018
##### [View Data (... KB)](http://densitydesign.org/)
