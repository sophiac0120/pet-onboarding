function Employee(fullName, position, serialNum){
    this.fullName = fullName;
    this.position = position;
    this.serialNum = serialNum;
}

function UI(){

}

UI.prototype.addEmployeeToList = function(employee){
    const employeeList = document.getElementById('employee-list');
    const row = document.createElement('tr');
    
    row.innerHTML = `
        <td>${employee.fullName}</td>
        <td>${employee.position}</td>
        <td>${employee.serialNum}</td>
        <td><a href = '#'><i class="fas fa-user-times delete"></i></a></td>
    `;

    employeeList.appendChild(row);
}

UI.prototype.clearFields = function(){
    document.getElementById('fullName').value = '';
    document.getElementById('position').value = '';
    document.getElementById('serialNum').value = '';
}

UI.prototype.showAlert = function(msg, status){
    const errorDiv = document.createElement('div');
    errorDiv.className = `alert ${status}`;
    errorDiv.appendChild(document.createTextNode(msg));
    const container = document.querySelector('.container');
    const form = document.querySelector('#employee-form');
    container.insertBefore(errorDiv, form);

    setTimeout(function(){
        document.querySelector('.alert').remove(); 
    }, 3000);
}

UI.prototype.deleteEmployee= function(target) {

    if (target.className === 'fas fa-user-times delete'){
        target.parentElement.parentElement.parentElement.remove(); 
    }
}

document.getElementById('employee-form').addEventListener('submit', function(e){

    const fullName = document.getElementById('fullName').value,
          position = document.getElementById('position').value,
          serialNumber = document.getElementById('serialNum').value;

    const employee = new Employee(fullName, position, serialNumber);
    const ui = new UI();

    if (fullName === '' || position === '' || serialNumber === ''){
        ui.showAlert('Please fill in all fields.', 'error');
    }
    else {
    e.preventDefault();
    ui.addEmployeeToList(employee);
    ui.showAlert('Employee Successfully Added', 'success');

    ui.clearFields();
    }
});

document.getElementById('employee-list').addEventListener('click', function(e){
    const ui = new UI();
    ui.deleteEmployee(e.target);
    ui.showAlert('Book Removed!', 'success');
    e.preventDefault();
});