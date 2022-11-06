import { defaultImage } from "constants/global";
import React, { useState } from "react";

const DashboardSearch = () => {
	const [showSearch, setShowSearch] = useState(false)
	return (
		<div className="ml-[50px] relative z-50">
			<div className="bg-white rounded-full shadow-[10px_10px_20px_rgba(218, 213, 213, 0.15)] p-2 w-full max-w-[458px] flex items-center">
				<div className="flex-1">
					<input
						type="text"
						placeholder="Do fundrise now"
						className="bg-transparent text-sm placeholder:text-text4 text-text1 pl-5"
					/>
				</div>
				<button className="cursor-pointer outline-none bg-primary rounded-3xl flex items-center justify-center w-[72px] h-[40px]">
					<svg
						width="18"
						height="18"
						viewBox="0 0 18 18"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M16.9702 16.5L13.2202 12.75M15.0952 8.0625C15.0952 8.9243 14.9255 9.77766 14.5957 10.5739C14.2659 11.3701 13.7825 12.0935 13.1731 12.7029C12.5637 13.3123 11.8403 13.7957 11.0441 14.1255C10.2479 14.4553 9.39451 14.625 8.53271 14.625C7.67092 14.625 6.81755 14.4553 6.02135 14.1255C5.22516 13.7957 4.50171 13.3123 3.89233 12.7029C3.28294 12.0935 2.79955 11.3701 2.46976 10.5739C2.13996 9.77766 1.97021 8.9243 1.97021 8.0625C1.97021 6.32202 2.66162 4.65282 3.89233 3.42211C5.12303 2.1914 6.79223 1.5 8.53271 1.5C10.2732 1.5 11.9424 2.1914 13.1731 3.42211C14.4038 4.65282 15.0952 6.32202 15.0952 8.0625Z"
							stroke="white"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</button>
			</div>
			{showSearch && (
				<div className="search-result w-full lg:w-[843px] bg-white top-full left-0 absolute z-50 translate-y-5 rounded-3xl">
					<div className="flex items-center justify-between p-3 bg-gray-soft rounded-3xl">
						<h4 className="font-medium text-sm pl-4 underline">
							See all 10,124 fundraisier
						</h4>
						<button className="flex items-center justify-center w-[72px] h-[50px] bg-error bg-opacity-20 text-error rounded-xl">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div>
					<div className="p-6">
						<div className="flex flex-col gap-y-5 mb-6">
							<SearchItem></SearchItem>
							<SearchItem></SearchItem>
							<SearchItem></SearchItem>
							<SearchItem></SearchItem>
						</div>
						<h3 className="text-sm font-semibold mb-4">
							Related searchs
						</h3>
						<div className="flex flex-col gap-y-3 text-sm text-text2">
							<p>
								<strong>Education</strong> fund
							</p>
							<p>Schoolarship fund</p>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
function SearchItem() {
	return (
		<div className="flex items-center gap-x-5">
			<img
				src={defaultImage}
				className="'w-[50px] h-[50px] rounded-xl object-cover"
				alt=""
			/>
			<div className="flex-1 text-sm">
				<h3 className="mb-1">
					<strong>Education</strong> fund for Dungham Family
				</h3>
				<p className="text-text3">by Quang Ngyuen</p>
			</div>
		</div>
	);
}
export default DashboardSearch;
