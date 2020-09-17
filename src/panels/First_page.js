import React from "react";
import PropTypes from "prop-types";
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import {Placeholder, Button, Separator, Div, View, PanelHeader, PanelHeaderBack} from "@vkontakte/vkui";
import Icon56AddCircleOutline from "@vkontakte/icons/dist/56/add_circle_outline";
import Icon28ChevronBack from "@vkontakte/icons/dist/28/chevron_back";
import Icon56GalleryOutline from "@vkontakte/icons/dist/56/gallery_outline";
import {PanelHeaderButton} from "@vkontakte/vkui";





const First_page = ({ id, go}) => (
	<Panel id={id} centered={true}>
		 <View >
        <Panel >
          <PanelHeader>
          
      
            Подкасты</PanelHeader>
          <Placeholder
            icon={<Icon56AddCircleOutline  style={{marginTop:213.67, marginBottom:16}}/>}
            header="Добавьте первый подкаст"
            action={<Button size="l" onClick={() => go('second_page')} style={{marginTop:24}}>Добавить подкаст</Button>}
          >
            Добавляйте, редактируйте и делитесь подкастами вашего сообщества
          </Placeholder>
          
        </Panel>
      </View>
    );
	</Panel>
);
export default First_page;


