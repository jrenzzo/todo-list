(()=>{"use strict";const e=document.querySelector(".proj-popup"),c=document.querySelector(".task-popup");function t(){e.classList.add("active")}function n(){e.classList.remove("active")}function o(){console.log("a")}function s(){c.classList.add("active")}function d(){c.classList.remove("active")}!function(){const e=document.querySelector(".add-project"),c=document.querySelector(".sub-add-proj"),s=document.querySelector(".sub-cancel-proj");e.addEventListener("click",t),c.addEventListener("click",o),s.addEventListener("click",n)}(),function(){const e=document.querySelector(".add-task"),c=document.querySelector(".sub-add-task"),t=document.querySelector(".sub-cancel-task");e.addEventListener("click",s),c.addEventListener("click",(()=>{console.log("a")})),t.addEventListener("click",d)}()})();