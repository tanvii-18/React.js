import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

let initialValues = {
  studentName: "",
  email: "",
  password: "",
  grade: "",
  gender: "",
};

function StudentForm() {
  
  let studentScheme = yup.object({
    studentName: yup
      .string()
      .min(5, "name must be at least 5 characters long!")
      .required(),
    email: yup.string().email().required("Must be Valid Email..."),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .matches(/[a-z]/, "Must contain at least one lowercase letter")
      .matches(/[A-Z]/, "Must contain at least one uppercase letter")
      .matches(/[0-9]/, "Must contain at least one number")
      .required("Password is required"),
    gender: yup.string().required("grade is required !"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema: studentScheme,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });
  // console.log(formik);

  return (
    <div>
      <form action="" onSubmit={formik.handleSubmit}>
        <h2>Student Form</h2>

        <label htmlFor="name">name : </label>
        <input
          type="text"
          name="studentName"
          onBlur={formik.handleBlur}
          value={formik.values.studentName}
          onChange={formik.handleChange}
        />
        {formik.touched.studentName && formik.errors.studentName && (
          <div style={{ color: "#ff4d4f" }}>{formik.errors.studentName}</div>
        )}
        <br />

        <label htmlFor="email">Email : </label>
        <input
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.touched.email && formik.errors.email && (
          <div style={{ color: "#ff4d4f" }}>{formik.errors.email}</div>
        )}
        <br />

        <label htmlFor="password">Password : </label>
        <input
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        {formik.touched.password && formik.errors.password && (
          <div style={{ color: "#ff4d4f" }}>{formik.errors.password}</div>
        )}
        <br />

        <label htmlFor="">select grade : </label>
        <select
          name="grade"
          id="grade"
          value={formik.values.grade}
          onChange={formik.handleChange}
        >
          <option value="Freshman">Freshman</option>
          <option value="Sophomore">Sophomore</option>
          <option value="Junior">Junior</option>
          <option value="Senior">Senior</option>
        </select>
        {formik.touched.grade && formik.errors.grade && (
          <div style={{ color: "#ff4d4f" }}>{formik.errors.grade}</div>
        )}

        <div className="radio">
          <span>Gender :</span>

          <label htmlFor="gender-male" className="gender-option">
            {" "}
            <input
              type="radio"
              name="gender"
              id="gender-male"
              value="male"
              checked={formik.values.gender == "male"}
              onChange={formik.handleChange}
            />{" "}
            Male
          </label>

          <label htmlFor="gender-female" className="gender-option">
            <input
              type="radio"
              name="gender"
              id="gender-female"
              value="female"
              checked={formik.values.gender == "female"}
              onChange={formik.handleChange}
            />{" "}
            Female
          </label>

          <label htmlFor="gender-other" className="gender-option">
            {" "}
            <input
              type="radio"
              name="gender"
              id="gender-other"
              value="other"
              checked={formik.values.gender == "other"}
              onChange={formik.handleChange}
            />{" "}
            Other
          </label>
        </div>
        {formik.touched.gender && formik.errors.gender && (
          <div style={{ color: "#ff4d4f" }}>{formik.errors.gender}</div>
        )}
        <br />

        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default StudentForm;
