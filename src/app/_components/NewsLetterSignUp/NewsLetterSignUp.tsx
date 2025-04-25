import React from "react";

const NewsLetterSignUp = () => {
	return (
		<div className="container flex flex-col items-center lg:pb-10 pb-5">
			<h2 className="text-center  text-2xl lg:text-4xl font-bold lg:py-10 py-5">
				Let Us Keep You Updated
			</h2>
			<div className="space-y-4 flex flex-col items-center px-4">
				<h2 className="text-center">
					Get The Latest Travel Deals and news Directly to Your Inbox!
				</h2>
				<form
					action=""
					className="lg:w-full w-[250px] flex flex-col items-center gap-2"
				>
					<input
						type="text"
						placeholder="Email"
						className="w-full px-3 py-4 bg-gray-100 rounded-sm border focus:outline-none mb-2"
					/>
					<button className="text-sm bg-blue-400 hover:bg-blue-900 hover:text-white px-5 py-3 rounded-lg font-semibold">
						Sign Up
					</button>
				</form>
			</div>
		</div>
	);
};

export default NewsLetterSignUp;
