console.log("Ran JS successfully :)")

// alert("Leaving soon :/")


localStorage.setItem("course name", "DSA")
// localStorage.setItem("teacher name", "Mahad")


let courseName = localStorage.getItem("course name")
let teacherName = localStorage.getItem("teacher name")

console.log(courseName)
console.log(teacherName)

$('.card-body').click(function (event) {
    // event.preventDefault();
    console.log("clicked this: ", this);
    $(this).hide();
    const infoContainer = $(this).children();
    console.log(infoContainer)


    if (!infoContainer) return;

     const $cardBody = $(this).closest('.card-body');
    const courseName = $cardBody.find('h5').text();
    // //const nameEl = $('h5');
    console.log(courseName);
    // const subEl = teacherName;


    // const nameEl = infoContainer.querySelector('h5');
    // const subEl = teacherName;

    const name = courseName;
    //const teachName = subEl ? subEl.textContent.trim() : '';

    console.log("Course Name:", name);
    console.log("Teacher Name:", teacherName);

    // FIX: Define url before using it
    const url = `courses.html?teachName=${encodeURIComponent(teacherName)}&name=${encodeURIComponent(name)}`;
    console.log("Redirecting to:", url);


    // Uncomment this line to actually redirect
    window.location.href = url;
});


// document.querySelectorAll('.course-card').forEach(card => {
//             card.addEventListener('click', function() {

                
//                 const infoContainer = this.querySelector('.card-body');
               
                
//                 if (!infoContainer) return;

               
//                 const nameEl = infoContainer.querySelector('h5');
//                 const subEl = teacherName;

//                 const name = nameEl ? nameEl.textContent.trim() : '';
//                 //const teachName = subEl ? subEl.textContent.trim() : '';
                
//                 console.log("Course Name:", name);
//                 console.log("Teacher Name:", teacherName);
                
//                 // FIX: Define url before using it
//                 const url = `courses.html?teachName=${encodeURIComponent(teacherName)}&name=${encodeURIComponent(name)}`;
//                 console.log("Redirecting to:", url);
                
                
//                 // Uncomment this line to actually redirect
//                 window.location.href = url;
//             });
//         });

    