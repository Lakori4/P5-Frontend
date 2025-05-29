import { useEffect, useRef, useState } from "preact/hooks";
import { FunctionComponent } from "preact/src/index.d.ts";
import Form from "../components/Form.tsx";

const styles = ["light-blue", "white", "orange", "light-brown"];

const ChangeColor: FunctionComponent = () => {
  const [currentStyle, setCurrentStyle] = useState<string>(styles[0])
  const iter = useRef<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(styles[iter.current], iter.current);
      iter.current = (iter.current + 1) % styles.length;
      setCurrentStyle(styles[iter.current])
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div class={currentStyle} style={{ transition: 'all 0.5s ease' }}>
      <Form />
    </div>
  );
};

export default ChangeColor;
