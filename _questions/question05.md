---
title: 3.1 Which are the characteristics of the sites being accused to spread hate?
cover: /assets/images/covers/viz02.jpg
number: 5
---

### Description 

After examining where the theoretical definitions of Hate Speech were born and have developed, how they differ, increase or lose visibility by spreading their vision on this theme, we decided to focus on which appearances Hate Speech takes in practice. 
Which are the characteristics of the so-called “Hate Sites”? Is there a pattern that unites them? In order to create an opinion on Hate Speech, the observation of the phenomenon itself can be an indispensable step for the users to take a position and above all to learn to recognize it.

For our analysis we relied on a complete list of information on sites considered hateful by [RationalWiki](https://rationalwiki.org/wiki/Category:Internet_hate_sites).
We organized this information into a scatter plot to better visualize the ideological characteristics of each site. 
Through the marks (circles and crosses) on the vertical axes relative to the pages, we can observe the category, of hatred or ideological, according to which the site is classified. The horizontal position and the color denote its typology. With [Alexa Ranking](https://www.alexa.com/) we associated different degrees of relevance to the sites by translating the value of the ranking in the diameter of the circumferences related to the different pages. This highlights the substantial difference between certain sites and others.

The high concentration of circles with a larger diameter shows that the most relevant pages are mostly news and news aggregator sites. These sites tend to focus on political and racial issues, taking a position also in the field of knowledge and some aspects of religion.
Moreover, this type of site seems to be more resistant to the threat of the page closure, that instead hit most of the forums, blogs and social networks mentioned by RationalWiki.


### Protocol

[RationalWiki](https://rationalwiki.org/wiki/Category:Internet_hate_sites) provides a range of 48 links of sites where episodes classified as Hate Speech occur. 
We manually analyzed the comments that RationalWiki associates with each page, by extrapolating the hateful categories and ideologies associated with each site.

To better understand the different relevance of the pages on the web the 48 links have been analyzed with [Alexa Ranking](https://www.alexa.com/). Sites that occupy positions that go beyond the 500.000 rank were impossible to calculate, so they were merged into one group, as they were not very interesting for our overview.
The information concerning categories and rankings were then inserted into an Excel sheet, subsequently cleaned with OpenRefine, in particular by clustering and standardizing the categories in the case of too thin differences.

Later, always manually, we checked if the types of pages provided by RationalWiki were correct, finally decreeing the reliability of the classification and completing it, after having done a proper research, where it was missing.
Many of the links on the RationalWiki list lead to closed pages, but we decided it could be interesting to keep them and visualize them to better explore the phenomenon. However, the cancellation made it impossible to find the page type of 4 sites. 


### Data
##### Data Source: [RationalWiki](https://rationalwiki.org/wiki/Category:Internet_hate_sites), [Alexa](https://www.alexa.com/)
##### Timestamp: 11/.../2018
##### [View Data (... KB)](http://densitydesign.org/)
