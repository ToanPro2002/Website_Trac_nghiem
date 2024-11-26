// src/fontawesome.js
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// import { faBook } from '@fortawesome/free-solid-svg-icons';
// import { faUser } from '@fortawesome/free-regular-svg-icons';
// import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBook, faPeopleGroup, faGear, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// Add icons to the library
// library.add(faBook, faUser, faGithub);
library.add(faBook, faPeopleGroup, faGear, faRightFromBracket)


export default FontAwesomeIcon;