
import React, { FC } from 'react'
import ReactQuill from 'react-quill'
import { QuillEditorProps } from './Editor.types'
import 'react-quill/dist/quill.snow.css'

const QuillModules = {
    toolbar: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ font: [] }],
        [{ size: [] }],
        [{ 'color': [] }, { 'background': [] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
            // { List: "unordered " },
            // { List: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
        ],
        ["link", "image", "video"],
    ],
};


const QuillEditor: FC<QuillEditorProps> = ({ onChange, value }) => {
    return (
        <ReactQuill
            className="react-quill-editor"
            theme="snow"
            value={value}
            onChange={onChange}
            modules={QuillModules}
        />
    )
}

export default QuillEditor