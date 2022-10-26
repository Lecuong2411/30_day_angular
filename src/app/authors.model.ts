export interface Author {
  id: number;
  firstName: string;
  lastName: string;
  gender: string;
  ipAddress: string;
}

export const authors = [
  {
    id: 1,
    firstName: 'Cường',
    lastName: 'Lê',
    gender: 'Nam',
    ipAddress: '99.779.899.88',
  },
  {
    id: 2,
    firstName: 'Trang',
    lastName: 'Phí Thị',
    gender: 'Nữ',
    ipAddress: '00.988.999.56',
  },
  {
    id: 3,
    firstName: 'Tú',
    lastName: 'Trương Văn',
    gender: 'Nam',
    ipAddress: '00.988.999.34',
  },
];
