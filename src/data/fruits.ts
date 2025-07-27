import { Fruit } from '../types';

export const fruits: Fruit[] = [
  {
    id: 1,
    name: '富士苹果',
    price: 12.8,
    image: 'https://images.pexels.com/photos/1510392/pexels-photo-1510392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: '进口水果',
    description: '脆甜多汁，富含维生素，来自日本的优质苹果品种。',
    stock: 100,
    unit: '斤',
    seasonal: true
  },
  {
    id: 2,
    name: '海南香蕉',
    price: 5.5,
    image: 'https://images.pexels.com/photos/1093038/pexels-photo-1093038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: '国产水果',
    description: '香甜软糯，富含钾元素，来自海南的热带水果。',
    stock: 150,
    unit: '斤',
    seasonal: false
  },
  {
    id: 3,
    name: '泰国山竹',
    price: 28.9,
    image: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.WxkS96GHQC7_CfAty5DRZQHaHa?rs=1&pid=ImgDetMain',
    category: '进口水果',
    description: '被誉为"水果皇后"，果肉洁白细嫩，甜美多汁。',
    stock: 80,
    unit: '斤',
    seasonal: true
  },
  {
    id: 4,
    name: '新疆葡萄',
    price: 16.8,
    image: 'https://images.pexels.com/photos/708777/pexels-photo-708777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: '国产水果',
    description: '颗粒饱满，皮薄肉厚，甜度高，来自新疆的阳光雨露。',
    stock: 120,
    unit: '斤',
    seasonal: true
  },
  {
    id: 5,
    name: '四川橙子',
    price: 8.8,
    image: 'https://images.pexels.com/photos/691166/pexels-photo-691166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: '国产水果',
    description: '酸甜可口，富含维生素C，四川特产水果。',
    stock: 200,
    unit: '斤',
    seasonal: false
  },
  {
    id: 6,
    name: '越南火龙果',
    price: 15.9,
    image: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.-BO0q3JpD3_yGiWbns64LAHaHa?rs=1&pid=ImgDetMain',
    category: '进口水果',
    description: '果肉细腻，清甜爽口，富含花青素，美容养颜。',
    stock: 90,
    unit: '个',
    seasonal: false
  },
  {
    id: 7,
    name: '福建荔枝',
    price: 22.8,
    image: 'https://img.pconline.com.cn/images/upload/upc/tx/photoblog/1107/06/c3/8247935_8247935_1309957991234_mthumb.jpg',
    category: '国产水果',
    description: '肉质晶莹剔透，香甜多汁，有"果中皇后"的美誉。',
    stock: 70,
    unit: '斤',
    seasonal: true
  },
  {
    id: 8,
    name: '墨西哥牛油果',
    price: 18.8,
    image: 'https://images.pexels.com/photos/557659/pexels-photo-557659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: '进口水果',
    description: '营养丰富，果肉细腻，被誉为"森林黄油"。',
    stock: 60,
    unit: '个',
    seasonal: false
  }
];

export const categories = [...new Set(fruits.map(fruit => fruit.category))];