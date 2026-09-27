let teachers = [];
let course = [];
let regNo = [];
let student = [];

localStorage.setItem('teachers', JSON.stringify(teachers));
localStorage.setItem('course', JSON.stringify(course));
localStorage.setItem('regNo', JSON.stringify(regNo));
localStorage.setItem('student', JSON.stringify(student));

// if (teachers.length === 0) { // handle null here 

// }

console.log('before clicked')

// function createActionButton(text, btnClass, index) {
//     const button = document.createElement('button');
//     button.textContent = text;
//     button.className = `btn ${btnClass} btn-sm`;
//     button.setAttribute('data-index', index);

//     button.addEventListener('click', function () {
//         const teacherIndex = this.getAttribute('data-index');
//         const teachers = JSON.parse(localStorage.getItem('teachers')) || [];

//         switch (text) {
//             case 'Update':
//                 const newName = prompt('Update teacher name:', teachers[teacherIndex]);
//                 if (newName) {
//                     teachers[teacherIndex] = newName;
//                     localStorage.setItem('teachers', JSON.stringify(teachers));
//                     refreshTableforcreate();
//                 }
//                 break;
//             case 'Delete':
//                 if (confirm('Delete ' + teachers[teacherIndex] + '?')) {
//                     teachers.splice(teacherIndex, 1);
//                     localStorage.setItem('teachers', JSON.stringify(teachers));
//                     refreshTableforcreate();
//                 }
//                 break;
//         }
//     });

//     return button;
// }




// let createbtn = document.getElementById('myButtonCreate');


$('.myButtonCreate').click(function(){
    console.log('Clicked')
    let student = JSON.parse(localStorage.getItem('student'));
    let course = JSON.parse(localStorage.getItem('course'));
    let teachers = JSON.parse(localStorage.getItem('teachers'));
    let regNo = JSON.parse(localStorage.getItem('regNo'));

    // const getName = prompt('Please Enter Name', "")
    // console.log(getName);
    // student.push(getName);
    // console.log('Student: ', student);

    // const getReg = prompt('Please Enter Reg No', "")
    // console.log(getReg)
    // regNo.push(getReg);
    // console.log('reg no: ', regNo)

    // const getCourseName = prompt('Please Enter Course Name', "")
    // console.log(getCourseName)
    // course.push(getCourseName);
    // console.log('course: ', course)

    // const getTeacherName = prompt('Please Enter Teacher Name', "")
    // console.log(getTeacherName)
    // teachers.push(getTeacherName);
    // console.log('teacher: ', teachers)

    Swal.fire({
            title: '<i class="fas fa-add text-primary"></i> Add Student',
            html: `
            <textarea id="swal-name" class="swal2-input" placeholder="Student Name"  style="margin:10px ;"></textarea>
            <textarea id="swal-reg" class="swal2-input" placeholder="Registration No" value="" style="margin:10px;"></textarea>
            <textarea id="swal-course" class="swal2-input" placeholder="Course Name" value=""  style="margin:10px;"></textarea>
            <textarea id="swal-teacher" class="swal2-input" placeholder="Teacher Name" value=""  style="margin:10px;"></textarea>
        `,
            showCancelButton: true,
            confirmButtonText: '<i class="fas fa-save"></i> Add',
            cancelButtonText: '<i class="fas fa-times"></i> Cancel',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            // inputAttributes: {
            //     maxlength: "10",
            //     style: 'word-wrap: break-word; word-break: break-all; height: auto;'
            // },
             didOpen: () => {
                document.getElementsByClassName('swal2-input').style.wordBreak = 'break-word';
                document.getElementsByClassName('swal2-input').style.wordWrap = 'break-word';

            },
            preConfirm: () => {
                return {
                    name: document.getElementById('swal-name').value,
                    reg: document.getElementById('swal-reg').value,
                    courses: document.getElementById('swal-course').value,
                    teacher: document.getElementById('swal-teacher').value
                }
            }
        }).then((result) => {
            if (result.isConfirmed) {
                let regNoo = document.getElementById('swal-reg').value
                console.log('regNoo: ', regNoo)
                console.log('regNo: ', regNo)
                console.log('is Array?: ', typeof(regNo))
                if (Object.values(regNo).includes(regNoo)){
                    console.log('swal called?')
                    Swal.fire('Error!', 'This ID is taken');
                }
                else{
                    const { name, reg, courses, teacher } = result.value;

                student.push(name);
                regNo.push(reg);
                course.push(courses);
                teachers.push(teacher);

                localStorage.setItem('teachers', JSON.stringify(teachers));
                localStorage.setItem('course', JSON.stringify(course));
                localStorage.setItem('student', JSON.stringify(student));
                localStorage.setItem('regNo', JSON.stringify(regNo));

                refreshTableforcreate();
                Swal.fire(
                    'Added!',
                    'Student information has been Added.',
                    'success'
                );

                }
                console.log('swal NOT called!')
           
            }
        });

    localStorage.setItem('teachers', JSON.stringify(teachers));
    localStorage.setItem('course', JSON.stringify(course));
    localStorage.setItem('student', JSON.stringify(student));
    localStorage.setItem('regNo', JSON.stringify(regNo));

    refreshTableforcreate();

});




