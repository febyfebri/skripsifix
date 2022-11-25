import React, {useState} from 'react';
import { Text as TextSytle, 
        View as RNView, 
        Image, 
        SafeAreaView as SAStyled, 
        TextInput as TISytle, 
        TouchableOpacity, 
        Button as BTNStyle, 
        Alert,
        Touchable} from 'react-native';
import { styled } from 'nativewind';
import { EmailValidator } from '../helper/EmailValidator';
import { PasswordValidator } from '../helper/PasswordValidator';

const View = styled(RNView)
const Text = styled(TextSytle)
const SafeAreaView = styled(SAStyled)
const TextInput = styled(TISytle)
const Button = styled(BTNStyle)

export default function LoginPage() {
  const [Email, SetEmail] = useState({value : '', error: ''})
  const [Password, SetPassword] = useState({value : '', error: ''})

  const OnLoginPressed = () =>{
    const emailErr = EmailValidator(Email.value)
    const PasswordErr = PasswordValidator(Password.value)

    if (emailErr || PasswordErr) {
      SetEmail({...Email, error: emailErr})
      SetPassword({...Password, error: PasswordErr})
      return (
        Alert.alert(emailErr || PasswordErr)
      )
    }
  }

  return (
      <SafeAreaView>
        <View className='items-center m-20'>  
          <Image
            source={require('../icon/Logo.png')}
            />
          <Text className='mt-4 font-bold text-lg italic'>
            NYEPEDA
          </Text>
        </View>
        <View className='ml-11'>
          <Text className="text-base font-bold mb-2">Email</Text>
            <TextInput className='w-72  p-3 font-bold bg-gray-200 text-gray-800 rounded'
            value={Email.value}
            onChangeText={(text) => SetEmail({value: text, error: ''})}
            error={!!Email.error}
            errortext={Email.error}
            autoCapitalize="none"
            autoComplete='email'
            keyboardType='email-address'
            textContentType='emailAddress'
            />
            <Text className="text-base font-bold mt-8 mb-2">Kata Sandi</Text>
              <TextInput className='w-72  p-3 font-bold bg-gray-200 text-gray-800 rounded'
              value={Password.value}
              onChangeText={(text) => SetPassword({value: text, error: ''})}
              error={!!Password.error}
              errortext={Password.error}
              secureTextEntry
              textContentType='password'
              />
          </View>
          <View className='flex-row-reverse'>
            <TouchableOpacity>
              <Text className='mt-4 mr-10 italic'>
                Lupa Kata Sandi ?
              </Text>
            </TouchableOpacity>
          </View>
        <TouchableOpacity onPress={OnLoginPressed}>
          <View className='items-center mt-8'>
            <View className='items-center w-72 bg-blue-900 rounded-lg'>
                <Text className='p-4 font-bold text-white'>
                  MASUK
                </Text>
            </View>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
  )
}
