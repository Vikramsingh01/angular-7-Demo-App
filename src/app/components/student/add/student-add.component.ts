/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';

// Services
import { ValidationService } from '../../../services/config/config.service';
import { StudentService } from '../../../services/student/student.service';
import { routerTransition } from '../../../services/config/config.service';

import { ToastrService } from 'ngx-toastr';

@Component({
	selector: 'app-student-add',
	templateUrl: './student-add.component.html',
	styleUrls: ['./student-add.component.css'],
	animations: [routerTransition()],
	host: { '[@routerTransition]': '' }
})

export class StudentAddComponent implements OnInit {
	// create studentAddForm of type FormGroup
	studentAddForm: FormGroup;
	index: any;

	constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute, private studentService: StudentService, private toastr: ToastrService) {

		// Check for route params
		
	}

	ngOnInit() {
		this.createOrUpdate();
		
	}

	//update student
     updateStudent(){
		const payload = this.studentAddForm.getRawValue();
		this.studentService.updateStudent(this.index, payload).subscribe(data=>{
			if (data) { 
					this.toastr.success('updated');
					this.router.navigate(['/']);
				} else {
					this.toastr.error('Failed');
				}
			});
	 }

	// Submit student details form
	doRegister() {
		// if (this.index && this.index !== null && this.index !== undefined) {
		// 	this.studentAddForm.value.id = this.index;
		// } else {
		// 	this.index = null;
		// }
		const payload = this.studentAddForm.getRawValue();
	 this.studentService.doRegisterStudent( payload).subscribe(data=>{
		if (data) { 
				this.toastr.success('Success');
				this.router.navigate(['/']);
			} else {
				this.toastr.error('Failed');
			}
		});
		
	}

	// If this is update form, get user details and update form
	// getStudentDetails(index: number) {
	// 	const studentDetail = this.studentService.getStudentDetails(index);
	// 	this.createForm(studentDetail);
	// }

	// If this is update request then auto fill form
	createForm() {
		
			this.studentAddForm = this.formBuilder.group({
				firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
				lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
				phone: [null, [Validators.required]],
				email: [null]
			});
		
		
	}

	createOrUpdate(){
		this.createForm();
		this.route.params.subscribe(params => {
			this.index = params['id'];
			if(this.index){

				this.studentService.getStudentDetails(this.index).subscribe(data=>{
					this.studentAddForm.get("email").disable();
					this.studentAddForm.patchValue(data);
				}
	
				)
			}
			// check if ID exists in route & call update or add methods accordingly
		});

	}

}

/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */