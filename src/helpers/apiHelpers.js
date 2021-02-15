// const url = "https://api.coincap.io/v2";
// export const getData = async () => {
//   try {
//     const res = await fetch(`${url}/assets?limit=20`);
//     const { data } = await res.json();
//     return data;
//     // Filtrar solo los datos que uso...
//   } catch (error) {
//     return [];
//   }
// };

// export const getDetail = async (coin = "bitcoin") => {
//   try {
//     const res = await fetch(`${url}/assets/${coin}`);
//     const { data } = await res.json();
//     console.log("Detalle:", data);
//     return data;
//     // Filtrar solo los datos que uso...
//   } catch (error) {
//     return [];
//   }
// };

// export const getHistory = async (coin = "bitcoin") => {
//   const now = new Date();
//   const end = now.getTime();
//   now.setDate(now.getDate() - 1);
//   const start = now.getTime();
//   try {
//     const his = await fetch(
//       `/assets/${coin}/history?interval=h1&start=${start}&end=${end}`
//     );
//     const { data } = await his.json();
//     console.log("History:", data);
//     return data;
//     // Filtrar solo los datos que uso...
//   } catch (error) {
//     return [];
//   }
// };

const url = "https://api.coincap.io/v2";

export const getAssets = () => {
  return fetch(`${url}/assets?limit=20`)
    .then((res) => res.json())
    .then((res) => res.data);
};

export const getAsset = (coin) => {
  return fetch(`${url}/assets/${coin}`)
    .then((res) => res.json())
    .then((res) => res.data);
};

export const getAssetHistory = (coin) => {
  const now = new Date();
  const end = now.getTime();
  now.setDate(now.getDate() - 1);
  const start = now.getTime();

  return fetch(
    `${url}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`
  )
    .then((res) => res.json())
    .then((res) => res.data);
};

export const getMarkets = (coin) => {
  return fetch(`${url}/assets/${coin}/markets?limit=5`)
    .then((res) => res.json())
    .then((res) => res.data);
};

export const getExchange = (id) => {
  return fetch(`${url}/exchanges/${id}`)
    .then((res) => res.json())
    .then((res) => res.data);
};