import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const Home = () => {
  const [list, setList] = useState([]);
  const [task, setTask] = useState('');

  const saveTask = () => {
    var id = Math.floor(Math.random() * 1000000);
    setList([...list, {id, task}]);
  };

  const deleteTask = id => {
    var newList = list.filter(data => data.id !== id);
    setList(newList);
  };

  return (
    <View
      style={tw`p-4 android:pt-2 text-blue-100 flex-row justify-center flex-col items-center`}>
      <TextInput
        type="text"
        onChangeText={setTask}
        placeholder="Enter task"
        style={tw`border-blue-700 bg-blue-300 border-black border-opacity-75 text-black w-44 m-5 rounded-md`}
      />
      <TouchableOpacity
        onPress={saveTask}
        style={tw`h-10 w-full bg-white rounded items-center justify-center border border-blue-500 w-44`}>
        <Text style={tw`text-lg text-blue-500 font-bold`}>Details</Text>
      </TouchableOpacity>
      <View
        style={tw`p-4 android:pt-2 text-blue-200 flex-row justify-center flex-col items-center m-5`}>
        {list &&
          list.map(data => (
            <View key={data.id} style={tw`flex-row bg-blue-200 rounded-md m-1 w-64`}>
              <Text style={tw`m-2 rounded-md w-48 h-16 truncate`}>
                {data.task}
              </Text>
              <TouchableOpacity
                onPress={() => deleteTask(data.id)}
                style={tw`h-10 w-full bg-white rounded items-center justify-center border border-blue-500 w-8 m-2`}>
                <Text style={tw`text-lg text-blue-500 font-bold`}>Del</Text>
              </TouchableOpacity>
            </View>
          ))}
      </View>
    </View>
  );
};

export default Home;
