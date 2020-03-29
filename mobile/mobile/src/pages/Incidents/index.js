import React from 'react';
import { View, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import logoImg from '../../assets/logo.png'
import styles from './styles';
import { Feather } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';



export default function Incidents(){
  
  const navigation = useNavigation();

  function navigateToDetails(){
    navigation.navigate('Detail');
  }
  
  
  return(
    <View style={styles.container}>

      <View style={styles.header}>
          <Image source={logoImg} />
          <Text style={styles.headerText}>
              Total de <Text style={styles.headerTextBold}>0 casos</Text>.
          </Text>
      </View>

      <Text style={styles.title}>Bem-vindo</Text>
      <Text style={styles.description}>Escolha um dos casos abaixo e salve vidas!</Text>
      
     
      <FlatList 
        style={styles.IncidentsList}
        data={[1,2,3]}
        keyExtractor={Incident => String(Incident)}
        showsVerticalScrollIndicator={false}
        renderItem={()=>(

          <View style={styles.Incidents}>

          <Text style={styles.IncidentProperty}>ONG:</Text>
          <Text style={styles.IncidentValue}>APAD</Text>

          <Text style={styles.IncidentProperty}>CASO:</Text>
          <Text style={styles.IncidentValue}>Gato assado</Text>

          <Text style={styles.IncidentProperty}>VALOR:</Text>
          <Text style={styles.IncidentValue}>R$ 120,00</Text>
                    
          <TouchableOpacity
          style={styles.detailsButton}
          onPress={navigateToDetails}
          >
            <Text style={styles.detailsButtonText}> Ver mais detalhes... </Text>    
            <Feather name="arrow-right" size={16} color="#E02041" />
            </TouchableOpacity>
        </View>

        )}
      />

      </View>
  );
}