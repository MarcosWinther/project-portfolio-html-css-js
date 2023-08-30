async function fetchProfileData() {
   const url = 'https://github.com/MarcosWinther/project-portfolio-html-css-js/blob/main/data/profile.json';
   const fetching = await fetch(url);
   return await fetching.json();
}