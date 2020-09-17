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
            icon={<Icon56AddCircleOutline />}
            header="Добавьте первый подкаст"
            action={<Button size="l" onClick={() => go('second_page')}>Добавить подкаст</Button>}
          >
            Добавляйте, редактируйте и делитесь подкастами вашего сообщества
          </Placeholder>
          
        </Panel>
      </View>
    );
	</Panel>
);
export default First_page;


