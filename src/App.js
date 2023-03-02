import { Fragment, Suspense, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Navigation from "./frontPage/Navigation";
import SideMenu from "./frontPage/SideMenu";
import Modal from "./UI/Modal";
import React from "react";
import Loader from "./UI/Loader";
import NotFound from "./pages/NotFound";

const HomePage = React.lazy(() => import("./pages/homePage"));
const AboutPage = React.lazy(() => import("./pages/AboutPage"));
const ContactPage = React.lazy(() => import("./pages/ContactPage"));
const ProjectPage = React.lazy(() => import("./pages/ProjectPage"));
const GalleryPage = React.lazy(() => import("./pages/galleryPage"));

function App() {
  const [openModal, setOpenModal] = useState(false);

  const setMenu = () => {
    setOpenModal((prevState) => !prevState);
  };
  return (
    <Fragment>
      <Suspense fallback={<Loader />}>
        {openModal && (
          <Modal>
            <SideMenu onClose={setMenu} />
          </Modal>
        )}
        <Navigation onOpen={setMenu} />
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <HomePage mode={openModal} />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/gallery">
            <GalleryPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route path="/project">
            <ProjectPage />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Fragment>
  );
}

export default App;
