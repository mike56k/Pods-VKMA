import React from "react";
import PropTypes from "prop-types";
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import Cell from "@vkontakte/vkui/dist/components/Cell/Cell";
import Div from "@vkontakte/vkui/dist/components/Div/Div";
import Avatar from "@vkontakte/vkui/dist/components/Avatar/Avatar";
import Draggable from "react-draggable";
const Home = ({ id, go, fetchedUser }) => (
  <Panel id={id}>
    <PanelHeader>Example</PanelHeader>
    {fetchedUser && (
      <Group title="User Data Fetched with VK Bridge">
        <Cell
          before={
            fetchedUser.photo_200 ? (
              <Avatar src={fetchedUser.photo_200} />
            ) : null
          }
          description={
            fetchedUser.city && fetchedUser.city.title
              ? fetchedUser.city.title
              : ""
          }
        >
          {`${fetchedUser.first_name} ${fetchedUser.last_name}`}
        </Cell>
      </Group>
    )}
    <Group title="Navigation Example">
      <Div>
        <Button size="xl" level="2" onClick={go} data-to="persik">
          Show me the Persik, please
        </Button>
      </Div>
    </Group>
    <Group>
      <Cell>Hello</Cell>
      <Cell>World</Cell>
    </Group>{" "}
    <Draggable
      axis="x"
      handle=".handle"
      defaultPosition={{ x: 0, y: 0 }}
      position={null}
      grid={[25, 25]}
      scale={1}
      //   onStart={this.handleStart}
      //   onDrag={this.handleDrag}
      //   onStop={this.handleStop}
    >
      <div>
        <div className="handle">Drag from here</div>
        <div>This readme is really dragging on...</div>
        <div className="handle">Drag from here</div>
      </div>
    </Draggable>
  </Panel>
);

Home.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
  fetchedUser: PropTypes.shape({
    photo_200: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    city: PropTypes.shape({
      title: PropTypes.string,
    }),
  }),
};

export default Home;
