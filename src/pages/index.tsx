import Head from 'next/head'

import { CompletedChanllenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengeBox } from "../components/ChallengeBox";
import { CountdownProvider } from '../Contexts/CountdownContext';

import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | Move.it</title>
      </Head>
      <ExperienceBar />

      <CountdownProvider>
      <section>
        <label className={styles.switch}>
          <input type="checkbox" onClick={() => document.body.classList.toggle("dark")} />
          <span className={styles.slider} />
        </label>
        <div >
          <Profile />
          <CompletedChanllenges />
          <Countdown />
        </div>
        <div>
          <ChallengeBox />
        </div>
      </section>
      </CountdownProvider>
    </div>
  )
}
