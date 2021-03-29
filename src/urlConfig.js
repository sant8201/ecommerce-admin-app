//const baseUrl = "pragas-rest-server.herokuapp.com";
//const baseUrl = "http://localhost:2000";

export const api = `pragas-rest-server.herokuapp.com/api`;

export const generatePublicUrl = (fileName) => {
  return `${baseUrl}/public/${fileName}`;
};
