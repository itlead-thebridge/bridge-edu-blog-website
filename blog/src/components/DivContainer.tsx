
type DivContainerProperties={
  children?: React.ReactNode;
};

export default function DivContainer(props:DivContainerProperties) {
  return <div className="container mx-auto px-5">{props.children}</div>;
};