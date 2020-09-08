import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Typography } from '@material-ui/core'

export default function Home() {
  return <>
    <Head>
      <title>The Addison Family</title>
      <link rel="icon" href="/favicon.ico" />
      {/* Favicon is from Noto Emoji - copyright google, licensed under Apache 2.0 */}
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    </Head>
    <Typography variant="h2" component="h1" color="primary">Hello</Typography>
  </>
}
