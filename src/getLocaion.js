export const getLocation = () => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (res) => {
          resolve({
            latitude: res.coords.latitude,
            longitude: res.coords.longitude,
          });
        },
        () => {
          reject("获取当前地理位置失败，请刷新再试!");
        }
      );
    } else {
      reject("您的浏览器不支持地理位置!");
    }
  });
};
