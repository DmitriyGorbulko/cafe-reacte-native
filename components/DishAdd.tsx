import axios from 'axios'
import { useEffect, useState } from 'react'
import { View, Text, StyleSheet, SectionList, Button, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native'
import { IDish } from '../api/models/Interfaces'


const DishAdd = () => {
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState({} as string);

  const onChangeNameHandler = (fullName) => {
    setFullName(fullName);
  };

  const onChangeEmailHandler = (email) => {
    setEmail(email);
  };
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({} as IDish[]);

  const getDish = async () => {    if (!fullName.trim() || !email.trim()) {
    alert("Name or Email is invalid");
    return;
  }
  setIsLoading(true);
  try {
    const response = await axios.post(`${baseUrl}/api/users`, {
      fullName,
      email,
    });
    if (response.status === 201) {
      alert(` You have created: ${JSON.stringify(response.data)}`);
      setIsLoading(false);
      setFullName('');
      setEmail('');
    } else {
      throw new Error("An error has occurred");
    }
  } catch (error) {
    alert("An error has occurred");
    setIsLoading(false);
  }
};

return (
  <ScrollView contentContainerStyle={styles.container}>
    <View>
      <View style={styles.wrapper}>
        {isLoading ? (
          <Text style={styles.formHeading}> Creating resource </Text>
        ) : (
          <Text style={styles.formHeading}>Create new user</Text>
        )}
      </View>
      <View style={styles.wrapper}>
        <TextInput
          placeholder="Full Name"
          placeholderTextColor="#ffffff"
          style={styles.input}
          value={fullName}
        />
      </View>
      <View style={styles.wrapper}>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#ffffff"
          style={styles.input}
          value={email}
          editable={!isLoading}
          onChangeText={onChangeEmailHandler}
        />
      </View>
      <View>
        <Button
          title="Submit"
          onPress={onSubmitFormHandler}
          style={styles.submitButton}
          disabled={isLoading}
        />
      </View>
    </View>
  </ScrollView>
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: "#252526",
  alignItems: "center",
  justifyContent: "center",
  marginTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
},
formHeading: {
  color: "#ffffff",
},
wrapper: {
  marginBottom: 10,
},
input: {
  borderWidth: 2,
  borderColor: "grey",
  minWidth: 200,
  textAlignVertical: "center",
  paddingLeft: 10,
  borderRadius: 20,
  color: "#ffffff",
},
submitButton: {
  backgroundColor: "gray",
  padding: 100,
},
});



export default DishAdd;