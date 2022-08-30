import fetcher from "../../lib/axiosInstance";
import { useState, useRef, useEffect } from "react";
import { GrFormView, GrFormViewHide } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

export default function Signup() {
	const [isSuccess, setIsSuccess] = useState(false);
	const [isError, setIsError] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	const nameRef = useRef();
	const emailRef = useRef();
	const passwordRef = useRef();
	const confirmPasswordRef = useRef();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const name = nameRef.current.value;
		const email = emailRef.current.value;
		const password = passwordRef.current.value;
		const confirmPassword = confirmPasswordRef.current.value;
		if (password !== confirmPassword) {
			setIsError(true);
			return;
		}
		try {
			await fetcher.post("/register", {
				name,
				email,
				password,
				confirmPassword,
			});
			setIsSuccess(true);
			setIsError(false);

			nameRef.current.value = "";
			emailRef.current.value = "";
			passwordRef.current.value = "";
			confirmPasswordRef.current.value = "";
		} catch (error) {
			setIsSuccess(false);
			setIsError(true);
		}
	};

	const users = sessionStorage.getItem("token");
	const navigate = useNavigate();

	useEffect(() => {
		if (users) {
			navigate("/dashboard");
		}
	}, [users]);

	return (
		<div className="hero min-h-screen bg-base-200">
			<div className="hero-content flex-col lg:flex-row-reverse">
				<div className="text-center lg:text-left">
					<h1 className="text-5xl font-bold">Register now!</h1>
					<p className="py-6">
						Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
						exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
					</p>
				</div>
				<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
					<form className="card-body" onSubmit={handleSubmit}>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Full Name</span>
							</label>
							<input
								ref={nameRef}
								required
								name="name"
								type="text"
								placeholder="name"
								className="input input-bordered"
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Email</span>
							</label>
							<input
								ref={emailRef}
								required
								name="email"
								type="email"
								placeholder="email"
								className="input input-bordered"
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Password</span>
							</label>
							<div className="input-group">
								<input
									ref={passwordRef}
									required
									name="password"
									type={showPassword ? "text" : "password"}
									placeholder="password"
									className="input input-bordered"
								/>
								<button
									className="btn glass"
									type="button"
									onClick={() =>
										setShowPassword((showPassword1) => !showPassword1)
									}>
									{showPassword ? <GrFormView /> : <GrFormViewHide />}
								</button>
							</div>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Confirm Password</span>
							</label>
							<div className="input-group">
								<input
									ref={confirmPasswordRef}
									required
									name="confirmPassword"
									type={showConfirmPassword ? "text" : "password"}
									placeholder="confirm password"
									className="input input-bordered"
								/>
								<button
									className="btn glass"
									type="button"
									onClick={() =>
										setShowConfirmPassword((showPassword1) => !showPassword1)
									}>
									{showPassword ? <GrFormView /> : <GrFormViewHide />}
								</button>
							</div>
						</div>
						{isSuccess && (
							<span className="text-emerald-600">
								You have succesfully registered.
								<br />
								Go to sigin page to login.
							</span>
						)}
						{isError && (
							<span className="text-rose-600">
								Something went wrong.
								<br />
								Please try to register again.
							</span>
						)}
						<div className="form-control mt-2">
							<button className="btn btn-primary" type="submit">
								Register
							</button>
							<label className="label">
								<a href="/signin" className="label-text-alt link link-hover">
									Already have an account?
								</a>
							</label>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
