import React from 'react';
import {View, Button} from 'react-native';
import {connect} from 'react-redux';
import {increaseNumberAction} from '../../redux/Profile/action';
import {getNumberSelector} from '../../redux/Profile/selector';

interface IProps {
  increaseNumber: (numberData: number) => void;
  getNumber: number;
}

const Increment = (props: IProps) => {
  const {increaseNumber, getNumber} = props;
  const onClickIconButton = () => {
    const payload = isNaN(getNumber) ? 0 : getNumber + 1;
    increaseNumber(payload);
  };
  return (
    <View>
      <Button title={`increment ${getNumber}`} onPress={onClickIconButton} />
    </View>
  );
};

export const mapStateToProps = (state: any) => {
  return {getNumber: getNumberSelector(state)};
};

export const mapDispatchToProps = dispatch => {
  return {
    increaseNumber: payload => dispatch(increaseNumberAction(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Increment);
