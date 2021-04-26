import React, { useState } from "react";
import axios from "axios";

const MemoComponent = () => {
    const [text, setText] = useState({
        title: "",
        content: "",
    });

    const { title, content } = text;

    const onChange = (e) => {
        const nextForm = {
            ...text,
            [e.target.name]: e.target.value,
        };
        setText(nextForm);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        let body = {
            title,
            content,
        };

        console.log(body);

        axios.post("/api/memos/memo", body).then((response) => {
            console.log(response.data);
        });
    };

    return (
        <div>
            <form action="" onSubmit={onSubmit}>
                <input
                    type="text"
                    name="title"
                    placeholder="제목"
                    value={title}
                    onChange={onChange}
                />
                <input
                    type="text"
                    name="content"
                    placeholder="내용"
                    value={content}
                    onChange={onChange}
                />
                <button type="sumbit"> 등록 </button>
            </form>
        </div>
    );
};

export default MemoComponent;