/* eslint-disable react/prop-types */
import "./list.css";
import List from "./List";

export default function PostList({ lists, setList }) {
	console.log(lists)

	return (
		<ul className="postList mw">
			{lists.map((list, i) => <List key={i} index={i} list={list} setList={setList} />)}
		</ul>
	);
}
