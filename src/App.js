import React, { useState, useEffect } from "react";
import bridge from "@vkontakte/vk-bridge";
import View from "@vkontakte/vkui/dist/components/View/View";
import "@vkontakte/vkui/dist/vkui.css";
import Persik from "./panels/Persik";
import First_page from "./panels/First_page";
import Second_page from "./panels/Second_page";
import Sixth_page from "./panels/Sixth_page";
import Last_page from "./panels/Last_page";
import AudioEditor from "./panels/AudioEditor";

const App = () => {
  const [activePanel, setActivePanel] = useState("first_page");
  const [fetchedUser, setUser] = useState(null);

  useEffect(() => {
    bridge.subscribe(({ detail: { type, data } }) => {
      if (type === "VKWebAppUpdateConfig") {
        const schemeAttribute = document.createAttribute("scheme");
        schemeAttribute.value = data.scheme ? data.scheme : "client_light";
        document.body.attributes.setNamedItem(schemeAttribute);
      }
    });
    async function fetchData() {
      const user = await bridge.send("VKWebAppGetUserInfo");
      setUser(user);
    }
    fetchData();
  }, []);

  const go = (page) => {
    setActivePanel(page);
  };

  return (
    <View activePanel={activePanel}>
      <AudioEditor id="audioeditor" go={go} />
      <Persik id="persik" go={go} />
      <First_page id="first_page" go={go} />
      <Second_page id="second_page" go={go} />
      <Sixth_page id="sixth_page" go={go} />
      <Last_page id="last_page" go={go} />
    </View>
  );
};

export default App;
