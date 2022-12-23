import React, {type PropsWithChildren} from 'react';
import {View, Text} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const Header = () => {
  const date = new Date();
  const hour = date.getHours();

  return (
    <View
      style={tw`p-4 android:pt-2 bg-blue-800 flex-row justify-center flex-col items-center`}>
      {/* <Image src={`https://avatars.dicebear.com/api/adventurer/12.svg`} /> */}
      <Text style={tw`text-xl text-blue-100`}>TaskNote</Text>
      <Text style={tw`text-blue-300`}>
        {hour < 12 ? 'Good Morning' : 'Good evening'}
      </Text>
    </View>
  );
};

export default Header;
