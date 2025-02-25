import { Grid } from "../../../components/Grid";
import { Typography } from "../../../components/Typography";

const LandingPage = () => {
  return (
    <>
      <Grid cols={2} justify="center" style={{ marginTop: "30px" }}>
        <Typography color="primary" variant="h1">
          Oi 2
        </Typography>
        <Typography variant="h3">Oi 3</Typography>
        <Typography variant="h1">Oi 3</Typography>
      </Grid>
    </>
  );
};

export default LandingPage;
