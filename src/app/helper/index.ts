export const sortDataByDate = (datas: any[], order: 'asc' | 'dsc' = 'asc'): any[] => {
  return datas.sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return order === 'asc' ? dateA - dateB : dateB - dateA;
  });
};