import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();

  function login() {
    setTimeout(() => {
      navigate("/");
    }, 1000);
  }
  return (
    <div>
      <h2>Login 페이지 입니다.</h2>
      <button onClick={login}>로그인하기</button>
    </div>
  );
};

export default Login;
