# Team-9

Transparent, effcient, carbon neutral markets.

Watch this space.

@jonjonclark
@jasoons
@denhampreen

Made by team https://wildcards.world


# Details


## Inspiration

Climate change is finally being brought to the attention of the world at large. If just a few school children can grab world headlines for missing school on Fridays, then surely the blockchain community can strive to solve climate change problems.

How do we create a efficient carbon credit environment where entities worldwide can fairly and transparently become and showcase they are carbon neutral entities.

For context: "A carbon credit is a generic term for any tradable certificate or permit representing the right to emit one tonne of carbon dioxide or the equivalent amount of a different greenhouse gas"

"Unchecked, energy use and hence emission levels are predicted to keep rising over time. Thus the number of companies needing to buy credits will increase, and the rules of supply and demand will push up the market price, encouraging more groups to undertake environmentally friendly activities that create carbon credits to sell. "

## What it does

    Spekboom plantations in the Karoo of South Africa provide one of the most cost effective carbon offset solutions.

    We represent these plantations individually as always for sale NFTs.

    Holding an NFT continuously generates verifiable carbon credits (ERC20 tokens).

    Corporations can burn carbon credits to transparently showcase they are carbon neutral.

The Harberger tax received from the entities holding the always for sale NFTs, flows directly to the farmers for income and the upkeep of the spekboom plantations.

## How we built it

--- smart contracts (solidity /ethereum) --- Let's first start with the mechanic of buying the spekboom plots of land. We first represent these as ERC721 tokens (NFTs), while using a contract we wrote called a 'steward' to manage two important parts of functionality this ERC721 contains. 1) Always for sale. The steward ensures that each ERC721 is always for sale. Whenever someone buys the NFT, they are required to immediately set a selling price, and pay a 'Harberger tax' (percentage of the selling price annually). The steward manages all this logic. 2) The steward also continuously mints and awards CarbonCredits (ERC20 tokens), to the respective owners of the NFTs, in the proportion at which that NFT produces carbon offset.

--- Website --- We used a react setup.

--- Blog --- We used Gatsby (open source) to implement our blog functionality.

--- Ocean --- We used the Ocean protocol to implement functionality where Carbon generation and Carbon use data gathered from our use-case. This is our step toward kick-starting a Data Economy!

--- FOAM --- We used geo spatial coordinates to show where the spekboom plantations are.

## Challenges we ran into

Time was one of the big challenges. Deciding what functionality was a priority to ship in such a short period of time.

Trying to integrate a number of technologies we have never worked with before (Ocean, FOAM) in a short period of time was challenging.

## Accomplishments that we're proud of

Fully functioning set of smart contracts deployed on the testnet. Fully functional UI hosted at https://carboncredits.club . We managed to build a full proof of concept in 36 hours to test the idea and gather feedback as to whether this idea can truly help combat climate change.

We are the first team (that we are aware of), that has successfully implemented smart contracts, that have always for sale NFTs, that generate ERC20 tokens over time, sent to the user who hold these tokens. This is a fascinating piece of token engineering that we believe could be used in a number of interesting use cases.

## What we learned

This is a really short hackathon ;) We had to remain agile and very strictly scope which functionality we could manage to implement during this short period of time. Tech wise, we learnt about a bunch of new protocols (Ocean, FOAM, Chain.link, iExec etc...)

## What's next for CarbonCreditsClub

Our website and POC is live. After receiving feedback from the judges and others we would like to asses the strengths and weaknesses of the idea, and improve our current model. Technology wise, the beta is pretty much in place (we have written tests and could deploy to mainnet). We need to leverage our contacts in the Karoo South Africa and start getting the spekboom plantations underway.
Built With

    drizzle
    ethereum
    foam
    ocean
    react
    solidity

Try it out

    carboncredits.club


