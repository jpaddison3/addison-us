import Head from 'next/head'
import { Typography, Grid, Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import MapPin from 'components/MapPin'

const useStyles = makeStyles((theme: Theme) => ({
  familyImage: {
    height: "100vh",
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
      objectFit: "cover"
    }
  },
  allNonImage: {
    paddingTop: 30,
    paddingLeft: 40,
    [theme.breakpoints.down("sm")]: {
      paddingTop: 0,
      paddingLeft: 4,
      marginBottom: 50,
    }
  },
  header: {
    marginBottom: 10
  },
  location: {
    color: "#777777",
  },
  locationIcon: {
    height: "1em",
    width: "1em",
    marginRight: 5,
  },
  bio: {
    [theme.breakpoints.up("sm")]: {
      width: 300,
    },
    "& a": {
      color: theme.palette.primary.main,
      textDecoration: "none"
    }
  }
}))

type Profile = {
  name: string,
  location: string,
  subtitle: string,
  bio: React.ReactNode[],
}

const profiles: { [id: string]: Profile } = {
  katie: {
    name: "Katie",
    location: "San Jose, CA",
    subtitle: "Science Mom",
    bio: ["Those pictures from the 80s show a total nerd. Taught herself to be a reading tutor to teach her son with dyslexia."],
  },
  skip: {
    name: "Skip",
    location: "San Jose, CA",
    subtitle: "Dad is never silly",
    bio: [<>Built the internet before it was cool. Be nice or he’ll direct your rideshare into a <a href="https://cloud.google.com/maps-platform/ridesharing">river.</a></>],
  },
  jp: {
    name: "JP",
    location: "Berkeley, CA",
    subtitle: "Website Author",
    bio: [
      <a href="https://www.effectivealtruism.org/">Tries to do good.</a>,
      <>Everyone else in the family studied computers at school. I just hack.</>
    ],
  },
  becca: {
    name: "Becca",
    location: "Pittsburgh, PA",
    subtitle: "Lil sis",
    bio: [<>JP hasn’t forgotten that time she saved over his pokemon game. Now makes <a href="https://en.wikipedia.org/wiki/Conversational_user_interface">conversational UI</a>, which is honestly pretty cool.</>],
  }
}

const ProfileCard = ({ profile }: { profile: Profile }) => {
  const classes = useStyles()

  return <Grid container direction="column" spacing={1}>
    <Grid item>
      <Typography variant="h5" component="h3">{profile.name}</Typography>
    </Grid>
    <Grid item className={classes.location}>
      <MapPin className={classes.locationIcon} />
      <Typography component="span">{profile.location}</Typography>
    </Grid>
    <Grid item>
      <Typography><em>{profile.subtitle}</em></Typography>
    </Grid>
    <Grid item className={classes.bio}>
      {profile.bio.map((line, i) => <Typography
        gutterBottom={i !== profile.bio.length - 1}
        key={i}
      >
        {line}
      </Typography>)}
    </Grid>
  </Grid>
}

export default function Home() {
  const classes = useStyles()

  return <>
    <Head>
      <title>The Addison Family</title>
      <link rel="icon" href="/favicon.ico" />
      {/* Favicon is from Noto Emoji - copyright google, licensed under Apache 2.0 */}
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    </Head>
    <Grid container>
      <Grid item>
        <img className={classes.familyImage} src="https://res.cloudinary.com/jpaddison/image/upload/c_fill,g_auto,h_3000,w_2338/v1599598471/image_0036_lwhkpi.jpg" />
      </Grid>
      <Grid item>
        <Grid container direction="column" className={classes.allNonImage}>
          <Grid item>
            <Typography
              variant="h2"
              component="h1"
              color="primary"
              className={classes.header}
            >
              The Addison Family
            </Typography>
          </Grid>
          <Grid item>
            <Grid container direction="column" spacing={3}>
              <Grid item>
                <Grid container spacing={3}>
                  <Grid item md={6}><ProfileCard profile={profiles['skip']} /></Grid>
                  <Grid item md={6}><ProfileCard profile={profiles['katie']} /></Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container spacing={3}>
                  <Grid item md={6}><ProfileCard profile={profiles['jp']} /></Grid>
                  <Grid item md={6}><ProfileCard profile={profiles['becca']} /></Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </>
}
