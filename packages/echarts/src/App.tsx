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
            ['score', 'amount', 'product'],
            [89.3, 58212, 'Matcha Latte'],
            [57.1, 78254, 'Milk Tea'],
            [74.4, 41032, 'Cheese Cocoa'],
            [50.1, 12755, 'Cheese Brownie'],
            [89.7, 20145, 'Matcha Cocoa'],
            [68.1, 79146, 'Tea'],
            [19.6, 91852, 'Orange Juice'],
            [10.6, 101852, 'Lemon Juice'],
            [32.7, 20112, 'Walnut Brownie'],
          ],
        },
        xAxis: {},
        yAxis: { type: 'category' },
        series: [
          {
            type: 'bar',
            encode: {
              // 将 "amount" 列映射到 X 轴。
              x: 'amount',
              // 将 "product" 列映射到 Y 轴。
              y: 'product',
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
