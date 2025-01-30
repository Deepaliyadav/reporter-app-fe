import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AppNavigator from './src/navigation/app-navigator';
import { NavigationContainer } from '@react-navigation/native';

function App() {
  return (
    <GestureHandlerRootView>
          <NavigationContainer>
              <AppNavigator />
          </NavigationContainer>
      </GestureHandlerRootView>
  );
}

export default App;


// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import AppNavigator from './src/navigation/app-navigator';

// export default function App() {
//   return (
//     <NavigationContainer>
//       <AppNavigator />
//     </NavigationContainer>
//   );
// };
