import About from '@/components/section-content/about';
import Service from '@/components/section-content/service';
import BigData from '@/components/section-content/big-data';
import Strength from '@/components/section-content/strength';
import Contact from '@/components/section-content/contact';

export const sections = [
  { id: 'about', label: '關於\n我們', angle: 0, component: About },
  { id: 'service', label: '顧問\n服務', angle: 72, component: Service },
  { id: 'big-data', label: '大數據\n思維', angle: 144, component: BigData },
  { id: 'strength', label: '我們的\n優勢', angle: 216, component: Strength },
  { id: 'contact', label: '聯絡\n我們', angle: 288, component: Contact },
];