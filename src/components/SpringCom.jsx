import { useSpring, animated } from "@react-spring/web";
import { useState } from "react";
function SpringCom() {
  // State to keep track of the animation toggle
  const [state, toggle] = useState(true);
  // Define the animation using the useSpring hook
  const { x } = useSpring({
    from: { x: 0 }, // Starting value of the animated property
    x: state ? 1 : 0, // Ending value of the animated property based on the state
    config: { duration: 1000 }, // Configuration for the animation, specifying the duration
  });
  // Return the animated component
  return (
    <div onClick={() => toggle(!state)}>
      <animated.div
        style={{
          opacity: x.to({ range: [0, 1], output: [0.3, 1] }),
          transform: x
            .to({
              range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
              output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
            })
            .to((x) => `scale(${x})`),
        }}
      >
        Hello React Spring
      </animated.div>
    </div>
  );
}
export default SpringCom;