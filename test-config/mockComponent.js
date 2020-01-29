export const mockComponent = (moduleName, propOverrideFn = () => {}) => {
  const RealComponent = require.requireActual(moduleName);
  const React = require("react");
  const CustomizedComponent = props => {
    return React.createElement(
      "CustomizedComponent",
      { ...props, ...propOverrideFn(props) },
      props.children
    );
  };
  CustomizedComponent.propTypes = RealComponent.propTypes;
  return CustomizedComponent;
};
