console.log('This is autumn season');
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'autumn' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'autumn';
  }
};
