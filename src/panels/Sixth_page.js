import React from "react";
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import {Header, SimpleCell, Avatar, View, PanelHeader, PanelHeaderButton, g, Search} from "@vkontakte/vkui";
import Icon28ChevronBack from "@vkontakte/icons/dist/28/chevron_back";
import Icon24MoreHorizontal from "@vkontakte/icons/dist/24/more_horizontal";
import ICon24AddOutline from "@vkontakte/icons/dist/24/add_outline";







const Sixth_page = ({ id, go}) => (
	<Panel id={id} centered={true}>
		 <View >
        <Panel >
          <PanelHeader left={
        <PanelHeaderButton  onClick={() => go('second_page')}>
          { <Icon28ChevronBack style={{margin:12.6}} />}
          </PanelHeaderButton>}  right={
        <PanelHeaderButton  onClick={() => go('second_page')}>
          { <ICon24AddOutline width={20} height={20} style={{margin:18}} />}
          </PanelHeaderButton>}>Выбрать музыку</PanelHeader>
        <Search style={{marginTop:17.5}}/>
        <SimpleCell before={<Avatar mode="image"  />} description="Arctic Monkeys" after={<Icon24MoreHorizontal fill="var(--accent)"/>}>I Wanna Be Yours</SimpleCell>
        <SimpleCell before={<Avatar mode="image" />} description="Лето (звери)" after={<Icon24MoreHorizontal fill="var(--accent)"/>}>6 утра</SimpleCell>
        <SimpleCell before={<Avatar mode="image" />} description="Depeche Mode" after={<Icon24MoreHorizontal fill="var(--accent)"/>}>Enjoy the Silence</SimpleCell>
        </Panel>
      </View>
    );
	</Panel>
);
export default Sixth_page;


