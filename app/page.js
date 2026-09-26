"use client";

import { useEffect, useRef, useState } from "react";

const supported = [
  ["JNKIE", "loader / delivery analysis"],
  ["wYnFuscate", "supported"],
  ["IronBrew 1", "VM / bytecode"],
  ["IronBrew 2", "VM / bytecode"],
  ["IronBrew 3", "VM / bytecode"],
  ["Luraph v15", "devirtualization"],
  ["Luraph v14.9", "legacy"],
  ["Luraph v14.8", "legacy"],
  ["Luraph v14.7", "legacy"],
  ["Centurion", "supported"],
  ["WeAreDevs", "supported"],
  ["Prometheus", "supported"],
];

export default function Home() {
  const audioRef = useRef(null);
  const [entered, setEntered] = useState(false);
  const [muted, setMuted] = useState(false);
  const [clock, setClock] = useState("00:00:00");

  useEffect(() => {
    const update = () => {
      setClock(
        new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(new Date())
      );
    };
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  const enter = async () => {
    setEntered(true);
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.55;
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
        await audio.play();
        audio.muted = false;
        setMuted(false);
      } catch {}
      return;
    }
    audio.muted = !audio.muted;
    setMuted(audio.muted);
  };

  return (
    <main className="site">
      <audio ref={audioRef} src="/Fr3sh.mp3" preload="auto" loop />

      {!entered && (
        <button className="gate" onClick={enter} aria-label="Enter larpcorrupt">
          <span className="gateNoise" />
          <span className="gateIndex">[ 001 ]</span>
          <span className="gateTitle" data-text="LARPCORRUPT">LARPCORRUPT</span>
          <span className="gateLine">click anywhere to enter</span>
          <span className="gateSub">audio enabled · FR3SH</span>
        </button>
      )}

      <div className="grain" />
      <div className="scanlines" />
      <div className="orb orbOne" />
      <div className="orb orbTwo" />

      <nav className="nav shell">
        <a className="brand" href="#top">
          <span className="brandMark">L/</span>
          <span>larpcorrupt</span>
        </a>
        <div className="navMeta">
          <span>{clock}</span>
          <span className="status"><i /> ONLINE</span>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <div className="heroTopline">
          <span>OXYENV / CLAUDMOR</span>
          <span>DEOBFUSCATION · ANALYSIS · LUAU</span>
        </div>

        <h1>
          BREAK THE
          <span className="outline"> STATIC.</span>
        </h1>

        <div className="heroLower">
          <p>
            tooling for hostile Lua/Luau transforms, virtual machines,
            loaders and deliberately unreadable code.
          </p>
          <div className="heroActions">
            <a className="primary" href="https://dsc.gg/oxyenv" target="_blank" rel="noreferrer">
              JOIN OXYENV ↗
            </a>
            <a className="ghost" href="https://github.com/KryptIT/larpcorrupt" target="_blank" rel="noreferrer">
              GITHUB ↗
            </a>
          </div>
        </div>
      </section>

      <section className="marquee" aria-hidden="true">
        <div>
          LARPCORRUPT ◆ OXYENV ◆ CLAUDMOR ◆ LUAU ◆ DEOBFUSCATION ◆ VM LIFTING ◆ LARPCORRUPT ◆ OXYENV ◆ CLAUDMOR ◆
        </div>
      </section>

      <section className="support shell" id="support">
        <div className="sectionHead">
          <div>
            <span className="eyebrow">[ COMPATIBILITY ]</span>
            <h2>SUPPORTED<br />TARGETS</h2>
          </div>
          <p>
            a moving target list. coverage ranges from loaders and static
            transforms to VM lifting and devirtualization.
          </p>
        </div>

        <div className="grid">
          {supported.map(([name, note], index) => (
            <article className="card" key={name}>
              <span className="cardNo">{String(index + 1).padStart(2, "0")}</span>
              <h3>{name}</h3>
              <p>{note}</p>
              <span className="cardStatus">SUPPORTED</span>
            </article>
          ))}
        </div>
      </section>

      <section className="identity shell">
        <div className="identityLabel">// identity</div>
        <div className="identityMain">
          <h2>larpcorrupt</h2>
          <p>
            built around practical reverse engineering, automation and
            deobfuscation workflows. no glossy corporate nonsense.
          </p>
        </div>
        <div className="identitySide">
          <div><span>alias</span><b>claudmor</b></div>
          <div><span>community</span><b>OxyEnv</b></div>
          <div><span>discord</span><b>dsc.gg/oxyenv</b></div>
        </div>
      </section>

      <footer className="footer shell">
        <span>© 2026 LARPCORRUPT</span>
        <span>POWERED BY BAD IDEAS &amp; GOOD DEBUGGERS</span>
        <button onClick={toggleAudio}>{muted ? "AUDIO: OFF" : "AUDIO: ON"}</button>
      </footer>

      {entered && (
        <button className="audioHud" onClick={toggleAudio}>
          <span className="bars"><i /><i /><i /><i /></span>
          <span>FR3SH</span>
          <b>{muted ? "MUTED" : "PLAYING"}</b>
        </button>
      )}
    </main>
  );
}
