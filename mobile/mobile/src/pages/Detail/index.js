import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import logoImg from '../../assets/logo.png'
import styles from './styles';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
//import * as MailComposer from 'expo-mail-composer;'


export default function Details(){
  
  const navigation = useNavigation();
  const message = 'Olá APAD estou entrando em contato';


  function navigationBack(){
  navigation.goBack();
  }

   function sendMail() {
  //     MailComposer.composeAsync({
  //       subject: 'Ajuda',
  //       recipients: ['danielbruno84@gmail.com'],
  //       body: message,
  //  })
  console.log('enviado');
    
  }

  function sendWhatsapp(){
//    Linking.openURL(`whatsapp://send?phone=75991961476;text=${message}`);
      console.log('enviado');
  }

  return(
    <View style={styles.container}>

      <View style={styles.header}>
      <Image source={logoImg} />
      <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>0 casos</Text>.
      </Text>
      <TouchableOpacity onPress={navigationBack}>
      <Feather name="arrow-left" size={16} color="#E02041" />
      </TouchableOpacity>
      </View>


      <View style={styles.Incident}>
      
          <Text style={styles.IncidentProperty, {marginTop:0}}>ONG:</Text>
          <Text style={styles.IncidentValue}>APAD</Text>

          <Text style={styles.IncidentProperty}>CASO:</Text>
          <Text style={styles.IncidentValue}>Gato assado</Text>

          <Text style={styles.IncidentProperty}>VALOR:</Text>
          <Text style={styles.IncidentValue}>R$ 120,00</Text>
      
       </View>

       <View style={styles.contactBox}>
          <Text style={styles.heroTitle}>Salve o dia!</Text>
          <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>
          <Text style={styles.heroDescription}>Entre em contato:</Text>
      
          <View style={styles.actions}>
              <TouchableOpacity style={styles.action} onPress={sendMail}>
              <Text style={styles.actionText}>Whatsapp</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
              <Text style={styles.actionText}>E-mail</Text>
              </TouchableOpacity>

              </View>
        </View>
    
    </View>

  );
}