/*========Ex1========
import React from 'react';
import { View, Text } from 'react-native';

const Exercise1 = () => {
  return (
      <View>
        <Text></Text>
        <Text></Text>
        <Text style={{ fontSize: 24 }}>RP Values</Text>
        <Text style={{ color: 'green' }}>Excellence</Text>
        <Text style={{ backgroundColor: 'yellow' }}>Customer-Centric</Text>
        <Text style={{ fontStyle: 'italic' }}>Integrity</Text>
        <Text style={{ textAlign: 'center' }}>Teamwork</Text>
        <Text style={{ backgroundColor: 'black', color: 'white' }}>Enterprising</Text>
      </View>
  );
};

export default Exercise1;*/

/* ========Ex2========
import react from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Ex2 = () => {

  return (
      <View>
        <Text></Text>

        <View style={styles.greenBox}>
          <Text style={[styles.boxText, styles.title]}>Who We Are</Text>
        </View>

        <View style={styles.greenBox}>
          <Text style={styles.boxText}>Our People</Text>
        </View>

        <View style={styles.greenBox}>
          <Text style={styles.boxText}> Our Campus</Text>
        </View>








      </View>

  );
};


const styles = StyleSheet.create({
  greenBox: {
    width: 100,
    height: 100,
    marginTop: 30,
    backgroundColor: 'green',
    borderColor: 'black',
    borderWidth: 1
  },

  boxText:{
    textAlign: 'center',
    color:'white'
  },
  title:{
    fontWeight: 'bold'
  }



});

export default Ex2;*/

/* ========Ex3A========

import react from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Ex3A = () =>{
  return (
      <View style={[styles.Parent, {marginTop:50}]}>
        <Text style={[styles.Child,{backgroundColor: 'powderblue'}]}>
          Child One
        </Text>

        <Text style={[styles.Child,{backgroundColor: 'skyblue'}]}>
          Child Two
        </Text>

        <Text style={[styles.Child,{backgroundColor: 'steelblue'}]}>
          Child Three
        </Text>
      </View>
  );
};

const styles = StyleSheet.create({
  Parent: {
    flexDirection:'row',
    backgroundColor:'#F5cff',
    borderColor:'#0099AA',
    borderWidth:5
  },
  Child: {
    borderWidth:2,
    textAlign:'center',
    fontSize:24
  }

}
);
export default Ex3A;*/

/* ========Ex3B========
import react from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Ex3B = () => {
  return (
      <View style={[styles.Parent, {marginTop:50}]}>
        <Text style={[styles.Child,{backgroundColor: 'powderblue'}]}>
          Child One
        </Text>

        <Text style={[styles.Child,{backgroundColor: 'skyblue'}]}>
          Child Two
        </Text>

        <Text style={[styles.Child,{backgroundColor: 'steelblue'}]}>
          Child Three
        </Text>
      </View>
  );
};

const styles = StyleSheet.create({
      Parent: {
        flex: 1,
        flexDirection:'column',
        backgroundColor:'#F5cff',
        borderColor:'#0099AA',
        borderWidth:5,
      },
      Child: {
        flex:2,
        borderWidth:2,
        textAlign:'center',
        fontSize:24
      }

    }
);

export default Ex3B;*/

/* ========Ex3C========
import react from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Ex3C = () => {
  return (
      <View style={[styles.Parent, {marginTop:50}]}>
        <Text style={[styles.Child,{backgroundColor: 'powderblue',maxWidth:90}]}>
          Child One
        </Text>

        <Text style={[styles.Child,{backgroundColor: 'skyblue'}]}>
          Child Two
        </Text>

        <Text style={[styles.Child,{backgroundColor: 'steelblue', maxHeight:120}]}>
          Child Three
        </Text>
      </View>
  );
};

const styles = StyleSheet.create({
      Parent: {
        flex: 1,
        flexDirection:'column',
        backgroundColor:'#F5cff',
        borderColor:'#0099AA',
        borderWidth:5,
      },
      Child: {
        flex:2,
        borderWidth:2,
        textAlign:'center',
        fontSize:24
      }

    }
);

export default Ex3C;*/

/* ========Ex3D========

import react from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Ex3D = () => {
  return (
      <View style={[styles.Parent, {marginTop:50}]}>
        <Text style={[styles.Child,{backgroundColor: 'powderblue',maxWidth:90,flex:1}]}>
          Child One
        </Text>

        <Text style={[styles.Child,{backgroundColor: 'skyblue', flex:2}]}>
          Child Two
        </Text>

        <Text style={[styles.Child,{backgroundColor: 'steelblue', maxHeight:120, flex:3}]}>
          Child Three
        </Text>
      </View>
  );
};

const styles = StyleSheet.create({
      Parent: {
        flexDirection:'row',
        backgroundColor:'#F5cff',
        borderColor:'#0099AA',
        borderWidth:5,
      },
      Child: {
        borderWidth:2,
        textAlign:'center',
        fontSize:24
      }

    }
);

export default Ex3D;*/

/* ========Ex3E========

import react from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Ex3E = () => {
  return (
      <View style={[styles.Parent, {marginTop:50}]}>
        <Text style={[styles.Child,{backgroundColor: 'powderblue'}]}>
          Child One
        </Text>

        <Text style={[styles.Child,{backgroundColor: 'skyblue'}]}>
          Child Two
        </Text>

        <Text style={[styles.Child,{backgroundColor: 'steelblue'}]}>
          Child Three
        </Text>
      </View>
  );
};

const styles = StyleSheet.create({
      Parent: {
        flex: 1,
        //justifyContent: 'flex-start',
        //justifyContent: 'flex-end',
        //justifyContent: 'space-between',
        //justifyContent: 'space-around',
        flexDirection:'column',
        backgroundColor:'#F5cff',
        borderColor:'#0099AA',
        borderWidth:5,
      },
      Child: {
        borderWidth:2,
        textAlign:'center',
        fontSize:24
      }

    }
);

export default Ex3E;*/

/* ========Ex4=========

import react from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Ex4 = () => {

  return (
        <View style={styles.Container}>

        <View style={[styles.Parent,{backgroundColor:'skyblue'}]}>
          <Text style={styles.Child}>Square 1</Text>
        </View>

        <View style={[styles.Parent,{backgroundColor:'lightgreen'}]}>
          <Text style={styles.Child}>Square 2</Text>
        </View>

        <View style={[styles.Parent,{backgroundColor:'red'}]}>
          <Text style={styles.Child}>Square 3</Text>
        </View>

        </View>
  );
};


const styles = StyleSheet.create({

  Container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
  },
  Parent:{
      backgroundColor:'whitesmoke',
      marginTop: 50,
      flexDirection:'row',
      marginHorizontal: 10,
      alignItems:'center',
      justifyContent:'center',
  },

  Child:{
      width:80,
      height:80,
      textAlign:'center',
      textAlignVertical: 'center'
  }
});
export default Ex4;*/
