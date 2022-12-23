import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const Home = () => {
  const [list, setList] = useState([]);
  const [task, setTask] = useState('');

  const saveTask = () => {
    if (task !== '') {
      var id = Math.floor(Math.random() * 1000000);
      setList([...list, {id, task}]);
    }
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
        <Text style={tw`text-lg text-blue-500 font-bold`}>Add</Text>
      </TouchableOpacity>
      <View
        style={tw`p-4 android:pt-2 text-blue-200 flex-row justify-center flex-col items-center m-5`}>
        {list &&
          list.map(data => (
            <View
              key={data.id}
              style={tw`flex-row bg-blue-200 rounded-md m-1 w-64`}>
              <Text style={tw`m-2 rounded-md w-48 h-16 p-5`}>{data.task}</Text>
              <TouchableOpacity
                onPress={() => deleteTask(data.id)}
                style={tw`bg-transparent rounded items-center justify-center m-2`}>
                <Image
                  style={tw`h-4 w-4`}
                  source={{
                    uri: 'https://img.icons8.com/material-outlined/512/multiply.png',
                  }}
                />
              </TouchableOpacity>
            </View>
          ))}
      </View>
    </View>
  );
};

export default Home;
