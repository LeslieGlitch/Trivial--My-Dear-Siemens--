import type { NextPage } from "next";
import React, { useState, useEffect} from "react";

const PageComponentQuestion: NextPage = () => {

    interface QuestionProps {
        question: string;
    }

    const QuestionComponent = (props: QuestionProps) => {

        const [count, setCount] = useState(0);
        useEffect(() => {
            setCount(1);
        }, []);

        return (
            <h1 onClick={() => setCount(count + 1)}>
                The question is "{props.question}",
                and the counter shows {count}
            </h1>
        );
    };

    return (<QuestionComponent question="What is the answer to this question?" />);
};
