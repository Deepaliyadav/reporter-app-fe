import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AppNavigator from './src/navigation/app-navigator';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './src/assets/global/global';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Dimensions } from 'react-native';

const queryClient = new QueryClient();

const { height } = Dimensions.get("window");
function App() {
  return (
    <GestureHandlerRootView>
       <SafeAreaView style={{ height }}>
          <NavigationContainer>
          <QueryClientProvider client={queryClient}>
              <AppNavigator />
          </QueryClientProvider>
          </NavigationContainer>
       </SafeAreaView>
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
