import React, {Component} from 'react';
import {StyleSheet, View, Button, Text} from 'react-native';
import {connect} from 'react-redux';
import {createProfileAction} from '../../redux/Profile/action';
import {ICreateProfileActionPayload} from '../../redux/Profile/interface';

// interface IProps {
//   createProfile: (profileData: ICreateProfileActionPayload) => void;
// }

const Increment = props => {
  const {createProfile} = props;
  const onClickIconButton = () => {
    createProfile('SAMPLE');
    console.log('CLICKED');
  };
  return (
    <View>
      <Button title="increment" onPress={onClickIconButton} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const mapStateToProps = state => {
  return {};
};

export const mapDispatchToProps = dispatch => {
  return {
    createProfile: payload => dispatch(createProfileAction(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Increment);
