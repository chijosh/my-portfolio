import { useEffect } from "react";
import useMeasure from "react-use-measure";
import { useTrail, animated as anim } from "@react-spring/web";

import styles from "./styles.module.css";

const fast = { tension: 1200, friction: 40 }
const slow = { mass: 10, tension: 200, friction: 50 }
const trans = (x: number, y: number) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`

export default function Gooery() {
  const [ref, { left, top }] = useMeasure();
  const [trail, api] = useTrail(3, (i) => ({
    xy: [0, 0],
    config: i === 0 ? fast : slow,
  }));

  const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
    api.start({ xy: [e.clientX - left, e.clientY - top] });
  };

  return (
    <div className={styles.container}>
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
          <feColorMatrix in="blur" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7" />
        </filter>
      </svg>

      <div ref={ref} className={styles.hooksMain} onMouseMove={handleMouseMove}>
        {trail.map(({ xy }, index: number) => (
          <anim.div
            key={index}
            className="b1"
            style={{ transform: xy.to(trans) }}
          />
        ))}
      </div>
    </div>
  );
}
