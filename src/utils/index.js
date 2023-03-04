/**
 * returns an array of cats at 200 lbs from ninja API  based on the provided offset and setting the data with the provided callback.
 * @param {Function} callback the function to run when the json data is retrieved. This callback should be a setState() hook from React.
 * @param {int} offSet the number you would like to start at when getting the list of cats.
 * @returns {JSON} array of cat objects.
 */
export async function getImages(offset, callback) {
  try {
    const response = await fetch(
      `https://api.api-ninjas.com/v1/cats?max_weight=200&offset=${offset}`,
      {
        method: "GET",
        headers: {
          "X-Api-Key": `${process.env.REACT_APP_API_NINJA}`,
        },
        contentType: "application/json",
      }
    );
    const catJSON = await response.json();

    callback(catJSON);
  } catch (err) {
    console.error(err);
  }
}
