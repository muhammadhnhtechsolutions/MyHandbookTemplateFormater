"use Client"
import React, { useState, useRef, useMemo } from 'react';
import JoditEditor,{Jodit} from 'jodit-react';

const TextEditor = ({ placeholder,charLimit,value,onChange }) => {
	const editor = useRef(null);
	const [content, setContent] = useState('');
	const [blockEnter, setBlockEnter] = useState(false);
    
	const config = useMemo(
		() => ({
			readonly: false, // all options from https://xdsoft.net/jodit/docs/,
			placeholder: placeholder || 'Start typings...',
			limitChars: charLimit,
			limitHTML: false
		}),
		[placeholder,charLimit,blockEnter]
	);

	const handleText = (e)=>{
		
		


	}
	return (
		<div onKeyUp={handleText}>
		<JoditEditor
			ref={editor}
			value={value}
			config={config}
			tabIndex={1} // tabIndex of textarea
			// onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
			onChange={onChange}
			
			// onInit={handleEditorInit}
			// onKeyDown={handleLimitReached}
			// key={handleText}
			
		/>
		</div>
	);
};
export default TextEditor;