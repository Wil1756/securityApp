import { Stack, Link } from 'expo-router';
import {View, Text} from 'react-native';

import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Overview' }} />
      <Container>
        <View>
          <Text>Hello World</Text>
        </View>
        <View>
          <Text>This is the first page of your app</Text>
        </View>
      </Container>
    </>
  );
}
