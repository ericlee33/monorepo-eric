const XLSX = require('xlsx');
const fs = require('fs');

const data = [
  ['Name', 'Age', 'City'],
  ['张三', 25, '北京'],
  ['李四', 30, '上海'],
  // 其他数据...
];

// const ws = XLSX.utils.aoa_to_sheet(data);
// const csv = XLSX.utils.sheet_to_csv(ws);

fs.writeFileSync('output1.json', `\ufeff${JSON.stringify(data)}`, 'utf-8');
// fs.writeFileSync('output1.csv', `${csv}`, 'utf-8');
