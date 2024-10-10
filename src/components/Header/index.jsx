import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import classNames from "classnames/bind";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

function Header() {
  return (
    <div className={cx("wrapper")}>
      <Navbar expand="lg" className="navbar navbar-expand-lg bg-body-tertiary">
        <Container className={cx("container")}>
          <Navbar.Brand className="text-white" href="#home">
            <img
              alt=""
              src="/logo.png"
              style={{
                height: "40px",
              }}
            />
          </Navbar.Brand>
          <div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className={cx("nav-link", { active: true })} href="/">
                  Top
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  How it works?
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/">
                  Features
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/">
                  About us
                </a>
              </li>

              <li className="nav-item">
                <a style={{ color: "#000" }} className="nav-link" href="/">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
