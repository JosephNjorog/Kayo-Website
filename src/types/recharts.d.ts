declare module 'recharts' {
  export const ResponsiveContainer: any;
  export const Tooltip: any;
  export const Legend: any;
  export const LineChart: any;
  export const Line: any;
  export const BarChart: any;
  export const Bar: any;
  export const XAxis: any;
  export const YAxis: any;
  export const CartesianGrid: any;
  export const Pie: any;
  export const PieChart: any;
  export const Area: any;
  export const AreaChart: any;
  
  // Add any other components you're using from recharts
  
  export interface LegendProps {
    payload?: any[];
    verticalAlign?: 'top' | 'middle' | 'bottom';
    [key: string]: any;
  }
}