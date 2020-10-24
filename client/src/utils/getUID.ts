export const getUID = (): number => {
  const uid = localStorage.getItem("uid");
  if (uid == null) {
    return -1;
  }
  return parseInt(uid);
};
