/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class StudentService {

  constructor(private readonly http: HttpClient) { }

  // Get all students list via API or any data storage
  getAllStudents() {

    return this.http.get("http://localhost:8080/api/v1/users")
    // let studentList: any;
    // if (localStorage.getItem('students') && localStorage.getItem('students') !== '') {
    //   studentList = {
    //     code: 200,
    //     message: 'Students List Fetched Successfully',
    //     data: JSON.parse(localStorage.getItem('students'))
    //   };
    // } else {
    //   studentList = {
    //     code: 200,
    //     message: 'Students List Fetched Successfully',
    //     data: JSON.parse(localStorage.getItem('students'))
    //   };
    // }
    // return studentList;
  }

  updateStudent(id, data){
    return this.http.put("http://localhost:8080/api/v1/users/"+id, data);
  }
  doRegisterStudent(data) {
    return this.http.post("http://localhost:8080/api/v1/users", data)
    // const studentList = JSON.parse(localStorage.getItem('students'));
    // let returnData;
    // console.log('index', index);
    // if (index != null) {
    //   for (let i = 0; i < studentList.length; i++) {
    //     if (index !== i && studentList[i].email === data.email) {
    //       returnData = {
    //         code: 503,
    //         message: 'Email Address Already In Use',
    //         data: null
    //       };
    //       return returnData;
    //     }
    //   }

    //   studentList[index] = data;
    //   localStorage.setItem('students', JSON.stringify(studentList));
    //   returnData = {
    //     code: 200,
    //     message: 'Student Successfully Updated',
    //     data: JSON.parse(localStorage.getItem('students'))
    //   };
    // } else {
    //   data.id = this.generateRandomID();
    //   for (let i = 0; i < studentList.length; i++) {
    //     if (studentList[i].email === data.email) {
    //       returnData = {
    //         code: 503,
    //         message: 'Email Address Already In Use',
    //         data: null
    //       };
    //       return returnData;
    //     }
    //   }
    //   studentList.unshift(data);

    //   localStorage.setItem('students', JSON.stringify(studentList));

    //   returnData = {
    //     code: 200,
    //     message: 'Student Successfully Added',
    //     data: JSON.parse(localStorage.getItem('students'))
    //   };
    // }
    // return returnData;
  }

  deleteStudent(index: number) {
    return this.http.delete("http://localhost:8080/api/v1/user/"+index);
    // const studentList = JSON.parse(localStorage.getItem('students'));

    // studentList.splice(index, 1);

    // localStorage.setItem('students', JSON.stringify(studentList));

    // const returnData = {
    //   code: 200,
    //   message: 'Student Successfully Deleted',
    //   data: JSON.parse(localStorage.getItem('students'))
    // };

    // return returnData;
  }



  getStudentDetails(index: number) {
   return this.http.get("http://localhost:8080/api/v1/users/"+index)
  }


  generateRandomID() {
    const x = Math.floor((Math.random() * Math.random() * 9999));
    return x;
  }

}
/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */
