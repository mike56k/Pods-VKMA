import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { platform, IOS } from "@vkontakte/vkui";
import Icon24Back from "@vkontakte/icons/dist/24/back";
import Icon28PictureOutline from "@vkontakte/icons/dist/28/picture_outline";
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import { File, Select } from "@vkontakte/vkui";

import {
  Placeholder,
  Button,
  Separator,
  Div,
  View,
  PanelHeader,
  PanelHeaderButton,
  Card,
  Group,
  Input,
  Textarea,
  FormLayout,
  Checkbox,
} from "@vkontakte/vkui";
import Icon56AddGalleryOutline from "@vkontakte/icons/dist/56/gallery_outline";
import Icon28ChevronBack from "@vkontakte/icons/dist/28/chevron_back";
import Icon28UserOutline from "@vkontakte/icons/dist/28/user_outline";
const osName = platform();

const Second_page = ({ id, go }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const uploadPod = (e) => {
    const files = e.target.files;
    setIsLoaded(true);
    console.log(isLoaded);
    const loaded = JSON.stringify(isLoaded);
    localStorage.setItem("isLoaded", loaded);
    const serialized = JSON.stringify(URL.createObjectURL(files[0]));
    localStorage.setItem("audio", serialized);
  };

  return (
    <Panel id={id} centered={true}>
      <View>
        <Panel>
          <PanelHeader
            left={
              <PanelHeaderButton onClick={() => go("first_page")}>
                {osName === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
              </PanelHeaderButton>
            }
          >
            Новый подкаст
          </PanelHeader>
          <Div>
            <div style={{ display: "flex" }}>
              <Card
                //size="s"
                style={{
                  border: "0.5px solid rgba(0, 0, 0, 0.12)",
                  marginRight: "auto",
                }}
              >
                <div style={{ padding: "33px" }}>
                  {<Icon28PictureOutline style={{ color: "#3F8AE0" }} />}
                </div>
              </Card>

              <FormLayout
                style={{
                  width: "100%",
                }}
              >
                <Input top="Название" placeholder="Введите название подкаста" />
              </FormLayout>
            </div>

            <FormLayout>
              <Textarea top="Описание подкаста" />
            </FormLayout>
          </Div>
          {!isLoaded ? (
            <Placeholder
              header="Загрузите ваш подкаст"
              action={
                <File
                  type="file"
                  id="thefile"
                  accept="audio/*"
                  size="l"
                  mode="outline"
                  onChange={uploadPod}
                >
                  Загрузить файл{" "}
                </File>
              }
            >
              Выберите готовый аудиофайл из вашего телефона и добавьте его
            </Placeholder>
          ) : (
            <Placeholder
              header="Вы можете редактировать файл"
              action={
                <Button mode="outline" onClick={() => go("audioeditor")}>
                  Редактировать
                </Button>
              }
            >
              Вы можете добавить таймкоды и скорректировать подкаст в режиме
              редактирования.
            </Placeholder>
          )}

          <Separator wide />
          <FormLayout>
            <Checkbox>Ненормативный контент</Checkbox>
            <Checkbox>Исключить эпизод из экспорта</Checkbox>
            <Checkbox>Трейлер подкаста</Checkbox>
          </FormLayout>
          <Group
            separator="hide"
            description="При публикации записи с эпизодом, он становится доступным для всех пользователей"
          >
            <Select top="Кому доступен данный подкаст?">
              <option>Всем пользователям</option>
              <option>Только друзьям</option>

              <option>Только мне</option>
            </Select>
          </Group>

          <Button
            size="xl"
            onClick={() => go("last_page")}
            style={{ marginTop: 36 }}
          >
            Далее
          </Button>
        </Panel>
      </View>
    </Panel>
  );
};
Second_page.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
};
export default Second_page;
