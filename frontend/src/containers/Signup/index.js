import React, { Component } from 'react';
import {
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Button,
  Container,
  Content,
  Form,
  Item,
  Input,
  Text,
} from 'native-base';

import styles from './styles';


class Signup extends Component {
  state = {
    username: '',
    password: '',
    confirmPassword: '',
  };

  // navigate to login screen after a successful signup
  onSignupButtonPressed = () => {
    // TODO: Login

    this.props.navigation.navigate('Login');
  }

  // navigate to login screen
  onLoginButtonPressed = () => {
    this.props.navigation.navigate('Login');
  }

  render() {
    return (
      <Container style={styles.container}>
        <Content contentContainerStyle={styles.content}>
          {/* Logo */}
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={require('../../assets/images/icon.png')}
            />
            <Text style={styles.logoText}>Crowdbotics</Text>
          </View>

          {/* Form */}
          <Form style={styles.form}>
            <Item
              style={styles.item}
              rounded
              last
            >
              <Input
                style={styles.input}
                placeholder="Username"
                placeholderTextColor="#afb0d1"
                autoCapitalize="none"
                onChangeText={username => this.setState({ username })}
              />
            </Item>
            <Item
              style={styles.item}
              rounded
              last
            >
              <Input
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#afb0d1"
                onChangeText={password => this.setState({ password })}
                secureTextEntry
              />
            </Item>
            <Item
              style={styles.item}
              rounded
              last
            >
              <Input
                style={styles.input}
                placeholder="Confirm Password"
                placeholderTextColor="#afb0d1"
                onChangeText={confirmPassword => this.setState({ confirmPassword })}
                secureTextEntry
              />
            </Item>
          </Form>

          <View style={styles.buttonContainer}>
            {/* Login Button */}
            <Button
              style={styles.button}
              onPress={this.onSignupButtonPressed}
              hasText
              block
              large
              dark
              rounded
            >
              <Text style={styles.signupText}>SIGNUP</Text>
            </Button>

            {/* Signup Button */}
            <View style={styles.loginContainer}>
              <Text style={styles.haveAccountText}>Already have an account?</Text>
              <TouchableOpacity onPress={this.onLoginButtonPressed}>
                <Text style={styles.loginText}>Login Now.</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

export default Signup;
