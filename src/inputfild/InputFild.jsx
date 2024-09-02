/* eslint-disable react/prop-types */
import { useState } from "react";
import "./InputFild.css";

export default function InputFild({ setList }) {
	const [inputText, setInputText] = useState("");
	const inputItem = (e) => {
		setInputText(e.target.value);
	}

	const addItem = () => {
		if (inputText.trim().length < 2) {
			alert(inputText.trim() === ''
				? '내용을 입력해주세요'
				: '2글자 이상 입력해주세요');

			return;
		}

		setList((prev) => {
			const newList = [inputText, ...prev];
			localStorage.setItem('tripLists', JSON.stringify(newList));
			return newList;
		});
		setInputText('');
	}

	const handleKeyUp = (e) => {
		if (e.key === 'Enter') {
			addItem();
		}
	}

	return (
		<div className="inputfild mw">
			<input
				value={inputText}
				type="text"
				placeholder="여행지를 입력해주세요"
				onChange={inputItem}
				onKeyUp={handleKeyUp}
			></input>
			<button onClick={addItem}>추가</button>
		</div>
	);
}
