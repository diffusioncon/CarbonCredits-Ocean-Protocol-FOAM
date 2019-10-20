---
path: "/technology-used-for-carbon-credits"
cover: "./spekboom.jpg"
date: "2012-10-20"
title: "How we built CarbonCreditsClub"
published: true
tags: ['Carbon', 'Spekboom']
---

## smart contracts (solidity /ethereum)
Let's first start with the mechanic of buying the spekboom plots of land. We first represent these as ERC721 tokens (NFTs), while using a contract we wrote called a 'steward' to manage two important parts of functionality this ERC721 contains. 1) Always for sale. The steward ensures that each ERC721 is always for sale. Whenever someone buys the NFT, they are required to immediately set a selling price, and pay a 'Harberger tax' (percentage of the selling price annually). The steward manages all this logic. 2) The steward also continuously mints and awards CarbonCredits (ERC20 tokens), to the respective owners of the NFTs, in the proportion at which that NFT produces carbon offset.

## Website 
We used a react setup.

## Blog 
We used Gatsby (open source) to implement our blog functionality.

## Ocean 
We used the Ocean protocol to implement functionality where Carbon generation and Carbon use data gathered from our use-case. This is our step toward kick-starting a Data Economy!

## FOAM 
We used geo spatial coordinates to show where the spekboom plantations are. 