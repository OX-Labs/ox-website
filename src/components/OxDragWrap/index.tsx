const OxDragWrap = (props: any) => {
  return (
    <div
      style={{
        minHeight: ' 30px',
      }}
      className="oxdrag"
    >
      {props.children}
    </div>
  );
};
export default OxDragWrap;
