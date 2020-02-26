import React from "react";
import NavBar from "../components/NavBar";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import AddLocationIcon from "@material-ui/icons/AddLocation";
import BlurCircularIcon from "@material-ui/icons/BlurCircular";
import EcoIcon from "@material-ui/icons/Eco";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import FireplaceIcon from "@material-ui/icons/Fireplace";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    alignItems: "center"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const ForCarbonTraders = () => {
  const classes = useStyles();
  return (
    <div>
      <div className="landingContainerFarmers">
        <NavBar />
        <div className={classes.root}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={6} alignItems="center">
              <div className="opening-blurb">
                <Typography variant="h3">
                  The transparent solution to offset your carbon emissions
                </Typography>
                <hr />
                <Typography variant="h6">
                  Buy an forest plot NFT and instantly start generating
                  verifaible CarbonCredits.
                </Typography>
                {/* <p>
                                    
                                    A decentralized marketplace generating carbon credits & supporting carbon offset farms.  <br /> <br />
                                    Spekboom plantations in the Karoo of South Africa provide <br /> one of the most cost effective carbon offset solutions. <br />
                                    These plantations are represented indivdually as always for sale NFTs. <br />
                                    Holding an NFT continously generates verifiable carbon credits (ERC20 tokens). <br /> <br />

                                    Corporations can burn carbon credits to transparently showcase they are carbon neutral.
                            </p> */}
              </div>
            </Grid>
            <Grid item xs={12} md={6} style={{ textAlign: "center" }}>
              <EcoIcon
                style={{ fontSize: 240, padding: "1rem", color: "#3F3D4B" }}
              />
            </Grid>
          </Grid>
        </div>
      </div>
      <div className="blurb">
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            md={12}
            style={{ textAlign: "center", padding: "5rem" }}
          >
            <Typography variant="h3" style={{ color: "white" }}>
              Burning a carbon credit offsets one tonne of carbon dioxide
              emissions
            </Typography>
          </Grid>
        </Grid>
      </div>
      <div className="howitworks">
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            md={12}
            style={{ textAlign: "center", padding: "2rem" }}
          >
            <Typography variant="h2">How it Works</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            style={{ textAlign: "center", padding: "2rem" }}
          >
            <Paper style={{ padding: "1rem" }}>
              <BlurCircularIcon
                style={{ fontSize: 100, padding: "1rem", color: "#3F3D4B" }}
              />
              <Typography
                variant="h3"
                style={{
                  color: "#58C685",
                  textAlign: "left",
                  transform: "translate(0, -40px)"
                }}
              >
                1.
              </Typography>
              <Typography variant="h6">
                Buy a forest NFT and set a selling price for this NFT (since it
                is always for sale). You pay a percentage of the selling price
                (10% per annum) to hold the token.
              </Typography>
            </Paper>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            style={{ textAlign: "center", padding: "2rem" }}
          >
            <Paper style={{ padding: "1rem" }}>
              <EcoIcon
                style={{ fontSize: 100, padding: "1rem", color: "#3F3D4B" }}
              />
              <Typography
                variant="h3"
                style={{
                  color: "#58C685",
                  textAlign: "left",
                  transform: "translate(0, -40px)"
                }}
              >
                2.
              </Typography>
              <Typography variant="h6">
                Holding the NFT contionusly generates carbon credits (ERC20
                tokens) owed to your address.{" "}
              </Typography>
            </Paper>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            style={{ textAlign: "center", padding: "2rem" }}
          >
            <Paper style={{ padding: "1rem" }}>
              <FireplaceIcon
                style={{ fontSize: 100, padding: "1rem", color: "#3F3D4B" }}
              />
              <Typography
                variant="h3"
                style={{
                  color: "#58C685",
                  textAlign: "left",
                  transform: "translate(0, -40px)"
                }}
              >
                3.
              </Typography>
              <Typography variant="h6">
                Burn the carbon credits to verifiably showcase the offset of
                your carbon emissions. Otherwise sell them at marketprice and
                make a profit.{" "}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ForCarbonTraders;
