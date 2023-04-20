// import { useState, useEffect } from "react";
// import { fetchServer } from "../services";
// import { addIds } from "../utils";

// const useFetchServer = (method = 'GET') => {
//   const [response, setResponse] = useState([]);
//   const [error, setError] = useState < any > (null);

//   const fetchTiles = async (newTileSet, newRadius radius) => {
//     try {
//       const serverResponseData = await fetchServer(newTileSet, newRadius + 1);
//       setResponse([...addIds(serverResponseData), ...newTileSet]);
//     } catch (error) {
//       // setError(error);
//     }
//   };

//   useEffect(() => {
//     fetchTiles();
//   }, []);

//   return [response, fetchTiles, error];
// };

// export default useFetchServer;
