import { RecoilButton } from "./RecoilButton";
import { RecoilText } from "./RecoilText";
import { ReduxButton } from "./ReduxButton";
import { ReduxText } from "./ReduxText";
import { useRenderCount } from "./renderCount";

export default function Counters() {
  const count = useRenderCount("Counters");

  return (
    <div>
      <h1>Counters</h1>
      <div>
        <p>
          <ReduxButton>Redux</ReduxButton>
        </p>
        <p>
          <ReduxText />
        </p>
      </div>
      <div>
        <p>
          <RecoilButton>Recoil</RecoilButton>
        </p>
        <p>
          <RecoilText />
        </p>
      </div>
      <p>Counters render count: {count.current}</p>
    </div>
  );
}
