/* The function we need to grab the information from the JSON file */
/* We used axios specifically to do this, in the same manner as mwicks' function */
export function getInfos() {
  const axios = window.axios;
  return axios.get("./services/user.json").then((response) => {
    return response.data.data;
  });
}