let studentCount = 0;
function refreshTableforcreate() {
    studentCount = 0;
    const table = $('.mytable');
    console.log(table)
    let student = JSON.parse(localStorage.getItem('student')) || [];
    let course = JSON.parse(localStorage.getItem('course')) || [];
    let teachers = JSON.parse(localStorage.getItem('teachers')) || [];
    let regNo = JSON.parse(localStorage.getItem('regNo')) || [];

    // let tbody = table.find('tbody');

    // if (tbody.length === 0) {
    //     tbody = $('<tbody>');
    //     console.log('even in the if', tbody);
    //     // tbody = document.createElement('tbody');
    //     table.append(tbody);
    // }

    let tbody = table.find('tbody')[0]; // Get the DOM element
    console.log('before', tbody);

    if (!tbody) {
        tbody = document.createElement('tbody'); // Create DOM element
        table[0].appendChild(tbody); // Convert table to DOM element too
        console.log('after', table, table[0], tbody)
    }
    tbody.innerHTML = '';
    let row = document.createElement('tr');

    // let tempdict = {'regNo': regNo, 'teacher': teachers, 'course': course, 'student': student}

    const tableData = [];
    const maxLength = Math.max(
        student.length,
        course.length,
        teachers.length,
        regNo.length
    );

    for (let i = 0; i < maxLength; i++) {
        tableData.push({
            student: student[i] || '',
            course: course[i] || '',
            teacher: teachers[i] || '',
            regNo: regNo[i] || ''
        });
    }
    tableData.forEach((data, index) => {
        addtotable(data.regNo, data.teacher, data.course, data.student, tbody, student, regNo, course, teachers, index);
    });



}


