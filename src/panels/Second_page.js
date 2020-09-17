import React from "react";
import PropTypes from "prop-types";
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import {Placeholder, Button, Separator, Div, View, PanelHeader, PanelHeaderBack, PanelHeaderButton,  Card, Group,  Cell, CardGrid, Input, Textarea, FormLayout, FormStatus, Checkbox} from "@vkontakte/vkui";
import Icon56AddGalleryOutline from "@vkontakte/icons/dist/56/gallery_outline";
import Icon28ChevronBack from "@vkontakte/icons/dist/28/chevron_back";
import Icon28UserOutline from "@vkontakte/icons/dist/28/user_outline";






const Second_page = ({ id, go}) => (
	<Panel id={id} centered={true}>
		 <View >
        <Panel >
          <PanelHeader left={
        <PanelHeaderButton  onClick={() => go('first_page')}>
          { <Icon28ChevronBack style={{margin:12.6}}/>}
          </PanelHeaderButton>}>Новый подкаст</PanelHeader>
          <Div>
          <div  style={{display: 'flex'}}>
          
          <Card size="s" style={{marginLeft:12}}>
            <div style={{ padding:23.43 }}>
            {<Icon56AddGalleryOutline  />}
            </div>
          </Card>
          
          <FormLayout>
          <Input top="Название" placeholder="Введите название подкаста" style={{height:44, width:1100}} />
          </FormLayout>

          </div>
          
          <FormLayout style={{marginTop:29, marginBottom:44}}>
          <Textarea top="Описание подкаста" />
         </FormLayout>
      </Div>
      <Placeholder
            
            header="Загрузите ваш подкаст"
            action={<Button size="l" mode="outline" onClick={() => go('second_page')}>Загрузить файл</Button>}
          >
            Выберите готовый аудиофайл из вашего телефона и добавьте его
          </Placeholder>
          <Separator wide />
          <FormLayout>
        <Checkbox style={{marginBottom:26}}>Ненормативный контент</Checkbox>
        <Checkbox style={{marginBottom:26}}>Исключить эпизод из экспорта</Checkbox>
        <Checkbox style={{marginBottom:26}}>Трейлер подкаста</Checkbox>
        </FormLayout>
        <Group separator="hide" description="При публикации записи с эпизодом, он становится доступным для всех пользователей">
        <Cell expandable  onClick={() => this.setState({ activePanel: 'panel2' })}>
              Кому доступен данный подкаст
            </Cell>
        </Group>
          
        <Button size="xl"  onClick={() => go('sixth_page')} style={{marginTop:36}}>Далее</Button>
        </Panel>
      </View>
	</Panel>
);
export default Second_page;


