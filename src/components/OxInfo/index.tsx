import styles from './index.less';
const OxInfo = (props: any) => {
  const { title, ...rest } = props;
  return (
    <div className={styles.oxinfo}>
      {/* header */}
      <div className={styles.header}>
        <div className={styles.tab}>{title}</div>
        <div className="hide-button">×</div>
      </div>
      <div style={{ padding: '10px' }}>{props.children}</div>
    </div>
  );
};
export default OxInfo;
