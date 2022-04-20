import { useLocation } from "react-router";
import qs from "qs";

const About = () => {
  const { search } = useLocation();
  const query = qs.parse(search, { ignoreQueryPrefix: true });
  const { name } = query;
  console.log(name);

  return (
    <div>
      <h2>About 페이지 입니다.</h2>
      {name && <p>name 은 {name} 입니다.</p>}
    </div>
  );
};

export default About;
