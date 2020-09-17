import React from "react";
import PropTypes from "prop-types";
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import {Placeholder, Button, Separator, Div, View, PanelHeader, PanelHeaderBack, PanelHeaderButton,  Card, Group,  Cell, CardGrid, Input, Textarea, FormLayout, FormStatus, Checkbox} from "@vkontakte/vkui";
import Icon56AddGalleryOutline from "@vkontakte/icons/dist/56/gallery_outline";
import Icon28ChevronBack from "@vkontakte/icons/dist/28/chevron_back";
import Icon56CheckCircleOutline from "@vkontakte/icons/dist/56/check_circle_outline";






const Last_page = ({ id, go}) => (
	<Panel id={id} centered={true}>
		 <View >
        <Panel >
        <PanelHeader>
          
      
          Подкасты</PanelHeader>
        <Placeholder
          icon={<Icon56CheckCircleOutline />}
          header="Поделиться подкастом"
          action={<Button size="l" onClick={() => go('second_page')}>Подкаст добавлен</Button>}
        >
          Раскажите своим подписчикам о новом подкасте, чтобы получить больше слушателей.
        </Placeholder>
        </Panel>
      </View>
	</Panel>
);
export default Last_page;


