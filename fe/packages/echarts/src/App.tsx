import React, { useEffect } from 'react';
import './App.css';
import * as echarts from 'echarts';
import { cloneDeep } from 'lodash';
// import 'echarts-wordcloud';

// prettier-ignore
const data = [["2000-06-05", 116], ["2000-06-06", 129], ["2000-06-07", 135], ["2000-06-08", 86], ["2000-06-09", 73], ["2000-06-10", 85], ["2000-06-11", 73], ["2000-06-12", 68], ["2000-06-13", 92], ["2000-06-14", 130], ["2000-06-15", 245], ["2000-06-16", 139], ["2000-06-17", 115], ["2000-06-18", 111], ["2000-06-19", 309], ["2000-06-20", 206], ["2000-06-21", 137], ["2000-06-22", 128], ["2000-06-23", 85], ["2000-06-24", 94], ["2000-06-25", 71], ["2000-06-26", 106], ["2000-06-27", 84], ["2000-06-28", 93], ["2000-06-29", 85], ["2000-06-30", 73], ["2000-07-01", 83], ["2000-07-02", 125], ["2000-07-03", 107], ["2000-07-04", 82], ["2000-07-05", 44], ["2000-07-06", 72], ["2000-07-07", 106], ["2000-07-08", 107], ["2000-07-09", 66], ["2000-07-10", 91], ["2000-07-11", 92], ["2000-07-12", 113], ["2000-07-13", 107], ["2000-07-14", 131], ["2000-07-15", 111], ["2000-07-16", 64], ["2000-07-17", 69], ["2000-07-18", 88], ["2000-07-19", 77], ["2000-07-20", 83], ["2000-07-21", 111], ["2000-07-22", 57], ["2000-07-23", 55], ["2000-07-24", 60]];
const dateList = data.map(function (item) {
  return item[0];
});
const dateList2 = data.map(function (item) {
  return (item[0] as string).replace('2000', '2008');
});
const valueList = data.map(function (item) {
  return item[1];
});

function App() {
  const ref1 = React.useRef<HTMLDivElement>(null);
  const ref2 = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obj = {
      a: (abc) => {
        console.log(1);
        return 2;
      },
    };

    const obj2 = cloneDeep(obj);
    console.log(obj2.a(3));

    if (ref1.current) {
      const myChart = echarts.init(ref1.current);

      const option = {
        tooltip: {
          trigger: 'axis' as const,
        },
        xAxis: [
          {
            data: dateList,
          },
        ],
        yAxis: [{}],
        series: [
          {
            type: 'bar',
            showSymbol: false,
            data: valueList,
          },
        ],
      };
      myChart.group = 'abc';
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      window.addEventListener('resize', function () {
        myChart.resize();
      });
    }
    if (ref2.current) {
      const myChart = echarts.init(ref2.current);

      const option = {
        tooltip: {
          trigger: 'axis' as const,
        },
        xAxis: [
          {
            data: dateList2,
          },
        ],
        yAxis: [{}],
        series: [
          {
            type: 'line',
            showSymbol: false,
            data: valueList,
          },
        ],
      };
      myChart.group = 'abc';
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      window.addEventListener('resize', function () {
        myChart.resize();
      });
    }
    echarts.connect('abc');
  }, []);

  return (
    <>
      <div
        ref={ref1}
        style={{
          height: 700,
          width: '100%',
        }}
      ></div>
      <div
        ref={ref2}
        style={{
          height: 700,
          width: '100%',
        }}
      ></div>
    </>
  );
}

export default App;
