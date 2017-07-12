import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

class NoteItem extends Component {

  render() {

    return (
      <View key={this.props.keyVal} style={styles.container}>

        <Image source={this.props.val.image} style={styles.image}/>

        <View style={styles.descriptionContainer}>

          <Text style={styles.title}>{this.props.val.title}</Text>
          <Text style={styles.description}>{this.props.val.description}</Text>

        </View>

        <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
          <Text style={styles.noteDeleteText}>D</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.props.viewNote} style={styles.noteDelete}>
          <Text style={styles.noteDeleteText}>V</Text>
        </TouchableOpacity>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#000'
  },
  image:{
    width: 100,
    height: 100,
  },
  descriptionContainer:{
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  title:{
    color: '#000',
    fontSize: 20,
  },
  description:{
    color: '#000',
    fontSize: 15,
  },
  noteDelete:{
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#2980b9',
  },
  noteDeleteText:{
    color: 'white',
  }
});

export default NoteItem;
