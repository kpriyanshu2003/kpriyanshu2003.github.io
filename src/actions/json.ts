"use server";

export const getJSON = async (id: string) => {
  try {
    if (!id) throw new Error("id is required");
    return fetch(`https://api.npoint.io/${id}`)
      .then((response) => response.json())
      .then((result) => result)
      .catch((e) => {
        throw new Error(e);
      });
  } catch (e) {
    console.error(e);
    return null;
  }
};
