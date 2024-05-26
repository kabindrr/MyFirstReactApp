import "./App.css";
import { Profile } from "./userComponent";
import { UserBio } from "./userComponent";
import { useState } from "react";

const App = () => {
  const [name] = useState("WIll smith");
  const bio =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, odio?";
  return (
    <>
      <Profile nameProp={name} bioProp={bio} />
      <Profile nameProp={"Sam "} bioProp={"Sam Bio"} />
      <Profile nameProp={"Will"} bioProp={"Will bio"} />
      <Profile nameProp={"Jack"} bioProp={"Jack Bio"} />

      {/* <UserBio /> */}
    </>
  );
};

export default App;
