import { createChart } from 'lightweight-charts';
import React, {
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
const upColor = '#2BA23A';
const downColor = '#D61533';
const Context = createContext();

const initialData = [
  {
    time: '2018-12-19',
    open: 141.77,
    high: 170.39,
    low: 120.25,
    close: 145.72,
  },
  {
    time: '2018-12-20',
    open: 145.72,
    high: 147.99,
    low: 100.11,
    close: 108.19,
  },
  { time: '2018-12-21', open: 108.19, high: 118.43, low: 74.22, close: 75.16 },
  { time: '2018-12-22', open: 75.16, high: 82.84, low: 36.16, close: 45.72 },
  { time: '2018-12-23', open: 45.12, high: 53.9, low: 45.12, close: 48.09 },
  { time: '2018-12-24', open: 60.71, high: 60.71, low: 53.39, close: 59.29 },
  { time: '2018-12-25', open: 68.26, high: 68.26, low: 59.04, close: 60.5 },
  { time: '2018-12-26', open: 67.71, high: 105.85, low: 66.67, close: 91.04 },
  { time: '2018-12-27', open: 91.04, high: 121.4, low: 82.7, close: 111.4 },
  {
    time: '2018-12-28',
    open: 111.51,
    high: 142.83,
    low: 103.34,
    close: 131.25,
  },
  { time: '2018-12-29', open: 131.33, high: 151.17, low: 77.68, close: 96.43 },
  { time: '2018-12-30', open: 106.33, high: 110.2, low: 90.39, close: 98.1 },
  { time: '2018-12-31', open: 109.87, high: 114.69, low: 85.66, close: 111.26 },
];
const currentDate = new Date(initialData[initialData.length - 1].time);

export const App = (props) => {
  const {} = props;
  const backgroundColor: '#010101', lineColor: '#2962FF', textColor: 'black';
  const [chartLayoutOptions, setChartLayoutOptions] = useState({
    backgroundColor: '#FAEBD7',
    textColor: '#696969',
    fontSize: 12,
    fontFamily: 'Calibri',
  });
  // The following variables illustrate how a series could be updated.
  const series1 = useRef(null);
  const [started, setStarted] = useState(false);

  // The purpose of this effect is purely to show how a series could
  // be updated using the `reference` passed to the `Series` component.
  useEffect(() => {
    if (series1.current === null) {
      return;
    }

    if (started) {
      const interval = setInterval(() => {
        currentDate.setDate(currentDate.getDate() + 1);
        const next = {
          time: currentDate.toISOString().slice(0, 10),
          value: 53 - 2 * Math.random(),
        };
        series1.current.update(next);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [started]);

  useEffect(() => {
    setChartLayoutOptions({
      background: {
        color: backgroundColor,
      },
      textColor,
    });
  }, [backgroundColor, textColor]);

  return (
    <>
      {/* <button type="button" onClick={() => setStarted((current) => !current)}>
        {started ? 'Stop updating' : 'Start updating series'}
      </button> */}
      <Chart
        layout={{
          backgroundColor: 'rgba(255, 255, 255, 0)',
          textColor: '#ccc',
          fontFamily: 'Relative',
        }}
      >
        <Series
          ref={series1}
          type={'line'}
          data={initialData}
          color={lineColor}
        />
      </Chart>
    </>
  );
};

export function Chart(props) {
  const [container, setContainer] = useState(false);
  const handleRef = useCallback((ref) => setContainer(ref), []);
  return (
    <div ref={handleRef}>
      {container && <ChartContainer {...props} container={container} />}
    </div>
  );
}

export const ChartContainer = forwardRef((props, ref) => {
  const { children, container, layout, ...rest } = props;

  const chartApiRef = useRef({
    api() {
      if (!this._api) {
        this._api = createChart(container, {
          ...rest,
          layout,
          width: container.clientWidth,
          height: 650,
          grid: {
            vertLines: {
              visible: true,
              color: 'rgba(35, 38, 59, 1)',
              style: 2,
            },
            horzLines: {
              visible: true,
              color: 'rgba(35, 38, 59, 1)',
              style: 2,
            },
          },
          watermark: {
            color: 'rgba(11, 94, 29, 0.4)',
            visible: true,
            text: 'OX EXCHANGE',
            fontSize: 24,
            horzAlign: 'left',
            vertAlign: 'bottom',
          },
        });
        this._api.timeScale().fitContent();
      }
      return this._api;
    },
    free() {
      if (this._api) {
        this._api.remove();
      }
    },
  });

  useLayoutEffect(() => {
    const currentRef = chartApiRef.current;
    const chart = currentRef.api();

    const handleResize = () => {
      chart.applyOptions({
        ...rest,
        width: container.clientWidth,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      chart.remove();
    };
  }, []);

  useLayoutEffect(() => {
    const currentRef = chartApiRef.current;
    currentRef.api();
  }, []);

  useLayoutEffect(() => {
    const currentRef = chartApiRef.current;
    currentRef.api().applyOptions(rest);
  }, []);

  useImperativeHandle(ref, () => chartApiRef.current.api(), []);

  useEffect(() => {
    const currentRef = chartApiRef.current;
    currentRef.api().applyOptions({ layout });
  }, [layout]);

  return (
    <Context.Provider value={chartApiRef.current}>
      {props.children}
    </Context.Provider>
  );
});
ChartContainer.displayName = 'ChartContainer';

export const Series = forwardRef((props, ref) => {
  const parent = useContext(Context);
  const context = useRef({
    api() {
      if (!this._api) {
        const { children, data, type, ...rest } = props;
        this._api =
          type === 'line'
            ? parent.api().addCandlestickSeries(rest)
            : parent.api().addAreaSeries(rest);
        this._api.setData(data);
        this._api.applyOptions({
          upColor: upColor,
          wickUpColor: upColor,
          downColor: 'rgba(0,0,0,0)',
          borderDownColor: downColor,
          wickDownColor: downColor,
        });
      }
      return this._api;
    },
    free() {
      if (this._api) {
        parent.free();
      }
    },
  });

  useLayoutEffect(() => {
    const currentRef = context.current;
    currentRef.api();

    return () => currentRef.free();
  }, []);

  useLayoutEffect(() => {
    const currentRef = context.current;
    const { children, data, ...rest } = props;
    currentRef.api().applyOptions(rest);
  });

  useImperativeHandle(ref, () => context.current.api(), []);

  return (
    <Context.Provider value={context.current}>
      {props.children}
    </Context.Provider>
  );
});
Series.displayName = 'Series';

export default App;
