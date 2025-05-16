function LoginStatus({ isLogin }) {
    return <h2>{isLogin ? "Đã đăng nhập" : "Chưa đăng nhập"}</h2>;
  }
  
  export default LoginStatus;
  