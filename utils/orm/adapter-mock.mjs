export function adapterMock(driver) {
  const orm = (query) => {
    return new Promise((resolve, reject) => {
      let data = orm._driver;
      for (const method in query) {
        if (Object.hasOwn(data, method)) {
          data = data[method](query[method]);
        }
      }
      if (orm._logged) orm._log.push(data.toString());
      resolve(data);
    });
  };

  orm._logged = false;
  orm._log = [];
  orm._driver = driver;
  orm._query = {};

  orm.setDriver = (driver) => {
    orm._driver = driver;
  };

  orm.getDriver = () => {
    return orm._driver;
  };

  orm.startLog = () => {
    orm._log = [];
    orm._logged = true;
  };

  orm.stopLog = () => {
    orm._log = [];
    orm._logged = false;
  };

  orm.log = () => {
    return orm._log;
  };
  return orm;
}
