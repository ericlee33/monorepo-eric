import React, { useEffect } from 'react';
import './App.css';
import * as echarts from 'echarts';

function App() {
  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const chart = echarts.init(ref.current);
      var option = {
        dataset: {
          source: [
            ['p', '124', '299'],
            ['o', '30', '400'],
          ],
          sourceHeader: false,
          dimensions: ['title', 'begin', 'last'],
        },
        grid: { containLabel: true, left: 60, right: 60, top: 0, bottom: 0 },
        tooltip: {
          show: true,
          confine: false,
          appendToBody: true,
          enterable: true,
          trigger: 'axis',
        },
        xAxis: { type: 'value' },
        yAxis: {
          type: 'category',
          data: ['o', 'p'],
          axisTick: { show: false },
          axisLine: { show: false },
        },
        series: [
          {
            type: 'custom',
            encode: { y: 0, x: [1, 2] },
            itemStyle: {},
            label: { position: 'right', show: true, color: '#666' },
            labelLayout: { x: 1246, moveOverlap: 'shiftY' },
            renderItem: function (params, api) {
              var categoryIndex = api.value(0);
              var start = api.coord([api.value(1), categoryIndex]);
              var end = api.coord([api.value(2), categoryIndex]);
              var height = api.size([0, 1])[1] * 0.6;

              var rectShape = echarts.graphic.clipRectByRect(
                {
                  x: start[0],
                  y: start[1] - height / 2,
                  width: end[0] - start[0],
                  height: height,
                },
                {
                  x: params.coordSys.x,
                  y: params.coordSys.y,
                  width: params.coordSys.width,
                  height: params.coordSys.height,
                }
              );

              return (
                rectShape && {
                  type: 'rect',
                  shape: rectShape,
                  style: api.style(),
                }
              );
            },
          },
        ],
      };
      chart.setOption(option as any);
    }
  }, []);

  return (
    <div
      ref={ref}
      style={{
        height: 700,
        width: '100%',
      }}
    ></div>
  );
}

export default App;
