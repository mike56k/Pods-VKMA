import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { platform, IOS } from "@vkontakte/vkui";
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
import { Button } from "@vkontakte/vkui";
import Sound from "react-sound";
const osName = platform();

const AudioEditor = (props) => {
  const [status, setStatus] = useState(Sound.status.STOPPED);
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    var file = document.getElementById("thefile");
    var audio = document.getElementById("audio");
    file.onchange = function () {
      var files = this.files;
      audio.src = URL.createObjectURL(files[0]);
      audio.load();
      audio.play();
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
          barHeight = dataArray[i];
          ctx.fillStyle = "#3F8AE0";
          ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);
          x += barWidth + 3;
        }
      }

      audio.play();
      renderFrame();
    };
  });
  return (
    <Panel id={props.id}>
      <PanelHeader
        left={
          <PanelHeaderButton onClick={props.go} data-to="home">
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
              <input type="file" id="thefile" accept="audio/*" />
              <canvas
                id="canvas"
                style={{ height: "96px", width: "100%" }}
              ></canvas>
              <audio id="audio" controls></audio>
              <Button
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
              </Button>
            </div>
            <Sound
              url="https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3"
              playStatus={status}
              playFromPosition={300 /* in milliseconds */}
              //   onLoading={this.handleSongLoading}
              //   onPlaying={this.handleSongPlaying}
              //   onFinishedPlaying={this.handleSongFinishedPlaying}
            />
          </Card>
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
