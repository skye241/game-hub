interface Entity {
  id: number;
}
const useFindData = <T extends Entity>(
  id: number | undefined,
  listData: T[]
) => {
  if (!id) {
    return null;
  }
  return listData.find((data) => data.id === id);
};

export default useFindData;
