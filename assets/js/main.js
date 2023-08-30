function updateProfileInfo(profileData) {
   const photo = document.getElementById('profile.photo');
   photo.src = profileData.photo;
   photo.alt = profileData.name;

   const name = document.getElementById('profile.name');
   name.innerText = profileData.name;

   const job = document.getElementById('profile.job');
   job.innerText = profileData.job;

   const location = document.getElementById('profile.location');
   location.innerText = profileData.location;

   const phone = document.getElementById('profile.phone');
   phone.innerText = profileData.phone;
   phone.href = `tel:${profileData.phone}`;

   const email = document.getElementById('profile.email');
   email.innerText = profileData.email;
   email.href = `mailto:${profileData.email}`;
}

function updateProfileSoftSkills(profileData) {
   const softSkills = document.getElementById('profile.skills.softSkills');

   softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('');
}

function updateProfileHardSkills(profileData) {
   const hardSkills = document.getElementById('profile.skills.hardSkills');

   hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('');
}

function updateProfileLanguages(profileData) {
   const languages = document.getElementById('profile.languages');

   languages.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join('');
}

function updateProfilePortfolio(profileData) {
   const portfolio = document.getElementById('profile.portfolio');

   portfolio.innerHTML = profileData.portfolio.map(project => `
      <li>
         <h3 ${project.github ? 'class="github"' : ''}>${project.name}</h3>
         <span>
            <strong>Link do GitHub:</strong>
            <a href="${project.url}" target="_blank">${project.url}</a>
         </span>
         <span>
            <strong>Link do certificado:</strong>
            <a href="${project.certificate}" target="_blank">${project.certificate}</a>
         </span>
      </li>
   `).join('');
}

function updateProfileProfessionalExperience(profileData) {
   const professionalExperience = document.getElementById('profile.professionalExperience');

   professionalExperience.innerHTML = profileData.professionalExperience.map(experience => `
      <li>
         <h3 class="title">
            ${experience.name}
         </h3>
         <p class="period">${experience.period}</p>
         <p class="detail-experience">
            ${experience.description}
         </p>
      </li>
   `).join('');
}



(async () => {
   const profileData = await fetchProfileData();
   updateProfileInfo(profileData);
   updateProfileSoftSkills(profileData);
   updateProfileHardSkills(profileData);
   updateProfileLanguages(profileData);
   updateProfilePortfolio(profileData);
   updateProfileProfessionalExperience(profileData);
})()