"use client";

import { useRef, useState } from "react";

const supported = [
  "Jnkie",
  "wYnFuscate",
  "IronBrew 1",
  "IronBrew 2",
  "IronBrew 3",
  "Luraph v15",
  "Luraph v14.9",
  "Luraph v14.8",
  "Luraph v14.7",
  "Centurion",
  "WeAreDevs",
  "Prometheus",
];

export default function Home() {
  const audioRef = useRef(null);
  const [entered, setEntered] = useState(false);
  const [muted, setMuted] = useState(false);

  const enter = async () => {
    setEntered(true);
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.5;
    audio.loop = true;

    try {
      await audio.play();
    } catch {}
  };

  const toggleAudio = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        audio.muted = false;
        await audio.play();
        setMuted(false);
      } catch {}
      return;
    }

    audio.muted = !audio.muted;
    setMuted(audio.muted);
  };

  return (
    <main>
      <audio ref={audioRef} src="/Fr3sh.mp3" preload="auto" loop />

      {!entered && (
        <button className="enter" onClick={enter}>
          <img src="/avatar.svg" alt="" />
          <strong>larpcorrupt</strong>
          <span>click to enter</span>
        </button>
      )}

      <div className="wrap">
        <header>
          <a className="me" href="#top" aria-label="larpcorrupt home">
            <img src="/avatar.svg" alt="larpcorrupt" />
            <span>larpcorrupt</span>
          </a>

          <nav>
            <a href="#news">news</a>
            <a href="#supported">supported</a>
            <a href="https://github.com/KryptIT/larpcorrupt" target="_blank" rel="noreferrer">
              github
            </a>
            <a href="https://dsc.gg/oxyenv" target="_blank" rel="noreferrer">
              oxyenv
            </a>
          </nav>
        </header>

        <section className="hero" id="top">
          <div>
            <p className="kicker">lua / luau tooling</p>
            <h1>larpcorrupt</h1>
            <p className="intro">
              I build deobfuscation and analysis tooling for Lua and Luau.
              OxyEnv lives at <a href="https://dsc.gg/oxyenv">dsc.gg/oxyenv</a>.
            </p>
          </div>

          <div className="heroPfp">
            <img src="/avatar.svg" alt="larpcorrupt profile picture" />
          </div>
        </section>

        <section className="news" id="news">
          <div className="sectionTitle">
            <span>01</span>
            <h2>news</h2>
          </div>

          <article className="newsCard">
            <div className="newsMeta">
              <span>26.09.2026</span>
              <span>account termination</span>
            </div>

            <h3>Justice for larpcorrupt</h3>

            <p>
              I was terminated on both of my accounts while working on and releasing
              Luraph v14.x deobfuscation research and tooling, including support for
              v14.7, v14.8, and v14.9.
            </p>

            <p>
              I believe reports connected to MemCorrupt contributed to the
              terminations, but that has not been independently verified. I am
              appealing the decisions and asking for the accounts to be reviewed
              and restored.
            </p>

            <strong className="justice">
              JUSTICE FOR LARPCORRUPT — UNTERMINATE LARPCORRUPT!
            </strong>
          </article>
        </section>

        <section className="supported" id="supported">
          <div className="sectionTitle">
            <span>02</span>
            <h2>supported</h2>
          </div>

          <div className="list">
            {supported.map((name, index) => (
              <div className="row" key={name}>
                <span className="index">{String(index + 1).padStart(2, "0")}</span>
                <span className="name">{name}</span>
                <span className="state">supported</span>
              </div>
            ))}
          </div>
        </section>

        <section className="links">
          <div className="sectionTitle">
            <span>03</span>
            <h2>links</h2>
          </div>

          <div className="linkGrid">
            <a href="https://dsc.gg/oxyenv" target="_blank" rel="noreferrer">
              <span>discord</span>
              <strong>dsc.gg/oxyenv ↗</strong>
            </a>
            <a href="https://github.com/KryptIT/larpcorrupt" target="_blank" rel="noreferrer">
              <span>github</span>
              <strong>KryptIT/larpcorrupt ↗</strong>
            </a>
          </div>
        </section>

        <footer>
          <span>larpcorrupt</span>
          <button onClick={toggleAudio}>
            music {muted ? "off" : "on"}
          </button>
        </footer>
      </div>
    </main>
  );
}
