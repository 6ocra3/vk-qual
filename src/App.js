import React from 'react';
import { useState } from "react"
import {
  AppRoot,
  SplitLayout,
  SplitCol,
  View,
  Panel,
  PanelHeader,
  Group,
  Button,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import s from "./App.module.css"
import FormPopout from './FormPopout/FormPopout';
const App = () => {
  const [popout, setPopout] = useState(null);

  const onClickPopout = () => setPopout(<FormPopout onClose={() => setPopout(null)} />);
  return (
    <AppRoot className={s.root}>
      <SplitLayout className={s.rootSplit} popout={popout}>
        <SplitCol>
          <View activePanel="app">
            <Panel id="app">
              <PanelHeader>Самое время обсудить новый спринт</PanelHeader>
              <Group className={s.mainGroup}>
                <Button className={s.button} size='l' onClick={onClickPopout} appearance='accent-invariable'>Забронировать переговорку!</Button>
              </Group>
            </Panel>
          </View>
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  );
};

export default App;
