export const mockComponent = (moduleName, propOverrideFn = () => {}) => {
  const RealComponent = require.requireActual(moduleName);
  const React = require("react");
  const MockTouchableOpacity = props => {
    return React.createElement(
      "TouchableOpacity",
      // { ...props, onPress: disabled ? () => {} : onPress },
      { ...props, ...propOverrideFn(props) },
      props.children
    );
  };
  MockTouchableOpacity.propTypes = RealComponent.propTypes;
  return MockTouchableOpacity;
};
