import toolTipStyle from './styles.module.scss';

type props = {
  message: string;
  children: React.ReactNode;
  show: boolean;
};

export default function Tooltip({ message, children, show }: props) {
  return (
    <div>
      <div className={toolTipStyle.tooltipBox}>
        {show && (
          <div className={toolTipStyle.wrapper}>
            <span className={toolTipStyle.container}>
              <p>{message}</p>
            </span>
            <span className={toolTipStyle.arrow} />
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
