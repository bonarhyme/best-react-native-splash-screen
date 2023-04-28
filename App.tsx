import React, {useEffect} from 'react';
import {Text} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';

function App() {
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await RNBootSplash.hide({fade: true, duration: 1000});
      console.log('Bootsplash has been hidden successfully');
    });
  }, []);

  return (
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, quis
      nobis! Velit magni cum eveniet facere modi molestiae, amet expedita neque
      necessitatibus dolorum fugiat repudiandae quas minima voluptatibus
      voluptas illum. f
    </Text>
  );
}

export default App;
