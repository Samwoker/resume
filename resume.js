// Assuming the JSON is stored in a variable called `resumeData`
const resumeData = {
    "basics": {
      "name": "Samuel Birhanu",
      "email": "samwoker112@gmail.com",
      "phone": "+251943603973",
      "location": "Addis Ababa"
    },
    "sections": {
      "summary": {
        "content": "Passionate Backend Developer with experience in Node.js, RESTful APIs, and scalable systems."
      },
      "skills": {
        "items": [
          "Node.js", "Express.js", "MongoDB", "RESTful API Development", "JWT", "OAuth", "Stripe", "Swagger", "Git"
        ]
      },
      "education": {
        "items": [
          {
            "institution": "Addis Ababa Science and Technology University",
            "studyType": "Software Engineering",
            "score": "3.62",
            "date": "Feb 2023 - present",
            "url": "https://www.aastu.edu.et/"
          }
        ]
      },
      "projects": {
        "items": [
          {
            "name": "KidameGebeya",
            "description": "E-commerce API with payment gateway integration."
          },
          {
            "name": "DevTinder",
            "description": "A developer matching platform built with Node.js."
          }
        ]
      },
      "interests": {
        "items": [
          "Open-source contribution", "Machine Learning", "Deep Learning", "Football", "Music"
        ]
      },
      "languages": {
        "items": [
          "Native in Amharic", "Fluent in English"
        ]
      },
      "profiles": {
        "items": [
          {
            "network": "GitHub",
            "username": "Samwoker",
            "url": "https://github.com/Samwoker"
          }
        ]
      }
    }
  };
  
  // Populate basic information
  document.getElementById('name').textContent = resumeData.basics.name;
  document.getElementById('contact').textContent = `Email: ${resumeData.basics.email} | Phone: ${resumeData.basics.phone} | Location: ${resumeData.basics.location}`;
  
  // Populate summary
  document.getElementById('summary').querySelector('p').textContent = resumeData.sections.summary.content;
  
  // Populate skills
  const skillsList = document.getElementById('skills').querySelector('ul');
  resumeData.sections.skills.items.forEach(skill => {
      const li = document.createElement('li');
      li.textContent = skill;
      skillsList.appendChild(li);
  });
  
  // Populate education
  const educationList = document.getElementById('education').querySelector('ul');
  resumeData.sections.education.items.forEach(edu => {
      const li = document.createElement('li');
      li.innerHTML = `${edu.institution}, ${edu.studyType}, Score: ${edu.score} (${edu.date}) <a href="${edu.url}">More Info</a>`;
      educationList.appendChild(li);
  });
  
  // Populate projects
  const projectsList = document.getElementById('projects').querySelector('ul');
  resumeData.sections.projects.items.forEach(project => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${project.name}:</strong> ${project.description}`;
      projectsList.appendChild(li);
  });
  
  // Populate interests
  const interestsList = document.getElementById('interests').querySelector('ul');
  resumeData.sections.interests.items.forEach(interest => {
      const li = document.createElement('li');
      li.textContent = interest;
      interestsList.appendChild(li);
  });
  
  // Populate languages
  const languagesList = document.getElementById('languages').querySelector('ul');
  resumeData.sections.languages.items.forEach(language => {
      const li = document.createElement('li');
      li.textContent = language;
      languagesList.appendChild(li);
  });
  
  // Populate profiles
  const profilesList = document.getElementById('profiles').querySelector('ul');
  resumeData.sections.profiles.items.forEach(profile => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="${profile.url}" target="_blank">${profile.network}: ${profile.username}</a>`;
      profilesList.appendChild(li);
  });
  