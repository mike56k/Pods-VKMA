import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { platform, IOS, Placeholder, CellButton, Input } from "@vkontakte/vkui";
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import Icon28ChevronBack from "@vkontakte/icons/dist/28/chevron_back";
import Icon24Back from "@vkontakte/icons/dist/24/back";
import { Group, CardGrid, Card } from "@vkontakte/vkui";
import "react-h5-audio-player/lib/styles.css";
import "./AudioEditor.css";
import Icon24Play from "@vkontakte/icons/dist/24/play";
import Icon24Pause from "@vkontakte/icons/dist/24/pause";
import Icon24Add from "@vkontakte/icons/dist/24/add";
import { Button } from "@vkontakte/vkui";
import Sound from "react-sound";
const osName = platform();

const AudioEditor = ({ id, go }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    var audio = document.getElementById("audio");

    audio.src = JSON.parse(localStorage.getItem("audio"));
    audio.load();
    try {
      var context = new AudioContext();
      var src = context.createMediaElementSource(audio);

      var analyser = context.createAnalyser();
      var canvas = document.getElementById("canvas");
      var ctx = canvas.getContext("2d");
      src.connect(analyser);
      analyser.connect(context.destination);

      analyser.fftSize = 256;

      var bufferLength = analyser.frequencyBinCount;

      var dataArray = new Uint8Array(bufferLength);

      var WIDTH = canvas.width;
      console.log(WIDTH);
      var HEIGHT = canvas.height;
      var barWidth = 1;
      var barHeight;
      var x = 0;

      function renderFrame() {
        requestAnimationFrame(renderFrame);

        x = 0;

        analyser.getByteFrequencyData(dataArray);

        ctx.fillStyle = "#F2F3F5";
        ctx.fillRect(0, 0, WIDTH, HEIGHT);

        for (var i = 0; i < bufferLength; i++) {
          barHeight = dataArray[i] / 1.8;
          ctx.fillStyle = "#3F8AE0";
          ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);
          x += barWidth + 3;
        }
      }

      renderFrame();
    } catch {}
  });
  return (
    <Panel id={id}>
      <PanelHeader
        left={
          <PanelHeaderButton onClick={() => go("second_page")}>
            {osName === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
          </PanelHeaderButton>
        }
      >
        Редактирование
      </PanelHeader>

      <Group separator="hide">
        <CardGrid>
          <Card size="l" mode="shadow" id="card">
            <div id="content">
              <canvas
                id="canvas"
                style={{ height: "96px", width: "100%" }}
              ></canvas>
              <audio id="audio" controls></audio>
              {/* <Button
                size="l"
                onClick={() => {
                  if (isPlaying) {
                    setStatus(Sound.status.PAUSED);
                    setIsPlaying(false);
                  } else {
                    setStatus(Sound.status.PLAYING);
                    setIsPlaying(true);
                  }
                }}
              >
                {isPlaying ? <Icon24Pause /> : <Icon24Play />}
              </Button> */}
            </div>
          </Card>
          <Button mode="outline" size="xl" onClick={() => go("sixth_page")}>
            Добавить фоновую музыку
          </Button>
          <Placeholder
            header="ТАЙМКОДЫ"
            action={
              <CellButton before={<Icon24Add />}>Добавить таймкод</CellButton>
            }
          >
            Отметки времени с названием темы. Позволяют слушателям легче
            путешествовать по подкастам.
          </Placeholder>
        </CardGrid>
      </Group>
    </Panel>
  );
};

AudioEditor.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
};

export default AudioEditor;
