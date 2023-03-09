import Logo from "../logo.svg";

export function ReactLogo() {
  return (
    <img
      src={Logo}
      alt="React Logo"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "130px",
      }}
    />
  );
}

export default ReactLogo;
