import React, { Component } from "react";
import { Main } from "components/atoms";
import {
  Footer,
  Header,
  SectionTitle,
  SectionContent,
  SectionFooter,
} from "components/molecules";

class index extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scroll(0, 0);
    document.title = "Milan Vučković | MY DREAM TRAVEL BLOG";
  }

  render() {
    return (
      <>
        <Header />
        <Main>
          <SectionTitle />
          <SectionContent />
        </Main>
        <SectionFooter />
        <Footer />
      </>
    );
  }
}

export default index;
