import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setBotted } from "../store/appActions";

const App = ({ boot = false, setBotted }) => {
  useEffect(() => {
    setBotted(true);
  }, []);

  return (
    <div>
      <h1>Hello! I&apos;m Root</h1>

      {boot && <div>App is connected to Redux store.</div>}
    </div>
  );
};

const mapStateToProps = ({ app }) => ({ boot: app.boot });

const mapDispatchToProps = { setBotted };

export default connect(mapStateToProps, mapDispatchToProps)(App);
