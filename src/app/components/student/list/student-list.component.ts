/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */

import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

// Services
import { StudentService } from '../../../services/student/student.service';
import { routerTransition } from '../../../services/config/config.service';

@Component({
	selector: 'app-student-list',
	templateUrl: './student-list.component.html',
	styleUrls: ['./student-list.component.css'],
	animations: [routerTransition()],
	host: { '[@routerTransition]': '' }
})

export class StudentListComponent implements OnInit {
	studentList: any;
	studentListData: any;
	constructor(private studentService: StudentService, private toastr: ToastrService) { }
	// Call student list function on page load
	ngOnInit() {
		console.log("this component called")
		this.getStudentList();
	}

	// Get student list from services
	getStudentList() {
		this.studentService.getAllStudents().subscribe(data=>{
			this.success(data); 
		})
		
	}

	// Get student list success
	success(data) {
		this.studentListData = data;
		for (let i = 0; i < this.studentListData.length; i++) {
			this.studentListData[i].name = this.studentListData[i].firstName + ' ' + this.studentListData[i].lastName;
		}
	}

	// Delete a student with its index
	deleteStudent(index: number) {
		// get confirm box for confirmation
		const r = confirm('Are you sure?');
		if (r === true) {
			this.studentService.deleteStudent(index).subscribe(data=>{
				if (data) {
					this.toastr.success('Success', 'Student Deleted');
				}
				this.getStudentList();
			},
			)
			
		}
	}
}
/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */
