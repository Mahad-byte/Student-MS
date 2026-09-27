
// const urlParam = new URLSearchParams(window.location.search);

// const courseName = urlParam.get('name') || '';
// const teachName = urlParam.get('teachName') || '';

// const titleEl = document.querySelector('.course-title');
// // const teacherEl =
// //   document.getElementById('course-teacher') ||
// //   document.getElementById('course-subtitle') ||
// //   document.querySelector('.course-teacher') ||
// //   document.querySelector('.course-subtitle');
// console.log(courseName)
// if (titleEl && courseName) {
//   titleEl.textContent = courseName;
// }

// // if (teacherEl && teachName) {
// //   teacherEl.textContent = teachName;
// // }
 let list = document.querySelector('.course-details')
        console.log(list)
        let courseName = list.querySelector('h4')
        let teacherName = list.querySelector('p')
window.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get('name');
    const teachName = params.get('teachName');
   
    if (name && teachName) {
        // let list = document.querySelector('.course-details')
        // console.log(list)
        // let courseName = list.querySelector('h4')
        // let teacherName = list.querySelector('p')
        courseName.textContent = name
        teacherName.textContent = teachName
        // document.body.innerHTML += `
        //     <h4>Course: ${decodeURIComponent(name)}</h4>
        //     <h4>Teacher: ${decodeURIComponent(teachName)}</h4>
        // `;
    } else {
        document.body.innerHTML += `<p>No course info found.</p>`;
    }
});

// Delete
let button = document.getElementById('myButton')
button.onclick = function(){
    localStorage.removeItem('teacher name')
    list.querySelector('p').textContent = ""
    console.log("deleted")
}

// Update
let inputUpdate = document.getElementById('update')
let updatebutton = document.getElementById('myButtonUpdate')
updatebutton.onclick = function(){
    localStorage.setItem('teacher name', inputUpdate.value)
    let updatedtext = localStorage.getItem('teacher name')
    list.querySelector('p').textContent = updatedtext
    console.log(updatedtext)
    console.log("updated")
}