function addtotable(regNo, teacher, course, student, tbody, studentArr, regNoArr, courseArr, teachersArr, index) {
    studentCount++;

    const row = document.createElement('tr');

    row.innerHTML = `
                    <td>${studentCount}</td>
                    <td>${student}</td>
                    <td>${regNo}</td>
                    <td>${course}</td>
                    <td>${teacher}</td>
                    <td class="action-buttons">
                        <i class="fas fa-edit text-primary update-btn p-2" style="font-size:18px; cursor:pointer;"></i>
                        <i class="fas fa-trash delete-btn p-2" style="font-size:18px; cursor:pointer;"></i>
                    </td>
                `;

    row.querySelector('.delete-btn').addEventListener('click', function () {
        // if (confirm('Are you sure you want to delete this student?')) {
        //     // Remove from arrays
        //     studentArr.splice(index, 1);
        //     regNoArr.splice(index, 1);
        //     courseArr.splice(index, 1);
        //     teachersArr.splice(index, 1);

        //     // Save to localStorage
        //     localStorage.setItem('student', JSON.stringify(studentArr));
        //     localStorage.setItem('regNo', JSON.stringify(regNoArr));
        //     localStorage.setItem('course', JSON.stringify(courseArr));
        //     localStorage.setItem('teachers', JSON.stringify(teachersArr));


            Swal.fire({
                title: '<i class="fas fa-trash text-primary"></i> Delete Student',
                html: `
                <p> ${studentArr[index]}</p>
                `,
                showCancelButton: true,
                 confirmButtonText: '<i class="fas fa-trash"></i> Delete',
            cancelButtonText: '<i class="fas fa-times"></i> Cancel',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            preConfirm: () => {
                return {
                    name: studentArr[index],
                    reg: regNoArr[index],
                    course: courseArr[index],
                    teacher: teachersArr[index]
                }
            } 
            }).then((result) => {
                if (result.isConfirmed) {
                    studentArr.splice(index, 1);
                    regNoArr.splice(index, 1);
                    courseArr.splice(index, 1);
                    teachersArr.splice(index, 1);

                    // Save to localStorage
                    localStorage.setItem('student', JSON.stringify(studentArr));
                    localStorage.setItem('regNo', JSON.stringify(regNoArr));
                    localStorage.setItem('course', JSON.stringify(courseArr));
                    localStorage.setItem('teachers', JSON.stringify(teachersArr));

                    refreshTableforcreate();

                    Swal.fire(
                        'Deleted!',
                        'Student information has been Deleted.',
                        'success'
                    );
                }

 // Re-render the table
            refreshTableforcreate();

    })
});

    row.querySelector('.update-btn').addEventListener('click', function () {
    
        Swal.fire({
            title: '<i class="fas fa-edit text-primary"></i> Update Student',
            html: `
            <textarea id="swal-name" class="swal2-input" placeholder="Student Name" style="margin:10px;">${studentArr[index] || ''}</textarea>
            <textarea id="swal-reg" class="swal2-input" placeholder="Registration No" style="margin:10px;">${regNoArr[index] || ''}</textarea>
            <textarea id="swal-course" class="swal2-input" placeholder="Course Name" style="margin:10px;"> ${courseArr[index] || ''}</textarea>
            <textarea id="swal-teacher" class="swal2-input" placeholder="Teacher Name" style="margin:10px;">${teachersArr[index] || ''}</textarea>
        `,
            showCancelButton: true,
            confirmButtonText: '<i class="fas fa-save"></i> Update',
            cancelButtonText: '<i class="fas fa-times"></i> Cancel',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            preConfirm: () => {
                return {
                    name: document.getElementById('swal-name').value,
                    reg: document.getElementById('swal-reg').value,
                    course: document.getElementById('swal-course').value,
                    teacher: document.getElementById('swal-teacher').value
                }
            }
        }).then((result) => {
            if (result.isConfirmed) {
                const { name, reg, course, teacher } = result.value;

                studentArr[index] = name;
                regNoArr[index] = reg;
                courseArr[index] = course;
                teachersArr[index] = teacher;

                localStorage.setItem('teachers', JSON.stringify(teachersArr));
                localStorage.setItem('course', JSON.stringify(courseArr));
                localStorage.setItem('student', JSON.stringify(studentArr));
                localStorage.setItem('regNo', JSON.stringify(regNoArr));

                refreshTableforcreate();

                Swal.fire(
                    'Updated!',
                    'Student information has been updated.',
                    'success'
                );
            }
        });

        refreshTableforcreate();
    })
    tbody.append(row);
}


// createbtn.onclick = function () {
//     let student = JSON.parse(localStorage.getItem('student'));
//     let course = JSON.parse(localStorage.getItem('course'));
//     let teachers = JSON.parse(localStorage.getItem('teachers'));
//     let regNo = JSON.parse(localStorage.getItem('regNo'));

//     const getName = prompt('Please Enter Name', "")
//     console.log(getName);
//     student.push(getName);
//     console.log('Student: ', student);

//     const getReg = prompt('Please Enter Reg No', "")
//     console.log(getReg)
//     regNo.push(getReg);
//     console.log('reg no: ', regNo)

//     const getCourseName = prompt('Please Enter Course Name', "")
//     console.log(getCourseName)
//     course.push(getCourseName);
//     console.log('course: ', course)

