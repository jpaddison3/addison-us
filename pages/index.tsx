import Head from 'next/head'
import { Typography, Grid, Stack, Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import MapPin from 'components/MapPin'

const LocationIcon = styled(MapPin)({
  height: "1em",
  width: "1em",
  marginRight: 5,
})

type Profile = {
  name: string,
  location: string,
  subtitle: string,
  bio: React.ReactNode[],
}

const profiles: { [id: string]: Profile } = {
  katie: {
    name: "Katie",
    location: "Atlanta, GA",
    subtitle: "Science Mom",
    bio: ["Those pictures from the 80s show a total nerd. Taught herself to be a reading tutor to teach her son with dyslexia."],
  },
  skip: {
    name: "Skip",
    location: "Atlanta, GA",
    subtitle: "Dad is never silly",
    bio: ["Built the internet before it was cool. Quick to volunteer to help people, he’s now the resident tech guy for friends, acquaintances, and charity alike."],
  },
  jp: {
    name: "JP",
    location: "Cambridge, MA",
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
  return <Stack spacing={1}>
    <Box>
      <Typography variant="h5" component="h3">{profile.name}</Typography>
    </Box>
    <Box sx={{ color: "#777777" }}>
      <LocationIcon />
      <Typography component="span">{profile.location}</Typography>
    </Box>
    <Box>
      <Typography><em>{profile.subtitle}</em></Typography>
    </Box>
    <Box sx={{
      width: { sm: 300 },
      maxWidth: "100%",
      "& a": {
        color: "primary.main",
        textDecoration: "none"
      }
    }}>
      {profile.bio.map((line, i) => <Typography
        gutterBottom={i !== profile.bio.length - 1}
        key={i}
      >
        {line}
      </Typography>)}
    </Box>
  </Stack>
}

export default function Home() {
  return <>
    <Head>
      <title>The Addison Family</title>
      <link rel="icon" href="/favicon.ico" />
      {/* Favicon is from Noto Emoji - copyright google, licensed under Apache 2.0 */}
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    </Head>
    <Grid container>
      <Grid>
        <Box
          component="img"
          src="https://res.cloudinary.com/jpaddison/image/upload/c_fill,g_auto,h_3000,w_2338/v1599598471/image_0036_lwhkpi.jpg"
          alt="The Addison family"
          sx={{
            display: "block",
            height: "100vh",
            width: { xs: "100vw", md: "auto" },
            maxWidth: { xs: "unset", md: "35vw" },
            objectFit: "cover",
          }}
        />
      </Grid>
      <Grid size={{ xs: 12, md: "grow" }}>
        <Stack sx={{
          maxWidth: { md: 680 },
          pt: { xs: 0, md: "30px" },
          pl: { xs: "4px", md: "40px" },
          mb: { xs: "50px", md: 0 },
        }}>
          <Typography
            variant="h2"
            component="h1"
            color="primary"
            sx={{ mb: "10px" }}
          >
            The Addison Family
          </Typography>
          <Stack spacing={3}>
            <Grid container spacing={3}>
              <Grid size={{ md: 6 }}><ProfileCard profile={profiles['skip']} /></Grid>
              <Grid size={{ md: 6 }}><ProfileCard profile={profiles['katie']} /></Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid size={{ md: 6 }}><ProfileCard profile={profiles['jp']} /></Grid>
              <Grid size={{ md: 6 }}><ProfileCard profile={profiles['becca']} /></Grid>
            </Grid>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  </>
}
