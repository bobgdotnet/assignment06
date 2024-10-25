// I got it down to one line by using a "," and skipping the [.target.elements] because its just one form with everything already in it.
window.onload = () => empForm.onsubmit = e => (e.preventDefault(), [...e].forEach(element => element.id && console.log(`${element.id}: ${element.value}`)));
//load data from the form     when submit is pressed, skip default, then  go through the array and log the data/value pair.

// 3rd attempt: I realized I could use the names AND values and not declare any variables

/* window.addEventListener('load', () => {
    document.getElementById('empForm').addEventListener('submit', e => {
        e.preventDefault();
        [...e.target.elements].forEach(element => element.id && console.log(`${element.id}: ${element.value}`));
    });
}); */


// 2nd attempt: here I created a variable for the data and looped through the values.

/* window.addEventListener('load', () => {
    const getElem = id => document.getElementById(id);
    getElem('empForm').addEventListener('submit', e => {
        e.preventDefault();
        ["id", "name", "ext", "email", "department"].forEach(id => 
            console.log(`${id}: ${getElem(id).value}`)
        );
    });
}); */


// 1st attempt: typing out everything to make sure it was all there, then I realized I could get the data from the form and just loop through it!

/*     window.addEventListener('load', () => {
        const getElem = id => document.getElementById(id);
        const form = getElem('employeeForm');

        form.addEventListener('submit', e => {
            e.preventDefault();
            const id = getElem('id').value;
            const name = getElem('name').value;
            const ext = getElem('ext').value;
            const email = getElem('email').value;
            const department = getElem('department').value;

            console.log(`Employee ID: ${id}`);
            console.log(`Name: ${name}`);
            console.log(`Extension: ${ext}`);
            console.log(`Email: ${email}`);
            console.log(`Department: ${department}`);
        });
    }); */
