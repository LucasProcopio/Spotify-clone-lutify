import React from "react";
import { Container, Search, User } from "./styles.js";

const Header = () => (
  <Container>
    <Search>
      <input placeholder="Search" />
    </Search>

    <User>
      <img
        src="https://avatars1.githubusercontent.com/u/26358642?v=4"
        alt="avatar"
      />
      Lucas Procopio
    </User>
  </Container>
);

export default Header;
