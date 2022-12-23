import React, {type PropsWithChildren} from 'react';
import {useTailwind} from 'tailwind-rn';
import {View, Text} from 'react-native';

const Header = () => {

    const tailwind = useTailwind();

  return (
    <View style={tailwind('pt-12 items-center')}>
      <Text>
		Hello Tailwind!!!
	</Text>
    </View>
  );
};

export default Header;
