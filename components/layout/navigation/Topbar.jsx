const anchors = [
  {
    text: "Help & FAQs",
    link: "#",
  },
  {
    text: "My Account",
    link: "#",
  },
  {
    text: "UN",
    link: "#",
  },
  {
    text: "USD",
    link: "#",
  },
];
import { Container } from "react-bootstrap";
const Topbar = () => {
  return (
    <div className="top-bar">
      <Container className="content-topbar">
        <div className="left-top-bar">
          Free shipping for standard order over $100
        </div>

        <div className="right-top-bar">
          {anchors.map((a) => (
            <a href={a.link} key={a.text}>
              {a.text}
            </a>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Topbar;
