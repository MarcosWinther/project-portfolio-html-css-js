async function fetchProfileData() {
   const jsonData = '../../dataProfile/profile.json';
   /*const fetching = await fetch(jsonData);*/
   return await fetching.json(jsonData);
}