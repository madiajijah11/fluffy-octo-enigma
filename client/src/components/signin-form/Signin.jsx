import { useRef, useState, useEffect } from "react";
import fetcher from "../../lib/axiosInstance";
import { GrFormView, GrFormViewHide } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

export default function Signin() {
	const navigate = useNavigate();

	const [isSuccess, setIsSuccess] = useState(false);
	const [isError, setIsError] = useState(false);
	const [showPassword, setShowPassword] = useState(false);

	const emailRef = useRef();
	const passwordRef = useRef();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const email = emailRef.current.value;
		const password = passwordRef.current.value;
		try {
			const { data } = await fetcher.post("/auth/login", {
				email,
				password,
			});
			sessionStorage.setItem("user", JSON.stringify(data));
			
			setIsSuccess(true);
			setIsError(false);
			navigate("/dashboard");
		} catch (error) {
			setIsSuccess(false);
			setIsError(true);
			emailRef.current.value = "";
			passwordRef.current.value = "";
		}
	};

	const users = sessionStorage.getItem("user");

	useEffect(() => {
		if (users) {
			navigate("/dashboard");
		}
	}, []);

	return (
		<div className="hero min-h-screen bg-base-200">
			<div className="hero-content flex-col lg:flex-row-reverse">
				<div className="text-center lg:text-left">
					<h1 className="text-5xl font-bold">Login now!</h1>
					<p className="py-6">
						Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
						exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
					</p>
				</div>
				<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
					<form className="card-body" onSubmit={handleSubmit}>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Email</span>
							</label>
							<input
								ref={emailRef}
								required
								type="email"
								name="email"
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
						<label className="label">
							<a href="#" className="label-text-alt link link-hover">
								Forgot password?
							</a>
						</label>
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
						<div className="form-control mt-6">
							<button className="btn btn-primary">Login</button>
							<label className="label">
								<a href="/signup" className="label-text-alt link link-hover">
									Don't have an account?
								</a>
							</label>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
