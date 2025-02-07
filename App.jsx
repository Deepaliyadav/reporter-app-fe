import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AppNavigator from './src/navigation/app-navigator';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <GestureHandlerRootView>
          <NavigationContainer>
          <QueryClientProvider client={queryClient}>
              <AppNavigator />
          </QueryClientProvider>
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
