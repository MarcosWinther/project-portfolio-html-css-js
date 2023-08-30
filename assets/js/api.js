async function fetchProfileData() {
   const jsonData = '../../data/profile.json';
   const fetching = await fetch(jsonData);
   return await fetching.json();
}