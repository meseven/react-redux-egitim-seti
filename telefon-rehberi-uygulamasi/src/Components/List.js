import React from 'react';
import './List.css';

const List = () => {
	return (
		<div className={"listArea"}>
			<input name={"filter"} id={"filter"} placeholder={"Filter by name or phone"}/>
			<ul className={"list"}>
				<li>
					<span className={"name"}>Mehmet Seven</span>
					<span className={"phone"}>1111111111</span>
					<span className={"clearfix"}></span>
				</li>
				<li>
					<span className={"name"}>Ercan Yıldırım</span>
					<span className={"phone"}>33333</span>
					<span className={"clearfix"}></span>
				</li>
				<li>
					<span className={"name"}>Tayfun Erbilen</span>
					<span className={"phone"}>22222222</span>
					<span className={"clearfix"}></span>
				</li>
			</ul>
		</div>
	);
};

export default List;
