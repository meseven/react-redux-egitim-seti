import { useFormik } from "formik";

import validationSchema from "./validations";

function Signup() {
	const { handleSubmit, handleChange, values } = useFormik({
		initialValues: {
			email: "",
			password: "",
			passwordConfirm: "",
		},
		onSubmit: (values) => {
			console.log(values);
		},
		validationSchema,
	});

	return (
		<div>
			<h1>Sign Up</h1>
			<form onSubmit={handleSubmit}>
				<label>Email</label>
				<input name="email" value={values.email} onChange={handleChange} />

				<br />
				<br />

				<label>Password</label>
				<input
					name="password"
					value={values.password}
					onChange={handleChange}
				/>

				<br />
				<br />

				<label>Confirm Password</label>
				<input
					name="passwordConfirm"
					value={values.passwordConfirm}
					onChange={handleChange}
				/>

				<br />
				<br />

				<button type="submit">Submit</button>

				<br />
				<br />

				<code>{JSON.stringify(values)}</code>
			</form>
		</div>
	);
}

export default Signup;
