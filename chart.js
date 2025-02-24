const data = [
   ["12-21-2024", 0.635],
   ["12-22-2024", 0.45],
   ["12-23-2024", 0.495],
   ["12-24-2024", 0.57],
   ["12-25-2024", 0.58],
   ["12-26-2024", 0.53],
   ["12-27-2024", 0.52],
   ["12-28-2024", 0.52],
   ["12-29-2024", 0.57],
   ["12-30-2024", 0.565],
   ["12-31-2024", 0.555],
   ["01-06-2025", 0.465],
   ["01-13-2025", 0.555],
   ["01-20-2025", 0.565],
   ["01-27-2025", 0.54],
   ["02-03-2025", 0.48],
   ["02-10-2025", 0.525],
   ["02-17-2025", 0.82],
   ["02-24-2025", 0.625],
];

const monthNames = {
   "01": "ЯНВ", "02": "ФЕВ", "03": "МАР", "04": "АПР",
   "05": "МАЙ", "06": "ИЮН", "07": "ИЮЛ", "08": "АВГ",
   "09": "СЕН", "10": "ОКТ", "11": "НОЯ", "12": "ДЕК"
};

const labels = data.map(d => {
   let [month, day, year] = d[0].split('-');
   return `${parseInt(day)} ${monthNames[month]}`;
});

const prices = data.map(d => d[1] * 100);

const shadowPlugin = {
   id: 'shadowLine',
   beforeDatasetsDraw(chart, args, options) {
      const { ctx } = chart;
      ctx.save();
      ctx.shadowColor = options.shadowColor || 'rgba(0, 255, 132, 0.5)'; // Цвет тени
      ctx.shadowBlur = options.shadowBlur || 10; // Размытие тени
      ctx.shadowOffsetX = options.shadowOffsetX || 0; // Смещение по X
      ctx.shadowOffsetY = options.shadowOffsetY || 4; // Смещение по Y
   },
   afterDatasetsDraw(chart) {
      chart.ctx.restore();
   }
};

// Регистрируем плагин
Chart.register(shadowPlugin);

const svgString = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 8H12V16H0V8Z" fill="#00FF84"/>
<path d="M8 0H16V24H8V0Z" fill="#00FF84"/>
<path d="M4 16H12V20H4V16Z" fill="#00FF84"/>
<path d="M4 4H12V8H4V4Z" fill="#00FF84"/>
<path d="M24 8H12V16H24V8Z" fill="#00FF84"/>
<path d="M16 0H12V24H16V0Z" fill="#00FF84"/>
<path d="M20 16H4V20H20V16Z" fill="#00FF84"/>
<path d="M20 4H4V8H20V4Z" fill="#00FF84"/>
</svg>
`;

// Функция для конвертации SVG в Image
const svgBlob = new Blob([svgString], { type: 'image/svg+xml' });
const url = URL.createObjectURL(svgBlob);
const img = new Image();
img.onload = () => {
   URL.revokeObjectURL(url);
   callback(img);
};
img.src = url;

const ctx = document.getElementById('myChart').getContext('2d');
new Chart(ctx, {
   type: 'line',
   data: {
      labels: labels,
      datasets: [{
         // label: 'ПРОЦЕНТ',
         // label: '',
         fill: false,
         data: prices,
         borderWidth: 8,
         // pointStyle: img,
         // pointStyle: "circle", // Заменяем стандартную точку на изображение
         borderColor: '#00ff84',
         // pointRadius: 0,
         pointOpacity: function (context) {
            return context.dataIndex === prices.length - 1 ? '1' : '0'
         },
         pointBackgroundColor: function (context) {
            return context.dataIndex === prices.length - 1 ? '#00ff84' : 'transparent'
         },
         pointBorderColor: function (context) {
            return context.dataIndex === prices.length - 1 ? '#00ff84' : 'transparent'
         },
         pointRadius: function (context) {
            return context.dataIndex === prices.length - 1 ? 6 : 6;
         }
      }]
   },
   options: {
      responsive: true,
      layout: {
         padding: {
            top: 20,    // Отступ сверху
            bottom: 10, // Отступ снизу
            left: 10,   // Отступ слева
            right: 10   // Отступ справа
         }
      },
      plugins: {
         legend: { display: false },
         shadowLine: {
            shadowColor: 'rgba(0, 255, 132, 0.3)',
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowOffsetY: 4
         },
         tooltip: {
            bodyFont: {
               family: '"Better VCR", "JetBrains Mono", "Courier New", Courier, monospace',
               // family: 'Arial', // Шрифт
               size: 30, // Размер шрифта
               // weight: 'bold', // Толщина шрифта
            },
            titleFont: {
               family: '"Better VCR", "JetBrains Mono", "Courier New", Courier, monospace',
               size: 20, // Размер шрифта
               weight: 'normal'
            },
            enabled: true, // Включить tooltip
            backgroundColor: 'rgba(0,0,0,1)', // Цвет фона окна
            titleColor: 'white', // Цвет заголовка
            bodyColor: '#00ff84', // Цвет текста
            borderColor: 'white', // Цвет рамки
            borderWidth: 1, // Толщина рамки
            cornerRadius: 0, // Закругленные углы
            padding: 14, // Отступы внутри
            displayColors: false, // Отключить отображение цветных полосок для каждого значения
            callbacks: {
               label: function (context) {
                  let value = context.raw;
                  if (typeof value === 'number') {
                     value = Math.round(value) + '%'; // Округление до целого и добавление "%"
                  }
                  return value;
               },
               labelTextColor: function () {
                  return '#00ff84'; // Цвет текста
               },
               beforeLabel: function (context) {
                  const { ctx } = context.chart;
                  ctx.save();
                  ctx.shadowColor = 'rgba(0, 255, 132, 0.8)'; // Цвет тени
                  ctx.shadowBlur = 10; // Размытие тени
                  ctx.shadowOffsetX = 2; // Смещение по X
                  ctx.shadowOffsetY = 2; // Смещение по Y
                  ctx.restore();
                  return '';
               }
            }
         }
      },
      scales: {
         x: {
            grid: {
               display: false, // Убираем линии по X
               drawBorder: false // Убираем вертикальную линию на 0
            },
            ticks: {
               font: {
                  family: '"Better VCR", "JetBrains Mono", "Courier New", Courier, monospace',
                  size: 12
               }
            }
         },
         y: {
            grid: {
               color: 'rgba(255, 255, 255, .1)' // Серый цвет линий сетки по Y
            },
            ticks: {
               callback: function (value) {
                  return [0, 40, 50, 60, 70, 80, 100].includes(value) ? value + '%' : '';
               },
               font: {
                  family: '"Better VCR", "JetBrains Mono", "Courier New", Courier, monospace',
                  size: 12
               }
            }
         }
      }
   }
});
