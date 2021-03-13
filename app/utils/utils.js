const getRandomImg = (imagesUrl) => {
  return [...imagesUrl].sort(() => Math.random() - 0.5);
};

export { getRandomImg };
