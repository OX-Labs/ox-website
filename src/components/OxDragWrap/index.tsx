const OxDragWrap = (props: any) => {
  return (
    <div
      style={{
        minHeight: ' 30px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      }}
      className="oxdrag"
    >
      {props.children}
    </div>
  );
};
export default OxDragWrap;
