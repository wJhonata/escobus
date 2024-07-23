import { View,Text, TouchableOpacity, ImageBackground } from 'react-native';


export default function App() {
  return (
    <ImageBackground source={require('./src/assets/logo-escobus.png')} className='flex-1'>
    <View className="flex-1 bg-[(url'/src/assets/logo-escobus.png')] bg-cover p-8">
      <View className="w-full ">
        <Text className="font-ubuntu-medium h-12 text-4xl w-full text-blue-900 font-semibold h-20 mt-9">Crie sua {'\n'} conta </Text>
      </View>

      <View className="flex-1 items-end justify-center w-full">
        <Text className="font-ubuntu text-xl w-1/2 text-blue-900 font-medium">Somos praticidade quando o assunto é mobilidade.</Text>
      </View>
      <View className="flex-1 items-start justify-center w-full">
        <Text className="font-ubuntu text-xl w-1/2 text-blue-900 font-medium">O único app de mobilidade para alunos do ensino público.</Text>
      </View>
      <View className="w-full flex-row justify-center items-center gap-8 p-12">
        <TouchableOpacity className="border p-3 bg-gray-200 rounded-xl w-6/12 border-white">
          <Text className="font-ubuntu text-blue-900 font-semibold text-center text-lg">Registre-se</Text>
        </TouchableOpacity>
        <TouchableOpacity className="border p-3 bg-gray-200 rounded-xl w-6/12 border-white">
          <Text className="font-ubuntu text-blue-900 font-semibold text-center text-lg">Login</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ImageBackground>
  );
}

