import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

export default function LinksScreen() {
  return (
    
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

    <View style={styles.profileContainer}>
      <Image
            source={require('../assets/images/profile_pic.png')}
            style={styles.profileImage}
      />
    </View>

      <Text style={styles.infoText}>I am 
      <Text style={{fontWeight: "bold"}}> Harri Ahola </Text>
      {"\n"} Software Developer, Game Developer, Graphic Designer, Performing Arts</Text>

      

      <OptionButton
        icon="ios-desktop"
        label="My homepage"
        onPress={() => WebBrowser.openBrowserAsync('https://www.harriahola.com')}
        isLastOption
      />

      <OptionButton
        icon="md-code"
        label="My Github"
        onPress={() => WebBrowser.openBrowserAsync('https://github.com/crowelian')}
      />

      <OptionButton
        icon="md-browsers"
        label="Softa.site [ALWAYS under construction]"
        onPress={() => WebBrowser.openBrowserAsync('https://softa.site')}
      />

      <OptionButton
        icon="ios-link"
        label="LinkedIn"
        onPress={() => WebBrowser.openBrowserAsync('https://www.linkedin.com/in/harri-ahola-18ab1563')}
      />

      <OptionButton
        icon="ios-chatboxes"
        label="Ask a question or ask for CV"
        onPress={() => WebBrowser.openBrowserAsync('mailto:contact@harriahola.com')}
        isLastOption
      />


    </ScrollView>
  );
}

function OptionButton({ icon, label, onPress, isLastOption }) {
  return (
    <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.optionIconContainer}>
          <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{label}</Text>
        </View>
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
  infoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'left',
    paddingHorizontal: 15,
    paddingVertical: 15,
    textAlign: 'center',
  },
  profileImage: {
    width: 125,
    height: 125,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
});