//     const getTeacherName = prompt('Please Enter Teacher Name', "")
//     console.log(getTeacherName)
//     teachers.push(getTeacherName);
//     console.log('teacher: ', teachers)

//     localStorage.setItem('teachers', JSON.stringify(teachers));
//     localStorage.setItem('course', JSON.stringify(course));
//     localStorage.setItem('student', JSON.stringify(student));
//     localStorage.setItem('regNo', JSON.stringify(regNo));

//     refreshTableforcreate();
// }

// document.getElementsById('mytable').appendChild
// button.onclick = function(){
//      localStorage.setItem('teacher name', inputUpdate.value)
//      localStorage.getItem('teacher name') //a list
//     document.getElementsById('mytable').appendChild()
//     console.log("Created")
// }



// function refreshTable() {
//     const table = document.querySelector('.mytable');
//     let teachers = JSON.parse(localStorage.getItem('teachers')) || [];
//     console.log(teachers)
//     // Create or get tbody
//     let tbody = table.querySelector('tbody');
//     if (!tbody) {
//         tbody = document.createElement('tbody');
//         table.appendChild(tbody);
//     }

//     // Clear existing rows
//     tbody.innerHTML = '';

//     // Add a row for each teacher
//     teachers.forEach((teacher, index) => {
//         let row = document.createElement('tr');

//         // Add row number
//         let numCell = document.createElement('td');
//         numCell.textContent = index + 1;
//         row.appendChild(numCell);

//         // Add hardcoded student name
//         let studentCell = document.createElement('td');
//         studentCell.textContent = 'Student ' + (index + 1); // Hardcoded
//         row.appendChild(studentCell);

//         // Add hardcoded registration number
//         let regCell = document.createElement('td');
//         regCell.textContent = 'REG00' + (index + 1); // Hardcoded
//         row.appendChild(regCell);

//         // Add hardcoded course
//         let courseCell = document.createElement('td');
//         courseCell.textContent = 'Course ' + (index + 1); // Hardcoded
//         row.appendChild(courseCell);


//         // Add dynamic teacher name (from your input)
//         let teacherCell = document.createElement('td');
//         teacherCell.textContent = teacher;
//         row.appendChild(teacherCell);



//         // Add row to tbody
//         tbody.appendChild(row);
//     });
// }

// function refreshTableforread() {
//     const table = document.querySelector('.mytable');
//     let teachers = JSON.parse(localStorage.getItem('teachers')) || [];
//     console.log(teachers)

//     let tbody = table.querySelector('tbody');
//     if (!tbody) {
//         tbody = document.createElement('tbody');
//         table.appendChild(tbody);
//     }

//     tbody.innerHTML = '';

//     teachers.forEach((teacher, index) => {
//         let row = document.createElement('tr');

//         // Add row number
//         let numCell = document.createElement('td');
//         numCell.textContent = index + 1;
//         row.appendChild(numCell);

//         // Add hardcoded student name
//         let studentCell = document.createElement('td');
//         studentCell.textContent = 'Student ' + (index + 1);
//         row.appendChild(studentCell);

//         // Add hardcoded registration number
//         let regCell = document.createElement('td');
//         regCell.textContent = 'REG00' + (index + 1);
//         row.appendChild(regCell);

//         // Add hardcoded course
//         let courseCell = document.createElement('td');
//         courseCell.textContent = 'Course ' + (index + 1);
//         row.appendChild(courseCell);

//         // Add teacher name
//         let teacherCell = document.createElement('td');
//         teacherCell.textContent = teacher;
//         row.appendChild(teacherCell);

//         // Add action buttons (AFTER teacher cell)
//         let actionCell = document.createElement('td');

//         // Create ALL buttons including createBtn
//         const updateBtn = createActionButton('Update', 'btn-warning', index);
//         const deleteBtn = createActionButton('Delete', 'btn-danger', index);

//         actionCell.appendChild(updateBtn);
//         actionCell.appendChild(deleteBtn);

//         actionCell.style.display = 'flex';
//         actionCell.style.gap = '5px';
//         actionCell.style.flexWrap = 'wrap';

//         row.appendChild(actionCell); // Add action cell to row
//         tbody.appendChild(row);
//     });
// }